# Test 1 av en annan AI-modell: ChatGPT, variant B (tentan som PDF), 2026-11-01

**Namn:** RESULTAT_test1_ChatGPT_variant_B_261101
**Plats:** `AI-teknik/Presentationer/11/RESULTAT_test1_ChatGPT_variant_B_261101.md`
**Skapad:** 2026-11-01
**Version:** 1
**Författare:** Claude (språkmodell), på Kent Lundgrens begäran. Arbetsdokument; bedömningarna är mina.

**Varning:** den här filen innehåller alla svar på tentan. Pröva uppgifterna själv först, eller läs [guiden](index.html).

**Underlag:** fyra bilder från samtalet med ChatGPT ([bild 1](Bilder/ChatGPT_ska_losa_tentan_bild1_261101.jpg), [bild 2](Bilder/ChatGPT_ska_losa_tentan_bild2_261101.jpg), [bild 3](Bilder/ChatGPT_ska_losa_tentan_bild3_261101.jpg), [bild 4](Bilder/ChatGPT_ska_losa_tentan_bild4_261101.jpg)) och modellens fullständiga svar, inklistrat i samtalet med mig. Det inklistrade svaret är inte sparat som egen fil. Prompten är [prompt B](prompt.html#PromptB), och tentan är [PDF:en](endimensionell_analys_LTH_261030.pdf), bifogad som fil.

## 1. Kort resultat

- Alla 17 delsvar (1a–1f, 2, 3a, 3b, 4, 5a–5c, 6, 7, 8, 9) stämmer med de svar som guiden kontrollerat, se [Tabell 1](#tabell-1).
- Modellen kunde inte läsa PDF:ens textlager (det finns inget) men läste sidorna visuellt, och avskriften av uppgifterna ser ut att stämma mot originalet, se [Tabell 2](#tabell-2).
- Modellen redovisade hjälpmedel (Python och SymPy i uppgift 9) och uppgav att den inte använt webbsökning eller färdiga lösningar. Det går inte att kontrollera av bilderna.
- Fyra saker i redovisningen är svaga trots rätta svar: kontrollen i uppgift 7 är felaktig, kontrollen i uppgift 4 har ett räknefel, säkerheten är "Hög" på alla uppgifter, och läsverktygen redovisas inte som hjälpmedel. Se avsnitt 5.
- Det här är en körning av en modell. Det säger inget om hur andra modeller eller andra körningar klarar tentan.

## 2. Vad som framgår och vad som saknas

| Fråga | Svar |
|---|---|
| Modell och version | Anges inte på bilderna. Gränssnittet heter ChatGPT. **Saknas: Kent anger modell och version.** |
| Läge | [Bild 1](Bilder/ChatGPT_ska_losa_tentan_bild1_261101.jpg) visar att modellen erbjöd valet "Fortsätt i ChatGPT Work" eller "Stanna i Chat", med motiveringen att Work kan granska sidorna visuellt och köra OCR (textigenkänning). Svaret säger att Python och SymPy kördes i uppgift 9, vilket tyder på ett läge med verktyg. **Saknas: vilken knapp som valdes.** |
| Webbsökning påslagen | Okänt. Modellen uppger att den inte sökt. **Saknas: Kent anger om sökning var påslagen.** |
| Antal körningar | En. |
| Variant | B: kort prompt och bifogad PDF. |
| Uppföljning mellan steg 1 och 2 | Modellen avslutade steg 1 med att den skulle gå vidare till steg 2 "när vi går vidare" ([bild 2](Bilder/ChatGPT_ska_losa_tentan_bild2_261101.jpg)), och steg 2 finns som ett eget svar. Det betyder att modellen stannade efter steg 1 och att ett nytt meddelande behövdes. **Saknas: vad Kent skrev emellan.** Prompten säger inte att modellen ska vänta. |

## 3. Svaren jämfört med guidens kontrollerade svar

**Tabell 1.** ChatGPTs slutsvar mot de kontrollerade svaren

| Uppgift | ChatGPT | Kontrollerat svar (guiden) | Utfall |
|---|---|---|---|
| 1a | 2x + y = 11 | y = −2x + 11 | Samma linje |
| 1b | (x − 5)² − 6 | (x − 5)² − 6 | Stämmer |
| 1c | −2 | −2 | Stämmer |
| 1d | −1 < x < 1/3 | −1 < x < 1/3 | Stämmer |
| 1e | 56 | 56 | Stämmer |
| 1f | 1/8 | 1/8 | Stämmer |
| 2 | x = 2, 5, 10 | x = 2, 5, 10 | Stämmer |
| 3a | gränsvärde och epsilon-delta-definition | definition (inte kontrollerad mot kursboken) | Rimlig; poäng avgörs av rättare |
| 3b | g′(x) = 5x⁴, härledd med differenskvot och binomialsatsen | g′(x) = 5x⁴ | Stämmer |
| 4 | min (1, 3), max (4, 5 ln 4 − 3), asymptot x = 0 | samma | Stämmer |
| 5a | 0 | 0 | Stämmer |
| 5b | −2/3 | −2/3 | Stämmer |
| 5c | 1/4 | 1/4 | Stämmer |
| 6 | h = 1, b = 3, ℓ = 4 dm, V = 12 dm³ | samma | Stämmer |
| 7 | BD = √6 | BD = √6 | Stämmer |
| 8 | inte deriverbar för x = kπ/2, k ∈ ℤ; styckvis linjär graf | samma | Stämmer |
| 9 | PQ = 15√3 cm | PQ = 15√3 cm | Stämmer |

Jag har dessutom följt räkningen i uppgift 2, 4, 5, 6, 7, 8 och 9 steg för steg. Slutsvaren stämmer, men jag hittade två fel i kontrollerna (uppgift 4 och 7, se avsnitt 5). I uppgift 8 stämmer de fyra styckvisa uttrycken med funktionsvärdena i x = 0, π/2, π och 3π/2. I uppgift 9 ger modellens derivata F′(t) = (t² − 200)(t² + 400)² / (400t³) samma uttryck som jag får när jag deriverar själv, och den kontrollerar att optimum ligger inom det tillåtna intervallet (AP ≈ 21,2 cm, AQ = 15 cm).

Att två vägar ger samma svar höjer förtroendet för svaren, särskilt i uppgift 7 och 9 där modellen valde andra metoder än guidens kontroll (Stewarts sats i 7, en parameter för förskjutningen av A′ i 9, medan guidens kontroll söker över vikningsvinkeln). Det är inget bevis: det finns fortfarande inget officiellt facit, och båda har läst samma figurer.

## 4. Steg 1: avläsningen

[Bild 2](Bilder/ChatGPT_ska_losa_tentan_bild2_261101.jpg) visar avskriften. Modellen skriver att textläsningen direkt ur PDF:en inte fungerade, men att den läste de renderade sidorna visuellt. Det är det läge prompt B förutsåg: skanningen saknar textlager.

**Tabell 2.** Avläsningen i steg 1

| Moment | Vad modellen gjorde | Min bedömning |
|---|---|---|
| Uppgiftstexterna | Skrev av alla nio uppgifterna med delfrågor | Ser ut att stämma mot originalet i det som syns på bilden. Bilden är liten, så ordagrann jämförelse tecken för tecken är inte gjord. |
| Tentans regler | Återgav "Inga hjälpmedel", poängregler och uppgift 1:s svarsregel | Stämmer |
| Uppgift 1c | Noterade att ²log betyder logaritm med bas 2 | Rätt tolkning |
| Figur 6 | Beskrev måtten h, b, h, b, h och h, ℓ, h, bredd 9 och höjd 6, och att de streckade linjerna är viklinjer | Stämmer med figuren. "Viklinjer" är en tolkning som är rimlig. |
| Figur 9 | Beskrev båda delfigurerna, hörnens placering, 20 och 30, att A flyttats till A′ på BC och punkterna P och Q | Stämmer med figuren |
| Egen kontroll | En tabell "Kontroll av avläsningen": 2 sidor, 9 uppgifter, delfrågor, figurer avlästa, inga saknade uppgifter | Rimlig och kort |

Modellen avbröt inte läsningen, vilket prompten bad den göra bara om filen inte gick att läsa. Filen gick att läsa visuellt.

## 5. Svagheter i redovisningen, trots rätta svar

1. **Kontrollen i uppgift 7 är fel.** Modellen skriver att den kontrollerar "i triangeln ABD" med AB² = AD² + BD² − 2·AD·BD·cos A₁ och får cos A₁ = 1/(4√6). Den vinkel formeln gäller är vinkeln vid D, inte vinkeln A₁ vid A (som är vinkeln mellan AB och AD och har cos = 7/12). Slutsatsen "konsistent" bygger alltså på en felbenämnd vinkel och kontrollerar inte bisektrisvillkoret. Svaret BD = √6 är ändå rätt.
2. **Kontrollen i uppgift 4 har ett räknefel.** Modellen skriver f″(4) = 8/64 − 5/16 = −1/8. Rätt värde är −3/16 (8/64 = 2/16, och 2/16 − 5/16 = −3/16). Tecknet, och därmed slutsatsen att x = 4 är ett lokalt maximum, påverkas inte. En rättare skulle dock se felet.
3. **Lösningen i uppgift 7 slutar halvvägs.** Sista raden i räkningen är BD = 3·√6/3, och likheten fram till √6 skrivs bara i raden Svar.
4. **Säkerheten är "Hög" på alla uppgifter.** Samtidigt skriver modellen i slutet att uppgift 3, 6, 8 och 9 är de som kräver särskild granskning. Raden Säkerhet skiljer alltså inte mellan uppgifterna.
5. **Flera kontroller är ingen oberoende kontroll.** I 3a är kontrollen ett exempel (x² i punkten 2), i 5a en omformulering av resonemanget och i 3b potensregeln (som bekräftar resultatet men inte härledningen). Bra kontroller finns i 2 (insättning), 4 (andraderivata), 5b (Taylorutveckling), 5c (L'Hôpital) och 6 (bivillkoren och gränsfall).
6. **Läsverktygen redovisas inte som hjälpmedel.** Raden Hjälpmedel gäller lösningen. Att modellen renderade sidorna och enligt [bild 1](Bilder/ChatGPT_ska_losa_tentan_bild1_261101.jpg) kunde köra OCR syns bara i steg 1, inte i sammanfattningstabellen. Prompt B frågar inte efter hur filen lästes.
7. **Textskisserna i uppgift 4 och 8 är ungefärliga.** De är schematiska och inte skalenliga, vilket modellen också skriver. Den exakta beskrivningen med koordinater och styckvisa uttryck är korrekt.
8. **Hjälpmedel och källor uppges i sammanfattningstabellen:** "Inga" utom uppgift 9 (Python/SymPy), och "Källor utöver din egen räkning: Inga. Ingen webbsökning, inga externa lösningsförslag eller uppslagsverk." Det är det modellen uppger, och det kan inte kontrolleras av bilderna (ingen verktygslogg syns).

Det som är bra: modellen följde svarsmallen i alla uppgifter, gav uppgift 1 som enbart svar, skrev slutsvaren i exakt form med närmevärden som komplement, gav exakt vilken figuravläsning den använde i uppgift 6, och lyfte själv att poängen inte avgörs av slutsvaret utan av hur tydligt resonemanget är.

## 6. Tecken på att modellen hämtat lösningen

Inget i svaret tyder på att modellen kopierat en färdig lösning. Lösningsvägarna är standardmetoder (falluppdelning, teckentabell, bisektrissats och Stewarts sats, parametrisering av vikningen). Svaret har egna parametrar och egna felsteg, vilket en kopia av guiden inte skulle ha. En sökning med en söktjänst den 1 nov 2026 gav inte heller några träffar på tentan eller guiden (se [Kan en modell hitta lösningen?](prompt.html#Fusk)). Det går inte att bevisa, eftersom ingen verktygslogg finns bland bilderna.

## 7. Förslag till nästa steg

1. **Kent anger modell, version, läge (Chat eller Work), om webbsökning var påslagen och vad som skrevs mellan steg 1 och 2.** Då kan Tabell 1 i [prompt.html](prompt.html#Tabell1) fyllas i fullständigt.
2. **Ändra prompt B** så att den säger "gör steg 1 och steg 2 i samma svar" och lägger till en rad om hur filen lästes ("Läsning: direkt ur filen | rendering av sidor | OCR | annat"). Det ändrar prompten, så den här körningen noteras som gjord med den nuvarande versionen. Jag ändrar inte prompten utan Kents besked.
3. **Kör variant A med samma modell** och jämför med B. Här fanns inga läsfel, så B visar att modellen klarade skanningen, och A kan visa om skillnaden är noll även för andra modeller.
4. **Fler modeller och fler körningar per modell.** En körning av en modell är ett stickprov.
5. **Be modellen ange säkerhet per uppgift med en mening om vad som skulle få den att ändra svaret**, så att raden Säkerhet blir användbar.
