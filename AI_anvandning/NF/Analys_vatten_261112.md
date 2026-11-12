# Analys: vatten i moderna AI-anläggningar

**Version:** 0.1 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** arbetsunderlag. Siffrorna är hämtade ur angivna källor och inte kvalitetssäkrade. Läsaren ska kontrollera mot källan. Hämtdatum för alla webbkällor: 2026-11-12. Hör ihop med [Analys_resurser_261112.md](Analys_resurser_261112.md).

## 1. Frågan

Går det åt vatten när man ställer en fråga till en AI-tjänst? Cirkulerar vattnet bara i en sluten krets (och kostar då el för pumpar och kylning), eller försvinner det? Och vad blir det per fråga och per arbetspass? Frågan är viktig för många i miljörörelsen, och svaret beror på vad man räknar med.

## 2. Kort svar

1. **Ja, vatten kan förbrukas, men det beror på kylmetoden.** I en anläggning med förångningskylning (avdunstning) försvinner vattnet ut i luften. I en sluten krets, som Microsoft säger att alla nya anläggningar byggs med sedan augusti 2024, cirkulerar vattnet och fylls på en gång vid bygget. Då behövs el till kylmaskiner och pumpar. Microsoft anger själva att detta ger en "nominell" ökning av årlig energianvändning, utan siffra.
2. **Det finns två vattenmängder som ofta blandas ihop:** vattnet *vid datacentret* (direkt) och vattnet som förbrukas *för att göra elen* (indirekt). I USA är den indirekta mängden cirka tolv gånger större än den direkta, enligt en rapport till den amerikanska kongressen.
3. **Per textfråga** blir det ungefär 0,07–0,3 ml direkt vid datacentret och cirka 1 ml indirekt (med amerikansk elmix). Det är i storleksordningen en bråkdel av en droppe till en tesked.
4. **För Sverige** saknar jag verifierade siffror för indirekt vatten. Det är en öppen fråga.

## 3. Vad källorna säger

### 3.1 Direkt vatten, vid datacentret

Tabell 1. Vatten vid datacentret, uttryckt per kWh (WUE, "water usage effectiveness") och per fråga

| Nr | Uppgift | Siffra | Källa | Vad det betyder per textfråga (0,24 Wh) |
|---|---|---|---|---|
| 1 | Genomsnittlig WUE i USA:s datacenter 2023 | cirka 0,36 liter per kWh | Shehabi m.fl. (2024), Lawrence Berkeley National Laboratory (LBNL) | cirka 0,09 ml |
| 2 | Microsofts globala genomsnitt, räkenskapsår 2024 | 0,30 liter per kWh | Microsoft (2024) | cirka 0,07 ml |
| 3 | Microsofts genomsnitt 2025 | 0,27 liter per kWh (från 2,3 i de första generationernas anläggningar) | Microsoft (2026) | cirka 0,06 ml |
| 4 | Googles uppgift för en median-textfråga | 0,26 ml | Vahdat & Dean (2025) | 0,26 ml |
| 5 | OpenAI (Sam Altman) för en genomsnittlig ChatGPT-fråga | 0,000085 gallon, cirka 0,32 ml | Altman (2025) | 0,32 ml (utan redovisad metod) |

Kolumnen till höger är egen enkel räkning (liter per kWh × 0,00024 kWh). Rad 4 och 5 är bolagens egna uppgifter, och Altman redovisar ingen metod. Skillnaden mellan raderna beror på vilka anläggningar, vilken kylmetod och vilken fråga som räknas.

Hela USA: datacentren förbrukade direkt cirka 66 miljarder liter vatten 2023, och 84 % av det i storskaliga och uthyrda datacenter (Shehabi m.fl., 2024, s. 55). Samma rapport prognostiserar att storskaliga datacenter förbrukar 60–124 miljarder liter 2028.

### 3.2 Indirekt vatten, för elen

Rapporten från LBNL beräknar att USA:s datacenter förbrukade cirka 178 TWh 2023 och att det motsvarar nära 800 miljarder liter indirekt vatten, i genomsnitt 4,52 liter per kWh (jämfört med 4,35 för USA:s elanvändning totalt). Vattnet förbrukas vid kraftverken: värmekraftverk behöver mycket kylvatten, och vattenkraftens magasin förlorar vatten genom avdunstning. Se Shehabi m.fl. (2024, s. 56–57).

Räknat per textfråga: 4,52 liter/kWh × 0,00024 kWh ≈ 1,1 ml. Det är alltså *indirekta* vattnet som är störst i USA:s elmix, inte vattnet vid datacentret. Siffran gäller USA:s elmix. Metoden förutsätter att datacentret får elen från regionens genomsnittliga elmix, och räknar inte med egna avtal eller egen elproduktion.

### 3.3 Vad moderna anläggningar gör annorlunda

Enligt Microsoft (2024, 2026), som jag läst via en genomgång av de två sidorna:

- Sedan augusti 2024 använder alla nya Microsoft-datacenter chipkylning med slutna vattenkretsar, utan avdunstning. Vattnet fylls på en gång vid bygget och cirkulerar sedan mellan servrar och kylmaskiner. Vatten används fortfarande för administrativa behov, som toaletter och kök.
- Konsekvens för elen: "ersättning av förångande system med mekanisk kylning ökar PUE" (energieffektiviteten blir sämre), men värmen kan hanteras med varmare vattentemperatur och effektiva kylmaskiner. Resultatet beskrivs som en "nominell" ökning av årlig energianvändning. Ingen siffra anges.
- Det finns ingen uppgift om hur anläggningen beter sig vid mycket varmt väder, och ingen andel av flottan som redan har denna design. Nya anläggningar planeras komma i drift från slutet av 2027. Den nuvarande flottan är en blandning. Microsoft anger att cirka 90 % av den ägda flottan 2025 har "låg- till nollvatten"-kylning, vilket är en vidare kategori.
- Ytterligare el för pumpar och kylmaskiner syns i PUE (energi för hela anläggningen delat med energi till servrarna). Google anger en PUE på 1,09 för 2025 (uppgift ur sökresultat, ej kontrollerad i originalet).

Google: enligt sökresultat byggs Googles första egenutvecklade datacenter i Sverige (Horndal) för luftkylning. Det är en uppgift ur en sekundärkälla som inte är kontrollerad mot Googles rapport. Googles egen sida bekräftar bara att bolaget återställer (replenish) cirka 78 % av det färskvatten de förbrukade 2025. Återställning är inte samma sak som att inte förbruka.

## 4. Per fråga och per arbetspass

Per arbetspass finns ingen mätning. Räkna antal frågor × vatten per fråga. Räknat med en vanlig fråga och två olika systemgränser:

Tabell 2. Vatten per arbetspass (egen räkning, illustration)

| Nr | Systemgräns | Per fråga | 200 frågor | 2 000 frågor (tio gånger tyngre pass eller flera pass) |
|---|---|---|---|---|
| 1 | Bara datacentret, lägre värde (Microsoft 2025, 0,27 L/kWh) | cirka 0,06 ml | cirka 13 ml | cirka 130 ml |
| 2 | Bara datacentret, Googles uppgift | 0,26 ml | 52 ml | 520 ml |
| 3 | Datacentret plus elens vatten (USA:s elmix, 4,52 L/kWh + 0,36 L/kWh) | cirka 1,2 ml | cirka 230 ml | cirka 2,3 liter |

Jämförelse: ett vattenglas är 2 dl. Rad 3 för 200 frågor motsvarar alltså ungefär ett vattenglas, men siffran bygger på amerikansk elmix och bör inte överföras till Sverige. De tunga passen (2 000 frågor) är ett scenario, inte en mätning.

## 5. Vad som är rimligt att säga på sidan

**Rimligt:**
- Vatten kan förbrukas vid ett datacenter, men hur mycket beror starkt på kylmetod och plats.
- Moderna anläggningar går mot slutna system som inte förångar vatten, på bekostnad av lite mer el (enligt tillverkarens egen redovisning).
- Per fråga är vattnet litet (bråkdelar av en tesked till några droppar), men totalen växer: USA:s datacenter förbrukade cirka 66 miljarder liter direkt 2023, och uppskattningen för 2028 är 60–124 miljarder liter för storskaliga datacenter.
- Den största delen av vattnet kan finnas *utanför* datacentret, i elproduktionen. Då spelar elmixen roll.

**Inte rimligt:**
- Att AI "inte använder något vatten" (slutna system finns men är inte hela flottan, och elen har ett eget vattenavtryck).
- Att en fråga "förbrukar en flaska vatten". Vår genomgång visar bråkdelar av en milliliter direkt (cirka 0,06–0,3 ml) och cirka 1 ml med indirekt vatten, inte 500 ml.
- Att siffrorna är mätta och granskade. Bolagens uppgifter är egna och Altmans saknar metod.

## 6. Det som återstår att verifiera

- Microsofts uppgifter är lästa via en genomgång av sidorna (inte läst av mig direkt i original). Diagrammet över vattenanvändning per kylteknik går inte att läsa i text.
- LBNL-rapporten: min kopia är märkt "EMBARGOED REPORT: DO NOT DISTRIBUTE". Kontrollera att siffrorna stämmer mot den officiella versionen på LBNL och DOE innan sidan publiceras.
- Jegham m.fl. (2025) anger i sin sammanfattning att en kort fråga på 0,42 Wh multiplicerad med 700 miljoner frågor per dag motsvarar vatten för 1,2 miljoner människors årliga dricksvattenbehov. Siffran per fråga (1,2 ml enligt ett sökresultat) har jag inte sett i artikeln.
- Indirekt vatten för **svensk** el: ingen verifierad siffra. Sök efter vattenförbrukning för vattenkraft, kärnkraft och vindkraft i Sverige.
- Svenska datacenters kylmetoder och vattenanvändning: ingen verifierad källa. Googles Horndal-uppgift ska kontrolleras.
- Googles totala vattenförbrukning (sökresultaten anger 10,9 miljarder gallon 2025): ej bekräftad i originalet.
- Om pumpar och kylmaskiner: en oberoende källa (inte tillverkare) för energiskillnaden mellan förångningskylning och slutna system.

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Altman, S. (2025) 'The gentle singularity'. https://blog.samaltman.com/the-gentle-singularity *(OpenAI-chefens uppgift om 0,34 Wh och 0,000085 gallon per genomsnittlig fråga. Läst i originalet. Metod redovisas inte.)*
- Jegham, N. m.fl. (2025) 'How hungry is AI? Benchmarking energy, water, and carbon footprint of LLM inference'. arXiv:2505.09598. https://arxiv.org/abs/2505.09598 *(Jämförande mätning av 30 modeller. Endast sammanfattningen läst.)*
- Microsoft (Priest, J. & Solomon, S.) (2026) 'Inside Microsoft's two-decade push to cut water intensity while scaling for growth', 24 juni 2026. https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/ *(Microsofts WUE 0,27 L/kWh 2025 och andel låg- till nollvattenkylning. Läst via genomgång, inte direkt.)*
- Microsoft (Solomon, S.) (2024) 'Sustainable by design: next-generation datacenters consume zero water for cooling', 9 december 2024. https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/ *(Beskrivning av den slutna kretsen och energikonsekvensen. Läst via genomgång, inte direkt.)*
- Shehabi, A. m.fl. (2024) *2024 United States Data Center Energy Usage Report*, LBNL-2001637, Lawrence Berkeley National Laboratory, december 2024. https://eta-publications.lbl.gov/sites/default/files/2024-12/us_data_center_energy_usage_report_lbnl-2001637.pdf *(Direkt och indirekt vattenanvändning i USA:s datacenter. Delar läst. Min kopia är märkt som embargo, kontrollera mot officiell version.)*
- Vahdat, A. & Dean, J. (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Googles uppgift om 0,26 ml vatten per textfråga. Ej verifierad av tredje part.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
