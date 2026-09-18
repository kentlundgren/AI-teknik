# PRD – De fyra AI-säkerhetsrösterna efter ChatGPT

**Namn:** PRD_rosterna_efter_chatgpt
**Plats:** `AI_sakerhet/Nummer1/PRD/PRD_rosterna_efter_chatgpt.md`
**Skapad:** 2026-09-18
**Version:** 1 (första utkastet, underlag för diskussion)
**Status:** Under diskussion — struktur och källor på plats, flera delfrågor öppna (se avsnitt 4).
**Typ:** Grund-PRD för `AI_sakerhet/Nummer1` — första konkreta leveransen i det bredare AI-säkerhet-projektet i `AI_sakerhet`.

## 1. Bakgrund

Kent har i ett forum tagit fram ett underlag om hur fyra kända
AI-risk-profiler — Max Tegmark, Olle Häggström, Nick Bostrom och Anders
Sandberg — själva skrivit och agerat *efter* ChatGPT-lanseringen i slutet av
2022, dvs. i den period då generativ AI gjorde den tidigare, mer abstrakta
superintelligensdebatten konkret för allmänheten.

Underlagets kärntes: rösterna har inte hållit samma linje i denna period.
Tegmark och Häggström fortsätter skriva att kapplöpningen mot allt
kraftfullare AI är farlig och måste hejdas. Bostrom vidhåller
kontrollproblemet i intervjuer, men hans egna nyare texter (2024–2026)
handlar mer om *timing* och en "löst värld" än om stopp. Sandberg har efter
2023 mest synts i poddar, är mer försiktigt optimistisk, och passar därför
sämre som en "AI är farligt för mänskligheten"-röst i just denna period.

**Tillägg 2026-09-18:** Källförteckningen (nio källor) är länkkontrollerad
enligt Regel 2 i `kent-meta-regler-for-code`. Samtliga titlar, författare
och datum stämmer mot Kents ursprungliga uppgifter, med två små
reservationer:
- ISBN för *Deep Utopia* (Bostrom, 2024) syns inte på `nickbostrom.com/deep-utopia`
  — kan inte bekräftas utan att kontrollera en tredje källa (t.ex.
  förlagets egen sida eller ett bibliotekskatalog).
- Exakt publiceringsdatum för *Statement on Superintelligence*
  (`superintelligence-statement.org`) visas inte längre på sidan — den
  visar numera bara aktuellt signaturantal (141 547 vid kontrolltillfället).
  Både Tegmark och Häggström återfanns dock bland de listade
  undertecknarna, vilket stämmer med innehållet i övrigt.

## 2. Syfte

Ta fram en faktagranskad, källbelagd genomgång av hur dessa fyra profilers
offentliga hållning till AI-risk har utvecklats i den generativa AI-eran
(ChatGPT, nov/dec 2022, och framåt) — som underlag för både ett blogginlägg
och en interaktiv jämförelsesida, som första konkreta leverans i det
bredare AI-säkerhet-projektet i `AI_sakerhet`.

Två delmål:
- Visa **vem som varit mest konsekvent** i att varna för/kräva stopp av
  kapplöpningen mot superintelligens, med Kents egna primärkällor som bevis
  — inte bara ett allmänt intryck.
- Synliggöra **var linjerna glidit isär** (särskilt Bostroms förskjutning
  mot timing-frågor, och Sandbergs svagare roll i just denna period) på ett
  sätt som är rättvist mot varje persons faktiska texter, inte en
  förenklad karikatyr.

## 3. Omfattning

**Ingår:**
- De fyra namngivna personerna (Tegmark, Häggström, Bostrom, Sandberg) och
  deras egna texter/utspel efter ChatGPT-lanseringen (slutet av 2022 och
  framåt).
- Kents befintliga källförteckning (nio källor), nu länkkontrollerad.
- En tydlig, källbelagd jämförelse/tes om hur respektive persons linje
  utvecklats i perioden.
- Explicit skillnad mellan **egna texter** (primärkälla, väger tyngst) och
  **tal/intervjuer/poddar** (sekundärt, redovisas som sådant — se Kents
  egen distinktion i underlaget, t.ex. Bostroms Expansión-intervju eller
  Tegmarks föreläsning i september 2026).

**Ingår inte:**
- En fullständig historik av superintelligensdebatten *före* ChatGPT (Bostroms
  2014-bok *Superintelligence* m.m.) — nämns bara kortfattat som bakgrund,
  inte som eget källmaterial att analysera.
- Andra AI-risk-profiler utanför dessa fyra (t.ex. Yudkowsky, Amodei,
  Hinton) — de kan förekomma som referenspunkter (Häggström polemiserar
  t.ex. mot både Bostrom och Amodei) men blir inte egna huvudpersoner här.
  Kan bli egna, senare delar av `AI_sakerhet` om Kent vill det.
- Teknisk fördjupning i konkreta alignment-metoder (t.ex. detaljerna i
  "Towards Guaranteed Safe AI") — texten refereras för sin *hållning*, inte
  som en teknisk genomgång av metoden.

## 4. Frågor och beslut

**a) Publiceringsordning: blogginlägg eller interaktiv sida först? — BESLUTAT ✓**
Blogginlägget skrivs först. Skälet är samma mönster som `PRD_generell.md`
(avsnitt 6, Produktionsordning) själv destillerat ur tidigare projekt:
käll-/innehållsarbetet är klart → blogginlägget bär det fulla resonemanget
och tvingar fram en skarp tes → den interaktiva sidan blir sedan ett
komprimerat, visuellt destillat av en redan mogen analys.

**b) Vilken blogg tar emot texten? — BESLUTAT ✓**
klel.wordpress.com. (kentlundgren.se är Kents hemsida, inte en blogg —
noterat här så det inte blandas ihop i senare PRD:er för `AI_sakerhet`.)

**c) Vad ska den interaktiva sidan konkret vara? — BESLUTAT ✓**
Statisk HTML/JS à la Claude-kompassen (klickbara kort per person, samma
jämförelse som bloggen destillerad visuellt), hostad med Vercel-teknik
"spår A" (se `nextjs-vercel-app-prompting`-skillen: Vercel som
host/Functions, inte Next.js App Router). Inget generellt beslut om Next.js
för `AI_sakerhet` — omprövas separat om projektet växer till flera sidor
med egna URL:er.

Utöver grundsidan beslutades två väl motiverade Vercel Functions, diskuterat
och beslutat 2026-09-18:

1. **Levande signaturräknare** — en Function som proxar/cachar det aktuella
   signaturantalet från `superintelligence-statement.org`, så sidan visar
   hur opinionen växer istället för en fryst ögonblicksbild från
   publiceringsdagen. Löser ett konkret CORS-/rate limit-problem en
   statisk sida inte klarar själv.
2. **Dynamisk Open Graph-bild** (delningsbild för X/LinkedIn m.fl.) — en
   fristående Function med `@vercel/og`/`ImageResponse`, som genererar en
   bild med faktiskt innehåll (namnen, en rubrikrad) istället för en
   generisk bild, när länken delas. Bekräftat i Vercels egen dokumentation
   (hämtad 18 september 2026) att detta *inte* kräver Next.js — fungerar
   som fristående Function ovanpå statisk HTML, alltså inom spår A.

**d) Behövs ett SPEC.md-steg härifrån? — BESLUTAT ✓ (nej, för alla tre delar)**
Nej. Den återstående osäkerheten som skulle motiverat en SPEC.md — om
signaturräkningen ens gick att hämta server-side — undersöktes direkt
(nätverksinspektion av `superintelligence-statement.org` visade ett internt
JSON-API, `/api/signatureCount?letterName=asi-statement`) i stället för att
skrivas ner som ett öppet tekniskt gränsfall. Det som återstod (cachning,
fallback-beteende, bildmått för OG-bilden) var litet och konkret nog att
implementeras direkt, inte specificeras separat. Byggt 2026-09-18, se
avsnitt 5 och 8.

**e) Hur hanteras de två overifierade detaljerna (ISBN, exakt datum)? — BESLUTAT ✓**
Lämnas som de är i källförteckningen (avsnitt 7), med de befintliga
parentetiska noteringarna om att ISBN respektive exakt publiceringsdatum
inte kunde bekräftas direkt på sidorna. Ingen ytterligare efterforskning.

## 5. Leveranser

- [x] Källförteckning länkkontrollerad (nio av nio källor, Regel 2)
- [x] Beslut om publiceringsordning (fråga 4a): blogg först
- [x] Beslut om målblogg (fråga 4b): klel.wordpress.com
- [x] Beslut om den interaktiva sidans relation till bloggen (fråga 4c): ska utgå från den
- [x] ISBN/datum-frågan löst (fråga 4e): lämnas som är, redan noterat i källförteckningen
- [x] Blogginlägg skrivet och publicerat (Kents röst, `kent-skrivstil`): ["Generativ AI – farlig farligt, eller härligt härligt"](https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/), klel.wordpress.com, 2026-09-18
- [x] Interaktiv sidans konkreta format och Vercel-spår beslutat (fråga 4c): statisk HTML/JS, spår A, plus två Functions (signaturräknare, OG-bild)
- [x] Ställningstagande till SPEC.md för de två Functions (fråga 4d): nej
- [x] Interaktiv sida byggd och testad lokalt (`kent-bygg-sidor`): `index.html`, `style.css`, `script.js`, `data.js`, GitHub-hörna + teknik-modal, djuplänkbara rubriker
- [x] Vercel Functions byggda: `api/signatureCount.js` (proxar FLI:s interna API, cache + fallback), `api/og.js` (dynamisk delningsbild, `@vercel/og` 1.0.1, Node.js runtime)
- [x] `package.json`, `vercel.json` (Framework: null, cache-headers) och `README.md` (lokal sökväg, Regel 9, live-länkar)
- [x] Deploy till Vercel — Kent utförde själv (dashboard-import, Root Directory `AI_sakerhet/Nummer1`), projekt `ai-teknik-4-roster` i team `effektiv1`
- [x] GitHub Pages live och verifierad: <https://kentlundgren.github.io/AI-teknik/AI_sakerhet/Nummer1/>
- [x] Vercel live och `/api/signatureCount` verifierad fungerande
- [x] `/api/og` felsökt och verifierad fungerande på Vercel — genererar korrekt 1200×630 PNG live

## 6. Produktionsordning

1. Källkontroll (klart, se avsnitt 1 och 5).
2. Öppna frågor i avsnitt 4 diskuteras och beslutas med Kent.
3. Blogginlägg skrivs (bär det fulla resonemanget och den skarpa tesen om
   vem som varit mest konsekvent).
4. Interaktiv sida byggs som ett komprimerat, visuellt destillat av
   blogginlägget.

## 7. Källor

Future of Life Institute (2023) *Pause Giant AI Experiments: An Open
Letter*, 22 mars. Tillgänglig på:
<https://futureoflife.org/open-letter/pause-giant-ai-experiments/> (hämtad
18 september 2026). *(Det första stora utspelet efter GPT-4; Tegmark/FLI i
centrum. Länkkontrollerad 2026-09-18: titel och datum bekräftade.)*

Future of Life Institute (2025) *Statement on Superintelligence*, 22
oktober. Tillgänglig på: <https://superintelligence-statement.org/> (hämtad
18 september 2026). *(Tegmarks och FLI:s skarpaste krav efter ChatGPT:
villkorat förbud mot superintelligens. Länkkontrollerad 2026-09-18: innehåll
bekräftat, Tegmark och Häggström båda listade som undertecknare — exakt
publiceringsdatum syns dock inte längre på sidan, bara aktuellt
signaturantal.)*

Häggström, O. (2025) *Our AI future and the need to stop the bear*, 21
februari. Tillgänglig på:
<https://www.math.chalmers.se/~olleh/AIandHumanCivilization.pdf> (hämtad 18
september 2026). *(Häggströms egen huvudtext efter LLM-genombrottet; han
rekommenderar den före 2016-boken. Länkkontrollerad 2026-09-18: titel och
datum bekräftade via textextraktion ur PDF:en.)*

Häggström, O. (2026a) 'AI-utvecklingen måste stävjas snarast möjligt',
*Opulens*, 19 januari. Tillgänglig på:
<https://www.opulens.se/opinion/kronikor/ai-utvecklingen-maste-stavjas-snarast-mojligt/>
(hämtad 18 september 2026). *(Svensk kortversion av samma tes för en
bredare läsekrets. Länkkontrollerad 2026-09-18: rubrik och datum
bekräftade.)*

Häggström, O. (2026b) 'Full speed ahead! I worry about the attitude
displayed in recent papers by Dario Amodei and Nick Bostrom', *Crunch Time
for Humanity*, 20 februari. Tillgänglig på:
<https://haggstrom.substack.com/p/full-speed-ahead> (hämtad 18 september
2026). *(Direkt polemik mot Bostroms timing-paper i den generativa eran.
Länkkontrollerad 2026-09-18: rubrik, datum och innehåll bekräftade.)*

Bostrom, N. (2024) *Deep Utopia: Life and Meaning in a Solved World*.
Ideapress Publishing. ISBN 9781646871643. Tillgänglig på:
<https://nickbostrom.com/deep-utopia>. *(Bostroms huvudbok efter ChatGPT;
behandlar den "lösta världen" mer än existentiell fara. Länkkontrollerad
2026-09-18: titel, år och förlag bekräftade — ISBN syns inte på sidan,
overifierat i denna omgång, se fråga 4e.)*

Bostrom, N. (2026) *Optimal Timing for Superintelligence: Mundane
Considerations for Existing People*. Working paper, version 1.0.
Tillgänglig på: <https://nickbostrom.com/optimal.pdf> (hämtad 18 september
2026). *(Bostroms mest omtalade egna text 2026; medger hög P(doom) men
argumenterar ofta för tidig AGI. Länkkontrollerad 2026-09-18: titel och
versionsnummer bekräftade via textextraktion ur PDF:en.)*

Dalrymple, D., Skalse, J., Bengio, Y., Russell, S., Tegmark, M. et al.
(2024) 'Towards guaranteed safe AI: a framework for ensuring robust and
reliable AI systems', *arXiv*, 2405.06624. DOI:
<https://doi.org/10.48550/arXiv.2405.06624>. *(Teknisk position paper där
Tegmark är medförfattare; empirisk testsäkerhet räcker inte för generell
autonom AI. Länkkontrollerad 2026-09-18: titel, författare (inkl. Tegmark)
och datum bekräftade.)*

Tegmark, M. & Omohundro, S. (2023) 'Provably safe systems: the only path to
controllable AGI', *arXiv*, 2309.01933. DOI:
<https://doi.org/10.48550/arXiv.2309.01933>. *(Tegmarks första större egna
säkerhetstext efter ChatGPT: AGI utan bevisbar kontroll är oacceptabel.
Länkkontrollerad 2026-09-18: titel, författare och datum bekräftade.)*

## 8. Status

Blogginlägget är skrivet och publicerat på klel.wordpress.com
(2026-09-18) — innehåll, källhänvisningar och källförteckning kontrollerade
direkt på den publicerade sidan (inte bara i utkastet) och stämmer exakt
mot det som togs fram i den här PRD:n. Den interaktiva sidan är byggd,
testad lokalt och nu deployad av Kent till både GitHub Pages och Vercel
(projekt `ai-teknik-4-roster`, team `effektiv1`, Root Directory
`AI_sakerhet/Nummer1`). `/api/signatureCount` fungerar bekräftat live.
`/api/og` gav först 404 (filen `api/og.jsx` byggdes aldrig av Vercel — syns
varken som Function eller statisk fil i deployens Resources-flik). Skriven
om som `api/og.js` utan JSX (rena elementobjekt). Ett mellansteg med
`runtime: 'edge'` gav ett konkret, läsbart byggfel i Vercels Deploy Logs
("Edge Function 'api/og' is referencing unsupported modules: @vercel:
module") — bunthanteraren plockade paketets Node-kod istället för dess
Edge-kod, ett känt problem för @vercel/og utanför Next.js. Backat till
vanlig Node.js runtime (Vercels egen rekommendation numera). Det gav i sin
tur en körtidskrasch: `500 FUNCTION_INVOCATION_FAILED`, med stacktrace
`node_modules/@vercel/og/dist/index.node.js:13 throw new Error('Dynamic
require of "fs" is not supported')` — samma fel jag först sett i lokal
testning, men nu bekräftat vara ett verkligt problem i Vercels
produktionsmiljö, inte ett testartefakt. Grundorsaken visade sig vara ett
dokumenterat paketfel i `@vercel/og@1.0.2` självt (GitHub-issue
vercel/satori#801): en uppgradering av satori/harfbuzzjs introducerade en
regression där paketet letar efter en `hb.wasm`-fil som inte följer med
npm-paketet. `1.0.1` fungerar. `package.json` pinnad till exakt `1.0.1`
(ingen `^`, så den inte glider tillbaka till en trasig patch), verifierat
lokalt — `/api/og` genererar nu en korrekt PNG-bild (38 476 byte, med
fungerande svenska tecken som "Häggström"). Kent deployade fixen och den
är bekräftat live: `/api/og` på `ai-teknik-4-roster.vercel.app` levererar
en korrekt 1200×630 PNG. Alla tre delar av leveransen (blogg, GitHub
Pages, Vercel med båda Functions) är nu klara och verifierade.

## Ändringslogg

- 2026-09-18 (v1): Skapad. Struktur enligt `PRD_generell.md`. Kents
  forum-underlag och källförteckning inkopierade i avsnitt 1 och 7,
  samtliga nio källor länkkontrollerade (Regel 2). Fem öppna delfrågor
  identifierade i avsnitt 4, inklusive den obligatoriska SPEC.md-checkpointen
  (Regel 6).
- 2026-09-18 (v2): Kent beslutade samtliga fem delfrågor i avsnitt 4:
  blogginlägg före interaktiv sida, klel.wordpress.com som målblogg, den
  interaktiva sidan ska utgå från/destillera bloggen (exakt format bestäms
  efter bloggtexten), Claudes SPEC.md-rekommendation (nej för bloggen)
  godtagen, och ISBN/datum-detaljerna lämnas som redan noterat i
  källförteckningen. Leveranschecklistan (avsnitt 5) och Status (avsnitt 8)
  uppdaterade i linje med besluten.
- 2026-09-18 (v3): Blogginlägget skrivet och publicerat på
  klel.wordpress.com. Kent länkade den publicerade sidan; innehållet
  verifierades mot den faktiska publicerade texten (inte bara utkastet) via
  webbläsaren, eftersom ett första WebFetch-försök av misstag gav en
  nedkortad, omskriven sammanfattning istället för sidans verkliga
  innehåll — ett verktygsbeteende värt att komma ihåg: WebFetch kör
  innehåll genom en egen sammanfattande modell och kan inte antas ge
  ordagrann text, även när prompten uttryckligen ber om det. Leveranser
  (avsnitt 5) och Status (avsnitt 8) uppdaterade.
- 2026-09-18 (v4): Fråga 4c slutgiltigt beslutad efter en diskussion om
  Vercel-teknik: statisk HTML/JS (spår A i skillen
  `nextjs-vercel-app-prompting`), inte Next.js App Router (spår B) — det
  senare bedömdes vara mer maskineri än en jämförelse-/analystext
  motiverar, och kan omprövas separat om `AI_sakerhet` växer till flera
  sidor. Två Vercel Functions beslutade som tillägg: en levande
  signaturräknare (proxar/cachar antal underskrifter från
  superintelligence-statement.org) och en dynamisk Open Graph-delningsbild
  (`@vercel/og`/`ImageResponse`) för X/LinkedIn-förhandsvisningar —
  bekräftat mot Vercels egen dokumentation (hämtad 18 september 2026) att
  OG-bildgenerering fungerar fristående på Vercel utan Next.js, så båda
  Functions ryms inom spår A. Fråga 4d uppdaterad till "delvis löst": nej
  för blogg och grundsida, öppen fråga om SPEC.md kvar specifikt för de två
  Functions tekniska gränsfall. Leveranser (avsnitt 5) och Status
  (avsnitt 8) uppdaterade.
- 2026-09-18 (v5): Kodningen genomförd. Fråga 4d stängd som "nej" för alla
  tre delar (blogg, grundsida, Functions) sedan den enda verkliga
  osäkerheten — om signaturräkningen gick att hämta server-side —
  undersöktes direkt via nätverksinspektion och visade sig lösbar (internt
  API, `/api/signatureCount?letterName=asi-statement`). Sidan byggd enligt
  `kent-bygg-sidor` (GitHub-hörna + teknik-modal-paret, djuplänkbara
  rubriker, samma visuella språk som `Presentationer/Nr1`) och
  `nextjs-vercel-app-prompting` spår A (Framework: null i `vercel.json`,
  samma mönster som `vindkraftskalkyl_Vercel_ver2`). Testad lokalt via en
  Python-baserad statisk server (`.claude/launch.json` i `AI_sakerhet/`) —
  kort, expandering, teknik-modal, mobilvy och signaturräknarens graciösa
  fallback (väntat 404 utan Vercel-runtime) alla verifierade i
  webbläsaren. Filer: `index.html`, `style.css`, `script.js`, `data.js`,
  `api/signatureCount.js`, `api/og.jsx`, `package.json`, `vercel.json`,
  `README.md`. Ingen git commit/push gjord (Regel 11) och ingen deploy till
  Vercel (väntar på Kents uttryckliga begäran, `kent-bygg-sidor` punkt 3).
  Leveranser (avsnitt 5) och Status (avsnitt 8) uppdaterade.
- 2026-09-18 (v6): Kent committade, pushade och deployade själv — Vercel-
  projekt `ai-teknik-4-roster` skapat i team `effektiv1` via dashboarden
  (Root Directory `AI_sakerhet/Nummer1`, Framework `Other`). Båda live-
  sidorna verifierade: GitHub Pages
  (<https://kentlundgren.github.io/AI-teknik/AI_sakerhet/Nummer1/>)
  identisk med lokal test; Vercel
  (<https://ai-teknik-4-roster.vercel.app/>) med `/api/signatureCount`
  bekräftat fungerande live (returnerade `{"count":69373,...}`). README
  utökad med ett eget Live-sidor-avsnitt (båda URL:erna plus
  Vercel-dashboarden, <https://vercel.com/effektiv1/ai-teknik-4-roster>).
  En hover-förklaring för "Statement on Superintelligence" tillagd i
  `index.html`/`style.css`, återanvänder `.term`/`.term-card`-mönstret från
  `Solutions/260912` (Navier–Stokes-hoverkortet) — samma mekanik bekräftad
  fungerande i en riktig webbläsare (`getComputedStyle`), trots att
  förhandsgranskningsverktygets skärmdumpar visar term-kort som alltid
  synliga (bekräftat vara samma egenhet på den redan publicerade
  referenssidan, inte ett fel i den nya koden). `/api/og` gav 404 på
  Vercel: `Resources`-fliken i deployen visade att `api/og.jsx` aldrig
  byggdes (varken som Function eller statisk fil). Skriven om till
  `api/og.js`: JSX-syntaxen ersatt med rena elementobjekt (en liten `el()`-
  hjälpfunktion) för att inte förlita sig på att en fristående
  "Other"-funktion JSX-transformeras, och `export const config = {
  runtime: 'edge' }` tillagd sedan lokal Node-testning visade att
  @vercel/ogs Node-byggda variant kraschar på ett WASM/`fs`-laddnings-
  problem i strikt ESM (harfbuzzjs-typsnittsmotorn) — edge är dessutom
  bibliotekets ursprungliga, mest beprövade körmiljö. `node_modules/`
  tillagt i root-`.gitignore` (första Node-baserade delprojektet i
  AI-teknik-repot). Väntar på ny deploy och verifiering av `/api/og`.
- 2026-09-18 (v7): Edge-runtime-försöket gav ett konkret byggfel i Vercels
  Deploy Logs (inte bara tyst 404 som tidigare): "The Edge Function 'api/og'
  is referencing unsupported modules: - @vercel: module" — bekräftar att
  @vercel/ogs paketupplösning i en fristående Edge Function (utanför
  Next.js) plockar fel intern build (Node-varianten, som importerar Nodes
  `module`-modul) trots `runtime: 'edge'`. Backat till Node.js runtime
  (tar bort `export const config`), i linje med att Vercels egen
  dokumentation numera rekommenderar Node.js framför Edge. Den ursprungliga
  lokala Node-kraschen bedöms ha varit ett testartefakt (obuntad `node
  fil.mjs`-körning), inte representativ för Vercels faktiska,
  esbuild-buntade Node.js-runtime. `package-lock.json` friades från
  misstanke — byggfelet handlade om Edge/modulupplösning, inte om
  lockfilen. Väntar på ny deploy och verifiering.
- 2026-09-18 (v8): Node.js-runtime-deployen byggde korrekt men kraschade
  vid körning (`500 FUNCTION_INVOCATION_FAILED`) — samma
  "Dynamic require of fs"-fel som i den allra första lokala testen, nu
  bekräftat i produktion via Vercels Runtime Logs, inte ett testartefakt
  som tidigare antaget. Rotorsaken hittad: dokumenterat paketfel i
  `@vercel/og@1.0.2` (vercel/satori#801, en satori/harfbuzzjs-regression
  som letar efter en `hb.wasm`-fil paketet inte levererar) — `1.0.1`
  bekräftat fungerande av andra användare. `package.json` pinnad till
  exakt `1.0.1`, `package-lock.json` regenererad, och fixen verifierad
  lokalt: `/api/og` returnerar nu en korrekt PNG (38 476 byte) utan krasch.
  Väntar på Kents deploy och slutgiltig live-verifiering.
- 2026-09-18 (v9): Kent deployade `@vercel/og@1.0.1`-fixen. `/api/og`
  bekräftat fungerande på `https://ai-teknik-4-roster.vercel.app/api/og` —
  en riktig 1200×630 PNG, verifierad direkt i webbläsaren. Sidoanmärkning:
  under felsökningen skapade upprepad lokal `npm install`/`rm -rf
  node_modules` en stor batch-borttagning som OneDrive (mappen ligger i
  OneDrive-synk) flaggade med en bekräftelsedialog — löst genom att välja
  "Behåll objekten" och därefter ta bort `node_modules` lokalt permanent
  (behövs varken för Git, som redan undantar den, eller för Vercel, som
  gör sin egen installation). Samtliga leveranser i avsnitt 5 nu avbockade.
