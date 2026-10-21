# Test 3A: Groks svar på tentan TATA41 (2026-08-19), jämfört med lösningsskissen och med Claude

**Hör till:** [PROMPTER_och_protokoll.md](PROMPTER_och_protokoll.md), [grok_svar_A_oforandrat.md](grok_svar_A_oforandrat.md) och [Test 1 (Claude)](../test1_TATA41_2026-08-19/RESULTAT_test1.md)
**Rättat:** 2026-10-22
**Status:** Illustration, inte en studie. En tenta, en körning, en modell. Rättat mot Linköpings universitets lösningsskiss ([L260819.pdf](https://courses.mai.liu.se/GU/TATA41/Tentor/L260819.pdf)). Ingen tentarättare har bedömt bevisen, så ingen poängsumma anges.

## 1. Förutsättningar

| | Claude (Test 1) | Grok (Test 3A) |
|---|---|---|
| Modell och läge | Claude Sonnet 5.5, i Claude Code | Grok 4.7, standardläge (enligt Groks egen uppgift). Kents skärmbild visar läget **Auto** i Groks app ([Grok_svarar_pa_forsta_fragan.jpg](../Grok/Bilder/Grok_svarar_pa_forsta_fragan.jpg)) |
| Kodkörning | Ja, Python och sympy | "Nej" för slutsvaren, men "en snabb numerisk kontroll av några uttryck" (Groks egen uppgift, något motsägelsefull) |
| Webbsökning | Inga sökningar efter tentan eller facit | "Nej" enligt Grok. Om det gick att stänga av webbsökning är inte noterat |
| Prompt | Uppgifterna lästes som bilder ur PDF:en | Uppgifterna inklistrade som text (se [PROMPTER_och_protokoll.md](PROMPTER_och_protokoll.md)) |
| Tid | 2026-10-22 | Klockslag ej angivet |

Skillnaderna i förutsättningar (verktyg, prompt, hur uppgifterna presenterades) är stora nog att man inte kan kalla jämförelsen en test av modellerna mot varandra. Den visar hur två AI-modeller svarar på samma uppgifter under något olika villkor.

## 2. Resultat, uppgift för uppgift

| Uppgift | Groks slutsvar | Lösningsskissens svar | Stämmer |
|---|---|---|---|
| 1a | k = 2 | k = 2 | Ja |
| 1b | Störst 1, minst 2 − 2 ln 2 | Samma | Ja |
| 2a | 1 | 1 | Ja |
| 2b | −1/4 | −1/4 | Ja |
| 2c | ½ ln(1+x²) + x²/(1+x²) | Samma | Ja |
| 3a | (1/3) ln(8/5) | ln 2 − (ln 5)/3 = (1/3) ln(8/5) | Ja (samma tal) |
| 3b | ½ eˣ(sin x + cos x) + C | Samma | Ja |
| 3c | (1/3)(arctan(3e) − arctan 3) | Samma | Ja |
| 4a | 5/2 | 5/2 | Ja |
| 4b | 3e⁻⁴ | 3/e⁴ | Ja |
| 5 | k > ½ e^(−3/4) | k > ½ e^(−3/4) | Ja |
| 6 | a = 1/2, b = 1/√2 | a = 1/2, b = 1/√2 | Ja |
| 7a | Bevisar 1 ≤ A_N ≤ 3 | Visa 1 ≤ A_N ≤ 3 | Resultatet stämmer; se anmärkning |
| 7b | Konvergens mot A med 2 ≤ A ≤ 3 | Samma | Resultatet stämmer |

**Alla slutsvar stämmer med lösningsskissen.** Det gäller både Grok och Claude i Test 1.

## 3. Anmärkningar om bevisen och motiveringarna

Det här är mina iakttagelser som en läsare, inte en tentarättares bedömning.

- **Uppgift 7a (Groks bevis):** Grok visar att A_N < (e/(e−1))² med hjälp av summaformeln för ∑ k·r^k. Därefter skriver den att kvadraten är "< 4, men mer precist ≈ 2,50 < 3". Den första uppskattningen räcker inte för att visa gränsen 3, och steget till "≈ 2,50 < 3" är ett avrundat numeriskt värde utan motivering. Själva resultatet är rätt, men en rättare skulle kunna dra poäng på stringensen. Dessutom hör summaformeln hemma i en senare kurs (lösningsskissen konstaterar att just formeln för A kommer från "Envariabelanalys, del 2"), medan lösningsskissen använder jämförelse med en integral.
- **Uppgift 7b (Grok):** "Direkt beräkning ger A₃ = 1 + 2/e + 3/e² > 2" stämmer (≈ 2,14) men beräkningen visas inte.
- **Uppgift 3b (Grok):** motiveringen är bara en hänvisning till partialintegration "eller standardformeln", utan uträkning.
- **Uppgift 1b (båda):** uppgiften säger "skissa grafen". Grok *beskriver* grafen i ord. Claude (Test 1) gjorde ingen skiss alls. Ingen av oss har ritat någon graf.
- **Min egen lösning i Test 1** använde samma slutna formel för A i uppgift 7 och skrev bara en skiss av beviset, så samma anmärkning gäller i stort den.
- **Uppgift 6 (Grok):** beviset är rimligt och komplett, men utgår från kontinuitet för att få b = √a. Lösningsskissen visar det som ett alternativ ("en lite kortare lösning").

## 4. Vad testet visar och inte visar

**Det visar** att två olika nuvarande AI-modeller, utan tillgång till facit, kommer fram till samma slutsvar som läraren på en hel tentamen i första kursen i envariabelanalys.

**Det visar inte:**
- Att modellerna skiljer sig åt. Tentan är en första kurs och *båda klarar alla slutsvar*, så testet skiljer dem inte åt. En svårare uppgift behövs för att se skillnader.
- Att Grok eller Claude inte kan ha sett tentan eller lösningsskissen. Båda är offentliga sedan augusti 2026, och jag vet inte vad Groks kunskapsgräns är. Claudes kunskapsgräns (juni 2026) ligger före tentan.
- Hur bevisen hade bedömts i poäng.
- Att resultatet gäller andra kurser eller modeller.

**Nytt för artikeln:** när alla slutsvar stämmer och skillnaden ligger i hur väl man motiverar, blir tentan bättre som en test av om en student *förstår*, än av om AI *klarar*. Det stöder bilden i dina inlägg att examinationen måste röra sig mot det som AI inte ersätter: förklaring, motivering och muntlig redovisning. Det är ett resonemang, inte ett bevis.
