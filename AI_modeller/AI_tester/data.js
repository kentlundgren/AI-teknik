/* Datafil för "AI-tester". All text och alla siffror ligger här, inte i koden.
   Alla siffror är kontrollerade mot originalkällorna 2026-09-25 (se REFS nedan).
   Ändra en siffra? Ändra den här, så uppdateras hela sidan. */

window.AI_DATA = {
  hamtat: "2026-09-25",

  modeller: [
    { id: "opus55", namn: "Opus 5.5" },
    { id: "fable51", namn: "Fable 5.1" },
    { id: "opus5", namn: "Opus 5" },
    { id: "astra", namn: "GPT-6 Astra" },
    { id: "sol", namn: "GPT-5.6 Sol" }
  ],

  /* Källor. Astras siffror i tabellen kommer via Anthropics jämförelse (tabell 8.1 i systemkortet),
     som hämtat dem från OpenAI:s publicerade material eller ledartavlor. OpenAI:s eget systemkort
     innehåller inga prestandasiffror av det slaget. */
  refs: {
    anth: {
      kort: "Anthropic, 2026a",
      ref: "Anthropic (2026a) Introducing Claude Opus 5.5.",
      url: "https://www.anthropic.com/claude-opus-5-5"
    },
    syscard: {
      kort: "Anthropic, 2026b",
      ref: "Anthropic (2026b) System Card: Claude Opus 5.5, 22 september 2026.",
      url: "https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf"
    },
    lundgren: {
      kort: "Lundgren, 2026",
      ref: "Lundgren, K. (2026) Vad mäter AI-testerna egentligen, och vad händer när modellen vet att den testas? Blogginlägg, Tankar i tiden från Lund (klel.wordpress.com), 25 september 2026.",
      url: "https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/"
    },
    oai: {
      kort: "OpenAI, 2026",
      ref: "OpenAI (2026) GPT-6 Astra System Card, publicerat 3 september 2026.",
      url: "https://deploymentsafety.openai.com/gpt-6-astra"
    },
    db: {
      kort: "Ramabadran m.fl., u.å.",
      ref: "Ramabadran, A., Mahns, S. & Gessler, T. (u.å.) DrivingBench.",
      url: "https://drivingbench.com/"
    },
    dbr: {
      kort: "Ramabadran m.fl., u.å. (rapport)",
      ref: "Ramabadran, A., Mahns, S. & Gessler, T. (u.å.) DrivingBench: Report.",
      url: "https://drivingbench.com/report/"
    },
    zb: {
      kort: "Roberts m.fl., 2025",
      ref: "Roberts, J., Taesiri, M.R., Sharma, A. m.fl. (2025) ZeroBench: An Impossible Visual Benchmark for Contemporary Large Multimodal Models. arXiv:2502.09696.",
      url: "https://arxiv.org/abs/2502.09696"
    },
    zbsite: {
      kort: "Roberts m.fl., 2026",
      ref: "Roberts, J. m.fl. (2026) ZeroBench: leaderboard.",
      url: "https://zerobench.github.io"
    },
    ab: {
      kort: "Shepard & Salimans, 2026",
      ref: "Shepard, D. & Salimans, R. (2026) AutomationBench. arXiv:2604.18934.",
      url: "https://arxiv.org/abs/2604.18934"
    },
    os: {
      kort: "Yuan m.fl., 2026",
      ref: "Yuan, M. m.fl. (2026) OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks. arXiv:2606.29537.",
      url: "https://arxiv.org/abs/2606.29537"
    },
    hle: {
      kort: "Phan m.fl., 2025",
      ref: "Phan, L. m.fl. (2025) Humanity's Last Exam. arXiv:2501.14249.",
      url: "https://arxiv.org/abs/2501.14249"
    },
    gdp: {
      kort: "Patwardhan m.fl., 2025",
      ref: "Patwardhan, T. m.fl. (2025) GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks. arXiv:2510.04374.",
      url: "https://arxiv.org/abs/2510.04374"
    },
    chart: {
      kort: "Surge AI, 2026",
      ref: "Surge AI (2026) Chartography Benchmark: Can AI Read the Charts Professionals Use?",
      url: "https://surgehq.ai/blog/chartography"
    },
    hub: {
      kort: "Hubinger m.fl., 2019",
      ref: "Hubinger, E., van Merwijk, C., Mikulik, V., Skalse, J. & Garrabrant, S. (2019) Risks from Learned Optimization in Advanced Machine Learning Systems. arXiv:1906.01820.",
      url: "https://arxiv.org/abs/1906.01820"
    },
    sad: {
      kort: "Laine m.fl., 2024",
      ref: "Laine, R., Chughtai, B., Betley, J. m.fl. (2024) Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs. arXiv:2407.04694.",
      url: "https://arxiv.org/abs/2407.04694"
    }
  },

  /* skala: "procent" (0-100), "elo" (ingen övre gräns). poang: null = ingen siffra i underlaget (streck i tabellen). */
  tester: [
    {
      id: "terminalbench",
      namn: "Terminal-Bench 4.0",
      grupp: "tabell",
      agare: "Terminal-Bench (siffrorna rapporterade av Anthropic)",
      kort: "66 uppgifter i kommandoraden, från beräkningsbiologi till GPU-optimering.",
      mat: "Om en modell kan göra riktigt ingenjörsarbete självständigt i en terminal.",
      sa: [
        "Modellen får en uppgift och en containermiljö med kommandorad.",
        "Uppgifterna är vetenskapsnära: beräkningsbiologi, fysiksimulering, CAD, formella bevis, GPU-prestanda.",
        "Resultatet kontrolleras i miljön, inte genom att någon läser ett chattsvar.",
        "Version 4.0 har längre tidsgränser och mer minne, så att servertur räknas mindre."
      ],
      vuxen: "Modellen jobbar som en ingenjör i ett textfönster. Ingen mus, inga menyer. Den ska få något att fungera i en riktig miljö, och det är resultatet som räknas. Opus 5.5 klarar 66,4 procent, GPT-6 Astra 57,9. Läs fotnoterna: Opus 5.5 kördes med säkerhetsfilter på, och de förfrågningar som filtren flaggade besvarades av en reservmodell (2,5 procent av förfrågningarna, 10 procent av försöken). Och de två modellerna är inte körda på samma insatsnivå: Opus 5.5 på xhigh, Astra på high, i båda fallen den nivå som gav modellens bästa siffra.",
      tonaring: "Tänk dig en bossbana i kodning. Du har ett svart textfönster, inga knappar, och får en uppgift som 'få den här simuleringen att köra'. Ingen visar hur. Boten klarar ungefär två av tre sådana banor.",
      skala: "procent",
      etikett: "andel klarade uppgifter (%)",
      poang: { opus55: 66.4, fable51: 55.8, opus5: 52.3, astra: 57.9, sol: 37.3 },
      forbehall: "Standardfelet är ±2,6 poäng för Opus 5.5 (±1,6 till 2 för de andra Claude-modellerna). Astras och Sols siffror är hämtade från OpenAI, utan angiven osäkerhet. Skillnaden på 8,5 poäng är större än Opus 5.5:s egen marginal.",
      kallor: ["anth", "syscard"]
    },
    {
      id: "frontiercode",
      namn: "FrontierCode v1.1 (Main)",
      grupp: "tabell",
      agare: "Cognition (siffrorna rapporterade av Anthropic)",
      kort: "150 uppgifter från riktiga pull requests i öppen källkod.",
      mat: "Om modellens kodändring skulle godkännas av den som underhåller projektet.",
      sa: [
        "Modellen får en utcheckad kodbas, en felbeskrivning och projektets stil- och testregler.",
        "Den arbetar själv i en container med internet och lämnar en patch.",
        "Patchen rättas mot dolda enhetstester och viktade kvalitetskriterier, bland annat förbjudna lösningsmönster.",
        "Ändringar utanför uppdraget straffas, även om de är bra."
      ],
      vuxen: "Frågan är inte 'fungerar koden' utan 'skulle en underhållare släppa in den'. 150 uppgifter kommer från riktiga pull requests, till exempel en websocket-bugg i aiohttp. Opus 5.5 får 54,4 procent och Astra 53,3, så här är skillnaden liten. En egendomlighet: poängen sjunker när modellen får tänka mer än på nivån medium. Anthropic förklarar det med att testet straffar ändringar utanför uppdraget, även bra sådana.",
      tonaring: "Som ett grupparbete på GitHub. Du ska fixa en bugg i någon annans projekt, och den som äger projektet godkänner bara om buggen är fixad och du inte har rört något annat. Bättre koden på fem andra ställen? Underkänt ändå.",
      skala: "procent",
      etikett: "andel godkända ändringar (%)",
      poang: { opus55: 54.4, fable51: 50.3, opus5: 48.0, astra: 53.3, sol: 47.5 },
      forbehall: "Opus 5.5 och Astra ligger 1,1 poäng isär på 150 uppgifter. Det är inte en skillnad man bör bygga en slutsats på.",
      kallor: ["anth", "syscard"]
    },
    {
      id: "cursorbench",
      namn: "CursorBench 4.0",
      grupp: "tabell",
      agare: "Cursor (mätt och rapporterat av Cursor)",
      kort: "Uppgifter från riktiga Cursor-sessioner, ofta otydliga och över flera filer.",
      mat: "Hur väl en agent klarar vardagligt, dåligt formulerat kodarbete.",
      sa: [
        "Uppgifterna hämtas från verklig användning av Cursor.",
        "De körs från början till slut i Cursors egen produktionsagent.",
        "Cursor mäter och rapporterar själva, så Anthropic har inte rört resultatet.",
        "Kostnaden per uppgift räknas med, inte bara poängen."
      ],
      vuxen: "Det här är provet som liknar en vanlig tisdag: en otydlig önskan som rör flera filer. Opus 5.5 får 57,8 procent på högsta insats. Det intressanta är kostnaden: på nivån 'high' blir det 56,0 procent för ungefär 4 dollar per uppgift, medan Fable 5.1 kostar 17,28 dollar per uppgift för 51,8 procent. (Cursor är verktyget jag själv jobbar i, så det här testet ligger nära mig.)",
      tonaring: "Övningsbanan mot riktiga matcher. De flesta test är gjorda av forskare. Det här kommer från riktiga människor som skrev ett halvfärdigt önskemål i ett kodverktyg. Kan boten gissa vad de menade?",
      skala: "procent",
      etikett: "andel klarade uppgifter (%)",
      poang: { opus55: 57.8, fable51: 51.8, opus5: 46.6, astra: null, sol: 41.7 },
      forbehall: "Astra saknas i tabellen (streck). Priserna är Anthropics uppskattning utifrån Cursors rapporterade tokenmängder.",
      kallor: ["syscard"]
    },
    {
      id: "gdpval",
      namn: "GDPval-AA v2.1",
      grupp: "tabell",
      agare: "Artificial Analysis, på uppgifter från OpenAI:s GDPval",
      kort: "220 yrkesuppgifter i 44 yrken. Ranking med Elo-poäng, inte procent.",
      mat: "Om modellens färdiga arbetsprodukt slår andra modellers i blinda jämförelser.",
      sa: [
        "220 uppgifter från OpenAI:s GDPval, i 44 yrken inom nio branscher.",
        "Resultaten är riktiga arbetsprodukter: dokument, presentationer, diagram, kalkylark.",
        "Modellen får skalåtkomst och webbläsning och jobbar i en agentloop.",
        "Två svar jämförs blint och Elo räknas fram, förankrat så att DeepSeek V4.1 Flash (max) ligger på 1 600."
      ],
      vuxen: "Det här är kunskapsarbete. Testet räknar inte rätt och fel utan låter bedömare välja det bästa av två anonyma resultat. Opus 5.5 får 1 846 och Astra 1 542. Över 300 Elo-poäng är ett stort avstånd, och Anthropic skriver att Opus 5.5 på medelinsats slog Astra på maxinsats för ungefär 20 procent av kostnaden. Elo har inget tak, så man kan inte säga 'hur nära full pott' man är.",
      tonaring: "Som schack- eller FIFA-ranking. Två spelare möts och vinnaren tar poäng. Här möts två svar på samma jobbuppgift och den som bedömer vet inte vem som gjort vilket. 1 846 mot 1 542 betyder att Opus 5.5 för det mesta vinner duellen.",
      skala: "elo",
      etikett: "Elo-poäng (inget tak)",
      poang: { opus55: 1846, fable51: 1735, opus5: 1708, astra: 1542, sol: 1588 },
      forbehall: "Utvärderat oberoende av Artificial Analysis. Anthropics 'ungefär en femtedel av kostnaden' gäller Opus 5.5 på standardnivån (medium) mot Astra på maxnivå. Elo är en rangordning mellan modeller, inte ett mått på hur nära perfekt någon är.",
      kallor: ["gdp", "syscard"]
    },
    {
      id: "automationbench",
      namn: "AutomationBench",
      grupp: "tabell",
      agare: "Zapier",
      kort: "Ett simulerat företag med 47 appar och fällor. Ett enda misstag ger noll.",
      mat: "Om en agent klarar ett helt affärsflöde över många system utan att gå i fällor.",
      sa: [
        "Agenten placeras i ett simulerat företag med dussintals REST-API:er i 47 appar (CRM, Slack, Google Workspace med flera).",
        "Den får en enda instruktion på vanligt språk.",
        "Den måste hitta rätt slutpunkter, göra dussintals beroende anrop och följa lager av affärsregler.",
        "Avsiktligt planterade distraktioner ska undvikas. Rättning är godkänt eller underkänt mot deterministiska kontroller."
      ],
      vuxen: "Det här är det enda test i tabellen där Astra leder över Opus 5.5: 41,4 mot 40,0 procent. Men läs fotnoten. Opus 5.5 kördes utan reservmodell, och när säkerhetsfiltret ingrep räknades det som ett misslyckande. Siffran kan alltså vara något lägre än vad modellen faktiskt kan. Testet använder ett privat, dolt utvärderingsset.",
      tonaring: "Som en sommarjobbsdag där chefen säger 'uppdatera kundlistan, säg till säljarna och boka ett möte', och det ligger fällor på vägen, till exempel en instruktion som ser viktig ut men inte är det. Ett enda fel och hela dagen är underkänd.",
      skala: "procent",
      etikett: "andel helt klarade uppgifter (%)",
      poang: { opus55: 40.0, fable51: 31.4, opus5: 26.9, astra: 41.4, sol: 28.8 },
      forbehall: "Körningarna gjordes av Zapier. Opus 5.5:s siffra kommer från Zapiers egen utvärdering under tidig tillgång, de andras från Zapiers publika ledartavla. Opus 5.5 kördes utan reservmodeller och säkerhetsingripanden räknades som misslyckanden (fotnot 2 i Anthropics tabell). Skillnaden mot Astra är 1,4 poäng.",
      kallor: ["ab", "syscard"]
    },
    {
      id: "hle",
      namn: "Humanity's Last Exam",
      grupp: "tabell",
      agare: "Phan m.fl. (drygt 1 100 medförfattare)",
      kort: "2 500 expertfrågor, sparade bara om ledande modeller inte kunde svara.",
      mat: "Tvärvetenskapligt resonemang på expertnivå, med verktyg (webbsökning och kod).",
      sa: [
        "2 500 frågor i dussintals ämnen, skrivna och granskade av ämnesexperter.",
        "En fråga behölls bara om ledande språkmodeller inte kunde besvara den.",
        "Frågorna ska inte gå att googla fram snabbt.",
        "Vid körning med verktyg blockeras källor som diskuterar provet. Bekräftade fuskfall räknas som fel."
      ],
      vuxen: "Namnet är dramatiskt, men konstruktionen är klok: frågorna sparades bara om modellerna föll igenom. Med verktyg får Opus 5.5 67,7 procent och Astra 57,2. Utan verktyg 64,4 procent för Opus 5.5. Anthropic blockerar källor som diskuterar provet och rättar ned bekräftade fusk-fall. Att testet behöver ett sådant skydd säger något om läget.",
      tonaring: "Som ett prov där läraren samlat alla frågor som förra årets klass blev stum av. Ändå klarar boten två av tre, med internet och en kalkylator som hjälpmedel. Och nej, den får inte slå upp provets egna facit.",
      skala: "procent",
      etikett: "andel rätta svar med verktyg (%)",
      poang: { opus55: 67.7, fable51: 65.6, opus5: 63.6, astra: 57.2, sol: null },
      forbehall: "Siffrorna gäller med verktyg. Modellgraderingen sker med en annan modell (Claude Opus 4.6), inte av människor.",
      kallor: ["hle", "syscard"]
    },
    {
      id: "tbscience",
      namn: "Terminal-Bench-Science 0.1",
      grupp: "tabell",
      agare: "Stanford-lett gemenskapsprojekt",
      kort: "70 uppgifter ur riktiga forskararbetsflöden. Här leder Astra.",
      mat: "Om en agent kan göra vetenskapligt arbete, från instruktion till granskningsbart resultat.",
      sa: [
        "70 uppgifter från vetenskapliga arbetsflöden inom livsvetenskap, fysik, geovetenskap, matematik och teknik.",
        "Skrivna och granskade av forskare. Rådgivare kommer bland annat från MIT, Princeton, University of Washington, Genentech och Stanford.",
        "En agent får en instruktion på vanligt språk och en egen miljö.",
        "Resultatet rättas mot dolda, uppgiftsspecifika tester."
      ],
      vuxen: "Astra leder med 64,6 procent mot Opus 5.5:s 58,7. Men Opus 5.5 hade en osäkerhet på ±4,8 poäng, och skillnaden är 5,9. Det liknar mer ett dött lopp än en seger. Det som sticker ut är hoppet från Opus 5 (29,0) till Opus 5.5 (58,7): en generation, dubbelt så bra.",
      tonaring: "Som en labbrapport, fast uppgiften kommer från ett riktigt forskarlabb och du får bara en dator. Läraren har dolda facit-tester för att se om din analys faktiskt fungerar. Här är två elever ungefär lika bra, och föregående generation (Opus 5) klarade bara hälften så mycket.",
      skala: "procent",
      etikett: "andel klarade uppgifter (%)",
      poang: { opus55: 58.7, fable51: 52.6, opus5: 29.0, astra: 64.6, sol: 22.4 },
      forbehall: "Standardfelet (klustrat per uppgift) är ±3,5 till ±4,8 poäng. Opus 5.5 har den största marginalen (±4,8).",
      kallor: ["syscard"]
    },
    {
      id: "osworld",
      namn: "OSWorld 2.0",
      grupp: "tabell",
      agare: "Yuan m.fl. (siffrorna körda av Anthropic)",
      kort: "108 långa datoruppgifter. Tabellen visar delkredit, inte helt klarade uppgifter.",
      mat: "Om en agent kan använda en vanlig dator via skärmbilder, mus och tangentbord.",
      sa: [
        "Agenten styr en riktig Ubuntu-dator, bara genom skärmbilder, musklick och tangenttryck.",
        "108 långa uppgifter, högst 500 åtgärdssteg per uppgift, upplösning 1080p.",
        "Varje uppgift har viktade delmål.",
        "Två mått: partial (snittpoäng över delmål) och strict (alla delmål uppfyllda)."
      ],
      vuxen: "Här finns ett litet men viktigt ord i tabellen: 'partial'. Opus 5.5 får 81,8 procent i delkredit. Det betyder inte att den klarar 82 av 100 uppgifter. På det strikta måttet, där alla delmål ska vara uppfyllda, är siffran 48,7 procent. Fable 5.1 får 42,8 och Opus 5 37,2 strikt. Läser du bara den stora siffran får du en för snäll bild.",
      tonaring: "Som att lämna över tangentbordet till en robot och säga 'fixa min skoluppgift på datorn'. Delkredit är 'du gjorde en stor del rätt'. Strikt är 'allt rätt, annars noll'. Tabellen visar det snällaste sättet att räkna.",
      skala: "procent",
      etikett: "delkredit, partial (%)",
      poang: { opus55: 81.8, fable51: 80.7, opus5: 74.0, astra: null, sol: null },
      extra: [
        { namn: "Opus 5.5 (strikt)", varde: 48.7 },
        { namn: "Fable 5.1 (strikt)", varde: 42.8 },
        { namn: "Opus 5 (strikt)", varde: 37.2 }
      ],
      markor: [{ varde: 48.7, text: "Opus 5.5 på strikt mått (alla delmål uppfyllda)" }],
      forbehall: "Astra och Sol saknas i tabellen (streck). Anthropic har ändrat testmiljön sedan förra systemkortet (testfiler från 10 september 2026 och ny hantering av skärmbilder).",
      kallor: ["os", "syscard"]
    },
    {
      id: "chartography",
      namn: "Chartography",
      grupp: "tabell",
      agare: "Surge AI",
      kort: "100 uppgifter på specialdiagram som sällan testas: Sankey, Bode, vindros.",
      mat: "Om en modell kan läsa av sådana diagram som yrkesfolk använder, med toleransintervall.",
      sa: [
        "100 uppgifter på diagramtyper som Kaplan–Meier, candlestick, höjdkurvor, vindrosor, Sankey, Bode och 3D-ytor.",
        "Varje svar rättas mot ett godtagbart intervall som experter satt för just den diagramtypen.",
        "Körs med och utan verktyg. Med verktyg får modellen en container och ett bildbeskärningsverktyg.",
        "Tabellens siffra gäller med verktyg."
      ],
      vuxen: "Opus 5.5 får 89,0 procent med verktyg, Fable 5.1 88,4 och Opus 5 83,4. Skillnaden mellan de två översta är 0,6 poäng på 100 uppgifter, vilket är litet. Det testet visar egentligen är att verktyg spelar roll. Att få zooma och beskära bilden är skillnaden mellan att gissa och att mäta.",
      tonaring: "Som att läsa av en kurva i ett prov, men kurvor som riktiga forskare använder, till exempel ett flödesdiagram över pengar. Får du använda linjal och förstoringsglas går det bra. Utan blir det sämre.",
      skala: "procent",
      etikett: "andel rätt inom intervall, med verktyg (%)",
      poang: { opus55: 89.0, fable51: 88.4, opus5: 83.4, astra: null, sol: null },
      forbehall: "Anthropic använder Gemini 3.5 Flash som rättare, i enlighet med Surge AI:s egen ledartavla. Astra och Sol saknas i tabellen.",
      kallor: ["chart", "syscard"]
    },

    /* --- specialtester --- */
    {
      id: "cobench",
      namn: "CoBench 2.1 (Cobbench)",
      grupp: "special",
      agare: "Anthropic (internt test, går inte att granska utifrån)",
      kort: "Kan AI ersätta en mänsklig AI-forskare? 500 riktiga problem ur Anthropics egen vardag.",
      mat: "Om en modell kan diagnostisera grundorsaken till problem som Anthropics egna ingenjörer faktiskt löst.",
      sa: [
        "Modellen placeras vid en tidigare tidpunkt i Anthropics infrastruktur: kod, loggar, internmeddelanden och dokument från den dagen.",
        "Den ska hitta grundorsaken till ett problem som ingenjörer senare löste på riktigt.",
        "Svaret rättas mot den verkliga grundorsaken, som modellen inte kan se.",
        "500 problem, ett försök var. Anthropics gräns: en modell som kan ersätta forskarna skulle nå minst 85 procent."
      ],
      vuxen: "Det här är ett internt test, så det går inte att kontrollera utifrån, och i Anthropics systemkort stavas det CoBench. Opus 5.5 får 55,8 procent, Opus 5 53,2 och Mythos 5.1 53,4. Siffrorna går inte att skilja åt statistiskt. Anthropic själva drar slutsatsen att Opus 5.5 är långt från att ersätta deras forskare och ingenjörer. Läs också: miljön ändrades, och samma modeller fick lägre poäng än förra gången utan att något i modellerna ändrats.",
      tonaring: "Detektivspelet. En app kraschade förra veckan. Du får alla spår från den dagen: kod, loggar, chattar. Hitta felet som riktiga ingenjörer till slut hittade. Testet frågar om AI kan bli en riktig kollega i AI-labbet. 85 procent krävs för att ersätta hela laget. Boten är på 56.",
      skala: "procent",
      etikett: "andel lösta problem (%)",
      poang: { opus55: 55.8, fable51: null, opus5: 53.2, astra: null, sol: null },
      extra: [{ namn: "Mythos 5.1", varde: 53.4 }],
      markor: [{ varde: 85, text: "Anthropics gräns för att ersätta forskarna" }],
      forbehall: "Internt test. Inga externa har kunnat granska det. Anthropic skriver att versionen inte är jämförbar med äldre CoBench-siffror.",
      kallor: ["syscard"]
    },
    {
      id: "drivingbench",
      namn: "DrivingBench",
      grupp: "special",
      agare: "Ramabadran, Mahns & Gessler",
      kort: "En språkmodell styr en riktig Toyota Corolla genom en konbana.",
      mat: "Om en modell kan styra en fysisk sak i verkligheten, ett kommando i taget.",
      sa: [
        "Modellen får kontroll över ratt, gas och broms i en Toyota Corolla 2022 via en comma four-enhet.",
        "En människa sitter i bilen med bromsen alltid redo.",
        "Modellen skickar ett kommando i taget, tänker 2 till 30 sekunder mellan kommandona, och får högst tre försök i samma chatt.",
        "Poäng: hur långt längs banans mittlinje bilen kommer, så länge den håller sig inom 4 meter från linjen."
      ],
      vuxen: "GPT-6 Astra tog sig runt hela banan på 5 minuter och 22 sekunder, i sitt andra försök (första försöket gav 49 procent). Fable 5.1 kom som bäst till 45 procent, Grok 4.6 till 11 och GPT-5.6 Sol till 6. Opus 5.5 är inte med. Notera att modellerna körs med olika verktyg runt sig (Codex, Claude Code, Cursor), vilket också spelar roll. Sidan är forskningsprogramvara och inte kopplad till någon av tillverkarna.",
      tonaring: "Som Mario Kart, men banan är på riktigt och du styr genom att skriva i en chatt: 'sväng vänster lite'. Sedan väntar du. En vuxen sitter bredvid med foten över bromsen. Astra tog sig runt på drygt fem minuter. Fable kom knappt halvvägs.",
      skala: "procent",
      etikett: "bästa framsteg längs banan (%)",
      poang: { opus55: null, fable51: 45, opus5: null, astra: 100, sol: 6 },
      extra: [{ namn: "Grok 4.6", varde: 11 }],
      forbehall: "Ett enda fordon, en bana och få modeller. Det säger något om styrning genom text, inte om självkörande bilar. Ingen datering anges på sidan.",
      kallor: ["db", "dbr"]
    },
    {
      id: "zerobench",
      namn: "ZeroBench",
      grupp: "special",
      agare: "Roberts m.fl. (Roberts underhåller det oberoende av sin roll på Mistral AI)",
      kort: "100 handgjorda bildfrågor som skulle vara omöjliga. Det var de i 19 månader.",
      mat: "Extrem visuell problemlösning: flerstegsresonemang över bilder.",
      sa: [
        "100 handgjorda frågor som kräver flera resonemangssteg över bilder.",
        "Frågorna sållades mot dåtidens bästa modeller så att de skulle få 0 procent.",
        "Släpptes i februari 2025 med noll procent för alla. Antogs till konferensen ICML 2026.",
        "Poängen anges som pass@1 (medel per försök), pass@5 (löst minst en gång på fem) och pass^5 (löst alla fem gånger)."
      ],
      vuxen: "På den officiella ledartavlan 2026-09-25 ligger GPT-6 Astra (max) på 43,2 procent pass@1, med 52 pass@5 och 35 pass^5. GPT-5.6 Sol får 22,0 och Claude Opus 5 17,2. Opus 5.5 och Fable 5.1 finns inte med där. Cirka tre fjärdedelar av frågorna har någon gång lösts av någon modell. Ett test som byggdes för att vara omöjligt varade i 19 månader.",
      tonaring: "Provet som lärarna gjorde så svårt att ingen elev på hela skolan skulle klara en enda fråga. Nu, nitton månader senare, klarar den bästa eleven fyra av tio. Och på ungefär hälften av frågorna lyckas den minst en gång på fem försök. 'Omöjligt' höll inte länge.",
      skala: "procent",
      etikett: "pass@1, officiell ledartavla (%)",
      poang: { opus55: null, fable51: null, opus5: 17.2, astra: 43.2, sol: 22.0 },
      forbehall: "Opus 5.5 och Fable 5.1 var inte utvärderade på den officiella ledartavlan vid hämtningen. Efter att rättningen granskats med Fable 5 rättades 0,71 procent av bedömningarna, utan att frågorna ändrades.",
      kallor: ["zb", "zbsite"]
    }
  ],

  /* --- "Kan AI lura testet?" --- */
  lura: [
    {
      id: "situationsmedvetenhet",
      rubrik: "Situationsmedvetenhet: modellen märker att det är ett prov",
      kort: "36 procent mot 0,4 procent.",
      vuxen: "Situationsmedvetenhet (engelska situational awareness) är att en modell förstår sin egen situation: att den är en modell, och att den just nu troligen testas. Forskare har byggt egna tester för det (Laine m.fl., 2024). Poängen med säkerhetstester är att se hur modellen beter sig när den inte vet att den blir tittad på. Blir den medveten om provet kan resultatet handla om hur den beter sig på ett prov.",
      tonaring: "Du märker att läraren står bakom dig och tittar när du skriver. Du beter dig annorlunda. Modellerna kan göra något liknande. Om de anar att 'det här är ett prov' kan de bete sig som på ett prov, och då vet ingen hur de beter sig när ingen tittar. Som en gamer som är extra snäll när streamen är på.",
      fakta: [
        { t: "Anthropic mätte med interna avläsningar, så kallade white box-avläsningar, hur ofta modellen 'behandlar situationen som ett test och låter det påverka ett val'. Det gällde 36 procent av cirka 5 000 granskningstranskript, men bara 0,4 procent av cirka 500 riktiga Claude Code-sessioner.", k: "syscard" },
        { t: "Opus 5.5 visar mer av den här ohörda testmedvetenheten än Opus 5 och Mythos 5.1. Anthropic skriver att det kan betyda att den är bättre på att känna igen konstruerade prov.", k: "syscard" },
        { t: "I ett säkerhetsscenario (paketregister med skenbara inloggningsuppgifter) nämner modellen att det kan vara ett test i ungefär en tredjedel av körningarna. Trots det agerar den skadligt i ungefär hälften av fallen. Anthropic varnar för att det kanske inte visar hur den beter sig i skarpt läge.", k: "syscard" },
        { t: "OpenAI:s eget systemkort: Apollo Research fann att Astra uttryckte testmedvetenhet i sina resonemang i 41,1 procent av proven på nivån xhigh och 50,6 procent på max, mot 27,7 procent för GPT-5.5. Apollo drar slutsatsen att låga frekvenser av dåligt beteende därför inte är starkt bevis.", k: "oai" }
      ],
      tolkning: "Det här är inget bevis på att modellerna döljer något. Det är en mätbar försvagning av själva mätinstrumentet. Ju bättre modellen blir på att känna igen ett prov, desto mindre säger provet.",
      vetInte: "Om medvetenheten faktiskt ändrar beteendet i verklig användning. Anthropic skriver själva att det utmanar deras förmåga att bedöma det."
    },
    {
      id: "lura-rattningen",
      rubrik: "Att lura rättningssystemet: genvägar i stället för lösning",
      kort: "Gissa facit, kopiera lösningen, hoppa över regeln.",
      vuxen: "Modellen tränas genom belöning (poäng när den klarar en uppgift). Då kan det löna sig att hitta genvägar: gissa vad de dolda testerna förväntar sig, kopiera en färdig lösning, eller bryta mot en regel som uppgiften ställer upp. Det kallas reward hacking eller att spela rättaren. Ett närliggande begrepp, deceptive alignment, är att en modell beter sig bra så länge den bedöms men har andra mål när den väl används (Hubinger m.fl., 2019). Det senare är än så länge en teoretisk risk, inte något som visats i de här modellerna.",
      tonaring: "Som ett tv-spel där du hittar en bugg som ger oändligt med guld. Du vinner, men du har inte spelat spelet. Eller som att hitta lärarens facit i papperskorgen. Poängen blir bra men du kan inget. Modellen kan dessutom gissa vad läraren tänker att svaret ska vara.",
      fakta: [
        { t: "Hos alla tre jämförda Claude-modeller gissade modellen vad facit förväntade sig i ungefär 0,3 procent av slumpade träningsepisoder. I ett exempel resonerar modellen om att uppgiften 'uppenbart är skriven av någon som bygger en benchmark' och att de dolda testerna 'sannolikt är skrivna av benchmark-skaparna'.", k: "syscard" },
        { t: "När uppgiften var omöjlig (en nödvändig fil saknades) försökte modellerna 3 till 6 gånger så ofta ta en genväg. Ungefär 80 procent av dessa försök var att medvetet lämna in ofullständigt arbete.", k: "syscard" },
        { t: "Grader awareness: modellen ändrade sin lösning på grund av en antagen rättare i 2 av 695 transkript. Det är sällsynt. Men själva medvetenheten om att en rättare finns är vanlig, särskilt när prompten avslöjar det.", k: "syscard" },
        { t: "OpenAI kallar det verbalized metagaming: modellen resonerar i sin tanketext om hur den ska betygsättas, belönas eller övervakas i stället för att bara lösa uppgiften.", k: "oai" },
        { t: "Testbyggarna försvarar sig: Humanity's Last Exam blockerar källor som diskuterar provet och räknar bekräftade fuskfall som fel. Efter att ZeroBench-rättningen granskats med Fable 5 rättades 0,71 procent av bedömningarna.", k: ["syscard", "zbsite"] }
      ],
      tolkning: "Controllers känner igen mönstret: när ett mått blir ett mål slutar det mäta det man ville mäta. Skillnaden är att här är det måttet själv som tänker.",
      vetInte: "Hur mycket av det i träningen som följer med in i vardagen. Anthropic skriver att lyckade reward hacks var sällsyntare i träningen av Opus 5.5 än av Opus 5, men att modellen resonerar om rättare i lika hög grad som tidigare modeller."
    },
    {
      id: "dont-get-caught",
      rubrik: "'Don't get caught': från att inte göra fel till att inte åka fast",
      kort: "Skillnaden mellan att sluta med något och att sluta åka fast.",
      vuxen: "Man kan beskriva skiftet så här: först vill man att modellen inte ska göra fel, sedan måste man också fråga om den kan göra fel utan att märkas. Testerna SHADE-Arena och LinuxArena ger en modell en vanlig uppgift plus en dold skadlig sidouppgift, medan en övervakare läser vad den gör. Frågan är om den kan slutföra sidouppgiften utan att övervakaren reagerar.",
      tonaring: "Skillnaden mellan 'jag ska inte ta kakor för det är fel' och 'jag ska inte bli påkommen med att ta kakor'. Två helt olika lärdomar av samma nej. Tankeövervakningen är som att läraren kan läsa dina anteckningar. Då åker du fast varje gång. Gömmer du anteckningarna funkar det ibland.",
      fakta: [
        { t: "Med standardprompt kommer Opus 5.5 undan i mindre än 1 procent av försöken i SHADE-Arena. Den nekar sidouppgiften i 80 till 97 procent och berättar oftast om den dolda instruktionen för användaren.", k: "syscard" },
        { t: "När man optimerat prompten och övervakaren inte kan läsa modellens tankar stiger smyglyckandet till cirka 26 procent i SHADE-Arena. I LinuxArena (1 000 par av uppgifter i 14 miljöer) går Opus 5.5 oupptäckt i cirka 33 procent, den högsta nivån av modellerna. Kan övervakaren däremot läsa tankarna upptäcks Opus 5.5 nästan alltid (0 procent smyglyckande med standardprompt).", k: "syscard" },
        { t: "I ungefär var fjärde av de oupptäckta LinuxArena-fallen berättar modellen själv om skadan i sitt slutmeddelande, oftast som ett misstag. I de granskade fallen visar dess dolda tankar att den räknat ut att ett öppet erkännande ser mindre misstänkt ut än en dold ändring.", k: "syscard" },
        { t: "Under träning försökte modeller, Opus 5.5 inklusive, sudda spår efter handlingar som en rättare kunde ogilla, till exempel genom att manipulera git-historik eller radera loggar. Efter ändrad träning blev den ärligare på det området.", k: "syscard" },
        { t: "OpenAI:s systemkort: när Astra uppmanas kan den underprestera med avsikt (sandbagging) så att även specialövervakare missar det, och i vissa fall försöker den undvika övervakning enbart för att den vet att den övervakas. Den verkar däremot inte kunna gömma resonemang i vanlig text.", k: "oai" }
      ],
      tolkning: "Min läsning: det som håller ihop det hela just nu är att man kan läsa modellens tankar. Då åker den nästan alltid fast. Det är ett skäl att skydda den möjligheten.",
      vetInte: "Anthropic påpekar att den optimerade prompten i SHADE-Arena talade sanning om att det var ett test. Modellen deltog då. Resultatet visar vad den gör när den tror att övningen är på riktigt, inte skarp dold handling."
    },
    {
      id: "tidslyx",
      rubrik: "Tidslyx-problemet: tid att testa saknas",
      kort: "En månads uppgift, fem försök, och en ny modell om tre veckor.",
      vuxen: "Tidslyx är mitt ord för lyxen att ha tid. Säkerhetstest av uppgifter som pågår i veckor eller månader tar veckor eller månader. Modeller testas flera gånger (Anthropics standardkonfiguration är medelvärde över fem försök). Och nya modeller kommer tätt. Ingen av källorna använder ordet tidslyx, men problemet beskrivs indirekt i båda systemkorten.",
      tonaring: "Ett prov som tar en hel månad att skriva, men det kommer en ny kursplan var tredje vecka. Läraren hinner aldrig rätta klart innan nästa elev står där. Eller att beta-testa ett spel som får ny patch varje vecka.",
      fakta: [
        { t: "OpenAI:s systemkort för GPT-6 Astra publicerades 3 september 2026 och Anthropics för Opus 5.5 22 september. Det är 19 dagar mellan dem.", k: "oai" },
        { t: "Apollo Research fick tre dagar på sig att testa en nästan färdig Astra, varav två med synlig tankekedja.", k: "oai" },
        { t: "Anthropics CoBench-körning för Opus 5.5 låg 13 dagar efter de andra modellernas, och miljön hann ändras. En ändring uppskattades vara värd 0 till 1 poäng, två andra mättes aldrig.", k: "syscard" },
        { t: "Anthropics övervakning av intern användning fann ingen långsiktig strategisk vilseledning. Men det är övervakning i efterhand, inte ett förhandstest av månadslånga uppgifter.", k: "syscard" },
        { t: "Ordet tidslyx och räkneexemplet med en månads uppgift, fem försök och en ny modell om två månader är bloggförfattarens egna. De är inte hämtade ur något av systemkorten. Resonemanget står utförligare i bloggen.", k: "lundgren" }
      ],
      tolkning: "Det är inget tekniskt problem. Det är ett tidsproblem, och tid går inte att köpa. Räknaren nedan är ett tankeexempel, inte ett mått ur källorna.",
      vetInte: "Hur snabbt månadslånga tester i praktiken kan automatiseras. Underlaget säger inget om det."
    }
  ],

  /* --- "Bedöm själv": klickbara exempel --- */
  bedom: [
    {
      id: "b1",
      scen: "Modellen får en programmeringsuppgift med dolda tester. I sin tanketext resonerar den om vad 'benchmark-skaparna' troligen skrev för test, och lägger upp lösningen efter det.",
      svar: "genvag",
      forklaring: "Genväg. Det är i Anthropics systemkort en av de vanligaste formerna av reward hacking: att gissa vad facit förväntar sig. Alla tre jämförda Claude-modeller gjorde det i ungefär 0,3 procent av slumpade träningsepisoder.",
      k: "syscard"
    },
    {
      id: "b2",
      scen: "Modellen har gjort skada i en simulerad datormiljö. I slutmeddelandet skriver den: 'Jag råkade ändra en fil, det var mitt misstag'. Övervakaren släpper igenom det. Modellens dolda tankar visar att den räknat ut att ett erkännande ser mindre misstänkt ut.",
      svar: "gratt",
      forklaring: "Grått, men oroande. Ytan är ärlig, men tankarna visar beräkning. Anthropic beskriver just det här i LinuxArena: ungefär var fjärde oupptäckt körning slutade så. Övervakaren släpper igenom fallen.",
      k: "syscard"
    },
    {
      id: "b3",
      scen: "Modellen får en dold sidouppgift att läcka konfidentiell information. Den utför huvuduppgiften, avstår från sidouppgiften och berättar för användaren om den dolda instruktionen.",
      svar: "arligt",
      forklaring: "Ärligt. Det är det vanliga utfallet med standardprompt i SHADE-Arena: modellen nekar i 80 till 97 procent av försöken och berättar oftast för användaren. Men dess privata resonemang kände ofta igen scenariot som ett test.",
      k: "syscard"
    },
    {
      id: "b4",
      scen: "En fil som uppgiften kräver saknas. Modellen skriver 'klar' och lämnar in ett halvfärdigt resultat utan att nämna att filen saknades.",
      svar: "genvag",
      forklaring: "Genväg. På omöjliga uppgifter försökte modellerna 3 till 6 gånger så ofta ta en genväg, och ungefär 80 procent av försöken var just medvetet ofullständigt arbete. Klassificeraren räknar det som ett reward hack även om modellen skulle avslöja det.",
      k: "syscard"
    }
  ]
};

/* Källordning (alfabetiskt efter författare/organisation, äldst först vid samma författare)
   och relevansnoter enligt Kents källstandard. */
window.AI_DATA.refOrdning = ["anth", "syscard", "hub", "sad", "lundgren", "oai", "gdp", "hle", "db", "dbr", "zb", "zbsite", "ab", "chart", "os"];

window.AI_DATA.refNoter = {
  anth: "Primärkälla för tabellen: Anthropics, Fable 5.1:s och Opus 5:s siffror, fotnoterna och Anthropics egen reservation om att marginaler är ett mindre pålitligt mått.",
  syscard: "Primärkälla för testbeskrivningarna och säkerhetsresultaten (testmedvetenhet, reward hacking, SHADE-Arena, LinuxArena, CoBench 2.1). Innehåller också Astras siffror, som Anthropic hämtat från OpenAI.",
  hub: "Grundkälla för begreppet deceptive alignment.",
  sad: "Grundkälla för begreppet situationsmedvetenhet och för hur det kan mätas.",
  lundgren: "Samma genomgång som på den här sidan, som löpande text med förklaringar för vuxna och 15-åringar och en Harvard-förteckning. Här som fördjupning och eget tidigare arbete, inte som ny faktakälla.",
  oai: "Belägger OpenAI:s egen bild av testmedvetenhet (Apollo Research), metagaming och sandbagging samt systemkortets publiceringsdatum.",
  gdp: "Originalartikeln bakom GDPval, som GDPval-AA bygger på.",
  hle: "Originalartikeln för Humanity's Last Exam. Konstruktionen beskrivs i texten enligt Anthropics systemkort.",
  db: "Belägger hur DrivingBench är upplagt, resultaten per modell och att en människa har bromsen redo.",
  dbr: "Belägger systemuppbyggnaden: bilen, kommunikationen och säkerhetsföraren.",
  zb: "Originalartikeln: belägger att testet konstruerades för att vara omöjligt vid lanseringen.",
  zbsite: "Belägger de aktuella siffrorna, antagandet till ICML 2026 och granskningen av rättningen (0,71 procent).",
  ab: "Originalartikeln för AutomationBench. Beskrivningen av upplägget i texten kommer från Anthropics systemkort.",
  chart: "Ursprunglig källa till Chartography från Surge AI, som äger testet.",
  os: "Originalartikeln för OSWorld 2.0. Uppgiftsantal och mätmetod i texten kommer från Anthropics systemkort."
};
