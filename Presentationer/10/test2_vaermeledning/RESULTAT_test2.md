# Test 2: värmeledning i en stav (agentuppgift)

**Hör till:** [ARTIKEL_disposition_2026-10-22.md](../ARTIKEL_disposition_2026-10-22.md), [PRD_presentation_generation_2005.md](../PRD_presentation_generation_2005.md) och [Test 1](../test1_TATA41_2026-08-19/RESULTAT_test1.md)
**Genomfört:** 2026-10-22
**Status:** Illustration, inte en studie. En uppgift, en körning, en modell. Siffrorna är hämtade ur körningarna i den här mappen och är inte kvalitetssäkrade av någon utomstående.

## 1. Vad testet prövar

Test 1 prövade en modell med Python som hjälpmedel på en tenta som läraren skrivit. Test 2 prövar *agenten* (modell + harness) på en uppgift där den själv ska välja metod, skriva och köra kod och kontrollera att svaret håller: värmeledning i en aluminiumstav, tre delfrågor. Uppgiften står i [UPPGIFT.md](UPPGIFT.md).

## 2. Så gjordes testet (facit låst i förväg)

1. Uppgiften och godkänd-gränsen (±0,05 °C, ±1 s) fastställdes först i [UPPGIFT.md](UPPGIFT.md).
2. Jag räknade fram det **analytiska facit** (Fourierserie, 400 termer, 40 siffror) och sparade det i [facit_laast.json](facit_laast.json) utan att skriva ut siffrorna. Bara filens hashvärde visades: SHA-256 `2c79674c92ebc395a3bec2035a81613b97c55c645482162c0205d611d0f45223`, tidsstämpel 2026-10-22 00:26:27 ([tidsstampel_facit_laast.txt](tidsstampel_facit_laast.txt)). Jag har alltså inte sett facit-siffrorna när jag löste uppgiften.
3. Jag skrev en numerisk lösare med ändliga differenser utan analytisk lösning ([losning.py](losning.py)) och körde en konvergensstudie ([kornings_logg.txt](kornings_logg.txt)).
4. Jag sparade mina svar med tidsstämpel 00:27:24 ([svar_sparade_innan_facit.md](svar_sparade_innan_facit.md)).
5. Därefter öppnade jag facit, kontrollerade att hashvärdet var oförändrat och jämförde.

## 3. Resultat

| Delfråga | Mitt svar | Facit | Avvikelse | Gräns | Godkänt |
|---|---|---|---|---|---|
| (a) T(L/2, 600 s), båda ändar 100 °C | 42,843 °C (extrapolerat 42,8426) | 42,8426 °C | 0,0004 °C | 0,05 °C | Ja |
| (b) T(L, 600 s), isolerad ände | 20,541 °C (extrapolerat 20,5405) | 20,5405 °C | 0,0005 °C | 0,05 °C | Ja |
| (c) Tid till 90 °C i mitten | 2424 s | 2424,4 s | 0,4 s | 1 s | Ja |

**Alla tre delfrågorna stämmer med facit.** Att två helt olika metoder (en numerisk lösning och en analytisk serie) ger samma svar är ett skäl att lita på båda.

## 4. Det agenten gjorde för att kontrollera sig själv

- **Stabilitet.** Den enklaste metoden (explicit) kräver att r = α·Δt/Δx² ≤ 0,5. Jag körde den bara där villkoret gällde. En körning med r = 0,97 gav 3,85·10²⁷³ som temperatur (alltså nonsens), vilket bekräftade att villkoret verkligen behövs. (Temperaturen blev alltså ungefär 10 upphöjt till 273, ett orimligt tal.)
- **Konvergens.** Jag förfinade rutnätet och tidssteget fem gånger och såg att avvikelserna mellan stegen ungefär fyrdelades vid varje halvering för Crank–Nicolson (metod av andra ordningen) och halverades för implicit Euler (första ordningen). Det är tecken på en korrekt implementering.
- **Gränsvillkor.** I (b) användes en spegelnod för den isolerade änden. Ett fel där hade gett ett systematiskt fel som konvergensstudien inte hade avslöjat, men facit gjorde det.
- **Extrapolation.** Genom att jämföra två metoder av olika ordning och extrapolera kunde jag uppskatta felet i svaret.

## 5. Vad testet visar och inte visar

**Det visar** att en AI-agent kan lösa en tvåstegsuppgift i teknisk fysik (välja metod, programmera, kontrollera numeriskt, ge ett slutsvar) och att svaret går att kontrollera mot ett facit som låsts i förväg.

**Det visar inte:**
- **Uppgiften är inte oberoende.** Jag, samma modell, formulerade uppgiften. Den är därför troligen lättare för just mig än en uppgift från en främmande lärare, och uppgiften är också mer "lärobok" än verkliga ingenjörsproblem med ofullständiga data.
- **Blindheten gäller siffrorna, inte teorin.** Jag kände till värmeledningsekvationen, stabilitetsvillkoret och att en analytisk lösning finns. Det gör också en student som läst kursen, men det betyder att testet inte mäter "förmåga från noll".
- **Fällan var känd.** Att instabilitet kan inträffa visste jag i förväg, så att jag undvek den visar mindre än om jag fallit i den.
- **Facit är räknat av samma modell.** Facit har inte granskats av en människa, men det stämmer med den oberoende numeriska lösningen, vilket minskar risken för att båda är felaktiga.
- **En körning, en modell, en uppgift.** Det går inte att säga något om hur ofta modellen lyckas.

**Slutsats att använda i texten:** testet är en illustration av hur en agent *kan* arbeta (välja, programmera, kontrollera), inte ett bevis för att man kan lita på AI i teknisk fysik.

## 6. Hur det kan återskapas

Kör `python losning.py` i den här mappen (ren Python, inga extra bibliotek). Facit räknades med mpmath (40 siffror) och ligger låst i `facit_laast.json`.
