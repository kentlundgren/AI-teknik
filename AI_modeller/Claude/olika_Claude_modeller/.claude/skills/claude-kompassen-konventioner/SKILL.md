---
name: claude-kompassen-konventioner
description: >
  Projektspecifika konventioner för att vidareutveckla just "Claude-kompassen"
  (index.html) i det här projektet — filnamn, sektionsstruktur och etablerade
  mönster. Använd alltid när Kent ber om ändringar i index.html, CLAUDE.md eller
  README.md i den här mappen (olika_Claude_modeller). Kompletterar den globala
  skillen kent-bygg-sidor (allmänna regler för sidbyggande) med fakta som bara
  gäller det här specifika projektet.
---

# Konventioner för just det här projektet

Den här skillen ligger på **projektnivå** — den gäller bara i den här mappen, till
skillnad från `kent-bygg-sidor` (global, gäller alla Kents sidbyggen) och
`kent-meta-regler` (kontoanknuten, gäller överallt). Den finns delvis för att
konkret visa att alla tre nivåerna kan förekomma i samma projekt samtidigt.

## Struktur i index.html

- Fyra sektioner, i ordning: **Fas 1** (`id="fas1"`, styrfiler CLAUDE.md/AGENTS.md/
  SKILL.md), **Fas 2** (`id="fas2"`, ytor), **Fas 3** (`id="fas3"`, Cursor/Git/
  GitHub, uppdelat i 3a och 3b), och **Sammanfattning** (`id="sammanfattning"`,
  processen bakom sidan). Sektions-id:na döptes om från `sec-steer`/`sec-surfaces`/
  `sec-after`/`sec-meta` (30/7) just för att kunna länkas direkt: `#fas1`, `#fas2`,
  `#fas3`, `#sammanfattning` används redan i bloggtexten och i verktygets egen
  introtext. Behåll dessa exakta id:n — de är en publik kontrakt, inte bara interna
  namn. Denna ordning och namngivning är medvetet vald av Kent — ändra den inte
  utan att fråga.
- Varje sektion använder samma mönster: en `.cards`-rad med klickbara knappar och
  en `.detail`-panel under som fylls via JavaScript (`showSteer`, `showSurface`,
  `showPipeline`). Nya kort ska följa exakt detta mönster, inte uppfinna ett nytt.
- Skärmdumparna i mappen refereras med sina exakta filnamn (t.ex.
  `Clalude_ai_tre_saker_i_en__260729.jpg`, med stavningen "Clalude" — en äkta
  stavning i det ursprungliga filnamnet, rätta den inte).

## `index copy.html` — en återställningspunkt, inte en referens

En manuell backup-kopia Kent själv skapade (29/7 2026) som säkerhet om
`index.html` skulle gå sönder. Två helt olika lägen gäller, och de ska aldrig
blandas ihop:

**Normalläge (nästan alltid):** `index.html` är den aktiva, korrekta filen.
`index copy.html` rörs inte alls — redigera den aldrig, uppdatera den aldrig,
och använd den aldrig som källa, referens eller facit, även om den råkar
innehålla en äldre eller till synes "renare" text. Om `index.html` och
`index copy.html` skiljer sig åt är det **aldrig** ett tecken på att kopian är
"rätt" — det är bara ett tecken på att filerna divergerat. Dra aldrig den
slutsatsen på egen hand. Konkret exempel (30/7 2026): `index.html` fick en not
som ifrågasatte om Claude Code läser AGENTS.md, som `index copy.html` saknade.
Kent hade själv verifierat frågan och beslutat att `index.html` skulle stå kvar
som den var — skillnaden mot kopian sa ingenting om vem som hade rätt.

**Återställningsläge (bara när Kent uttryckligen säger till):** Om Kent säger
något i stil med "något gick fel, gå tillbaka till index copy.html" eller
"återställ från kopian" — då, och bara då, blir `index copy.html` den fil man
utgår från för att återställa `index.html`. Det är hela poängen med att ha en
backup. Vänta alltid på det uttryckliga beslutet — anta det aldrig själv utifrån
att filerna skiljer sig åt eller att något "ser fel ut".

## Kända, redan fattade beslut (fråga inte om dessa igen)

- GitHub-kortet ska bara heta "GitHub", aldrig nämna `gh CLI` eller `gh auth login`
  — Kent har uttryckligen bett att det tas bort (se konversationshistorik 29/7).
  Cursor-korten ska spegla Kents subjektiva upplevelse (aktivt val, inte en
  "objektiv" kapacitetsjämförelse).
- Git commit/push görs alltid av Kent själv via Cursor — den här skillen kodar
  inte om det, se `kent-bygg-sidor` för fullständig regel.

## Relaterat

- Global skill: `kent-bygg-sidor` (`C:\Users\kentl\.claude\skills\kent-bygg-sidor\`)
- Plan/bakgrund: `C:\Users\kentl\.claude\plans\abstract-leaping-lark.md`
