---
name: kent-hitta-projekt
description: Sök igenom Kents kända platser för AI-projekt/kalkyler — lokala mappar, GitHub, hans två bloggar, hans egen webbplats — utifrån en sökfras, och redovisa träffar per källa med länkar/sökvägar. Använd när Kent skriver "sök:", "hitta mitt projekt om", "var har jag skrivit/gjort X", eller på annat sätt letar efter ett tidigare AI-projekt han inte längre minns var det ligger.
---

> **KOPIA.** Det här är en kopia för synlighet på GitHub. Originalet ligger i `C:\Users\kentl\.claude\skills\kent-hitta-projekt\` (utanför Git) och är det som ändras först. Ändra här bara om kopian synkas om. Kopierat 2026-10-09.

# Kent hitta projekt

Kent har AI-projekt (kalkyler, verktyg, presentationer) spridda över flera
platser han inte har någon samlad karta över. Den här skillen kör en bred,
parallell sökning över alla kända platser och redovisar resultatet grupperat
per källa — i stället för att gissa en enda plats och rapportera "hittade
inget" om just den platsen saknar träff.

## Hårda gränser — läs innan sökning startar

- **Enbart läsning.** Den här skillen använder uteslutande läsverktyg (Glob,
  Grep, Read, WebFetch, WebSearch, webbläsarens `navigate`/`get_page_text`).
  Den ska **aldrig** använda Write, Edit, eller köra kommandon som ändrar,
  flyttar eller tar bort filer/innehåll — varken lokalt, på GitHub eller på
  bloggarna/webbplatsen. Om ett sökresultat väcker en idé om en ändring:
  föreslå den till Kent i svaret, gör den inte.
- **Enbart de platser som listas nedan.** Sök inte i mappar, repon eller
  webbplatser utanför listan i Steg 2 utan att först fråga Kent uttryckligen.
  Det gäller även om en bredare sökning (t ex hela `C:\Users\kentl\` eller en
  generell filsystemgenomgång) skulle kunna kännas smidigare — hellre en
  bekräftad ny plats i taget än en tyst utökning av sökområdet.
- **Åtkomst begärs bara vid behov.** Anropa
  `mcp__ccd_directory__request_directory` för en specifik mapp i listan
  nedan bara när just den mappen faktiskt ska sökas i den aktuella
  sökningen — inte proaktivt för alla mappar "för säkerhets skull".

**Bakgrund:** Skapad 2026-08-19 efter ett konkret fall där Kent letade efter
sin "forskarkalkyl" (fullkostnadskalkyl för forskningsprojekt). Se
minnesposterna `project_forskarkalkyl_lokalisering` och
`reference_kent_projektkartor` för fullständig bakgrund och de kända
platserna i detalj — den här filen sammanfattar bara proceduren.

## Steg 1 — tolka sökfrasen brett

Kent söker sällan med exakt samma ord som filnamnet eller blogginlägget
använder (se exemplet: han sökte "forskarkalkyl", filen heter
`fullkostnadskalkyl_for_forskning`). Generera 2–4 synonymer/varianter av
sökfrasen innan sökningen startar — inte bara ordagrann matchning.

## Steg 2 — sök alla fyra källtyper

**A. Lokala mappar** (kräver `mcp__ccd_directory__request_directory` om
mappen inte redan är tillgänglig i sessionen — fråga inte "har du åtkomst",
begär bara direkt, Kent godkänner i sin egen dialog):
- `C:\Users\kentl\OneDrive\AI\AI-teknik` (huvud-repo, Claude Code, ofta
  redan öppen)
- `C:\Users\kentl\OneDrive\AI\Claude\ClaudeCowork` (Cowork-projekt, bl a
  Kalmar Nation-revision, kommunala bokslut — inte bara "kalkyler" i teknisk
  mening)
- `C:\Users\kentl\OneDrive\AI\Codex` (Codex-byggda projekt)
- `C:\Users\kentl\OneDrive\AI\Cursor` (Cursor-byggda projekt — kan innehålla
  EGNA versioner av samma ämne som redan finns någon annanstans, t ex en
  separat vindkraftskalkyl)
- `C:\Users\kentl\OneDrive\AI\Grok` (Grok-byggda projekt)
- `D:\VåraFiler_primära_på_SSD\Kent_dokument\Data\HTML\kentlundgren_se\`
  (webbplatskälla — `program\` och `kalkyler\` är de mest projekttäta
  undermapparna, INTE Git-versionshanterad)
- Samma ämne kan finnas i flera av dessa mappar parallellt (olika AI-verktyg,
  olika tillfällen) — hitta en träff är inte skäl att sluta söka i övriga.
- Om inget hittas alls: fråga Kent om fler kandidat-mappar i stället för att
  anta att projektet inte finns lokalt.
- Använd Glob på filnamn OCH Grep på innehåll — ett projekt kan vara namngivet
  helt annorlunda än vad Kent minns, men innehållet avslöjar det.

**B. GitHub** (`https://github.com/kentlundgren`):
- `WebSearch site:github.com/kentlundgren ...` ger ofta 0 träffar även för
  riktiga repon — lita inte på det ensamt.
- Fetcha repolistan direkt (`WebFetch` på
  `https://github.com/kentlundgren?tab=repositories`) och matcha reponamn/
  beskrivningar mot sökfrasen och dess synonymer. Den listan missar privata
  repon och visar inte Pages; `gh repo list kentlundgren` (bara läsning) ger
  hela listan.
- **Börja med registret `register_livepage.md`** (i samma mapp som den här
  filen): det visar vilka repon som har Live Page, adressen och lokal mapp.
  Sök sedan i de lokala mapparna och läs README-filerna (de har raderna
  "Live-sida" och "Lokal mapp"). Hämta om registret om det är äldre än
  några veckor (kommandona står i registret) och fyll på det med nya träffar.

**C. Bloggarna:**
- `https://klel.wordpress.com` och `https://controllerutangranser.wordpress.com`
- **`WebFetch` ger 403 Forbidden på båda — använd i stället webbläsarverktygen**
  (`mcp__Claude_Browser__navigate` till `<blogg>/?s=<sökord>`, sedan
  `get_page_text`). Testa flera sökordsvarianter — WordPress fritextsökning
  är exakt, inga fuzzy-träffar.

**D. kentlundgren.se (egen webbplats):**
- Flera portfolio-ingångar, inte en enda karta: `/kalkyler/` är
  samlingssidan för kalkylatorer, men `/program/ekonom/`, `/program/ekonomi/`
  och sannolikt fler `/program/<ämne>/`-sidor finns också. Kolla `/kalkyler/`
  först, men anta inte att den är uttömmande.

**E. (Valfritt, bara om Kent efterfrågar det) Bredare websök:**
- `WebSearch` utan site-filter för externa beskrivningar/referenser till
  ämnet — relevant om Kent vill sätta sitt eget arbete i ett bredare
  sammanhang, inte bara hitta sin egen fil.

## Vad Kent menar med "arbeten jag har gjort" (tillagt 2026-10-09)

När Kent ber mig söka efter arbeten, projekt eller program han gjort menar han
ett **projekt med en Live Page** (GitHub Pages), inte lösa filer eller utkast.
Sök därför i första hand efter det, och rangordna träffar så här:

1. **Fullt par:** lokal mapp (Git) och Live Page som hör ihop. Det är det
   tydliga resultatet Kent vill ha.
2. **Delvis:** bara lokal mapp, eller bara en GitHub-blob utan Live Page.
   Redovisa det som "saknar Live Page" och säg varför (till exempel att
   mappen saknar `index.html`). Kontrollera med `curl`, anta inget.
3. **Lösa filer** (txt, bilder, utkast): nämn dem kort längre ned, som
   bakgrund, inte som huvudresultat.

## Steg 3 — redovisa resultatet

**Redovisa varje träff som ett par, överst i svaret** (tillagt 2026-10-09):

| Arbete | Live Page (GitHub) | Lokal mapp (Git) | GitHub-repo |
|---|---|---|---|

- Live Page ska vara en adress som verkligen svarar (kontrollera med `curl`,
  statuskod 200). Skriv "saknas" om den inte finns, gissa aldrig.
- Lokal mapp ska vara en sökväg som verifierats (`git remote -v` eller README),
  annars "ej verifierad".
- Har arbetet syskon-medier (bloggtext, LinkedIn, video, podd), lägg dem i en
  extra kolumn eller rad (Steg 4).

Gruppera sedan resten av svaret per källa (lokal fil / GitHub / blogg / kentlundgren.se),
med klickbara länkar eller fullständiga lokala sökvägar för varje träff.
Ange uttryckligen vilka källor som INTE gav träff — det är information, inte
en brist i svaret. Om en lokal mapp krävde ny åtkomst (`request_directory`),
nämn det, så Kent vet varför just den söktes.

## Steg 4 — hitta syskon-medier (tillagt 2026-09-30)

Kent speglar samma ämne i flera medier: program/app, bloggtext, LinkedIn-inlägg och
ibland YouTube-video och podd (se `kent-meta-regler-for-code`, Regel 15, och
`kent-ai-arbetssatt`, avsnitt 7). När en träff är **ett** av dem, sök alltid efter de
andra och fråga Kent om något saknas:
- **Från bloggtexten:** hämta dess länkar (`a href`), de pekar ofta på programmet. Det är
  den säkraste vägen.
- **Från programmet:** sök bloggtexten i båda bloggarna (`<blogg>/?s=<ämne>`).
- **LinkedIn:** Kents aktivitetssida (`/in/kentlundgren/recent-activity/all/`, kräver
  inloggning i hans Chrome, läs bara) eller `lnkd.in`-genvägar som han ger (de går att
  följa med `curl -L` och visar den riktiga adressen).
- **YouTube:** Kents kanal `@KentLundgrenLarsErik` (kontrollera titel via
  `youtube.com/oembed`). **Podd:** Spotify (titel via `open.spotify.com/oembed`).
- Ta bort spårningsparametrar (`?si=`, `utm_`, `rcm`) ur länkar som ska publiceras.
- Redovisa vilka medier som hittades och vilka som **inte** gjorde det, och fråga Kent om
  de saknade finns.

## Uppdateringslogg

- 2026-10-09: "Arbeten" betyder projekt med Live Page. Träffar redovisas som par
  (Live Page + lokal mapp + repo) överst. Nytt register `register_livepage.md`
  (alla repon med GitHub Pages) används som utgångspunkt i Steg 2B. Utlöst av
  sökningen efter analysen om nya AI-modeller som både bättre och billigare
  (utkast i `AI-teknik\AI_modeller\GPT6\`, saknar Live Page).

- 2026-09-30: Nytt Steg 4, hitta syskon-medier, på Kents uttryckliga begäran (Regel 15).
- 2026-08-19: Skapad, efter fallet med Kents forskarkalkyl. Kent bekräftade
  uttryckligen att han ville ha detta som en återanvändbar skill.
- 2026-08-19, samma dag: Lade till avsnittet "Hårda gränser" efter att Kent
  uttryckligen frågade om skillen kan begränsas till enbart läsning och
  enbart de angivna platserna, utan tyst utökning. Bekräftat: ja, och nu
  nedskrivet som en explicit regel i skillen, inte bara underförstått.
