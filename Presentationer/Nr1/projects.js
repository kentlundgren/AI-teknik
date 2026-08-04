// Fas 1 — åtta projekt, i kronologisk ordning (äldst → nyast).
// Lägg till/ta bort ett projekt = lägg till/ta bort en post här.
// kind: "screenshot" (bild finns i images/) eller "code" (renderas som kodkort, inget bildfil behövs).
// year: visas alltid som en liten badge på sliden — ange bästa kända år (se PRD 4h/4l för källa per post).

const PROJECTS = [
  {
    id: "temperatur",
    kind: "code",
    year: "2023",
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
    year: "2023",
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
      { text: "Anthropic lanserar Claude 3 — Opus, Sonnet och Haiku.", source: { label: "Anthropic, mars 2024", url: "https://www.anthropic.com/news/claude-3-haiku" } },
      { text: "EU:s AI-förordning (AI Act) träder i kraft — världens första heltäckande AI-lag.", source: { label: "Europeiska kommissionen, 1 aug 2024", url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en" } }
    ]
  },
  {
    id: "fredagsquiz",
    kind: "screenshot",
    year: "2025",
    title: "Fredagsquiz",
    caption: "Varje fredag sedan 22 augusti 2025: ett nytt quiz om Simrishamns kommun, frågorna skrivna av Claude, kodat i Cursor. Under hösten flyttade jag projektet till GitHub Pages — och skrev på köpet två egna guider om hur Git och GitHub faktiskt fungerar.",
    url: "https://kentlundgren.github.io/quiz/0/",
    image: "images/fredagsquiz.png"
  },
  {
    id: "milestone-2025-2026",
    kind: "milestone",
    year: "2025–2026",
    facts: [
      { text: "Anthropic lanserar Claude Cowork — AI som sköter hela arbetsuppgifter, inte bara kod.", source: { label: "Anthropic", url: "https://www.anthropic.com/product/claude-cowork" } },
      { text: "Claude Code — verktyget bakom just den här presentationen — blir vardagsmat bland utvecklare." }
    ]
  },
  {
    id: "vindkraftskalkyl",
    kind: "screenshot",
    year: "2026",
    title: "Vindkraftskalkyl",
    caption: "Vindkraftens lönsamhet, synlig och interaktiv — den senaste i en lång rad kalkyler som växt fram från Excel-ark till webbapplikation.",
    url: "https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html",
    image: "images/vindkraftskalkyl.png",
    source: { label: "Läs mer: Att göra vindkraftens ekonomi synlig", url: "https://controllerutangranser.wordpress.com/2026/07/13/att-gora-vindkraftens-ekonomi-synlig/" }
  },
  {
    id: "statsskuld",
    kind: "screenshot",
    year: "2026",
    title: "Statsskuld: Sverige & USA",
    caption: "En interaktiv jämförelse av Sveriges och USA:s statsskulder, byggd tillsammans med Gemini — med fokus på att visa själva beslutsvägen, inte bara slutsiffran.",
    url: "https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html",
    image: "images/statsskuld.png",
    source: { label: "Läs mer: Vad ett beslutsträd om statsskuld lär oss om vibe-kodning", url: "https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/" }
  },
  {
    id: "claude-kompassen",
    kind: "screenshot",
    year: "2026",
    title: "Claude-kompassen",
    caption: "Ett interaktivt verktyg som kartlägger Claudes ekosystem — ytor, styrfiler och de tre faserna i mitt eget AI-drivna arbetssätt, från idé till kod.",
    url: "https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/",
    image: "images/claude-kompassen.png",
    source: { label: "Läs mer: En bild av Claudes ekosystem", url: "https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/" }
  },
  {
    id: "ol-tyskland",
    kind: "screenshot",
    year: "2026",
    title: "Ölkalkylen",
    caption: "Kanske inte den mest seriösa frågan: hur många öl måste du köpa för att resan till Tyskland ska löna sig? Den fick över 3 000 klick på LinkedIn.",
    url: "https://kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html",
    image: "images/ol-tyskland.png",
    source: { label: "Läs mer: Hur många öl till break-even?", url: "https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/" }
  },
  {
    id: "bjerred-saltsjobad",
    kind: "screenshot",
    year: "2026",
    title: "Bjärred Saltsjöbad",
    caption: "Intern styrelsedata — elförbrukning, medlemsstatistik, inpassering — som jag sammanställt och lagt ut öppet på GitHub, så att en styrelse utspridd i sydvästra Sverige kan nå den. Ett litet pro bono-bidrag: transparens som en föreningsmedlem kan ge på köpet.",
    url: "https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/",
    image: "images/bjerred-saltsjobad.png"
  }
];
