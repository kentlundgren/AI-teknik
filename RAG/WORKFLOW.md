# Arbetsregler för AI-agenten (Git & GitHub)

Denna fil innehåller **arbetsregler** för hur AI-agenten (Cursor, Claude m.fl.) ska
bete sig i detta projekt när det gäller versionshantering. Den är medvetet skild
från `agents.md` (som är det portabla RAG-styrdokumentet) för att hålla det
dokumentet rent och återanvändbart.

---

## Regel 1: Git commit och push sköts av användaren

**Standardläge:** Kent (användaren) committar och pushar **själv** till GitHub.
Syftet är att Kent ska förstå och kunna hantera Git-flödet på egen hand.

Därför gäller:

- Agenten ska **inte** på eget initiativ köra `git commit`.
- Agenten ska **inte** på eget initiativ köra `git push` (eller "Publish/Sync Branch").
- Agenten får däremot hjälpa till att **förbereda** (t.ex. skapa/ändra filer,
  förklara vad som ändrats, föreslå commit-meddelanden) – men själva commit och
  push utför Kent.

## Undantag: Uttrycklig begäran

Om Kent **uttryckligen** ber agenten att committa och/eller pusha, ska agenten
göra det. Exempel på tydliga instruktioner:

- "Committa detta åt mig."
- "Pusha till GitHub."
- "Kör hela flödet: add, commit och push."

När agenten utför detta på begäran ska den:

1. Visa vad som ska committas (kort sammanfattning).
2. Använda ett tydligt commit-meddelande.
3. Redovisa resultatet efteråt (t.ex. `git status` / `git log`).

## Regel 2: Fråga alltid vid minsta oklarhet – innan du kodar

Agenten ska **alltid** fråga Kent om något är oklart **innan** den börjar koda eller
gör större ändringar. Detta gäller nu och framöver.

Det innebär:

- Om det finns flera rimliga tolkningar av en uppgift → fråga först.
- Om det saknas information (t.ex. var filer ska ligga, namn, struktur, URL:er) → fråga först.
- Gissa inte kring viktiga val – stäm av med Kent.
- Först när det är tydligt vad som ska göras påbörjas kodningen.

## Regel 3: Källor och referenser i Harvardformat (med kontrollerade länkar)

När agenten anger källor eller referenser gäller följande generellt i detta projekt:

- **Harvardstil (Harvardformat).** Använd Harvard-referenssystemet:
  - **In-text-hänvisning:** (Författare, år), t.ex. (Bengtsson, 1941) eller
    (Nationalencyklopedin, 2024).
  - **Referenslista:** fullständig referens i slutet, t.ex.
    *Efternamn, Förnamnsinitial. (år). Titel. Utgivare/Webbplats. URL (hämtad ÅÅÅÅ-MM-DD).*
- **Länkar till källorna.** Varje referens ska ha en **länk (URL)** till källan när en
  sådan finns.
- **Kontrollera varje länk.** Agenten ska kontrollera att varje länk
  1. **fungerar** (svarar, inte död/404), och
  2. är **relevant** (leder faktiskt till den information som påstås).
  Länkar som inte kan verifieras markeras tydligt som ej verifierade eller utelämnas.

*Not:* Länkkontrollen är särskilt aktuell när verkliga källor läggs in (t.ex. steg 2 i
Frans G. Bengtsson-exemplet, där web-retrieval utförs). I steg med enbart platshållare
finns inga länkar att kontrollera ännu.

## Regel 4: GitHub-länk på alla live-sidor (nere till vänster)

Varje ny **live-sida** (HTML-sida som publiceras via GitHub Pages) i detta projekt ska
ha en **länk till GitHub** placerad **längst ner till vänster** på sidan.

- Länken visas som en liten, fast (fixed) "badge" i nedre vänstra hörnet, t.ex. med
  texten `{ } GitHub`.
- Länken pekar på sidans **källkod på GitHub** (den mapp/fil sidan bygger på), eller
  på repots startsida om inget mer specifikt passar.
- Länken ska öppnas i ny flik (`target="_blank" rel="noopener"`).
- Denna badge läggs in **automatiskt när nya HTML-sidor skapas** i projektet.

*Inspiration:* samma mönster används på t.ex.
https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/medlemmar/

## Regel 5: Skapa en README-fil när det är lämpligt

När agenten skapar en **ny mapp/del** i projektet ska den skapa en **`README.md`**
i den mappen när det är lämpligt – dvs. när mappen innehåller något som behöver
förklaras (syfte, innehåll, hur man använder det). Syftet är att varje del ska vara
begriplig direkt på GitHub, utan att man behöver läsa koden.

Riktlinjer:

- **När:** vid ny mapp/delprojekt, eller när en befintlig mapp fått så mycket
  innehåll att en översikt behövs. Små hjälpmappar (t.ex. bara bilder) behöver
  oftast ingen README.
- **Innehåll (typiskt):** kort syfte, vad som finns i mappen (filerna och deras
  roll), ev. länk till live-sida (GitHub Pages) och relaterade delar, samt hur man
  använder/läser materialet.
- **Ton:** pedagogisk och kortfattad, i linje med projektets övriga READMEs.
- **Korsreferenser:** länka gärna uppåt till projektets rot-README och till
  besläktade delar, så att helheten hänger ihop.
- Denna README skapas **automatiskt när nya delar/mappar tillkommer**, på samma
  sätt som GitHub-badgen i Regel 4.

## Påminnelse: PowerShell-miljö

Kent använder oftast **PowerShell** på Windows. Tänk på:

- `&&` fungerar **inte** som satsavdelare i PowerShell – dela upp i separata kommandon.
- Heredoc (`$(cat <<'EOF' ... )`) fungerar **inte** i PowerShell – använd i stället
  `git commit -F <fil>` med ett commit-meddelande i en temporär fil om meddelandet
  är flerradigt.

---

*Uppdatering: Denna fil skapades efter att push till GitHub först skedde av misstag.
Regeln säkerställer att Kent själv styr när något hamnar på GitHub.*
