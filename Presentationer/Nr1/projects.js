// Fas 2 — åtta projekt + åtta årskort (två per år: "Vad som hände" / "Hur jag
// jobbade") + två avslutande referens-slides, i kronologisk ordning.
// Lägg till/ta bort ett projekt = lägg till/ta bort en post här.
// kind: "screenshot" (bild finns i images/) eller "code" (renderas som kodkort, inget bildfil behövs).
// year: visas alltid som en liten badge på sliden. Månad + år där det är känt (t.ex. "jul2026"),
// annars bara år — se PRD 4h/4l/4r för källa per post. Ordningen styrs av denna precision.
//
// kind: "year-card" (variant: "tech"/"personal") — ersatte de gamla "milestone"-korten
// 2026-08-05. Varje fact har en tier (1 = alltid synlig, 2 = lagom+seriös, 3 = bara
// seriös) — se PRD Ändringslogg v24/v27. Respekterar vald hastighet för visningstid
// (till skillnad från de gamla milstolparnas fasta 4 sek), eftersom innehållsmängden
// nu varierar med hastigheten.

const PROJECTS = [
  {
    id: "year-2023-tech",
    kind: "year-card",
    variant: "tech",
    year: "2023",
    label: "Vad som hände",
    facts: [
      { tier: 1, text: "GPT-4 lanseras — den stora kvalitets- och multimodalitetslyften.", source: { label: "OpenAI, 14 mars 2023", url: "https://openai.com/index/gpt-4-research/" } },
      { tier: 1, text: "Claude 2 blir första Claude tillgänglig för allmänheten, inte bara API-partners.", source: { label: "Anthropic, 11 juli 2023", url: "https://www.anthropic.com/news/claude-2" } },
      { tier: 2, text: "Microsoft bygger om Bing med GPT-4-nivå AI — fem veckor före GPT-4:s egen officiella lansering.", source: { label: "Microsoft, 7 feb 2023", url: "https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/" } },
      { tier: 2, text: "Claude 2.1 — 200k tokens kontext, kraftigt minskad hallucination.", source: { label: "Anthropic, 21 nov 2023", url: "https://www.anthropic.com/news/claude-2-1" } },
      { tier: 3, text: "Sam Altman avskedas och återinsätts som vd på OpenAI — på fem dagar.", source: { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Removal_of_Sam_Altman_from_OpenAI" } }
    ]
  },
  {
    id: "year-2023-personal",
    kind: "year-card",
    variant: "personal",
    year: "2023",
    label: "Hur jag jobbade",
    facts: [
      { tier: 1, text: "Löst experimenterande — bad ChatGPT skriva pythonkod, transkriberade ljud med OpenAI Whisper." },
      { tier: 1, text: "Använde mest Perplexity för research." },
      { tier: 2, quote: true, text: "Tyckte det var anmärkningsvärt bra att Perplexity konsekvent visade källor och länkar i svaren — långt innan det blev standard." },
      { tier: 3, text: "Claude fanns, men var ännu inte del av den dagliga verktygslådan." }
    ]
  },
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
    id: "year-2024-tech",
    kind: "year-card",
    variant: "tech",
    year: "2024",
    label: "Vad som hände",
    facts: [
      { tier: 1, text: "Claude 3-familjen lanseras — Opus, Sonnet och Haiku.", source: { label: "Anthropic, 4 mars 2024", url: "https://www.anthropic.com/news/claude-3-family" } },
      { tier: 1, text: "GPT-4o — resonerar i realtid över text, ljud och bild.", source: { label: "OpenAI, 13 maj 2024", url: "https://openai.com/index/hello-gpt-4o/" } },
      { tier: 2, text: "Claude 3.5 Sonnet slår både konkurrenter och den egna Claude 3 Opus.", source: { label: "Anthropic, 20 juni 2024", url: "https://www.anthropic.com/news/claude-3-5-sonnet" } },
      { tier: 2, text: "Sora visas upp — text-till-video i nästan fotorealistisk kvalitet.", source: { label: "OpenAI, 15 feb 2024", url: "https://openai.com/index/sora/" } },
      { tier: 3, text: "Llama 3 — Metas starka öppna modell, fritt nedladdningsbar.", source: { label: "Meta AI, 18 april 2024", url: "https://ai.meta.com/blog/meta-llama-3/" } },
      { tier: 3, text: "EU:s AI-förordning (AI Act) träder i kraft — världens första heltäckande AI-lag.", source: { label: "Europeiska kommissionen, 1 aug 2024", url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en" } }
    ]
  },
  {
    id: "year-2024-personal",
    kind: "year-card",
    variant: "personal",
    year: "2024",
    label: "Hur jag jobbade",
    facts: [
      { tier: 1, text: "Claude Projects blir vändpunkten — dedikerade arbetsytor med egen kunskapsbas, ett RAG-liknande arbetssätt." },
      { tier: 2, text: "Testade AI-verktyg mot varandra: samma prompt till Perplexity och GPT-4 för att bygga ett litet stickfigur-spel (mars)." },
      { tier: 3, quote: true, text: "Det här arbetssättet går längre än att bara skriva bra prompter — det handlar om att aktivt styra vilka källor Claude ska utgå från." }
    ]
  },
  {
    id: "stickfigur-spel",
    kind: "screenshot",
    year: "mar2024",
    title: "Stickfigur Spel",
    caption: "Samma engelska prompt till två olika AI-verktyg — Perplexity och OpenAI:s GPT-4-playground — för att se hur de klarade att generera ett litet JavaScript-spel. Ett av flera ögonblick då jag blev fascinerad, häpen och nästan omtöcknad av vad generativ AI kan göra.",
    url: "https://kentlundgren.se/AI/AIspel/AI_test_240314F.html",
    image: "Bilder/KulSpel_Sticky_spel.gif",
    promptReveal: "Write code for a javascript game where there is a stick figure on the screen.\nThe stick figure move left and right with the A and D buttons and jump with the space bar.\nCoins should also place randomly on the screen where the player can reach them. When a player touches a coin,\nthe coin should disappear and be collected by the player.",
    source: { label: "Läs mer: Testa AI-modeller genom att göra spel", url: "https://controllerutangranser.wordpress.com/2024/03/17/testa-ai-modeller-genom-att-gora-spel/" }
  },
  {
    id: "year-2025-tech",
    kind: "year-card",
    variant: "tech",
    year: "2025",
    label: "Vad som hände",
    facts: [
      { tier: 1, text: "Claude 4 — Opus 4 och Sonnet 4, sammanhängande agentiska arbetsflöden över flera timmar.", source: { label: "Anthropic, 22 maj 2025", url: "https://www.anthropic.com/news/claude-4" } },
      { tier: 1, text: "Claude Code lanseras — agentisk kodning direkt i terminalen.", source: { label: "Anthropic, 24 feb 2025", url: "https://www.anthropic.com/news/claude-3-7-sonnet" } },
      { tier: 2, text: "Resonemangsmodeller (”tänker” i steg innan de svarar) blir branschstandard.", source: { label: "OpenAI, o1/o3 2024–2025", url: "https://openai.com/o1/" } },
      { tier: 2, text: "Claude Opus 4.1 — mätbart bättre kodning och agentiskt resonemang.", source: { label: "Anthropic, 5 aug 2025", url: "https://www.anthropic.com/news/claude-opus-4-1" } },
      { tier: 3, text: "Sonnet 4.5, Haiku 4.5 och Opus 4.5 — fyra nya Anthropic-modeller på fyra månader.", source: { label: "Anthropic, sep–nov 2025", url: "https://www.anthropic.com/news/claude-sonnet-4-5" } }
    ]
  },
  {
    id: "year-2025-personal",
    kind: "year-card",
    variant: "personal",
    year: "2025",
    label: "Hur jag jobbade",
    facts: [
      { tier: 1, text: "Claude Code, Cursor och GitHub blir den dagliga arbetstriangeln." },
      { tier: 2, text: "Samma stickfigur-prompt ett år senare (mars): med Claude 3.7 Sonnet var spelet nästan klart direkt — bara hopphöjden behövde justeras." },
      { tier: 3, text: "Fredagsquiz byggt med precis den kombinationen: frågorna skrivna av Claude, kodat i Cursor." }
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
    id: "year-2026-tech",
    kind: "year-card",
    variant: "tech",
    year: "2026",
    label: "Vad som hände",
    facts: [
      { tier: 1, text: "Claude Cowork lanseras — AI som sköter hela arbetsuppgifter, inte bara kod.", source: { label: "Anthropic, 12 jan 2026", url: "https://claude.com/blog/cowork-research-preview" } },
      { tier: 1, text: "Claude 5 rullas ut i tre steg: Fable, Sonnet och Opus.", source: { label: "Anthropic, jun–jul 2026", url: "https://www.anthropic.com/news/claude-sonnet-5" } },
      { tier: 2, text: "Claude 4.6 — Opus 4.6 och Sonnet 4.6, första Opus-modellen med 1 miljon tokens kontext.", source: { label: "Anthropic, 5 feb 2026", url: "https://www.anthropic.com/news/claude-opus-4-6" } },
      { tier: 3, text: "Fable 5 stängs av globalt tre dagar efter lansering, efter ett amerikanskt exportkontrollbeslut — tillbaka tre veckor senare.", source: { label: "Anthropic, 9 jun 2026", url: "https://www.anthropic.com/news/claude-fable-5-mythos-5" } }
    ]
  },
  {
    id: "year-2026-personal",
    kind: "year-card",
    variant: "personal",
    year: "2026",
    label: "Hur jag jobbade",
    facts: [
      { tier: 1, quote: true, text: "Jag har märkt att Claude 4.6 har gjort att jag inte behöver rätta Claude, utan det har blivit som jag sagt direkt." },
      { tier: 2, text: "Tiden som tidigare gick åt till att rätta fel går nu i stället åt till att bygga mer." },
      { tier: 3, text: "Byggde den här presentationen — och flera andra projekt samma sommar — med Claude Code och Cursor." }
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
    intro: "Harvard-format, alfabetisk ordning. Egna blogginlägg som ligger bakom enskilda slides, plus källor för samtliga händelser i årskorten.",
    refs: [
      {
        cite: "Anthropic (2023a) 'Claude 2', Anthropic.",
        url: "https://www.anthropic.com/news/claude-2",
        date: "Publicerad 11 juli 2023",
        note: "Första Claude tillgänglig för allmänheten, inte bara API-partners."
      },
      {
        cite: "Anthropic (2023b) 'Introducing Claude 2.1', Anthropic.",
        url: "https://www.anthropic.com/news/claude-2-1",
        date: "Publicerad 21 november 2023",
        note: "200k tokens kontextfönster och kraftigt minskad hallucinationsfrekvens."
      },
      {
        cite: "Anthropic (2024) 'Claude 3 family', Anthropic.",
        url: "https://www.anthropic.com/news/claude-3-family",
        date: "Publicerad 4 mars 2024",
        note: "Familjen Opus, Sonnet och Haiku — startpunkten för lanseringstakten som jämförs i 2023-årskortet."
      },
      {
        cite: "Anthropic (2025a) 'Claude 3.7 Sonnet and Claude Code', Anthropic.",
        url: "https://www.anthropic.com/news/claude-3-7-sonnet",
        date: "Publicerad 24 februari 2025",
        note: "Samma annonsering som introducerade Claude Code — verktyget den här presentationen är byggd med."
      },
      {
        cite: "Anthropic (2025b) 'Introducing Claude 4', Anthropic.",
        url: "https://www.anthropic.com/news/claude-4",
        date: "Publicerad 22 maj 2025",
        note: "Opus 4 och Sonnet 4 — drygt ett år efter Claude 3."
      },
      {
        cite: "Anthropic (2025c) 'Claude Opus 4.1', Anthropic.",
        url: "https://www.anthropic.com/news/claude-opus-4-1",
        date: "Publicerad 5 augusti 2025",
        note: "Representativ källa för höstens fyra snabba Anthropic-lanseringar (Opus 4.1, Sonnet 4.5, Haiku 4.5, Opus 4.5)."
      },
      {
        cite: "Anthropic (2026a) 'Claude Cowork', Claude by Anthropic.",
        url: "https://claude.com/blog/cowork-research-preview",
        date: "Publicerad 12 januari 2026 (datum bekräftat av Kent samt oberoende nyhetsbevakning, inte synligt vid automatiserad hämtning av sidan)",
        note: "Skiftet från rent kodningsverktyg till AI som sköter hela arbetsuppgifter."
      },
      {
        cite: "Anthropic (2026b) 'Introducing Claude Sonnet 5', Anthropic.",
        url: "https://www.anthropic.com/news/claude-sonnet-5",
        date: "Publicerad 30 juni 2026",
        note: "Fjärde generationsbytet på drygt två år — Fable 5 (9 juni) och Opus 5 (23 juli) lanserades samma sommar."
      },
      {
        cite: "Anthropic (2026c) 'Introducing Claude Opus 4.6', Anthropic.",
        url: "https://www.anthropic.com/news/claude-opus-4-6",
        date: "Publicerad 5 februari 2026",
        note: "Modellgenerationen Kent själv pekar ut som den där han slutade behöva rätta Claudes kod — se Kents_work_with_AI.md."
      },
      {
        cite: "Anthropic (2026d) 'Claude Fable 5 and Claude Mythos 5', Anthropic.",
        url: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
        date: "Publicerad 9 juni 2026",
        note: "Lanseringen som tre dagar senare stängdes av globalt efter ett exportkontrollbeslut, och kom tillbaka tre veckor efter det."
      },
      {
        cite: "Europeiska kommissionen (2024) 'AI Act enters into force', European Commission.",
        url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en",
        date: "Publicerad 1 augusti 2024",
        note: "Världens första heltäckande AI-lag."
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
        cite: "Lundgren, K. (2026e) 'Jag har en kompis och kollega som aldrig är sjuk', LinkedIn.",
        url: "https://www.linkedin.com/posts/kentlundgren_jag-har-en-kompis-och-kollega-som-aldrig-ugcPost-7490845079058927616-TtCZ/",
        date: "Publicerad 5 augusti 2026",
        note: "Inlägg på LinkedIn där presentationen delades för första gången — med KL+GA-framing som beskriver samarbetet mellan Kent Lundgren och Generativ AI. Länken kräver LinkedIn-inloggning."
      },
      {
        cite: "Meta AI (2024) 'Introducing Meta Llama 3: The most capable openly available LLM to date', Meta AI Blog.",
        url: "https://ai.meta.com/blog/meta-llama-3/",
        date: "Publicerad 18 april 2024",
        note: "Den öppna modellvågens tydligaste 2024-exempel."
      },
      {
        cite: "Microsoft (2023) 'Reinventing search with a new AI-powered Microsoft Bing and Edge, your copilot for the web', Official Microsoft Blog.",
        url: "https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/",
        date: "Publicerad 7 februari 2023",
        note: "Bing fick GPT-4-nivå AI fem veckor före GPT-4:s egen officiella lansering."
      },
      {
        cite: "OpenAI (2023) 'GPT-4', OpenAI.",
        url: "https://openai.com/index/gpt-4-research/",
        date: "Publicerad 14 mars 2023",
        note: "Den händelse flest pekar ut som starten på att generativ AI ”nådde en ny nivå” i allmänhetens medvetande."
      },
      {
        cite: "OpenAI (2024a) 'Sora: Creating video from text', OpenAI.",
        url: "https://openai.com/index/sora/",
        date: "Publicerad 15 februari 2024",
        note: "Förhandsvisning, inte allmän lansering — första breda visningen av fotorealistisk AI-video."
      },
      {
        cite: "OpenAI (2024b) 'Hello GPT-4o', OpenAI.",
        url: "https://openai.com/index/hello-gpt-4o/",
        date: "Publicerad 13 maj 2024",
        note: "Samma månad som Claude 3.5 Sonnet."
      },
      {
        cite: "OpenAI (2024c) 'Introducing OpenAI o1', OpenAI.",
        url: "https://openai.com/o1/",
        date: "Förhandsvisning 12 september 2024, fullständig lansering 5 december 2024",
        note: "Ursprunget till resonemangsmodeller — den breda normaliseringen fortsatte in i 2025 via o3."
      },
      {
        cite: "Vaswani, A. et al. (2017) 'Attention is all you need', arXiv preprint arXiv:1706.03762.",
        url: "https://arxiv.org/abs/1706.03762",
        date: "Publicerad 12 juni 2017",
        note: "Introducerade Transformer-arkitekturen, som gjorde det möjligt att träna stora språkmodeller parallellt och effektivt — grunden för all modern generativ AI, Claude inräknat."
      },
      {
        cite: "Wikipedia (2026) 'Removal of Sam Altman from OpenAI', Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Removal_of_Sam_Altman_from_OpenAI",
        date: "Hämtad 5 augusti 2026",
        note: "Oberoende sammanställning av femdagarsdramat kring OpenAIs styrelsekris, november 2023."
      }
    ]
  }
];
