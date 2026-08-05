# Kents arbete med generativ AI — en resa, 2023–2026

*Vad det här är: en personlig reflektion över hur Kents sätt att arbeta
med AI-verktyg har förändrats, från de första löst experimenterande
Python-skripten 2023 till dagens Claude-centrerade, agentiska arbetsflöde.
Bruttolista i samma anda som `Claude_familjen.md` — en delmängd väljs ut
till egna slides i presentationen i ett senare steg, inte allt härifrån
ska nödvändigtvis synas där.*

**Korsreferens till `Claude_familjen.md`:** varje gång en specifik
Claude-lansering nämns nedan pekas den ut med samma namn och
`<mån><år>`-badge som används där — t.ex. *(se [Claude_familjen.md](Claude_familjen.md)
→ "Claude Projects — jun2024")* — så en läsare kan slå upp exakt
lanseringsdatum och källa utan att informationen dubbleras mellan
filerna. Den här filen svarar på **hur Kent faktiskt använde** varje
verktyg; `Claude_familjen.md` svarar på **vad och när** verktyget
lanserades.

## 2023 — bred experimentlusta, inget verktyg dominerar än

De första AI-drivna projekten i presentationen (`temperatur`,
`transkribering`, båda apr2023) byggdes med ChatGPT som kodpartner
(hämtat via Poe) och OpenAI Whisper för transkribering — se respektive
slide i presentationen för detaljerna.

Vid sidan av kodningsexperimenten användes **Perplexity** flitigt för
research och faktakoll under den här perioden — långt innan Claude blev
förstahandsvalet. Det som gjorde Perplexity annorlunda mot dåtidens rena
chatbots var att den konsekvent förankrade svar i aktuella webbkällor och
visade numrerade, klickbara citat, vilket gjorde det lättare att
verifiera informationen än med en modell som bara svarade från sin
träningsdata.
Wikipedia (2026) 'Perplexity AI', Wikipedia. Available at: https://en.wikipedia.org/wiki/Perplexity_AI (Accessed: 5 augusti 2026).
*(Källa Kent, verifierat oberoende av Claude mot Perplexitys eget
lanseringsdatum, 7 december 2022, och grundphilosofin om källhänvisning
— stämmer med Kents beskrivning.)*

Claude fanns visserligen redan (lanserad mar2023, se `Claude_familjen.md`),
men var ännu inte del av Kents ordinarie verktygslåda under den här
perioden.

## 2024 — Claude Projects blir en vändpunkt

**Stickfigur-spelet — samma prompt, två AI-verktyg (mars 2024).** Inspirerad
av en jämförelsevideo av YouTubern Matt Wolfe gav Kent samma engelska prompt
till två olika AI-verktyg för att se hur de klarade att generera ett litet
JavaScript-spel:

> "Write code for a javascript game where there is a stick figure on the
> screen. The stick figure moves left and right with the A and D buttons
> and jumps with the space bar. Coins should also be placed randomly on the
> screen where the player can reach them. When a player touches a coin, the
> coin should disappear and be collected by the player." (Kent, prompten
> från mars 2024)

Ett program togs fram med **Perplexity**, ett annat med **OpenAI:s
GPT-4-playground** — samma prompt, olika resultat att jämföra sida vid sida.
Lundgren, K. (2024) 'Testa AI-modeller genom att göra spel', Controller, lärare och coach utan gränser reflekterar. Publicerad 17 mars 2024.
https://controllerutangranser.wordpress.com/2024/03/17/testa-ai-modeller-genom-att-gora-spel/
Spelresultaten: https://kentlundgren.se/AI/AIspel/ (14 mars 2024; sidan
svarar med en icke-standard HTTP-status vid automatiserad hämtning men
innehållet lästes och verifierades ändå av Claude via WebFetch).
*(Ett tidigt exempel på Kents återkommande mönster: jämföra flera
AI-verktyg mot samma uppgift i stället för att bara lita på ett — se
2025-avsnittet nedan för uppföljningen ett år senare, med ett tredje
verktyg och ett mycket annorlunda resultat.)*

Claude 3 (mar2024, se `Claude_familjen.md`) var första gången Kent på
allvar började använda Claude. Men det som Kent själv, i efterhand,
pekar ut som den verkliga vändpunkten är **Claude Projects** (jun2024,
se `Claude_familjen.md` → "Claude Projects — jun2024"):

> Claude Projects gav mig som användare möjlighet att skapa dedikerade
> arbetsytor där jag kan ladda upp dokument, filer, kod och andra källor
> tillsammans med egna instruktioner. I ett Claude-projekt arbetar Claude
> primärt utifrån materialet i projektets kunskapsbas, vilket gör att
> svaren blir mer relevanta, konsekventa och förankrade i mina egna
> underlag — i stället för att bara förlita sig på modellens generella
> träningsdata. Det här arbetssättet går längre än att bara skriva bra
> prompter — det handlar om att aktivt styra vilka källor Claude ska
> utgå från. (Kent, 2026-08-05)

Kent drar själv parallellen till **RAG (Retrieval-Augmented Generation)**
— Claude Projects fungerar som en enkel, användarvänlig form av RAG utan
att kräva egen infrastruktur. Kent har senare byggt och skrivit om riktig
RAG på egen hand: [AI-teknik/RAG/](https://kentlundgren.github.io/AI-teknik/RAG/)
— alltså både använt konceptet i praktiken via Claude Projects, och
byggt det själv från grunden.

## 2025 — Claude Code, Cursor och GitHub blir vardagsverktyg

Med **Claude Code** (feb2025, se `Claude_familjen.md`) flyttade Kents
arbetssätt från chatt-baserad kodhjälp till agentisk kodning direkt i
terminalen — samma verktyg den här presentationen faktiskt är byggd med.
Tillsammans med **Cursor** och **GitHub** blev det under 2025 Kents
dominerande arbetstriangel — mönstret han själv dokumenterat i detalj i
[Claude-kompassen](https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/),
hans egen kartläggning av Claudes ekosystem (ytor, styrfiler, de tre
faserna i hans arbetssätt). Fredagsquiz (aug2025, se presentationens
egen slide) är ett konkret exempel byggt med precis den kombinationen:
"frågorna skrivna av Claude, kodat i Cursor".

**Samma prompt, ett år senare (mars 2025) — stickfigur-spelet igen.** Kent
återanvände exakt samma engelska prompt från mars 2024-testet (se
2024-avsnittet ovan), men nu mot **Claude 3.7 Sonnet** (lanserad feb2025,
se `Claude_familjen.md`). Resultatet var ett nästan komplett, fungerande
spel direkt — bara hopphöjden behövde justeras för att mynten skulle gå
att nå.
Resultat: https://kentlundgren.se/AI/AIspel2/ (13 mars 2025).
*(Samma jämförelsemetod som 2024, men nu med bara EN justering kvar i
stället för att bygga från grunden — samma "mindre rättning, mer
tillägg"-mönster som Kent senare beskriver mycket tydligare för Claude 4.6
(2026, se nedan). Stickfigur-spelet fungerar alltså som ett litet,
återkommande "benchmark" av Kents egen erfarenhet av AI-verktygens
utveckling, inte bara en engångsobservation.)*

## 2026 — Claude 4.6: från rättning till tillägg

Med **Claude Cowork** (jan2026) och sedan **Claude 4.6** (feb2026, Opus
4.6 5 feb + Sonnet 4.6 17 feb, se `Claude_familjen.md`) beskriver Kent en
tydlig kvalitativ förändring i sitt eget arbete, inte bara en
prestandasiffra:

> Jag har märkt att Claude 4.6 har gjort att jag inte behöver rätta
> Claude, utan det har blivit som jag sagt direkt. Sen är det ju så att
> jag hela tiden vill lägga till saker, förändra funktionen, utseendet,
> innehållet — men det beror inte på att Claude 4.6 kodar fel, utan
> tvärtom: det har snabbat möjligheten att lägga till saker, finesser,
> annan funktionalitet i programmet. (Kent, 2026-08-05)

Med andra ord: tiden som tidigare gick åt till att rätta fel går nu i
stället åt till att bygga mer — samma arbetstid, men förskjuten från
felsökning till utveckling. Det är den förändringen, mer än någon enskild
lansering, som är kärnan i den här filen.

## Sammanfattning: verktygens tyngdpunkt över tid

| Period | Dominerande AI-verktyg | Arbetssätt |
|---|---|---|
| 2023 | ChatGPT (kodning), OpenAI Whisper, Perplexity (research) | Löst experimenterande, ett verktyg per uppgift |
| 2024 | Claude 3, Claude Projects, Perplexity/GPT-4 (jämförelsetest) | Första gången källor/kunskapsbas aktivt styrs, RAG-liknande |
| 2025 | Claude Code, Cursor, GitHub, Claude 3.7 Sonnet | Agentisk kodning blir vardag; samma stickfigur-test klart med en justering |
| 2026 | Claude Cowork, Claude 4.6 | Från att rätta AI:ns kod till att bara lägga till mer |

## Öppna frågor / att besluta i nästa steg

- Vilken delmängd av det här (citat, tabellen, ett urval år) ska bli
  "ett par slides" i presentationen, som Kent efterfrågade? Kent avgör.
- Ska citaten från Kent visas ordagrant i presentationen, eller bara
  ligga som bakgrund här och sammanfattas kortare på sliden?
- Saknas någon verktygsera? Filen nämner inte t.ex. Gemini (som visade
  sig vara felaktigt kopplat till `statsskuld`-projektet, se PRD
  Ändringslogg v22) — om Gemini faktiskt användes till något annat
  projekt någon gång är det inte fångat här än.
