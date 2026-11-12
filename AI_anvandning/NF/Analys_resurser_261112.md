# Analys: energi, vatten och bilder (underlag till sidan)

**Version:** 0.1 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
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

## 6. Databaskoppling (idé)

Siffrorna ändras, så sidan bör kunna hämta aktuella värden. Förslag (att pröva):
- En enkel datafil (JSON) i repot med varje siffra, källa, hämtdatum och version. Sidan läser filen.
- Vid behov senare: en riktig databas eller ett schemalagt skript som kontrollerar om källorna ändrats.
- Börja med JSON-filen. Databas behövs först när siffrorna ska uppdateras automatiskt.

## 7. Det som återstår att verifiera

- Luccioni m.fl. (2024): kontrollera siffrorna mot artikelns tabell (jag har läst abstract, inte tabellerna).
- Vatten: Li m.fl. (2025) har tydliga siffror per svar, jag har bara läst abstract. Hämta och läs metoden.
- Jämförelser med vardagsvanor (strömning, resor): inte gjort, inga siffror ännu.
- Jämförelse mellan text och bild i nyare mätningar.
- Svenska förhållanden (elmix, vattenanvändning i datacenter).
- Naturskyddsföreningens egna uttalanden om AI: hittade inget i en första sökning. Kontrollera på deras webbplats.

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Google (Vahdat, A. & Dean, J.) (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Googles egna mätningar per textfråga: 0,24 Wh, 0,03 g CO2e, 0,26 ml vatten. Google skriver att uppgifterna inte är verifierade av tredje part.)*
- Internationella energiorganet (IEA) (2025) *Energy and AI*, sammanfattning. https://www.iea.org/reports/energy-and-ai/executive-summary *(Datacentrens elanvändning i världen, 415 TWh 2024.)*
- Li, P., Yang, J., Islam, M. A. & Ren, S. (2025) 'Making AI less "thirsty": uncovering and addressing the secret water footprint of AI models'. arXiv:2304.03271. https://arxiv.org/abs/2304.03271 *(Metod för att räkna vattenavtryck. Abstract läst, resten inte.)*
- Luccioni, A. S., Jernite, Y. & Strubell, E. (2024) 'Power hungry processing: watts driving the cost of AI deployment?'. arXiv:2311.16863. https://arxiv.org/abs/2311.16863 *(Mätning av energi per 1 000 användningar, bildgenerering dyrast. Abstract läst, tabellerna inte.)*
- You, J. (2025) 'How much energy does ChatGPT use?', Epoch AI, Gradient Updates, 7 februari 2025. https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use *(Räknar om den äldre siffran 3 Wh till cirka 0,3 Wh per fråga.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
