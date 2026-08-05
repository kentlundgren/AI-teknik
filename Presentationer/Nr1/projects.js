// Fas 1 — åtta projekt, i kronologisk ordning (äldst → nyast).
// Lägg till/ta bort ett projekt = lägg till/ta bort en post här.
// kind: "screenshot" (bild finns i images/) eller "code" (renderas som kodkort, inget bildfil behövs).
// year: visas alltid som en liten badge på sliden. Månad + år där det är känt (t.ex. "jul2026"),
// annars bara år — se PRD 4h/4l/4r för källa per post. Ordningen styrs av denna precision.

const PROJECTS = [
  {
    id: "temperatur",
    kind: "code",
    year: "apr2023",
    title: "temperatur",
    caption: "2023, tidigt: bad ChatGPT skriva pythonkod som hämtar temperaturen i Sveriges fem största städer från SMHI:s öppna API. Jag körde koden i PyCharm — och den fungerade.",
    url: "https://github.com/kentlundgren/temperatur",
    code:
`<span class="cmt"># temperatur.py — hämtar väder från SMHI:s öppna API</span>
<span class="cmt"># Pythonkod skriven av ChatGPT, hämtat via Poe</span>
<span class="cmt"># Kört i PyCharm</span>

cities = {
    <span class="str">'Stockholm'</span>: <span class="str">'97510'</span>,
    <span class="str">'Göteborg'</span>:  <span class="str">'98210'</span>,
    <span class="str">'Malmö'</span>:     <span class="str">'96430'</span>,
}

<span class="kw">for</span> city, station <span class="kw">in</span> cities.items():
    url = f<span class="str">'.../station/{station}/period/latest-hour/data.json'</span>
    response = requests.get(url)
    <span class="kw">if</span> response.status_code == 200:
        temp = response.json()[<span class="str">'value'</span>][0][<span class="str">'value'</span>]
        print(f<span class="str">'{city}: {temp} °C'</span>)`
  },
  {
    id: "transkribering",
    kind: "code",
    year: "apr2023",
    title: "transkribering",
    caption: "Samma vår, tredje försöket: ett program som skulle transkribera ljud till text med OpenAIs Whisper. Det gick inte hela vägen — hittade aldrig ffmpeg — men det var så jag lärde mig.",
    url: "https://github.com/kentlundgren/transkribering",
    code:
`<span class="cmt"># main.py — tredje försöket</span>
<span class="cmt"># Peppad av podden "Teknik i akademi"</span>
<span class="cmt"># Transkriberar ljud till text med OpenAI Whisper</span>

audio_path = input(<span class="str">"Ange sökväg till ljudfilen: "</span>)

response = requests.get(audio_path)
<span class="kw">with</span> open(<span class="str">"audio.mp3"</span>, <span class="str">"wb"</span>) <span class="kw">as</span> f:
    f.write(response.content)

subprocess.run([<span class="str">"ffmpeg"</span>, <span class="str">"-i"</span>, <span class="str">"audio.mp3"</span>, <span class="str">"audio.wav"</span>])
<span class="cmt"># ...hittar fortfarande inte ffmpeg på rad 29 ;)</span>`
  },
  {
    id: "milestone-2024",
    kind: "milestone",
    year: "2024",
    facts: [
      { text: "Anthropic lanserar Claude 3 — Opus, Sonnet och Haiku (mars 2024). Jämför: Claude 4 kom drygt ett år senare (maj 2025), och Claude 5 ytterligare drygt ett år efter det (juni–juli 2026, i tre steg: Fable, Sonnet, Opus) — tre modellgenerationer på knappt två och ett halvt år.", source: { label: "Anthropic, 4 mars 2024", url: "https://www.anthropic.com/news/claude-3-family" } },
      { text: "EU:s AI-förordning (AI Act) träder i kraft — världens första heltäckande AI-lag.", source: { label: "Europeiska kommissionen, 1 aug 2024", url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en" } }
    ]
  },
  {
    id: "fredagsquiz",
    kind: "screenshot",
    year: "aug2025",
    title: "Fredagsquiz",
    caption: "Varje fredag, 22 augusti 2025 till 6 februari 2026: 23 quiz om Simrishamns kommun, frågorna skrivna av Claude, kodat i Cursor. Under hösten flyttade jag projektet till GitHub Pages — och skrev på köpet två egna guider om hur Git och GitHub faktiskt fungerar. Sedan var det dags för nästa sak att utforska.",
    url: "https://kentlundgren.github.io/quiz/0/",
    image: "images/fredagsquiz.png"
  },
  {
    id: "milestone-2025-2026",
    kind: "milestone",
    year: "2025–2026",
    facts: [
      { text: "Anthropic lanserar Claude Code (februari 2025) — verktyget bakom just den här presentationen.", source: { label: "Anthropic, 24 feb 2025", url: "https://www.anthropic.com/news/claude-3-7-sonnet" } },
      { text: "Anthropic lanserar Claude Cowork (januari 2026) — AI som sköter hela arbetsuppgifter, inte bara kod.", source: { label: "Anthropic, 12 jan 2026", url: "https://claude.com/blog/cowork-research-preview" } }
    ]
  },
  {
    id: "bjerred-saltsjobad",
    kind: "screenshot",
    year: "jan2026",
    title: "Bjärred Saltsjöbad",
    caption: "Intern styrelsedata — elförbrukning, medlemsstatistik, inpassering — som jag sammanställt och lagt ut öppet på GitHub, så att en styrelse utspridd i sydvästra Sverige kan nå den. Ett litet pro bono-bidrag: transparens som en föreningsmedlem kan ge på köpet.",
    url: "https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/",
    image: "images/bjerred-saltsjobad.png"
  },
  {
    id: "vindkraftskalkyl",
    kind: "screenshot",
    year: "jul2026",
    title: "Vindkraftskalkyl",
    caption: "Vindkraftens lönsamhet, synlig och interaktiv — den senaste (2026) i en lång rad kalkyler jag byggt sedan minst 2012, från Excel-ark till webbapplikation.",
    url: "https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html",
    image: "images/vindkraftskalkyl.png",
    imagePosition: "left top",
    source: { label: "Läs mer: Att göra vindkraftens ekonomi synlig", url: "https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/" }
  },
  {
    id: "statsskuld",
    kind: "screenshot",
    year: "jul2026",
    title: "Statsskuld: Sverige & USA",
    caption: "En interaktiv jämförelse av Sveriges och USA:s statsskulder, byggd tillsammans med Claude — med fokus på att visa själva beslutsvägen, inte bara slutsiffran.",
    url: "https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html",
    image: "images/statsskuld.png",
    source: { label: "Läs mer: Vad ett beslutsträd om statsskuld lär oss om vibe-kodning", url: "https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/" }
  },
  {
    id: "claude-kompassen",
    kind: "screenshot",
    year: "jul2026",
    title: "Claude-kompassen",
    caption: "Ett interaktivt verktyg som kartlägger Claudes ekosystem — ytor, styrfiler och de tre faserna i mitt eget AI-drivna arbetssätt, från idé till kod.",
    url: "https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/",
    image: "images/claude-kompassen.png",
    source: { label: "Läs mer: En bild av Claudes ekosystem", url: "https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/" }
  },
  {
    id: "ol-tyskland",
    kind: "screenshot",
    year: "jul2026",
    title: "Ölkalkylen",
    caption: "Kanske inte den mest seriösa frågan: hur många öl måste du köpa för att resan till Tyskland ska löna sig? Den fick över 3 000 klick på LinkedIn.",
    url: "https://kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html",
    image: "images/ol-tyskland.png",
    source: { label: "Läs mer: Hur många öl till break-even?", url: "https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/" }
  },
  {
    id: "begreppslista",
    kind: "glossary",
    title: "Begrepp och verktyg",
    intro: "Varje AI-modell och AI-verktyg ovan var klickbar första gången den nämndes. Här är samtliga, samlade på ett ställe."
  },
  {
    id: "kallforteckning",
    kind: "bibliography",
    title: "Källförteckning",
    intro: "Harvard-format, alfabetisk ordning. Egna blogginlägg som ligger bakom enskilda slides, plus ett fåtal källor som markerar verkliga brytpunkter i AI-utvecklingen.",
    refs: [
      {
        cite: "Anthropic (2024) 'Claude 3 family', Anthropic.",
        url: "https://www.anthropic.com/news/claude-3-family",
        date: "Publicerad 4 mars 2024",
        note: "Familjen Opus, Sonnet och Haiku — startpunkten för den lanseringstakt som jämförs i milstolpen för 2024."
      },
      {
        cite: "Anthropic (2025a) 'Claude 3.7 Sonnet and Claude Code', Anthropic.",
        url: "https://www.anthropic.com/news/claude-3-7-sonnet",
        date: "Publicerad 24 februari 2025",
        note: "Samma annonsering som introducerade Claude Code — verktyget den här presentationen är byggd med — som en command line-forskningsförhandsvisning."
      },
      {
        cite: "Anthropic (2025b) 'Introducing Claude 4', Anthropic.",
        url: "https://www.anthropic.com/news/claude-4",
        date: "Publicerad 22 maj 2025",
        note: "Opus 4 och Sonnet 4, drygt ett år efter Claude 3 — det första tydliga tecknet på den accelererande lanseringstakten."
      },
      {
        cite: "Anthropic (2026a) 'Claude Cowork', Claude by Anthropic.",
        url: "https://claude.com/blog/cowork-research-preview",
        date: "Publicerad 12 januari 2026 (datum bekräftat av Kent samt oberoende nyhetsbevakning, inte synligt vid automatiserad hämtning av sidan)",
        note: "Skiftet från rent kodningsverktyg till AI som sköter hela arbetsuppgifter — nämnt i milstolpen för 2025–2026."
      },
      {
        cite: "Anthropic (2026b) 'Introducing Claude Sonnet 5', Anthropic.",
        url: "https://www.anthropic.com/news/claude-sonnet-5",
        date: "Publicerad 30 juni 2026",
        note: "Fjärde generationsbytet på drygt två år — Fable 5 (9 juni) och Opus 5 (23 juli) lanserades samma sommar."
      },
      {
        cite: "Europeiska kommissionen (2024) 'AI Act enters into force', European Commission.",
        url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en",
        date: "Publicerad 1 augusti 2024",
        note: "Världens första heltäckande AI-lag — en motvikt till den rena modellkapplöpningen i samma milstolpe."
      },
      {
        cite: "Lundgren, K. (2026a) 'Att göra vindkraftens ekonomi synlig', Controller, lärare och coach utan gränser reflekterar.",
        url: "https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/",
        date: "Publicerad 13 juli 2026",
        note: "Bakgrundstext till Vindkraftskalkyl-sliden."
      },
      {
        cite: "Lundgren, K. (2026b) 'Vad ett beslutsträd om statsskuld lär oss om vibe-kodning', Controller, lärare och coach utan gränser reflekterar.",
        url: "https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/",
        date: "Publicerad 28 juli 2026",
        note: "Bakgrundstext till Statsskuld-sliden."
      },
      {
        cite: "Lundgren, K. (2026c) 'En bild av Claudes ekosystem', Tankar i tiden från Lund.",
        url: "https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/",
        date: "Publicerad 29 juli 2026",
        note: "Bakgrundstext till Claude-kompassen-sliden."
      },
      {
        cite: "Lundgren, K. (2026d) 'Hur många öl till break-even?', Controller, lärare och coach utan gränser reflekterar.",
        url: "https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/",
        date: "Publicerad 29 juli 2026",
        note: "Ursprungsinlägget för Ölkalkylen, som fick över 3 000 klick på LinkedIn enligt Kent."
      },
      {
        cite: "Vaswani, A. et al. (2017) 'Attention is all you need', arXiv preprint arXiv:1706.03762.",
        url: "https://arxiv.org/abs/1706.03762",
        date: "Publicerad 12 juni 2017",
        note: "Introducerade Transformer-arkitekturen, som gjorde det möjligt att träna stora språkmodeller parallellt och effektivt — grunden för all modern generativ AI, Claude inräknat."
      }
    ]
  }
];
