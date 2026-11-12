# Analys: energi, vatten och bilder (underlag till sidan)

**Version:** 0.2 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Ändringar i 0.2:** nytt avsnitt 6 (komprimerad version med liknelser) och 7 (Sverige och världen). Databasidén är nu avsnitt 8 och det som återstår är avsnitt 9.
**Status:** arbetsunderlag. Siffrorna är hämtade ur angivna källor och inte kvalitetssäkrade. Läsaren ska kontrollera mot källan. Hämtdatum för alla webbkällor: 2026-11-12.

## 1. Frågan

Många i miljörörelsen är skeptiska till AI, och många reagerar direkt på AI-genererade bilder. Ett vanligt skäl är att AI förbrukar mycket energi och vatten, per fråga, per svar, per bild. Frågan här är vad som är känt, hur säkert det är, och vad det betyder för en förenings regler. Utgångspunkten är att skeptikernas oro tas på allvar.

## 2. Vad källorna säger

Tabell 1. Uppmätta eller beräknade siffror per användning

| Nr | Uppgift | Siffra | Vem har tagit fram den | Hur säker är den |
|---|---|---|---|---|
| 1 | Energi, en vanlig textfråga till Gemini | 0,24 Wh (median), 0,03 g koldioxidekvivalenter, 0,26 ml vatten ("ungefär fem droppar") | Google (Vahdat & Dean, 2025) | Egen mätning i driftmiljö. Google skriver själva att uppgifterna inte är verifierade av tredje part. Narrare mätmetod (bara aktiva chip) ger lägre värden |
| 2 | Energi, en vanlig textfråga till ChatGPT (GPT-4o) | cirka 0,3 Wh | Epoch AI (You, 2025) | Beräkning med tydliga antaganden, inte mätning. Utesluter bilder och långa "resonerande" svar |
| 3 | Energi, bildgenerering | i en studie ungefär 2,9 kWh per 1 000 bilder i genomsnitt (cirka 2,9 Wh per bild), mycket stor spridning mellan modeller | Luccioni, Jernite & Strubell (2024) | Den ursprungliga artikeln har jag bara läst som sammanfattning (abstract). Siffran kommer från andrahandsreferat, och en diskussion om samma modell visar att värdet beror på bildstorlek och inställningar. Kontrolleras mot artikeltexten |
| 4 | Vatten, per svar | Källorna skiljer sig mycket (från bråkdelar av en milliliter till tiotals milliliter), beroende på om man räknar vattnet vid datacentret eller också vid elproduktionen | Google (se 1), Li m.fl. (2025) | Osäker. Skillnaden beror mest på var gränsen dras |
| 5 | Datacentrens elanvändning i världen | cirka 415 TWh år 2024, cirka 1,5 % av världens elanvändning, ökning cirka 12 % per år de senaste fem åren | Internationella energiorganet (IEA, 2025) | Etablerad källa. Gäller datacenter totalt, inte bara AI |

Tolkning av 5: IEA beskriver datacenter totalt. De skriver att andelen är liten globalt men mycket större på vissa orter. Det är skillnaden mellan *per fråga* och *sammanlagt* som gör att båda sidor kan ha delvis rätt.

## 3. Vad som är rimligt att säga (och inte)

**Rimligt, och stöds av källorna:**
- En vanlig textfråga använder enligt två uppskattningar (Googles egen mätning och Epoch AI:s beräkning för ChatGPT) i storleksordningen tiondels till tredjedels wattimme. Det är mycket mindre än de äldre och ofta citerade siffrorna (cirka 3 Wh) som Epoch AI räknar om.
- Bilder är betydligt dyrare än text. Hur mycket varierar kraftigt mellan modeller. Räkna med storleksordningen tiotals gånger mer, men det är inte ett fast tal.
- Totalt växer datacentrens elanvändning snabbt, och lokalt kan effekten vara stor. Därför är en skeptikers oro inte ogrundad även när en enskild fråga är liten.
- Siffrorna ändras snabbt: Google redovisar att energin per fråga sjönk 33 gånger under ett år. Därför behöver sidan datum och versionsnummer, och därför är en databaskoppling intressant (se 6).

**Inte rimligt att påstå (utan bättre belägg):**
- Att en fråga "förbrukar en flaska vatten". Det är en äldre och omstridd siffra som beror på hur vattnet räknas.
- Att AI "inte spelar någon roll". Totalen är inte försumbar och växer.
- Att en förening "inte bör" använda AI av miljöskäl enbart, eller att den "kan" använda den utan hänsyn. Den slutsatsen är en värdering, inte ett fynd.

## 4. Bilder: fler skäl än energi

Skeptiska reaktioner på AI-bilder handlar sällan bara om energi. Förslag att pröva (är en hypotes, inte kontrollerad):

1. **Resurser:** bilder är dyrare än text (se tabell 1, rad 3).
2. **Trovärdighet och äkthet:** i en organisation som ska stå för verkligheten kan en bild som ser verklig ut men inte är det underminera förtroendet. Rikskansliets egen erfarenhet (Instagram) handlar om detta.
3. **Konstnärer och fotografer:** frågan om vems bilder modellerna tränats på.
4. **Utseende:** AI-bilder känns igen ("det syns"), och det väcker negativa reaktioner av sig självt.
5. **Misstag:** kritik även när bilden inte är AI (rikskansliets erfarenhet) visar att misstron redan finns och att den kan drabba föreningen oavsett.

Skillnaden mellan skäl 1 och 2–5 är viktig i en riktlinje: även om energin per bild vore mycket liten skulle skälen 2–5 finnas kvar. Omvänt, om en bild var mycket dyr men gick att motivera, skulle en annan avvägning kunna göras. Därför bör riktlinjen separera *resursfråga* och *förtroendefråga*.

## 5. Förslag till konsekvenser för riktlinjerna

- Bilder i externt material: avstå som huvudregel (följer rikskansliets rekommendation), med skälen 1–5 öppet redovisade.
- Text: tillåtet med mänsklig granskning. Miljöskälet är liten per fråga men inte noll, och användningen bör vara motiverad.
- Intern användning (skisser, utkast som inte publiceras): fri men med medvetenhet om kostnaden.
- Resonerande modeller och långa uppgifter använder mer än en enkel fråga (Epoch AI nämner detta, men siffran saknas i mina källor).

## 6. Komprimerad version för sidan: liknelser

Sidan ska visa resursanvändningen i vardagsmått. Alla liknelser bygger på siffrorna i tabell 1 och på en uttalad antagen effekt för mikrovågsugnen.

**Antagande om mikrovågsugnen.** En vanlig mikrovågsugn drar vi kallt räknat 1 000 W ur eluttaget. Svenska jämförelsesajter anger 600–1 200 W (Pricerunner) respektive 500–900 W som vanligaste effekt (Testra), så 1 000 W är ett antagande i mitten, inte ett mätvärde. Effekten är en inställbar parameter på sidan (se avsnitt 8). Formeln är: sekunder = Wh × 3 600 ÷ watt.

Tabell 2. Energi uttryckt som tid i mikrovågsugn (1 000 W)

| Nr | Vad | Energi | Motsvarar | Säkerhet |
|---|---|---|---|---|
| 1 | En vanlig textfråga (Googles median) | 0,24 Wh | cirka 0,9 sekunder | Googles egen mätning, ej tredjepartsgranskad |
| 2 | En vanlig textfråga (Epoch AI, ChatGPT) | 0,3 Wh | cirka 1 sekund | Beräkning med tydliga antaganden |
| 3 | En bild (Luccioni m.fl., genomsnitt) | cirka 2,9 Wh | cirka 10 sekunder | Osäker: stor spridning mellan modeller och inställningar, ej kontrollerad mot tabellerna |
| 4 | Ett arbetspass med 200 textfrågor (scenario) | 200 × 0,24 = 48 Wh | cirka 3 minuter | Illustration, inte mätning |
| 5 | Samma pass om varje fråga kostar tio gånger mer (långa samtal, många verktygsanrop) | 480 Wh | cirka 29 minuter | Illustration, inte mätning |

**En produkt som den här sidan.** Hur mycket energi det går åt att ta fram en sådan produkt tillsammans med AI går inte att svara på med en verifierad siffra. Ingen leverantör redovisar energin per arbetspass, och arbete där AI läser filer, söker och skriver i många steg använder mer än en enkel chattfråga. Det ärliga svaret på sidan är ett spann med uttalade antaganden: rad 4 och 5 ovan, med antalet frågor som en inställbar siffra. Med antagandena hamnar det mellan några minuter och en halvtimme i en mikrovågsugn. Det är en storleksordning, inte ett mätvärde.

Tabell 3. Vatten i vardagsmått (Googles uppgift, 0,26 ml per textfråga)

| Nr | Vad | Vatten | Motsvarar |
|---|---|---|---|
| 1 | En vanlig textfråga | 0,26 ml | ungefär fem droppar (Googles egen jämförelse) |
| 2 | 200 frågor | 52 ml | drygt fem centiliter |
| 3 | Ett vattenglas (2 dl) | 200 ml | cirka 770 textfrågor |

Rad 2 och 3 är enkel räkning på Googles siffra. Siffran gäller *vatten som förbrukas för kylning vid datacentret*. Andra beräkningar, som även räknar vattnet vid elproduktionen, ger mycket högre värden (se tabell 1, rad 4).

**Cirkulerar vattnet i anläggningen?** Delvis, och det beror på kylmetoden:

- *Förångningskylning* (avdunstning) förbrukar vatten: det försvinner ut i luften och kommer inte tillbaka. Googles 0,26 ml avser vatten som datacenter förbrukar för kylning.
- *Slutna kylkretsar* återanvänder samma vatten. Då behövs bara en första fyllning, men anläggningen kan behöva mer el, eftersom kylningen blir mindre effektiv. Det är en avvägning mellan vatten och energi. Uppgifterna jag hittat om slutna system kommer mest från leverantörer och sammanställningar (sökresultat, inte öppnade i original), och långtidsdata för de nyaste systemen är begränsad. Energimyndighetens rapport från 2023 nämner vätskekylning och att vattenanvändning bör följas upp, men anger inga siffror.
- Slutsats för sidan: "cirkulerar" är sant för en del anläggningar men inte för alla. Skriv inte att AI "inte förbrukar något vatten" och inte att den "dricker upp" vattnet. Skriv att det beror på kylmetod och plats.

## 7. Sverige och världen

Platsen påverkar främst *koldioxiden* per fråga (elens ursprung), mindre energin per fråga, som är ungefär densamma eftersom maskinerna är likartade.

Tabell 4. Elens klimatpåverkan och datacenter, Sverige och världen

| Nr | Uppgift | Sverige/Norden | Världen | Källa och säkerhet |
|---|---|---|---|---|
| 1 | Klimatpåverkan per kWh el | 59 g CO2e/kWh (nordiska elmixen, snitt 2021–2023, med direkta och indirekta utsläpp, import och export) | 473 g CO2/kWh (global elmix 2024, nedgång från 484 år 2023) | Naturvårdsverket (2026), Ember (2025). Måtten är inte helt jämförbara (olika avgränsningar). Ember-siffran har jag sett i ett sökresultat, inte öppnat i originalet |
| 2 | Datacenters elanvändning | cirka 2,8–3,2 TWh 2022, uppskattat 4,0–4,4 TWh 2025 och 4,4–5,2 TWh 2030. Rapporten räknar även en mycket högre variant (22 TWh 2030) med snabbare tillväxttakt | cirka 415 TWh 2024, cirka 1,5 % av världens el | Energimyndigheten (2023), IEA (2025). Svenska siffran är en uppskattning av RISE, inte en mätning |
| 3 | Datacenter som andel av elanvändningen | cirka 2 % (3,0 TWh av cirka 135 TWh totalt, en grov jämförelse mellan olika år) | cirka 1,5 % | Egen räkning. Totalen 135–136 TWh kommer från Energiföretagen/Ekonomifakta via sökresultat och är inte kontrollerad mot Energimyndigheten |
| 4 | Vatten för datacenterkylning | inga svenska siffror hittade | stora skillnader, beror på kylmetod | Hittar vi inga, skriver vi det på sidan |

Illustration (egen räkning, enkel multiplikation): en vanlig textfråga på 0,24 Wh motsvarar med 59 g/kWh cirka 0,014 g koldioxid och med 473 g/kWh cirka 0,11 g. Googles egen siffra är 0,03 g, enligt deras egen redovisning av sin elmix. Skillnaden visar att *var* frågan körs spelar roll för klimatpåverkan, men det är en liten mängd i båda fallen. Användaren vet sällan var tjänsten körs, så sidan bör visa båda och förklara varför.

**Vad som skiljer Sverige:** hög andel fossilfri el ger låg koldioxid per fråga, men datacenter byggs ut snabbt och elen behövs även för industri och transporter. Det är en avvägning snarare än ett problem som löst sig.

## 8. Databaskoppling (idé)

Siffrorna ändras, så sidan bör kunna hämta aktuella värden. Förslag (att pröva):
- En enkel datafil (JSON) i repot med varje siffra, källa, hämtdatum och version. Sidan läser filen.
- Vid behov senare: en riktig databas eller ett schemalagt skript som kontrollerar om källorna ändrats.
- Börja med JSON-filen. Databas behövs först när siffrorna ska uppdateras automatiskt.

## 9. Det som återstår att verifiera

- Luccioni m.fl. (2024): kontrollera siffrorna mot artikelns tabell (jag har läst abstract, inte tabellerna).
- Vatten: Li m.fl. (2025) har tydliga siffror per svar, jag har bara läst abstract. Hämta och läs metoden.
- Jämförelser med andra vardagsvanor (strömning, resor, bilkörning): inte gjort. Mikrovågsugn är vald, och effekten (1 000 W) är ett antagande som bör kontrolleras mot energideklarationer eller Energimyndigheten.
- Jämförelse mellan text och bild i nyare mätningar.
- Ember (2025): öppna originalet och bekräfta 473 g/kWh för 2024.
- Total svensk elanvändning: bekräfta mot Energimyndigheten (energiläget).
- Datacenters vattenanvändning i Sverige: ingen siffra funnen. Sök vidare.
- Slutna kylsystem: hitta en oberoende källa (inte leverantör) om vatten kontra el.
- Energimyndighetens scenariostudie om elanvändning till 2030 (datacenter som tillkommande användare): bara sett i sökresultat. Öppna originalet.
- Naturskyddsföreningens egna uttalanden om AI: hittade inget i en första sökning. Kontrollera på deras webbplats.

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Ember (2025) *Global Electricity Review 2025*. https://ember-energy.org/latest-insights/global-electricity-review-2025/global-electricity-trends/ *(Global elmix 2024: 473 g CO2/kWh. Uppgiften är hämtad ur ett sökresultat och bör bekräftas i originalet.)*
- Energimyndigheten (2023) *Energianvändning i datacenter och digitala system*, rapport av RISE (kontaktperson Tor Björn Minde), daterad 2023-01-05, publicerad 2023-02-02. https://www.energimyndigheten.se/492f27/contentassets/054d98cfdcd54cb5a802e24b53779452/energianvandning-i-datacenter-och-digitala-system.pdf *(Svenska datacenters elanvändning 2022 och prognos till 2030. Hämtad, delarna som citeras är lästa.)*
- Google (Vahdat, A. & Dean, J.) (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Googles egna mätningar per textfråga: 0,24 Wh, 0,03 g CO2e, 0,26 ml vatten. Google skriver att uppgifterna inte är verifierade av tredje part.)*
- Internationella energiorganet (IEA) (2025) *Energy and AI*, sammanfattning. https://www.iea.org/reports/energy-and-ai/executive-summary *(Datacentrens elanvändning i världen, 415 TWh 2024.)*
- Li, P., Yang, J., Islam, M. A. & Ren, S. (2025) 'Making AI less "thirsty": uncovering and addressing the secret water footprint of AI models'. arXiv:2304.03271. https://arxiv.org/abs/2304.03271 *(Metod för att räkna vattenavtryck. Abstract läst, resten inte.)*
- Luccioni, A. S., Jernite, Y. & Strubell, E. (2024) 'Power hungry processing: watts driving the cost of AI deployment?'. arXiv:2311.16863. https://arxiv.org/abs/2311.16863 *(Mätning av energi per 1 000 användningar, bildgenerering dyrast. Abstract läst, tabellerna inte.)*
- Naturvårdsverket (2026) *Klimatklivet: värden för att beräkna utsläppsminskning*, 2026-03-25. https://www.naturvardsverket.se/495f5e/globalassets/amnen/klimatomstallning/klimatklivet/dokument/klimatklivet-varden-for-att-berakna-utslappsminskning.pdf *(Utsläppsfaktor 59 g CO2e/kWh för el, baserad på nordisk elmix 2021–2023. Hämtad och läst.)*
- You, J. (2025) 'How much energy does ChatGPT use?', Epoch AI, Gradient Updates, 7 februari 2025. https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use *(Räknar om den äldre siffran 3 Wh till cirka 0,3 Wh per fråga.)*

Uppgifter om mikrovågsugnars effekt: Pricerunner (spartips för energisnåla hushållsapparater) och Testra (mikrovågsugn bäst i test 2026), som jämförelsesajter, inte som auktoritativ källa. Uppgifterna om slutna kylsystem och om svensk elanvändning (Ekonomifakta, Energiföretagen) är hämtade ur sökresultat och bör kontrolleras mot originalen innan de publiceras.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
