-- AI i proportion: adminkommandon för Supabase (projektet samradsquiden)
-- Spara hela filen som en fråga i SQL Editor (Save, namn: "AI i proportion: adminkommandon").
-- Tillbaka till sidan: https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html
-- Beskrivning av tekniken: https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md
--
-- Markera BARA den rad du vill köra och klicka Run (Ctrl+Enter kör det som är markerat).
-- Skriv aldrig adminkoden i chatten eller i en fil som läggs i repot. Byt DIN-KOD-HÄR bara i SQL Editor.

-- ---------- 1. En gång: lägg tillbakaadressen i databasen (syns i Table Editor och Database) ----------
comment on table public.rang_omrostning is 'Omröstningar för sidan AI i proportion. Tillbaka till sidan: https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html';
comment on table public.rang_rost is 'Röster, en rad per läsare. Tillbaka till sidan: https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html';

-- ---------- 2. Se läget ----------
select id, titel, stangd, frist, max_roster from public.rang_omrostning;
select count(*) as antal_roster from public.rang_rost where omrostning = 'ai_proportion_hot10';
select namn, andrad, ordning from public.rang_rost where omrostning = 'ai_proportion_hot10' order by andrad;

-- ---------- 3. Stäng, öppna, sätt sista dag ----------
update public.rang_omrostning set stangd = true  where id = 'ai_proportion_hot10';
update public.rang_omrostning set stangd = false where id = 'ai_proportion_hot10';
update public.rang_omrostning set frist = '2026-12-31 23:59:59+01' where id = 'ai_proportion_hot10';
update public.rang_omrostning set frist = null where id = 'ai_proportion_hot10';

-- ---------- 4. Ta bort röster ----------
delete from public.rang_rost where omrostning = 'ai_proportion_hot10' and namn = 'Namn att ta bort';
-- Töm hela omröstningen (till exempel provrösterna före publicering):
delete from public.rang_rost where omrostning = 'ai_proportion_hot10';

-- ---------- 5. Sätt adminkod (byt texten, kör en gång) ----------
update public.rang_omrostning
   set admin_kod_hash = encode(sha256(convert_to('DIN-KOD-HÄR','UTF8')),'hex')
 where id = 'ai_proportion_hot10';

-- ---------- 6. Exportera rösterna när omröstningen är klar ----------
-- Kör raden nedan och klicka Export > Download CSV ovanför resultatet.
select namn, andrad, ordning from public.rang_rost where omrostning = 'ai_proportion_hot10' order by andrad;
