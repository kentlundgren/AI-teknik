-- Hot från agentisk AI: en ny omröstning (lista att rangordna) i samma Supabase-projekt.
-- Kräver att supabase_rangordning.sql redan är körd (tabellerna och funktionerna finns).
-- Kör hela filen en gång: Dashboard > SQL Editor > New query > klistra in > Run.
-- Filen går att köra om. Den ändrar titel och postlista men rör inga röster.
-- Sidan: https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/agentisk.html
-- Postlistan ska vara exakt data-id i Tabell 1 på sidan (h01 till h10).

insert into public.rang_omrostning (id, titel, poster, frist, max_roster)
values ('agentisk_ai_hot10',
        'Hot från agentisk AI: rangordna tio hot, plats 1 är värst',
        array['h01','h02','h03','h04','h05','h06','h07','h08','h09','h10'],
        null, 1000)
on conflict (id) do update
  set titel = excluded.titel, poster = excluded.poster;

-- Kontroll: ska visa två omröstningar (ai_proportion_hot10 och agentisk_ai_hot10).
select id, titel, array_length(poster, 1) as antal_poster, stangd, frist, max_roster from public.rang_omrostning order by id;

-- Nyttiga kommandon (byt id vid behov). Kör en rad i taget: markera raden och klicka Run selected.
--   Se antal röster:             select count(*) from public.rang_rost where omrostning = 'agentisk_ai_hot10';
--   Töm provrösterna:            delete from public.rang_rost where omrostning = 'agentisk_ai_hot10';
--   Stäng:                       update public.rang_omrostning set stangd = true  where id = 'agentisk_ai_hot10';
--   Öppna igen:                  update public.rang_omrostning set stangd = false where id = 'agentisk_ai_hot10';
--   Sätt adminkod (byt texten):  update public.rang_omrostning set admin_kod_hash = encode(sha256(convert_to('DIN-KOD-HÄR','UTF8')),'hex') where id = 'agentisk_ai_hot10';
