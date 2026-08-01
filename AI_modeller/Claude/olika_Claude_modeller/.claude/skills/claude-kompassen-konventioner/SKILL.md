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

- Sex sektioner, i ordning: **Fas 0** (`id="fas0"`, PRD — kravdokumentet som
  föregår allt annat, tillagd 31/7 2026), **Fas 1** (`id="fas1"`, styrfiler
  CLAUDE.md/AGENTS.md/SKILL.md), **Fas 2** (`id="fas2"`, ytor), **Fas 3**
  (`id="fas3"`, Cursor/Git/GitHub, uppdelat i 3a och 3b), **Sammanfattning**
  (`id="sammanfattning"`, processen bakom sidan), och **Källor** (`id="kallor"`,
  källförteckning längst ner). Sektions-id:na döptes om (30/7) just för att kunna
  länkas direkt: `#fas0`, `#fas1`, `#fas2`, `#fas3`, `#sammanfattning`, `#kallor`
  används redan i bloggtexten och i verktygets introtext. Behåll dessa exakta
  id:n — de är ett publikt kontrakt, inte bara interna namn. Denna ordning och
  namngivning är medvetet vald av Kent — ändra den inte utan att fråga. Fas 0
  har ett eget färgpar i CSS-variablerna (`--pre`/`--pre-soft`, en dämpad
  skiffer-indigo), tydligt skilt från Fas 1:s rost (`--accent`) och Fas 2/3:s
  grönt (`--step`) — samma mönster med en tredje `.tag`-variant (`.tag.pre`)
  ska följas om ytterligare en fas läggs till i framtiden.
- **Allmän ankarlänksregel (gäller alla sektioner i index.html):** varje `<section>`
  ska ha ett `id`-attribut med ett kort, läsbart svenskt ord (utan å/ä/ö, utan
  mellanslag). Det gör att sektionen kan nås direkt via URL-fragment, t.ex.
  `https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/#kallor`.
  Lägg alltid till `id` när en ny sektion skapas. Fråga Kent vilket id den ska ha
  om det inte är uppenbart — id:t är en publik länk och svårt att ändra i efterhand
  utan att bryta externa referenser.
- **Klickbara ankarlänkrubriker:** varje `<h2>` i en namngiven sektion ska vara
  inlindad i `<a class="anchor-heading" href="#sektions-id">…</a>`. CSS-klassen
  `anchor-heading` gör att: (1) länken ärver rubrikens färg och har ingen underline
  normalt, (2) ett `#`-tecken i accent-färg tonas in på hover — ett diskret signal
  om att rubriken är klickbar/länkbar. Mönstret gör att besökaren enkelt kan "få fatt
  i" rätt URL för ett avsnitt och dela den med någon annan. Lägg alltid till detta
  mönster för `<h2>` i nya sektioner. Befintliga rubriker med detta mönster (31/7
  2026): `#fas0`, `#fas1`, `#fas2`, `#fas3`, `#sammanfattning`, `#kallor`.
- Varje sektion använder samma mönster: en `.cards`-rad med klickbara knappar och
  en `.detail`-panel under som fylls via JavaScript (`showPrd`, `showSteer`,
  `showSurface`, `showPipeline`). Nya kort ska följa exakt detta mönster, inte
  uppfinna ett nytt — det gäller även när en sektion (som Fas 0) bara har ett
  enda kort: samma `.cards`-grid + klickbar `.card-btn` + auto-visad `.detail`
  vid sidladdning, inte ett specialfall utan klick-interaktion.
- Skärmdumparna i mappen refereras med sina exakta filnamn (t.ex.
  `Clalude_ai_tre_saker_i_en__260729.jpg`, med stavningen "Clalude" — en äkta
  stavning i det ursprungliga filnamnet, rätta den inte).
- **`sourcesData`-ordning (31/7 2026):** listan ska stå i alfabetisk Harvard-ordning
  (författare/organisation/titel, skiftlägesokänsligt), inte kronologisk — ändrat
  från den ursprungliga kronologiska ordningen. Flera verk av samma författare
  (t.ex. Lundgren, K. 2026a–f) grupperas ihop och behåller sin inbördes a/b/c-ordning,
  men gruppen placeras enligt författarnamnets bokstavsplats. Lägg alltid en ny källa
  på rätt alfabetisk plats i arrayen, inte sist. Samma regel gäller generellt, se
  global skill `kent-meta-regler-for-code`.
- **Annoterad källförteckning (tillagt 1/8 2026):** varje ny post i `sourcesData`
  ska, utöver Harvard-referensen, ha en kort mening (ett nytt `annotation`-fält) som
  sammanfattar vad källan handlar om eller varför den är med. Se `PRD/PRD_rag.md`
  (avsnitt 4e) för exempel och bakgrund. Befintliga poster (Lundgren K. 2026a–g)
  skrivs inte om retroaktivt utan uttrycklig begäran.

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
