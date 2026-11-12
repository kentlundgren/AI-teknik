# Analys: vad menar vi med "en fråga", och hur använder man AI på bästa sätt?

**Version:** 0.1 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** arbetsunderlag. Siffrorna är hämtade ur angivna källor eller är egna uppskattningar som är märkta som sådana. De är inte kvalitetssäkrade. Läsaren ska kontrollera mot källan. Hämtdatum: 2026-11-12. Hör ihop med [Analys_resurser_261112.md](Analys_resurser_261112.md).

## 1. Frågan

Nyckeltalet "energi per fråga" används överallt, men vad är en genomsnittlig fråga och ett genomsnittligt svar? Och är "en fråga, ett svar" ens det bästa sättet att använda generativ AI? Det vore rimligt att utförliga arbeten, som en hel produkt, ger mer nytta än en enskild fråga även om de kräver mer resurser. Här prövar vi det resonemanget och räknar på den här sessionen.

## 2. Vad en "fråga" är i källorna

Tabell 1. Hur källorna definierar en fråga

| Nr | Källa | Vad som mäts | Vad som anges om längd |
|---|---|---|---|
| 1 | Epoch AI (You, 2025) | En typisk ChatGPT-fråga (GPT-4o), beräknad | Svar på cirka 500 tokens (cirka 400 ord, ungefär en maskinskriven sida). Epoch kallar det "något pessimistiskt": en annan studie fann i snitt 261 tokens. Kort inmatad fråga. Bilder och röstläge ingår inte |
| 2 | Google (Vahdat & Dean, 2025) | Median-textfråga till Gemini Apps, mätt i drift | Längden i tokens anges inte i artikelns abstract. Hela artikeln är inte läst |
| 3 | OpenAI (Altman, 2025) | "Genomsnittlig fråga" | Ingen definition |
| 4 | Luccioni m.fl. (2024) | 1 000 användningar per uppgift och modell på en referensdatamängd | Uppgiftstyp snarare än fråga (till exempel textgenerering, bildgenerering) |

Tolkning: "en fråga" är i praktiken **en kort, manuellt skriven fråga och ett svar på ungefär en sida text**, inget mer. Det är det vi menar med 0,24–0,3 Wh i resten av underlaget.

**Längre indata kostar mer.** Epoch AI uppskattar att en fråga med 10 000 tokens indata (en kort artikel) kostar cirka 2,5 Wh, och en med 100 000 tokens indata (cirka 200 sidor) nästan 40 Wh. Det är beräkningar för GPT-4o på särskilda chip, och verkliga siffror beror på hur systemen cachar. Men riktningen är tydlig: att läsa mycket material kostar mer än att svara kort.

**Token** är den enhet en språkmodell räknar i. För OpenAI motsvarar en token i genomsnitt cirka 0,75 ord (Epoch AI, 2025). Måttet är därför ungefär, och olika modeller räknar olika.

## 3. Olika sätt att använda AI

Tabell 2. Tre nivåer av användning

| Nr | Nivå | Exempel | Storleksordning på användningen |
|---|---|---|---|
| 1 | Enkel fråga och svar | "Vad är El Niño?" | En fråga enligt tabell 1, cirka 0,24–0,3 Wh |
| 2 | Längre samtal | Ett utkast som förbättras i tio rundor | Tiotals frågor, och längre indata efterhand som samtalet växer |
| 3 | Arbete med många steg | En hel produkt: sökning, läsning av källor, filer som skrivs och granskas, kontroller | Många modellanrop med stor mängd indata i varje, se avsnitt 4 |

Nivå 3 använder mycket mer resurser än nivå 1, men den ersätter inte en fråga. Den ersätter ett arbete som annars tar en människa timmar eller dagar.

## 4. Den här sessionen i siffror

Sessionen har pågått i knappt två timmar. Det som är **uppmätt** (av verktyget som visar sessionens kontext) och det som är **uppskattat** av mig skiljs åt nedan.

Tabell 3. Sessionen: uppmätt och uppskattat

| Nr | Uppgift | Värde | Status |
|---|---|---|---|
| 1 | Kontextens storlek just nu | 330 408 tokens (varav meddelanden 264 750) | Uppmätt, 2026-11-12 |
| 2 | Antal modellanrop (verktygsrundor) hittills | cirka 70 | Min uppskattning |
| 3 | Genomsnittlig kontext per anrop | cirka 150 000–170 000 tokens | Beräkning ur rad 1 och 2 (kontexten växer från nästan noll) |
| 4 | Sammanlagt inläst indata | cirka 10–12 miljoner tokens, till största delen återläsning av samma kontext (cachad) | Beräkning, osäker |
| 5 | Producerad text (utdata) | i storleksordningen 50 000–100 000 tokens | Min grova uppskattning |

Jämfört med en enkel fråga (cirka 500 tokens svar och kort indata) är det i storleksordningen **hundra gånger mer utdata** och **tusentals gånger mer inläst indata**.

**Vad det betyder i energi.** Inga uppgifter finns för vad dessa anrop kostar i energi, och leverantörerna redovisar det inte per modell. Två saker går att räkna på, och de ger ett spann, inte ett svar. Beräkningen använder Epoch AI:s uppskattningar för en GPT-4o-fråga som en grov proxy:

Tabell 4. Sessionen uttryckt i energi, mikrovågsugn och "frågor" (scenarier, inte mätningar)

| Nr | Antagande per anrop | Energi per anrop | 70 anrop | I mikrovågsugn (1 000 W) | Motsvarar vanliga frågor (0,24 Wh) |
|---|---|---|---|---|---|
| 1 | Varje anrop är som en vanlig fråga (undre gräns) | 0,3 Wh | 21 Wh | cirka 75 sekunder | cirka 90 |
| 2 | Varje anrop läser cirka 10 000 tokens indata | cirka 2,5 Wh | 175 Wh | cirka 10 minuter | cirka 730 |
| 3 | Varje anrop läser cirka 100 000 tokens indata (övre gräns, utan hänsyn till cachning) | cirka 40 Wh | 2,8 kWh | cirka 2,8 timmar | cirka 11 700 |

Alltså: **mellan ungefär 100 och ungefär 10 000 vanliga frågor**, beroende på hur mycket av kontexten som faktiskt behöver beräknas om vid varje anrop. Cachning av den återlästa kontexten drar ned siffran mot den undre delen av spannet, men jag kan inte säga hur mycket. Spannet är bredare än skillnaden mellan olika modeller, och det är poängen: vi vet inte, och ska inte låtsas veta.

**Vatten i samma scenarier (direkt, vid datacentret).** Med 0,27–1,08 liter per kWh (Microsofts genomsnitt 2025 respektive Googles uppgift omräknad från 0,26 ml per 0,24 Wh) blir det cirka 6–23 ml i scenario 1, cirka 47–190 ml i scenario 2 och cirka 0,8–3 liter i scenario 3. Det är direkt vatten. Med amerikansk elmix kommer indirekt vatten på cirka 4,5 liter per kWh (Shehabi m.fl., 2024), alltså upp till cirka 13 liter i scenario 3.

## 5. Är det bättre att göra mer utförliga produkter?

Resonemanget, i steg, med vad som är belagt och vad som är en värdering:

1. **Resursanvändningen mäts bäst mot vad den ger.** Att jämföra en hel produkt med en enskild fråga är som att jämföra en bilresa med ett steg. Frågan är vad produkten ersätter och vad den åstadkommer.
2. **Utförligt arbete gör sådant möjligt som en enkel fråga inte kan.** Det som tar flera källor, kontroller och versioner går inte att göra i ett enda svar. Det är en beskrivning av arbetet, inte en uppmätt nytta.
3. **Ett arbete som ersätter människotid sparar också resurser.** Människans arbete drar el (dator, belysning, resor), men jag har ingen källa för att jämföra och lägger inte in en siffra.
4. **Det är inte automatiskt bra att använda mer.** Där användningen är som störst samlas också resursanvändningen, vilket är skeptikernas poäng. Argumentet håller bara om arbetet verkligen ger nytta som motsvarar kostnaden, och om arbetet är väl planerat så att det inte görs om i onödan.
5. **Planering sparar resurser.** En kort specifikation i förväg minskar antalet varv och därmed antalet anrop. Det är ett konkret skäl att planera skriftligt före bygget.
6. **Det som saknas är belägg för nyttan.** Forskningen om hur mycket AI-stöd faktiskt sparar i arbetet är, så vitt jag vet, blandad, men jag har inte hämtat några källor än (F-24). Sidan ska därför inte påstå en siffra för nyttan, bara redovisa resonemanget och att det är en värdering.

**Slutsats för sidan:** säg att enkla frågor är den billigaste användningen och att utförliga arbeten kan vara mer värda trots att de kostar mer, men att det är något man ska väga i varje fall. Visa resurserna öppet och med osäkerheten, i stället för att gömma dem eller förstora dem.

## 6. Det som återstår

Se [Forbattringar_261112.md](Forbattringar_261112.md): F-24 (belägg för nytta och produktivitet), F-25 (energi per token och per modellanrop för agentarbete, hur cachning påverkar), F-26 (Googles definition av median-prompten i hela artikeln), F-27 (antalet anrop i den här sessionen: räkna exakt i stället för att uppskatta), F-28 (jämförelse med människans resursanvändning för motsvarande arbete).

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Altman, S. (2025) 'The gentle singularity'. https://blog.samaltman.com/the-gentle-singularity *(Genomsnittlig ChatGPT-fråga, 0,34 Wh. Ingen definition av "genomsnittlig". Läst i originalet.)*
- Luccioni, A. S., Jernite, Y. & Strubell, E. (2024) 'Power hungry processing: watts driving the cost of AI deployment?'. arXiv:2311.16863. https://arxiv.org/abs/2311.16863 *(Mätning per 1 000 användningar och uppgiftstyp. Hela artikeln hämtad.)*
- Shehabi, A. m.fl. (2024) *2024 United States Data Center Energy Usage Report*, LBNL-2001637. https://escholarship.org/uc/item/32d6m0d1 *(Indirekt vatten, 4,52 liter per kWh. Läst.)*
- Vahdat, A. & Dean, J. (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Median-textfråga, 0,24 Wh. Hela den tillhörande artikeln, arXiv:2508.15734, är inte läst; endast abstract.)*
- You, J. (2025) 'How much energy does ChatGPT use?', Epoch AI, Gradient Updates, 7 februari 2025. https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use *(Definition av en typisk fråga (500 tokens), 0,3 Wh, och uppskattningar för långa indata, cirka 2,5 respektive 40 Wh. Läst i originalet, beräkningar för GPT-4o.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
