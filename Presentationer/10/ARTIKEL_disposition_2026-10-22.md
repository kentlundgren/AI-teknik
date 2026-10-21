# Artikel: "2026 är året det blev normalt och moget" – disposition och beslutsunderlag

**Hör till:** [PRD_presentation_generation_2005.md](PRD_presentation_generation_2005.md)
**Skapad:** 2026-10-22
**Avsändare:** Kent Lundgren
**Status:** Beslutsunderlag. Ingen löptext är skriven. Kent väljer ingress, disposition och tester först (enligt skillen kent-skrivstil för längre texter).

## 1. Tesen

**Rubrikförslag (Kents val 2026-10-22):** *2026 är året det blev normalt och moget*
**Underrubrik, förslag:** hur generativ AI landat i civilingenjörsutbildningen, och vad jag tror att det betyder.

**Tesen i en mening:** hösten 2026 är första gången generativ AI är ett normalt och moget inslag i civilingenjörsutbildning i Sverige: lärosäten tillhandahåller verktygen, examinationen anpassas, modellerna är tillräckligt bra för att vara en seriös sparringpartner i matematik och naturvetenskap, och studenterna börjar hantera hela agenten (modell plus harness). "Moget" betyder också att man ser riskerna.

**Vad texten är:** en argumenterande text med egen ståndpunkt, byggd på egna observationer, två tidigare inlägg och publicerade källor. Den gör inte anspråk på facit; den är "en bild av läget just nu".

## 2. Vad som stöder tesen och vad som inte gör det

| Nr | Påstående | Status | Belägg |
|---|---|---|---|
| 1 | Användningen exploderade 2025–2026 | Belagt | Internetstiftelsen 2026 (4 → över 6 av 10 svenskar; 9 av 10 bland födda på 2000-talet); SCB 2025 |
| 2 | Lärosäten tillhandahåller verktygen | Belagt | LU: Gemini och Copilot Chat via studentkonto; HEPI 2026: 9 → 23 → 38 procent har institutionsverktyg |
| 3 | Examinationen anpassas | Belagt | Regeringen 2025 (fler salstentor); Ingenjören 2026; HEPI 2026 (65 procent säger att bedömningen ändrats) |
| 4 | Modellerna är tillräckligt bra i matematik och naturvetenskap | Delvis belagt | AI Index 2026: GPQA Diamond 93 procent mot experter 81 procent; FrontierMath Tier 4 2 → 38 procent; IMO-guld 2025 |
| 5 | Förmågan är ojämn och måste kontrolleras | Belagt | AI Index 2026 ("jagged"), felaktiga benchmark-frågor |
| 6 | Studenter hanterar agenterna bättre än förr | **Ej belagt** | Kents egen upplevelse; ingen mätning hittad |
| 7 | En majoritet av studenterna betalar | **Ej belagt** | Ersätts av frågan "vem betalar?" (Google-spåret är hypotes) |
| 8 | 2026 som första året | Delvis | Språnget 2024–2026; "normalt och moget" är bärigare än "första" |
| 9 | Egna tester | **Ej genomfört** | Se avsnitt 5 |

Detaljer och källor: [FYND_kallor_2026-10-21.md](FYND_kallor_2026-10-21.md) och [FYND_matematik_och_agenter_2026-10-21.md](FYND_matematik_och_agenter_2026-10-21.md).

**Hur rad 6 och 7 kan hanteras ärligt i en argumenterande text:** skriv dem som Kents bedömning ("min känsla är", "jag kan inte belägga det") och som uttryckliga hypoteser. Det stärker, inte försvagar, texten.

## 3. Tre dispositioner att välja mellan

**A. Tesen först (argumenterande, rakast).**
1. Ingress.
2. Min tes i en mening.
3. Fem belägg (användning, lärosäten, examination, modellerna, agenterna).
4. Tre invändningar och mina svar (fusk, ojämn förmåga, ojämlikhet och vem som betalar).
5. Testet.
6. Slutsats och öppen tråd.

**B. Resan (berättande, personligast).**
1. Ett konkret ögonblick.
2. Vad jag trodde, vad jag hittade.
3. Mitt tidigare inlägg om vad testerna mäter, och vad det betyder för en teknolog.
4. Mitt inlägg om riskerna, och varför "moget" också är att se dem.
5. Testet.
6. Tesen.

**C. Frågan (reflekterande, mest öppen).**
1. Fråga i rubriken: "Har civilingenjörsutbildningen blivit mogen i sitt sätt att använda AI?"
2. Tre sätt att svara: nej, delvis, ja.
3. Mitt svar och varför.
4. Testet som prövar svaret.

**Förslag:** A för GitHub och blogg (utförlig, med källor), B-känsla i LinkedIn-ingressen.

## 4. Ingressförslag (konkreta öppningar)

Varje ingress är skriven så att den bara påstår sådant som är sant för Kent. Markera vad som passar.

1. **Tabellen.** *"Jag har en skärmdump på datorn som heter AI_tester_260925.jpg. Den visar nio rader och fem kolumner, och en av dem är orange."* (Hämtad från det tidigare inlägget, så den är sann. Spetsen: vad mäter siffrorna egentligen, och betyder de något för en teknolog?)
2. **Priset.** *"Det började med en prisuppgift jag inte har kunnat bekräfta: att nyantagna på LTH i höstas kunde köpa ett Gemini-abonnemang för ungefär en tredjedel av priset."* (Sant: du har inte kunnat bekräfta den. Erik eller "min son" nämns inte om du inte vill det.)
3. **Frågan.** *"Är det fusk, eller är det studieteknik?"* (Spetsig fråga som öppnar för nyansen.)

## 5. Testerna (kräver beslut)

**Princip:** testerna är illustrationer, inte studier. De har ett i förväg känt facit, de redovisar vad som kan ha påverkat resultatet (modellen kan ha sett tentan), och texten skriver bara det som är sant.

**Test 1 – en tenta i matematik eller fysik.**
- **STATUS 2026-10-22 (senare): GENOMFÖRT.** Eftersom LTH:s arkiv inte gick att nå används Linköpings universitets öppna tenta TATA41 Envariabelanalys 1 från 2026-08-19, med officiell lösningsskiss. Alla svar stämde. Resultat, metod och förbehåll: [test1_TATA41_2026-08-19/RESULTAT_test1.md](test1_TATA41_2026-08-19/RESULTAT_test1.md). Det är en tenta, en körning, en modell, och agenten hade Python som verktyg; texten ska säga det. Nedan står den ursprungliga planen.
- **Hinder (2026-10-22):** LTH:s offentliga tentaarkiv är inte nåbart för mig. Länkarna till Matematikcentrums gamla tentor och lösningsförslag (till exempel Analys 2, FMAA50) ger 404 hos maths.lu.se, och den äldre servern ctr.maths.lu.se svarar inte. Sidan verkar ha byggts om. Jag har därför ingen tenta med facit att köra mot än.
- **Alternativ:**
  1. Du skickar mig en eller två tidigare LTH-tentor med lösningsförslag (till exempel ur kursens Canvas via din närstående). Vi redovisar bara resultat och länkar, inte tentorna själva.
  2. Vi använder KTH:s öppna tentor med lösningar (till exempel SF1625 Envariabelanalys på KTH:s kurssida) som jämförelse, och säger tydligt att det är KTH, inte LTH.
  3. Du tar fram uppgifter själv med facit.
- **Genomförande:** agenten (Claude Code med Python) löser uppgifterna utan att se facit. Därefter rättas svaren mot lösningsförslaget och mot en egen kontroll med Python (två oberoende källor). Redovisa antal rätt, typ av fel och om agenten själv upptäckte felen.

**Test 2 – en agentuppgift.**
- **STATUS 2026-10-22 (senare): GENOMFÖRT.** Värmeledning i en stav, tre delfrågor, facit låst i förväg med hashvärde. Alla svar stämde (avvikelse 0,0004 °C, 0,0005 °C och 0,4 s mot gränserna 0,05 °C och 1 s). Resultat, metod och förbehåll: [test2_vaermeledning/RESULTAT_test2.md](test2_vaermeledning/RESULTAT_test2.md). Uppgiften formulerades av samma modell som löste den, så texten ska säga att den är en illustration. Nedan står den ursprungliga planen.
- Ett beräkningsproblem där agenten skriver och kör kod, och där resultatet jämförs med en analytisk lösning (till exempel en dämpad svängning eller värmeledning i en stav).
- Det prövar harnessen (hela agenten), inte bara modellen.

**Test 3 – samma uppgifter till Grok (tillagt 2026-10-22).** Kent lägger samma två uppgifter som prompter i en annan AI-modell, så att artikeln kan visa hur en prompt ser ut och hur en annan modell svarar. Prompter och protokoll: [test3_grok/PROMPTER_och_protokoll.md](test3_grok/PROMPTER_och_protokoll.md). Prompt A (tentan) besvarad av Grok 4.7: alla slutsvar stämmer, skillnaden ligger i motiveringarna ([test3_grok/RESULTAT_A_tenta_grok.md](test3_grok/RESULTAT_A_tenta_grok.md)). Prompt B (värmeledning) väntar på svar. Observation för artikeln: tentan skiljer inte modellerna åt, men visar att slutsvaret inte längre är det svåra.

**Rättvisa och sanning i texten:** skriv "jag lät Claude Code lösa uppgifterna och rättade mot facit" bara om det är vad som sker. Redovisa modell, version och datum.

## 6. Kanaler och leverans

| Kanal | Innehåll | Format |
|---|---|---|
| GitHub | Grundtext (disposition A), fullständig källförteckning, testresultat | `.md` i denna mapp |
| Blogg (klel) | Samma text, anpassad, med klickbara källor | Renderad text för inklistring i WordPress |
| LinkedIn | Kortare artikel eller flödesinlägg med länk till bloggen och källförteckning (artikel) | Ett stycke per fysisk rad, i kodblock |

Alla texter i Kents röst, granskade mot `humanizer_ton`, utan AI-märkning. Källhantering enligt `kent-referens-skill`.

## 7. Beslut som Kent behöver ta

1. Rubrik och underrubrik (förslag i avsnitt 1).
2. Disposition A, B eller C (förslag: A).
3. Ingress 1, 2 eller 3 (förslag: 1).
4. Test 1: hur får vi en tenta med facit (alternativ 1, 2 eller 3)?
5. Ska närstående nämnas som "min son", "en närstående" eller inte alls?
6. LinkedIn: flödesinlägg (150–400 ord) eller artikel?
