# Analys: vad menar vi med "en fråga", och hur använder man AI på bästa sätt?

**Version:** 0.3 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Ändringar i 0.3:** nytt avsnitt 7 om återlästa tokens: vad leverantörerna räknar och tar betalt för (Anthropic, OpenAI, Google), vad cachning sparar i energi och inte (KV-cachen, Cavagna m.fl., 2026), skillnader mellan modeller och ett tredje räknesätt för energin. Efterföljande avsnitt omnumrerade.
**Ändringar i 0.2:** X, Y och Z definierade som versionerade antaganden (avsnitt 4). Sessionens tokenanvändning uppmätt ur transkriptet (avsnitt 5) i stället för uppskattad. Energiscenarierna räknade om (avsnitt 6).
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
| 3 | Arbete med många steg | En hel produkt: sökning, läsning av källor, filer som skrivs och granskas, kontroller | Många modellanrop med stor mängd indata i varje, se avsnitt 5 |

Nivå 3 använder mycket mer resurser än nivå 1 (i den här sessionen cirka tusen gånger fler nya tokens än en normal fråga, se avsnitt 5), men den ersätter inte en fråga. Den ersätter ett arbete som annars tar en människa timmar eller dagar.

## 4. Definitioner: X, Y och Z

För att kunna jämföra och följa förändringar över tid definierar vi tre tal. De är **antaganden**, med version och källa, och ska kunna ändras när det finns nya källor, nya vanor eller nya modeller.

Tabell 3. Definitioner och antaganden (antagandeversion A1, 2026-11-12)

| Nr | Beteckning | Definition | Värde | Status och källa |
|---|---|---|---|---|
| 1 | X_in | Indata i en normal fråga: en kort, manuellt skriven fråga på cirka 75 ord | 100 tokens | Antagande. Omräkning ord till tokens: en token är cirka 0,75 ord (Epoch AI, 2025) |
| 2 | X_ut | Utdata i ett normalt svar: ungefär en sida text, cirka 400 ord | 500 tokens | Epoch AI (2025) antar 500 tokens. De påpekar att en annan studie fann 261 tokens i snitt |
| 3 | **X** | En normal fråga och ett normalt svar, utan tidigare samtal: X = X_in + X_ut | **600 tokens** | Beräkning ur rad 1 och 2 |
| 4 | Y_ny | Nya tokens i en session eller ett projekt: producerad text, ny indata och nya cachade tokens | uppmätt, se tabell 4 | Mätt ur sessionens transkript |
| 5 | Y_åter | Återlästa tokens: den tidigare kontexten som modellen läser om vid varje steg, ur cachen | uppmätt, se tabell 4 | Mätt ur sessionens transkript |
| 6 | **Z_ny** | Hur många gånger mer nya tokens sessionen använder än en normal fråga: Z_ny = Y_ny ÷ X | se tabell 5 | Beräkning |
| 7 | Z_ut | Samma för bara producerad text: Y_ut ÷ X_ut | se tabell 5 | Beräkning |
| 8 | Z_alla | Samma för alla bearbetade tokens, även återlästa | se tabell 5 | Beräkning. Ger ett högre tal, men återlästa tokens kostar mindre per styck än nya |

Varför flera Z? En enda "mängd tokens" blandar saker som kostar olika mycket. Nya tokens (Z_ny) är det som faktiskt skrivs och läses första gången. Återlästa tokens är samma kontext som läses om i varje steg. Därför redovisas tre tal, men **Z_ny är det vi lyfter fram** i huvudtexten.

**Obs:** en token är inte samma sak i alla modeller. Antagandena gäller "ungefär en token per tre fjärdedels ord" och bör ses som storleksordningar.

## 5. Den här sessionen: uppmätt

Jag har summerat tokenanvändningen ur sessionens egen transkriptfil med skriptet [summera_tokens.py](summera_tokens.py). Det är mätningar, inte uppskattningar. Mätningen är en ögonblicksbild: 2026-11-12 cirka kl. 13:14 (lokal tid), och siffrorna ökar medan sessionen fortsätter.

Tabell 4. Uppmätt tokenanvändning (huvudsession plus fyra delegerade underagenter)

| Nr | Uppgift | Huvudsession | Underagenter | Summa |
|---|---|---|---|---|
| 1 | Modellanrop | 82 | 11 | 93 |
| 2 | Producerade tokens (utdata) | 132 254 | 13 451 | 145 705 |
| 3 | Ny indata (ej cachad plus nya cachade) | 289 273 | 134 320 | 423 593 |
| 4 | **Y_ny** = rad 2 + rad 3 | 421 527 | 147 771 | **569 298** |
| 5 | **Y_åter** (återlästa ur cache) | 19 568 234 | 79 903 | **19 648 137** |
| 6 | Alla bearbetade (Y_ny + Y_åter) | 19 989 761 | 227 674 | 20 217 435 |

Tabell 5. Z: hur många gånger mer än en normal fråga och ett normalt svar (X = 600 tokens)

| Nr | Mått | Beräkning | Z |
|---|---|---|---|
| 1 | **Z_ny** | 569 298 ÷ 600 | **cirka 950** |
| 2 | Z_ut | 145 705 ÷ 500 | cirka 290 |
| 3 | Z_alla | 20 217 435 ÷ 600 | cirka 33 700 |

Alltså: **den här sessionen använder cirka tusen gånger fler nya tokens än en normal fråga och ett normalt svar** (Z_ny cirka 950), och cirka tre hundra gånger mer producerad text. Med hänsyn till all återläsning av kontexten blir talet cirka 34 000 (Z_alla), men det talet överdriver kostnaden, eftersom cachade tokens inte beräknas om från början.

**Förbehåll.** (a) Det är oklart om fältet för producerade tokens också räknar modellens interna resonemang (F-29). (b) Underagenterna räknas med eftersom de gjorde en del av arbetet. (c) Sessionen är inte slut.

## 6. Vad det betyder i energi (scenarier, inte mätningar)

Energin per token är inte offentlig för den här modellen. Två gränser går att räkna på, med Epoch AI:s och Googles uppskattningar per normal fråga (0,24–0,3 Wh) som proxy:

Tabell 6. Sessionen i energi (grov proxy)

| Nr | Antagande | Beräkning | Energi | I mikrovågsugn (1 000 W) | Direkt vatten (0,27–1,08 liter per kWh) |
|---|---|---|---|---|---|
| 1 | Undre gräns: energin följer nya tokens, återläsningen kostar inget | Z_ny × 0,24–0,3 Wh | cirka 230–285 Wh | cirka 14–17 minuter | cirka 60–310 ml |
| 2 | Övre gräns: varje återläst token kostar lika mycket som en ny | Z_alla × 0,24–0,3 Wh | cirka 8–10 kWh | cirka 8–10 timmar | cirka 2–11 liter |

Det sanna värdet ligger troligen närmare den undre gränsen eftersom cachad indata inte beräknas om, men det går inte att säga hur nära. Att läsa lång kontext kostar mer än att läsa kort (Epoch AI, 2025: cirka 2,5 Wh vid 10 000 tokens indata och cirka 40 Wh vid 100 000). Spannet är därför brett, och vi ska inte låtsas veta mer.

## 7. Räknas bara nya tokens, eller även gamla?

**Kort svar:** båda, men på olika sätt. Leverantörerna skiljer på nya och återlästa (cachade) tokens i redovisning och pris. I energi sparar cachningen mest av arbetet att läsa in indatan, men inte kostnaden för att varje ny token ska ta hänsyn till hela kontexten.

Tabell 7. Cachning hos tre leverantörer

| Nr | Leverantör | Hur cachningen fungerar | Pris för cachade läsningar | Hur det redovisas |
|---|---|---|---|---|
| 1 | Anthropic (u.å.) | Återanvänder ett tidigare bearbetat prefix upp till en markerad brytpunkt | 0,1 gånger vanligt indatapris, lägre för vissa modeller (0,05 gånger för Opus 5.5 och Sonnet 5.5, 0,025 gånger för Fable och Mythos). Skrivning 1,25 gånger (5 minuter) eller 2 gånger (1 timme) | Separata fält för nya, cachade nyskrivna och cachade lästa tokens, samt producerade tokens. Minsta längd 512–4 096 tokens, 5 minuter som standard |
| 2 | OpenAI (u.å.) | Återanvänder redan beräknade KV-tillstånd för ett gemensamt prefix. På som standard | Rabatt upp till 95 % på cachad indata, varierar mellan modeller | Fältnamn och minsta längd inte kontrollerade |
| 3 | Google (u.å.) | Implicit och explicit cachning. Cachat innehåll är ett prefix | Reducerat pris, inget belopp angivet på sidan | `usage_metadata`. 2 048–4 096 tokens för implicit cachning |

Priset är leverantörens prissättning och säger inte hur mycket energi som sparas.

**Vad kostar de gamla tokens i energi?** När en modell läser in en text sparar den mellanresultat (key-value-tillstånd, KV) som låter den hänvisa tillbaka till tidigare tokens (OpenAI, u.å.). Cachning sparar dem för ett prefix så att de slipper bearbetas om. Men för varje ny token modellen skriver måste den läsa tillstånden för hela kontexten. Cavagna m.fl. (2026), ett förtryck från 2 november 2026 mätt på 13 öppna modeller på H100-kort, visar: prefixcachning tar bort 93 % av indatakostnaden (prefill) men KV-cachen är opåverkad. Ett agentiskt anrop (lång indata) kostar 13,0 gånger ett icke-agentiskt anrop, och med cachning fortfarande 4,8 gånger. Resultatet gäller inte Claude, jämförelsen är per anrop relativt ett annat anrop, och hela artikeln är inte läst (F-34).

**Skiljer det mellan modeller?** Ja: arkitektur (prefillenergin växer kvadratiskt med modellens dolda dimension, och grupperad nyckelhantering, GQA, minskar energin per token med upp till 3 gånger jämfört med MHA, enligt Cavagna m.fl.), cachningsregler (minsta längd, livslängd), prissättning och tokenräkning (en token är inte samma enhet i alla modeller, F-35).

**Konsekvens för Z och energispannet.**
- Z_NY (bara nya tokens) antar att återläsningen kostar inget: underskattar troligen energin, eftersom KV-cachen finns kvar.
- Z_ALLA (alla tokens lika) antar att återläst kostar som ny: överskattar energin, eftersom det mesta av indatakostnaden sparas.
- Ett tredje räknesätt utgår från antalet anrop: 93 anrop × (4,8 till 13) × energi per normal fråga (0,24–0,3 Wh) blir cirka 110–360 Wh, vilket överlappar den undre gränsen (cirka 230–280 Wh). Det är en indikation, inte en mätning. Anropen i det här arbetet bearbetade i genomsnitt cirka 220 000 tokens vardera, en mycket längre kontext än i förtrycket.
- Bedömning: energin för arbetet ligger troligen i området några hundra Wh, men långa kontexter kan ge mer. Övre gränsen är ett tak som sannolikt inte nås. Spannet behålls i redovisningen.

## 8. Hur antagandena följs över tid

- **Antagandelogg** i [Forbattringar_261112.md](Forbattringar_261112.md): varje ändring av X, Y eller Z får en rad med version, datum, värde och skäl.
- **I datafilen (JSON):** X_in, X_ut, Y och Z är poster med fält för värde, enhet, källa, datum och antagandeversion. Z räknas av sidan, aldrig för hand.
- **Nya mätningar:** skriptet kan köras på fler sessioner och projekt, så att Y blir ett genomsnitt över flera i stället för en enskild session (F-30).
- **Ändras X** (andra vanor, längre svar) **eller Y** (andra modeller, mer effektiv cachning) ändras Z, och sidan visar den nya versionen och datumet.

## 9. Är det bättre att göra mer utförliga produkter?

Resonemanget, i steg, med vad som är belagt och vad som är en värdering:

1. **Resursanvändningen mäts bäst mot vad den ger.** Att jämföra en hel produkt med en enskild fråga är som att jämföra en bilresa med ett steg. Frågan är vad produkten ersätter och vad den åstadkommer.
2. **Utförligt arbete gör sådant möjligt som en enkel fråga inte kan.** Det som tar flera källor, kontroller och versioner går inte att göra i ett enda svar. Det är en beskrivning av arbetet, inte en uppmätt nytta.
3. **Ett arbete som ersätter människotid sparar också resurser.** Människans arbete drar el (dator, belysning, resor), men jag har ingen källa för att jämföra och lägger inte in en siffra.
4. **Det är inte automatiskt bra att använda mer.** Där användningen är som störst samlas också resursanvändningen, vilket är skeptikernas poäng. Argumentet håller bara om arbetet verkligen ger nytta som motsvarar kostnaden, och om arbetet är väl planerat så att det inte görs om i onödan.
5. **Planering sparar resurser.** En kort specifikation i förväg minskar antalet varv och därmed antalet anrop. Det är ett konkret skäl att planera skriftligt före bygget.
6. **Det som saknas är belägg för nyttan.** Forskningen om hur mycket AI-stöd faktiskt sparar i arbetet är, så vitt jag vet, blandad, men jag har inte hämtat några källor än (F-24). Sidan ska därför inte påstå en siffra för nyttan, bara redovisa resonemanget och att det är en värdering.

**Slutsats för sidan:** säg att enkla frågor är den billigaste användningen och att utförliga arbeten kan vara mer värda trots att de kostar mer, men att det är något man ska väga i varje fall. Visa resurserna öppet och med osäkerheten, i stället för att gömma dem eller förstora dem.

## 10. Det som återstår

Se [Forbattringar_261112.md](Forbattringar_261112.md): F-24 (belägg för nytta), F-25 (energi per token för agentarbete och cachning), F-26 (Googles definition av median-prompten), F-28 (människans resursanvändning för jämförelse), F-29 (räknar fältet för producerade tokens även modellens interna resonemang?) och F-30 (fler mätpunkter för Y), F-33 (cachningsdokumentation i sin helhet), F-34 (SIMPLE-artikeln i sin helhet och oberoende mätningar) och F-35 (tokenräkning mellan modeller).

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Altman, S. (2025) 'The gentle singularity'. https://blog.samaltman.com/the-gentle-singularity *(Genomsnittlig ChatGPT-fråga, 0,34 Wh. Ingen definition av "genomsnittlig". Läst i originalet.)*
- Anthropic (u.å.) 'Prompt caching', Claude Developer Platform. https://platform.claude.com/docs/en/build-with-claude/prompt-caching *(Hur cachning av prompt-prefix fungerar, priset för cachade läsningar och skrivningar, minsta längd. Priset säger inget om energin. Läst delvis via en genomgång.)*
- Cavagna, H. P., Proia, A., Cesarini, D. & Kiziltan, Z. (2026) 'The SIMPLE law for energy cost of LLM inference'. arXiv:2611.03330. https://arxiv.org/abs/2611.03330 *(Förtryck. Energi per token som skiljer indata från avkodning och KV-cachen. Abstract läst.)*
- Google (u.å.) 'Context caching', Gemini API documentation. https://aistudio.google.com/docs/caching?generate-content=true *(Implicit och explicit cachning. Läst via en genomgång.)*
- Luccioni, A. S., Jernite, Y. & Strubell, E. (2024) 'Power hungry processing: watts driving the cost of AI deployment?'. arXiv:2311.16863. https://arxiv.org/abs/2311.16863 *(Mätning per 1 000 användningar och uppgiftstyp. Hela artikeln hämtad.)*
- OpenAI (u.å.) 'Prompt caching', OpenAI API documentation. https://developers.openai.com/api/docs/guides/prompt-caching *(Cachning återanvänder KV-tillstånd för ett gemensamt prefix, rabatt upp till 95 procent. Sidans början läst.)*
- Shehabi, A. m.fl. (2024) *2024 United States Data Center Energy Usage Report*, LBNL-2001637. https://escholarship.org/uc/item/32d6m0d1 *(Indirekt vatten, 4,52 liter per kWh. Läst.)*
- Vahdat, A. & Dean, J. (2025) 'How much energy does Google's AI use? We did the math', Google Cloud Blog, 21 augusti 2025. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference *(Median-textfråga, 0,24 Wh. Hela den tillhörande artikeln, arXiv:2508.15734, är inte läst; endast abstract.)*
- You, J. (2025) 'How much energy does ChatGPT use?', Epoch AI, Gradient Updates, 7 februari 2025. https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use *(Definition av en typisk fråga (500 tokens), 0,3 Wh, och uppskattningar för långa indata, cirka 2,5 respektive 40 Wh. Läst i originalet, beräkningar för GPT-4o.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
