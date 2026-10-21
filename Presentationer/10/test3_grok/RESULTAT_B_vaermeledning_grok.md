# Test 3B: Groks svar på värmeledningsuppgiften, jämfört med det låsta facit och med Claude

**Hör till:** [PROMPTER_och_protokoll.md](PROMPTER_och_protokoll.md), [grok_svar_B_oforandrat.md](grok_svar_B_oforandrat.md), [skärmdump](grok_svar_B_skarmdump.png) och [Test 2 (Claude)](../test2_vaermeledning/RESULTAT_test2.md)
**Rättat:** 2026-10-22
**Status:** Illustration, inte en studie. En uppgift, en körning, ett verktyg. Facit är den analytiska lösningen (Fourierserie) som låstes i förväg i [facit_laast.json](../test2_vaermeledning/facit_laast.json).

## 1. Facit var oförändrat

Hashvärdet (SHA-256) för facit-filen är fortfarande `2c79674c92ebc395a3bec2035a81613b97c55c645482162c0205d611d0f45223`, samma som när facit låstes 2026-10-22 00:26:27, innan Claude löste uppgiften.

## 2. Förutsättningar

| | Claude (Test 2) | Grok Build (Test 3B) |
|---|---|---|
| Verktyg | Claude Code (agentverktyg) med Python | Grok Build, "agentläge för kod" (Groks egen uppgift) |
| Modellens namn | Claude Sonnet 5.5 | **Inte angivet** (Grok svarade bara "Grok Build, agentläge för kod") |
| Kodkörning | Ja, ren Python | Ja. Första Python-körningen avbröts, och Grok räknade om i C |
| Webbsökning | Ingen | "Jag sökte inte på internet" (Groks egen uppgift) |
| Mapp | Egen, utan tillgång till facit under lösningen | En tom mapp utan tillgång till facit (bekräftat av Kent Lundgren 2026-10-22; svaret anger det inte själv) |

## 3. Resultat

| Delfråga | Grok Build | Facit | Avvikelse | Gräns | Godkänt |
|---|---|---|---|---|---|
| (a) T(L/2, 600 s) | 42,843 °C (konvergerat 42,842637) | 42,842637 °C | 0,0000003 °C | 0,05 °C | Ja |
| (b) T(L, 600 s), isolerad ände | 20,541 °C (konvergerat 20,540506) | 20,540506 °C | 0,0000001 °C | 0,05 °C | Ja |
| (c) tid till 90 °C | 2424 s (2424,4029) | 2424,4029 s | 0,00005 s | 1 s | Ja |

**Alla tre delfrågorna stämmer med facit.** Jag har räknat om Groks Richardson-extrapolation själv ur tabellens värden och den stämmer.

För jämförelse gav Claude (Test 2): 42,843 °C, 20,541 °C och 2424 s, med avvikelserna 0,0004 °C, 0,0005 °C och 0,4 s mot samma facit.

## 4. Vad Grok Build gjorde

- Löste uppgiften numeriskt med Crank–Nicolson och andra ordningens differenser i rummet, alltså samma grundmetod som Claude.
- Använde en spökpunkt för den isolerade änden (samma teknik som Claude).
- Kontrollerade mot både framåt- och bakåt-Euler.
- Förfinade rutnätet mycket längre än Claude (upp till N = 1600 mot Claudes 640) och använde Richardson-extrapolation, vilket gav svar som stämmer med facit på ungefär sex siffror.
- När den första Python-körningen avbröts, skrev den om beräkningen i C. Det är ett exempel på att en agent hanterar ett avbrott själv.
- Redovisade själv vilket verktyg den var, att den körde kod och att den inte sökte på internet.

## 5. Vad testet visar och inte visar

**Det visar** att två olika AI-agenter (Claude Code och Grok Build), med olika modeller bakom, får samma svar som den analytiska lösningen på en tvåstegsuppgift i teknisk fysik, och att det går att kontrollera mot ett facit som låsts i förväg.

**Det visar inte:**
- **Mappen är bekräftad av Kent, inte av Grok.** Kent Lundgren uppger att Grok Build kördes i en tom mapp utan tillgång till facit. Det går inte att kontrollera i efterhand, men Groks redovisade konvergensstudie pekar inte på att den läst något facit.
- **Vilken modell som svarade.** Svaret uppger bara verktyget, inte modellens namn och version.
- **Att uppgiften skiljer agenterna åt.** Båda klarar den, och båda använder samma standardmetod. Uppgiften är en lärobok i numerisk analys.
- **Att Prompt A och Prompt B kördes på samma sätt.** Prompt A kördes i Groks vanliga chatt, Prompt B i Grok Build. Förutsättningarna är alltså olika mellan de två testen.
- **Uppgiften är formulerad av Claude.** Samma förbehåll som i Test 2: den kan vara lättare för en Claude-modell än en främmande uppgift.
- **En körning, ett verktyg, en uppgift.** Inget om hur ofta det lyckas.

## 6. Sammanfattning av alla tester hittills

| Test | Uppgift | Claude | Grok |
|---|---|---|---|
| 1 / 3A | Tenta, Envariabelanalys 1 (TATA41, 2026-08-19) | Alla slutsvar rätt (med Python) | Alla slutsvar rätt (vanlig chatt, "snabb numerisk kontroll") |
| 2 / 3B | Värmeledning i en stav, facit låst | Alla tre rätt (Claude Code) | Alla tre rätt (Grok Build) |

**Observation för artikeln:** uppgifter på den här nivån, första årets matematik och en klassisk numerisk laboration, löses rätt av båda. Skillnaderna ligger i motivering och arbetssätt, inte i slutsvaret. Det är i sig ett argument för tesen i artikeln, men en ärlig läsning är också att testerna inte visar var modellernas gräns går. För det behövs svårare uppgifter, till exempel sådana där facit inte finns i läroböcker.
