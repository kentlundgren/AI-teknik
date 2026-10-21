# Test 3: samma två uppgifter till Grok (prompter och protokoll)

**Hör till:** [ARTIKEL_disposition_2026-10-22.md](../ARTIKEL_disposition_2026-10-22.md), [Test 1](../test1_TATA41_2026-08-19/RESULTAT_test1.md) och [Test 2](../test2_vaermeledning/RESULTAT_test2.md)
**Skapad:** 2026-10-22
**Status:** Prompter klara. Svar från Grok saknas ännu. Avsändare: Kent Lundgren.

## 1. Syfte

Visa hur en prompt ser ut, och hur en annan AI-modell (Grok från xAI) svarar på samma två uppgifter som Claude löste i Test 1 och Test 2. Samma uppgifter, samma facit, olika modell.

## 2. Protokoll (så att jämförelsen blir rättvis)

1. **En ny chatt per prompt.** Prompt A och Prompt B körs i varsin ny chatt, så att svaren inte påverkar varandra.
2. **Sökning på nätet av.** Tentan och dess lösningsskiss ligger öppet på Linköpings universitets webbplats. Om Grok får söka på nätet kan den hitta facit. Stäng av webbsökning, DeepSearch och liknande om det går, och notera om det inte gick.
3. **Kodkörning noteras.** Om Grok kan köra kod, notera om den gjorde det. Claude hade Python i båda testen. Om Grok inte kan köra kod är det en skillnad i förutsättningar, och den ska redovisas, inte döljas.
4. **Notera modell, läge och tid:** modellens namn och version som Grok anger, vilket läge som användes (till exempel vanligt läge, tänkande läge), datum och klockslag.
5. **En körning per prompt.** Kopiera svaret *oförändrat och i sin helhet*, inklusive eventuella misstag. Om du kör fler gånger, redovisa alla.
6. **Rättning.** Svaren jämförs mot lösningsskissen (Test 1) och mot det låsta facit (Test 2). Bara slutsvar bedöms. Bevisen i uppgift 6 och 7 bedöms bara översiktligt, eftersom ingen tentarättare är inblandad.

## 3. Prompt A: tentan (TATA41, 2026-08-19)

Tentan ägs av Linköpings universitet och kopieras inte hit. Uppgifterna 1–7 klistras in ordagrant ur PDF:en ([T260819.pdf](https://courses.mai.liu.se/GU/TATA41/Tentor/T260819.pdf)) där det står `[UPPGIFTERNA 1–7]` nedan.

```
Du ska lösa en tentamen i Envariabelanalys 1 från Linköpings universitet (kurs TATA41, 2026-08-19). Lös alla uppgifter.

Regler: Sök inte på internet efter tentan, lösningar eller facit. Om du kan skriva och köra kod får du göra det för att kontrollera dina svar. Svaren ska ges på så enkel form som möjligt, med ett tydligt utskrivet slutsvar till varje uppgift och en kort motivering. Uppgifterna 6 och 7 är bevisuppgifter: skriv ett fullständigt, välmotiverat bevis.

[UPPGIFTERNA 1–7]

Avsluta med tre rader: (1) vilken modell och vilket läge du är, (2) om du körde kod, (3) om du sökte på internet.
```

## 4. Prompt B: värmeledning i en stav

Uppgiften är hämtad ur [UPPGIFT.md](../test2_vaermeledning/UPPGIFT.md) och är vår egen, så den kan visas i sin helhet.

```
Lös följande uppgift numeriskt. Skriv och kör kod om du kan, annars beskriv exakt hur du räknar. Använd inte den analytiska lösningen (Fourierserien) som svar, och sök inte på internet.

En homogen aluminiumstav är L = 1,0 m lång och har värmediffusivitet alfa = 9,7·10^-5 m²/s. Starttemperaturen är 20 °C överallt. Temperaturen T(x, t) i staven följer värmeledningsekvationen dT/dt = alfa · d²T/dx², där x är läget längs staven (0 ≤ x ≤ L) och t är tiden i sekunder.

(a) Båda ändarna (x = 0 och x = L) hålls vid 100 °C från t = 0. Beräkna temperaturen i stavens mitt (x = L/2) efter t = 600 s.

(b) Ändan x = 0 hålls vid 100 °C, och ändan x = L är värmeisolerad (dT/dx = 0). Beräkna temperaturen i den isolerade änden (x = L) efter t = 600 s.

(c) I fall (a): efter hur lång tid når stavens mitt 90 °C? Svara i hela sekunder.

Svara med temperaturer i °C med tre decimaler och tiden i hela sekunder. Kontrollera att din lösning konvergerar när du förfinar steg och rutnät, och redovisa kontrollen.

Avsluta med tre rader: (1) vilken modell och vilket läge du är, (2) om du körde kod, (3) om du sökte på internet.
```

## 5. Vad som ska med i artikeln

- Själva prompten (Prompt B i sin helhet; Prompt A med platshållare och länk).
- Groks svar, oförändrat (eller länk till en fil med svaret).
- Jämförelsen mot facit, i en tabell, med samma gränser som i Test 1 och 2 (Test 2: ±0,05 °C och ±1 s).
- En tydlig rad om skillnader i förutsättningar (kod, verktyg, sökning, läge).

## 5b. Media från körningarna

Kent Lundgren har lagt skärmbilder och skärminspelningar i mappen [Grok/Bilder](../Grok/Bilder/): prompterna i Groks app (läget "Auto" för Prompt A, läget "Build (Beta)" för Prompt B), de fullständiga svaren och två skärminspelningar där Grok arbetar (16 sekunder för tentan, cirka 3 minuter för värmeledningen). Videofilerna har ett ljudspår utan hörbart ljud, och de visar bara chattfönstret.

## 6. Resultat

- **Prompt A (tentan):** besvarad av Grok 4.7 (standardläge). Alla slutsvar stämmer med lösningsskissen. Se [RESULTAT_A_tenta_grok.md](RESULTAT_A_tenta_grok.md) och [grok_svar_A_oforandrat.md](grok_svar_A_oforandrat.md).
- **Prompt B (värmeledning):** besvarad av Grok Build ("agentläge för kod"). Alla tre delfrågor stämmer med det låsta facit. Se [RESULTAT_B_vaermeledning_grok.md](RESULTAT_B_vaermeledning_grok.md), [grok_svar_B_oforandrat.md](grok_svar_B_oforandrat.md) och [skärmdumpen](grok_svar_B_skarmdump.png). Grok Build kördes enligt Kent i en tom mapp utan tillgång till facit. Öppet: modellens namn.
