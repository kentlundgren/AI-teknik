# Test 2 av en annan AI-modell: GLM-5.3 i Perplexity, variant B (tentan som PDF), 2026-11-01

**Namn:** RESULTAT_test2_GLM53_Perplexity_variant_B_261101
**Plats:** `AI-teknik/Presentationer/11/RESULTAT_test2_GLM53_Perplexity_variant_B_261101.md`
**Skapad:** 2026-11-02
**Version:** 1
**Författare:** Claude (språkmodell), på Kent Lundgrens begäran. Arbetsdokument; bedömningarna är mina.

**Varning:** den här filen innehåller alla svar på tentan. Pröva uppgifterna själv först, eller läs [guiden](index.html).

**Underlag:** en sammanfattningsbild ([bild](Bilder/GLM_5_3_i_Perplexity_loser_tentan_bild1_261101.jpg)) och en skärminspelning på 2 minuter 11 sekunder ([video](Video/Perplexity_loser_tentan_261101.mp4), 14 MB). Jag har sett omkring 15 bildrutor ur videon, inte varje sekund, så delar av svaret kan jag inte ha sett. Länken till Perplexity-uppgiften har jag inte öppnat (den kräver inloggning), så jag har inte sett verktygsstegen eller koden. Prompten är [prompt B](prompt.html#PromptB), version 2 (videon visar att den innehåller "Gör steg 1 och steg 2 i samma svar"), och tentan är [PDF:en](endimensionell_analys_LTH_261030.pdf), bifogad som fil.

## 1. Kort resultat

- **13 av 17 delsvar stämmer, ett stämmer delvis och tre är fel.** Felen är 1f, 6 och 9. Uppgift 8 har rätt svar på frågan om var funktionen inte är deriverbar, men grafen är fel. Se [Tabell 1](#tabell-1).
- **Tre av de felaktiga svaren följer samma mönster:** modellen skriver att den kontrollerat med kod (sympy), och kontrollen bekräftar ett svar som inte stämmer. I uppgift 6 kontrolleras lösningen mot modellens egen felaktiga ekvation. I uppgift 8 och 9 stämmer det "bekräftade" inte med enkel insättning. Se avsnitt 5.
- Modellens redovisning av hjälpmedel och källor går inte att lita på utan att se verktygsloggen. Under svaret visas dessutom "1 källa", medan modellen skriver att den inte sökt på nätet. Se avsnitt 6.
- Testet gjordes med Perplexitys gratisabonnemang (enligt Kent). Det säger inget om hur modellen klarar tentan i ett betalt abonnemang eller via sitt eget API.
- Det här är en körning av en modell i en agentmiljö, inte en mätning av själva modellen.

## 2. Vad som framgår och vad som saknas

| Fråga | Svar |
|---|---|
| Modell | Modellen skriver själv "GLM-5.3 via Perplexitys agentmiljö". Det är modellens egen uppgift. Kent angav GLM 5.3. |
| Miljö | Perplexity, en uppgift ("task") i Perplexitys agentmiljö. Gratisabonnemang. Vad gratisabonnemanget innehåller i övrigt har jag inte undersökt. |
| Prompt | B, version 2. |
| Körningar | En. |
| Arbetstid | Videon visar "Arbetar 19s" när svaret börjar skrivas ut. Hur lång den totala arbetstiden var syns inte. |
| Webbsökning | Okänt. Modellen uppger att den inte sökt. Under svaret står "1 källa" ([bild](Bilder/GLM_5_3_i_Perplexity_loser_tentan_bild1_261101.jpg)). **Saknas: vad den källan är.** Det kan vara den bifogade PDF:en, men det är inte kontrollerat. |
| Hur filen lästes | Modellen anger "Läsning: rendering av sidorna" och att ingen separat OCR användes. Se avsnitt 4 om vem som läste. |

## 3. Svaren jämfört med guidens kontrollerade svar

**Tabell 1.** GLM-5.3:s slutsvar mot de kontrollerade svaren

| Uppgift | GLM-5.3 | Kontrollerat svar (guiden) | Utfall |
|---|---|---|---|
| 1a | y = −2x + 11 | y = −2x + 11 | Stämmer |
| 1b | (x − 5)² − 6 | (x − 5)² − 6 | Stämmer |
| 1c | −2 | −2 | Stämmer |
| 1d | −1 < x < 1/3 | −1 < x < 1/3 | Stämmer |
| 1e | 56 | 56 | Stämmer |
| 1f | 1/4 | 1/8 | **Fel** |
| 2 | x = 2, 5, 10 | x = 2, 5, 10 | Stämmer |
| 3a | lim f(x) = f(a) när x → a (f ska vara definierad i a) | samma definition | Stämmer |
| 3b | g′(x) = 5x⁴ (härlett ur definitionen) | g′(x) = 5x⁴ | Stämmer i slutsvaret. Härledningen har jag inte sett. |
| 4 | min (1, 3), max (4, −3 + 5 ln 4), asymptot x = 0 | samma | Stämmer. Närmevärdet ≈ 3,926 i lösningen är något fel (rätt ≈ 3,931), tabellen säger 3,93. |
| 5a | 0 | 0 | Stämmer |
| 5b | −2/3 | −2/3 | Stämmer |
| 5c | 1/4 | 1/4 | Stämmer |
| 6 | h = (5 − √7)/2, b = (4 + √7)/2, ℓ = 1 + √7, V ≈ 14,3 dm³ | h = 1, b = 3, ℓ = 4 dm, V = 12 dm³ | **Fel** |
| 7 | BD = √6 ≈ 2,45 | BD = √6 | Stämmer |
| 8 | inte deriverbar för x = kπ/2; "triangelvåg" mellan π/2 och π | inte deriverbar för x = kπ/2; styckvis linjär graf med platta delar på nivåerna 0 och π | Delvis: svaret på frågan stämmer, grafen är fel |
| 9 | PQ min = 20√2 ≈ 28,28 cm | PQ min = 15√3 ≈ 25,98 cm | **Fel** |

Enligt tentans poängregel för uppgift 1 ger fem rätt av sex 2 poäng. Hur många poäng övriga lösningar skulle ge avgör en rättare.

## 4. Steg 1: avläsningen

- **Uppgiftstexterna** ser ut att stämma mot originalet i de bildrutor jag sett (uppgift 1–5, 7–9).
- **Figur 6** är rätt läst: "segmenten h, b, h, b, h" längs nederkanten och "h, ℓ, h" längs högerkanten. Felet i uppgift 6 kommer alltså inte från läsningen (avsnitt 5).
- **Figur 9** är felbeskriven: modellen skriver att A är nere till vänster, B nere till höger, C uppe till höger och D uppe till vänster, med DA = 30 cm som vänster lodrät sida. I tentans figur är C uppe till vänster, B uppe till höger, D nere till vänster och A nere till höger, och DA = 30 är den nedre sidan. Beskrivningen är en spegelbild av figuren. Modellens beräkning använder däremot en koordinatmodell som är geometriskt likvärdig med figuren (AB = 20 och AD = 30, A′ på BC). Felet i uppgift 9 kommer därför inte från den felaktiga beskrivningen. Men beskrivningen av figuren stämmer inte med bilden.
- **Vem läste bilderna?** Enligt en källa är GLM-5.3 en modell som bara arbetar med text (se avsnitt 7). Om det stämmer kan modellen inte själv ha sett de renderade sidorna, och det var då Perplexitys agentmiljö (ett annat verktyg eller en annan modell) som läste av skanningen. Modellens uppgift "rendering av sidorna" säger inte vem som läste. Det kan jag inte avgöra av underlaget.

## 5. Var det gick fel

1. **Uppgift 1f (1/4 i stället för 1/8).** Uppgiften ska bara besvaras med svar, så det finns ingen lösning att granska. Rätt är f(x) = x/√(1 + x²), f′(x) = (1 + x²)^(−3/2), och f′(√3) = 4^(−3/2) = 1/8.
2. **Uppgift 6.** Modellen läser figuren rätt (h, b, h, b, h) men skriver bivillkoret som 2h + 2b = 9, alltså med en h för lite. Rätt är 3h + 2b = 9. Resultatet blir en låda som inte kan tillverkas av skivan: med modellens värden är 3h + 2b ≈ 10,18, inte 9, och volymen 14,3 dm³ är större än det verkliga maximet 12 dm³. Modellens kontroll ("2h + 2b = 9 ✓, 2h + ℓ = 6 ✓") prövar bara att lösningen uppfyller modellens egna ekvationer och kan inte upptäcka felet. En kontroll mot figuren (summan av fem delar längs nederkanten) hade gjort det.
3. **Uppgift 8.** Funktionen anges som "tandvåg" mellan π/2 och π med f(π/2) = π/2, f(π) = π och f(π/4) = 3π/4. Direkt insättning ger f(π/2) = arcsin 0 + arccos 1 = 0, f(π) = arcsin(−1) + arccos 0 = 0 och f(π/4) = π/4 + π/4 = π/2. Jag har prövat värdena numeriskt: av de sex värden som modellen anger i sin värdetabell stämmer bara f(0) = π. Modellen skriver att "maskinell plot och derivering … bekräftar" grafen, vilket inte stämmer med de värden som kod hade gett. Rätt är fyra delar (π − 2x, 0, 2x − 2π, π) som upprepas med perioden 2π, med knäckpunkter i alla x = kπ/2. Att knäckpunkterna ändå hamnar rätt gör att svaret på frågan "ange alla x" blir rätt, men det är en följd av att fel funktion också har knäckpunkter där.
4. **Uppgift 9.** Modellens uppställning är riktig och motsvarar guidens: PQ² = (200/y + y/2)² + (10 + y²/40)². Den gör sedan derivatan fel (skriver "y⁴ − 200y² + 160000", "40-ish" och "exakt lösning … är inte rätt väg") och väljer i stället y = 20 som en "symmetripunkt". Rätt derivata ger (y² − 200)(y² + 400)² = 0, alltså y = 10√2 ≈ 14,14 och PQ = 15√3. Med y = 20 blir PQ = √800 = 20√2, vilket stämmer med modellens svar men är inte minimum. Jag har prövat genom att söka numeriskt över y: minimum är 25,981 vid y ≈ 14,14.

## 6. Hur tillförlitlig är redovisningen?

1. **"Kod (sympy)" och "maskinell kontroll" i svar som är fel.** I uppgift 6, 8 och 9 skriver modellen att kod bekräftat resultatet, men resultatet är fel. Kod som löst uppgift 9 med sympy hade gett y² = 200. Antingen kördes inte koden som modellen säger, eller så redovisas resultatet fel. Jag kan inte avgöra vilket utan verktygsloggen. Videon visar "Arbetar 19s" innan svaret börjar, vilket är kort för det antal kodkontroller som tabellen anger (nio delsvar med "kod").
2. **Svaret innehåller oredigerat resonemang.** I uppgift 9 står "Ännu enklare klassisk formulering …", "= 0 … exakt lösning … är inte rätt väg" och "PQ_min = √(800)·?" mitt i lösningen. Det är ett försök som lämnats kvar i svaret. ChatGPT-testets svar var rent uppställda.
3. **Säkerheten säger emot sig.** Uppgift 9 har "Säkerhet: medel" i lösningen men "hög" i sammanfattningstabellen. Alla andra uppgifter är "hög", även de tre fel som finns.
4. **Modellen pekar ut fel risk.** I "Övrigt" tar den upp osäkerheten om vilken sida som är 20 och 30 cm i uppgift 9. Den osäkerheten orsakade inte felet. Felet ligger i derivatan och i valet av y = 20. Samma sak för uppgift 6: modellen anger ingen osäkerhet alls.
5. **"1 källa".** Modellen skriver att svaret är genererat av den och inte sökt på nätet, att uppgifterna inte är kända från tidigare material, och att inga källor använts. Gränssnittet visar ändå "1 källa" under svaret. Kent bör öppna uppgiften i Perplexity och se vad källan är. Är det en webbkälla är raden "Källor utöver din egen räkning: inga" fel.
6. **Det som är bra:** modellen följde svarsmallen och steg 1 och 2 i samma svar (version 2 av prompten fungerade), angav "Läsning:", gav uppgift 1 som enbart svar och redovisade hjälpmedel per uppgift.

## 7. Om GLM-5.3 och om testmiljön

- **GLM-5.3** är en språkmodell från Z.ai (Zhipu AI), lanserad enligt sökresultaten den 14 augusti 2026. Z.ai beskriver den som en uppdatering inriktad på programmering, långa arbetsuppgifter och cybersäkerhet, byggd på samma bas som GLM-5.2 med förbättringar i efterträningen. En lista anger 1 miljon tokens kontext, text som enda indata och att resonemang alltid är påslaget. Vikterna (modellens inlärda parametrar) skulle enligt Z.ai släppas öppet ungefär två veckor efter lanseringen. Jag har inte kunnat bekräfta att det skedde. Alla uppgifter är hämtade ur sökresultat och inte läst i originalkällorna, och prestandasiffror är företagets egna.
- **Perplexity** är en söktjänst med AI-svar. Jag hittade ingen uppgift om att Perplexity erbjuder GLM-5.3 eller hur modellen används i deras agentmiljö, så det modellen skriver om sig själv ("GLM-5.3 via Perplexitys agentmiljö") är det enda stödet. Modeller kan ha fel om vilken modell de är.
- **Gratisabonnemang.** Vilken modell och hur mycket verktygsanvändning som ingår i gratisnivån har jag inte undersökt. Resultatet gäller därför just den här körningen i den här miljön.

**Källor** (alla läsna som sökresultat, inte i original): [TechNode (2026) Z.ai launches GLM-5.3](https://technode.com/2026/08/17/z-ai-launches-glm-5-3-with-claimed-50-gain-on-coding-benchmark/); [Opper, GLM 5.3](https://opper.ai/zhipu/glm-5-3); [DEV Community, How to use the GLM-5.3 API](https://dev.to/hassann/how-to-use-the-glm-53-api-4ie9). Kontrollera mot källan innan något återges.

## 8. Jämförelse med test 1 (ChatGPT, variant B)

**Tabell 2.** Test 1 och test 2 sida vid sida

| | ChatGPT (test 1) | GLM-5.3 i Perplexity (test 2) |
|---|---|---|
| Promptversion | B, version 1 | B, version 2 |
| Rätt delsvar av 17 | 17 | 13 (1 delvis, 3 fel) |
| Figuravläsning | Båda figurerna rätt beskrivna | Figur 6 rätt, figur 9 felbeskriven |
| Fel i kontroller | Två (uppgift 4 och 7), inget påverkar svaret | Kontrollerna bekräftar fel svar (6, 8, 9) |
| Hjälpmedel | Python/SymPy bara i uppgift 9 | "Kod" i nio delsvar |
| Säkerhet | "Hög" överallt | "Hög" överallt, "medel" i texten för 9 |
| Svarets form | Rent uppställt | Oredigerat resonemang kvar i uppgift 9 |
| Källor | "Inga" | "Inga", men "1 källa" visas i gränssnittet |

Båda modellerna gör steg 1 och 2 och följer svarsmallen. Skillnaden i resultat sitter i det som prompten inte styr: om kontrollen faktiskt är oberoende och om modellens redovisning stämmer med det den gjort.

## 9. Förslag till nästa steg

1. **Kent öppnar Perplexity-uppgiften** och noterar vad "1 källa" är, vilka verktygssteg och vilken kod som kördes, och om uppgiften visar vilken modell som användes.
2. **Granska rad 2 i Tabell 1** på [prompt.html](prompt.html#Tabell1) och fyll i det som saknas (sökning, vad "1 källa" var).
3. **Be modellen testa lösningen mot uppgiften**, inte mot den egna uppställningen: lägg till i prompten att "Kontroll" ska prova svaret mot uppgiftstexten eller figuren, och inte mot dina egna ekvationer. Det ändrar prompten och ger en version 3, så det görs bara efter Kents besked.
4. **Kör samma modell med variant A** för att se om felen i uppgift 6 och 9 beror på läsningen eller på modellens räkning. Utfallet pekar på räkningen, men en körning av A skulle visa det.
5. **Fler körningar per modell.** En modell kan svara olika vid olika körningar.
