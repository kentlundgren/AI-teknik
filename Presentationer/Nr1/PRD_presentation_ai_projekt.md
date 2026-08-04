# PRD – Presentation av genomförda AI/webb-projekt

**Namn:** PRD_presentation_ai_projekt
**Plats:** `Presentationer/Nr1/PRD_presentation_ai_projekt.md`
**Skapad:** 2026-08-04
**Version:** 2 (bild+text-format, 20 sek/projekt och teknikval beslutade; fullständig projektlista fortfarande öppen)
**Status:** Under uppbyggnad — kärninnehåll och teknik beslutade, men den fullständiga listan av projekt att visa är ännu inte låst.
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
- En PowerPoint-presentation (.pptx) med automatiska, förhållandevis snabba
  bildväxlingar — självspelande, utan att någon behöver klicka (kiosk-läge,
  t.ex. på en skärm/monter).
- Innehåll som lyfter fram minst: Claude-kompassen, statsskuld
  Sverige/USA, Bjärred Saltsjöbad, vindkraftskalkyl.
- Denna PRD-process, enligt Claude-kompassens `PRD_generell.md`-mall.

**Ingår inte:**
- Teknisk RAG-lösning (bekräftat bortvalt — se Bakgrund, var en felsägning).
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

**g. Vilken teknik byggs presentationen med? — BESLUTAT ✓**
En äkta `.pptx`-fil (öppnas i riktiga PowerPoint), byggd med `pptxgenjs`
(ett Node/JavaScript-baserat byggverktyg — men det är ett byggverktyg, inte
slutformatet). Automatisk bildväxling var 20:e sekund och loop läggs till
genom att direkt redigera presentationens underliggande XML efter att
grundfilen genererats (pptx är i botten en zip-arkiverad samling XML-filer).
**Inte** en HTML/CSS/JS-webbsida som efterliknar PowerPoint — Kent frågade
uttryckligen om det, men "PowerPoint-format" i ursprungsönskemålet tolkas
som ett krav på en riktig `.pptx`-fil.

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

## 5. Leveranser

- [ ] PRD låst — alla delfrågor (4a–4f) beslutade
- [ ] Innehållslista per källprojekt: vad visas, i vilken ordning
- [ ] Vindkraftskalkyl — rätt/senaste länk bekräftad (4a)
- [ ] .pptx-fil producerad med autoplay-timing
- [ ] Testkörning i självspelande läge

## 6. Produktionsordning

Preliminärt, låses när fråga 4b–4c är beslutade:
1. Innehållsinsamling/urval per källprojekt (skärmdumpar, exempel, siffror)
2. PRD låst
3. Strukturera slides: antal, ordning, timing per bild
4. Bygg .pptx-filen
5. Testkör i självspelande/kiosk-läge

## 7. Källor

Interna projektreferenser (inte Harvard-citerbara — egna, redan publicerade
verktyg):
- Bjärred Saltsjöbad — https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/
- Claude-kompassen — https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
- Statsskuld Sverige/USA — https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html
- Vindkraftskalkyl — länk obekräftad, se fråga 4a

## 8. Status

Brainstorming-fas. Fem av sex delfrågor öppna (a–d, f); en löst (e — mapp
bekräftad). Nästa steg: bekräfta vindkraftskalkyl-länk, bestämma
innehållsdjup samt antal slides/timing per bild.

## Ändringslogg

- 2026-08-04 (v1): Skapad utifrån inledande brainstorm-konversation.
  RAG-formuleringen i den ursprungliga frågan klargjord som felsägning
  (avsåg PRD, inte en teknisk RAG-lösning). Repo-identitet kontrollerad för
  AI-teknik (känt-gott — `origin` pekar rätt, `main` i synk med
  `origin/main`). Mapp `Presentationer/Nr1/` bekräftad som rätt plats.
