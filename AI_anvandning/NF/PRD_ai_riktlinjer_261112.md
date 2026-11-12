# PRD: förhållningssätt och riktlinjer för generativ AI i en ideell miljöorganisation

**Version:** 0.5 (utkast) · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** Kents egen undersökning, på eget initiativ och utan samordning. Inte beslutat av Lunds Naturskyddsförening eller av Naturskyddsföreningen.
**Ändringar i 0.5:** vattenavsnittet (uttag, förbrukning, temperatur, kärnkraftsjämförelse) och en ny miljöfaktoranalys ([Analys_miljofaktorer_261112.md](Analys_miljofaktorer_261112.md)) med graderingsram. Presentationsmodell i två steg införd (avsnitt 7). Hubb-och-sidor-struktur föreslagen.
**Ändringar i 0.4:** ny vattenanalys ([Analys_vatten_261112.md](Analys_vatten_261112.md)): direkt och indirekt vatten, slutna kylsystem, per fråga och per arbetspass. Mikrovågsugnen fastställd till 1 000 W.
**Ändringar i 0.3:** besvarade frågor och liknelser (mikrovågsugn, vatten) samt Sverige/världen inarbetade. Kvarstående frågor uppdaterade.
**Ändringar i 0.2:** Kents svar inarbetade (öppen publicering på GitHub, resursanalys som eget underlag, format md först och sedan html/css/js, databasidé, anonymisering). Se [Analys_resurser_261112.md](Analys_resurser_261112.md).

> **Utgångspunkter (bekräftade av Kent 2026-11-12):**
> 1. Det är Kents egen undersökning, utan samordning med föreningen just nu.
> 2. Resultatet publiceras öppet på webben via GitHub, som en genomtänkt sida att hänvisa till i stället för att svara på enskilda e-postfrågor.
> 3. Materialet är ett *förslag* och ett underlag för diskussion, inte en antagen policy, och gäller ideella organisationer generellt med Naturskyddsföreningen som exempel.
> 4. Kent skriver och står som avsändare. Föreningen nämns som ämne, aldrig som upphov.
> 5. Rekommendationerna ska vara konkreta, med skälen för och mot öppet redovisade.
> 6. Skeptikernas hållning respekteras. Det som "många vet" om AI:s resursanvändning prövas mot källor i stället för att antas eller avfärdas.
> 7. Varje version märks med versionsnummer och datum, så att det alltid framgår vilken som gäller.
> 8. Namnet på dokumentet är öppet tills vidare.

---

## 1. Bakgrund

Inför Kulturens adventsmässa i Lund 2026 skissade LNF:s klimatgrupp en informationsplansch om El Niño. En medlem lät en AI-tjänst göra ett layoutförslag, en annan gjorde ett utkast med traditionella metoder. Det väckte frågan om föreningen har en hållning till AI. En kommunikationsansvarig i LNF skrev den 2026-11-10 till Naturskyddsföreningens rikskansli och ställde två frågor:

- Ska vi avstå från AI i alla sammanhang, med tanke på teknikens el- och vattenförbrukning?
- Är vi redo att lämna traditionell layout för en mer otraditionell form som AI föreslår (mer slagkraftig och ungdomlig, eller för gräll och oseriös)?

Rikskansliet svarade den 2026-11-11 (återgivet ur e-posten, inte ur någon publicerad källa):

- Det finns **inga fastslagna riktlinjer eller klar policy**, bara "några lösa förhållningspunkter". Rikskansliet tittar på frågan. Om riktlinjerna blir kansliinterna eller delas med rörelsen är inte känt.
- AI får användas på rikskansliet, "med omsorg och försiktighet".
- Ett tillfälle då organisationen hakade på en AI-trend på Instagram väckte stor upprördhet, och inlägget togs bort.
- Kommunikationsavdelningen gör inte bilder eller video med AI. Rekommendationen till kretsarna är att inte göra AI-producerad bildkommunikation, eftersom reaktionerna måste hanteras. Organisationen får även kritik för AI-bilder som inte är AI-bilder.

Slutsatsen i e-posten är alltså försiktighet, särskilt för bilder. Det som saknas är en **hel bild**: vad är rimligt, vad är olämpligt, och varför. Kretsar och medlemmar behöver ett stöd som inte bara säger "var försiktig".

Underlaget är en privat e-posttråd. Den ligger inte i repot. Sidan nämner inga personer med namn: beskrivningen sker med roller ("kommunikationsansvarig", "kommunikationsavdelningen") eller generellt ("någon i klimatgruppen"), och helst utan att peka ut vem som tog initiativet.

## 2. Syfte och mål

**Syfte:** ge en ideell miljöorganisation ett begripligt och användbart förhållningssätt till generativ AI, så att medlemmar kan använda eller avstå från den med öppna ögon.

**Mål (mätbara där det går):**

| Nr | Mål | Hur vi ser att det nåtts |
|---|---|---|
| M1 | En läsare som gillar AI hittar konkreta, tillåtna sätt att spara tid och förbättra sitt arbete | Minst fem tydliga exempel på "bra användning" med arbetssätt |
| M2 | En skeptisk läsare känner att farhågorna tas på allvar och inte avfärdas | Varje farhåga (miljö, trovärdighet, upphovsrätt, arbetsmarknad, desinformation) har ett eget avsnitt med fakta och en konsekvens för reglerna |
| M3 | Gemensamma, enkla spelregler som går att tillämpa utan expertkunskap | En checklista på en sida som en styrelseledamot kan använda inför ett beslut |
| M4 | Dokumentet kan antas av en krets utan omarbetning | Tydligt märkt som förslag med plats för kretsens egna val |
| M5 | Samordning med rikskansliets pågående arbete | Inga motsägelser med vad rikskansliet redan sagt, och dokumentet kan bytas ut när riktlinjer kommer |

## 3. Målgrupper

| Grupp | Behov | Risk om vi missar |
|---|---|---|
| "Gillar AI" | Veta vad som är tillåtet, få praktiska tips, slippa onödiga förbud | Gör som de vill, utan skyddsnät |
| Skeptiker | Se att miljö- och trovärdighetsfrågorna är på riktigt hanterade | Känner sig överkörda, dokumentet avfärdas |
| Mitten (flest) | Enkel vägledning, få regler, tydliga exempel | Väljer att inte läsa |
| Styrelse och ordförande | Beslutsunderlag och ansvarsfördelning | Beslut fattas ad hoc, olika från fall till fall |
| Externa mottagare (besökare, press) | Att föreningen är konsekvent och ärlig | Förtroendeskada, som rikskansliets Instagram-erfarenhet visar |

## 4. Omfattning

**Ingår:** text, bild och video (generativt), översättning och språkgranskning, mötesanteckningar, sammanfattning av egna dokument, research och faktakontroll, personuppgifter, miljöpåverkan, öppenhet om AI-användning, ansvar och beslut, hur man frågar och överklagar en bedömning.

**Ingår inte (i första versionen):** val av enskilda produkter, tekniska installationsguider, juridisk rådgivning, ställningstaganden i AI-politik som organisationens opinionsbildning (till exempel att kräva reglering av datacenter). Den frågan kan nämnas men ska hållas isär från intern användning.

## 5. Föreslaget innehåll

Gemensamt för hela dokumentet: kort, konkret, och med både skälen *för* och *mot* i samma avsnitt.

1. **Utgångspunkt.** Vi använder AI för att nå vårt mål (mer miljöarbete för tid och pengar), inte för att AI är nytt. Ansvaret ligger alltid hos en människa.
2. **Principer** (ett förslag, att diskutera): ansvar, sanning, öppenhet, försiktighet med bilder och människor, miljömedvetenhet, integritet, frivillighet.
3. **Trafikljusmodell** för användning:
   - **Grönt:** stöd i arbetet där människan granskar, till exempel språkgranskning, översättningsutkast, sammanfattning av eget material, brainstorming.
   - **Gult:** kräver beslut eller extra kontroll, till exempel faktatexter som publiceras, layout och illustrationer, sociala medier.
   - **Rött:** görs inte, till exempel AI-genererade bilder som kan uppfattas som fotografier eller som föreställer verkliga människor, påhittade citat, att lägga in medlemsregister eller personuppgifter i en extern tjänst.
   (Var gränserna dras är ett av de viktigaste öppna besluten, se avsnitt 12.)
4. **Bilder och video** (eget avsnitt, mot bakgrund av vad rikskansliet sagt): varför bilder är känsligare än text, vad som skiljer en illustration från ett realistiskt "foto", hur man märker upp, alternativ (egna foton, ideella bildbanker med fria licenser, handritat).
5. **Fakta och källor.** AI kan hitta på ("hallucinera"). Regel: allt som publiceras som sakpåstående ska kontrolleras mot en källa som en människa har öppnat. Hänvisa till föreningens egen källstandard.
6. **Miljöpåverkan.** Ett ärligt avsnitt: vad som är känt och inte känt om el, vatten och utsläpp per användning, hur det jämförs med andra digitala vanor, och vad man kan göra (använd det som behövs, inte för skojs skull; välj mindre tjänster där det räcker). Ska bygga på verifierade källor, och påstå inget som inte kan visas.
7. **Personuppgifter och sekretess.** Vad man inte får mata in i en AI-tjänst (medlemsuppgifter, styrelseprotokoll med personuppgifter, ej offentliga handlingar). Hänvisning till dataskyddsregler.
8. **Upphovsrätt och rättvisa.** Frågor om träningsdata, vem som äger resultatet, och hur man tar hänsyn till illustratörer och fotografer som själva är en del av civilsamhället.
9. **Öppenhet.** När och hur man berättar att AI använts. Förslag: öppen märkning där en mottagare rimligen skulle vilja veta, och ingen märkning som blir ett mål i sig.
10. **Ansvar och förankring.** Vem beslutar, vem frågar man, hur ofta ses riktlinjen över.
11. **Checklista på en sida** inför användning.
12. **Vanliga frågor och invändningar**, uppdelat på "entusiastens frågor" och "skeptikerns frågor", med korta och ärliga svar.
13. **Exempel från LNF:s verklighet** (till exempel affischen), men utan att peka ut personer.

## 6. Ton och skrivprinciper

- Respektfull mot båda läger. Ingen moralpredikan åt något håll. Inga överdrifter ("AI förstör planeten", "AI löser allt").
- Skilj fakta, bedömning och värdering åt. Säg vad som är osäkert.
- Förklara fackord vid första användning. Svensk versalbruk i rubriker.
- Källor enligt Harvard med länkar som kontrollerats. Inga påhittade siffror.
- Ingen AI-märkning av dokumentet självt, men sant formulerad process (inga påståenden om genomläsning som inte skett).

## 7. Leveransformat

Beslut av Kent: först en struktur i `.md` som visar vad vi vill säga, sedan, när innehållet är klart, en presentation i HTML, CSS och JavaScript på GitHub Pages. En Word-version kan göras vid behov.

| Steg | Leverans |
|---|---|
| 1 | `.md`: PRD, analys, innehållsstruktur (detta arbete) |
| 2 | Kort version (1–2 sidor) och längre bakgrund i `.md` |
| 3 | HTML-sida med båda: kort version överst, fördjupning under rubriker, alla siffror med källa och hämtdatum |
| 4 | Siffror i en datafil (JSON) som sidan läser, med version och datum per värde (se Analys_resurser, avsnitt 6). Databas först om uppdateringen ska automatiseras |

Sidan följer Kents sidregler: version och datum synligt, `index.html` som startsida, hörnlänkarna `{ } GitHub` och `</> teknik`, README med Live-länk överst.

**Presentation i två steg (beslutad princip).** Svåra frågor, som vattnet, presenteras först kort och faktamässigt korrekt och sedan i en fullständig analys som läsaren klickar vidare till. Varje svår fråga får därför en kort ruta (3–5 meningar, en liten tabell) och en länk till en egen fördjupningssida. Samma modell gäller miljöfaktorerna: en kort tabell med graderad säkerhet, och fördjupning bakom.

**Struktur på GitHub Pages (förslag).** `index.html` är en kort hubb med status, version, datum och länkar. Den gällande huvudtexten ligger på en sida med stabilt namn. Fördjupningar och alternativa versioner är egna sidor, och äldre versioner läggs i `old/` med version och datum i filnamnet. Namnet är fortfarande öppet.

**Källkrav.** Varje väsentligt påstående och varje siffra får en källa med länk och hämtdatum, och en markering av hur väl den är belagd (läst i originalet, läst via sekundärkälla eller bolagets egen uppgift).

## 8. Faktaunderlag som behöver samlas in och verifieras

Allt nedan är *uppgifter att hitta*, inget är ännu kontrollerat:

- Naturskyddsföreningens egna offentliga uttalanden om AI, och rikskansliets riktlinjer när de finns.
- Andra ideella organisationers publicerade AI-policyer (för jämförelse).
- Forskning och rapporter om generativ AI:s energi- och vattenanvändning (med osäkerhetsintervall).
- Dataskydd: Integritetsskyddsmyndighetens vägledning om AI och personuppgifter.
- EU:s AI-förordning (märkning av AI-genererat innehåll, i den mån den gäller en förening).
- Upphovsrättsläget för AI-genererade bilder.
- Forskning om hur publik reagerar på AI-bilder och märkning.

## 9. Faser

| Fas | Innehåll | Leverans |
|---|---|---|
| 0 | Öppna frågor (avsnitt 12) besvaras, PRD v1.0 fryses efter genomläsning | Denna PRD |
| 1 | Faktaunderlag: sök och verifiera källor | Annoterad källförteckning |
| 2 | Gör ett första utkast av alternativ A (kort riktlinje) | Utkast 1 |
| 3 | Gör B (bakgrund, FAQ, miljöavsnitt) | Utkast 2 |
| 4 | Testläsning med en entusiast och en skeptiker, justera | Utkast 3 |
| 5 | Förankring: styrelsen, ev. rikskansliet | Beslut eller önskemål om ändringar |
| 6 | (Valfritt) HTML-sida, Word-version | Publicering |

## 10. SPEC.md-checkpoint

*Behövs ett SPEC.md-steg härifrån?* **Nej.** Leveransen är text, inte ett tekniskt eller agentdrivet system med indata och gränsfall. Prövas på nytt om en HTML-sida (fas 6) får interaktiva delar, till exempel en beslutshjälp.

## 11. Risker

| Risk | Åtgärd |
|---|---|
| Läses som antagen policy | Tydlig statusrad "förslag" överst, på varje sida |
| Skeptiker upplever det som reklam för AI | Skälen mot först i varje avsnitt, miljöavsnittet ärligt |
| Entusiaster upplever det som förbud | Gröna användningar konkret och användbart beskrivna |
| Fel i miljösiffror | Bara verifierade källor, osäkerhet redovisas, hämtdatum |
| Motsäger rikskansliets kommande riktlinjer | Samordning, och att dokumentet kan ersättas |
| Personuppgifter eller internt material hamnar i repot | Ingen kopia av e-posttråden, inga namn eller adresser |

## 12. Öppna frågor

Besvarade av Kent 2026-11-12:

| Fråga | Svar |
|---|---|
| Beställare och mandat | Eget initiativ, ingen samordning just nu |
| Publik | Öppet på webben, GitHub |
| Hållning | Konkreta rekommendationer med skäl |
| Bilder | Skeptikerns reaktion ska tas på allvar, men resursargumentet analyseras mot källor (se analysen) |
| Miljöavsnittet | Eget analysavsnitt, med möjlig databaskoppling för aktuella värden |
| Format | `.md` först, sedan HTML, CSS och JavaScript |
| Samordning med riksorganisationen | Inte nu |
| Tidsram | Underlaget ska kunna användas för att svara föreningen idag. Sidan i version 1.0 kan komma efteråt |
| Anonymisering | Inga namn. Roller eller generell framställan |
| Namn på dokumentet | Öppet, avgörs senare |

Besvarade senare samma dag (Kent):

| Fråga | Svar |
|---|---|
| Svar till föreningen | Väntar tills sidan är färdig. Inget mejl dessförinnan |
| Trafikljusets gränser | Enligt förslaget i avsnitt 5 |
| Resursavsnittet utåt | Komprimerad version med liknelser: en fråga i sekunder i en vanlig mikrovågsugn, en hel produkt (som den här sidan) i motsvarande tid, och vatten i vardagsmått. Se Analys_resurser, avsnitt 6 |
| Svenska och globala förhållanden | Fakta för båda, där de skiljer sig. Se Analys_resurser, avsnitt 7 |

Kvarstår:

1. **Namnet:** förslag samlas under arbetet ("förhållningssätt" kan heta *approach*, *stance* eller *position* på engelska; "riktlinjer" heter *guidelines*, "policy" heter *policy*).
2. **Mikrovågsugnens effekt:** 1 000 W (beslutat). Ska den ändå vara en inställbar parameter på sidan?
3. **Vattnet:** hur ska sidan beskriva att vattnet *cirkulerar* i vissa anläggningar men förångas i andra, utan att påstå mer än källorna visar?
4. **Verifieringar före publicering:** Luccioni (bildsiffran), Li (vattenmetoden), Ember, total svensk elanvändning och slutna kylsystem. Se Analys_resurser, avsnitt 9.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
