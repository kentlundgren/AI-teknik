# PRD – Presentation av genomförda AI/webb-projekt

**Namn:** PRD_presentation_ai_projekt
**Plats:** `Presentationer/Nr1/PRD_presentation_ai_projekt.md`
**Skapad:** 2026-08-04
**Version:** 9 (timingvärden, länkmekanism och visuell övergång för de tre hastighetsvarianterna låsta)
**Status:** Fas 1-innehåll (sju projekt), teknik, distributionsform och timing (tre varianter: rapp 7s / lagom 20s / seriös 45s) alla beslutade. Kvar innan produktion: exakta skärmdumpar/textutsnitt per projekt, var/när presentationen visas fysiskt, samt SPEC.md-checkpointen. Redo att gå vidare till byggfasen.
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

**c. Antal slides och sekunder per bildväxling — BESLUTAT ✓ (omprövad 2026-08-04)**
Ursprungligt beslut var 20 sekunder per projekt/bild. Kent föreslog samma
dag att i stället erbjuda **tre hastighetsvarianter** av samma innehåll,
snarare än att låsa en enda siffra:
- **Rapp** — kort och snabb, ca 5–10 sek/projekt
- **Lagom** — ursprungsförslaget, ca 20 sek/projekt
- **Seriös** — längre, mer eftertänksam, för den som faktiskt vill läsa

**Tekniskt enkelt givet 4g-beslutet:** eftersom sidan redan är datadriven
(samma `projects.js` för allt innehåll), behöver varianterna inte tre
separata sidor eller tre separata innehållsfiler — bara en konfigurerbar
tid per slide, t.ex. styrd via en URL-parameter
(`index.html?hastighet=rapp` / `lagom` / `serios`) som slår upp
sekundvärdet i en liten tabell. Ett innehåll, tre länkar att dela beroende
på sammanhang (snabb social scroll kontra en rekryterare som faktiskt
sitter och tittar).

**Sekundvärden — BESLUTAT ✓ (Kent bad Claude föreslå, 2026-08-04):**
- **Rapp:** 7 sek/projekt — snabbare än 10, men fortfarande läsbart (en
  kort bildtext på ~15–20 ord hinner läsas på ~5–6 sek). Totalt ~50 sek
  för alla sju fas 1-projekt — under en minut, passar en snabb social scroll.
- **Lagom:** 20 sek/projekt (oförändrat). Totalt ~2,3 min.
- **Seriös:** 45 sek/projekt — ungefär dubbelt så länge som lagom, ger tid
  att faktiskt läsa hela texten och studera skärmdumpen i lugn takt, utan
  att kännas outhärdligt segt. Totalt ~5,25 min.

**Växlingsmekanism — BESLUTAT ✓:** tre separata URL:er/länkar (via en
URL-parameter, t.ex. `?hastighet=rapp` / `lagom` / `serios`), inte en
knapp på sidan. Kent bekräftade att tre olika länkar att dela — en snabb
för t.ex. X, en seriös för LinkedIn — är rätt upplägg.

**Visuell övergång ("snygg växling") — BESLUTAT ✓:** mjuk crossfade (ca
0,6–0,8 sek, ease-in-out) mellan bilderna, kombinerat med en subtil
skalning/lyft (bilden tonar in något förstorad och landar, ingen hård
klippning). En tunn, odramatisk förloppsindikator längst ned (en linje som
fylls i under varje projekts visningstid, ett segment per projekt) visar
var i loopen man befinner sig — utan att bli ett sådant där dekorativt
"accent-streck" som ser AI-genererat/klichéartat ut. Layout: bild och text
sida vid sida på breda skärmar (kiosk/monter), staplat vertikalt på smala
skärmar (mobil, delad länk).

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

**j. Öppning: ett eller två 2023-projekt som "startskott" — BESLUTAT ✓**
Kent ville inleda presentationen med 1–2 projekt från 2023 för att sätta en
ton: "så här jobbade jag med generativ AI då, utan att skämmas — det var en
start." Efter genomgång av båda 2023-kandidaterna (4h) och Kents
bekräftelse 2026-08-04: presentationen öppnar med **`temperatur` →
`transkribering`**, i den ordningen — ett litet bågnarrativ: "det här
fungerade" följt av "och det här kämpade jag fortfarande med".

- **`temperatur`** (24/4-2023) — hämtar aktuell temperatur för Sveriges fem
  största städer via SMHI:s öppna API. Kent skriver själv i README:t att
  koden är "skriven av ChatGPT, hämtat via Poe", körd i PyCharm — ett rent,
  fungerande exempel på "AI skrev koden, jag körde den".
- **`transkribering`** (28/4-2023) — ett självdeklarerat "tredje försök"
  (peppad av podden "Teknik i akademi") att bygga ett program som
  transkriberar ljud till text via OpenAI Whisper. README erkänner öppet
  det olösta buggen ("hittar inte ffmpeg på rad 29") — precis den
  ambitiösa-men-ofärdiga, ärliga tonen Kent efterfrågar.

Föreslagen brödtext, återanvänder Kents egna ord där möjligt (kan justeras
när skärmdumparna tas fram):
- *temperatur:* "2023, tidigt: bad ChatGPT skriva pythonkod som hämtar
  temperaturen i Sveriges fem största städer från SMHI:s öppna API. Jag
  körde koden i PyCharm — och den fungerade."
- *transkribering:* "Samma vår, tredje försöket: ett program som skulle
  transkribera ljud till text med OpenAIs Whisper. Det gick inte hela
  vägen — hittade aldrig ffmpeg — men det var så jag lärde mig."

Kvar innan produktion: de exakta skärmdumparna (vilket kodutsnitt, hur
beskuret — särskilt beskärningen som tar bort den exponerade API-nyckeln,
se säkerhetsflaggan nedan).

**Tillägg 2026-08-04 — sjunde fas 1-projektet: Fredagsquiz — BESLUTAT ✓**
Kent vill redan nu lägga till
[kentlundgren.se/program/quiz/0/](https://kentlundgren.se/program/quiz/0/):
ett nytt quiz varje fredag om Simrishamns kommun, sedan 22 augusti 2025,
under hela hösten. Frågorna genereras med Claude, kodningen (HTML/CSS/JS)
gjord i Cursor. Bra passform: visar ett *återkommande* AI-drivet projekt
över tid, inte bara enstaka experiment.

**Kompletterad samma dag:** Kent jobbade parallellt med samma quiz på
GitHub Pages, [kentlundgren.github.io/quiz/0/](https://kentlundgren.github.io/quiz/0/)
— "på den tiden gick jag över mer och mer till GitHub", ett skifte han
vill ska synas i presentationen. Repots egen README bekräftar precis den
resan: GitHub-versionen beskrivs uttryckligen som *"Ursprungligen
publicerad på kentlundgren.se/program/quiz/0/"*, och innehåller dessutom
två egenskrivna pedagogiska guider om övergången (`GitHub.html` om
Git/GitHub-begrepp, `GitHub_pages.html` om hur GitHub Pages fungerar) samt
en undermapp ("00") som specifikt förklarar AI-samarbetet mellan Claude
och Cursor bakom quizet. Repots commit-historik (jan–feb 2026) visar att
själva GitHub-migreringen skedde några månader efter att quizserien startat
på kentlundgren.se hösten 2025 — tidslinjen stämmer med Kents minnesbild.

**Beslut:** använd `kentlundgren.github.io/quiz/0/`-länken som den
kanoniska länken för sliden (undviker dessutom WAF-blockeringen som
upptäcktes på kentlundgren.se-domänen, se produktionsanteckning i 4k), och
väv in GitHub-flytten i bildtexten snarare än att göra den till ett eget,
åttonde projekt — håller fas 1 vid sju poster om inte Kent vill annat.

Fas 1 är sju projekt totalt:
1. `temperatur` (2023-öppning)
2. `transkribering` (2023-öppning)
3. Claude-kompassen
4. Statsskuld Sverige/USA
5. Bjärred Saltsjöbad
6. Vindkraftskalkyl
7. Fredagsquiz

Föreslagen bildtext (justeras när skärmdump tas fram): "Varje fredag sedan
22 augusti 2025: ett nytt quiz om Simrishamns kommun, frågorna skrivna av
Claude, kodat i Cursor. Under hösten flyttade jag projektet till GitHub
Pages — och skrev på köpet två egna guider om hur Git och GitHub faktiskt
fungerar."

**k. Distributionsformat: LinkedIn, X/Twitter, bloggarna — BESLUTAT ✓**
Kent förtydligade 2026-08-04: han vill bara att **URL:en/länken** som delas
på LinkedIn, X eller en blogg ska öppna och spela upp presentationen — inte
att den spelas upp inbäddad direkt i flödet. Det betyder att 4g-beslutet
(självspelande, datadriven HTML/CSS/JS-sida) redan täcker det här kravet
fullt ut, utan ändring. Ingen video-export eller annat extra byggsteg
behövs. Konflikten som identifierades tidigare i frågan var alltså skenbar
— löst genom att förtydliga vad "spelas upp" faktiskt avsåg.

*Bakgrundsinfo till Kent, efterfrågad:* en **LinkedIn-PDF-karusell**
("dokumentinlägg") är ett separat, LinkedIn-specifikt postformat — man
laddar upp en PDF, och LinkedIn visar den som ett antal svep-bara sidor
direkt i flödet (ungefär som ett bildspel man bläddrar i manuellt, inte
autospelande). Populärt för infografik/portfolio-innehåll eftersom det
håller kvar besökaren i flödet i stället för att länka bort. Ingen
motsvarighet finns på X. Eftersom Kent redan bekräftat att en vanlig länk
räcker (ovan) behövs inte det här formatet nu — noterat här som bakgrund,
inte som en leverans.

*Produktionsanteckning:* ett automatiserat `curl`-anrop mot
`kentlundgren.se` blockerades av sidans brandvägg (WAF, "455 Security
Incident Detected", Simply.com-hosting) medan ett webbläsarbaserat
hämtningsverktyg (WebFetch) kom igenom utan problem. Värt att komma ihåg
när skärmdumpar/skärminspelningar ska tas fram senare — enkel
`curl`/scriptad hämtning kan blockeras av samma skydd, en riktig
webbläsare (eller manuell skärmdump) fungerar bättre för den domänen.

**Viktigt, säkerhet — flaggat innan produktion:** `main.py` i
`transkribering`-repot innehåller en hårdkodad OpenAI-liknande API-nyckel i
klartext (`sk-...`), synlig i den publika koden sedan 2023. Sannolikt redan
död/spärrad (GitHub/OpenAI spärrar automatiskt läckta nycklar av den här
typen, och den har legat publikt i över tre år) — men **beskär bort den
raden ur bilden/skärmdumpen** innan den visas i presentationen, i stället
för att anta att det är okej bara för att repot redan är publikt. Ingen
åtgärd på själva repot ingår i denna PRD:s omfattning — bara en
försiktighetsåtgärd för skärmdumpen.

**Kvarstår innan helt löst:** exakt vilken kodrad/vilket textutsnitt som
blir skärmdumpen för respektive projekt (ingen av dem har en webbsida att
fotografera, till skillnad från övriga kandidater — bilden blir en
kod-/terminalskärmdump i stället).

## 5. Leveranser

- [x] Vindkraftskalkyl — rätt/senaste länk bekräftad (4a)
- [ ] PRD låst — alla delfrågor (4a–4k) beslutade
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
- Fredagsquiz — https://kentlundgren.github.io/quiz/0/ (kanonisk länk för presentationen; ursprungligen publicerad på https://kentlundgren.se/program/quiz/0/)

## 8. Status

Fas 1-listan låst till sju projekt (4h/4j, tillägg 2026-08-04):
`temperatur`, `transkribering` (2023-öppning), Claude-kompassen, statsskuld
Sverige/USA, Bjärred Saltsjöbad, vindkraftskalkyl, Fredagsquiz. Bildformat,
teknikval (HTML/CSS/JS) och distributionsform (4k — vanlig länk, inget
videoexportsteg) beslutade. Timing (4c) omprövad och låst 2026-08-04: tre hastighetsvarianter via en
gemensam, datadriven sida — rapp 7 sek, lagom 20 sek, seriös 45 sek per
projekt, växling via tre separata URL:er, mjuk crossfade + skalning som
övergång, tunn förloppsindikator. Kvarstår: exakta skärmdumpar/textutsnitt
per projekt, var/när presentationen visas fysiskt (4d), och
SPEC.md-checkpointen (4f).

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
- 2026-08-04 (v4): Ny delfråga 4j tillagd och i huvudsak löst: presentationen
  öppnar med två 2023-projekt, `temperatur` och `transkribering` (i den
  ordningen), valda efter genomgång av respektive README/källkod på
  GitHub. Förslag till bildtext för båda inkluderat. En hårdkodad
  OpenAI-liknande API-nyckel hittad i klartext i `transkribering/main.py`
  flaggad som en säkerhetsanmärkning — ska beskäras bort ur skärmdumpen,
  ingen ändring av själva repot ingår i denna PRD.
- 2026-08-04 (v5): Fas 1 bekräftad av Kent till sex projekt (de fyra
  kärnprojekten plus 2023-öppningen). Nytt krav tillkom samtidigt:
  presentationen ska kunna "spelas upp" på LinkedIn, X/Twitter och
  bloggarna. Ny delfråga 4k tillagd, olöst: detta krockar delvis med
  HTML/CSS/JS-beslutet i 4g, eftersom sociala plattformar inte autospelar
  fristående webbsidor i flödet — bara video, GIF eller (på LinkedIn)
  PDF-karuseller. Föreslagen lösning (behåll HTML-sidan som källa, lägg
  till ett video-exportsteg) väntar på Kents bekräftelse.
- 2026-08-04 (v6): Distributionsfrågan (4k) löst — Kent förtydligade att en
  vanlig länk räcker, presentationen ska inte vara inbäddad direkt i
  LinkedIn/X-flödet. Ingen videoexport eller PDF-karusell behövs.
  LinkedIn-PDF-karusellformatet förklarat på Kents begäran, men inte valt.
  Fredagsquiz (kentlundgren.se/program/quiz/0/) tillagt som sjunde
  fas 1-projekt.
- 2026-08-04 (v7): Kompletterat att Kent även jobbade parallellt på en
  GitHub Pages-version av Fredagsquiz (kentlundgren.github.io/quiz/0/) —
  repots README bekräftade att GitHub-versionen är en migrering av
  originalet, med två egenskrivna guider om Git/GitHub som bonus. Kanonisk
  länk för sliden bytt till GitHub Pages-versionen (undviker även
  WAF-blockeringen upptäckt på kentlundgren.se), bildtext uppdaterad med
  migrationsvinkeln ("gick över mer och mer till GitHub").
- 2026-08-04 (v8): Timingbeslutet i 4c omprövat på Kents förslag: i stället
  för en fast siffra (20 sek) erbjuds tre hastighetsvarianter av samma
  innehåll — rapp (~5–10 sek), lagom (~20 sek), seriös (längre). Tekniskt
  löst via samma datadrivna sida (4g) med en konfigurerbar tid per slide,
  t.ex. en URL-parameter — ingen ny innehållsfil per variant. Exakta
  sekundvärden för rapp/seriös samt växlingsmekanism kvar att bekräfta.
- 2026-08-04 (v9): Kent bad Claude föreslå konkreta sekundvärden. Låst:
  rapp 7 sek, lagom 20 sek (oförändrat), seriös 45 sek per projekt — med
  motivering (läshastighet, total looptid per variant). Växlingsmekanism
  bekräftad som tre separata URL:er (inte en knapp). Visuell övergång
  specificerad: mjuk crossfade + subtil skalning, tunn segmenterad
  förloppsindikator, responsiv layout (sida vid sida på breda skärmar,
  staplat på smala). Med detta är samtliga delfrågor utom 4d och 4f
  beslutade — PRD:n redo för byggfasen.
