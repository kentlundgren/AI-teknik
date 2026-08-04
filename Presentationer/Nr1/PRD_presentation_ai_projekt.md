# PRD – Presentation av genomförda AI/webb-projekt

**Namn:** PRD_presentation_ai_projekt
**Plats:** `Presentationer/Nr1/PRD_presentation_ai_projekt.md`
**Skapad:** 2026-08-04
**Version:** 3 (teknikval omprövat till HTML/CSS/JS för extensibilitet; fasindelad utbyggnad beslutad; fullständig projektlista fortfarande öppen)
**Status:** Under uppbyggnad — kärninnehåll, teknik och fasindelning beslutade, men den fullständiga listan av projekt (fas 1 vs senare) är ännu inte låst.
**Typ:** Grund-PRD (helt nytt projekt)

## 1. Bakgrund

Kent har över tid byggt flera fristående AI- och webb-projekt: Claude-kompassen
(interaktivt verktyg om Claudes ekosystem), en jämförelse av Sveriges och
USA:s statsskulder, en sida som samlar information om Bjärred Saltsjöbad, och
en vindkraftskalkyl (flera versioner finns, se 4a). Han vill nu samla ett
urval av dessa i en presentation som visar upp vad han byggt.

**Tillägg 2026-08-04:** Kents ursprungliga formulering nämnde att "skapa en
RAG" som ett steg i processen. Vid uppföljande fråga klargjorde han att detta
var en felsägning — han avsåg att skapa en **PRD**, inom AI-teknik-repot
(https://github.com/kentlundgren/AI-teknik), inte en teknisk
retrieval-lösning. Ingen RAG-komponent ingår alltså i det här projektet.

## 2. Syfte

- Visa upp genomförda AI/webb-projekt för rekryterare, som en del av en
  jobbsökningsprocess (portfolio-syfte).
- Paketera flera spridda projekt (olika repos/domäner: kentlundgren.github.io
  och kentlundgren.se) till en sammanhållen, snabb berättelse.

## 3. Omfattning

**Ingår:**
- En HTML/CSS/JS-sida som *härmar* en PowerPoint-presentation visuellt, med
  automatiska, förhållandevis snabba bildväxlingar — självspelande, utan att
  någon behöver klicka (kiosk-läge i webbläsare, t.ex. på en skärm/monter).
  Se 4g för det omprövade teknikbeslutet.
- En datadriven struktur (t.ex. `projects.js`) där varje projekt är en post
  i en lista — så att lägga till eller ta bort ett projekt är en enkel
  redigering, inte en ombyggnad av sidans kod.
- Innehåll som lyfter fram minst: Claude-kompassen, statsskuld
  Sverige/USA, Bjärred Saltsjöbad, vindkraftskalkyl.
- Denna PRD-process, enligt Claude-kompassens `PRD_generell.md`-mall.

**Ingår inte:**
- Teknisk RAG-lösning (bekräftat bortvalt — se Bakgrund, var en felsägning).
- En riktig `.pptx`-fil öppningsbar i PowerPoint-programvaran (se avvägning
  i 4g — kan bli ett separat, senare steg om behovet uppstår).
- Ljud, video-inspelning eller Kent som presentatör på plats — presentationen
  ska kunna gå av sig själv.
- Vidareutveckling av de underliggande källprojekten (Claude-kompassen m.fl.)
  — presentationen sammanfattar dem, bygger inte ut dem.

## 4. Frågor och beslut

**a. Vilken vindkraftskalkyl ska visas? — BESLUTAT ✓**
Kent bekräftade 2026-08-04: senaste versionen ligger på
[kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html)
(inte kentlundgren.se-länken som hittades via sökning tidigare — den var fel/äldre).

**b. Innehållsdjup per källprojekt — BESLUTAT ✓**
En bild (skärmdump) per projekt plus kort text till bilden. Samma format för
alla projekt i presentationen.

**c. Antal slides och sekunder per bildväxling — BESLUTAT ✓**
20 sekunder per projekt/bild, automatisk växling.

**d. Var och när ska presentationen visas? — ÖPPEN**
Kiosk-/självspelande-läge är beslutat (se fråga om visningssätt nedan), men
fysisk plats/tillfälle (monter, skärm hos en arbetsgivare, bifogad fil i en
ansökan) är inte klarlagt.

**e. Var ska filerna för själva presentationen ligga? — I HUVUDSAK LÖST ✓**
`Presentationer/Nr1/` inom AI-teknik-repot, bekräftat av Kent
(https://github.com/kentlundgren/AI-teknik). Mappen är tom och genuint ny
(känt-nytt läge, inget git-repo krävs utöver det befintliga AI-teknik-repot
som redan täcker mappen).

**f. Behövs ett SPEC.md-steg härifrån? — ÖPPEN**
Sannolikt nej för själva innehålls-/designvalet (det är redaktionellt, inte
tekniskt komplext) — men möjligen ja för det tekniska bygget av .pptx-filen
om exakta timing-/övergångsvärden ska scriptas (t.ex. via python-pptx).
Avgörs när produktionsordningen (avsnitt 6) är konkret.

**g. Vilken teknik byggs presentationen med? — BESLUTAT ✓ (omprövat 2026-08-04)**
Ursprungligt beslut var en äkta `.pptx`-fil via `pptxgenjs`. Kent förtydligade
samma dag: "PowerPoint-format" avsåg utseendet/upplägget ("härma"
PowerPoint), inte kravet att filen faktiskt måste öppnas i PowerPoint-
programvaran — och han vill dessutom kunna lägga till och ta bort projekt
relativt enkelt över tid.

**Nytt beslut: HTML/CSS/JS**, av tre skäl:
1. **Extensibilitet** — en datadriven lista (t.ex. `projects.js`, en array
   med `{titel, bild, text, url}` per projekt) gör det till en enrads-ändring
   att lägga till eller ta bort ett projekt, utan att bygga om en binärfil.
   En `.pptx` kräver att byggskriptet körs om för varje ändring.
2. **Konsekvens med Kents övriga arbetssätt** — samtliga källprojekt
   (Claude-kompassen, statsskuld, Bjärred Saltsjöbad, vindkraftskalkylen)
   är redan HTML/CSS/JS-sidor publicerade via GitHub Pages. Samma
   teknik och samma publiceringsflöde för presentationen själv.
3. **Självspelande i kiosk-läge är enkelt** — en webbläsarflik i helskärm
   (F11) med `setInterval`/CSS-transitions för automatisk bildväxling och
   loop är ett naturligt sätt att visa upp innehållet på en skärm/monter,
   utan att PowerPoint-programvara behöver finnas installerad där.

**Avvägning, redovisad öppet:** det blir *inte* längre en fil som kan
öppnas i riktiga PowerPoint eller bifogas i en ansökan som `.pptx`. Om det
behovet uppstår senare (t.ex. bifoga i en jobbansökan) är närmaste väg att
skärminspela webbsidan som video, eller — som ett separat, senare steg —
bygga en `.pptx`-export av samma datalista. Ingen sådan export ingår i
denna PRD:s omfattning (se avsnitt 3).

**h. Fullständig lista av projekt att visa — ÖPPEN**
Kent vill ha fler än de fyra ursprungliga exemplen, prioriterat mot senast
uppdaterade, plus eventuellt ett medvetet gammalt exempel (2023, "generativ
AI:s barndom") för kontrast. Kandidater identifierade via Kents publika
GitHub-repos, kontrollerade för live GitHub Pages-sida (krav: bild behövs
per projekt):

| Repo | Senast ändrad | Live sida på `kentlundgren.github.io/<repo>/`? |
|---|---|---|
| ArbetenSokta | 2026-08-03 | Ja (200) |
| generativai-react | 2026-07-28 | Nej (404 på standardsökväg) |
| Grok | 2026-06-13 | Ja (200) |
| 1a_Claude_code | 2026-06-01 | Ja (200) |
| Gemini_Claude_CLI | 2026-01-06 | Ja (200) |
| ekonomivisualisering | 2025-03-25 | Nej (404) |
| mitt-skogsvarde-projekt | 2025-04-13 | Ja (200) |
| aktieutveckling | 2024-02-15 | Nej (404) |
| transkribering | 2023-04-28 | Nej (404) — enda 2023-kandidaten hittills |
| temperatur | 2023-04-24 | Nej (404) — enda andra 2023-kandidaten |

De fyra med 404 kan ändå ha innehåll på en annan undersökväg (t.ex. inte
publicerat via Pages, eller `index.html` i en undermapp) — okontrollerat.
Ingen av 2023-kandidaterna har en bekräftad live-sida än, vilket är ett
problem givet kravet på bild per projekt (4b). Kent behöver bekräfta
slutlig lista, ordning och om en 2023-bild ska tas fram på annat sätt
(t.ex. skärmdump av kod/notebook i stället för en webbsida).

**Tillägg 2026-08-04:** Kent pekade även ut sina två bloggars AI-kategorier
som källor — de innehåller ofta egna bilder och (viktigt för 4b) redan
skriven text som kan återanvändas som bildtext i stället för att skrivas om
från noll:
- https://controllerutangranser.wordpress.com/category/ai/
- https://klel.wordpress.com/category/ai/

Genomgång av båda gav flera ytterligare kandidatprojekt utöver GitHub-listan
ovan, varav några sticker ut som tematiskt bredare än de fyra kärnprojekten:

| Projekt/blogginlägg | Källa | Varför intressant |
|---|---|---|
| Frans G. Bengtsson-research (RAG) | klel.wordpress.com, 1/8 & 15/7 | Ett *faktiskt* RAG-projekt — extra relevant efter felsägningen i uppstarten av den här PRD:n |
| VM 2026-tips (familjens tips vs odds) | controllerutangranser, 10/6 | Socialt/personligt, bryter av mot ekonomi-tunga projekt |
| Kassarapport-automatisering (3 badanläggningar) | controllerutangranser, 17/6 | Business-automation, stark för en controller-/ekonom-målgrupp |
| "Ett vindkraftverk, fem sanningar" (multi-perspektiv) | controllerutangranser, 3/7 | Kan vara samma `Vindkraft`-repo som redan är kärnprojekt, eller en variant — måste avgöras mot 4a |
| Claude-kostnad (usage-tracker för eget abonnemang) | klel.wordpress.com, 4/8 | Meta-exempel: AI som håller koll på sig själv |

Detta breddar kandidatlistan ytterligare och gör frågan om **hur många
projekt totalt** (och därmed total speltid vid 20 sek/projekt) ännu
viktigare att låsa med Kent innan produktion startar.

**i. Fasindelning: starta smalt, bygg ut löpande — BESLUTAT ✓**
Kent föreslog 2026-08-04 att börja med ett mindre antal projekt (de fyra
kärnprojekten) och lägga till fler över tid, snarare än att låsa hela
listan innan något byggs. Detta passar den datadrivna HTML/CSS/JS-lösningen
i 4g väl — fas 2+ är bara nya poster i `projects.js`, inget nytt
utvecklingsarbete. Fas 1-omfattning (exakt vilka fyra, och om något extra
ska med redan från start) är fortfarande en del av öppen fråga 4h.

## 5. Leveranser

- [x] Vindkraftskalkyl — rätt/senaste länk bekräftad (4a)
- [ ] PRD låst — alla delfrågor (4a–4i) beslutade
- [ ] Datadriven projektlista (`projects.js` eller motsvarande) med struktur
      för {titel, bild, text, url} per projekt
- [ ] Innehåll (bild + text) insamlat för startomgången av projekt (fas 1,
      se 4i)
- [ ] Självspelande HTML/CSS/JS-sida byggd: autoplay 20 sek/projekt, loop,
      PowerPoint-liknande utseende
- [ ] Testkörning i kiosk-/helskärmsläge

## 6. Produktionsordning

Preliminärt, låses när fråga 4h–4i är beslutade:
1. PRD låst
2. Bygg grundstrukturen: tom, datadriven sida som läser `projects.js` och
   spelar upp i loop (20 sek/projekt) — testas med 1–2 platshållarprojekt
3. Innehållsinsamling för fas 1-listan (skärmdumpar + text, återanvänd
   blogginläggens text där det passar)
4. Fyll på `projects.js` med fas 1-projekten, testkör i kiosk-läge
5. Lägg till fler projekt löpande (fas 2+) genom att bara utöka
   `projects.js` — ingen ombyggnad av sidans kod krävs

## 7. Källor

Interna projektreferenser (inte Harvard-citerbara — egna, redan publicerade
verktyg):
- Bjärred Saltsjöbad — https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/
- Claude-kompassen — https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
- Statsskuld Sverige/USA — https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html
- Vindkraftskalkyl — https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html
- controllerutangranser.wordpress.com/category/ai/ och
  klel.wordpress.com/category/ai/ — bild- och textkälla för fler kandidatprojekt (4h)

## 8. Status

Kärninnehåll (bildformat, timing, fasindelning) och teknikval (HTML/CSS/JS,
omprövat 2026-08-04) beslutade. Kvarstår: exakt vilka projekt som ingår i
fas 1 respektive läggs till senare (4h), var/när presentationen visas
fysiskt (4d), och SPEC.md-checkpointen (4f).

## Ändringslogg

- 2026-08-04 (v1): Skapad utifrån inledande brainstorm-konversation.
  RAG-formuleringen i den ursprungliga frågan klargjord som felsägning
  (avsåg PRD, inte en teknisk RAG-lösning). Repo-identitet kontrollerad för
  AI-teknik (känt-gott — `origin` pekar rätt, `main` i synk med
  `origin/main`). Mapp `Presentationer/Nr1/` bekräftad som rätt plats.
- 2026-08-04 (v2): Vindkraftskalkyl-länk bekräftad (4a). Innehållsformat
  (bild + text, 20 sek/projekt) beslutat (4b, 4c). Teknikval för själva
  bygget (`.pptx` via pptxgenjs) beslutat (4g). Fullständig kandidatlista
  utökad med fem GitHub-repos med bekräftad live-sida samt en tabell över
  vilka kandidater som saknar sida (4h).
- 2026-08-04 (v3): Teknikbeslutet i 4g omprövat efter att Kent förtydligade
  att "PowerPoint-format" syftade på utseendet, inte filformatet, samt att
  enkel till-/frånläggning av projekt är ett krav — bytt till HTML/CSS/JS
  med en datadriven projektlista. Avvägningen (ingen riktig `.pptx`-fil)
  redovisad öppet i 4g och i Omfattning. Ny delfråga 4i tillagd och
  beslutad: fasindelad utbyggnad (starta smalt, lägg till löpande). Två
  bloggars AI-kategorier tillagda som ytterligare käll-/bild-/textkälla,
  med fem nya kandidatprojekt identifierade (4h, uppdaterad). Leveranser
  och produktionsordning omskrivna för att spegla HTML/CSS/JS och
  fasindelningen.
