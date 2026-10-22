/* Innehåll för presentation 10. Motorn finns i script.js. All text sätts in som text (textContent). */
window.DATA = {

  version: "22 okt 2026",

  /* Förklaringar vid hovring, fokus och tryck. "kalla" säger varifrån förklaringen kommer. */
  begrepp: {
    harness: {
      namn: "harness",
      text: "Programvaran runt en AI-modell som kör den i en loop, ger den verktyg som kodkörning och sökning och håller reda på sammanhanget. Modell plus harness är en AI-agent.",
      kalla: "Min formulering i artikeln. Leverantörsbloggar använder begreppet på samma sätt (inte läst i original), och det är branschbruk, inte en formell standard."
    },
    agent: {
      namn: "AI-agent",
      text: "En AI-modell tillsammans med en harness, som arbetar mot ett mål i flera steg: den tänker, anropar ett verktyg, läser resultatet och fortsätter.",
      kalla: "Min formulering i artikeln. Branschbruk, inte en formell standard."
    },
    gpqa: {
      namn: "GPQA Diamond",
      text: "Ett prov med flervalsfrågor på doktorandnivå i bland annat fysik och kemi, byggt för att inte gå att googla. Experter får 81,2 procent.",
      kalla: "Stanford AI Index 2026, kapitel 2."
    },
    frontiermath: {
      namn: "FrontierMath Tier 4",
      text: "Den svåraste nivån i ett prov med nyskrivna matematikuppgifter där även erfarna matematiker kan behöva timmar eller dagar. Provet är delvis finansierat av OpenAI, som har tillgång till de flesta uppgifterna.",
      kalla: "Stanford AI Index 2026, kapitel 2, och Epoch AI (2026b, 2026c)."
    },
    cranknicolson: {
      namn: "Crank–Nicolson",
      text: "En numerisk metod av andra ordningen för att stega fram en lösning i tiden: felet minskar ungefär fyra gånger när man halverar steget.",
      kalla: "Beskrivningen i resultatfilen för Test 2 (konvergensstudien)."
    },
    richardson: {
      namn: "Richardson-extrapolation",
      text: "Ett sätt att uppskatta felet och få ett bättre värde genom att jämföra resultat från två olika fina rutnät.",
      kalla: "Beskrivningen i resultatfilen för Test 2."
    },
    hash: {
      namn: "hashvärde (SHA-256)",
      text: "Ett fingeravtryck av en fil: samma fil ger alltid samma värde, och ändras filen det minsta blir värdet ett helt annat. Här visades värdet innan uppgiften löstes, så facit gick inte att ändra i efterhand utan att det syntes.",
      kalla: "Beskrivningen av Test 2."
    },
    sympy: {
      namn: "sympy",
      text: "Ett Python-bibliotek för symbolisk matematik, alltså för att räkna med formler och inte bara med tal.",
      kalla: "Artikeln."
    },
    ukä: {
      namn: "UKÄ",
      text: "Universitetskanslersämbetet, myndigheten som följer upp universitet och högskolor.",
      kalla: "Artikeln och regeringens pressmeddelande (2025)."
    },
    hepi: {
      namn: "HEPI",
      text: "Higher Education Policy Institute, en brittisk tankesmedja för högre utbildning som gör en årlig enkät om studenters AI-användning.",
      kalla: "HEPI (2026)."
    },
    lage: {
      namn: "Auto och Build",
      text: "Lägen i Groks app. Skärmbilderna visar läget Auto för tentan och läget Build (Beta) för värmeledningen. Grok kallar själv Build för ett agentläge för kod. Vad lägena gör i detalj förklaras inte i källorna jag använt.",
      kalla: "Skärmbilderna Bild 1 och Bild 3."
    },
    salstentamen: {
      namn: "salstentamen",
      text: "En tentamen som skrivs i en sal under övervakning, till skillnad från en hemtentamen.",
      kalla: "Ingenjören (2026), där begreppet används på samma sätt."
    },
    math: {
      namn: "MATH",
      text: "Ett prov med 12 500 matematikuppgifter på tävlingsnivå, framtaget av forskare vid UC Berkeley och University of Chicago 2021. Människobaslinjen är 90 procent.",
      kalla: "Stanford AI Index 2025, kapitel 2."
    },
    clockbench: {
      namn: "ClockBench",
      text: "Ett prov där modeller ska läsa av analoga klockor. Toppmodellen fick 50,6 procent rätt, människor 90,1 procent.",
      kalla: "Stanford AI Index 2026, kapitel 2."
    },
    terminalbench: {
      namn: "Terminal-Bench 4.0",
      text: "66 uppgifter som löses i en terminal, med tyngd på vetenskapsnära ingenjörsarbete: beräkningsbiologi, fysiksimulering, CAD, formella bevis och GPU-optimering. Resultatet kontrolleras i miljön, inte genom att någon läser ett chattsvar.",
      kalla: "Mitt inlägg om vad AI-testerna mäter (Lundgren 2026b), som beskriver provet."
    },
    benchmark: {
      namn: "benchmark",
      text: "Ett standardiserat prov som används för att jämföra AI-modeller med varandra.",
      kalla: "Mitt tidigare inlägg om vad AI-testerna mäter."
    }
  },

  /* Källor. Alfabetiskt efter författare eller organisation. */
  kallor: [
    { id: "ref-anthropic55", fore: "Anthropic (2026) ", titel: "Introducing Claude Opus 5.5", efter: ", 22 september.", url: "https://www.anthropic.com/claude-opus-5-5", hamtad: "2026-10-22", relevans: "Lanseringssidans tabell: Humanity’s Last Exam 67,7 procent med verktyg för Opus 5.5. Siffrorna är tillverkarens egna." },
    { id: "ref-computersweden", fore: "Computer Sweden (2026) ", titel: "Google lanserar AI-erbjudanden för studenter och lärare", efter: ", av Mikael Markander, 20 augusti.", url: "https://computersweden.se/article/4211925/google-lanserar-ai-erbjudanden-for-studenter-och-larare.html", hamtad: "2026-10-21", relevans: "Svensk nyhet om Googles studentpaket 2026, som visar att erbjudandet lanserades i augusti och vad det innehåller." },
    { id: "ref-epoch-25", fore: "Epoch AI (2025) ", titel: "FrontierMath Tier 4: Battle Royale", efter: ", 13 oktober.", url: "https://epochai.substack.com/p/frontiermath-tier-4-battle-royale", hamtad: "2026-10-22", relevans: "Primärkälla för 13 procent på FrontierMath Tier 4 i oktober 2025 (GPT-5 Pro)." },
    { id: "ref-epoch-26a", fore: "Epoch AI (2026a) ", titel: "New record on FrontierMath Tier 4", efter: ", 23 januari.", url: "https://epochai.substack.com/p/new-record-on-frontiermath-tier-4", hamtad: "2026-10-21", relevans: "Primärkälla för 31 procent på FrontierMath Tier 4 i januari 2026 (GPT-5.2 Pro), mot tidigare rekord på 19 procent." },
    { id: "ref-epoch", fore: "Epoch AI (2026b) ", titel: "GPT-5.4 set a new record on FrontierMath", efter: ", 5 mars.", url: "https://epochai.substack.com/p/gpt-54-set-a-new-record-on-frontiermath", hamtad: "2026-10-21", relevans: "Primärkälla för 38 procent på FrontierMath Tier 4 i mars 2026, och för att OpenAI finansierat benchmarken." },
    { id: "ref-epoch-26c", fore: "Epoch AI (2026c) ", titel: "The Epoch Brief - September 12, 2026", efter: ", 12 september.", url: "https://epochai.substack.com/p/the-epoch-brief-september-12-2026", hamtad: "2026-10-22", relevans: "Primärkälla för att GPT-6 Astra (släppt 3 september 2026) nådde 98 procent på FrontierMath Tier 4 och att Epoch anser provet mättat." },
    { id: "ref-google", fore: "Google (2026) ", titel: "Start the semester with one year of Gemini, on us", efter: ", 19 augusti.", url: "https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/", hamtad: "2026-10-21", relevans: "Primärkälla för studentpaketen: gratis AI Plus utanför USA, paket med AI Pro och YouTube Premium för upp till 70 procent rabatt, inte på skolutfärdade konton." },
    { id: "ref-hepi", fore: "HEPI (2026) ", titel: "Student Generative AI Survey 2026", efter: ", Report 199, Higher Education Policy Institute, mars.", url: "https://www.hepi.ac.uk/wp-content/uploads/2026/03/HEPI-Report-199-Gen-AI-Survey-2026.pdf", hamtad: "2026-10-21", relevans: "Brittisk studentenkät: 95 procent använder AI, och andelen med institutionstillhandahållna verktyg har gått från 9 till 38 procent." },
    { id: "ref-ingenjoren", fore: "Ingenjören (2026) ", titel: "107 Chalmers- och KTH-studenter stängdes av för fusk", efter: ", 19 maj.", url: "https://ingenjoren.se/2026/05/19/107-chalmers-och-kth-studenter-stangdes-av-for-fusk/", hamtad: "2026-10-21", relevans: "Avstängningar för fusk 2025, att AI är den vanligaste orsaken, och varför tekniska högskolor har färre fall." },
    { id: "ref-internetstiftelsen", fore: "Internetstiftelsen (2026) ", titel: "Svenskarna och internet 2026: AI", efter: ".", url: "https://svenskarnaochinternet.se/rapporter/svenskarna-och-internet-2026/ai-artificiell-intelligens/", hamtad: "2026-10-21", relevans: "Svenska användningssiffror, inklusive hoppet från 4 till över 6 av 10 mellan 2025 och 2026." },
    { id: "ref-kth-a", fore: "KTH (u.å.a) ", titel: "AI-tjänster", efter: ".", url: "https://intra.kth.se/it/programvara-o-system/programvara/installera/download/ai-services/ai-tjanster-1.1292301", hamtad: "2026-10-21", relevans: "Vilka AI-tjänster KTH:s studenter har tillgång till. Sidan saknar datum." },
    { id: "ref-kth-b", fore: "KTH (u.å.b) ", titel: "FAQ Generativ AI", efter: ", granskad 9 juli 2026.", url: "https://intra.kth.se/utbildning/e-larande/faqs/faq-generativ-ai-1.1417039", hamtad: "2026-10-21", relevans: "KTH:s hållning: frivillig användning och kursvisa regler." },
    { id: "ref-lewkowycz", fore: "Lewkowycz, A. m.fl. (2022) ", titel: "Solving Quantitative Reasoning Problems with Language Models", efter: ". arXiv:2206.14858, 29 juni.", url: "https://arxiv.org/abs/2206.14858", hamtad: "2026-10-22", relevans: "Primärkälla för att modellen Minerva löste 50,3 procent av MATH-uppgifterna i juni 2022, och för att den siffran gäller majoritetsval bland många försök." },
    { id: "ref-liu", fore: "Linköpings universitet (2026) ", titel: "TATA41 Envariabelanalys 1: gamla tentor", efter: ".", url: "https://courses.mai.liu.se/GU/TATA41/tentor.html", hamtad: "2026-10-22", relevans: "Tentan och lösningsskissen som användes i Test 1 och Test 3. Tentan och lösningarna ägs av Linköpings universitet och är bara länkade." },
    { id: "ref-lundgren-a", fore: "Lundgren, K. (2026a) ", titel: "Generativ AI – farlig farligt, eller härligt härligt", efter: ", 18 september.", url: "https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/", hamtad: "2026-10-22", relevans: "Mitt tidigare inlägg om riskerna, som ger “moget” dess betydelse." },
    { id: "ref-lundgren-b", fore: "Lundgren, K. (2026b) ", titel: "Vad mäter AI-testerna egentligen?", efter: ", 25 september.", url: "https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/", hamtad: "2026-10-22", relevans: "Mitt tidigare inlägg om vad AI-testerna mäter och vilka förbehåll de har." },
    { id: "ref-lundgren-c", fore: "Lundgren, K. (2026c) ", titel: "2026 är året det blev normalt och moget", efter: ", 22 oktober.", url: "https://klel.wordpress.com/2026/10/22/2026-ar-aret-det-blev-normalt-och-moget/", hamtad: "2026-10-22", relevans: "Artikeln som den här sidan bygger på." },
    { id: "ref-lu-a", fore: "Lunds universitet (2026a) ", titel: "AI-verktyg", efter: ".", url: "https://www.campusonline.lu.se/digitala-verktyg/ai-verktyg", hamtad: "2026-10-21", relevans: "Primärkälla för att LU:s studenter har Copilot Chat och Gemini med studentkonto." },
    { id: "ref-lu-b", fore: "Lunds universitet (2026b) ", titel: "Så använder du generativ AI ansvarsfullt", efter: ", uppdaterad 24 augusti 2026.", url: "https://www.campusonline.lu.se/studieteknik/sa-anvander-du-generativ-ai-ansvarsfullt", hamtad: "2026-10-21", relevans: "LU:s riktlinjer för studenter: AI som stöd, aldrig ersättning för eget lärande." },
    { id: "ref-lu-c", fore: "Lunds universitet (2026c) ", titel: "Slutrapport: Uppdrag att ta fram förslag till sammanhållet arbete i användning av artificiell intelligens med särskilt fokus på utbildningsfrågor (STYR 2024-3201)", efter: ".", url: "https://www.ai.lu.se/sites/ai.lu.se/files/2026-01/Slutrapport%20Uppdrag%20att%20ta%20fram%20f%C3%B6rslag%20till%20sammanh%C3%A5llet%20arbete%20i%20anv%C3%A4ndning%20av%20artificiell%20intelligens%20med%20s%C3%A4rskilt%20fokus%20p%C3%A5%20utbildningsfr%C3%A5gor%20(STYR%202024-3201)_0.pdf", hamtad: "2026-10-21", relevans: "Visar läget i december 2025: studenter hade redan tillgång till verktyg via Google." },
    { id: "ref-menlo", fore: "Menlo Ventures (2026) ", titel: "The State of Consumer AI 2026", efter: ", 15 september.", url: "https://menlovc.com/wp-content/uploads/2026/09/menlo_ventures_consumer_ai_report-2026.pdf", hamtad: "2026-10-21", relevans: "Enda källan med andel som betalar för AI: 55 procent av amerikanska AI-användare. Gäller inte studenter, och avsändaren har kommersiellt intresse." },
    { id: "ref-regeringen", fore: "Regeringen (2025) ", titel: "Universitet och högskolor vidtar åtgärder mot AI-fusk", efter: ", 15 oktober.", url: "https://regeringen.se/pressmeddelanden/2025/10/universitet-och-hogskolor-vidtar-atgarder-mot-ai-fusk/", hamtad: "2026-10-21", relevans: "Sammanfattar UKÄ:s kartläggning och att examinationsformer ändras." },
    { id: "ref-scmp", fore: "South China Morning Post (2026) ", titel: "World’s first AI model to earn perfect score at maths Olympiad comes from China’s RedNote", efter: ", av Richard Chen, 22 juli.", url: "https://www.scmp.com/tech/article/3361482/worlds-first-ai-model-earn-perfect-score-maths-olympiad-comes-chinas-rednote", hamtad: "2026-10-22", relevans: "Nyhetskälla för att modellen dots-note-3.0 fick 42 av 42 poäng vid matematikolympiaden i juli 2026. Inte kontrollerad hos olympiadens arrangörer." },
    { id: "ref-aiindex25", fore: "Stanford HAI (2025) ", titel: "Artificial Intelligence Index Report 2025, kapitel 2: Technical Performance", efter: ".", url: "https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter2_final.pdf", hamtad: "2026-10-21", relevans: "Utgångsnivåer 2023–2024 för GPQA och FrontierMath." },
    { id: "ref-aiindex26", fore: "Stanford HAI (2026) ", titel: "Artificial Intelligence Index Report 2026, kapitel 2: Technical Performance", efter: ".", url: "https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_2_technical.pdf", hamtad: "2026-10-21", relevans: "Nivåerna 2025–tidigt 2026, olympiadguldet, och varningarna om ojämn förmåga och felaktiga benchmark-frågor." }
  ],

  /* Tabell 1. status: belagt | delvis | inte_belagt */
  belagg: [
    { id: "b1", nr: 1, belagg: "Användningen exploderade 2025–2026", status: "belagt", kallor: ["ref-internetstiftelsen", "ref-hepi"], forklaring: "Internetstiftelsen: från 4 till över 6 av 10 svenskar använder AI-tjänster, 9 av 10 bland födda på 2000-talet. HEPI: 95 procent av brittiska studenter." },
    { id: "b2", nr: 2, belagg: "Lärosäten tillhandahåller verktygen", status: "belagt", kallor: ["ref-lu-a", "ref-lu-c", "ref-kth-a"], forklaring: "Belagt för LU (Copilot Chat och Gemini med studentkonto). Delvis för KTH, som har Copilot Chat men inte ChatGPT och ser över Gemini." },
    { id: "b3", nr: 3, belagg: "Examinationen anpassas", status: "belagt", kallor: ["ref-regeringen", "ref-ingenjoren"], forklaring: "Lärosäten har ändrat styrdokument och examinationsformer och infört fler salstentor. Samtidigt är AI nu den vanligaste orsaken till avstängning för fusk." },
    { id: "b4", nr: 4, belagg: "Modellerna är tillräckligt bra för civilingenjörer i matematik och naturvetenskap", status: "delvis", kallor: ["ref-aiindex26", "ref-epoch-26c", "ref-anthropic55"], forklaring: "Stark förmåga på varje trappsteg: MATH 97,9 %, GPQA 93 % mot experters 81,2 %, FrontierMath Tier 4 98 % i september 2026. Men ojämn: klockor, bevis, och 66,4 % på ett prov i ingenjörsnära arbete." },
    { id: "b5", nr: 5, belagg: "Studenter hanterar agenterna bättre än förr", status: "inte_belagt", kallor: [], forklaring: "Ingen mätning hittad. Det här är min bedömning, byggd på min egen upplevelse av att arbeta med en agent i Cursor." }
  ],

  /* Fyra spår för "vem betalar?" */
  spar: [
    { id: "s1", namn: "Studenten själv", belagt: "I USA betalar 48 procent av dem som betalar för AI hela kostnaden själva (vuxna, inte studenter).", hypotes: "Hur det ser ut för svenska studenter har ingen mätt.", kalla: "ref-menlo" },
    { id: "s2", namn: "Familjen", belagt: "I USA har 34 procent av betalarna en familjemedlem eller vän som betalar (vuxna, flera svar kunde anges).", hypotes: "Svenska studenter: inte mätt.", kalla: "ref-menlo" },
    { id: "s3", namn: "Lärosätet", belagt: "LU ger studenterna Copilot Chat och Gemini via studentkontot. KTH ger Copilot Chat. I Storbritannien har andelen med institutionsverktyg gått från 9 till 38 procent på två år.", hypotes: "Vad LU betalar för Gemini har jag inte undersökt.", kalla: "ref-lu-a" },
    { id: "s4", namn: "Leverantören", belagt: "Google lanserade den 19 augusti 2026 ett års gratis AI Plus utanför USA och ett paket med AI Pro och YouTube Premium för upp till 70 procent rabatt i vissa marknader. Erbjudandet gäller inte skolutfärdade konton.", hypotes: "Min gissning: Google står för rabatten för att vinna studenterna tidigt. Uppgiften om Gemini för en tredjedel av priset har jag inte kunnat bekräfta.", kalla: "ref-google" }
  ],

  /* Tabell 2. godkant: ja | nej | ej_bedomt */
  tester: [
    { id: "t1", test: "Tenta, Envariabelanalys 1 (TATA41, 2026-08-19)", modell: "Claude Sonnet 5.5", verktyg: "Claude Code, med Python och sympy", lage: "–", resultat: "Alla slutsvar rätt", avvikelse: "Svaren sparades med tidsstämpel innan lösningsskissen öppnades.", godkant: "ja", forbehall: ["Tentan är från Linköpings universitet, inte LTH.", "Bevisen i uppgift 6 och 7 är inte bedömda av någon tentarättare.", "Agenten hade Python, studenten på tentan hade penna."], lank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test1_TATA41_2026-08-19/RESULTAT_test1.md" },
    { id: "t2", test: "Värmeledning i en stav (facit låst i förväg)", modell: "Claude Sonnet 5.5", verktyg: "Claude Code, ren Python", lage: "–", resultat: "42,843 °C, 20,541 °C och 2424 s. Alla tre rätt.", avvikelse: "0,0004 °C, 0,0005 °C och 0,4 s mot gränserna 0,05 °C och 1 s.", godkant: "ja", forbehall: ["Uppgiften formulerades av samma modell som löste den.", "Fällan med instabil metod var känd i förväg.", "Facit är räknat av samma modell men stämmer med den oberoende numeriska lösningen."], lank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test2_vaermeledning/RESULTAT_test2.md" },
    { id: "t3", test: "Tenta, Envariabelanalys 1 (TATA41, 2026-08-19)", modell: "Grok 4.7 (enligt Groks egen uppgift)", verktyg: "Groks vanliga chatt", lage: "Auto", resultat: "Alla slutsvar rätt", avvikelse: "Motiveringarna skiljer sig, till exempel i uppgift 7a.", godkant: "ja", forbehall: ["Grok säger nej till kod men nämner en snabb numerisk kontroll.", "Uppgifterna gavs som text, inte som bilder.", "Klockslag ej angivet."], lank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test3_grok/RESULTAT_A_tenta_grok.md" },
    { id: "t4", test: "Värmeledning i en stav (facit låst i förväg)", modell: "Inte angivet (svaret: Grok Build)", verktyg: "Grok Build, med kodkörning", lage: "Build (Beta)", resultat: "42,843 °C, 20,541 °C och 2424 s. Alla tre rätt.", avvikelse: "Under 0,0000004 °C och 0,00005 s mot facit.", godkant: "ja", forbehall: ["Körningen tog cirka 10 minuter, och efter cirka 8 minuter ställde jag frågan ”vad händer?”. Det var alltså inte en enda obruten prompt.", "Arbetsloggen visar att Grok också räknade fram den analytiska serien som intern kontroll. Prompten förbjöd serien bara som svar.", "Grok Build kördes enligt mig i en tom mapp utan tillgång till facit, vilket inte går att kontrollera i efterhand.", "Modellens namn är inte känt."], lank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test3_grok/RESULTAT_B_vaermeledning_grok.md" }
  ],

  /* Media (filerna ligger i Grok/Bilder och media/). */
  media: [
    { id: "bild1", typ: "bild", nr: 1, namn: "Prompt A i Groks app (läget Auto)", fil: "Grok/Bilder/Grok_svarar_pa_forsta_fragan.jpg", beskrivning: "Skärmbild av Groks app. I textrutan står början av prompten om tentan i Envariabelanalys 1 (TATA41). Längst ned till höger syns läget Auto.", bredd: 769, hojd: 523 },
    { id: "bild2", typ: "bild", nr: 2, namn: "Groks svar på tentan", fil: "Grok/Bilder/Grok_svarar_pa_forsta_fragan_svaret.jpg", beskrivning: "Lång skärmbild av Groks svar på tentan: slutsvar och motivering för uppgift 1 till 7, följt av tre avslutande rader om modell, kod och sökning. Texten finns också i sin helhet som textfil (länk nedan).", bredd: 771, hojd: 3386, textlank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test3_grok/grok_svar_A_oforandrat.md" },
    { id: "bild3", typ: "bild", nr: 3, namn: "Prompt B i Groks app (läget Build, Beta)", fil: "Grok/Bilder/Grok_Build_svarar_pa_andra_fragan.jpg", beskrivning: "Skärmbild av prompten om värmeledning i en aluminiumstav, med delfrågorna a, b och c. En grön pil som jag lagt dit pekar på läget Build (Beta).", bredd: 796, hojd: 620 },
    { id: "bild4", typ: "bild", nr: 4, namn: "Groks svar på värmeledningen", fil: "Grok/Bilder/Grok_svarar_pa_andra_fragan_svaret.jpg", beskrivning: "Skärmbild av Groks svar: 42,843 °C, 20,541 °C och 2424 s, med en tabell över konvergensstudien (rutnät, temperatur och Richardson-värde) och tre avslutande rader.", bredd: 731, hojd: 837, textlank: "https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/test3_grok/grok_svar_B_oforandrat.md" },
    { id: "video1", typ: "video", nr: 1, namn: "Slutet på hur Grok löser tentan (de sista 15 sekunderna)", fil: "Grok/Bilder/Grok_loser_forsta_uppgiften.mp4", poster: "media/poster_video1.jpg", beskrivning: "Skärminspelning av de sista 15 sekunderna av hur Grok löser tentan i appen: svaret skrivs ut och rullar förbi, bland annat uppgift 4, 5, 6 och 7. Början av lösningen visas inte. Inget ljud.", bredd: 808, hojd: 644, storlek: "1,3 MB" },
    { id: "video2", typ: "video", nr: 2, namn: "Utdrag ur hur Grok löser värmeledningen (3 minuter av cirka 10)", fil: "Grok/Bilder/Grok_loser_andra_uppgiften.mp4", poster: "media/poster_video2.jpg", beskrivning: "Skärminspelning av Groks arbetslogg i läget Build. Hela förloppet tog cirka 10 minuter. Det här är ett utdrag på 3 minuter som jag spelade in, så det är inte i realtid. Loggen visar bland annat att Grok implementerar Crank–Nicolson, kör konvergensstudier och kontrollerar mot den analytiska Fourierserien. Efter cirka 8 minuter ställde jag frågan ”vad händer?”, och Grok svarade att den långa Python-körningen avbrutits innan resultatet hann sparas och att den körde om med en snabbare lösare. Inget ljud.", bredd: 734, hojd: 668, storlek: "12 MB" }
  ],

  /* Diagram 1: resultat över tid. d = datum, g = säkerhet: "dag" | "manad" | "ar" (bara året känt). v = procent. */
  diagram: {
    id: "Diagram1",
    nr: 1,
    namn: "Resultat över tid på sex prov i matematik och naturvetenskap, 2022–2026",
    start: "2022-01-01",
    slut: "2026-12-31",
    hamtat: "2026-10-22",
    referens: { namn: "Experter på GPQA Diamond: 81,2 %", v: 81.2, kalla: "ref-aiindex26" },
    serier: [
      { id: "math", namn: "MATH (tävlingsuppgifter, gymnasienivå)", form: "kors", farg: "#a3243b", punkter: [
        { d: "2022-06-29", g: "dag", v: 50.3, modell: "Minerva 540B (Google)", kalla: ["ref-lewkowycz"], not: "Artikeln lämnades in 29 juni 2022. Siffran gäller majoritetsval bland 64 försök per uppgift. Med ett enda försök var den 33,6 procent." },
        { d: "2025-01", g: "manad", v: 97.9, modell: "OpenAI o3-mini (high)", kalla: ["ref-aiindex25"], not: "Över människobaslinjen på 90 procent. Vid lanseringen 2021 löste modellerna 6,9 procent. Provet är nu så gott som mättat." }
      ] },
      { id: "gpqa", namn: "GPQA Diamond (doktorandnivå, fysik och kemi)", form: "cirkel", farg: "#1f4e8c", punkter: [
        { d: "2023", g: "ar", v: 38.8, modell: "GPT-4", kalla: ["ref-aiindex25"], not: "Resultat 2023 enligt AI Index 2025. Månaden anges inte." },
        { d: "2024-12", g: "manad", v: 87.7, modell: "OpenAI o3", kalla: ["ref-aiindex25", "ref-aiindex26"], not: "Lanserades i december 2024. Första modellen över experternas 81,2 %." },
        { d: "2025", g: "ar", v: 93.0, modell: "Toppmodeller 2025", kalla: ["ref-aiindex26"], not: "AI Index 2026 skriver att “mean accuracy” nådde 93 procent 2025. Månaden och modellen anges inte." }
      ] },
      { id: "hle", namn: "Humanity’s Last Exam (expertfrågor)", form: "kvadrat", farg: "#b4500a", punkter: [
        { d: "2025-02", g: "manad", v: 8.8, modell: "OpenAI o1", kalla: ["ref-aiindex25"], not: "AI Index 2025 hämtade siffran ur provets artikel i februari 2025." },
        { d: "2025", g: "ar", v: 38.3, modell: "Bästa system 2025", kalla: ["ref-aiindex26"], not: "Ökning med 30 procentenheter på ett år enligt AI Index 2026. Inställningen (med eller utan verktyg) anges inte." },
        { d: "2026-09-22", g: "dag", v: 64.4, modell: "Claude Opus 5.5, utan verktyg", kalla: ["ref-anthropic55", "ref-lundgren-b"], not: "Lanserades 22 september 2026. Anthropic anger 67,7 procent med verktyg (webbsökning och kodkörning). Siffran utan verktyg, 64,4 procent, återges i mitt inlägg ur Anthropics systemkort. Tillverkarens egna siffror." }
      ] },
      { id: "fm", namn: "FrontierMath Tier 4 (forskningsnivå)", form: "triangel", farg: "#1d7a4a", punkter: [
        { d: "2025-10-13", g: "dag", v: 13, modell: "GPT-5 Pro", kalla: ["ref-epoch-25"], not: "Nytt rekord enligt Epoch AI den 13 oktober 2025." },
        { d: "2026-01-23", g: "dag", v: 31, modell: "GPT-5.2 Pro", kalla: ["ref-epoch-26a"], not: "Epoch AI den 23 januari 2026. Tidigare rekord var 19 procent. AI Index 2026 räknar samma resultat (31,3 procent) till slutet av 2025." },
        { d: "2026-03-05", g: "dag", v: 38, modell: "GPT-5.4 Pro", kalla: ["ref-epoch"], not: "Epoch AI den 5 mars 2026." },
        { d: "2026-09-12", g: "dag", v: 98, modell: "GPT-6 Astra", kalla: ["ref-epoch-26c"], not: "Modellen släpptes 3 september 2026; Epoch rapporterade resultatet den 12 september och anser att provet nu är mättat (alla uppgifter har lösts av någon modell). En sekundär källa uppger att Epoch reviderade provet i juni 2026. Det har jag inte kunnat bekräfta, och det kan göra jämförelsen med tidigare siffror osäker." }
      ] },
      { id: "imo", namn: "Matematikolympiaden IMO (poäng av 42)", form: "romb", farg: "#7a3e9d", punkter: [
        { d: "2024", g: "ar", v: 66.7, modell: "AlphaProof och AlphaGeometry 2", kalla: ["ref-aiindex26"], not: "28 poäng, silver. Experter översatte uppgifterna till ett formellt språk, och beräkningen tog dagar." },
        { d: "2025", g: "ar", v: 83.3, modell: "Gemini Deep Think", kalla: ["ref-aiindex26"], not: "35 poäng, guld. Löste uppgifterna på vanligt språk inom tidsgränsen på 4,5 timmar." },
        { d: "2026-07", g: "manad", v: 100, modell: "dots-note-3.0 (RedNote)", kalla: ["ref-scmp"], not: "Bara en nyhetskälla: South China Morning Post skrev 22 juli 2026 att modellen fick 42 poäng av 42. Jag har inte kunnat kontrollera det hos olympiadens arrangörer, och en sekundär källa uppger att bara två av sex AI-system som påstås ha fått full poäng bedömdes via olympiadens officiella kanal." }
      ] },
      { id: "matharena", namn: "MathArena (nya tävlingsuppgifter)", form: "plus", farg: "#006d77", punkter: [
        { d: "2025-11", g: "manad", v: 83, modell: "Ledande modeller", kalla: ["ref-aiindex26"], not: "Ungefär 83 procent enligt AI Index 2026." },
        { d: "2025-12", g: "manad", v: 97, modell: "Ledande modeller", kalla: ["ref-aiindex26"], not: "97 procent i december 2025. Gäller svar som kan rättas automatiskt. På bevisuppgifter presterar modellerna sämre." }
      ] }
    ],
    anm: [
      "Årsbanden börjar den 1 januari. Punkten ligger på den dag källan anger. När bara månaden är känd visas en kort sträng, och när bara året är känt visas en lång vågrät sträng över hela året med punkten i mitten: den exakta tidpunkten inom året är då okänd.",
      "Varje punkt är en modell eller ett system vid en viss tidpunkt, så modellerna byter längs vägen. Diagrammet visar hur toppen flyttats, inte hur en enskild modell utvecklats. Streckad linje betyder att det går mer än två år mellan två punkter.",
      "Proven är olika svåra och mäter olika saker. Ett prov som nått nära 100 procent kan inte visa mer, och då byggs svårare prov. GPQA, Humanity’s Last Exam och FrontierMath fanns inte 2022 (de tillkom 2023, februari 2025 och november 2024), och därför har de inga punkter före dess.",
      "Det grå fältet längst till höger är tiden efter 22 oktober 2026, då jag hämtade källorna. Siffror från 2026 är i flera fall tillverkarnas eller provens skapares egna, och AI Index 2026 varnar för att vissa benchmark innehåller ogiltiga frågor (mellan 2 och 42 procent)."
    ]
  }
};
