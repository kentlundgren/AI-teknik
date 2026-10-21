# Fynd – matematik, naturvetenskap och AI-agenter 2022–2026

**Hör till:** [PRD_presentation_generation_2005.md](PRD_presentation_generation_2005.md) och [FYND_kallor_2026-10-21.md](FYND_kallor_2026-10-21.md)
**Gjord:** 2026-10-21
**Status:** Förberedande genomgång. Uppgifterna är hämtade ur de angivna källorna och är inte kvalitetssäkrade. Kontrollera mot källan innan något används. Webbkällor hämtades 2026-10-21.

## 1. Kents tes (2026-10-21)

*2026 är första året då en teknolog på en teknisk högskola kan lita på AI-modellen i matematik och naturvetenskap, och första året då studenter hanterar allt runt modellen (appar, Cursor, flera agenter) någorlunda väl. Det är första året det är "matematiskt bekvämt" att arbeta med AI-modell plus harness.*

## 2. Begrepp: agent, harness och verktyg

Kents fråga: ska man säga "agenter" i stället för "verktyg"? Svar: ja, i det du beskriver, men orden betyder olika saker.
- **AI-modell:** själva språkmodellen (till exempel GPT, Gemini, Claude).
- **Harness:** programvaran runt modellen som kör loopen "tänk, anropa verktyg, läs resultat, fortsätt", hanterar minne och sammanhang och sätter gränser. I källorna sammanfattas det som *agent = modell + harness* (Hatchworks u.å.; Osmani u.å.). Äldre forskningsord var "scaffolding"; "harness" blev vanligt som produktord under 2026 (min tolkning av källorna). Terminologin är leverantörsdriven, inte en formell standard.
- **AI-agent:** modellen och harnessen tillsammans, när de arbetar mot ett mål med flera steg.
- **Verktyg:** det agenten *anropar* (en räknare, Python, sökning, ett bevisprogram). Ordet "verktyg" är alltså fortfarande rätt om dessa. Appar som Cursor eller Claude Code är *harness-produkter* där agenter körs.
Förslag för texten: skriv "AI-agent (modell + harness)" första gången, förklara "harness" i en parentes och använd "verktyg" bara om det agenten anropar. Källor för definitionen är bloggar och ordlistor från leverantörer, så skriv det som branschbruk.

## 3. Tidslinje: vad modellerna klarade

| Mått | 2023–2024 | 2025 | Tidigt 2026 | Källa |
|---|---|---|---|---|
| GPQA Diamond (doktorandnivå, fysik/kemi/biologi, flervalsfrågor) | GPT-4: 38,8 procent (2023) | 77,3 procent (slutet 2024), 87,7 procent (o3) | 93,0 procent; experter 81,2 procent | AI Index 2025, 2026 |
| FrontierMath Tier 4 (forskningsnivå) | Bästa modell 2,0 procent vid lansering (nov 2024) | 31,3 procent i slutet av 2025 | 38 procent i mars 2026 | AI Index 2025, 2026; Epoch 2026a, b |
| Humanity's Last Exam | Under 10 procent (8,8) | 38,3 procent | – | AI Index 2025, 2026 |
| MathArena (nya tävlingsproblem) | – | Cirka 83 procent (nov 2025) → 97 procent (dec 2025) | – | AI Index 2026 |
| IMO (internationell matematikolympiad) | Silver, 28 poäng (2024, med formell översättning, flera dagar) | Guld, 35 poäng (2025, på naturligt språk inom tidsgränsen) | – | AI Index 2026 |
| GSM8K (skolnivå) | Över 97 procent redan 2024 | – | – | AI Index 2025 |
| SWE-bench Verified (programmeringsuppgifter) | 4,4 procent (2023) | – | Nära 100 procent i slutet av 2025 | AI Index 2025, 2026 |

(Alla siffror ur AI Index 2025 och 2026, kapitel 2, om inget annat anges. Tabell 1 är en sammanställning jag gjort.)

## 4. Vad detta säger om tesen

**Stöd för att 2025–2026 är en brytpunkt:**
- På GPQA Diamond passerade modellerna experter (81,2 procent) mellan slutet av 2024 och tidigt 2026. AI Index 2026 skriver att modeller nu uppnår eller överträffar mänsklig nivå på doktorandnivåfrågor och tävlingsmatematik (AI Index 2026).
- FrontierMath Tier 4 gick från cirka 2 procent (november 2024) till 31 procent (januari 2026, utvärdering gjord manuellt i ChatGPT) och 38 procent (mars 2026). Epoch noterar att fynd tyder på att modellerna inte bara övertränats på de problem OpenAI haft tillgång till (Epoch 2026a, b).
- Sökträffar från augusti–oktober 2026 hävdar att Tier 4 sedan dess blivit "mättad" och att varje problem lösts minst en gång. **Det har jag inte kunnat bekräfta i Epochs egna sidor** och de siffror som nämns skiljer sig mellan sammanställningssajter (till exempel 83–100 procent beroende på sajt och version). Använd inte dessa före kontroll mot Epoch.

**Men: "2026 är första året" är för snävt datumsatt.** Det mesta av språnget i matematik och naturvetenskap skedde 2024–2025. 2025 års IMO-guld och GPQA över expertnivå ligger före 2026. Det som kan hävdas för 2026 är att det blev *normalt* och *brett tillgängligt*.

**Det som talar emot att man "kan lita på" modellerna:**
- **Ojämn förmåga ("jagged intelligence").** Samma modeller som får IMO-guld läser analoga klockor rätt bara i cirka 50 procent av fallen, jämfört med 90 procent för människor (AI Index 2026).
- **Svar är inte bevis.** På MathArena når modeller toppmänniskors nivå på uppgifter med numeriskt svar, men presterar sämre på bevis (AI Index 2026). På IMO-ProofBench varierar resultaten från 7,1 till 91,9 procent mellan modeller, och en del av poängen kan spegla att problemen är kända (AI Index 2026).
- **Mätningarna kan vara felaktiga.** En granskning fann ogiltiga frågor i mellan 2 procent (MMLU Math) och 42 procent (GSM8K) av benchmarkens frågor (AI Index 2026).
- **Högt förtroende trots fel.** AI Index noterar att "high-confidence errors are still common" på Humanity's Last Exam (AI Index 2026).
- **Genvägar.** Epoch beskriver att modellerna ibland löst forskarnas problem via oavsedda genvägar eller en tidigare preprint författaren inte kände till (Epoch 2026a, b).
- **FrontierMath är delvis finansierat av OpenAI,** som har tillgång till de flesta problemen (Epoch 2026b). Epoch håller undan en del för att kunna testa överanpassning.
- **Skolmatematik:** en studie 2026 av AI-chattbotar på bråkproblem fann att ingen av 100 lösningar var helt korrekt på alla delfrågor (Springer 2026; sökträff, ej läst i original).

**Saknas helt:** jag hittade ingen studie som testar nuvarande modeller på verkliga tentor i teknisk högskole-matematik (till exempel envariabelanalys vid LTH, KTH eller Chalmers). Den enda träffen var en GP-artikel från våren 2023 där ChatGPT underkändes på en Chalmers-tenta (inte i matematik).

## 5. Studenternas hantering av agenter

- **Det finns ingen mätning av "studenters förmåga att hantera AI-agenter" på tekniska högskolor** som jag hittat. Det är därför en hypotes i dagsläget.
- Stack Overflow Developer Survey 2026 (12 255 svarande, i huvudsak utvecklare): Claude Code 65,5 procent, GitHub Copilot 58,7 procent, OpenAI Codex 29,5 procent, Cursor 25,5 procent (användning senaste året) (Stack Overflow 2026). Studenters användning av AI-resurser i allmänhet: 63,0 procent 2024 och 73,3 procent 2025 (sökträff från Stack Overflow, ej läst i original). Det mäter utvecklare och generell AI-användning, inte studenter och agenter.
- Anthropic-enkät bland 1 260 samhällsvetare tidigt 2026: bara 20 procent hade börjat använda kodagenter, och forskare vid toppuniversitet var 40 procent mer benägna (sökträff, ej läst i original).
- Cursors tidigare gratisår för studenter har enligt en källa upphört (sökträff, ej kontrollerad).

## 6. Förslag på hur tesen kan skrivas så att den håller

*"Mellan slutet av 2024 och tidigt 2026 gick de bästa AI-modellerna från att klara cirka en tredjedel av graduate-frågorna till att slå experter, och från att knappt kunna forskningsmatematik till att lösa ungefär en tredjedel av den. 2026 är första året då en teknolog kan arbeta med AI-agenter som är tillräckligt bra för att vara en seriös sparringpartner, men förmågan är ojämn, svaren måste kontrolleras och bevis är svårare än svar."*

Skillnaden mot Kents formulering är "sparringpartner" i stället för "lita på", och att datumet är en period (2024–2026), inte ett enda år.

## 7. Förslag på eget, replikerbart test (att diskutera)

Eftersom ingen studie finns kan presentationen innehålla ett eget litet test, i stil med Provbänken: ta ett antal offentliga, tidigare tentamina i matematik eller fysik från en teknisk högskola, låt en eller flera AI-agenter lösa dem med och utan verktyg (Python, räknare), och låt en människa rätta enligt lärarnas egna poängnormer. Redovisa antal rätt, typ av fel och om felen upptäcks av modellen själv. Det kräver (1) att tentorna är offentliga och får användas, (2) att modeller och versioner namnges med datum, (3) att man kan skilja på att modellen redan sett tentan och inte. **Detta är ett förslag att fatta beslut om, inte något som är gjort.**

## 8. Källförteckning (alfabetisk)

*Kursiv text anger varför källan är med. Hämtdatum 2026-10-21.*

- Epoch AI (2026a) *New record on FrontierMath Tier 4*, 23 januari. https://epochai.substack.com/p/new-record-on-frontiermath-tier-4 *Primärkälla för 31 procent på Tier 4 och för observationerna om genvägar och överanpassning.*
- Epoch AI (2026b) *GPT-5.4 set a new record on FrontierMath*, 5 mars. https://epochai.substack.com/p/gpt-54-set-a-new-record-on-frontiermath *Primärkälla för 38 procent på Tier 4, upplysningen att OpenAI finansierat och har tillgång till problemen, och att 42 procent av Tier 4-problemen lösts minst en gång.*
- Hatchworks (u.å.) *Claude Agent Harness: The Runtime That Turns a Model Into an Agent*. https://hatchworks.com/blog/claude/agent-harness/ *Leverantörsblogg som definierar harness; ej läst i original, endast sökträff.*
- Osmani, A. (u.å.) *Agent Harness Engineering*. https://addyosmani.com/blog/agent-harness-engineering/ *Definition av agent som modell plus harness; ej läst i original, endast sökträff.*
- Stack Exchange Inc. (2026) *AI coding agents*, Stack Overflow Developer Survey 2026. https://survey.stackoverflow.co/2026/ai/data/ai-code-agent *Användning av kodagenter bland 12 255 svarande, mest utvecklare.*
- Stanford HAI (2025) *Artificial Intelligence Index Report 2025, kapitel 2: Technical Performance*. https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter2_final.pdf *Utgångsnivåer 2023–2024 för GPQA, FrontierMath, Humanity's Last Exam och GSM8K.*
- Stanford HAI (2026) *Artificial Intelligence Index Report 2026, kapitel 2: Technical Performance*. https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_2_technical.pdf *Nivåerna 2025–tidigt 2026, IMO-guldet, varningarna om ojämn förmåga och felaktiga benchmark-frågor.*

**Kandidater som ännu inte är lästa i original** (inte i en slutlig källförteckning förrän de är det): Epochs egen FrontierMath-sida (om "mättad" Tier 4); IMO 2026:s officiella resultat och hur AI-bidragen bedömdes; Springer (2026) om AI-chattbotar och bråkproblem (ZDM); en studie om hallucinationer hos teknologstudenter (arXiv 2602.17671); Anthropics undersökning av kodagenter bland samhällsvetare; JetBrains utvecklarundersökning 2026; Oversikter av benchmark-bedömning i AI Index.

## 9. Nästa steg

1. Läs Epochs egen FrontierMath-sida för att avgöra om "mättad" stämmer.
2. Hitta en peer-review-studie eller rapport om AI-modellers prestation på universitetsmatematik och ingenjörsämnen 2025–2026 (OECD, Nature, arXiv, Education-forskning).
3. Hitta mätningar av studenters bruk av agenter (Stack Overflow har studentdata, enkäter på lärosäten).
4. Besluta om ett eget replikerbart test (avsnitt 7).
