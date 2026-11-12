# Rangordning med databas: Supabase i AI-teknik

**Version:** 1.4 · **Datum:** 2026-11-13 · **Avsändare:** Kent Lundgren
**Se också:** [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md) berättar hur uppkopplingen gick till, steg för steg med skärmdumpar, och hur en andra lista lades till. Det här dokumentet beskriver tekniken, reglerna och hur projektet återanvänds.

Beskriver hur sidan [AI i proportion](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html) kan kopplas till en databas så att läsare kan rangordna tio frågor, välja att skriva sitt namn och se gruppens gemensamma rangordning. Tekniken är den som användes i Samrådsguiden ([supabase.md](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md)), men gjord för flera omröstningar i samma projekt. Uppgifter om Supabase är hämtade ur deras prissida och dokumentation 2026-11-12. Kontrollera mot [supabase.com/docs](https://supabase.com/docs) innan något beslut bygger på dem.

## 1. Läget just nu

| Del | Status |
|---|---|
| Sidan, koden och SQL-filen | Klara och provade utan databas |
| Supabase-projekt och SQL körd | **Inte gjort.** Det är dina steg (avsnitt 4), eftersom de kräver ditt konto. |
| `rangordning_config.js` | Ifylld med det befintliga projektets adress och publika nyckel (samma som i Samrådsguiden). Projektets adress gick inte att slå upp från min dator 2026-11-12, se avsnitt 2b. Sidan tål det: den sparar läsarens ordning i webbläsaren tills databasen svarar. |

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

## 2b. Att återanvända ett befintligt projekt: hur, varför, hur många gånger och när <a id="aterbruk"></a>

**Beslut 2026-11-12:** rangordningen på AI i proportion använder samma Supabase-projekt som Samrådsguiden (`samradsguiden`, region West EU, Irland, gratisplanen). Kent bestämde det.

### Hur det görs

1. **Nya saker bredvid de gamla.** SQL-filen skapar tabellerna `rang_omrostning` och `rang_rost` och fem funktioner som heter `rang_…`. Den rör inga av Samrådsguidens tabeller eller funktioner (`rangordning_roster`, `hamta_roster` och de andra), och den raderar eller ändrar inget som finns. Filen går att köra om.
2. **Varje omröstning är en rad.** I `rang_omrostning` har varje omröstning ett eget id (här `ai_proportion_hot10`) och sin egen postlista. Rösterna i `rang_rost` hör till ett omröstnings-id, och funktionerna tar id:t som parameter. Två omröstningar kan därför aldrig blandas ihop.
3. **Sidan pekar på samma projekt.** `rangordning_config.js` har projektets adress och publika nyckel. Samma två värden fungerar för alla sidor som använder projektet, eftersom åtkomsten styrs av databasens regler och inte av nyckeln.
4. **Du kör SQL-filen en gång** i projektets SQL Editor (steg 2). Det är det enda som återstår i databasen.

### Varför det är rimligt att återanvända

- **Samma ägare, samma sorts data.** Allt är anonyma rangordningar med frivilliga namn, hos samma person (dig) och i samma EU-region. Då behövs ingen separation av juridiska skäl.
- **Ingen krock.** Prefixet `rang_` håller objekten åtskilda, och Samrådsguidens omröstning om MAXIMA är stängd (sista dag var 2026-11-06).
- **Samma skydd.** Projektet är redan uppsatt som i steg 1: tabeller exponeras inte av sig själva och Row Level Security är på. De nya tabellerna låses på samma sätt av SQL-filen.
- **Gratisnivån räcker.** Du får ha två aktiva gratisprojekt ([Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq)), men du behöver inte använda det andra för det här.
- **Mindre att underhålla.** Ett projekt att väcka, ett lösenord att hålla reda på och en adress i alla konfigurationsfiler.

### Hur många gånger kan man återanvända det?

Det finns ingen gräns för antalet omröstningar eller sidor. Varje ny omröstning är en rad i en tabell, och prissidan anger **obegränsat antal API-anrop** på gratisnivån. Det som begränsar är de resurser som alla omröstningar delar ([prissidan](https://supabase.com/pricing), läst 2026-11-12):

| Delad resurs på gratisnivån | Gräns | Vad det betyder här |
|---|---|---|
| Databasens storlek | 500 MB | En röst med tio poster är bara några hundra byte. Min grova uppskattning, inte mätt, är att det ryms hundratusentals röster. |
| Trafik ut (egress) | 5 GB per månad | **Den som kan ta slut först.** Sidan hämtar alla röster var 15:e sekund. Med 1 000 röster blir varje hämtning ungefär 150 kB, så en mängd öppna flikar kan förbruka trafiken. Min uppskattning, inte mätt. |
| Aktiva projekt | 2 | Du har ett i bruk här. |
| Inaktivitet | **Paus efter en vecka** | Pausen gäller hela projektet, och alla sidor som använder det slutar fungera tills du väcker det. |

Tumregel: några omröstningar med några hundra röster var är inga problem. Räknar du med tusentals röster i en omröstning bör sidan hämta bara medelplatserna i stället för alla röster (en ny funktion i SQL-filen), och då är egress inte längre ett problem. Det görs när behovet finns.

### När kan man återanvända, och när bör man skapa ett nytt projekt?

| Återanvänd när… | Skapa ett eget projekt när… |
|---|---|
| Du är ensam ägare och administratör av all data | Någon annan ska ha eget ansvar eller egen administration |
| Omröstningarna är anonyma eller har bara frivilliga namn | Datan är känslig (hälsa, ekonomi, personnummer, adresser) |
| Alla ligger i samma EU-region och under samma villkor | En annan organisation är personuppgiftsansvarig för datan |
| Skyddet är detsamma: låsta tabeller och funktioner | Du behöver andra regler, till exempel inloggade användare |
| Du kan leva med att en paus eller ett fel påverkar alla | Sidan måste vara uppe oavsett (då Pro-plan och ett eget projekt) |
| Omröstningarna är små eller medelstora | En enskild omröstning väntas bli mycket stor eller viral |

Ett sätt att tänka: **ett projekt per ägare och risknivå, inte ett per sida.**

### Kan jag göra det många gånger, till exempel när något ska rangordnas?

Ja. För varje ny rangordning gör du bara tre saker, utan att röra databasens uppsättning:

1. Lägg en rad i `rang_omrostning` med ett nytt id och postlistan (kommandot längst ned i SQL-filen).
2. Gör sidan med tabellen och behållaren (skillen `kent-interaktiv-rangordning` beskriver det).
3. Använd samma `rangordning_config.js`.

Rangordningar som ska hållas hemliga eller ligga hos någon annan ska däremot inte hamna här.

### Läget just nu

**Projektet är pausat** (bekräftat i Supabases dashboard 2026-11-12, organisationen `samradsguiden`, projektet `samradsquiden`, region eu-west-1, gratisplanen). Det förklarar varför adressen `basgvwqqdbkwadfjzaxc.supabase.co` inte gick att slå upp från min dator: ett pausat projekt svarar inte. Det är alltså inte raderat. Enligt Supabases [Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq) kostar ett pausat projekt inget och räknas inte mot de två gratisprojekten.

**Så väcker du det:** öppna projektet från organisationssidan ([dashboard/org/vgxnypkoomlcwopoigwh](https://supabase.com/dashboard/org/vgxnypkoomlcwopoigwh)) eller direkt ([dashboard/project/basgvwqqdbkwadfjzaxc](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc)) och klicka på **Resume project**. Vänta tills det står **Healthy**. Supabases dashboard visar för det här projektet att all data, även säkerhetskopior, är säker, att det går att väcka till och med 7 december 2027 och att datan går att ladda ned efter det. Knappen heter **Resume project** (Restore används i Supabase för att återställa en säkerhetskopia, vilket är en annan åtgärd). Klicka inte på Upgrade to Pro.

**Därför pausas det:** gratisprojekt pausas efter en veckas inaktivitet ([prissidan](https://supabase.com/pricing)). Samrådsguidens omröstning stängdes 2026-11-06, och sedan dess har ingen använt projektet. Det händer igen om ingen besöker sidan på en vecka. Pro-planen har ingen paus.

**Sidan fungerar under tiden:** den sparar läsarens ordning i webbläsaren och skickar den när databasen svarar. En läsare ser då en banner om att databasen inte svarar just nu. Räknar du med besök med mer än en veckas mellanrum är det ett skäl att antingen väcka projektet före varje utskick eller välja Pro.

## 3. Så fungerar det

- Webbläsaren får en slumpad nyckel (token) och sparar den. Den är läsarens "lösenord" till den egna rösten.
- Sidan anropar fem funktioner i databasen: hämta röster, hämta status, spara röst, ta bort min röst och nollställ (med adminkod). Tabellerna är låsta, så sidan kan aldrig läsa nycklarna.
- Gruppens rangordning är medelplatsen över alla röster. Läsaren ser den direkt, utan att sidan laddas om, och sidan hämtar om rösterna var 15:e sekund.
- Alla indata kontrolleras i databasen: bara kända post-id, alla poster exakt en gång, rensat namn (högst 40 tecken), tak på antal röster.

## 4. Steg för steg (du gör)

1. **Projektet är valt: återanvänd `samradsguiden`** (avsnitt 2b). Kontrollera först att det lever (avsnitt 2b, Läget just nu). Ska du i stället skapa ett nytt projekt: välj region *Europe*, kryssa ur *Automatically expose new tables* och kryssa i *Enable automatic RLS* (som i Samrådsguiden).
2. **Kör SQL-filen.** I projektet: **SQL Editor**, **New query**. Klistra in hela [supabase_rangordning.sql](supabase_rangordning.sql) och tryck **Run**. Filen skapar tabellerna, funktionerna och omröstningen `ai_proportion_hot10`. Den går att köra om.
3. **Sätt en adminkod** (för knappen *nollställ*). Välj en kod på minst tolv tecken som du inte använder någon annanstans, och kör det sista kommandot i SQL-filen med din kod i stället för `DIN-KOD-HÄR`. Skriv inte koden i chatten eller i någon fil i repot. Radera texten ur SQL Editor efteråt.
4. **Koppla sidan.** **Redan gjort** för projektet `samradsguiden`: `rangordning_config.js` har adressen och den publika nyckeln. Skapar du ett nytt projekt öppnar du `rangordning_config.js` och fyller i `supabaseUrl` (projektets adress, `https://PROJEKT.supabase.co`) och `anonKey` (den **publika** nyckeln, ofta `sb_publishable_…`, under **Connect** eller **Project Settings, API Keys**). Lägg **aldrig** in `service_role` eller `secret`. Är du osäker kan du skicka mig adressen och den publika nyckeln, så fyller jag i dem.
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

**Hur uppkopplingen gick till, med skärmdumpar:** [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md).

## 5b. Genvägar mellan sidan och Supabase <a id="genvagar"></a>

**Från sidan till Supabase.** Längst upp på [AI i proportion](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html), under versionsraden, finns en liten rad med länkar till [Supabase-projektet](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc), [SQL Editor](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc/sql/new) och [adminkommandona](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_admin.sql). Länkarna ger ingen åtkomst: dashboarden kräver inloggning, och projektkoden är ändå publik i `rangordning_config.js`. Raden döljs vid utskrift. Hemliga nycklar och adminkoden ligger aldrig i en länk.

**Från Supabase tillbaka till sidan.** Supabase har inget fält för en klickbar länk, så tre sätt fungerar:
1. Filen [`supabase_admin.sql`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_admin.sql) har sidans adress i första raderna. Klistra in hela filen i SQL Editor och klicka **Save**, och döp frågan till "AI i proportion: adminkommandon". Adressen är text i kommentaren, inte en länk, men går att kopiera.
2. Kör de två raderna `comment on table` i samma fil. Då står tillbakaadressen vid tabellerna `rang_omrostning` och `rang_rost` i Table Editor och Database.
3. Lägg ett bokmärke i Chrome i en mapp, till exempel "AI i proportion", med sidan, SQL Editor och projektet. Det är det enda helt klickbara sättet åt det hållet.

Kör bara en rad i taget i SQL Editor: markera raden och klicka Run, annars körs hela filen, inklusive `delete`.

## 6. Integritet och säkerhet

- **Namn är personuppgifter.** Ett namn visas öppet för alla som besöker sidan och lagras hos Supabase (EU om du valt Europe). Sidan säger det vid fältet. Läsaren kan ta bort sin röst, och du kan radera enstaka rader (se SQL-filen). Samla inga e-postadresser.
- **Öppen sida, inte en säker omröstning.** Vem som helst med länken kan rösta, och den som rensar webbläsaren kan rösta igen. Gruppens ordning är ett underlag för samtal och inget beslut.
- **Publik nyckel.** Den ligger i `rangordning_config.js` och syns för alla. Det är avsett. Hemliga nycklar och adminkoden ska aldrig ligga i repot.
- **Rösterna är offentliga** på sidan så länge omröstningen är öppen. Stäng den med kommandot i SQL-filen om du vill frysa resultatet.

## 7. Så lägger du till en ny omröstning (en lista att rangordna) <a id="ny-omrostning"></a>

Exempel: sidan [Hot från agentisk AI](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/agentisk.html) lades till 2026-11-13 som andra lista i samma projekt, utan någon ny tabell eller funktion. Så gör du:

1. **Välj ett id** för omröstningen (små bokstäver, siffror och understreck, 3 till 40 tecken), till exempel `agentisk_ai_hot10`, och ett id för varje post, till exempel `h01` till `h10`.
2. **Gör sidan.** En tabell vars rader har `data-id` och `data-titel`, en cell med klassen `rg-info` som förklarar posten, och en behållare `<div id="rangordning" data-omrostning="agentisk_ai_hot10" data-tabell="Tabell1">`. Lägg in `rangordning.css`, `rangordning_config.js` och `rangordning.js` som på [proportion.html](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/proportion.html). Saknar tabellen en kolumn med klassen `rg-efter-rost` visas ingen knapp *Visa min bedömning*.
3. **Skriv en liten SQL-fil** som lägger en rad i `rang_omrostning` med id, titel och postlistan. Exempel: [supabase_agentisk_ai.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_agentisk_ai.sql). Filen skapar inga tabeller, rör inga röster och går att köra om. Postlistan ska vara exakt `data-id` i tabellen. Kör den en gång i SQL Editor, som i [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md#lista2).
4. **Kontrollera** att `rang_hamta_status` för det nya id:t svarar `antal: 0`, och prova att rösta en gång. Radera provrösten med `delete from public.rang_rost where omrostning = 'det_nya_idt';`.

Hela mönstret, med beställningsmall och arbetsgång, finns i skillen `kent-interaktiv-rangordning`.

### Vart informationen hör <a id="vart-informationen-hor"></a>

| Vad | Var det skrivs |
|---|---|
| Teknik, regler, återbruk, gränser | Det här dokumentet (supabase.md) |
| Berättelsen om vad som gjordes, med skärmdumpar | [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md) |
| SQL som skapar tabellerna (en gång per projekt) | [supabase_rangordning.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) |
| SQL som lägger en ny lista | En egen fil per lista, till exempel `supabase_agentisk_ai.sql` |
| Adminkommandon (nollställa, stänga, sätta kod) | [supabase_admin.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_admin.sql) |
| Arbetsgång och beställningsmall för Claude | Skillen `kent-interaktiv-rangordning` |
| Sidans innehåll och källor | Sidan själv, med uppgifterna i `data/siffror.json` (genereras av `gen_siffror.py`) |
| Det som återstår | Förbättringsregistret, `Forbattringar_261112.md` |

## Källor

- Supabase (u.å.) *Pricing & Fees*. Tillgänglig på: <https://supabase.com/pricing> (Hämtad: 12 november 2026). *(Gratisnivåns gränser och pausen efter en veckas inaktivitet.)*
- Supabase (u.å.) *Billing FAQ*. Tillgänglig på: <https://supabase.com/docs/guides/platform/billing-faq> (Hämtad: 12 november 2026). *(Två aktiva gratisprojekt, pausade räknas inte.)*
- Supabase (u.å.) *Row Level Security*. Tillgänglig på: <https://supabase.com/docs/guides/database/postgres/row-level-security> (Hämtad: 12 november 2026). *(Varför RLS ska vara på och grants återkallas.)*
- Lundgren, K. (2026) *Supabase i Samrådsguiden*. Tillgänglig på: <https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md> (Hämtad: 12 november 2026). *(Förebilden: skapande av konto och projekt, adminkod och provkörning, med bilder.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF/databas
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF\databas`
