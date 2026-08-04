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
sociala flöden, seriöst för en rekryterare som faktiskt sitter och
tittar): lös det med **en enda sida och en query-parameter**
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
