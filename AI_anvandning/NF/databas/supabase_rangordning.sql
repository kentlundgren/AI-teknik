-- Rangordning med flera omröstningar i samma Supabase-projekt (AI-teknik, AI_anvandning/NF/databas).
-- Kör hela filen en gång: Dashboard > SQL Editor > New query > klistra in > Run. Filen går att köra om utan att röster raderas.
-- Beskrivning steg för steg: supabase.md i samma mapp.
--
-- Idé (samma som i Samrådsguiden, Codex/Fritid/NF/Samradsguiden/supabase_setup.sql, men med flera omröstningar):
--   * Ingen inloggning. Webbläsaren har en hemlig slumpnyckel (token) och skickar den till rang_spara_rost().
--     Databasen lagrar bara en kontrollsumma av nyckeln, aldrig själva nyckeln.
--   * Tabellerna är låsta för anonyma besökare. All läsning och skrivning går via funktionerna längst ned.
--   * Funktionerna kontrollerar indata i databasen, inte i webbläsaren: bara kända post-id, alla poster exakt en gång, rensat namn.
--   * Namnen är frivilliga och visas öppet. Namn är personuppgifter: se avsnittet om integritet i supabase.md.
-- Tabell- och funktionsnamnen börjar på rang_ så att de inte krockar med andra sidors tabeller (till exempel rangordning_roster i Samrådsguiden).

-- 1. Omröstningar: en rad per omröstning --------------------------------------------------------
create table if not exists public.rang_omrostning (
  id              text primary key check (id ~ '^[a-z0-9_]{3,40}$'),   -- t.ex. ai_proportion_hot10
  titel           text        not null,
  poster          text[]      not null check (array_length(poster, 1) between 2 and 50),   -- giltiga post-id, t.ex. {f01,f02,...}
  frist           timestamptz,                                          -- null = ingen sista dag
  stangd          boolean     not null default false,
  max_roster      int         not null default 1000,
  admin_kod_hash  text                                                  -- kontrollsumma av adminkoden, sätts av dig
);

-- 2. Röster: en rad per webbläsare och omröstning ----------------------------------------------
create table if not exists public.rang_rost (
  omrostning  text        not null references public.rang_omrostning(id) on delete cascade,
  token_hash  text        not null,                    -- sha256 av webbläsarens hemliga nyckel
  namn        text,                                     -- frivilligt, null = anonym
  ordning     jsonb       not null,                     -- lista med post-id i vald ordning
  skapad      timestamptz not null default now(),
  andrad      timestamptz not null default now(),
  primary key (omrostning, token_hash),
  constraint rang_namn_langd check (namn is null or char_length(namn) <= 40),
  constraint rang_ordning_lista check (jsonb_typeof(ordning) = 'array' and jsonb_array_length(ordning) between 2 and 50)
);

-- 3. Lås tabellerna: Row Level Security på och inga öppna regler för anonyma -----------------
alter table public.rang_omrostning enable row level security;
alter table public.rang_rost       enable row level security;
revoke all on public.rang_omrostning from anon, authenticated;
revoke all on public.rang_rost       from anon, authenticated;

-- 4. Funktioner som sidan får anropa ------------------------------------------------------------
-- 4a. Hämta alla röster i en omröstning (utan nycklar). "id" är en kort, offentlig beteckning.
create or replace function public.rang_hamta_roster(p_omrostning text)
returns table (id text, namn text, ordning jsonb, andrad timestamptz)
language sql security definer set search_path = public stable
as $$
  select left(r.token_hash, 10), r.namn, r.ordning, r.andrad
  from public.rang_rost r
  where r.omrostning = p_omrostning
  order by r.andrad desc;
$$;

-- 4b. Hämta status: sista dag, om omröstningen är stängd och antal röster.
create or replace function public.rang_hamta_status(p_omrostning text)
returns table (frist timestamptz, stangd boolean, antal bigint)
language sql security definer set search_path = public stable
as $$
  select o.frist,
         (o.stangd or (o.frist is not null and now() > o.frist)),
         (select count(*) from public.rang_rost r where r.omrostning = o.id)
  from public.rang_omrostning o
  where o.id = p_omrostning;
$$;

-- 4c. Spara (eller uppdatera) sin röst. Returnerar den offentliga beteckningen.
create or replace function public.rang_spara_rost(p_omrostning text, p_token uuid, p_namn text, p_ordning jsonb)
returns text
language plpgsql security definer set search_path = public
as $$
declare
  v_o     public.rang_omrostning%rowtype;
  v_hash  text;
  v_namn  text;
  v_antal bigint;
begin
  select * into v_o from public.rang_omrostning where id = p_omrostning;
  if not found then raise exception 'Okänd omröstning'; end if;
  if v_o.stangd or (v_o.frist is not null and now() > v_o.frist) then raise exception 'Omröstningen är stängd'; end if;
  if p_token is null then raise exception 'Nyckel saknas'; end if;

  if p_ordning is null or jsonb_typeof(p_ordning) <> 'array' or jsonb_array_length(p_ordning) <> array_length(v_o.poster, 1) then
    raise exception 'Ogiltig ordning';
  end if;
  -- Varje post ska vara en text som finns bland omröstningens poster
  if exists (select 1 from jsonb_array_elements(p_ordning) e
             where jsonb_typeof(e) <> 'string' or not ((e #>> '{}') = any (v_o.poster))) then
    raise exception 'Ogiltigt post-id';
  end if;
  -- Alla poster exakt en gång (ingen dubblett, ingen saknas)
  if (select count(distinct (e #>> '{}')) from jsonb_array_elements(p_ordning) e) <> array_length(v_o.poster, 1) then
    raise exception 'Dubbletter i ordningen';
  end if;

  -- Namn: rensa styrtecken, klipp vid 40 tecken, tomt blir anonymt
  v_namn := nullif(btrim(regexp_replace(coalesce(p_namn, ''), '[[:cntrl:]]', '', 'g')), '');
  if v_namn is not null then v_namn := left(v_namn, 40); end if;

  v_hash := encode(sha256(convert_to(p_token::text, 'UTF8')), 'hex');

  -- Skydd mot översvämning med nya röster
  if not exists (select 1 from public.rang_rost where omrostning = p_omrostning and token_hash = v_hash) then
    select count(*) into v_antal from public.rang_rost where omrostning = p_omrostning;
    if v_antal >= v_o.max_roster then raise exception 'För många röster'; end if;
  end if;

  insert into public.rang_rost (omrostning, token_hash, namn, ordning)
  values (p_omrostning, v_hash, v_namn, p_ordning)
  on conflict (omrostning, token_hash)
  do update set namn = excluded.namn, ordning = excluded.ordning, andrad = now();

  return left(v_hash, 10);
end;
$$;

-- 4d. Ta bort sin egen röst (den som har nyckeln kan radera sin rad, och därmed sitt namn).
create or replace function public.rang_radera_min_rost(p_omrostning text, p_token uuid)
returns void
language plpgsql security definer set search_path = public
as $$
begin
  delete from public.rang_rost
  where omrostning = p_omrostning
    and token_hash = encode(sha256(convert_to(p_token::text, 'UTF8')), 'hex');
end;
$$;

-- 4e. Administratör: nollställ alla röster i en omröstning med en egen kod.
-- Koden lagras som kontrollsumma. Så länge ingen kod är satt går det inte att nollställa via sidan.
create or replace function public.rang_nollstall(p_omrostning text, p_kod text)
returns int
language plpgsql security definer set search_path = public
as $$
declare
  v_hash  text;
  v_antal int;
begin
  select o.admin_kod_hash into v_hash from public.rang_omrostning o where o.id = p_omrostning;
  if v_hash is null or p_kod is null or encode(sha256(convert_to(p_kod, 'UTF8')), 'hex') <> v_hash then
    perform pg_sleep(2);                      -- bromsar gissning av koden
    raise exception 'Fel kod';
  end if;
  delete from public.rang_rost where omrostning = p_omrostning;
  get diagnostics v_antal = row_count;
  return v_antal;
end;
$$;

-- 5. Vem får anropa funktionerna: bara dessa fem, och bara via API:et -----------------------------
revoke all on function public.rang_hamta_roster(text)                       from public;
revoke all on function public.rang_hamta_status(text)                       from public;
revoke all on function public.rang_spara_rost(text, uuid, text, jsonb)      from public;
revoke all on function public.rang_radera_min_rost(text, uuid)              from public;
revoke all on function public.rang_nollstall(text, text)                    from public;
grant execute on function public.rang_hamta_roster(text)                    to anon, authenticated;
grant execute on function public.rang_hamta_status(text)                    to anon, authenticated;
grant execute on function public.rang_spara_rost(text, uuid, text, jsonb)   to anon, authenticated;
grant execute on function public.rang_radera_min_rost(text, uuid)           to anon, authenticated;
grant execute on function public.rang_nollstall(text, text)                 to anon, authenticated;

-- 6. Skapa omröstningen för sidan AI i proportion (tio poster). Går att köra om. --------------------
insert into public.rang_omrostning (id, titel, poster, frist, max_roster)
values ('ai_proportion_hot10',
        'AI i proportion: rangordna tio frågor som människor oroar sig för eller lider av',
        array['f01','f02','f03','f04','f05','f06','f07','f08','f09','f10'],
        null, 1000)
on conflict (id) do nothing;

-- Nyttiga kommandon senare (kör i SQL Editor när du behöver dem). Byt ut omröstningens id vid behov.
--   Se alla röster:              select namn, ordning, andrad from public.rang_rost where omrostning = 'ai_proportion_hot10' order by andrad desc;
--   Stäng omröstningen nu:       update public.rang_omrostning set stangd = true  where id = 'ai_proportion_hot10';
--   Öppna igen:                  update public.rang_omrostning set stangd = false where id = 'ai_proportion_hot10';
--   Sätt sista dag:              update public.rang_omrostning set frist = '2026-12-31 23:59:59+01' where id = 'ai_proportion_hot10';
--   Ta bort en enstaka röst:     delete from public.rang_rost where omrostning = 'ai_proportion_hot10' and namn = 'Namn att ta bort';
--   Töm omröstningen:            delete from public.rang_rost where omrostning = 'ai_proportion_hot10';
--   Sätt adminkod (byt texten):  update public.rang_omrostning set admin_kod_hash = encode(sha256(convert_to('DIN-KOD-HÄR','UTF8')),'hex') where id = 'ai_proportion_hot10';
--   Ny omröstning:               insert into public.rang_omrostning (id, titel, poster) values ('mitt_id', 'Titel', array['a','b','c']);
