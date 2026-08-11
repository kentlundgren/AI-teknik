---
name: kent-presentationer
description: >
  Bygger självspelande, datadrivna presentationer åt Kent Lundgren som visar upp flera
  projekt/länkar i följd — t.ex. en portfolio-genomgång av AI-projekt, med bild+text per
  post, automatisk bildväxling och flera hastighetslägen. Använd när Kent ber om att
  bygga, ändra eller utöka en "presentation", ett "bildspel", eller vill visa upp flera
  projekt i en självspelande sekvens, särskilt om han nämner PowerPoint-liknande
  utseende, automatisk uppspelning, eller att lätt kunna lägga till/ta bort poster över
  tid. Kompletterar `kent-bygg-sidor` (allmänna regler för Kents interaktiva sidor) med
  mönster specifika för just presentationer/bildspel — läs `kent-bygg-sidor` också.
metadata:
  type: process
---

# Kents presentationer — mönster och beslut

Destillerad ur den första riktiga presentationen som byggdes enligt det här
mönstret: `Presentationer/Nr1` i AI-teknik-repot (PRD:
`Presentationer/Nr1/PRD_presentation_ai_projekt.md`), en portfolio-genomgång
av åtta AI/webb-projekt. Se den PRD:n för fullständig beslutshistorik och
resonemang — den här skillen destillerar bara mönstren som generaliserar.

**Vad `Nr1` konkret är, för att undvika förväxling (tillagt 2026-08-11):**
Kents egen, självspelande visning av vad han byggt och gjort med generativ
AI mellan 2023 och 2026 — projekt, årskort och källor, allt inom det spannet.
Om Kent säger "min presentation" utan att ange nummer och sammanhanget
handlar om generativ AI, är `Nr1` nästan alltid vad han menar — inte en
extern/annan fil att leta upp brett i filsystemet efter (se mappkontroll,
`kent-meta-regler-for-code` Regel 5). Däremot: anta **inte** att en framtida
`Nr2`/`Nr3` automatiskt delar samma ämne (generativ AI) eller samma tidsspann
(2023–2026) — mönstret (motor+data, hastighetsvarianter, osv.) generaliserar,
innehållet gör det inte. Kolla presentationens egen PRD för vad just den
handlar om innan du antar något.

**Placering:** medvetet lagd här, i `Presentationer/.claude/skills/`, inte
kontonivå/globalt — Kent vill kunna se och länka till skillet på GitHub när
repot är pushat, och en nivå ovanför `Nr1` täcker automatiskt `Nr2`, `Nr3`
osv utan att behöva flyttas igen. Ett tunt pekar-skill finns kvar globalt
(`~/.claude/skills/kent-presentationer/`) för sessioner som inte är öppnade
i AI-teknik-repot — håll det pekar-skillet i synk med namnet/syftet här,
men lägg inget innehåll där.

Gäller tillsammans med [[kent-bygg-sidor]] — den skillen har de allmänna
reglerna för Kents interaktiva sidor (fråga vid minsta tvekan, bygg/testa
lokalt, publicera aldrig utan godkännande, Kents upplevelse väger tyngst,
Regel 6 om `{ } GitHub`/`</> teknik`-hörnorna). Upprepa inte de reglerna
här — bara det som är specifikt för presentationer.

## 1. Arkitektur: motor + data, alltid separerade

Fyra filer, aldrig hårdkodat innehåll i HTML:

- `index.html` — skalet, byggs en gång
- `style.css` — utseendet
- `script.js` — motorn: läser datan, autoplay, övergångar, progress
- `projects.js` — **all data**, en post per projekt/sak att visa

En post = `{titel, bild/kod, text, url, year}`. Att lägga till eller ta
bort en post är en redigering i `projects.js`, aldrig en ändring i de
andra tre filerna. Det här är kärnkravet Kent alltid ställer ("lätt att
lägga till och ta bort") — bygg för det direkt, fråga inte om det ska vara
så.

Två poständ, välj rätt:
- `kind: "screenshot"` — kräver en bild i `images/` (se avsnitt 3)
- `kind: "code"` — renderas som ett stiliserat kodkort direkt i HTML/CSS,
  inget bildfilsbehov. Använd när posten inte har en levande webbsida att
  fotografera (gamla projekt, ren backend-kod, notebook-kod).

## 2. Flera hastigheter = en URL-parameter, inte flera filer

Om Kent vill kunna dela olika tempo till olika sammanhang (snabbt för
sociala flöden, seriöst för någon som faktiskt sitter och tittar en
stund): lös det med **en enda sida och en query-parameter**
(`?hastighet=rapp/lagom/serios` eller motsvarande), inte tre separata
HTML-filer. Samma `projects.js` för alla varianter — bara sekunderna per
post skiljer. Ger Kent exakt vad han vill ha: flera delbara URL:er, en
enda fil att underhålla.

Kalibrering som fungerade bra i det första projektet (justera efter
sammanhang, inte en universell sanning): rapp ~7 sek, lagom ~20 sek,
seriös ~45 sek per post. Räkna alltid ut och nämn total speltid per
variant (antal poster × sekunder) — det hjälper Kent bedöma om siffrorna
känns rätt.

Lägg också till en liten, diskret växlingsknapp-rad i sidhuvudet så
hastigheten kan bytas utan att skriva om URL:en för hand — uppdatera URL:en
med `history.replaceState` när den byts, så länken förblir delbar.

**Standard utan `?hastighet=`-parameter: `rapp`, inte `lagom`.** Kent vill
att en besökare direkt uppfattar att det är ett bildspel (snabb rörelse
signalerar det), inte en statisk sida — beslutat 2026-08-04, gäller som
standardval framåt om inget annat sägs.

## 2b. Manuell styrning är standard, inte ett extra-tillval

Bygg alltid in manuell kontroll vid sidan av autoplay, inte bara som en
eftertanke:
- **Diskreta pilknappar** (‹ ›) i kanterna av bildytan, halvtransparenta i
  vila (samma "diskret tills man hovrar/tittar dit"-princip som
  hörnknapparna i `kent-bygg-sidor`).
- **Svep vänster/höger på mobil** — `touchstart`/`touchend` på scenen,
  tröskel runt 40px, kräv att rörelsen är övervägande horisontell så det
  inte krockar med vertikal skroll.
- **En synlig paus/spela-knapp**, inte bara en tangentbordsgenväg
  (mellanslag är osynligt och oåtkomligt på en touch-enhet utan
  tangentbord).
- **Manuell navigering ska respektera pausat läge** — att bläddra manuellt
  medan bildspelet är pausat ska inte tyst starta om autoplay. Håll ett
  eget `isPaused`-flagga i stället för att härleda pausstatus från om en
  timer råkar vara aktiv.
- Vid återupptagning: starta om **bara** förloppsindikatorn och timern för
  aktuell bild — anropa inte hela render-/crossfade-funktionen igen, det
  ger en onödig blinkning av en bild som redan visas.

## 3. Skärmdumpar: headless Chrome, absolut Windows-sökväg

För poster med en levande webbsida — ta en riktig skärmdump, gissa inte
och bygg inte platshållare som "klart nog":

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new \
  --disable-gpu --hide-scrollbars --window-size=1600,1000 \
  --screenshot="C:\Users\kentl\...\images\namn.png" "https://url"
```

**Viktig fallgrop:** `--screenshot` måste vara en **absolut Windows-sökväg**
(`C:\...`), annars ger Chrome "Åtkomst nekad" trots att bash-arbetskatalogen
redan är rätt mapp — en relativ sökväg (`namn.png`) misslyckas tyst med
den felkoden.

Bygg alltid en fallback i `script.js` för trasiga/saknade bilder (`onerror`
på `<img>` som byter till en genererad platshållare med projektnamnet) —
motorn ska aldrig visa ett trasigt bild-ikon.

**Beskärning: gör `object-position` per projekt, gissa inte en global
regel.** Prövat båda hållen (2026-08-04): en global `left top`-regel för
alla skärmdumpar såg bra ut för vissa sidor men klippte fel för andra —
det beror på var i just den skärmdumpen det viktiga innehållet råkar
sitta, inte på en generell sanning om webbsidors layout. Lägg därför till
ett valfritt `imagePosition`-fält per post i `projects.js`
(`img.style.objectPosition = project.imagePosition || <standard>`) och
låt Kent titta på varje bild och avgöra. Standard (`top center`) fungerar
för de flesta; sätt en override bara där Kent konkret pekat ut att den
klipper fel.

## 4. Säkerhet i återanvänd kod: uteslut, beskär inte

Om ett kodkort (`kind: "code"`) återger riktig kod från ett äldre projekt
och den koden råkar innehålla en hårdkodad nyckel/hemlighet: **ta helt
bort den raden ur textsträngen** som skrivs in i `projects.js`, lita inte
på CSS-beskärning eller att "det syns inte på skärmen ändå". Flagga fyndet
för Kent även om nyckeln sannolikt redan är död (gammal, publik i flera
år) — han ska få veta, inte bara få det tyst fixat.

## 5. Testa lokalt: HTTP-server, inte `file://`

Claude Browser-panelen renderar filer utanför projektmappen som statiska
ögonblicksbilder — CSS och JS körs inte. Starta i stället en enkel lokal
server innan testning:

```bash
cd <mapp> && python -m http.server 8791 &
```

Navigera Browser-panelen till `http://localhost:8791/index.html`, inte
till `file://...`. Testa: crossfade-övergången, samtliga
hastighetsvarianter, loopen (går den runt till post 1 igen?), och
responsiv layout på mobilbredd (`resize_window` preset `mobile`).

## 6. Källor: leta upp, verifiera, annotera — tvinga aldrig fram en koppling

Om projekten som visas har motsvarande blogginlägg (Kents två bloggar,
`controllerutangranser.wordpress.com` och `klel.wordpress.com`, båda med
en `/category/ai/`): sök upp exakta permalänkar, verifiera med en HTTP-
statuskontroll att de fungerar, och lägg till som en diskret, annoterad
Harvard-källa per post — men bara där en äkta, innehållsmässig matchning
finns. Lämna resten omärkta hellre än att gissa fram en svag koppling
(se `kent-meta-regler-for-code`, Regel 2 och 3).

## 7. Behåll kreativiteten — särskilt viktigt just här

Presentationer av det här slaget riskerar att bli en ren checklista av
beslutade format. Kent har uttryckligen bett om att strukturen aldrig ska
kväva lusten att göra något roligt eller oväntat (se PRD:ns inledande
citat). Udda, lekfulla projekt hör hemma här på samma villkor som de
seriösa — ett av de starkaste exemplen hittills var en öl-kalkyl för en
resa till Tyskland, som fick över 3 000 klick på LinkedIn. Föreslå gärna
sådana inslag proaktivt i stället för att bara vänta på seriösa kandidater.

## 8. Datumbadge på varje post — månad när den finns, kronologisk ordning som standard

Varje post ska ha en synlig datumbadge (samma komponent oavsett `kind`),
och standardordningen är kronologisk (äldst → nyast) om inte Kent
uttryckligen vill något annat (t.ex. senaste-först, eller grupperat
tematiskt). Ange bästa kända källa för varje datum — sidans egen text, ett
blogginlägg, ett repos commit-/push-datum, eller Kents egen uppgift — och
var öppen i PRD:n om ett datum är en uppskattning snarare än bekräftat.
Hitta aldrig på ett exakt datum för att slippa en lucka.

**Använd månad när den är känd, inte bara år.** Formatet `<mån><år>` utan
mellanslag (`apr2023`, `jul2026`) i stället för bara `2023`/`2026` — ett
helt år är en grov enhet, och skillnaden mellan tidigt och sent på året
(t.ex. jan kontra dec samma år) kan vara nästan lika stor som skillnaden
mellan två olika år. Månadsprecision avgör dessutom den faktiska
ordningen mellan poster som annars bara delar årtal — kontrollera alltid
om en ny/ändrad datumkälla flyttar en post i sekvensen, inte bara vad som
står i badgen.

**Anta inte att ett projekt fortfarande pågår.** Skriv inte per automatik
"varje vecka sedan ..." om inte serien faktiskt är aktiv — kolla källan
(t.ex. sidans egen lista) för ett slutdatum och antal, och skriv i dåtid
med start och slut om projektet är avslutat. Kent har ett återkommande
mönster: håller på med en sak, blir bättre och bättre på den, når sedan
en punkt där annat lockar mer och går vidare — det är inte ett
misslyckande, utan den naturliga livscykeln för den här sortens
sidoprojekt. Bra kontext att ha med i `SPEAKER_NOTES.md` när ett projekt
faktiskt tagit slut, inte bara i den synliga captionen.

## 9. "Milestone"-avbrott mellan projekt

Korta, snabba avbrott mellan projekt-slides som lyfter stora händelser
inom generativ AI för ett givet år — ger tidsperspektiv utan att sakta ner
tempot. Implementerat som en egen `kind: "milestone"` med en **fast, kort**
visningstid (4 sekunder fungerade bra) som ignorerar `hastighet`-
inställningen helt — avbrotten ska alltid vara rappa, oavsett vilken
hastighetsvariant som spelas. Egen, mörk, centrerad visuell stil (stort
årtal + korta punkter) så de tydligt läses som ett avbrott, inte ett
projekt. Sätt dem i de kronologiska gap där inget faktiskt projekt finns
(t.ex. ett år utan egen slide).

**Research-kravet är strikt:** särskilt allt efter Claudes kunskapscutoff
(kring januari 2026) måste websökas och styrkas, aldrig fyllas i från
minnet. Föredra **primärkällor** (leverantörens egen nyhetssida/blogg,
myndighetens egen sida) framför sekundära SEO-aggregatorer — samma regel
som redan gäller i `olika_Claude_modeller/CLAUDE.md`s källhantering.
Verifiera varje länk med en HTTP-statuskontroll; en 403 vid automatiserad
hämtning betyder ofta bot-skydd snarare än en död länk, men uteslut ändå
källan ur slidesen om den inte går att bekräfta — hellre en kortare,
helt verifierad lista än en längre med en osäker post.

**Utveckling (`Nr1`, 2026-08-05):** det fasta, ignorera-hastigheten-
mönstret ovan visade sig bara passa rena faktaavbrott. När `Nr1` la till
en *personlig* variant (samma årtal, men "hur jag jobbade" i stället för
"vad som hände") behövde den variabelt innehåll och variabel visningstid
i stället — se `PRD_presentation_ai_projekt.md`, Ändringslogg v24/v27,
för `tier`-systemet och det nya `kind: "year-card"` som ersatte
`"milestone"` helt i det projektet. Bedöm från fall till fall: ett rent,
kort faktaavbrott kan fortfarande passa `"milestone"`-mönstret som det
står ovan; två sammanlänkade kort per period (objektivt + personligt)
passar bättre year-card-mönstret.

## 15. Kandidatprojekt: en egen fil, och proaktiv sökning på Claudes eget initiativ

Håll en löpande `Kandidatprojekt.md` (en nivå under presentationens
`projects.js`, inte en bakgrundsfil som `Claude_familjen.md`) med
tänkbara framtida projekt-slides — namn, beskrivning, fullständig
klickbar länk, om en bild finns, och en status (Övervägs/Infört/Avfört).
Ett block per kandidat, blankrad mellan varje — **inte** en tät tabell,
den blir oläsbar så fort beskrivningarna är mer än ett par ord (Kent
visade konkret hur en sådan tabell radbryter illa, 2026-08-05).

**Logga direkt, inte i efterhand.** Så fort ett tänkbart projekt nämns i
en konversation — även i förbigående, även om det bara är en lös tanke —
lägg till det i `Kandidatprojekt.md` samma stund. Vänta inte på att bli
ombedd, och lita inte på att det kommer ihågs till nästa session.

**Sök proaktivt, på eget initiativ, utan att bli ombedd** (tillagt på
Kents uttryckliga begäran 2026-08-05) efter fler talande, poängrika
kandidater — inte bara när Kent själv nämner ett projekt. Källor:
- `controllerutangranser.wordpress.com/category/ai/` och
  `klel.wordpress.com/category/ai/` — samma bloggar som Regel 6, men läs
  igenom fler inlägg än bara de som redan har en bekräftad koppling till
  ett befintligt projekt.
- Twitter/X, sökning på `#nyaAI` från `kentlundgren` (Kents egen tagg för
  det han kallar "nya AI"). **Känd begränsning:** X:s livesökning kräver
  inloggning och går inte att hämta direkt (gav HTTP 402 vid test
  2026-08-05) — en vanlig websökning kan hitta enskilda, redan indexerade
  inlägg som en ofullständig omväg, men täcker inte allt. Flagga för Kent
  om täckningen känns osäker, gissa inte att sökningen var uttömmande.

En hittad kandidat ska **alltid** gå till `Kandidatprojekt.md` först,
med status "Övervägs" — aldrig rakt in i `projects.js` utan att Kent
uttryckligen sagt ja. Presentera gärna nya fynd för Kent proaktivt när de
hittas ("jag såg att du skrivit om X, vill du ha den som kandidat?"), i
stället för att bara tyst lägga till dem och vänta på att han själv ska
upptäcka raden.

## 10. Ta inte en skärmdump för sanning — fråga om innebörden

En skärmdump visar *vad* som står på en sida, inte alltid *varför* den
finns eller vad den egentligen betyder för Kent. Bjärred Saltsjöbad-sliden
fick första gången en generisk caption ("samlingssida med information...
öppettider") byggd på en rimlig men fel tolkning av korten i skärmdumpen —
sidan var i själva verket intern styrelsedata (elförbrukning, medlems-
/inpasseringsstatistik) publicerad öppet som ett pro bono-
transparensbidrag till en geografiskt utspridd styrelse. Skärmdumpen
räcker för *att bilden ska visas*, men inte alltid för *att texten ska
vara sann* — vid minsta osäkerhet om vad ett projekt faktiskt är eller
varför det finns, fråga Kent i stället för att gissa fram en plausibel
beskrivning (se `kent-bygg-sidor`, regel 2: Kents upplevelse väger tyngre
än en "rimlig" tolkning utifrån).

## 11. Presentatörsanteckningar: en egen `SPEAKER_NOTES.md`, kopplad via `id`

Samma idé som PowerPoints presentatörsanteckningar — bakgrundsdata Kent
vill ha till hands när han pratar om en bild live, men som aldrig ska
synas på själva sidan eller för publiken. Lägg det i en fristående fil,
`SPEAKER_NOTES.md`, ett avsnitt per projekt, rubricerat med **samma `id`**
som redan finns på varje post i `projects.js` — det är den naturliga
nyckeln, ingen anledning att hitta på ett nytt kopplingsschema. Fyll på
efter behov (tomma avsnitt är okej, betyder bara "inget antecknat än").
Koppla **inte** filen till sidans UI/kod — den är ett rent
referensdokument för Kent, inte en funktion i presentationen. Länkar Kent
ger till egna, privata källor (t.ex. ett Google Sheets-dokument) sparas
som de är utan HTTP-verifiering — det är hans egna anteckningar till sig
själv, inte en publik källa som ska styrkas (skilj det från Regel 6:s
krav på verifierade länkar, som gäller citerbara/publika källor).

## 12. Klickbara begrepp vid första förekomst — diskret, delad ordlista

Om presentationen nämner AI-modeller/AI-verktyg/organisationer (Claude,
Cursor, GitHub, Anthropic osv): bygg en delad `glossary.js` med
`{term, url}`-poster och länka **bara den första förekomsten** av varje
term, i innehållets egen kronologiska ordning (array-ordningen i
`projects.js`) — inte i den ordning en besökare råkar bläddra (bakåt,
loop). Kör länkningen en gång vid sidladdning, innan något renderas, så
resultatet är oberoende av navigeringsriktning. Sortera termlistan
längst-först vid matchning så "Claude Code" vinner över "Claude",
"GitHub Pages" över "GitHub" osv — annars dubbelmatchas delsträngar.

**Håll markeringen diskret** (Kents uttryckliga krav, 2026-08-05): ingen
egen färg, inget solitt understreck — `border-bottom: 1px dotted
currentColor` smälter in i omgivande text oavsett bakgrund (kodkort, ljus
text-pane, mörk milestone-pane) och signalerar "klickbar" utan att skrika.

**Fallgrop att kolla efter:** om presentationen redan har en `a`-regel
skopad till en föräldraklass (t.ex. `.milestone-facts a { display:
block }`, tänkt för en käll-badge) — den regeln träffar även dina nya
inline-term-länkar om de delar förälder. Skopa den befintliga regeln till
en egen klass (t.ex. `a.fact-source`) i stället för att låta den vara
generisk, annars blir varje länkad term sin egen rad.

## 13. Precisa datum i milstolpar — jämför lanseringstakt, gissa aldrig

När en milstolpe nämner en produktlansering (t.ex. "Claude 3 lanseras
2024"): ange månad+år, inte bara år, och verifiera mot primärkällan (se
Regel 9 om primärkällor). Om flera generationer av samma produkt nämns
(Claude 3 → 4 → 5): väv in en kort jämförelse av tiden mellan lanseringar
direkt i brödtexten — det konkretiserar "hur fort det går" bättre än att
bara lista årtal separat. Exempel: "Claude 3 (mars 2024) ... Claude 4 kom
drygt ett år senare (maj 2025)."

**Var ärlig om staggerade lanseringar.** Om en "generation" (t.ex. "Claude
5") i själva verket rullades ut i flera separata steg (Fable, Sonnet,
Opus, olika datum) — skriv inte som om det var en enda lansering. En kort
parentes ("i tre steg: Fable, Sonnet, Opus") räcker, hellre än att
fabricera ett enda datum för något som inte var en enda händelse.

**En 403 vid verifiering är inte alltid en död länk** (se redan Regel 9),
men om primärkällans sida är JS-renderad kan även en riktig, levande sida
döljas för `curl`/`WebFetch` (inget datum syns i rå-HTML). Om användaren
själv anger ett datum du inte kan verifiera direkt mot primärkällan:
kontrollera mot oberoende sekundärkällor (nyhetsbevakning) innan du litar
på det, men skriv inte "obekräftat" om två oberoende källor redan stämmer
överens — notera i stället varifrån precisionen kommer.

## 14. Avslutande referens-slides — begreppslista + Harvard-källförteckning + läslista

Om presentationen har externa källor (blogginlägg, milstolpekällor,
landmärkes-artiklar) och/eller ett `glossary.js` (Regel 12): avsluta
sekvensen med egna `kind`-slides innan loopen går runt igen:

- `kind: "glossary"` — alfabetisk lista över **samtliga** termer i
  `GLOSSARY`, oavsett om de faktiskt blev inline-länkade (en besökare som
  missade en snabb slide ska ändå kunna hitta termen här).
- `kind: "bibliography"` — full, annoterad Harvard-källförteckning
  (alfabetisk, se `kent-meta-regler-for-code` Regel 2) som samlar **alla**
  källor som redan citerats någonstans i presentationen (milstolpe-badges,
  projekt-`source`-länkar) plus egna blogginlägg. En källa citerad inline
  ska alltid ha en fullständig motsvarighet här — annars är citeringen
  ofullständig.
- `kind: "readinglist"` (tillagt 2026-08-11, `Nr1` Ändringslogg v35/v36) —
  skild från `bibliography`: inte källor som redan citerats i
  presentationen, utan ett fristående, kurerat urval av Kents egna
  blogginlägg om ämnet, valt för att ge "en känsla för vad jag skrivit".
  Struktur: `{year, title, intro, picks: [{title, url, blog, date, note}]}`
  — `year` renderas som en liten badge (`.ref-year`) ovanför rubriken,
  samma princip som årskortens badge fast anpassad för `reference-pane`s
  ljusa bakgrund. Varje `note` ska spegla inläggets faktiska innehåll
  (hämtat/verifierat, inte gissat fram enbart ur rubriken), även om
  **urvalet** av vilka poster som tas med kan göras rubrik-först för att
  hålla nere researchvolymen på en stor blogg-kategori (Kents egen
  instruktion: "fokusera på själva titlarna" vid gallring bland många
  kandidater — men verifiera sedan innehållet i de som faktiskt väljs).

  **Placering — vävd in i tidsordningen, inte samlad sist** (Kent
  förtydligade detta uttryckligen i `Nr1`, v36, efter att en första version
  la alltihop som ett enda slide sist): om presentationen som helhet är
  organiserad kronologiskt per år (year-cards, projekt daterade per år),
  ska en läslista av den här typen delas upp **en post per år** och
  placeras direkt efter årets sista faktiska innehåll, före nästa års
  year-card — inte klumpas ihop i en enda avslutande slide. Kontrollera
  att varje års delmängd faktiskt har egna kandidater (en naiv uppdelning
  av ett redan gjort urval kan råka lämna ett år tomt om urvalet gjordes
  utan hänsyn till årsbalans — omvärdera urvalet, inte bara ompositionera
  det). `glossary`/`bibliography` förblir sist, efter samtliga årsvisa
  läslistor — de är inte tidsbundna på samma sätt.

  **Stödfiler:** om researchen för urvalet innebär att hela en bloggs
  kategori paginerades igenom, spara den fullständiga inventeringen som en
  egen bruttolista (`AI_bloggposter_<blogg>.md`, klickbara rubriker,
  kronologisk ordning) i stället för att kasta bort den — samma
  bruttolista-först-urval-sen-princip som `Kandidatprojekt.md` och
  `Claude_familjen.md` redan följer.

Låt samtliga respektera vald hastighet (`rapp`/`lagom`/`serios`) i stället
för milstolparnas fasta korta visningstid — de har mer text än ett
milstolpe-avbrott och är inte tänkta att vara lika snabba. Ge panelen egen
`overflow-y: auto` eftersom listorna växer över tid.

**Möjlig framtida utökning, inte byggd än (flaggad 2026-08-05):** en
gemensam "brutto"-källpool över flera presentationer (`Nr1`, `Nr2`, ...)
med ett enkelt urvalssteg per presentation, i stället för att varje
presentation håller sin egen kompletta lista. Se PRD:n för `Nr1`,
Ändringslogg v20, för Claudes rekommendation om enkel `id`+urval-lista i
`PROJECTS`-mönstret — inte beslutad, kräver Kents godkännande innan den
byggs.

## Uppdateringslogg

- 2026-08-04 (v1): Skapad efter det första fullständiga projektet i det
  här mönstret (`Presentationer/Nr1`, åtta projekt). Kent frågade
  uttryckligen om ett sådant här skill skulle vara lämpligt att skapa nu,
  med uttrycklig avsikt att det utvecklas vidare över tid i takt med fler
  presentationer.
- 2026-08-04 (v2): Flyttad från kontonivå (`~/.claude/skills/`) till
  `Presentationer/.claude/skills/` på Kents uttryckliga begäran — han vill
  kunna se och länka till skillet på GitHub, och en nivå ovanför `Nr1`
  täcker framtida `Nr2`/`Nr3` automatiskt. Ett tunt pekar-skill lämnat kvar
  globalt. Ny Regel 8 (årtal på varje post + kronologisk standardordning)
  och Regel 9 (den ännu obyggda milestone-avbrotts-idén, dokumenterad som
  kandidat snarare än beslutad) tillagda samma dag.
- 2026-08-04 (v3): Regel 9 uppdaterad från kandidat till byggt mönster —
  milestone-avbrotten implementerades samma dag, med skärpt krav på
  primärkällor (inte sekundära SEO-aggregatorer) efter research av
  faktiska generativ AI-händelser 2024–2026. Ny Regel 10 tillagd: en
  skärmdump visar inte alltid *varför* ett projekt finns — vid osäkerhet
  om ett projekts verkliga syfte, fråga Kent i stället för att gissa fram
  en plausibel beskrivning (lärdom från en felaktig Bjärred Saltsjöbad-
  caption, rättad samma dag).
- 2026-08-04 (v4): Ny Regel 2b tillagd: manuell styrning (pilknappar, svep
  på mobil, synlig paus/spela-knapp) är standard, inte ett tillval — och
  ska respektera pausat läge i stället för att autoplay tyst startar om
  vid manuell navigering. Standardhastighet i Regel 2 ändrad från `lagom`
  till `rapp`, så ett bildspel känns igen direkt.
- 2026-08-04 (v5): Lärdom tillagd i Regel 3: bildbeskärning ska ankras
  `left top`, inte centreras — en centrerad beskärning klipper bort
  rubriken/vänsterkanten på skärmdumpar så fort bildkällan är bredare än
  visningsytan. Upptäckt av Kent via två skärmdumpar med markerade pilar.
- 2026-08-04 (v6): Regel 3 omprövad samma dag — Kent testade `left top`
  mot alla sex skärmdumpsprojekt och ville ha centrerad beskärning
  tillbaka för fem av dem, bara Vindkraftskalkyl blev bättre med
  vänsterankring. Global regel ersatt med ett per-projekt `imagePosition`-
  fält — rätt beskärning är en bild-för-bild-bedömning, inte en generell
  sanning. Ny Regel 11: en fristående `SPEAKER_NOTES.md`, kopplad via
  projektens `id`, för Kents egna presentatörsanteckningar (bakgrundsdata,
  historik, privata källänkar) — samma idé som PowerPoints
  presentatörsvy, aldrig synlig på själva sidan.
- 2026-08-04 (v7): Regel 8 utökad: använd `<mån><år>`-format på
  datumbadgen när månaden är känd, inte bara år — Kent påpekade att
  skillnaden mellan t.ex. jan och dec samma år är nästan ett helt år, en
  skillnad en ren årtalsbadge döljer. Månadsprecisionen avslöjade att en
  post (Bjärred Saltsjöbad) låg fel placerad i sekvensen — kontrollera
  alltid om ett mer exakt datum flyttar en posts plats, inte bara dess
  badge-text.
- 2026-08-04 (v8): Lärdom tillagd i Regel 8: anta inte att ett projekt
  fortfarande pågår — Fredagsquiz-captionen sa fortfarande "varje fredag
  sedan ..." trots att serien avslutats efter 23 quiz. Kolla källan för
  ett slutdatum innan en pågående-formulering används. Kents eget
  återkommande arbetsmönster (håller på en sak, blir bättre, går sedan
  vidare till nästa när annat lockar mer) dokumenterat som kontext att
  väva in i `SPEAKER_NOTES.md` när ett projekt visar sig ha tagit slut.
- 2026-08-05 (v9): Tre nya regler efter en session i `Nr1` som lade till
  klickbara begrepp, precisa milstolpe-datum och avslutande referens-
  slides. Regel 12: delad `glossary.js`, länkar bara första förekomsten
  (i innehållets egen ordning, inte besökarens), diskret
  `border-bottom: dotted`-stil på uttrycklig begäran (ingen färg/solitt
  streck) — med en verklig fallgrop dokumenterad (en `a`-regel skopad till
  fel förälder kan av misstag göra inline-länkar till block-element).
  Regel 13: milstolpar ska ange månad+år och jämföra lanseringstakt mellan
  produktgenerationer, aldrig fabricera ett enda datum för en staggerad
  lansering. Regel 14: två avslutande `kind`-slides (`glossary`,
  `bibliography`) som samlar allt som redan citerats, egen scrollbar
  hastighet. En öppen, obeslutad idé flaggad: en delad "brutto"-källpool
  över flera presentationer med per-presentation urval — se `Nr1`s PRD,
  Ändringslogg v20.
- 2026-08-05 (v10): Regel 9 kompletterad med en utvecklingsnot — det fasta
  milstolpe-mönstret passade inte längre när `Nr1` la till en personlig
  variant med variabelt innehåll; ersattes där av `kind: "year-card"` +
  `tier`-system (se `Nr1`s PRD, Ändringslogg v24/v27). Ny **Regel 15**:
  håll en `Kandidatprojekt.md` per presentation (block med blankrad
  mellan varje, inte en tät tabell — Kent visade konkret hur en tabell
  radbryter illa), logga tänkbara projekt direkt när de nämns, och **sök
  proaktivt på eget initiativ** efter fler kandidater i Kents bloggar och
  på X/Twitter (`#nyaAI`) — inte bara reaktivt när han själv nämner ett
  projekt. Känd begränsning dokumenterad: X:s livesökning kräver
  inloggning (HTTP 402 vid test), bara delvis kringgåbar via vanlig
  websökning.
- 2026-08-11 (v11): Ny klargörande sektion om vad `Nr1` konkret är (Kents
  visning av vad han byggt/gjort med generativ AI 2023–2026) — tillagd
  efter att Claude i en session missförstod "min presentation" som en
  extern, okänd fil och sökte fel innan Kent rättade till det. Ny
  `kind: "readinglist"` dokumenterad i Regel 14: ett fristående, kurerat
  urval av Kents egna blogginlägg (skilt från `bibliography`s redan-
  citerade källor), byggt genom att först gallra ~180 kandidater
  rubrik-först (Kents uttryckliga instruktion, för att hålla nere
  researchvolymen) och sedan verifiera sakinnehållet i endast de tio som
  faktiskt valdes — se `Nr1`s PRD, Ändringslogg v35.
- 2026-08-11 (v12): Regel 14 omskriven samma dag efter att Kent
  förtydligade att en läslista av `readinglist`-typ ska **vävas in i
  tidsordningen** (en post per år, direkt efter årets sista innehåll) i
  stället för klumpas ihop sist — den första versionen (v11) hade fel
  antagande. Ett omtag på urvalet krävdes också, inte bara en
  ompositionering: det ursprungliga urvalet var skevt (0 poster från 2023,
  7 av 10 från 2025) och hade lämnat ett tomt 2023-slide om det bara
  delats upp som det var. Ny stödfil-regel: spara en hel bloggkategoris
  pagineringsresultat som egen `AI_bloggposter_<blogg>.md`-bruttolista i
  stället för att kasta bort researchen. **Design-lärdom tillagd:**
  återanvänd inte en CSS-klass mellan två visuellt olika roller — `Nr1`
  fick ett äkta layoutfel (rubrik och bloggnamn såg hopklistrade ut) för
  att en ny länktyp (en framträdande, klickbar rubrik) återanvände en
  klass gjord för en annan roll (källförteckningens små, dämpade
  url-länkar). Ett mellanslag i markupen räcker inte om de två elementens
  CSS gör dem visuellt identiska — ge nya roller egna klasser, och
  verifiera med en riktig skärmdump (inte bara DOM-textinnehåll, som döljer
  visuella radbrytningar `display: block` ger).
