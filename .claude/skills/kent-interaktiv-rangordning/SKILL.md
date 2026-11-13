---
name: kent-interaktiv-rangordning
description: >
  Kopplar på en interaktiv rangordning på en av Kents webbsidor: läsaren ordnar 2 till 50 poster (dra och släpp eller pilknappar),
  kan välja att skriva sitt namn, och sidan visar gruppens gemensamma rangordning som medelplats, via en Supabase-databas utan
  inloggning. Använd när Kent vill att läsare ska rangordna, rösta, prioritera eller välja mellan faktorer, hot, förslag eller
  frågor, med eller utan namn och databas, och när han säger "koppla på rangordningen", "låt läsaren rangordna", "som på
  AI i proportion" eller "som på Maxima-sidan". Innehåller beställningsmallen Kent kan fylla i, arbetsgången, testmetoden och
  säkerhets- och integritetsreglerna. Referensimplementation i AI-teknik, mappen AI_anvandning/NF.
metadata:
  type: process
  version: "1.3 (2026-11-13)"
---

# Interaktiv rangordning med valfritt namn och databas

Skillen låter Kent koppla på en rangordning på en sida på några minuter. Den beskriver vad som är färdigt, hur Kent beställer, vad Claude gör och vad Kent själv måste göra (konto och nyckel).

## Referensimplementation (kopiera, ändra inte på stället)

Allt ligger i `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF\` ([GitHub](https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF)):

| Fil | Vad |
|---|---|
| [`rangordning.js`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning.js) | Gränssnitt och logik: dra och släpp, pilknappar, valfritt namn, medelplats, slumpad startordning, läge utan databas, ?demo=1 |
| [`rangordning.css`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning.css) | Utseende i sidans färger (gult bara på namnfältet) |
| [`rangordning_config.js`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning_config.js) | Projektets adress och publika nyckel. Tom = bara den egna ordningen, ingen databas |
| [`databas/supabase_rangordning.sql`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) | Tabeller, regler och fem funktioner för flera omröstningar i samma projekt |
| [`databas/supabase.md`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md) | Steg för steg för Kent, jämförelse med alternativ, integritet |
| [`proportion.html`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/proportion.html) | Exempelsidan: behållaren, tabellen med posterna och kolumnerna |
| [`agentisk.html`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/agentisk.html) och [`databas/supabase_agentisk_ai.sql`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_agentisk_ai.sql) | Andra listan i samma projekt: en ny sida och en SQL-fil med en enda rad. Utan kolumnen `rg-efter-rost` visas ingen knapp Visa min bedömning. Berättelsen finns i [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md#lista2) |

Förebilden i Samrådsguiden (Codex-repot, `Fritid/NF/Samradsguiden/rangordning/` och `supabase.md`) har skapande av konto och projekt med bilder. Läs den när Kent ska skapa ett Supabase-projekt.

## Så beställer Kent (fyll i, eller beskriv fritt)

Kent behöver bara skriva det här. Saknas något frågar Claude (högst en fråga åt gången, med ett gissat svar).

1. **Sida:** vilken sida, och var på sidan rangordningen ska stå.
2. **Frågan:** vad läsaren ska rangordna, och vad plats 1 betyder ("värst", "viktigast", "mest angeläget").
3. **Posterna:** 2 till 50 stycken, med kort titel och en förklaring eller ett mått för varje (visas vid hovring, fokus och tryck).
4. **Namn:** frivilligt namn (standard), anonymt, eller inget namnfält.
5. **Resultat:** visa gruppens rangordning direkt (standard), eller dölj tills omröstningen är stängd.
6. **Egen bedömning:** vill Kent visa sin egen ordning? Den döljs då tills läsaren har rangordnat.
7. **Tid:** ingen sista dag (standard) eller ett datum.
8. **Databas:** samma Supabase-projekt som tidigare (standard, se Återbruk nedan), eller ett nytt. Börja utan databas om Kent inte hunnit skapa en.

**Exempel Kent kan klistra in:** "Använd skillen kent-interaktiv-rangordning. Lägg en rangordning på sidan X under rubriken Y. Läsaren ska ranka dessa sju förslag: [lista med en rad per förslag och en mening om varje]. Frivilligt namn, gruppens ordning ska visas, ingen sista dag, samma Supabase-projekt som AI i proportion."

## Claudes arbetsgång

1. **Fråga vid minsta tvekan** om posterna, vad plats 1 betyder och omröstningens id (små bokstäver, siffror och understreck, 3 till 40 tecken, till exempel `ai_proportion_hot10`).
2. **Kopiera** `rangordning.js`, `rangordning.css` och `rangordning_config.js` till sidans mapp (eller peka relativt om de redan finns). Ändra inte tekniken i kopian, bara det sidan behöver.
3. **Tabell med posterna.** En rad per post: `<tr data-id="f01" data-titel="Titel">`, en cell med klassen `rg-info` som förklarar posten (siffror och källor som vanligt), och valfritt celler med klassen `rg-efter-rost` (till exempel Kents egen bedömning), som visas först när läsaren har rangordnat. Tabellen har ett id och en numrerad rubrik enligt sidans regler.
4. **Behållare:** `<div id="rangordning" data-omrostning="OMROSTNINGENS_ID" data-tabell="TABELLENS_ID"></div>`. Placera den **före** tabellen med Kents egen ordning, så att den inte styr läsaren.
5. **I `<head>`:** `rangordning.css`, `rangordning_config.js` (utan `defer`, före skripten), `rangordning.js` (med `defer`).
6. **SQL:** skriv en egen liten SQL-fil för listan (mall: `supabase_agentisk_ai.sql`) som lägger en rad i `rang_omrostning` med id, titel och postlistan. Postlistan i SQL ska vara exakt `data-id` i tabellen. Ingen annan SQL behövs.
7. **Config:** fyll i `supabaseUrl` och `anonKey` när Kent har dem, annars lämna tomma. Sidan visar då bara läsarens egen ordning, med en banner som säger det.
8. **Testa lokalt** (se nedan), höj version och datum enligt Kents regler för sidor, uppdatera README och registret, och skriv i svaret vad Kent själv måste göra.

## Återbruk av Supabase-projektet (standard)

Använd Kents befintliga projekt (`samradsguiden`, region West EU) för nya rangordningar. Varje omröstning är en rad i `rang_omrostning`, och funktionerna tar omröstningens id, så omröstningar blandas aldrig ihop. Prefixet `rang_` krockar inte med Samrådsguidens tabeller. Det finns ingen gräns för antalet omröstningar. Det som begränsar är det de delar på gratisnivån: 500 MB databas, 5 GB trafik per månad och en paus av hela projektet efter en veckas inaktivitet.

**Återanvänd när** Kent är ensam ägare, datan är anonym eller har frivilliga namn, projektet ligger i EU och omröstningarna är små eller medelstora. **Skapa ett eget projekt när** datan är känslig, en annan organisation är personuppgiftsansvarig, någon annan ska administrera, du behöver inloggning eller en enskild omröstning kan bli mycket stor. Tumregel: ett projekt per ägare och risknivå, inte ett per sida.

**Kontrollera alltid först att projektet är vaket.** Ett pausat projekt svarar inte, och adressen går då inte att slå upp (dashboard visar *Project is paused*). Kent väcker det med **Resume project**. Sidan tål att databasen inte svarar: den sparar läsarens ordning i webbläsaren och skickar den när databasen är uppe, med en banner som säger det. Är det många omröstningar med tusentals röster: byt de funktioner som hämtar alla röster mot en som bara ger medelplatserna, så att trafiken räcker.

Fullständig beskrivning, med skäl och gränser: `AI_anvandning/NF/databas/supabase.md`, avsnitt 2b.

## Vad Kent själv gör (Claude kan inte)

Väcka projektet om det är pausat, köra SQL-filen i SQL Editor, välja och sätta adminkoden, och ge Claude den **publika** nyckeln (eller klistra in den själv). Claude fyller aldrig i konton, lösenord eller hemliga nycklar, och ber aldrig om `service_role`, `secret` eller adminkoden.

## Testa

- **Utan databas:** öppna sidan lokalt via en server (`fetch` fungerar inte på `file://`). Flytta rader, kontrollera att ordningen sparas, att Min bedömning visas efter första flytten och att Ta bort min röst fungerar.
- **Gruppvy utan databas:** lägg `?demo=1` efter adressen för påhittade röster.
- **Databasvägen utan konto:** ersätt `fetch` för adresser som innehåller `/rest/v1/rpc/` med en låtsasdatabas som svarar som de fem funktionerna (`rang_hamta_roster`, `rang_hamta_status`, `rang_spara_rost`, `rang_radera_min_rost`, `rang_nollstall`) och sätt `RANGORDNING_CONFIG`. Kontrollera omröstnings-id, nyckelns längd (36 tecken), tio unika poster, namn, gruppens lista och beteendet när omröstningen är stängd.
- **Mot det riktiga projektet:** provkörningen i `databas/supabase.md`, avsnitt 5. Nollställ provrösterna före start.

## Regler som alltid gäller

- **Databasen före sidan.** Kör SQL-filen för listan och kontrollera att `rang_hamta_status` svarar `antal: 0` innan sidan pushas, eftersom en push publicerar. Säg det i svaret med SQL-körningen som första steg för Kent. Publiceras sidan ändå först behöver inget backas: sidan visar en tom lista och sparar röster i webbläsaren tills listan finns (se `databas/supabase.md`, Ordningen vid publicering). Att backa en push är bara motiverat när något hemligt har publicerats.
- **Publik nyckel i repot är avsedd** (`sb_publishable_…` eller `anon`). Hemliga nycklar och adminkoden ligger aldrig i en fil, i chatten eller i en bild.
- **Tabellerna är låsta.** Row Level Security på, `revoke` för anonyma, och all åtkomst via funktioner som kontrollerar indata i databasen. Supabases dokumentation säger att en tabell utan RLS i ett öppet schema kan läsas och skrivas av vem som helst.
- **Namn är personuppgifter.** Sidan säger vid fältet att namnet visas öppet och sparas i en databas (EU-region), och läsaren kan ta bort sin röst. Samla inga e-postadresser. Ett namn visas som ren text, aldrig som HTML.
- **Öppen sida är ingen säker omröstning.** Den som rensar webbläsaren kan rösta igen. Skriv det på sidan, och kalla resultatet ett underlag för samtal.
- **Slumpad startordning** och Kents egen bedömning dold tills läsaren rangordnat, så att inget styr svaret.
- **Gult (`#FFF9C4`) bara på inmatningsfält**, alltså namnfältet. Allt går att göra med tangentbord (pilknapparna), och ändringar meddelas för skärmläsare.
- **Gratisnivån pausas efter en veckas inaktivitet** (Supabases prissida, läst 2026-11-12), och har inga säkerhetskopior. Säg det till Kent, och exportera rösterna som CSV när en omröstning är klar.
- **Webbläsaren kan visa en äldre kopia av konfigurationen.** Ser en publicerad sida ut att sakna databasen efter en ändring: ladda om med Ctrl+F5.

## Källor

- Supabase (u.å.) *Pricing & Fees*. Tillgänglig på: <https://supabase.com/pricing> (Hämtad: 12 november 2026). *(Gratisnivåns gränser och pausen.)*
- Supabase (u.å.) *Row Level Security*. Tillgänglig på: <https://supabase.com/docs/guides/database/postgres/row-level-security> (Hämtad: 12 november 2026). *(Varför RLS ska vara på.)*
- Lundgren, K. (2026) *Rangordning med databas: Supabase i AI-teknik*. Tillgänglig på: <https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md> (Hämtad: 12 november 2026). *(Referensimplementationen och stegen för Kent.)*
