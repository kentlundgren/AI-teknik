# SPEC – Provbänken (Nr2)

**Hör till:** `PRD_presentation_ai_arbetsgivare.md` (v4)
**Skapad:** 2026-09-29
**Version:** 3.27 (se ändringsloggen; tidigare 3.3: frågor i Kents röst; kategorin "Forskningskalkyl", gruppering i kortvyn, Cursor under AI; godkänd av Kent 2026-09-29 som v3; två små tillägg vid bygget: siffror "anonymiserade", arbetssatt får vara tomt för ej_publik)
**Status:** **Godkänd som byggunderlag.** Ändringar görs som ny version.
**Syfte:** Låst byggspecifikation. PRD:n säger *vad och varför*, den här filen säger *exakt hur det ska vara* och när det är klart.

---

## 1. Läsare och språk

- Läsare: rekryterare, ekonomichefer och konsultkunder, utan teknisk bakgrund.
- **Enbart svenska** (beslutat 2026-09-29). Ingen språkväxlare.
- Ton: nordisk, saklig, inga säljande adjektiv. Förbjudna ord enligt Kents skrivregler (bl.a. "mycket", "omfattande", "särskilt", "unik", "brinner", "passionerad").

## 2. Struktur

En sida, `index.html`, en `style.css`, en `script.js` (motor) och en `data.js` (innehåll). Ingen automatisk uppspelning, inga externa beroenden utom vid behov typsnitt/ikoner från en tillåten CDN (helst inga).

1. **Sidhuvud:** "Provbänken" + en rad om vad sidan är + `version Nr2 per den [DATUM]` (regeln i `Presentationer/CLAUDE.md`, format `29 sep 2026`).
2. **Frågeguide:** fyra knappar/flikar (se 3). Vald fråga visar svaret och relevanta kort.
3. **Kortöversikt:** alla exempel som kort, filtrerbara via frågeguiden, fälls ut/ihop.
4. **Sidfot:** kort om "påhittade siffror ska sägas vara det", kontaktväg (endast e-post från CV: `lundgren.kent@gmail.com`), länk till LinkedIn (`https://www.linkedin.com/in/kentlundgren/`).

## 3. De fyra frågorna

| # | Fråga (rubrik) | Svar |
|---|---|---|
| 1 | Hur använder jag AI i controllerarbetet? | Tre nivåer: löpande arbete (MS Copilot för kortare frågor och standardanalyser), djupare byggen (Claude, Cursor, GitHub), andra åsikt och faktakoll (Perplexity, ChatGPT, Gemini). Kvalitetssäkring: se 6. |
| 2 | Vilka verktyg och system behärskar jag? | Ekonomisystem: Raindance, Unit4/UBW. BI/visualisering: Power BI, Hypergene, QlikView/QlikSense, Stratsys. Budget/prognos: Planacy, Excel (avancerad). AI: Claude, ChatGPT, Perplexity, Gemini, MS Copilot (utan versionsnummer). Egen utveckling: HTML, CSS, JavaScript, Cursor, GitHub. SAP nämns inte. |
| 3 | Vilka exempel kan jag visa? | Korten (se 4). |
| 4 | Vilka uppdrag och branscher passar mig? | Öppen för privat, offentlig, statlig och kommunal verksamhet, nyfiken på de flesta branscher. Uppdrag där den tekniska bakgrunden (civilingenjör, LTH) kommer till nytta, t.ex. industri, energi, infrastruktur. Geografi, tillgänglighet och arvode står **inte** på sidan. |

Fråga 3 är förvald när sidan öppnas, så en besökare direkt ser exempel.

## 4. Kort (data)

Varje kort i `data.js` har exakt dessa fält:

```
id            unik text, gemener och bindestreck
kategori      en av: "Granskning", "Ekonomikommunikation", "Forskningskalkyl", "Analys och faktakoll",
              "Revision och redovisning", "Förening", "Modellering", "Arbetssätt", "Vindkraftskalkyl", "Ämne i flera medier"
rubrik        max 60 tecken
en_mening     max 160 tecken, vad det är
arbetssatt    max 280 tecken, hur AI och Kent delade på arbetet ("AI föreslog, jag verifierade ...");
              får vara tomt för kort med sekretess "ej_publik"
verktyg       lista med texter
resultat      max 200 tecken, vad det visade
lank          absolut https-adress eller null
lank_text     max 60 tecken, beskrivande, inte en rå URL
start         valfritt: ISO-datum (ÅÅÅÅ-MM-DD) för kortets äldsta inlägg; styr sorteringen i fråga 5 (nyast överst)
ar            valfritt: år (text) för kort utan `medier` med `ar`, visas efter rubriken
bild          valfritt: { src (relativ sökväg i bilder/), alt, w, h } eller en lista av dem (växlar var fjärde sekund); `bildtext` ger en bildtext under stora bilden, bild från kortets inlägg, max 200 kB
medier        valfritt: lista med { ar?, medium ("Program"|"Bloggtext"|"LinkedIn"|"YouTube"|"Podd"|"Kalkylark"|"Sida"|"Mall"), text (max 60), url, not?, info? } för ett ämne i flera medier; ersätter lank
fler_lankar   valfritt: lista med { text, url } för kort med fler än en länk (samma regler som lank_text)
siffror       "paahittade" | "oppna_kallor" | "inga" | "verkliga_foreningens_egna" | "anonymiserade"
sekretess     "ok" | "ej_publik"   (ej_publik = visas utan länk)
```

Exempel som ingår (alla `sekretess: "ok"` om inget annat anges):

| id | Länk |
|---|---|
| bokslut-2025 | `https://kentlundgren.github.io/AI/Bokslut_2025/index.html` (siffror: påhittade; kräver att Kent pushat ändringarna) |
| ekonomikommunikation | `https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/index.html` |
| statsskuld | `https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html` |
| bas-2026 | `https://kentlundgren.github.io/Ekonomi/redovisning/BAS/index.html` |
| revision-kalmar-nation | `https://kentlundgren.github.io/Ekonomi/redovisning/revision/` |
| bjerred | `https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/` |
| samradsguiden | `https://kentlundgren.github.io/Codex/Fritid/NF/Samradsguiden/` (startsidan, inte `lund-ncc.html`; tillagt 2026-09-30) |
| balanskrav | `https://lundgren9.github.io/ekonomi/Balanskrav/index.html` (villkor: källraderna "Internt kommunalt underlag" är borttagna eller omskrivna innan länken används; ÖPPEN) |
| arbetssatt | `https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md` (beslutat: med kort och länk till PRD-mallen) |

**Nämns utan länk (`sekretess: "ej_publik"`)**, en mening vardera: KOF-hyreskostnad, avstämning av balanskonton, investeringsbudget, badkalkyl.
**Ska inte nämnas alls:** felsökning ekonomisystem, budgetprocess, Borrby.

## 5. Sekretesslista (får aldrig finnas på sidan)

- Interna serveradresser, inloggningsadresser, interna e-postadresser hos uppdragsgivare.
- Verkliga saldon, budgetbelopp, hyresobjekt eller objektnummer från en uppdragsgivare.
- Personnamn (utom Kents eget), uppgifter om Kents familj, telefonnummer, hemadress.
- Länkar till sidor som innehåller något ovan.
- Rå URL i löptext. Länkar har beskrivande text.
- Påståenden om vad Kent gör eller har gjort som inte är bekräftade av honom.

## 6. Kvalitetssäkringstexten (BESLUTAD, PRD 4h)

Får bara innehålla det Kent bekräftat (2026-09-29):

- "Jag kontrollerar AI:ns resultat mot källdata."
- "AI föreslår, jag verifierar."
- "Jag lägger inte persondata i AI-verktyg."
- Fyra sätt att verifiera får nämnas, var och en som en kort rad: Bokslutstestet (agenternas fynd jämfördes mot dokumentet och bedömdes), andra åsikt i en annan modell, egna kontrollsummor i Excel, och att källor och länkar öppnas och läses.

**Skrivs inte in (beslutat):** "eller uppdragsgivares interna uppgifter". Skälet: publika Simrishamn-verktyg med interna uppgifter byggdes med AI-stöd, så påståendet kan motsägas.

## 7. Tekniska krav

- Fungerar från 360 px bredd utan sidledes scroll; läsbart upp till 1200 px.
- Kontrast minst WCAG AA; alla knappar nåbara med tangentbord; synlig fokusmarkering.
- Reservläge utan JavaScript (beslutat): ett `<noscript>`-block med exemplen som en enkel länklista (beskrivande länktexter). Ingen full dubblering av korten.
- All text från `data.js` sätts in som text, inte som HTML (`textContent`), så inget innehåll kan köra kod.
- Externa länkar: `target="_blank" rel="noopener noreferrer"`.
- Utskrift: alla kort utfällda, knappar dolda, en logisk läsordning.
- Laddtid: under 1 sekund på vanlig uppkoppling; inga bilder över 200 kB.
- Ljust utseende räcker; mörkt läge är valfritt.

## 8. Acceptanslista (klart när allt detta stämmer)

- [ ] Sidan öppnas utan fel i konsolen, på mobil (360 px) och dator.
- [ ] Alla fyra frågor visar rätt innehåll; fråga 3 är förvald.
- [ ] Varje kort har alla fält och håller teckengränserna (kontrolleras med script, inte på känn).
- [ ] Varje länk öppnats och lästs; ingen ger 404; ingen leder till innehåll ur sekretesslistan.
- [ ] Sidan innehåller inget ur sekretesslistan (sökning på: `.int`, `rdsaas`, `@simrishamn`, verkliga belopp, personnamn).
- [ ] Bokslut 2025-sidorna är pushade av Kent och säger att siffrorna är påhittade.
- [ ] Inga förbjudna ord; ingen avslutande "ser fram emot"-fras; inga påståenden Kent inte bekräftat.
- [ ] Utskrift ger läsbart resultat.
- [ ] `version Nr2 per den [DATUM]` visas i sidhuvudet.
- [ ] `README.md` har Live Page-länken högst upp.
- [ ] Kent har läst sidan från början till slut och godkänt.

## 9. Ändringslogg

- **v3.27 (2026-10-01):** Kortet "PRD, specifikation och process-logg" (fråga 1, avsnittet "Så planerar jag ett bygge") blir ett ämneskort med Kents bild "Min utveckling med generativ AI – tre steg" (`Min_utveckling_med_generativAI.jpg`, 547×311, 34 kB, lagd i `bilder/` av Kent) och `medier`: LinkedIn-inlägget "Min "samvaro" med Claude" (2 aug 2026, adressen bakom `lnkd.in/p/esrNYU9c`, utan spårning), bloggtexterna "PRD först, sedan CLAUDE.md" (31 jul 2026) och "Behöver jag en spec.md?" (2 aug 2026), samt PRD-mallen (medium "Mall"). Bloggtexterna hittade jag vid sökning efter samma ämne (deras egna beskrivningar handlar om PRD och SPEC.md); Kent bör bekräfta dem. Kortet visas nu även i fråga 5 (start 2026-07-31). Kortet får årtalet (2026). Nytt medium-värde: "Mall".
- **v3.26 (2026-10-01):** **Adressraden visar frågans delbara adress.** När man väljer en fråga sätter sidan adressen till `…/Nr2/<fråga>/` (`history.replaceState`, inte `#`), så att man kan kopiera adressen rakt ur adressfältet och få frågans egen delningsbild. Laddas adressen om skickar dess lilla sida vidare hit igen. Gamla `#`-länkar (t.ex. `…/Nr2/#uppdrag`) skrivs om till den nya adressen vid laddning. Utan stöd (t.ex. `file://`) används `#` som förut. Eftersom adressen nu kan stå på en undermapp byggs bildsökvägar och länken "Provbänken" av sidans rotadress (mappen där `script.js` ligger), inte av relativa sökvägar. Testat lokalt: val av fråga, direkt laddning av `…/verktyg/`, gammal `#`-länk, bilder på kort (alla 200) och klick på "Provbänken".
- **v3.25 (2026-10-01):** "Provbänken" i sidhuvudet är en länk till startsidan (`./`, alltså `…/Nr2/` utan `#`). Klick laddar om sidan på huvudadressen, med standardfrågan "Vilka exempel kan jag visa?" vald. Samma färg som förut och ingen understrykning, utom vid hovring och tangentbordsfokus. Testat lokalt.
- **v3.24 (2026-10-01):** **Egen delningsbild per fråga.** LinkedIn och X läser `og:image` ur sidans HTML, kör inte JavaScript och ser inte delen efter `#`, så `#`-länkar ger alltid huvudsidans bild. Varje fråga får därför en egen liten sida (`ai-i-arbetet/`, `verktyg/`, `exempel/`, `uppdrag/`, `skrivit/`, var och en `index.html`) med egna `og:`- och `twitter:`-taggar (titel, beskrivning hämtade från sidans egen text, bild 1200×630) som direkt skickar besökaren vidare till `../#<fråga>` (meta refresh plus JavaScript, samt en synlig länk). Fem delningsbilder i `delning/` (JPEG, 69–134 kB), gjorda av HTML-källor i `delning/kalla/` med headless Chrome: text och schema (fråga 1 och 2), collage av Kents egna bilder (fråga 3 och 5), porträtt och text (fråga 4). Bilder från andra (Sequoia-schemat, AI-tabellen) används inte. `#`-länkarna fungerar som förut, men med huvudsidans bild (`og-bild.jpg`, oförändrad). Testat lokalt: varje delningssida svarar 200, har rätt taggar och skickar vidare till rätt fråga. Bilderna syns på LinkedIn och X först efter publicering.
- **v3.23 (2026-10-01):** Korten i fråga 5 sorteras automatiskt med **nyast överst och äldst längst ner**, efter nytt fält `start` (ISO-datum för kortets äldsta inlägg) när avsnittet har `sortera: "start"`. Ett ämne som pågått länge hamnar längst ner: vindkraften (start 2014-01-24) sist och statsskulden (2025-06-11) näst sist, så att läsaren ser att kalkylerna pågått länge. Övriga (alla 2026) sorteras på datum: AI-testerna 2026-09-25, Rösterna 2026-09-18, Harness och minne 2026-08-26, Claude-kostnad 2026-08-04, En gren för sanningen 2026-08-03, Ölkalkylen 2026-07-29. Ett nytt kort hamnar rätt om det får ett `start`-datum.
- **v3.22 (2026-09-30):** Korten "Harness och agenter, vad är det?" (LinkedIn-artikel 2026-08-27) och "Minnesanvändning i Claudes ekosystem" (bloggtext 2026-08-26) slås ihop till ett ämneskort, "Harness, agenter och minne", eftersom båda bygger på samma YouTube-video (Kents uppgift 2026-09-30). Videon är **Sequoia Capitals** ("When to Build Your Own Agent Harness", Harrison Chase, 13 aug 2026; kontrollerad via oEmbed och Kents egen bloggtext citerar den), inte Kents, och står som medium "Källa" med noteringen "video, Sequoia Capital". Nytt: `bild` får vara en **lista**, och bilderna växlar då var fjärde sekund med mjuk övertoning (både miniatyr och stor bild; av vid `prefers-reduced-motion`). Nytt valfritt fält `bildtext` (bildtext under stora bilden): "Skissen är min egen. Schemat är en bild ur Sequoia Capitals video." (skissen som Kents egen, schemat som ur videon, enligt Kents bloggtext; Kent bör bekräfta).
- **v3.21 (2026-09-30):** Årtal i parentes efter rubriken på varje ämneskort i det stängda kortet, t.ex. "Statsskuld i Sverige och USA (2025, 2026)". Årtalen hämtas från de år som finns i `medier` (`ar`), annars från kortets eget fält `ar`. Årtal kontrollerade: LinkedIn-inläggens datum räknade ur inläggens id (öl 2026-07-29, statsskuld 2026-07-28, rösterna 2026-09-18, AI-testerna 2026-09-25, harness 2026-08-27) och bloggarnas publiceringsdatum. Ordningen på korten är oförändrad (kurerad).
- **v3.20 (2026-09-30):** Vindkraftskortet får under 2024 bloggtexten "Vindkraftskalkyl med hjälp av AI" (22 okt 2024) och YouTube-videon "Vindkraftskalkyl med hjälp av AI - Anthropics Claude" (Kents kanal, kontrollerad via oEmbed). Hovringstexter efter Kents uppgifter 2026-09-30: i oktober 2024 var Anthropics Claude 3.5 Sonnet den aktuella modellen, och Kent lyckades få fram kalkylen med den gratis modellen; i videon går han igenom många AI-modeller, i princip alla som gällde i oktober 2024. Bloggtextens egen beskrivning nämner Claude 3.5 Sonnet och texten länkar till `vindkraftskalkyl.html`. Kortet nämner Claude 3.5 Sonnet bland verktygen. Att videon går igenom många modeller är Kents uppgift; innehållet i videon är inte genomgånget.
- **v3.19 (2026-09-30):** Vindkraftskortet får "Vindkraftskalkyl 19, React 18 utan JSX" (`kentlundgren.se/kalkyler/vindkraftskalkyl.html`, serverns datum 18 nov 2024, alltså 2024) med Kents historia som hovringstext: React och JSX för att få svaret direkt utan en beräkna-knapp, och att han nu kan få samma direkta svar med vanlig HTML, CSS och JavaScript utan React, vilket han tyckte var "magiskt". Samma historia, kortare, på version 25. Bloggtexten "Vindkraftskalkyl med generativ AI och React" (18 nov 2024) låg redan på kortet under 2024.
- **v3.18 (2026-09-30):** Vindkraftskortet får äldre versioner i årsblock: **2024** (Vindkraftskalkyl 25, React 18 och JSX, med bloggtexten från 18 nov 2024 och samlingssidan Vindkraftsekonomi), **2022** (Google Kalkylark och bloggtexten "Lönsamhet för 4 MW vindkraftverk", 14 sep 2022) och **2014** (bloggtexten "Lönsamhet för stora (3 MW) vindkraftverk", 24 jan 2014). Nytt valfritt fält `info` på en medieraden: hovringstext (`title`) plus en ⓘ-knapp som visar texten på touch och tangentbord; version 25 förklaras med Kents egna ord. Tona-ut-rörelsen är nu stegvis: ju äldre år, desto mer uttonat (55 % ner till 30 %). Årtal kontrollerade mot serverns `Last-Modified` (Vindkraftskalkyl 25: 18 nov 2024; Vindkraftsekonomi: 22 okt 2024) och bloggarnas publiceringsdatum. Notera: bloggtexten från 2014 gäller **3 MW**, och Google Kalkylarket för **4 MW** hör till inlägget från 2022 (inte 2014). Nya medieetiketter: "Kalkylark" och "Sida".
- **v3.17 (2026-09-30):** Ämneskort med flera år i `medier` (fältet `ar`) får en **rörelse**: senaste året ligger överst, och när kortet fälls ut tonas äldre år ut (till 45 %) medan det senaste tonas fram (från 25 % till 100 %), 2 sekunder. Äldre år blir fullt synligt vid hover eller tangentbordsfokus; ingen animation vid `prefers-reduced-motion` eller utskrift. Gäller Statsskuld (2026 överst, 2025 under) och Vindkraftskalkylen. Vindkraftskortet får ett 2025-block: bloggtexten "Vindkraftskalkyl med chattbot" (2025-06-27) och Kents YouTube-video med samma titel (kontrollerad via oEmbed). De två bloggtexter som tidigare låg på kortet ("Ett vindkraftverk, fem sanningar" och "Att göra vindkraftens ekonomi synlig") är från juli 2026 (datum i adressen) och ligger därför under 2026.
- **v3.16 (2026-09-30):** Fråga 5 byter rubrik till "Vad har jag skapat och berättat om generativ AI?" (id `skrivit` oförändrat, så länken `#skrivit` fortsätter fungera) och visar **ämneskort**: ett kort per ämne med alla medier samlade (Program, Bloggtext, LinkedIn, YouTube, Podd) via nytt valfritt fält `medier: [{ ar?, medium, text, url, not? }]`. Nio ämnen: Ölkalkylen, Statsskuld (2025 och 2026), AI-testerna, Vindkraftskalkylen, Rösterna efter ChatGPT, Harness och agenter, Claude-kostnad, Minnesanvändning, En gren för sanningen. De tidigare korten per inlägg (LinkedIn och blogg för sig) slås ihop. Kategori "Ämne i flera medier" (nya kort döljs i exempellistan). Två nya bilder (`ol-break-even.jpg`, `statsskuld-sverige-usa.jpg`). Visningssiffra får visas avrundad och daterad (Kents beslut 2026-09-30, ändrar tidigare regel): öl-inlägget "drygt 4 000 visningar, per 30 sep 2026". Spårningsparametrar (`?si=`, `utm_`, `rcm`) är borttagna ur alla länkar. `kentlundgren.se`-länken (statsskuld 2025) går inte att kontrollera maskinellt (HTTP 455), men Kents egen blogg länkar dit.
- **v3.15 (2026-09-30):** Kent la själv in två bilder (`Max_Tegmark_med_flera.jpg`, 138 kB, och `Harness_och_agenter.jpg`, 24 kB) som nu sitter på korten "Rösterna efter ChatGPT" och "Harness och agenter". Filnamnen behålls exakt, eftersom GitHub Pages skiljer på stora och små bokstäver.
- **v3.14 (2026-09-30):** Bilder på korten via nytt valfritt fält `bild: { src, alt, w, h }` (miniatyr i stängt kort, stor bild när kortet är utfällt). Fem bilder hämtade från Kents bloggar med hans ja 2026-09-30 och sparade i `bilder/` (JPEG, max 900 px bred, alla under 200 kB; vindkraftsbilden omgjord från 1,8 MB PNG). Fyra nya blogg-kort (kategori "Blogginlägg", `visas_i_exempel: false`) och bild plus bloggänk på AI-testerna. Kortlistan i fråga 5 har bildkorten först.
- **v3.13 (2026-09-30):** Fråga 5 får länkar till Kents två bloggars AI-kategorier (klel.wordpress.com och controllerutangranser.wordpress.com). Bilder på korten väntar på Kents godkännande av hur de ska hämtas.
- **v3.12 (2026-09-30):** Ny femte fråga "Vad har jag skrivit om generativ AI?" med en mening, länk till LinkedIn-profilen, en rad som nämner att kortare inlägg finns på X (#nyaAI) och tre LinkedIn-kort (kategori "Inlägg på LinkedIn", nytt valfritt fält `visas_i_exempel: false` så att de inte visas dubbelt under fråga 3). Kortens beskrivningar är utkast och länken till AI-testerna är byggd av inläggets id och ej öppnad; båda ska kontrolleras av Kent före publicering. X-inlägg som egna kort skjuts upp. Inläggens visningssiffror (LinkedIn/X) står inte på sidan.
- **v3.11 (2026-09-30):** Kortvyn (fråga 3) visar först bara grupperna, som hopfällda kort med titel, en beskrivande rad (`grupptexter` i `data.js`) och antal exempel. Exemplen syns när gruppen fälls ut. Vid utskrift fälls allt ut. De beskrivande raderna är utkast att godkännas av Kent, utom raden för Förening som bygger på hans egen formulering.
- **v3.10 (2026-09-30):** I kortvyn (fråga 3) grupperas kategorierna "Forskningskalkyl" och "Vindkraftskalkyl" under överrubriken "Kalkyl", med kategorin som underrubrik. Vindkraftskortet byter kategori från "Arbetssätt" till nya kategorin "Vindkraftskalkyl". Överrubrikerna styrs av `overgrupper` i `data.js`.
- **v3.9 (2026-09-30):** Fråga 1 får ett nytt avsnitt "Så lär jag känna modellerna" (proaktivt lära känna modellers och harness styrkor och svagheter; envist göra samma sak vid olika tillfällen) med kortet "Samma vindkraftskalkyl, flera gånger" (kategori Arbetssätt, tre länkar via nytt valfritt fält `fler_lankar`). Underrubriken "Så verifierar jag:" är nu en h4-rubrik. Versionerna hämtade ur Kents repon: fem perspektiv (Cursor, första commit 2026-07-03), Gemini 3 (2026-08-14), Next.js-appen (live 2026-09-16); alla tre svarar 200.
- **v3.8 (2026-09-30):** Gemini Notebook flyttat från "Andra åsikt och faktakoll" till egen rad "Lära och studera" i fråga 1, med en mening om vad verktyget kan (källor: material, länkar, YouTube-videor; utdata: podd-liknande ljudsammanfattningar, quiz), kontrollerat mot Wikipedia och flera guider 2026-09-30.
- **v3.7 (2026-09-30):** Grok och Gemini Notebook (tidigare NotebookLM, omdöpt av Google i juli 2026) tillagda som AI-verktyg i fråga 1 och 2, med länkar.
- **v3.6 (2026-09-30):** Verktygsnamn i svarstexterna (MS Copilot, Claude, Cursor, GitHub, Perplexity, ChatGPT, Gemini) länkas till respektive officiella sida. Adresserna ligger i `verktygslankar` i `data.js`.
- **v3.5 (2026-09-30):** Fråga 1 delas i tre avsnitt med egna rubriker (verktyg, planering, kvalitetssäkring), och korten visas inne i det avsnitt de illustrerar i stället för under svarsrutan. "Kvalitetssäkring" och "Så verifierar jag" slås ihop. Kortet Claude-kompassen (kategori Arbetssätt) tillagt. GitHub-hörn och teknik-modal tillagda.
- **v3.4 (2026-09-30):** Kortet Samrådsguiden (kategori Förening) tillagt, eftersom ansökan till Invici länkar den.
- **v3.3 (2026-09-30):** Frågorna skrivs i Kents röst ("jag"/"mig") enligt Kents synpunkt på publicerad sida.
- **v3.2 (2026-09-30):** Efter Kents synpunkter på publicerad sida: Cursor flyttat till AI-raden, GitHub kvar under egen utveckling; kortet Ekonomikommunikation heter nu kategori "Forskningskalkyl"; kort grupperas under en rubrik per kategori och kort utan länk i egen grupp.
- **v3.1 (2026-09-29):** Vid bygget: fältet siffror fick värdet "anonymiserade"; arbetssatt får vara tomt när sekretess är "ej_publik". Balanskrav byggs som "ej_publik" (utan länk) tills sidans källrader är rättade.
- **v3 (2026-09-29):** Kent godkände. Arbetssätt-kortet länkar PRD-mallen. Reservläge: enkel noscript-lista.
- **v2 (2026-09-29):** Avsnitt 6 skrivet efter Kents svar på h.
- **v1 (2026-09-29):** Första utkast efter Kents beslut: SPEC ja, bara svenska, fyra frågor.
