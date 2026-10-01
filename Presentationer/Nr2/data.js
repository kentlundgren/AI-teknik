// Innehåll för Provbänken (Nr2). Enda källa till frågor och kort.
// Fält och teckengränser: se SPEC.md avsnitt 3 och 4.
// Regel: bara sådant Kent bekräftat. Ändra här, inte i script.js.

const PROVBANKEN = {
  version: "1 okt 2026",

  // Verktyg som länkas till respektive officiella sida när namnet står i ett svar.
  verktygslankar: {
    "MS Copilot": "https://copilot.microsoft.com/",
    "Claude Code": "https://claude.com/product/claude-code",
    "Claude": "https://claude.ai/",
    "Cursor": "https://cursor.com/",
    "GitHub": "https://github.com/",
    "Perplexity": "https://www.perplexity.ai/",
    "ChatGPT": "https://chatgpt.com/",
    "Gemini Notebook": "https://notebook.google.com/",
    "Gemini": "https://gemini.google.com/",
    "Grok": "https://grok.com/"
  },

  // Kategorier som visas som underrubrik under en gemensam överrubrik i kortvyn.
  overgrupper: {
    "Forskningskalkyl": "Kalkyl",
    "Vindkraftskalkyl": "Kalkyl"
  },

  // En beskrivande rad under varje grupprubrik i kortvyn (fråga 3).
  grupptexter: {
    "Granskning": "Där AI-agenter går igenom ett dokument och jag bedömer vilka fynd som stämmer.",
    "Kalkyl": "Interaktiva kalkyler, bland annat för forskningsfinansiering och vindkraft.",
    "Analys och faktakoll": "Analyser där definitioner och siffror kontrolleras mot öppna källor.",
    "Revision och redovisning": "Genomgångar av kontoplan och revision, för kommuner och ideella föreningar.",
    "Förening": "Hjälpmedel, rapporter och analyser, framtagna inom föreningslivet.",
    "Arbetssätt": "Hur jag planerar och bygger, och en karta över hur Claude fungerar.",
    "Kul och lärande": "Experiment och projekt som drivs av nyfikenhet — ett sätt att lära känna AI-modeller och sin yrkesroll på samma gång.",
    "Från uppdrag, utan länk": "Arbeten från uppdrag i kommun. De bygger på uppdragsgivarens material och visas därför utan länk."
  },

  fragor: [
    {
      id: "ai-i-arbetet",
      fraga: "Hur använder jag AI i controllerarbetet?",
      // Fråga med avsnitt: varje avsnitt får rubrik, text, punkter och egna kort (kort_ids).
      avsnitt: [
        {
          rubrik: "Vilka verktyg jag använder till vad",
          svar: [
            { rubrik: "Löpande arbete", text: "MS Copilot för kortare frågor och standardanalyser." },
            { rubrik: "Djupare arbete", text: "Claude, Cursor och GitHub, där jag bygger och förfinar analysverktyg." },
            { rubrik: "Andra åsikt och faktakoll", text: "Perplexity, ChatGPT, Gemini och Grok." },
            { rubrik: "Lära och studera", text: "Gemini Notebook, ett bra verktyg för att lära nytt. Av material, länkar och YouTube-videor går det att skapa podd-liknande ljudsammanfattningar, quiz och mer." }
          ]
        },
        {
          rubrik: "Så lär jag känna modellerna",
          svar: [
            { rubrik: "", text: "Jag jobbar proaktivt med att lära känna olika AI-modellers och olika harness styrkor och svagheter. Ett harness är verktyget som kör modellen, till exempel Claude Code eller Cursor." },
            { rubrik: "", text: "Jag har kört samma uppdrag och skapat samma produkt flera gånger, vid olika tidpunkter, med olika AI-modeller och olika harness. Envist göra samma sak vid olika tillfällen är ett sätt att lära sig AI." }
          ],
          kort_ids: ["vindkraftskalkyler"]
        },
        {
          rubrik: "Så planerar jag ett bygge",
          kort_ids: ["arbetssatt", "claude-kompassen"]
        },
        {
          rubrik: "Så kvalitetssäkrar jag",
          svar: [
            { rubrik: "", text: "Jag kontrollerar AI:ns resultat mot källdata. AI föreslår, jag verifierar. Jag lägger inte persondata i AI-verktyg." }
          ],
          punkter_text: "Så verifierar jag:",
          punkter: [
            "Bokslutstestet: agenternas fynd jämfördes mot dokumentet och jag bedömde vilka som var riktiga.",
            "Kontrollerar text och siffror med en annan modell.",
            "Räknar om summor i Excel utan AI.",
            "Öppnar länkar och läser källor."
          ],
          kort_ids: ["bokslut-2025"]
        }
      ]
    },
    {
      id: "verktyg",
      fraga: "Vilka verktyg och system behärskar jag?",
      svar: [
        { rubrik: "Ekonomisystem", text: "Raindance, Unit4/UBW." },
        { rubrik: "BI och visualisering", text: "Power BI, Hypergene, QlikView/QlikSense, Stratsys." },
        { rubrik: "Budget och prognos", text: "Planacy, Excel (avancerad)." },
        { rubrik: "AI", text: "Claude, ChatGPT, Perplexity, Gemini, Grok, Gemini Notebook, MS Copilot, Cursor." },
        { rubrik: "Egen utveckling", text: "HTML, CSS, JavaScript, GitHub (versionshantering och publicering)." }
      ],
      kort_kategorier: []
    },
    {
      id: "exempel",
      fraga: "Vilka exempel kan jag visa?",
      svar: [
        { rubrik: "", text: "Exemplen nedan går att öppna. Vissa arbeten från uppdrag i kommun nämns utan länk, eftersom de bygger på uppdragsgivarens material." }
      ],
      kort_kategorier: null
    },
    {
      id: "uppdrag",
      fraga: "Vilka uppdrag och branscher passar mig?",
      svar: [
        { rubrik: "Sektorer", text: "Jag är öppen för privat, offentlig, statlig och kommunal verksamhet, och nyfiken på de flesta branscher." },
        { rubrik: "Teknisk bakgrund", text: "Uppdrag där min tekniska bakgrund som civilingenjör (LTH) kommer till nytta, till exempel industri, energi och infrastruktur." }
      ],
      kort_kategorier: []
    },
    {
      id: "skrivit",
      fraga: "Vad har jag skapat och berättat om generativ AI?",
      avsnitt: [
        {
          rubrik: "",
          svar: [
            { rubrik: "", text: "Jag speglar samma ämne ur flera håll: som program, som bloggtext, som inlägg på LinkedIn och ibland som video eller podd. Här är några ämnen, med allt som hör till dem samlat." }
          ],
          lankar: [
            { text: "Alla mina inlägg på LinkedIn", url: "https://www.linkedin.com/in/kentlundgren/" },
            { text: "Mina blogginlägg om AI: Tankar i tiden från Lund", url: "https://klel.wordpress.com/category/ai/" },
            { text: "Mina blogginlägg om AI: Controller, lärare och coach utan gränser reflekterar", url: "https://controllerutangranser.wordpress.com/category/ai/" },
            { text: "Kortare inlägg finns också på X, märkta #nyaAI", url: "https://x.com/search?q=%23nyaAI%20(from%3Akentlundgren)&src=typed_query" }
          ],
          kort_ids: ["ol-tyskland", "statsskuld", "ai-testerna", "vindkraftskalkyler", "rosterna", "harness-minne", "claude-kostnad", "gren-sanning", "arbetssatt", "claude-kompassen", "fredagsquiz"],
          sortera: "start"
        }
      ]
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
      bild: { src: "bilder/Siffergranskare_Sprakgranskare.jpg", alt: "Projeköversikt med två specialiserade AI-agenter: siffergranskaren kontrollräknar tabeller och verifierar summor, och språkgranskaren kontrollerar stavning, grammatik och klarspråk.", w: 913, h: 454 },
      siffror: "paahittade",
      sekretess: "ok"
    },
    {
      id: "ekonomikommunikation",
      kategori: "Forskningskalkyl",
      rubrik: "Kan vi anställa henne i tre år?",
      en_mening: "Interaktiv sida som visar hur fyra grupper klarar ekonomin fyra år framåt.",
      arbetssatt: "Byggd med PRD, låst specifikation och en process-logg över besluten under bygget.",
      verktyg: ["Claude", "Cursor", "HTML/CSS/JavaScript"],
      resultat: "Ett sätt att svara på en chefs fråga om pengarna räcker flera år framåt.",
      lank: "https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/index.html",
      lank_text: "Ekonomikommunikation, fyra grupper fyra år fram",
      bild: { src: "bilder/Fyra_forskargrupper.jpg", alt: "Interaktiv sida med fyra färgkodade grupper (Grupp AA till DD) som var och en visar hur ekonomin klaras fyra år framåt, med resultat i diagram och siffror.", w: 822, h: 515 },
      siffror: "paahittade",
      sekretess: "ok"
    },
    {
      id: "statsskuld",
      start: "2025-06-11",
      kategori: "Analys och faktakoll",
      rubrik: "Statsskuld i Sverige och USA",
      en_mening: "Två sätt att räkna: länderna definierar statsskuld olika.",
      arbetssatt: "En tidigare jämförelse med Gemini gjordes om med verifierade källor och en öppen redovisning av hur sidan togs fram.",
      verktyg: ["Gemini", "Claude", "HTML/CSS/JavaScript"],
      resultat: "Den viktigaste upptäckten: siffrorna är inte direkt jämförbara, eftersom definitionerna skiljer sig.",
      lank: null,
      lank_text: "",
      medier: [
        { ar: "2025", medium: "Program", text: "Interaktiv presentation, byggd med Gemini", url: "https://kentlundgren.se/program/ekonomi/statsskuld/statsskuld_gemini2.html" },
        { ar: "2025", medium: "Bloggtext", text: "Sverige och USA:s statsskuld", url: "https://controllerutangranser.wordpress.com/2025/06/11/sverige-och-usas-statsskuld/" },
        { ar: "2025", medium: "YouTube", text: "Statsskuld Sverige och USA 1970-2025", url: "https://youtu.be/YNELsJQJO7w" },
        { ar: "2025", medium: "Podd", text: "#24 Sveriges och USA:s statsskuld", url: "https://open.spotify.com/episode/4aXJYB0JuHLOyYTcXYVy6K" },
        { ar: "2026", medium: "Program", text: "Statsskuld: Sverige och USA", url: "https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/" },
        { ar: "2026", medium: "Bloggtext", text: "Vad ett beslutsträd om statsskuld lär oss om vibe-kodning", url: "https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/" },
        { ar: "2026", medium: "LinkedIn", text: "Inlägget på LinkedIn", url: "https://www.linkedin.com/posts/kentlundgren_en-kv%C3%A4ll-i-juni-f%C3%B6rra-%C3%A5ret-%C3%B6ppnade-jag-gemini-ugcPost-7487662047422316545-e2C6/" }
      ],
      bild: { src: "bilder/statsskuld-sverige-usa.jpg", alt: "Diagram över statsskuld som andel av BNP för Sverige och USA, 1970 till 2024.", w: 900, h: 581 },
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
      resultat: "Månadsvis statistik med diagram och tabeller.",
      lank: "https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/",
      lank_text: "Bjerreds Saltsjöbad, statistik",
      siffror: "verkliga_foreningens_egna",
      sekretess: "ok"
    },
    {
      id: "samradsguiden",
      kategori: "Förening",
      rubrik: "Samrådsguiden - en guide för att lämna synpunkter under samråd",
      en_mening: "Verktyg för hur privatpersoner och organisationer disponerar synpunkter i ett samråd enligt plan- och bygglagen och miljöbalken.",
      arbetssatt: "Byggd med planering, specifikation och en genomgång av lagtexter och anvisningar. Den har börjat användas inom Naturskyddsföreningen.",
      verktyg: ["Generativ AI", "HTML/CSS/JavaScript"],
      resultat: "Sex delar som alltid är desamma, och en jämförelse av hur olika aktörer ordnar sina synpunkter.",
      lank: "https://kentlundgren.github.io/Codex/Fritid/NF/Samradsguiden/",
      lank_text: "Samrådsguiden",
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "arbetssatt",
      start: "2026-07-31",
      ar: "2026",
      kategori: "Arbetssätt",
      rubrik: "PRD, specifikation och process-logg",
      en_mening: "Jag planerar ett bygge skriftligt innan det byggs: vad och varför, sedan exakt hur.",
      arbetssatt: "Först en PRD, därefter en kort specifikation med acceptanskriterier, och en process-logg under bygget.",
      verktyg: ["Claude", "Cursor", "GitHub"],
      resultat: "Beslut går att spåra i efterhand, och en granskare ser varför något blev som det blev.",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "LinkedIn", text: "Min \"samvaro\" med Claude", url: "https://www.linkedin.com/posts/kentlundgren_jag-sk%C3%A4ms-lite-n%C3%A4r-jag-t%C3%A4nker-p%C3%A5-hur-jag-ugcPost-7489653635350437888-3JPK/" },
        { medium: "Bloggtext", text: "PRD först, sedan CLAUDE.md", url: "https://klel.wordpress.com/2026/07/31/prd-forst-sedan-claude-md/" },
        { medium: "Bloggtext", text: "Behöver jag en spec.md?", url: "https://klel.wordpress.com/2026/08/02/behover-jag-en-spec-md/" },
        { medium: "Mall", text: "PRD-mall, generell", url: "https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md" }
      ],
      bild: { src: "bilder/Min_utveckling_med_generativAI.jpg", alt: "Tre steg i min utveckling med generativ AI: fråga hellre en gång för mycket, ett riktigt samtal innan kod, och en formell PRD (Fas 0) plus ibland en SPEC.", w: 547, h: 311 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "vindkraftskalkyler",
      start: "2014-01-24",
      kategori: "Vindkraftskalkyl",
      rubrik: "Samma vindkraftskalkyl, flera gånger",
      en_mening: "Jag har byggt en vindkraftskalkyl mer än en gång, vid olika tidpunkter och med olika verktyg, för att lära mig hur de skiljer sig.",
      arbetssatt: "Fem perspektiv byggdes i Cursor i juli 2026, en investeringskalkylator med Gemini 3 i augusti 2026 och en ombyggd Next.js-version i september 2026.",
      verktyg: ["Kalkylark", "Claude 3.5 Sonnet", "React", "Cursor", "Gemini 3", "HTML/CSS/JavaScript", "Next.js"],
      resultat: "Versioner av samma kalkyl från 2014 till 2026 som går att öppna och jämföra.",
      lank: null,
      lank_text: "",
      medier: [
        { ar: "2026", medium: "Program", text: "Fem perspektiv (Cursor)", url: "https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html" },
        { ar: "2026", medium: "Program", text: "Investeringskalkylator, 4 MW (Gemini 3)", url: "https://kentlundgren.github.io/AI-teknik/Vindkraft/260814/Gemini3/vindkraftskalkyl_260814.html" },
        { ar: "2026", medium: "Program", text: "Next.js-app", url: "https://vindkraft-ver3.vercel.app" },
        { ar: "2026", medium: "Bloggtext", text: "Ett vindkraftverk, fem sanningar", url: "https://controllerutangranser.wordpress.com/2026/07/03/ett-vindkraftverk-fem-sanningar-vems-kalkyl-raknar-vi-egentligen/" },
        { ar: "2026", medium: "Bloggtext", text: "Att göra vindkraftens ekonomi synlig", url: "https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/" },
        { ar: "2025", medium: "Bloggtext", text: "Vindkraftskalkyl med chattbot", url: "https://controllerutangranser.wordpress.com/2025/06/27/vindkraftskalkyl-med-chatbot/" },
        { ar: "2025", medium: "YouTube", text: "Vindkraftskalkyl med chattbot", url: "https://youtu.be/lOgErZLI-6E" },
        { ar: "2024", medium: "Bloggtext", text: "Vindkraftskalkyl med hjälp av AI", url: "https://controllerutangranser.wordpress.com/2024/10/22/vindkraftskalkyl-med-hjalp-av-ai/", info: "I oktober 2024 var det Anthropics Claude 3.5 Sonnet som gällde. Jag lyckades få fram kalkylen med den gratis modellen. Bloggtexten länkar till programmet och till en video." },
        { ar: "2024", medium: "YouTube", text: "Vindkraftskalkyl med hjälp av AI - Anthropics Claude", url: "https://youtu.be/JSoxry9Xpr0", info: "I videon går jag igenom många olika AI-modeller, i princip alla som gällde i oktober 2024." },
        { ar: "2024", medium: "Program", text: "Vindkraftskalkyl 19, React 18 utan JSX", url: "https://kentlundgren.se/kalkyler/vindkraftskalkyl.html", info: "Nummer 19 i namnet betyder att det är version 19. Här höll jag och AI mycket på med React och JSX. Det gjordes för att man skulle få svaret direkt, utan att trycka på en beräkna-knapp. Det var kul och intressant att kunna bygga så med AI. Nu kan jag med AI:s hjälp bygga med vanlig HTML, CSS och JavaScript, utan React, och ändå få svaret direkt när man ändrar en cell. Det tyckte jag var magiskt, och jag tycker fortfarande att det är lite märkvärdigt." },
        { ar: "2024", medium: "Program", text: "Vindkraftskalkyl 25, React 18 och JSX", url: "https://kentlundgren.se/kalkyler/vindkraftskalkyl25.html", info: "Nummer 25 i namnet betyder att det är version 25. Innan jag kunde hantera GitHub fick jag börja om med en ny fil för varje version. När jag bad generativ AI förbättra kalkylen kunde den göra den sämre eller skapa en bugg som hängde hela programmet, och då gick det inte att ångra. Jag fick då återgå till de gamla filerna. Även här använde jag React med JSX, för att få svaret direkt utan en beräkna-knapp." },
        { ar: "2024", medium: "Bloggtext", text: "Vindkraftskalkyl med generativ AI och React", url: "https://controllerutangranser.wordpress.com/2024/11/18/vindkraftskalkyl-med-generativ-ai-och-react-html-integration-for-responsiv-design/" },
        { ar: "2024", medium: "Sida", text: "Vindkraftsekonomi: kalkylark och AI-kalkyl", url: "https://kentlundgren.se/miljo/energi/vindkraftsekonomi.html", info: "Samlingssida, senast ändrad 22 oktober 2024 enligt serverns datum. Den länkar till äldre kalkyler, bland annat från 2014 och 2022." },
        { ar: "2022", medium: "Kalkylark", text: "Lönsamhet för 4 MW vindkraftverk", url: "https://docs.google.com/spreadsheets/d/1mpdXLRknRO8vfQEzeCByqYeB5bVRuyWXRBKOR_eyZl0/edit?gid=702234592#gid=702234592" },
        { ar: "2022", medium: "Bloggtext", text: "Lönsamhet för 4 MW vindkraftverk", url: "https://kentlundgren.blogspot.com/2022/09/lonsamhet-for-4-mw-kraftverk.html" },
        { ar: "2014", medium: "Bloggtext", text: "Lönsamhet för stora (3 MW) vindkraftverk", url: "https://kentlundgren.blogspot.com/2014/01/lonsamhet-for-stora-3-mw-vindkraftverk.html" }
      ],
      bild: { src: "bilder/vindkraft-fem.jpg", alt: "Illustration av ett vindkraftverk i ett landskap, omgivet av fem symboler för olika parter.", w: 900, h: 600 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "claude-kompassen",
      start: "2026-07-29",
      ar: "2026",
      kategori: "Arbetssätt",
      rubrik: "Claude-kompassen",
      en_mening: "Min bild av hur jag jobbar med Claude, Cursor och GitHub: från PRD, via styrfiler och val av yta, till publicering på GitHub Pages.",
      arbetssatt: "",
      verktyg: ["Claude", "HTML/CSS/JavaScript"],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Program", text: "Claude-kompassen", url: "https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/#claude" },
        { medium: "Bloggtext", text: "En bild av Claudes ekosystem", url: "https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/" },
        { medium: "LinkedIn", text: "Vilken är din Claude favorit?", url: "https://www.linkedin.com/pulse/vilken-%C3%A4r-din-claude-favorit-kent-lundgren-atqye/" }
      ],
      bild: { src: "bilder/Claude_kompassen.jpg", alt: "Claude-kompassen som lager: Fas 0 (PRD, ibland SPEC.md) i botten, Fas 1 levande styrfiler (CLAUDE.md, AGENTS.md, SKILL.md), Fas 2 val av yta (CLI, Cursor) och Fas 3 Cursor, Git och GitHub Pages överst.", w: 900, h: 604 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "ol-tyskland",
      start: "2026-07-29",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "Lönar sig resan efter öl?",
      en_mening: "Det började med en resa till Tyskland för att handla billig öl. Jag gjorde en kalkyl för hur många öl som krävs för att resan ska löna sig.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Program", text: "Ölkalkylen", url: "https://kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html" },
        { medium: "Bloggtext", text: "Hur många öl till break-even?", url: "https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/" },
        { medium: "LinkedIn", text: "Inlägget på LinkedIn", url: "https://www.linkedin.com/posts/kentlundgren_jag-l%C3%A4rde-mig-n%C3%A5got-ov%C3%A4ntat-n%C3%A4r-jag-byggde-ugcPost-7488022289553285121-9g5y/", not: "drygt 4 000 visningar, per 30 sep 2026" }
      ],
      bild: { src: "bilder/ol-break-even.jpg", alt: "Rader av ölburkar på ett bord.", w: 900, h: 506 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "ai-testerna",
      start: "2026-09-25",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "Vad mäter AI-testerna egentligen?",
      en_mening: "Vad händer när modellen vet att den testas? Utgår från en tabell över AI-tester.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Program", text: "AI-testerna, en genomgång", url: "https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/" },
        { medium: "Bloggtext", text: "Vad mäter AI-testerna egentligen", url: "https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/" },
        { medium: "LinkedIn", text: "Inlägget på LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7509242756939223041/" }
      ],
      bild: { src: "bilder/ai-tester.jpg", alt: "Tabell med resultat för fem AI-modeller i nio olika tester.", w: 888, h: 702 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "rosterna",
      start: "2026-09-18",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "Rösterna efter ChatGPT",
      en_mening: "Vem har hållit fast, och vem har glidit? Ett inlägg om hur fyra röster i AI-debatten förändrats.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Program", text: "Sidan med de fyra rösterna", url: "https://ai-teknik-4-roster.vercel.app/" },
        { medium: "Bloggtext", text: "Generativ AI: farligt, farligt eller harligt, harligt?", url: "https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/" },
        { medium: "LinkedIn", text: "Inlägget på LinkedIn", url: "https://www.linkedin.com/posts/kentlundgren_r%C3%B6sterna-efter-chatgpt-vem-har-h%C3%A5llit-fast-activity-7506712196756881409-BhVM" }
      ],
      bild: { src: "bilder/Max_Tegmark_med_flera.jpg", alt: "Fyra rutor med Max Tegmark, Olle Häggström, Nick Bostrom och Anders Sandberg, var och en med en kort beskrivning av hur rösten förändrats.", w: 900, h: 426 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "harness-minne",
      start: "2026-08-26",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "Harness, agenter och minne",
      en_mening: "Två texter som bygger på samma YouTube-video: vad ett harness är, och skillnaden mellan projektinstruktioner, en skill, en projektfil och minnet.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "LinkedIn", text: "Harness och agenter, vad är det?", url: "https://www.linkedin.com/pulse/harness-och-agenter-vad-%C3%A4r-det-kent-lundgren-aq8qe" },
        { medium: "Bloggtext", text: "Minnesanvändning i Claudes ekosystem", url: "https://klel.wordpress.com/2026/08/26/minnesanvandning-i-claudes-ekosystem/" },
        { medium: "Källa", text: "When to Build Your Own Agent Harness, Harrison Chase", url: "https://www.youtube.com/watch?v=HI2q3ci3Iuc", not: "video, Sequoia Capital" }
      ],
      bild: [
        { src: "bilder/Harness_och_agenter.jpg", alt: "Handritad skiss där en AI-agent omsluter ett harness, en LLM och ett kontext.", w: 607, h: 345 },
        { src: "bilder/minne-claude.jpg", alt: "Schema där en agent innehåller ett harness, som i sin tur består av en modell och ett kontext, med finetuning och minne som följder.", w: 900, h: 508 }
      ],
      bildtext: "Skissen är min egen. Schemat är en bild ur Sequoia Capitals video.",
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "claude-kostnad",
      start: "2026-08-04",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "Ligger jag i fas med Claude?",
      en_mening: "Om jag ligger i fas med mitt Claude-abonnemang, eller är övertrasserad, utifrån sidan Usage i claude.ai.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Program", text: "Claude-kostnad, verktyget", url: "https://kentlundgren.github.io/Ovrigt/Claude_kostnad/index.html" },
        { medium: "Bloggtext", text: "Ligger jag i fas med Claude?", url: "https://klel.wordpress.com/2026/08/04/ligger-jag-i-fas-med-claude/" }
      ],
      bild: { src: "bilder/i-fas-claude.jpg", alt: "Illustration av en björn vid en mätare som visar att 31 procent av abonnemanget är förbrukat efter 10 procent av tiden.", w: 900, h: 604 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "gren-sanning",
      start: "2026-08-03",
      kategori: "Ämne i flera medier",
      ar: "2026",
      visas_i_exempel: false,
      rubrik: "En gren för sanningen, en för allmänheten",
      en_mening: "Det gick inte att pusha, och det var tur: om ett litet verktyg och en gren för sanningen, en för allmänheten.",
      arbetssatt: "",
      verktyg: [],
      resultat: "",
      lank: null,
      lank_text: "",
      medier: [
        { medium: "Bloggtext", text: "En gren för sanningen, en för allmänheten", url: "https://klel.wordpress.com/2026/08/03/en-gren-for-sanningen-en-for-allmanheten/" }
      ],
      bild: { src: "bilder/gren-sanning.jpg", alt: "Illustration av ett träd fyllt med böcker och mappar, som står för sanningen, bredvid en planta med en rapport för allmänheten.", w: 900, h: 600 },
      siffror: "inga",
      sekretess: "ok"
    },
    {
      id: "fredagsquiz",
      start: "2025-08-22",
      kategori: "Kul och lärande",
      rubrik: "Fredagsquiz — 23 veckor",
      en_mening: "Varje fredag under 23 veckor skapade jag ett quiz med frågor, svar och fördjupningslänkar om Simrishamns kommuns verksamhet — och delade det med kollegor via en kul-kanal i Teams.",
      arbetssatt: "Frågorna togs fram med Claude (frågor och svar) och Cursor (kodning i HTML, CSS och JavaScript). Varje quiz hade bloggreferenser för den som ville läsa mer. Kärnan var att lära på ett kul och nyfiket sätt — och vecka efter vecka märkte jag att quizen gick snabbare att ta fram och blev bättre. Under samma period lärde jag mig att hantera GitHub, så quizen publicerades också på GitHub Pages.",
      verktyg: ["Claude", "Cursor", "HTML/CSS/JavaScript", "GitHub"],
      resultat: "23 quiz, aug 2025 – jan 2026. Engagerade kollegor via Teams, och gav mig en vana av att bygga och lära med generativ AI varje vecka.",
      lank: null,
      lank_text: "",
      medier: [
        { ar: "2025", medium: "Program",   text: "Fredagsquiz (kentlundgren.se)",                                     url: "https://kentlundgren.se/program/quiz/0/" },
        { ar: "2026", medium: "Program",   text: "Fredagsquiz på GitHub Pages",                                       url: "https://kentlundgren.github.io/quiz/0/" },
        { ar: "2025", medium: "Bloggtext", text: "Från idé till färdig bassängkalkyl",                                url: "https://controllerutangranser.wordpress.com/2025/10/23/fran-ide-till-fardig-bassangkalkyl/" },
        { ar: "2025", medium: "Bloggtext", text: "Varför kostar utomhusbad 40% mer i kemikalier?",                   url: "https://klel.wordpress.com/2025/10/24/varfor-kostar-utomhusbad-40-mer-i-kemikalier-analys-av-drift-och-vattenkvalitet-i-svenska-badanlaggningar/" },
        { ar: "2025", medium: "Bloggtext", text: "Från teori till praktisk kalkyl för kommunala badanläggningar",    url: "https://controllerutangranser.wordpress.com/2025/10/24/nar-tva-perspektiv-mots-fran-teori-till-praktisk-kalkyl-for-kommunala-badanlaggningar/" },
        { ar: "2025", medium: "Bloggtext", text: "Drift eller investering?",                                          url: "https://controllerutangranser.wordpress.com/2025/10/30/drift-eller-investering/" },
        { ar: "2025", medium: "Bloggtext", text: "Budgetpropositionen 2026: Effekter på Kultur/Fritid och Socialtjänst i mindre kommuner", url: "https://controllerutangranser.wordpress.com/2025/11/07/budgetpropositionen-2026-effekter-pa-kultur-fritid-och-socialtjanst-i-mindre-kommuner-grok/" },
        { ar: "2025", medium: "Bloggtext", text: "Det nya regellandskapet för bygglov och byggregler",               url: "https://controllerutangranser.wordpress.com/2025/12/12/det-nya-regellandskapet-for-bygglov-och-byggregler-en-dubbel-omstallning-for-kommunal-samhallsbyggnad/" }
        // Varje quiz innehöll fler bloggreferenser — dessa är ett urval av de bekräftade
      ],
      bild: { src: "bilder/fredagsquiz.jpg", alt: "Urval av fredagsquiz-kort med nummer, datum och ämne — från kommunala badanläggningar och budgetproposition till årsredovisning.", w: 900, h: 707 },
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
