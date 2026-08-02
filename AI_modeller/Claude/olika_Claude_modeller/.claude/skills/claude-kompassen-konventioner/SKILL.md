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

- Sex sektioner, i ordning: **Fas 0** (`id="fas0"`, PRD och SPEC.md —
  kravdokument och (ibland) agent-specifikation som föregår allt annat,
  PRD-kortet tillagt 31/7 2026, SPEC.md-kortet tillagt 2/8 2026, se
  `PRD/PRD_spec.md`), **Fas 1** (`id="fas1"`, styrfiler
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
  uppfinna ett nytt — det gäller även när en sektion bara har ett enda kort
  (t.ex. Fas 0 fram till 2/8 2026, då den fick sitt andra kort, SPEC.md): samma
  `.cards`-grid + klickbar `.card-btn` + auto-visad `.detail` vid sidladdning
  (första kortet i arrayen), inte ett specialfall utan klick-interaktion. Ett
  nytt kort i en befintlig sektion (som SPEC.md i Fas 0) läggs helt enkelt till
  som ett nytt objekt i samma data-array (t.ex. `prdData`) — ingen ny
  JS-funktion eller ny sektion-`id` krävs, `renderPrd`/`showPrd` hanterar det
  redan generiskt.
- **Externa (icke-Kent) källor får gärna länkas inline i kort-texten**
  (`intro`/`fact`/`note`), särskilt den enskilt mest relevanta källan för
  kortets resonemang — samma mönster som Kents egna blogginlägg (se
  `kent-skrivstil`: `(Författare, år)` som klickbar länk i löptext, *plus*
  full post i källförteckningen, inte antingen/eller). Kräv alltid en
  fullständig, annoterad Harvard-post i `sourcesData` oavsett — inline-länken
  är ett komplement till källförteckningen, aldrig en ersättning för den.
  **Rättat 2/8 2026:** en tidigare version av den här regeln sa att externa
  källor *aldrig* skulle länkas inline, bara nämnas vid namn (mönstret i
  RAG-kortets Gao/Lewis och SPEC.md-kortets Delimarsky/Kiro/Liu/Osmani). Det
  var en övertolkning från två exempel, inte ett beslut Kent fattat — och
  det motsade `kent-skrivstil`s egna konvention. Befintliga kort skrivs inte
  om retroaktivt utan uttrycklig begäran, men nya/redigerade kort får länka
  externa källor inline när det hjälper läsaren.
- **Alla bilder ligger i en egen `Bilder/`-mapp** (flyttat dit 2/8 2026,
  låg tidigare direkt i projektroten). Referera dem med sökvägen
  `Bilder/<filnamn>`, t.ex. `Bilder/Clalude_ai_tre_saker_i_en__260729.jpg` —
  stavningen "Clalude" i flera filnamn är en äkta stavning i de ursprungliga
  filnamnen, rätta den inte. Nya bilder som läggs till i projektet ska också
  läggas i `Bilder/`, inte i roten.
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

## `index copy.html` — borttagen (1/8 2026)

Fanns tidigare som en manuell backup-kopia (skapad 29/7 2026, samma dag som
`index.html`). Kent tog själv bort filen 1/8 2026 — det finns bara en
index-fil i mappen nu. Om en framtida backup-kopia dyker upp igen: fråga
Kent vilket läge som gäller innan den antas följa samma regler som förut.

## Kända, redan fattade beslut (fråga inte om dessa igen)

- GitHub-kortet ska bara heta "GitHub", aldrig nämna `gh CLI` eller `gh auth login`
  — Kent har uttryckligen bett att det tas bort (se konversationshistorik 29/7).
  Cursor-korten ska spegla Kents subjektiva upplevelse (aktivt val, inte en
  "objektiv" kapacitetsjämförelse).
- Git commit/push görs alltid av Kent själv via Cursor — den här skillen kodar
  inte om det, se `kent-bygg-sidor` för fullständig regel.
- **SPEC.md-checkpointen gäller alla framtida PRD:er, inte bara Claude-
  kompassen** (beslutat i `PRD/PRD_spec.md`, 2/8 2026, dokumenterat i
  `PRD/PRD_generell.md`): varje ny PRD — oavsett projekt — ska explicit ta
  ställning till "Behövs ett SPEC.md-steg härifrån?". Svaret är oftast nej;
  det är själva frågan, inte ett obligatoriskt dokument, som är regeln.

## Relaterat

- Global skill: `kent-bygg-sidor` (`C:\Users\kentl\.claude\skills\kent-bygg-sidor\`)
- Plan/bakgrund: `C:\Users\kentl\.claude\plans\abstract-leaping-lark.md`
