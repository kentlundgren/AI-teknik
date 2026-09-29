// Innehåll för Provbänken (Nr2). Enda källa till frågor och kort.
// Fält och teckengränser: se SPEC.md avsnitt 3 och 4.
// Regel: bara sådant Kent bekräftat. Ändra här, inte i script.js.

const PROVBANKEN = {
  version: "29 sep 2026",

  fragor: [
    {
      id: "ai-i-arbetet",
      fraga: "Hur använder du AI i controllerarbetet?",
      svar: [
        { rubrik: "Löpande arbete", text: "MS Copilot för kortare frågor och standardanalyser." },
        { rubrik: "Djupare arbete", text: "Claude, Cursor och GitHub, där jag bygger och förfinar analysverktyg." },
        { rubrik: "Andra åsikt och faktakoll", text: "Perplexity, ChatGPT och Gemini." },
        { rubrik: "Kvalitetssäkring", text: "Jag kontrollerar AI:ns resultat mot källdata. AI föreslår, jag verifierar. Jag lägger inte persondata i AI-verktyg." }
      ],
      punkter_rubrik: "Så verifierar jag",
      punkter: [
        "Bokslutstestet: agenternas fynd jämfördes mot dokumentet och jag bedömde vilka som var riktiga.",
        "Andra åsikt i en annan modell.",
        "Egna kontrollsummor i Excel.",
        "Källor och länkar öppnas och läses, som i sidan om statsskuld."
      ],
      kort_kategorier: ["Granskning", "Arbetssätt"]
    },
    {
      id: "verktyg",
      fraga: "Vilka verktyg och system behärskar du?",
      svar: [
        { rubrik: "Ekonomisystem", text: "Raindance, Unit4/UBW." },
        { rubrik: "BI och visualisering", text: "Power BI, Hypergene, QlikView/QlikSense, Stratsys." },
        { rubrik: "Budget och prognos", text: "Planacy, Excel (avancerad)." },
        { rubrik: "AI", text: "Claude, ChatGPT, Perplexity, Gemini, MS Copilot." },
        { rubrik: "Egen utveckling", text: "HTML, CSS, JavaScript, Cursor, GitHub." }
      ],
      kort_kategorier: []
    },
    {
      id: "exempel",
      fraga: "Vilka exempel kan jag titta på?",
      svar: [
        { rubrik: "", text: "Exemplen nedan går att öppna. Vissa arbeten från uppdrag i kommun nämns utan länk, eftersom de bygger på uppdragsgivarens material." }
      ],
      kort_kategorier: null
    },
    {
      id: "uppdrag",
      fraga: "Vilka uppdrag och branscher passar?",
      svar: [
        { rubrik: "Sektorer", text: "Jag är öppen för privat, offentlig, statlig och kommunal verksamhet, och nyfiken på de flesta branscher." },
        { rubrik: "Teknisk bakgrund", text: "Uppdrag där min tekniska bakgrund som civilingenjör (LTH) kommer till nytta, till exempel industri, energi och infrastruktur." }
      ],
      kort_kategorier: []
    }
  ],

  kort: [
    {
      id: "bokslut-2025",
      kategori: "Granskning",
      rubrik: "Två AI-agenter granskar ett årsbokslut",
      en_mening: "En siffergranskare och en språkgranskare går igenom ett kommunalt årsbokslut.",
      arbetssatt: "Agenterna föreslog fynd. Jag bedömde vilka som var riktiga räknefel och språkliga förbättringar. En andra körning gav färre allvarliga fel.",
      verktyg: ["Claude Code", "Subagents"],
      resultat: "Första körningen: 2 allvarliga räknefel. Andra körningen: inga allvarliga fel och 71 språkliga förbättringar.",
      lank: "https://kentlundgren.github.io/AI/Bokslut_2025/index.html",
      lank_text: "Bokslut 2025, granskning med AI-agenter",
      siffror: "paahittade",
      sekretess: "ok"
    },
    {
      id: "ekonomikommunikation",
      kategori: "Ekonomikommunikation",
      rubrik: "Kan vi anställa henne i tre år?",
      en_mening: "Interaktiv sida som visar hur fyra grupper klarar ekonomin fyra år framåt.",
      arbetssatt: "Byggd med PRD, låst specifikation och en process-logg över besluten under bygget.",
      verktyg: ["Claude", "Cursor", "HTML/CSS/JavaScript"],
      resultat: "Ett sätt att svara på en chefs fråga om pengarna räcker flera år framåt.",
      lank: "https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/index.html",
      lank_text: "Ekonomikommunikation, fyra grupper fyra år fram",
      siffror: "paahittade",
      sekretess: "ok"
    },
    {
      id: "statsskuld",
      kategori: "Analys och faktakoll",
      rubrik: "Statsskuld i Sverige och USA",
      en_mening: "Två sätt att räkna: länderna definierar statsskuld olika.",
      arbetssatt: "En tidigare jämförelse med Gemini gjordes om med verifierade källor och en öppen redovisning av hur sidan togs fram.",
      verktyg: ["Gemini", "Claude", "HTML/CSS/JavaScript"],
      resultat: "Den viktigaste upptäckten: siffrorna är inte direkt jämförbara, eftersom definitionerna skiljer sig.",
      lank: "https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html",
      lank_text: "Statsskuld: Sverige och USA",
      siffror: "oppna_kallor",
      sekretess: "ok"
    },
    {
      id: "bas-2026",
      kategori: "Revision och redovisning",
      rubrik: "BAS-kontoplanen 2026",
      en_mening: "Genomgång av 272 ändringar i BAS 2026 och vad de betyder för kommunal förvaltning och föreningar.",
      arbetssatt: "",
      verktyg: ["HTML/CSS/JavaScript"],
      resultat: "Analys av kommun-BAS mot privat BAS och en checklista för generell revision.",
      lank: "https://kentlundgren.github.io/Ekonomi/redovisning/BAS/index.html",
      lank_text: "BAS 2026, analys och revision",
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "revision-kalmar-nation",
      kategori: "Revision och redovisning",
      rubrik: "Lekmannarevision i ideella föreningar",
      en_mening: "Guide i tio steg för hur lekmannarevision går till, skriven av en revisor i praktiken.",
      arbetssatt: "",
      verktyg: ["HTML/CSS/JavaScript"],
      resultat: "En lättläst genomgång från bankavstämning till revisionsberättelse.",
      lank: "https://kentlundgren.github.io/Ekonomi/redovisning/revision/",
      lank_text: "Revision i ideella föreningar",
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "bjerred",
      kategori: "Förening",
      rubrik: "Statistik för en kallbadförening",
      en_mening: "Inpasseringar, medlemmar, elförbrukning och en före-och-efter-analys av en ombyggnad.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript", "Firebase"],
      resultat: "Månadsvis statistik med diagram och tabeller som föreningen använder.",
      lank: "https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/",
      lank_text: "Bjerreds Saltsjöbad, statistik",
      siffror: "verkliga_foreningens_egna",
      sekretess: "ok"
    },
    {
      id: "arbetssatt",
      kategori: "Arbetssätt",
      rubrik: "PRD, specifikation och process-logg",
      en_mening: "Jag planerar ett bygge skriftligt innan det byggs: vad och varför, sedan exakt hur.",
      arbetssatt: "Först en PRD, därefter en kort specifikation med acceptanskriterier, och en process-logg under bygget.",
      verktyg: ["Claude", "Cursor", "GitHub"],
      resultat: "Beslut går att spåra i efterhand, och en granskare ser varför något blev som det blev.",
      lank: "https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md",
      lank_text: "PRD-mall, generell",
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "balanskrav",
      kategori: "Modellering",
      rubrik: "Finansiellt utrymme 2027–2031",
      en_mening: "Interaktiv analys av sambandet mellan balanskravsresultat, driftsbudget och investeringsutrymme i en mindre kommun.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      siffror: "anonymiserade",
      sekretess: "ej_publik"
    },
    {
      id: "kof-hyreskostnad",
      kategori: "Modellering",
      rubrik: "Hyresobjekt med olika objektnummer",
      en_mening: "Sammanställning som kopplar ihop två nämnders objektnumrering för interna hyror.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      siffror: "inga",
      sekretess: "ej_publik"
    },
    {
      id: "avstamning",
      kategori: "Granskning",
      rubrik: "Avstämning av balanskonton",
      en_mening: "Förklaring av varför en sen kassarapport inte behöver bokas om, i en version för alla och en för ekonomer.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      siffror: "inga",
      sekretess: "ej_publik"
    },
    {
      id: "investeringsbudget",
      kategori: "Ekonomikommunikation",
      rubrik: "Presentation av en investeringsbudget",
      en_mening: "Interaktiv genomgång av en nämnds prioriterade investeringsprojekt över fem år.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      siffror: "inga",
      sekretess: "ej_publik"
    },
    {
      id: "badkalkyl",
      kategori: "Modellering",
      rubrik: "Driftkostnadskalkyl för badanläggningar",
      en_mening: "Kalkyl över vatten, uppvärmning och kemikalier för en kommuns badanläggningar.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      siffror: "inga",
      sekretess: "ej_publik"
    }
  ]
};
