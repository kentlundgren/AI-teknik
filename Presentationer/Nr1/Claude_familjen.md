# Claude-familjen — fullständig tidslinje

*Källa och struktur: skriven om från Kents ursprungliga anteckningar
(`Claude_familjen.docx`) för att matcha presentationens konventioner —
`<mån><år>`-precision (se `kent-presentationer`-skillen, Regel 8),
annoterade Harvard-källor (`kent-meta-regler-for-code`, Regel 2), och
samma "jämför lanseringstakt"-ton som milstolparna i `projects.js`
(Regel 13). Kompletterad med elva ytterligare lanseringar utöver de sex
Kent själv hade antecknat — hela kedjan är nu primärkälleverifierad, se
källhänvisning per post. Detta är en **bruttolista**: tänkt som
källa att välja en delmängd ur till de kommande årskorten (2024/2025/2026)
i presentationen, inte allt härifrån ska nödvändigtvis synas där — se
`PRD_presentation_ai_projekt.md`, Ändringslogg v20 (öppen fråga om delad
källpool) och v21 (denna fil).*

## 2023

**Claude (+ Claude Instant) — mar2023**
Anthropics första publika modellsläpp: en toppmodell (Claude) och en
snabbare, billigare variant (Claude Instant), efter en sluten alfa med
partners som Notion, Quora och DuckDuckGo.
Anthropic (2023) 'Introducing Claude', Anthropic. Publicerad 14 mars 2023.
https://www.anthropic.com/news/introducing-claude
*(Den första Claude-modellen någonsin — startpunkten för hela tidslinjen.)*

**Claude 2 — jul2023**
Anthropics första modell tillgänglig för allmänheten (inte bara
API-partners), med längre svar och en publik betaversion av chattupplevelsen.
Anthropic (2023) 'Claude 2', Anthropic. Publicerad 11 juli 2023.
https://www.anthropic.com/news/claude-2
*(Första gången vem som helst kunde prova Claude direkt, inte bara via API.)*

**Claude 2.1 — nov2023**
Ett branschledande 200k-tokens kontextfönster, kraftigt minskad
hallucinationsfrekvens, systemprompter och en tidig betaversion av
verktygsanvändning (tool use).
Anthropic (2023) 'Introducing Claude 2.1', Anthropic. Publicerad 21 november 2023.
https://www.anthropic.com/news/claude-2-1
*(Grunden för mycket av det som senare blev agentisk Claude-användning — verktygsanvändning fanns här i sin första form.)*

## 2024

**Claude 3 — mar2024**
Familjen Opus, Sonnet och Haiku — Anthropics första multimodala modeller
(kan analysera bilder och diagram, inte bara text). Se milstolpen
"2024" i presentationen för jämförelsen mot Claude 4 och Claude 5.
Anthropic (2024) 'Claude 3 family', Anthropic. Publicerad 4 mars 2024.
https://www.anthropic.com/news/claude-3-family
*(Startpunkten för den lanseringstakt som jämförs i presentationens
2024-milstolpe.)*

**Claude 3.5 Sonnet — jun2024**
Slog konkurrenterna och den egna Claude 3 Opus på en rad utvärderingar —
till priset och hastigheten av mellanmodellen Claude 3 Sonnet. Gratis på
claude.ai och iOS-appen från start.
Anthropic (2024) 'Introducing Claude 3.5 Sonnet', Anthropic. Publicerad 20 juni 2024.
https://www.anthropic.com/news/claude-3-5-sonnet
*(Modellen som fick många att börja ta Claude på allvar som förstahandsval, inte bara ett alternativ till ChatGPT.)*

**Claude Projects — jun2024**
*(Kents egen text, lätt justerad för konsekvent ton.)* Ger användare
möjlighet att skapa dedikerade arbetsytor där man laddar upp dokument,
filer, kod och andra källor tillsammans med egna instruktioner. Claude
arbetar då primärt utifrån materialet i projektets kunskapsbas i stället
för att bara förlita sig på modellens generella träningsdata — ett
arbetssätt som påminner om en enkel, användarvänlig form av RAG
(Retrieval-Augmented Generation). Särskilt värdefullt för återkommande
analyser eller textproduktion, eftersom bakgrundsinformationen finns
samlad över flera chattsessioner.
Anthropic (2024) 'Collaborate with Claude on Projects', Anthropic. Publicerad 25 juni 2024.
https://www.anthropic.com/news/projects
*(Kents val — ett konkret exempel på hur man aktivt styr vilka källor Claude utgår från, snarare än att bara skriva bättre prompter.)*

**Claude 3.5 Sonnet (uppgraderad) + Claude 3.5 Haiku + Computer use — okt2024**
En uppgraderad 3.5 Sonnet (stora förbättringar inom kodning), en ny
snabbare/billigare Claude 3.5 Haiku som matchade förra flaggskeppet
(Claude 3 Opus) i intelligens, och "computer use" i publik betaversion —
Claude kunde för första gången styra en dator genom att se skärmen,
flytta muspekaren, klicka och skriva.
Anthropic (2024) 'Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku', Anthropic. Publicerad 22 oktober 2024.
https://www.anthropic.com/news/3-5-models-and-computer-use
*(Den tekniska föregångaren till det som senare blev Claude Cowork — computer use var första gången Claude kunde agera i ett gränssnitt, inte bara svara i text.)*

## 2025

**Claude 3.7 Sonnet + Claude Code — feb2025**
*(Kents egen text, lätt justerad.)* Claude Code är Anthropics agentiska
verktyg för utvecklare — låter dig delegera komplexa kodningsuppgifter
direkt från terminalen med naturligt språk: söka igenom kodbaser, skriva
och redigera filer, köra tester, committa ändringar till GitHub och
hantera längre utvecklingsprocesser med minimal manuell styrning. Ett av
de mest effektiva verktygen för "vibe coding" och autonom kodning,
eftersom det kombinerar stark resonemangsförmåga med verklig agentisk
förmåga att agera i utvecklingsmiljön — och verktyget den här
presentationen faktiskt är byggd med.
Anthropic (2025) 'Claude 3.7 Sonnet and Claude Code', Anthropic. Publicerad 24 februari 2025.
https://www.anthropic.com/news/claude-3-7-sonnet
*(Kents val — direkt relevant, presentationen du läser just nu är byggd med det här verktyget.)*

**Claude 4 (Opus 4, Sonnet 4) — maj2025**
Anthropics dåvarande mest kapabla modell (72,5 % på SWE-bench Verified
vid lansering), med stöd för sammanhängande agentiska arbetsflöden över
flera timmar och ett 200k-tokens kontextfönster.
Anthropic (2025) 'Introducing Claude 4', Anthropic. Publicerad 22 maj 2025.
https://www.anthropic.com/news/claude-4
*(Drygt ett år efter Claude 3 — det första tydliga tecknet på den accelererande lanseringstakten, se 2024-milstolpen i presentationen.)*

**Claude Opus 4.1 — aug2025**
En inkrementell men mätbar förbättring av Opus 4: 74,5 % på SWE-bench
Verified (upp från 72,5 %), skarpare agentiskt resonemang för
långsiktiga, verktygsassisterade uppgifter — samma pris och API som
föregångaren.
Anthropic (2025) 'Claude Opus 4.1', Anthropic. Publicerad 5 augusti 2025.
https://www.anthropic.com/news/claude-opus-4-1
*(Visar att Anthropic nu även levererar mindre, snabbare delsteg mellan de stora generationsbytena — inte bara helt nya siffror.)*

**Claude Sonnet 4.5 — sep2025**
Beskrevs vid lansering som Anthropics mest kapabla modell hittills för
kodning, resonemang och computer use — byggd för komplexa agenter som kan
arbeta direkt i webbläsare, navigera webbsidor och fylla i kalkylblad.
Anthropic (2025) 'Introducing Claude Sonnet 4.5', Anthropic. Publicerad 29 september 2025.
https://www.anthropic.com/news/claude-sonnet-4-5
*(Ytterligare ett steg i samma riktning som computer use (okt2024) och Cowork (jan2026) — Claude som agerar i gränssnitt, inte bara svarar i text.)*

**Claude Haiku 4.5 — okt2025**
Matchade flaggskeppet Sonnet 4 på kodning, computer use och agent-baserade
uppgifter — till en tredjedel av priset och mer än dubbla hastigheten.
Anthropic (2025) 'Introducing Claude Haiku 4.5', Anthropic. Publicerad 15 oktober 2025.
https://www.anthropic.com/news/claude-haiku-4-5
*(Samma mönster som Claude 3.5 Haiku (okt2024): den billigaste modellen kommer allt närmare den dyraste i förmåga, med ungefär ett års mellanrum.)*

**Claude Opus 4.5 — nov2025**
Vid lansering beskriven som världens bästa modell för kodning, agenter
och computer use, med mätbara förbättringar även på vardagsuppgifter som
research och arbete med kalkylblad/presentationer.
Anthropic (2025) 'Introducing Claude Opus 4.5', Anthropic. Publicerad 24 november 2025.
https://www.anthropic.com/news/claude-opus-4-5
*(Fjärde Anthropic-lanseringen på fyra månader (aug–nov 2025) — konkret exempel på den tätnande lanseringstakten inför Claude 5.)*

## 2026

**Claude Cowork (forskningsförhandsvisning) — jan2026**
*(Kents egen text, lätt justerad.)* Anthropics agentiska verktyg för
kunskapsarbete, byggt på samma grund som Claude Code men anpassat för
icke-tekniska användare. Du ger Claude tillgång till en mapp på din dator
och kan be den utföra flerstegsuppgifter — organisera filer, sammanställa
rapporter från anteckningar, skapa kalkylblad från kvitton eller
förbereda briefingdokument — som en digital medarbetare som självständigt
arbetar med dina lokala filer och verktyg.
Anthropic (2026) 'Introducing Cowork', Claude by Anthropic. Publicerad 12 januari 2026.
https://claude.com/blog/cowork-research-preview
*(Kents val — tar den agentiska förmågan från Claude Code och gör den tillgänglig för bredare kontors- och kunskapsarbete.)*

**Claude Fable 5 + Claude Mythos 5 — jun2026**
Lanserades tisdag 9 juni 2026 med starka skyddsmekanismer (Mythos 5, med
färre skydd, förbehölls betrodda partner för defensivt cybersäkerhetsarbete).
Tre dagar senare, 12 juni, stängde amerikanska myndigheter av båda
modellerna globalt genom ett exportkontrollbeslut, sedan Amazon-forskare
visat att Fable 5:s skydd kunde kringgås för att ta fram kod som
demonstrerade en säkerhetssårbarhet. Exportkontrollen hävdes 30 juni och
Anthropic återlanserade båda modellerna 1 juli, med en ny
säkerhetsklassificerare.
Anthropic (2026a) 'Claude Fable 5 and Claude Mythos 5', Anthropic. Publicerad 9 juni 2026.
https://www.anthropic.com/news/claude-fable-5-mythos-5
Anthropic (2026b) 'Redeploying Claude Fable 5', Anthropic. Publicerad 30 juni 2026.
https://www.anthropic.com/news/redeploying-fable-5
*(Den enda modellen i hela tidslinjen som faktiskt stängdes av och kom
tillbaka — värt att nämna som en nyansering till "allt går bara snabbare
och snabbare".)*

**Claude Sonnet 5 — jun2026**
Den mest agentiska Sonnet-modellen hittills vid lansering — gör planer,
använder verktyg som webbläsare och terminaler, arbetar autonomt på en
nivå som tidigare krävde större, dyrare modeller. Blev standard för
Free- och Pro-användare direkt vid lansering.
Anthropic (2026) 'Introducing Claude Sonnet 5', Anthropic. Publicerad 30 juni 2026.
https://www.anthropic.com/news/claude-sonnet-5
*(Samma dag som Fable 5/Mythos 5 återinfördes efter exportkontroll-avstängningen — en ovanligt händelserik enskild dag i tidslinjen.)*

**Claude Opus 5 — jul2026**
Ett stegförändring för Opus-nivån: långvariga agenter, förbättringar
inom kodning och professionellt arbete, med prestanda nära Fable 5:s
intelligensnivå till Opus hastighet och kostnad.
Anthropic (2026) 'Introducing Claude Opus 5', Anthropic. Publicerad 24 juli 2026.
https://www.anthropic.com/news/claude-opus-5
*(Slutpunkten (hittills) för Claude 5-generationen — tre modeller
(Fable/Sonnet/Opus) utrullade på sju veckor, jun–jul 2026.)*

## Sammanfattning: lanseringstakten över tid

| Period | Antal lanseringar | Ungefärligt mellanrum |
|---|---|---|
| mar2023 – nov2023 (Claude 1 → 2.1) | 3 | ~4–5 månader |
| mar2024 – okt2024 (Claude 3-familjen) | 4 | ~1–3 månader |
| feb2025 – nov2025 (Claude 4-familjen) | 6 | ~1–2 månader |
| jan2026 – jul2026 (Cowork + Claude 5) | 4 | ~2–7 veckor |

Mönstret händer att stödja den poäng presentationens 2024-milstolpe redan
gör (Claude 3 → 4 → 5 med ungefär ett års mellanrum) — men visar också
att *takten inom varje generation* själv har ökat: från några lanseringar
per år (2023) till nästan en lansering i månaden (andra halvan av 2025).

## Öppna frågor / att besluta i nästa steg

- Vilken delmängd av dessa 17 poster ska synas på de kommande
  årskorten (2024/2025/2026) i själva presentationen? Kent avgör.
- Ska sammanfattningstabellen ovan (lanseringstakt) användas i
  presentationen, eller stanna som bakgrundsanalys i den här filen?
- Fable 5/Mythos 5-avstängningen är den enda "negativa" händelsen i
  tidslinjen — passar den in i en portfolio-presentation, eller är den
  för mycket "AI-branschnyheter" och för lite Kents egen resa? Flaggat,
  inte avgjort.
