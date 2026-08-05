# PRD – Presentation av genomförda AI/webb-projekt

**Namn:** PRD_presentation_ai_projekt
**Plats:** `Presentationer/Nr1/PRD_presentation_ai_projekt.md`
**Skapad:** 2026-08-04
**Version:** 29 ("Jobbsökning"-framing borttagen överallt på Kents begäran — syftet är att testa/leka/lära med generativ AI, inte jobbsökning, se avsnitt 2; `</> teknik`-modalen fick en ny Metoden-sektion; Årskorten byggda: åtta nya `kind: "year-card"`-slides — två per år 2023–2026 — ersatte de två gamla milstolparna; tier-system så innehållsmängd växer med vald hastighet; bibliografin utökad 10→23 källor)
**Status:** Arton slides totalt (åtta projekt + åtta årskort + två avslutande referens-slides), i kronologisk ordning med månadsprecision där den finns. Automatisk uppspelning (rapp som standard), full manuell styrning, separat fil för presentatörsanteckningar. Tre bruttolistor (`Claude_familjen.md`, `Kents_work_with_AI.md`, `AI_branschen_brett.md`) matade in en delmängd i årskorten — inte allt innehåll därifrån syns i presentationen. Enda kvarvarande öppna frågan är 4d (var/när visas fysiskt).
**Typ:** Grund-PRD (helt nytt projekt)

> **Viktig utgångspunkt, oavsett hur lång den här PRD:n blir:** den här
> presentationen ska vara **kul att göra**. Allt nedan är ramar och beslut
> till för att slippa onödiga omtag och otydligheter — inte ett recept som
> ska kväva lust, lekfullhet eller impulsen att testa något oväntat under
> själva byggandet. Dyker ett kreativt infall upp som inte redan är
> beslutat här: testa det först, uppdatera PRD:n efteråt om det håller.
> Strukturen finns för att tjäna glädjen, inte tvärtom. (Kents tillägg,
> 2026-08-04 — se Ändringslogg v10.)

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

- Visa upp genomförda AI/webb-projekt — inte som ett jobbsökningsverktyg,
  utan för att Kent tycker det är roligt, intressant och viktigt att
  testa, leka och lära tillsammans med generativ AI (se hans egen
  formulering, tillagd 2026-08-05: "innan generativ AI, testar och 'leker'
  med oss människor..."). Omformulerat efter att Kent uttryckligen bad om
  att all "jobbsökning"-framing skulle tas bort — se Ändringslogg v29.
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
- Fas 1-innehåll, åtta projekt: `temperatur` och `transkribering`
  (2023-öppning), Claude-kompassen, statsskuld Sverige/USA, Bjärred
  Saltsjöbad, vindkraftskalkyl, Fredagsquiz, Ölkalkylen (se 4h/4i/4j samt
  Ändringslogg v12 för fullständig lista, ordning och bildtexter).
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
på sammanhang (snabb social scroll kontra någon som faktiskt sitter och
tittar en stund).

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

**f. Behövs ett SPEC.md-steg härifrån? — BESLUTAT ✓ (2026-08-04): Nej**
Kent konstaterade att han inte har något att tillföra i ett SPEC.md-steg
(det är agent-orienterat, inte ett beslut han behöver fatta). Eftersom
PRD:n redan innehåller den tekniska precision en SPEC.md annars skulle
finnas till för — datastruktur (4g), exakta timingvärden och
övergångsspecifikation (4c), säkerhetshantering av skärmdumpen (4j) — vore
ett separat dokument redundant. Går direkt från denna PRD till byggfasen.
(Samma mönster som `PRD_spec.md` själv landade i: svaret är oftast nej.)

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

**l. Årtal på alla slides + kronologisk ordning — BESLUTAT ✓ (2026-08-04)**
Kent ville ha ett synligt årtal på samtliga åtta projekt (tidigare bara på
de två 2023-kodkorten), och att ordningen ska följa tidsordningen.
Genomfört: `year`-fältet är nu satt på alla poster i `projects.js`, och
ordningen är: `temperatur` (2023) → `transkribering` (2023) →
`Fredagsquiz` (2025, bekräftat av Kent) → `Vindkraftskalkyl` (2026, källa:
blogginlägg 13/7) → `Statsskuld` (2026, källa: sidans egen text "Upprättad:
2026-07-28") → `Claude-kompassen` (2026, källa: sidans egen text
"Publicerad live: 29 juli 2026") → `Ölkalkylen` (2026, källa: blogginlägg
29/7) → `Bjärred Saltsjöbad` (2026, se 4m — inget exakt datum hittat).
Badgen (samma komponent som redan fanns för kodkorten) visas nu även ovanpå
skärmdumparna, testat och läsbart.

**m. Bjärred Saltsjöbads exakta datum — BESLUTAT ✓ (2026-08-04)**
Kent gav själv källan: första committen i det relaterade repot
`Bjerred-el` (inte `foreningar`-repot där själva sidan ligger) skedde i
januari 2026. Badge satt till `jan2026`, och posten flyttad tidigare i
tidslinjen (se 4r) — den låg tidigare sist, vilket var fel så snart
månadsprecisionen fanns.

**Innehållsrättelse 2026-08-04:** ursprungscaptionen ("samlingssida med
information ... öppettider till praktisk information") var fel — byggd på
en antagen tolkning av skärmdumpens kort, inte på vad Kent faktiskt sagt
om sidan. Kent rättade: det är **intern styrelsedata** (elförbrukning,
medlems- och inpasseringsstatistik) som han sammanställt och lagt ut öppet
på GitHub så att en geografiskt utspridd styrelse/funktionärskår ska kunna
nå den — ett pro bono-transparensbidrag, inte en allmän infosida. Caption
omskriven i `projects.js` för att spegla detta. Generaliserbar poäng Kent
lyfte: en föreningsmedlem kan bidra med transparens som en del av sitt
ideella engagemang — värt att ha i åtanke om fler föreningsprojekt läggs
till senare.

**n. "Milestone"-avbrott mellan projekt — BESLUTAT ✓ och BYGGT (2026-08-04)**
Kent bekräftade: bygg dem. Ny `kind: "milestone"` i `projects.js`/`script.js`
— fast visningstid (4 sekunder, `MILESTONE_DURATION`) som ignorerar
`hastighet`-inställningen, egen mörk, centrerad visuell stil (skiljer sig
tydligt från bild+text-layouten), inga URL:er till projekt utan en lista
`facts` (text + valfri Harvard-källa per faktapunkt).

Två avbrott insatta i de tomma gapen i tidslinjen:
- **2024** (mellan `transkribering` och `Fredagsquiz`): Claude 3
  (Anthropic, mars 2024) och EU:s AI-förordning (träder i kraft 1 aug
  2024).
- **2025–2026** (mellan `Fredagsquiz` och `Vindkraftskalkyl`): Claude
  Cowork (Anthropic) och en självreferens till att Claude Code — verktyget
  bakom denna presentation — blivit vardagsmat.

Källor sökta och i huvudsak verifierade mot **primärkällor** (Anthropic,
EU-kommissionen), i linje med `olika_Claude_modeller/CLAUDE.md`s
källhanteringsregel om att undvika sekundära SEO-blogg-källor för
tekniska/faktapåståenden. Se avsnitt 7 för fullständig källista. En källa
(OpenAIs Sora-sida) hittades men gav 403 vid automatiserad verifiering
(sannolikt bot-skydd, inte en död länk) — utelämnad ur milestone-slidesen
för att hålla påståendena helt verifierade, inte för att den bedöms falsk.

**o. Manuell styrning (pilar, svep, paus) + ny standardhastighet — BESLUTAT ✓ och BYGGT (2026-08-04)**
Kent ville kunna styra bildspelet själv, utöver den automatiska
uppspelningen:
- **Diskreta pilknappar** (‹ ›), fast positionerade i kanterna av
  bildytan, halvtransparenta i vila (samma "diskreta"-princip som
  hörnknapparna, se `kent-bygg-sidor`).
- **Svep vänster/höger på mobil** — `touchstart`/`touchend`-lyssnare på
  `#stage`, tröskel 40px och krav på att röressriktningen är övervägande
  horisontell (annars tolkas det inte som ett sidbyte).
- **Paus/spela-knapp**, synlig i huvudet (inte bara mellanslag, som inte
  är upptäckbart på en mobil utan tangentbord). Manuell navigering (pilar,
  svep, piltangenter) fungerar även när bildspelet är pausat, och håller
  sig pausat efteråt — bläddring ska inte tyst starta om autoplay.
- **Standardhastighet ändrad från lagom till rapp.** Kent ville att en
  besökare direkt ska uppfatta att det är ett bildspel, inte en statisk
  sida — rapp (7 sek/projekt) är nu default när ingen `?hastighet=`-
  parameter anges. `lagom` och `seriös` oförändrade i övrigt.

Testat i webbläsaren: paus stoppar verkligen (bekräftat att inget
avancerar under en väntan), pilknapp under paus byter bild utan att
återuppta autoplay, återupptagning startar om aktuell bilds tid utan att
trigga en onödig ny crossfade. Svep kunde inte simuleras direkt med
webbläsarverktyget (ingen touch-emulering tillgänglig) — koden följer
standardmönstret för `touchstart`/`touchend`, men Kent bör själv
bekräfta på en riktig mobil.

**p. Bildbeskärning: vänsterkant, inte centrerad — BESLUTAT ✓ och FIXAT (2026-08-04)**
Kent visade två skärmdumpar med röda pilar: `object-position: top center`
i `.media-pane img` klippte bort vänsterkanten av skärmdumparna (Statsskuld
och Vindkraftskalkyl), så att rubrikens början inte syntes. Fixat till
`object-position: left top` — bilden ankras nu alltid i övre vänstra
hörnet i stället för att beskäras jämnt från båda sidor. Testat mot
Vindkraftskalkyl, Statsskuld och Claude-kompassen i webbläsaren — rubriken
syns nu från vänsterkanten på alla tre.

**Justering 2026-08-04, samma dag:** Kent testade 4p-fixen mot alla
projekt och gav nyanserad feedback — vänsterankring var bara rätt för
**Vindkraftskalkyl**, övriga fem skärmdumpsprojekt (Fredagsquiz,
Statsskuld, Claude-kompassen, Ölkalkylen, Bjärred Saltsjöbad) skulle
tillbaka till centrerad beskärning. Löst genom att göra `object-position`
per-projekt i stället för globalt: `.media-pane img` har `top center` som
standard igen, och ett nytt fält `imagePosition` i `projects.js`
(satt bara på `vindkraftskalkyl`, värde `"left top"`) låter `script.js`
override:a per post. Ingen global regel var alltså rätt — beskärningen
beror på var i respektive originalskärmdump det viktiga innehållet
faktiskt sitter.

**q. Vindkraftskalkylens historik + presentatörsanteckningar — BESLUTAT ✓ och BYGGT (2026-08-04)**
Två delar:
1. Bildtexten för `vindkraftskalkyl` uppdaterad: "...den senaste (2026) i
   en lång rad kalkyler jag byggt sedan minst 2012...". Kent har byggt
   vindkraftskalkyler sedan minst 2012 (Excel → HTML/JS → dagens
   webbapplikation) — verifierat mot en tidigare version,
   https://kentlundgren.se/miljo/energi/vindkraftsekonomi.html (2022,
   nämner data från 2012–2022).
2. Ny fil `SPEAKER_NOTES.md` skapad — motsvarigheten till PowerPoints
   presentatörsanteckningar (synliga bara för den som håller
   presentationen, inte del av själva sidan). Ett avsnitt per projekt,
   kopplat via samma `id` som redan finns i `projects.js` — bekräftat till
   Kent att varje projekt redan hade ett unikt `id`-fält, så det var en
   naturlig nyckel att koppla mot i stället för att införa ett nytt.
   Fylld med `vindkraftskalkyl` som pilotexempel: länk till 2022-versionen
   samt Kents privata Google Sheets med nyckeltal sedan 2012 (länken
   sparad som given, inte HTTP-verifierad — det är Kents egen privata
   anteckning till sig själv, inte en publik källa som ska citeras).
   Övriga sju projekt har tomma rubriker, redo att fyllas på efter behov.
   Filen är medvetet inte kopplad till sidans UI — bara ett textdokument
   Kent kan ha öppet vid sidan av när han presenterar.

**r. Månadsprecision på årtalsbadgen + omordning — BESLUTAT ✓ och BYGGT (2026-08-04)**
Kent ville ha månad där den är känd, inte bara år — motivering: skillnaden
mellan t.ex. "jan2025" och "dec2025" är nästan ett helt år, och den
skillnaden syns inte i en badge som bara säger "2025". Format: `<mån><år>`
utan mellanslag (`apr2023`, `aug2025`, `jan2026`, `jul2026`), svenska
månadsförkortningar. Källa per post (redan känd sedan tidigare i
konversationen, bara inte tidigare skriven till badgen):
- `temperatur`/`transkribering`: apr2023 (repots push-datum, se 4h)
- `Fredagsquiz`: aug2025 (startdatum 22 augusti, uppgivet av Kent)
- `Bjärred Saltsjöbad`: jan2026 (första committen i `Bjerred-el`, se 4m)
- `Vindkraftskalkyl`/`Ölkalkylen`: jul2026 (respektive blogginläggs datum)
- `Statsskuld`/`Claude-kompassen`: jul2026 (sidornas egna "Upprättad"/
  "Publicerad live"-datum)

Månadsprecisionen avslöjade att ordningen var fel för Bjärred Saltsjöbad
— den låg tidigare sist (antagen "2026" utan precision) men hör med
jan2026 hemma direkt efter milestone-avbrottet 2025–2026, före de fyra
juli-2026-projekten. `projects.js` omordnad i enlighet med detta. De fyra
juli-projekten sinsemellan ordnade efter dagsprecision där den finns
(13/7 → 28/7 → 29/7 → 29/7), oförändrat sedan tidigare.

**s. Fredagsquiz avslutad, inte pågående — BESLUTAT ✓ och RÄTTAT (2026-08-04)**
Kent rättade: serien var inte längre öppen/pågående som captionen antydde
— den kördes 22 augusti 2025 till 6 februari 2026, 23 quiz totalt
(verifierat mot sidans egen lista, https://kentlundgren.github.io/quiz/0/,
som numrerar #1–#23 inklusive ett #15A/#15B samma vecka, med ett
tvåveckors juluppehåll v52–v1). Caption i `projects.js` omskriven till
dåtid med start- och slutdatum samt antal. Badgen (`aug2025`) oförändrad
— ankrad till startdatumet, i linje med hur övriga poster dateras.

**Generell reflektion, tillagd på Kents begäran:** han ser ett mönster i
hur han jobbar med generativ AI — håller på med en sak ett tag, blir
bättre och bättre på den, når sedan en punkt där det finns så mycket
annat att utforska och "leka med" tillsammans med AI, och går vidare.
Inte ett misslyckande, snarare den naturliga livscykeln för den här
sortens sidoprojekt. Skrivet ut i `SPEAKER_NOTES.md` under
`fredagsquiz`, med en notering om att samma mönster är värt att leta
efter i fler av presentationens projekt.

## 5. Leveranser

- [x] Vindkraftskalkyl — rätt/senaste länk bekräftad (4a)
- [x] PRD låst — alla delfrågor (4a–4s) beslutade utom 4d
- [x] Fredagsquiz-caption rättad till avslutad serie (23 quiz, 4s)
- [x] Bildbeskärning per projekt — Vindkraftskalkyl vänsterankrad, resten centrerade (4p)
- [x] `SPEAKER_NOTES.md` skapad, pilotifylld med Vindkraftskalkylens historik (4q)
- [x] Månadsprecision på årtalsbadges + omordning av Bjärred Saltsjöbad (4r)
- [x] Manuell styrning: pilknappar, svep på mobil, paus/spela-knapp (4o)
- [x] Standardhastighet ändrad till rapp (4o)
- [x] Datadriven projektlista (`projects.js`) med struktur
      för {titel, bild/kod, text, url} per projekt
- [x] Innehåll (bild + text) insamlat för samtliga åtta fas 1-projekt —
      skärmdumpar för de sex live-sidorna (`images/`), kodkort för
      `temperatur`/`transkribering` (API-nyckeln exkluderad, se 4j)
- [x] Harvard-citerbara bloggkällor kopplade där en verifierad, relevant
      träff finns (fyra av åtta projekt, se avsnitt 7)
- [x] Milestone-avbrott (2024, 2025–2026) byggda med verifierade
      primärkällor (4n)
- [x] Lokal `CLAUDE.md` skapad för `Presentationer/`
- [x] Självspelande HTML/CSS/JS-sida byggd: tre hastighetsvarianter
      (rapp 7s / lagom 20s / seriös 45s) via URL-parameter, loop, mjuk
      crossfade-övergång, PowerPoint-liknande utseende
- [x] Testkörning i kiosk-/helskärmsläge (desktop + mobil), alla tre
      hastighetsvarianter samt loop bekräftad

## 6. Produktionsordning

Låst (alla portande delfrågor 4a–4k beslutade, se avsnitt 8):
1. PRD låst
2. Bygg grundstrukturen: tom, datadriven sida som läser `projects.js` och
   spelar upp i loop med de tre hastighetsvarianterna — testas med 1–2
   platshållarprojekt
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
- Ölkalkylen — https://kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html (tillagt 2026-08-04, se Ändringslogg v12)

**Externa, Harvard-citerbara källor (annoterade, alfabetisk ordning):**
Motsvarande blogginlägg letades upp för samtliga fas 1/2-projekt på
`controllerutangranser.wordpress.com/category/ai/` och
`klel.wordpress.com/category/ai/` (2026-08-04). Fyra fungerande, relevanta
träffar hittades och verifierades (HTTP 200 + innehållskontroll); ingen
matchande bloggpost hittades för `temperatur`, `transkribering`, Bjärred
Saltsjöbad eller Fredagsquiz — snarare än att gissa fram en svag koppling
lämnas de utan blogg-källa.

Lundgren, K. (2026a) 'Att göra vindkraftens ekonomi synlig'. [Blogginlägg]
controllerutangranser.wordpress.com. Publicerad 2026-07-13.
https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/
*(Beskriver resan från Excel-kalkyler till webbaserad vindkraftskalkyl —
källa för `vindkraftskalkyl`-sliden.)*

Lundgren, K. (2026b) 'Vad ett beslutsträd om statsskuld lär oss om
vibe-kodning'. [Blogginlägg] controllerutangranser.wordpress.com.
Publicerad 2026-07-28.
https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/
*(Bakgrunden till statsskuld-verktyget, byggt med Gemini — källa för
`statsskuld`-sliden.)*

Lundgren, K. (2026c) 'En bild av Claudes ekosystem'. [Blogginlägg]
klel.wordpress.com. Publicerad 2026-07-29.
https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/
*(Beskriver Claude-kompassens tre faser — källa för
`claude-kompassen`-sliden.)*

Lundgren, K. (2026d) 'Hur många öl till break-even?'. [Blogginlägg]
controllerutangranser.wordpress.com. Publicerad 2026-07-29.
https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/
*(Ursprungsinlägget för Ölkalkylen, den som fick över 3 000 klick på
LinkedIn enligt Kent — källa för `ol-tyskland`-sliden.)*

**Källor för milestone-avbrotten (4n), verifierade primärkällor:**

Anthropic (2024) 'Claude 3 family'. [Nyhetssida] anthropic.com.
Publicerad 2024-03-04. https://www.anthropic.com/news/claude-3-family
*(Primärkälla för Claude 3-familjens lansering — källa för
`milestone-2024`-sliden. Bytt 2026-08-05 från den snävare
`claude-3-haiku`-sidan (13 mars 2024, Haiku-specifik) till den faktiska
familje-annonseringen, sedan Kent bad om exakt månad+år för Claude 3.)*

Anthropic (2025a) 'Claude 3.7 Sonnet and Claude Code'. [Nyhetssida]
anthropic.com. Publicerad 2025-02-24.
https://www.anthropic.com/news/claude-3-7-sonnet
*(Tillagd 2026-08-05, källa Kent — primärkälla för Claude Code, verktyget
den här presentationen är byggd med. Introducerades som en command
line-forskningsförhandsvisning i samma annonsering som Claude 3.7 Sonnet.
Källa för `milestone-2025-2026`-sliden.)*

Anthropic (2025b) 'Introducing Claude 4'. [Nyhetssida] anthropic.com.
Publicerad 2025-05-22. https://www.anthropic.com/news/claude-4
*(Tillagd 2026-08-05 — källa för jämförelsen "hur fort det går" i
`milestone-2024`-sliden och för `kallforteckning`-sliden.)*

Anthropic (2026a) 'Claude Cowork'. [Blogginlägg] claude.com.
Publicerad 2026-01-12. https://claude.com/blog/cowork-research-preview
*(Primärkälla för Claude Cowork — källa för `milestone-2025-2026`-sliden.
URL uppdaterad 2026-08-05 till den faktiska lanseringsposten (tidigare
länkad till produktsidan, som nu 308-redirectar till claude.com/product/cowork).
Publiceringsdatumet 12 januari 2026 syns inte vid automatiserad hämtning av
sidan — Claude kunde bara bekräfta "januari 2026" självständigt via
oberoende nyhetsbevakning (InfoQ m.fl.); exakt dag tillagd efter att Kent
själv uppgav och citerade den (12 januari, forskningsförhandsvisning).
Kompletterande detalj om webb/mobil-utbyggnaden 7/7 2026:
https://claude.com/blog/cowork-web-mobile.)*

Anthropic (2026b) 'Introducing Claude Sonnet 5'. [Nyhetssida] anthropic.com.
Publicerad 2026-06-30. https://www.anthropic.com/news/claude-sonnet-5
*(Tillagd 2026-08-05. Kent trodde först "Claude 5" lanserades juni 2025,
rättade sig själv mid-konversation till juni 2026 — verifierat korrekt.
"Claude 5" var ingen enskild lansering: Fable 5 kom 9 juni, Sonnet 5 (denna
källa) 30 juni, Opus 5 23 juli 2026 — alla 2026. Sonnet 5 valdes som
representativ länk. Källa för jämförelsen i `milestone-2024`-sliden och för
`kallforteckning`-sliden.)*

Europeiska kommissionen (2024) 'AI Act enters into force'. [Nyhetssida]
commission.europa.eu. Publicerad 2024-08-01.
https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en
*(Primärkälla, EU:s egen kommission — källa för `milestone-2024`-sliden.)*

**Övervägd men bortvald:** OpenAIs officiella Sora-sida
(https://openai.com/index/sora/) gav HTTP 403 vid automatiserad
verifiering (troligen bot-skydd, sidan existerar och syns i sökresultat)
— utelämnad ur milestone-innehållet snarare än citerad ovverifierad.

**Landmärke i AI-utvecklingen, tillagd 2026-08-05 på Kents förslag:**

Vaswani, A. et al. (2017) 'Attention is all you need'. arXiv preprint
arXiv:1706.03762. Publicerad 2017-06-12.
https://arxiv.org/abs/1706.03762
*(Introducerade Transformer-arkitekturen, grunden för alla moderna
generativa språkmodeller (Claude inräknat) — Claude instämmer i Kents
bedömning att det här är en verklig brytpunkt, inte bara ännu en artikel.
Källa för `kallforteckning`-sliden.)*

**Ordlista/glossary för klickbara begrepp (nytt 2026-08-05):** en delad
lista i `glossary.js` (16 termer: AI-modeller, AI-verktyg, organisationer)
länkar varje term vid dess FÖRSTA förekomst i presentationens egen
array-ordning — oberoende av hur en besökare faktiskt bläddrar (bakåt,
loop). Tre av URL:erna (ChatGPT, OpenAI Whisper, Poe) svarade 403 på
automatiserad hämtning (både `curl` och `WebFetch`) — bekräftade ändå som
korrekta, aktuella primärlänkar via oberoende sekundärkällor i sökträffar
(samma "403 = troligen bot-skydd, inte död länk"-resonemang som redan
gäller för milestone-källorna, se ovan). ChatGPT-länken byttes samtidigt
från den gissade `openai.com/chatgpt` till den bekräftade
`openai.com/index/chatgpt/`.

## 8. Status

Fas 1-listan låst till sju projekt (4h/4j, tillägg 2026-08-04):
`temperatur`, `transkribering` (2023-öppning), Claude-kompassen, statsskuld
Sverige/USA, Bjärred Saltsjöbad, vindkraftskalkyl, Fredagsquiz. Bildformat,
teknikval (HTML/CSS/JS) och distributionsform (4k — vanlig länk, inget
videoexportsteg) beslutade. Timing (4c) omprövad och låst 2026-08-04: tre hastighetsvarianter via en
gemensam, datadriven sida — rapp 7 sek, lagom 20 sek, seriös 45 sek per
projekt, växling via tre separata URL:er, mjuk crossfade + skalning som
övergång, tunn förloppsindikator. SPEC.md-frågan (4f) besvarad: nej,
går direkt till byggfasen. Kvarstår enbart: exakta skärmdumpar/textutsnitt
per projekt (produktionsarbete, inte ett PRD-beslut) samt var/när
presentationen visas fysiskt (4d), som inte blockerar byggstart.

**Byggt 2026-08-04 (v11):** `index.html`, `style.css`, `script.js` och
`projects.js` finns i `Presentationer/Nr1/`. Skärmdumpar för de fem
live-sidorna hämtade via headless Chrome och sparade i `images/`; kodkort
för `temperatur`/`transkribering` renderas direkt i HTML/CSS (API-nyckeln
är inte med i utsnittet). Testat i webbläsare: crossfade, alla tre
hastigheter, loop, samt responsiv layout på mobilbredd — allt fungerar.

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
- 2026-08-04 (v10): Kent bad om en sista, viktig grundprincip innan ett
  ev. SPEC.md-steg: att PRD:ns omfång inte ska kväva kreativiteten och
  glädjen i själva byggandet. Tillagd som ett tydligt markerat citat
  direkt efter header-fälten, så det inte kan drunkna i resten av
  dokumentet. Kents kommentar om att han "inte kan tillföra något" i ett
  SPEC.md tolkades som svar på delfråga 4f — löst till nej, med
  motivering (PRD:n bär redan den tekniska precision en SPEC.md annars
  skulle ge). Passade samtidigt på med en fräscha-ögon-genomläsning
  (Regel 7) inför att PRD:n närmar sig klar: hittade och rättade tre
  stale ställen — Omfattning (avsnitt 3) listade fortfarande bara de
  fyra ursprungliga kärnprojekten i stället för alla sju i fas 1,
  Leveranser/Produktionsordning (avsnitt 5–6) refererade fortfarande till
  den övergivna "20 sek/projekt"-siffran i stället för de tre
  hastighetsvarianterna, och Produktionsordningen var fortfarande märkt
  "preliminär, låses när 4h–4i beslutas" trots att båda länge varit
  beslutade.
- 2026-08-04 (v11): Fas 1 byggd. `index.html`/`style.css`/`script.js`/
  `projects.js` skapade i `Presentationer/Nr1/`. Skärmdumpar av de fem
  live-projekten tagna med headless Chrome (`--headless=new --screenshot`)
  och sparade i `images/`. Kodkort för `temperatur`/`transkribering`
  renderade direkt i HTML/CSS, API-nyckeln utelämnad helt (inte bara
  beskuren). Testat i webbläsare via lokal HTTP-server: crossfade, alla
  tre hastighetsvarianter, loop och responsiv mobillayout — allt
  fungerar. Ett mindre CSS-fix under testet: kod-textraderna radbryts nu
  på smala skärmar i stället för att klippas av. Leveranslistan (avsnitt
  5) helt avbockad.
- 2026-08-04 (v12): Tre saker på Kents begäran. (1) README förtydligat: de
  tre hastighetsvarianterna är redan tre distinkta, delbara URL:er via
  `?hastighet=`, inte tre separata filer — fullständiga länkar skrivna ut
  explicit så det inte kan missförstås igen. (2) Nytt åttonde projekt,
  Ölkalkylen (kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html)
  tillagt — skärmdump tagen, bildtext skriven (inkl. "3 000 klick på
  LinkedIn"-datapunkten Kent uppgav). (3) Letade upp motsvarande
  blogginlägg för samtliga åtta projekt på de två bloggarnas AI-kategorier;
  fyra verifierade träffar (HTTP 200 + innehållskontroll) kopplade som
  annoterade Harvard-källor i både `projects.js` (synligt som en andra,
  diskret länk på sliden) och avsnitt 7 nedan. Ingen bloggkälla fanns för
  `temperatur`, `transkribering`, Bjärred Saltsjöbad eller Fredagsquiz —
  lämnade dem omärkta i stället för att gissa fram en svag koppling.
  (4) Upptäckte i samband med skill-arbetet (se avsnitt 8/Kents fråga om
  ett nytt presentations-skill) att skillen `kent-bygg-sidor` har en
  stående Regel 6: alla Kents interaktiva sidor ska ha en `{ } GitHub`-
  hörna nere till vänster och en `</> teknik`-hörna nere till höger som
  öppnar en faktabaserad modal om sidans egen uppbyggnad. Presentationen
  saknade båda — tillagda proaktivt (mönstret säger uttryckligen "fråga
  inte varje gång"), testade i webbläsaren inklusive Escape-tangenten för
  att stänga modalen.
- 2026-08-04 (v13): Nya delfrågor 4l (löst) och 4m (öppen) tillagda.
  Årtal-badge nu satt på samtliga åtta projekt (inte bara de två
  2023-kodkorten), och ordningen i `projects.js` ändrad till kronologisk:
  temperatur → transkribering → Fredagsquiz → Vindkraftskalkyl →
  Statsskuld → Claude-kompassen → Ölkalkylen → Bjärred Saltsjöbad.
  Bjärred Saltsjöbad saknar ett bekräftat datum — flaggat öppet i stället
  för att gissa. Testat i webbläsaren att badgen nu även syns snyggt ovanpå
  skärmdumpar, inte bara kodkort. Ny delfråga 4n tillagd, **inte
  beslutad**: Kents idé om korta "milestone"-avbrott mellan projekten som
  lyfter stora händelser inom generativ AI år för år — tekniskt enkelt
  (ny `kind`), men kräver dels ett go från Kent, dels webbsökt/verifierad
  research eftersom perioden sträcker sig förbi Claudes kunskapscutoff.
  Slutligen: skillen `kent-presentationer` flyttad från kontonivå till
  `Presentationer/.claude/skills/kent-presentationer/` (projekt-lokal, en
  nivå ovanför `Nr1` så den täcker framtida `Nr2`/`Nr3` automatiskt), efter
  att Kent valt den platsen bland tre alternativ. Ett tunt pekar-skill
  lämnat kvar globalt.
- 2026-08-04 (v14): Delfråga 4n (milestone-avbrott) beslutad och byggd:
  två nya `kind: "milestone"`-slides (2024, 2025–2026) med fast 4-sekunders
  visningstid oavsett hastighetsval, mörk egen visuell stil, och fakta
  med verifierade primärkällor (Anthropic, Europeiska kommissionen) — inte
  sekundära SEO-blogg-källor, i linje med källhanteringsregeln i
  `olika_Claude_modeller/CLAUDE.md`. En kandidatkälla (OpenAIs Sora-sida)
  utelämnad efter att automatiserad verifiering gav HTTP 403. Testat i
  webbläsaren via `get_page_text` (skärmdumpar av det 4-sekunders-korta
  avbrottet visade sig svåra att fånga i tid, men DOM-innehållet
  bekräftades korrekt två gånger). Bjärred Saltsjöbad-captionen rättad
  efter att Kent klargjorde att sidan är intern styrelsedata
  (elförbrukning, medlems-/inpasseringsstatistik) publicerad öppet som ett
  pro bono-transparensbidrag — inte en allmän infosida, vilket den
  ursprungliga (felaktiga) captionen antytt. Ny lokal `CLAUDE.md` skapad
  för `Presentationer/` (samma nivå som skillet), med "Vad detta är",
  skill-inventering och arbetsregler — efter att Kent frågade om mappen
  behövde en egen CLAUDE.md och konstaterat att den enda befintliga i
  AI-teknik-repot (`olika_Claude_modeller/CLAUDE.md`) ligger utanför denna
  mapps sökväg och därför aldrig lästes in för det här arbetet.
- 2026-08-04 (v15): Ny delfråga 4o beslutad och byggd: diskreta pilknappar,
  svep vänster/höger på mobil, och en synlig paus/spela-knapp (mellanslag
  fungerade redan, men är inte upptäckbart på touch-enheter). Manuell
  navigering respekterar pausat läge — startar inte om autoplay av sig
  själv. Standardhastighet ändrad från `lagom` till `rapp`, på Kents
  begäran, så ett bildspel känns igen direkt. README och tech-modalen i
  `index.html` uppdaterade i samma veva (var stale: nämnde fortfarande
  sju projekt/fem skärmdumpar/lagom-standard).
- 2026-08-04 (v16): Ny delfråga 4p, beslutad och fixad direkt: Kent visade
  två skärmdumpar med röda pilar som pekade på att vänsterkanten (rubrikens
  början) klipptes bort av bildbeskärningen. `object-position` i
  `.media-pane img` ändrad från `top center` till `left top`. Testat mot
  tre skärmdumpsprojekt i webbläsaren.
- 2026-08-04 (v17): Kent testade v16-fixen mot alla sex skärmdumpsprojekt
  och gav nyanserad feedback: vänsterankring var bara rätt för
  Vindkraftskalkyl, de andra fem ville han ha tillbaka centrerade. Löst
  per-projekt i stället för globalt — nytt `imagePosition`-fält i
  `projects.js`, standard `top center` i CSS. Ny delfråga 4q: bildtexten
  för Vindkraftskalkyl uppdaterad med att Kent byggt sådana kalkyler sedan
  minst 2012 (verifierat mot en 2022-version av en tidigare kalkyl), och
  en ny fil `SPEAKER_NOTES.md` skapad — presentatörsanteckningar kopplade
  via projektens redan existerande `id`-fält, pilotifylld för
  Vindkraftskalkyl med länkar till historiken. Inte kopplad till sidans
  UI, bara ett fristående referensdokument.
- 2026-08-04 (v18): Kent gav ett exakt datum för Bjärred Saltsjöbad
  (första committen i `Bjerred-el`, januari 2026) och bad om
  månadsprecision på årtalsbadgen genomgående, där den är känd — med
  motiveringen att t.ex. "jan2025" och "dec2025" skiljer sig nästan ett
  helt år, en skillnad en ren årtalsbadge döljer. Alla åtta
  projektbadges uppdaterade till `<mån><år>`-format (`apr2023`, `aug2025`,
  `jan2026`, `jul2026`). Detta avslöjade att Bjärred Saltsjöbad låg fel
  placerad (sist, på en antagen "2026" utan precision) — flyttad till
  direkt efter milestone-avbrottet 2025–2026, före de fyra juli-2026-
  projekten. `SPEAKER_NOTES.md` kompletterad med källan för datumet.
- 2026-08-04 (v19): Kent rättade Fredagsquiz-captionen — serien var inte
  längre pågående, den avslutades 6 februari 2026 efter 23 quiz (verifierat
  mot sidans egen lista). Caption skriven om till dåtid med start-/
  slutdatum och antal. Kent bad samtidigt om en generell reflektion: han
  ser ett återkommande mönster i hur han jobbar med generativ AI — håller
  på med en sak, blir bättre och bättre, når sedan en punkt där annat
  lockar mer och går vidare. Skrivet ut i `SPEAKER_NOTES.md` under
  `fredagsquiz`, med en notering om att samma mönster kan vara värt att
  leta efter i fler av presentationens projekt.
- 2026-08-05 (v20): Fyra beslutade tillägg på Kents begäran, plus en öppen
  fråga.
  (1) **Precisa datum i milstolparna.** `milestone-2024`s Claude 3-fakta
  fick månadsprecision (mars 2024, verifierat mot primärkällan — bytt från
  den Haiku-specifika `claude-3-haiku`-sidan till den faktiska
  familje-annonseringen `claude-3-family`) och en jämförande mening om
  Claude 4 (maj 2025) och Claude 5 (juni–juli 2026, tre steg: Fable/
  Sonnet/Opus) för att visa lanseringstakten. `milestone-2025-2026`s
  vaga "blir vardagsmat"-formulering ersattes med två daterade fakta:
  Claude Code (24 feb 2025, källa Kent, verifierad) och Claude Cowork
  (12 jan 2026, källa Kent + oberoende nyhetsbevakning — sidan själv
  exponerar inte datumet vid automatiserad hämtning). Samtliga tre
  Claude-generationsdatum Kent själv gissade (Claude 3 mars 2024, Claude 4
  maj 2025) visade sig stämma efter verifiering; Claude 5 rättade han
  själv mitt i konversationen från "juni 2025" till korrekta "juni 2026".
  (2) **Klickbara begrepp vid första förekomst.** Ny delad fil
  `glossary.js` (16 termer: AI-modeller, AI-verktyg, organisationer) —
  länkar varje term bara en gång, vid dess första förekomst i PROJECTS
  egen array-ordning (inte i den ordning en besökare bläddrar). Kent bad
  uttryckligen om **diskret** markering (ingen färg, inget solitt
  understreck) — löst med `border-bottom: 1px dotted currentColor`, som
  smälter in i omgivande text oavsett bakgrund (kodkort, ljus text-pane,
  mörk milestone-pane). En verklig bugg upptäcktes och rättades under
  testet: den befintliga regeln `.milestone-facts a { display: block }`
  (avsedd bara för käll-badgen) gjorde av misstag varje inline-term till
  en egen rad — löst genom att skopa regeln till en ny klass
  (`a.fact-source`) och ge term-länkar en egen, oskopad regel.
  (3) **Två nya avslutande slides.** `kind: "glossary"` (alfabetisk lista
  över samtliga `GLOSSARY`-termer) och `kind: "bibliography"` (Harvard-
  format, annoterad, alfabetisk källförteckning — egna blogginlägg +
  redan citerade milstolpekällor + en nytillagd landmärkeskälla). Båda
  respekterar vald hastighet (`rapp`/`lagom`/`serios`) i stället för
  milstolparnas fasta 4 sekunder, eftersom de har betydligt mer text; egen
  `overflow-y: auto` ifall listan växer. Presentationen är nu tolv slides.
  (4) **Vaswani et al. (2017), 'Attention is all you need'** tillagd i
  källförteckningen på Kents förslag — Claude instämmer att Transformer-
  arkitekturen är en verklig brytpunkt (grunden för parallell träning av
  stora språkmodeller, Claude inräknat), inte bara ännu en artikel.
  Samtidigt bekräftades: Regel 2:s krav på **annoterad** Harvard-
  källförteckning är redan en stående regel sedan 2026-08-01
  (`kent-meta-regler-for-code`) — inget nytt regelbeslut behövdes, bara
  tillämpning.
  **Verifieringsanteckning:** tre glossary-URL:er (ChatGPT, OpenAI
  Whisper, Poe) gav HTTP 403 vid både `curl` och `WebFetch` — bekräftade
  ändå som korrekta via oberoende sekundärkällor i sökträffar, samma
  "403 = troligen bot-skydd"-resonemang som redan användes för
  milstolpekällorna (se avsnitt 7). ChatGPT-länken byttes från den gissade
  `openai.com/chatgpt` till den verifierade `openai.com/index/chatgpt/`.
  **Öppen fråga, inte beslutad:** Kent väckte idén om en större "brutto"-
  källpool (fler kandidat-begrepp/referenser än vad som visas) med ett
  urvalssteg som väljer ut en delmängd per presentation — se Claudes svar
  i chatten (rekommendation: enkel `id`+urval-lista i linje med
  `PROJECTS`-mönstret, inte en ny UI). Inte byggt än, avvaktar Kents
  besked.
- 2026-08-05 (v21): Första konkreta tillämpningen av v20:s "bruttolista"-
  idé. Kent delade `Claude_familjen.docx` (sex poster: Claude 3, Claude
  Projects, Claude Code, Claude 4, Claude Cowork, Claude 5 — med fakta och
  Harvard-referenser för tre av dem). Läst med `pandoc`-motsvarande
  extraktion (`pandoc` saknades i miljön, löst med Python
  `zipfile`+regex mot `word/document.xml` direkt). Skrev om till
  `Claude_familjen.md`: samma `<mån><år>`-precision och annoterade
  Harvard-format som resten av presentationen, Kents egna beskrivningar
  (Projects/Code/Cowork) bevarade och lätt justerade, plus **elva nya
  poster** utöver Kents sex — hela Claude-familjen 2023–2026, samtliga
  primärkälleverifierade mot anthropic.com/claude.com: Claude+Instant
  (mar2023), Claude 2 (jul2023), Claude 2.1 (nov2023), Claude 3.5 Sonnet
  (jun2024), okt2024-uppdateringen (3.5 Sonnet uppgraderad + 3.5 Haiku +
  computer use), Claude Opus 4.1 (aug2025), Sonnet 4.5 (sep2025), Haiku
  4.5 (okt2025), Opus 4.5 (nov2025), samt en tidigare okänd nyansering av
  Claude 5-generationen: Fable 5/Mythos 5 lanserades 9 juni 2026, stängdes
  av globalt 12 juni efter ett amerikanskt exportkontrollbeslut (en
  Amazon-forskare hade visat att skyddet kunde kringgås), och
  återlanserades 1 juli. Filen avslutas med en lanseringstakt-tabell
  (kvartalsvis förtätning, 2023→2026) och tre öppna frågor inför nästa
  steg. **Uttryckligen en bruttolista** — Kent har bett om att bara en
  delmängd ska in i presentationens kommande årskort (2024/2025/2026,
  ett kort per år, nästa steg — inte byggt än i den här versionen).
- 2026-08-05 (v22): En verklig faktafel hittad och rättad, plus ett
  tillägg till `Claude_familjen.md`.
  (1) **Rättelse: `statsskuld`-sliden påstod fel AI-verktyg.** Kent
  visade en skärmdump och frågade var uppgiften "byggd tillsammans med
  Gemini" kom ifrån — han mindes att han med största sannolikhet använt
  Claude och Cursor. Spårat till en tolkningsmiss från v12 (2026-08-04):
  källblogginlägget nämner faktiskt två separata projekt — "för ett år
  sedan ... byggde jag ... med Gemini" syftar på ett ÄLDRE verktyg från
  juni 2025 (annan URL, annat blogginlägg), medan det aktuella
  beslutsträds-verktyget som visas här beskrivs några stycken senare med
  meningen "... alternativ som Claude tog fram parallellt." v12 läste
  fel projekt. `projects.js` rättad: "byggd tillsammans med Gemini" →
  "byggd tillsammans med Claude" (den enda källbelagda uppgiften — Cursor
  nämns inte explicit i blogginlägget, så det lades inte till trots
  Kents egen gissning, i linje med Regel 3). "Gemini" borttaget ur
  `glossary.js` (15 termer kvar) eftersom ordet inte längre förekommer
  någonstans i presentationens innehåll.
  (2) **Claude 4.6 tillagd i `Claude_familjen.md`** (feb2026, mellan
  Cowork och Fable 5/Mythos 5) — Kents eget bidrag, med källor han själv
  tog fram och Claude verifierade (Opus 4.6 5 feb, Sonnet 4.6 17 feb,
  båda mot anthropic.com). Kent pekar ut just den här generationen som
  den där han upplevde tydligt färre rättningsbehov i sitt eget arbete —
  dokumenterat som hans egen erfarenhet, inte en generell branschsiffra.
  Lanseringstakt-tabellen i filen uppdaterad (18 poster totalt nu, upp
  från 17).
  (3) **Öppen, obeslutad idé väckt av Kent:** en ny fil
  `Kents_work_with_AI.md` som dokumenterar hur han själv arbetat med
  generativ AI sedan 2023 (Claude Compassen-arbetsmodellen, ökande
  användning, upplevelsen av Claude 4.6), med en delmängd som ett par
  personliga slides i presentationen. Inte påbörjad — Claude bad om att
  få ställa avgränsningsfrågor innan den skrivs, se chatten.
- 2026-08-05 (v23): `Kents_work_with_AI.md` skapad, efter att Kent svarat
  på avgränsningsfrågorna från v22 (korsreferens-metod: fritt val, löst
  med namngivna pekningar till exakta poster i `Claude_familjen.md`,
  ingen filduplicering; omfattning: hela bågen 2023→2026, inte bara
  Claude-eran). Fyra kronologiska avsnitt (2023–2026), byggda kring
  Kents egna citat om Claude Projects (jun2024, RAG-liknande
  arbetssätt, länkad till hans egen RAG-sida
  `AI-teknik/RAG/`) och Claude 4.6 (feb2026, upplevelsen av att gå från
  att rätta Claudes kod till att bara lägga till mer). Ny research-källa
  tillagd på Kents uppmaning och oberoende verifierad av Claude:
  **Perplexity**, Kents huvudsakliga research-verktyg 2023, innan Claude
  blev förstahandsvalet — Wikipedia-referensen Kent gav stämde vid
  kontroll mot Perplexitys faktiska lanseringsdatum (7 december 2022) och
  dess källhänvisnings-fokus. Filen avslutas med en sammanfattningstabell
  (verktygens tyngdpunkt per period) och tre öppna frågor, inklusive en
  påminnelse om att Gemini-felet (v22) inte är löst för något annat
  eventuellt projekt än `statsskuld`. README:s filinventering uppdaterad.
  Inte byggt: vilken delmängd som blir faktiska slides — nästa steg,
  avvaktar Kents besked.
- 2026-08-05 (v24): Diskussionsrunda inför årskorten (2024/2025/2026,
  två slides per år) — inget kodat i `projects.js` än, tre saker
  klargjorda/tillagda.
  (1) **Kent bekräftade: innehållsmängd ska variera med hastighet.**
  Löst koncept (inte byggt än): en `tier`-nivå per fakta (1 = alltid,
  2 = lagom+seriös, 3 = bara seriös) i stället för tre separata
  textversioner — mindre dubbelarbete, ingen risk att varianterna glider
  isär. De nya personliga reflektionskorten föreslås även bryta mot den
  gamla milstolpe-regeln (alltid fast 4 sek) och i stället respektera
  `DURATIONS[speedKey]` som `glossary`/`bibliography`-korten redan gör —
  löser samtidigt speltids-oron från v23/diskussionen (8 milstolpekort ×
  4 sek fast blir bara ett problem vid `seriös`, inte vid `rapp`).
  (2) **Stickfigur Spel-materialet tillagt i `Kents_work_with_AI.md`.**
  Kent länkade två egna sidor om ett AI-jämförelsetest (samma engelska
  prompt till flera AI-verktyg för att generera ett litet JS-spel).
  Klargjorde en kronologisk oklarhet: blogginlägget (17 mars 2024)
  blandar två separata testomgångar i samma text — mars 2024
  (Perplexity + OpenAI GPT-4-playground) och en uppföljning ett år
  senare, mars 2025 (Claude 3.7 Sonnet, nästan klart spel direkt). Utan
  att skilja ut detta hade Claude 3.7 Sonnet (lanserad feb2025) av
  misstag kunnat läggas i 2024-avsnittet — en modell som inte fanns än.
  Båda omgångarna nu korrekt placerade: 2024-avsnittet (jämförelsen) och
  2025-avsnittet (uppföljningen, som råkar illustrera exakt samma
  "mindre rättning, mer klart direkt"-mönster som Claude 4.6-citatet,
  fast ett år tidigare). Fyller delvis 2025-luckan från v23.
  (3) **Ny grundregel 8 (svara på svenska som standard)** tillagd i
  global `CLAUDE.md` och `kent-meta-regler-for-code` (se respektive
  filers egna ändringsloggar, 2026-08-05) — inte specifik för det här
  projektet, men beslutad under samma session.
- 2026-08-05 (v25): Två svar på öppna frågor från v24.
  (1) **Det "objektiva/tekniska" kortets omfattning beslutad:** hela
  AI-branschen, det objektivt mest häpnadsväckande — inte begränsat till
  Claude-familjen. Innebär mer research per år framöver (inte bara
  `Claude_familjen.md`), inte påbörjat än.
  (2) **Allvarligt material tillagt i `Kents_work_with_AI.md`, 2025-
  avsnittet:** Kent länkade två egna blogginlägg (4 februari 2025,
  samma dag) om etiken i att använda generativ AI (Perplexity) för att
  utforma krisbudskap — skrivna samma dag som Sveriges dödligaste
  skolskjutning, Campus Risbergska/Komvux i Örebro (elva döda, inkl.
  gärningsmannen). Underliggande händelse oberoende verifierad
  (Wikipedia/SVT/BBC) innan den skrevs in, i linje med Regel 3. Skrivet
  återhållsamt, fokus på Kents etiska resonemang, inte på våldet.
  **Explicit flaggat som en öppen fråga i filen** — om/hur det här ska
  visas i själva presentationen (jobbsökningssyfte, verklig tragedi) är
  ett ton-/lämplighetsval Claude inte tar ställning till åt Kent.
  Sammanfattningstabellen uppdaterad. Stickfigur-materialet (v24)
  oförändrat.
- 2026-08-05 (v26): Kents svar på v25:s öppna frågor, plus en ny bruttolista.
  (1) **Örebro-frågan avgjord:** stannar i `Kents_work_with_AI.md` som
  bakgrund, blir ingen slide i presentationen. Öppen fråga markerad löst
  i filen (genomstruken).
  (2) **Kents egen sammanfattning av sitt förhållningssätt** tillagd
  ordagrant i filens inledning — "jag 'testar', leker och lär mig..."
  plus tillägget om att generativ AI (i hans formulering) "testar och
  'leker' med oss människor" — citerat exakt, inte omskrivet eller
  färdigtolkat av Claude.
  (3) **Ny fil `AI_branschen_brett.md`** — bruttolista över hela
  AI-branschens (inte bara Anthropics) mest häpnadsväckande händelser
  2023–2026. Startpunkt: en lista Kent fått från Grok, verifierad post
  för post av Claude mot primärkällor (OpenAI, Meta, Microsoft, Wikipedia
  för Altman-sagan) innan något skrevs in — två sakfel i Groks lista
  rättade under vägen: (a) Bing/GPT-4-integrationen skedde FÖRE GPT-4:s
  egen officiella lansering, inte efter (7 feb 2023 mot 14 mars 2023, en
  intern modell utan GPT-4-namnet användes i Bing först); (b)
  "resonemangsmodeller blir mainstream" placerades av Grok i 2025, men
  själva ursprunget (OpenAI o1) är ett 2024-event (förhandsvisning sep,
  fullversion dec) — den breda normaliseringen fortsatte in i 2025 via
  o3, så båda årtalen noterade i stället för att tvinga in det i ett.
  Filen duplicerar inte Claude-familjens egna lanseringar utan
  korsreferererar `Claude_familjen.md` per år, samma mönster som
  `Kents_work_with_AI.md` redan använder. README:s filinventering
  uppdaterad. Tre öppna frågor i filen, bl.a. om Google/Gemini saknas.
  (4) **Skill-kontra-fil-idé väckt av Kent** (bara en tanke, inte
  beslutad): omforma `Kents_work_with_AI.md` till en skill i stället
  för en vanlig .md-fil. Claudes svar i chatten: håll isär syftena —
  den här filen är presentationsinnehåll (narrativ, citat, kronologi),
  en skill är operativ vägledning som styr Claudes eget beteende i
  framtida sessioner (samma kategori som `kent-meta-regler-for-code`,
  `kent-skrivstil`). Rekommendation: behåll filen som den är, men bygg
  eventuellt en SEPARAT, ny skill som fångar Kents faktiska
  samarbetsmönster med generativ AI som operativ vägledning — inte ett
  beslut, väntar på Kents besked.
- 2026-08-05 (v27): **Årskorten byggda.** Kent gav klartecken ("Kör på!")
  på strukturen diskuterad i v24–v26: åtta nya `kind: "year-card"`-slides
  (två per år 2023–2026: `variant: "tech"` "Vad som hände" / `variant:
  "personal"` "Hur jag jobbade") ersatte de två gamla `kind:
  "milestone"`-korten (2024, 2025–2026), som togs bort helt.
  Presentationen är nu arton slides (upp från tolv).
  - **Tier-systemet implementerat:** varje fact har `tier: 1|2|3`.
    `script.js` filtrerar mot en `TIER_CEILING`-tabell per hastighet
    (rapp=1, lagom=2, seriös=3) och rerenderar automatiskt vid
    hastighetsbyte (`setSpeed` anropar redan `goTo(current)`). Duration
    ändrad från fast 4 sek till `DURATIONS[speedKey]` — samma mönster
    som `glossary`/`bibliography` redan använde — eftersom
    innehållsmängden nu faktiskt varierar med hastigheten.
  - **Innehåll:** tech-korten byggda ur `Claude_familjen.md` +
    `AI_branschen_brett.md` (GPT-4, Claude 2/2.1/3/3.5/4/Cowork/4.6/5,
    Bing/GPT-4-integrationen, Sora, Llama 3, Altman-dramat, o1/o3,
    Fable 5-avstängningen). Personliga korten byggda ur
    `Kents_work_with_AI.md` (Perplexity, Claude Projects,
    stickfigur-testet båda åren, Claude Code/Cursor/GitHub-triangeln,
    Claude 4.6-citatet). **Örebro-materialet uteslöts helt** ur
    2025-personal, i linje med Kents beslut i v26 — inte ens på tier 3.
  - **CSS:** ny `.year-card-label` (eyebrow-text, skiljer tech/personal
    med accentfärg) och `.milestone-facts li.quote` (kursiv +
    citattecken via `::before`/`::after`) tillagda. `.milestone-pane`-
    stilen återanvänd rakt av — samma mörka, centrerade visuella språk
    som de gamla milstolparna, ingen ny grundstil behövdes.
  - **Bibliografin utökad kraftigt:** från 10 till 23 källor, eftersom
    varje ny händelse i tech-korten citeras och Harvard-konventionen
    (Regel 2) kräver att en inline-citerad källa också har en fullständig
    post i källförteckningen. Ny alfabetisk grupp: Meta AI, Microsoft,
    OpenAI (4 poster), Wikipedia (Altman-sagan) — utöver utökade
    Anthropic- och Lundgren-grupper.
  - **`glossary.js` utökad** med sex nya termer (GPT-4, GPT-4o, Sora,
    Llama 3, OpenAI, Perplexity) för att de nya korten ska följa samma
    "klickbar första gången"-regel som resten av presentationen.
  - Testat i webbläsaren: samtliga tre hastigheter (tier-filtrering
    bekräftad — rapp visar 2 fakta på 2023-tech, seriös visar alla 5),
    18 slides bekräftat (`PROJECTS.length`), glossary-matchning för
    flerordstermer ("OpenAI Whisper") bekräftad korrekt trots ny kortare
    "OpenAI"-term i listan, mobilvy, inga konsolfel. README och denna
    PRD synkade.
- 2026-08-05 (v28): `</> teknik`-modalen uppdaterad, på Kents begäran
  efter att han frågade hur tier-tekniken funkar. Modalen delades i två
  sektioner: **Tekniken** (befintliga fem kort + två nya: tier-filtret
  som styr innehållsmängd per hastighet, och den delade ordlistan för
  klickbara begrepp) och en helt ny **Metoden**-sektion (fyra kort:
  bruttolista-före-urval-mönstret, verifiering-innan-det-skrivs-in med
  två konkreta exempel på fel som fångades, diskussion-före-kodning för
  beslut med verkligt genomslag, PRD:n som versionerat beslutsminne,
  länkad direkt från modalen). Ny CSS-klass `.tech-section-title`. Kent
  frågade också om tier-tekniken var "ny" — svarat i chatten: nej, ett
  vanligt filter/progressive-disclosure-mönster, bara ovanligt tillämpat
  (mot vald uppspelningshastighet i stället för skärmstorlek). Testat i
  webbläsaren, båda sektionerna och samtliga nio kort bekräftade
  synliga och scrollbara, inga konsolfel.
- 2026-08-05 (v29): **"Jobbsökning"-framing borttagen överallt, på Kents
  uttryckliga begäran.** Han beskrev det som tråkigt, pretentiöst och
  onödigt — presentationen görs inte för jobbsökning, utan för att han
  tycker det är roligt, intressant och viktigt att testa, leka och lära
  tillsammans med generativ AI ("innan generativ AI, testar och 'leker'
  med oss människor..."). Sex fyndplatser rättade: avsnitt 2 (Syfte,
  omskrivet med Kents egen motivering), en formulering om
  hastighetsvarianternas syfte (avsnitt 4c-området, "rekryterare" → "någon
  som faktiskt sitter och tittar en stund"), `index.html`s
  Metoden-kort (tillagt i v28, samma session — hann bli fel innan Kent
  ens hunnit se det), `kent-presentationer`-skillens exempeltext, och
  `Presentationer/CLAUDE.md`s inledning (fick samtidigt Kents motivering
  inskriven, plus en efterlängtad uppdatering av Status-avsnittet som
  fortfarande nämnde de gamla två milstolparna i stället för de åtta
  årskorten). **Historiska ändringsloggposter (t.ex. v26:s omnämnande av
  "jobbsökningssyfte") lämnades oredigerade** — de beskriver vad som var
  sant vid det tillfället, att skriva om dem i efterhand skulle
  missrepresentera beslutshistoriken. Utöver PRD:n: sparat som ett
  varaktigt **user-minne** i Claudes minnessystem (inte i denna PRD, som
  bara gäller `Nr1`) — Kents motivering för att jobba med generativ AI
  gäller alla projekt, inte bara den här presentationen. Se chatten för
  Claudes förklaring av skillnaden mellan minnessystemet och CLAUDE.md-
  filer, som Kent uttryckligen frågade om.
