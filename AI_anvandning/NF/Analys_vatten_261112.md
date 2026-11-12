# Analys: vatten i moderna AI-anläggningar

**Version:** 0.3 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Ändringar i 0.3:** USGS, LBNL och Li m.fl. kontrollerade mot originalen (se [Forbattringar_261112.md](Forbattringar_261112.md), avsnitt 5). Förklaring till varför Li m.fl. ger högre värden. Avsnitt 7 ersatt av hänvisning till registret.
**Ändringar i 0.2:** kort version överst (steg 1), nytt avsnitt 4 om uttag, förbrukning och temperatur med kärnkraftsjämförelse och kylmetoder. Övriga avsnitt flyttade till 5–7. Se även [Analys_miljofaktorer_261112.md](Analys_miljofaktorer_261112.md).
**Status:** arbetsunderlag. Siffrorna är hämtade ur angivna källor och inte kvalitetssäkrade. Läsaren ska kontrollera mot källan. Hämtdatum för alla webbkällor: 2026-11-12. Hör ihop med [Analys_resurser_261112.md](Analys_resurser_261112.md).

## 1. Frågan

Går det åt vatten när man ställer en fråga till en AI-tjänst? Cirkulerar vattnet bara i en sluten krets (och kostar då el för pumpar och kylning), eller försvinner det? Och vad blir det per fråga och per arbetspass? Frågan är viktig för många i miljörörelsen, och svaret beror på vad man räknar med.

## Kort version (steg 1 på sidan)

*Vatten och AI, kort och faktamässigt:* Vatten kan förbrukas vid ett datacenter, men hur mycket beror på hur anläggningen kyls. Med avdunstningskylning försvinner vattnet ut i luften. Med slutna kretsar cirkulerar det, mot lite mer el. En vanlig textfråga motsvarar bråkdelar av en milliliter vid datacentret (cirka 0,06–0,3 ml enligt Microsoft, Google och OpenAI), och cirka 1 ml om man räknar med vattnet som förbrukas när elen produceras (USA:s elmix). Per arbetspass med 200 frågor blir det mellan ungefär en matsked och ett vattenglas. Totalt växer vattenanvändningen: USA:s datacenter förbrukade cirka 66 miljarder liter direkt 2023. Siffrorna är bolagens egna eller beräkningar, och är osäkra. Svenska siffror för elens vatten saknas. Fullständig analys: avsnitt 3–7 nedan.

Avsnitt 3–7 är steg 2: den fullständiga analysen, dit läsaren klickar vidare på sidan.

## 2. Kort svar (arbetsversion)

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

**Varför Li m.fl. ger så mycket högre värden än Google.** Li m.fl. beräknar för GPT-3 (en äldre modell) i amerikanska anläggningar och räknar både vattnet på plats och vattnet vid elproduktionen: i en tabellrad cirka 16,9 ml per svar, varav 2,2 ml på plats och 14,7 ml vid elproduktionen, och cirka 500 ml för 10–50 medelstora svar. Googles 0,26 ml gäller en modern median-fråga och bara vatten som förbrukas för kylning. Siffrorna är alltså inte motsägelser utan mäter olika modeller och olika systemgränser. Li m.fl. projicerar också att global AI-efterfrågan kan stå för 4,2–6,6 miljarder kubikmeter vattenuttag 2027 (uttag, inte förbrukning, deras egen uppskattning i artikelns abstract).

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

## 4. Uttag, förbrukning och temperatur: att jämföra med kärnkraft

Tre begrepp måste hållas isär, annars blir frågan "går det åt vatten?" omöjlig att besvara:

- **Uttag** (withdrawal): hur mycket vatten som pumpas in från en sjö, ett hav eller en ledning.
- **Förbrukning** (consumption): den del som inte kommer tillbaka till samma vattendrag, i praktiken det som avdunstar. LBNL definierar förbrukning som vatten som "permanent tas bort från den omedelbara vattencykeln" genom avdunstning eller andra irreversibla processer (Shehabi m.fl., 2024, s. 56).
- **Temperaturpåverkan:** vattnet kan komma tillbaka i mängd men varmare.

**Kärnkraftsverket som exempel.** Svenska kärnkraftverk ligger vid kusten och kyls med havsvatten som pumpas in, passerar anläggningen en gång och släpps ut varmare (genomströmningskylning). USGS:s modellering för amerikanska kraftverk 2015 ger för kärnkraft med genomströmning i sötvatten ett uttag på 39 gallon per kWh och en förbrukning på 0,41 gallon per kWh, alltså cirka 1 % (USGS, 2019, tabell 8 och 9). Förbrukningen är den påtvingade avdunstningen från vattendraget som tar emot det uppvärmda vattnet. USGS har inte modellerat förbrukning för genomströmning med saltvatten, vilket är det som gäller kustkärnkraft, så siffran är en indikation och inte ett svenskt värde. Din tanke stämmer alltså på volymen: vattnet "går inte åt" i den meningen att det kommer tillbaka.

Men "det har bara värmts upp" är inte hela bilden:
- Uppvärmt vatten påverkar ekosystemet. Vid Forsmark gynnas vissa arter och strömmingen leker mer i det uppvärmda området, enligt SLU:s recipientkontroll (sökresultat, ej öppnad).
- Intaget av havsvatten drar med sig organismer. Energiforsk anger fiskförluster vid silstationerna, och enligt ett sökresultat omkommer över tusen exemplar av den rödlistade europeiska ålen per år vid silstationerna (inte kontrollerat mot originalrapporten).
- Vattnets *kvalitet* i betydelsen renhet försämras inte av värmen i sig, men syrehalt, arter och biologi kan påverkas.

**Samma fysik i ett datacenter, men olika teknik.** Värmen måste ut ur anläggningen, och det finns i grunden tre vägar:

Tabell 3. Kylmetoder och vattnets öde

| Nr | Kylmetod | Vad händer med vattnet | Vad kostar det | Säkerhet i underlaget |
|---|---|---|---|---|
| 1 | Genomströmning (som kustkärnkraft) | Tas ut och släpps tillbaka varmare, liten förbrukning | Temperatur- och intagspåverkan på vattendraget | Kontrollerat för kraftverk (USGS). För datacenter har jag inget belägg i det här underlaget |
| 2 | Kyltorn med avdunstning | Avdunstar. Förbrukning, cirka 71 % av uttaget för kärnkraft med kyltorn (USGS) | Lite el. Förbrukar vatten lokalt | Kontrollerat för kraftverk (USGS), och för datacenter enligt Google och LBNL |
| 3 | Slutna kretsar (chipkylning, luftkylare) | Cirkulerar. Fylls en gång | Mer el till kylmaskiner och pumpar, enligt Microsoft "nominellt" mer | Tillverkarens egen uppgift (Microsoft) |

Jämförelsen med kärnkraft stämmer alltså för rad 1 (men det är inte hur de flesta datacenter kyls, så vitt jag hittat) och för rad 2 (där kraftverk med kyltorn förbrukar vatten på samma sätt). Googles 0,26 ml per fråga avser vatten som förbrukas, alltså rad 2.

**Slutsats för sidan:** tala inte om vatten som "går åt" eller inte. Skriv i stället att det beror på kylmetoden, och skilj på *uttag*, *förbrukning* (avdunstning) och *temperaturpåverkan*.

## 5. Per fråga och per arbetspass

Per arbetspass finns ingen mätning. Räkna antal frågor × vatten per fråga. Räknat med en vanlig fråga och två olika systemgränser:

Tabell 2. Vatten per arbetspass (egen räkning, illustration)

| Nr | Systemgräns | Per fråga | 200 frågor | 2 000 frågor (tio gånger tyngre pass eller flera pass) |
|---|---|---|---|---|
| 1 | Bara datacentret, lägre värde (Microsoft 2025, 0,27 L/kWh) | cirka 0,06 ml | cirka 13 ml | cirka 130 ml |
| 2 | Bara datacentret, Googles uppgift | 0,26 ml | 52 ml | 520 ml |
| 3 | Datacentret plus elens vatten (USA:s elmix, 4,52 L/kWh + 0,36 L/kWh) | cirka 1,2 ml | cirka 230 ml | cirka 2,3 liter |

Jämförelse: ett vattenglas är 2 dl. Rad 3 för 200 frågor motsvarar alltså ungefär ett vattenglas, men siffran bygger på amerikansk elmix och bör inte överföras till Sverige. De tunga passen (2 000 frågor) är ett scenario, inte en mätning.

## 6. Vad som är rimligt att säga på sidan

**Rimligt:**
- Vatten kan förbrukas vid ett datacenter, men hur mycket beror starkt på kylmetod och plats.
- Moderna anläggningar går mot slutna system som inte förångar vatten, på bekostnad av lite mer el (enligt tillverkarens egen redovisning).
- Per fråga är vattnet litet (bråkdelar av en tesked till några droppar), men totalen växer: USA:s datacenter förbrukade cirka 66 miljarder liter direkt 2023, och uppskattningen för 2028 är 60–124 miljarder liter för storskaliga datacenter.
- Den största delen av vattnet kan finnas *utanför* datacentret, i elproduktionen. Då spelar elmixen roll.

**Inte rimligt:**
- Att AI "inte använder något vatten" (slutna system finns men är inte hela flottan, och elen har ett eget vattenavtryck).
- Att en fråga "förbrukar en flaska vatten". Vår genomgång visar bråkdelar av en milliliter direkt (cirka 0,06–0,3 ml) och cirka 1 ml med indirekt vatten, inte 500 ml.
- Att siffrorna är mätta och granskade. Bolagens uppgifter är egna och Altmans saknar metod.

## 7. Det som återstår att verifiera

Samlat i [Forbattringar_261112.md](Forbattringar_261112.md) med nummer. Vattenrelaterat: F-03 (svenska datacenters vatten), F-04 (oberoende källa om slutna system), F-08 (indirekt vatten för svensk el), F-09 (Googles totala vatten), F-10 (Jegham), F-16 (Microsofts originalsidor), F-22 och F-23 (kylmetoder för datacenter).

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Altman, S. (2025) 'The gentle singularity'. https://blog.samaltman.com/the-gentle-singularity *(OpenAI-chefens uppgift om 0,34 Wh och 0,000085 gallon per genomsnittlig fråga. Läst i originalet. Metod redovisas inte.)*
- Energiforsk (2012) *Fiskförluster i svenska kärnkraftverk: en sammanställning av kunskapsläget*, Elforsk rapport 2012:50. https://energiforsk.se/media/19882/fiskforluster-i-svenska-karnkraftverk-en-sammanstallning-av-kunskapslaget-elforskrapporter-2012-50.pdf *(Intag av organismer vid kärnkraftverkens silstationer. Hittad i sökresultat, inte öppnad.)*
- Jegham, N. m.fl. (2025) 'How hungry is AI? Benchmarking energy, water, and carbon footprint of LLM inference'. arXiv:2505.09598. https://arxiv.org/abs/2505.09598 *(Jämförande mätning av 30 modeller. Endast sammanfattningen läst.)*
- Li, P., Yang, J., Islam, M. A. & Ren, S. (2025) 'Making AI less "thirsty": uncovering and addressing the secret water footprint of AI models'. arXiv:2304.03271. https://arxiv.org/abs/2304.03271 *(Metod och siffror för vattenavtryck, GPT-3 i amerikanska anläggningar. Artikeln hämtad och relevanta delar lästa 2026-11-12.)*
- Microsoft (Priest, J. & Solomon, S.) (2026) 'Inside Microsoft's two-decade push to cut water intensity while scaling for growth', 24 juni 2026. https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/ *(Microsofts WUE 0,27 L/kWh 2025 och andel låg- till nollvattenkylning. Läst via genomgång, inte direkt.)*
- Microsoft (Solomon, S.) (2024) 'Sustainable by design: next-generation datacenters consume zero water for cooling', 9 december 2024. https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/ *(Beskrivning av den slutna kretsen och energikonsekvensen. Läst via genomgång, inte direkt.)*
- Shehabi, A. m.fl. (2024) *2024 United States Data Center Energy Usage Report*, LBNL-2001637, Lawrence Berkeley National Laboratory, december 2024. https://eta-publications.lbl.gov/sites/default/files/2024-12/us_data_center_energy_usage_report_lbnl-2001637.pdf *(Direkt och indirekt vattenanvändning i USA:s datacenter. Delar läst. Utgiven 2024-12-19, DOI 10.71468/P1WC7Q, https://escholarship.org/uc/item/32d6m0d1. PDF-kopian jag läste är märkt som embargo, men utgivningen är bekräftad.)*
- USGS (2019) *Withdrawal and consumption of water by thermoelectric power plants in the United States, 2015*, Scientific Investigations Report 2019–5103. https://pubs.usgs.gov/sir/2019/5103/sir20195103.pdf *(Skillnaden mellan uttag och förbrukning vid genomströmning och kyltorn, med koefficienter för 2015.)*
- Vahdat, A. & Dean, J. (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Googles uppgift om 0,26 ml vatten per textfråga. Ej verifierad av tredje part.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
