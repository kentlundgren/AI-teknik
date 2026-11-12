# Rangordning med databas: Supabase i AI-teknik

**Version:** 1.0 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren

Beskriver hur sidan [AI i proportion](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html) kan kopplas till en databas så att läsare kan rangordna tio frågor, välja att skriva sitt namn och se gruppens gemensamma rangordning. Tekniken är den som användes i Samrådsguiden ([supabase.md](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md)), men gjord för flera omröstningar i samma projekt. Uppgifter om Supabase är hämtade ur deras prissida och dokumentation 2026-11-12. Kontrollera mot [supabase.com/docs](https://supabase.com/docs) innan något beslut bygger på dem.

## 1. Läget just nu

| Del | Status |
|---|---|
| Sidan, koden och SQL-filen | Klara och provade utan databas |
| Supabase-projekt och SQL körd | **Inte gjort.** Det är dina steg (avsnitt 4), eftersom de kräver ditt konto. |
| `rangordning_config.js` | Tom. Då visar sidan bara läsarens egen ordning (sparas i webbläsaren), utan påhittade röster. |

## 2. Är Supabase bäst och smidigast?

För den här uppgiften, ja. Sidan ligger på GitHub Pages och kan inte spara något själv. Den behöver en tjänst som tar emot röster från webbläsaren utan inloggning, och som kan skyddas med regler i databasen. Jämförelse:

| | **Supabase** | **Firebase** | **Google Sheets med Apps Script** |
|---|---|---|---|
| Passar uppgiften | Ja: SQL-regler, funktioner och en publik nyckel gör att sidan kan skriva utan inloggning | Ja, men skyddet sätts i konsolen med egna regelspråk, och du behöver oftast inloggning eller regler per dokument | Går, men det finns inget riktigt skydd mot att någon skriver över data, och namnen ligger i ett kalkylblad |
| Allt i en fil som går att granska | Ja, `supabase_rangordning.sql` | Nej, reglerna sätts i konsolen | Nej |
| Du har redan använt det | Ja, projektet för Samrådsguiden | Ja, Bjerred | Nej |
| Gratisnivå | 500 MB databas, 5 GB trafik, 2 aktiva projekt. **Projektet pausas efter en veckas inaktivitet.** | Finns | Finns |
| Kontroll av uppgiften | Supabases [prissida](https://supabase.com/pricing) och [Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq), lästa 2026-11-12 | Kents egen beskrivning (Codex, `supabase.md`, avsnitt 5) | Min kännedom, inte kontrollerad |

**Det som kan bita:** ett gratisprojekt som ingen använt på en vecka pausas, och sidan visar då "Det går inte att nå databasen" tills du väcker projektet med ett klick i Supabase. För en sida som skickats till en styrelse kan det hända. Pro-planen (från 25 USD per månad) har ingen paus. Det finns också inga säkerhetskopior på gratisnivån, så exportera rösterna när omröstningen är klar.

## 3. Så fungerar det

- Webbläsaren får en slumpad nyckel (token) och sparar den. Den är läsarens "lösenord" till den egna rösten.
- Sidan anropar fem funktioner i databasen: hämta röster, hämta status, spara röst, ta bort min röst och nollställ (med adminkod). Tabellerna är låsta, så sidan kan aldrig läsa nycklarna.
- Gruppens rangordning är medelplatsen över alla röster. Läsaren ser den direkt, utan att sidan laddas om, och sidan hämtar om rösterna var 15:e sekund.
- Alla indata kontrolleras i databasen: bara kända post-id, alla poster exakt en gång, rensat namn (högst 40 tecken), tak på antal röster.

## 4. Steg för steg (du gör)

1. **Välj projekt.** Du har ett gratisprojekt (`samradsguiden`, region West EU) och får ha två aktiva. Två vägar: (a) **återanvänd det**, eftersom tabellerna här heter `rang_…` och inte krockar med Samrådsguidens `rangordning_…`, eller (b) skapa ett nytt projekt om du vill hålla sidorna åtskilda. Välj region *Europe*, kryssa ur *Automatically expose new tables* och kryssa i *Enable automatic RLS* (som i Samrådsguiden).
2. **Kör SQL-filen.** I projektet: **SQL Editor**, **New query**. Klistra in hela [supabase_rangordning.sql](supabase_rangordning.sql) och tryck **Run**. Filen skapar tabellerna, funktionerna och omröstningen `ai_proportion_hot10`. Den går att köra om.
3. **Sätt en adminkod** (för knappen *nollställ*). Välj en kod på minst tolv tecken som du inte använder någon annanstans, och kör det sista kommandot i SQL-filen med din kod i stället för `DIN-KOD-HÄR`. Skriv inte koden i chatten eller i någon fil i repot. Radera texten ur SQL Editor efteråt.
4. **Koppla sidan.** Öppna `rangordning_config.js` och fyll i `supabaseUrl` (projektets adress, `https://PROJEKT.supabase.co`) och `anonKey` (den **publika** nyckeln, ofta `sb_publishable_…`, under **Connect** eller **Project Settings, API Keys**). Lägg **aldrig** in `service_role` eller `secret`. Är du osäker kan du skicka mig adressen och den publika nyckeln, så fyller jag i dem.
5. **Provkör** (avsnitt 5), nollställ provrösterna och pusha.
6. **Säkerhetskontroll.** I projektet: **Advisors** (Security). Tabellerna `rang_omrostning` och `rang_rost` ska ha Row Level Security på. Dokumentationen säger att en tabell utan RLS i ett öppet schema kan läsas och skrivas av vem som helst ([Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)).

## 5. Provkörning

| Prov | Förväntat |
|---|---|
| Öppna sidan, flytta en rad | "Sparat", och gruppens rangordning visar 1 röst |
| Öppna sidan i en privat flik, flytta en rad | 2 röster inom 15 sekunder |
| Skriv ett namn | Namnet syns under gruppens lista |
| Ta bort min röst | Rösten och namnet försvinner |
| Läs tabellen direkt via API:et med den publika nyckeln | Nekas (HTTP 401) |

Första kommandot kan provas så här (byt `PROJEKT` och `NYCKEL`). Svaret ska innehålla `antal`:

```bash
curl -s -X POST "https://PROJEKT.supabase.co/rest/v1/rpc/rang_hamta_status" -H "apikey: NYCKEL" -H "Content-Type: application/json" -d "{\"p_omrostning\":\"ai_proportion_hot10\"}"
```

## 6. Integritet och säkerhet

- **Namn är personuppgifter.** Ett namn visas öppet för alla som besöker sidan och lagras hos Supabase (EU om du valt Europe). Sidan säger det vid fältet. Läsaren kan ta bort sin röst, och du kan radera enstaka rader (se SQL-filen). Samla inga e-postadresser.
- **Öppen sida, inte en säker omröstning.** Vem som helst med länken kan rösta, och den som rensar webbläsaren kan rösta igen. Gruppens ordning är ett underlag för samtal och inget beslut.
- **Publik nyckel.** Den ligger i `rangordning_config.js` och syns för alla. Det är avsett. Hemliga nycklar och adminkoden ska aldrig ligga i repot.
- **Rösterna är offentliga** på sidan så länge omröstningen är öppen. Stäng den med kommandot i SQL-filen om du vill frysa resultatet.

## 7. Så lägger du till en ny omröstning

Lägg en rad i `rang_omrostning` med ett nytt id och postlistan (kommandot längst ned i SQL-filen), gör en sida med en tabell vars rader har `data-id` och `data-titel`, och en behållare `<div id="rangordning" data-omrostning="mitt_id" data-tabell="TabellN">`. Ingen ny SQL-kod behövs. Hela mönstret är beskrivet i skillen `kent-interaktiv-rangordning`.

## Källor

- Supabase (u.å.) *Pricing & Fees*. Tillgänglig på: <https://supabase.com/pricing> (Hämtad: 12 november 2026). *(Gratisnivåns gränser och pausen efter en veckas inaktivitet.)*
- Supabase (u.å.) *Billing FAQ*. Tillgänglig på: <https://supabase.com/docs/guides/platform/billing-faq> (Hämtad: 12 november 2026). *(Två aktiva gratisprojekt, pausade räknas inte.)*
- Supabase (u.å.) *Row Level Security*. Tillgänglig på: <https://supabase.com/docs/guides/database/postgres/row-level-security> (Hämtad: 12 november 2026). *(Varför RLS ska vara på och grants återkallas.)*
- Lundgren, K. (2026) *Supabase i Samrådsguiden*. Tillgänglig på: <https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md> (Hämtad: 12 november 2026). *(Förebilden: skapande av konto och projekt, adminkod och provkörning, med bilder.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF/databas
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF\databas`
