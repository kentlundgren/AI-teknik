# RAG, och varför jag slutade gissa

Jag har en favoritprompt jag använt i flera år för att testa nya språkmodeller: "Berätta om Frans G. Bengtssons liv och leverne." Den känns ofarlig — en död författare, väldokumenterad, inga åsikter att navigera runt. Perfekt för att se hur en modell hanterar ren fakta.

I somras gjorde jag samma sak på riktigt, inte bara som test. Jag byggde en hel sida om honom, med hjälp av två tekniker för att hämta och verifiera information innan något skrevs. Och det första jag stötte på var något som händer oftare än man tror när man faktiskt kontrollerar: källorna var inte överens.

Var det 1930 eller 1931 han tog sin licentiatexamen? Föddes han på Rössjöholm eller Ramnekulla? Jag kunde ha valt en av delarna och skrivit det som ett säkert faktum — ingen läsare hade märkt skillnaden. Istället skrev jag ut båda, öppet, och lät sidan visa att källorna skiljde sig åt.

Det är i grunden vad det här inlägget handlar om.

## Vad hände med RAG sen jag skrev om det 2024?

Jag skrev om RAG (Retrieval-Augmented Generation) redan 2024 — en enkel introduktion om hur en språkmodell kan hämta extern information istället för att bara lita på det den "minns" från träningen (Lundgren, 2024b). Samma vecka skrev jag också ett mer praktiskt exempel, ett väder-API kopplat till en modell (Lundgren, 2024a). Ingen av texterna gjorde någon skillnad på enkla och avancerade varianter. RAG var bara RAG.

Två år senare vet jag bättre. Det finns inte en RAG-teknik, det finns (minst) två.

### Retrieval, alltså

Innan jag går vidare: R:et i RAG står för retrieval — hämtning. Innan modellen skriver ett svar söker systemet upp relevant material i en extern källa (dokument, en databas, webben) och ger modellen det som underlag, istället för att modellen bara skriver ur minnet. Det är den mekanismen som ska minska hallucinationer — att svaret är grundat i något man faktiskt kan peka på, inte bara i det som lät troligt.

Jag ska vara ärlig: jag höll fortfarande på att reda ut exakt vad "retrieval" betyder när jag skrev det här inlägget. Det är inte ett begrepp jag haft klart för mig länge — men det är precis den termen som binder ihop allt nedan.

## Classic RAG kontra Advanced RAG

Den enkla varianten, Classic RAG, är en rak kedja:

1. Fråga — görs om till en vektor (embedding)
2. Sök efter de mest lika textbitarna i en vektordatabas
3. Skicka de bästa träffarna till språkmodellen
4. Modellen svarar utifrån dem

Bra när frågan är enkel och faktabaserad. Ungefär som att slå upp i en bok med bara innehållsförteckningen till hjälp.

Advanced RAG lägger till flera steg: en kombination av semantisk sökning och nyckelordssökning (hybrid retrieval), filtrering på källa/datum (metadata filtering), en omvärdering av träffarna (reranking) och en sammanvägning av flera källor till ett sammanhängande svar (context fusion) — med en öppen redovisning av vad som gjordes och varför.

Det här är inte bara min egen indelning. En omfattande forskningsöversikt (Gao m.fl., 2026a) delar in fältet i just Naive, Advanced och Modular RAG (de säger "Naive", jag har kallat det "Classic" — samma idé, olika ord). Själva grundtekniken går tillbaka till Lewis m.fl. (2020), pappret som myntade termen RAG.

## Frans G. Bengtsson, i praktiken

Tillbaka till min favoritprompt. Den här gången körde jag den inte som ett engångstest, utan byggde en sida med en Classic-version och en Advanced-version sida vid sida, och skrev ner hela metodresonemanget innan en enda mening om Bengtsson skrevs.

Eftersom en biografi är komplex och faktakänslig landade jag i Advanced-läget: fyra externa källor (svenska och engelska Wikipedia, Norstedts förlag, Frans G. Bengtsson-sällskapet), korsverifierade mot varandra där det gick. Och just där dök de motstridiga uppgifterna upp — födelseort, examensår. Istället för att gömma osäkerheten skrev jag ut en Retrieval Summary: vilken teknik jag använt, vilka källor, om jag gjort källkritik, och varför just den tekniken.

Det är den delen jag är mest nöjd med. Inte att sidan blev perfekt — den är inte det, två saker är fortfarande öppet redovisade som osäkra — utan att den är ärlig om vad den inte vet säkert.

### En regel som bara nådde ett av fem ställen

Ett litet sidospår, för att det hände mig bokstavligen medan jag skrev det här: jag bad om att alla källor jag anger framöver också ska ha en kort, egen kommentar om vad de handlar om — utöver det vanliga Harvard-formatet. Regeln lades in på rätt ställe, men bara på ett av fem ställen den borde gälla. Jag fick själv upptäcka glappet och be om att den spreds till resten.

Det är exakt det problem jag redan skrivit om när det gäller styrfiler och skills som ligger utspridda på olika nivåer utan att synkas. Den här gången var det inte en gammal iakttagelse — det hände i realtid, mitt i arbetet med den här texten.

## Testa det själv

Jag har nu skrivit ner min egen Advanced RAG-policy som en agentfil och konkreta skills — portabla, tänkta att fungera oavsett vilket AI-verktyg man använder. Mitt i arbetet med det här inlägget testade jag att kräva att Claude faktiskt följde min egen policy på arbetet med att skriva om den — inte bokstavlig teknisk RAG (ingen vektordatabas, inga embeddings), men samma beslutslogik: minst två oberoende källor, källkritik, och en öppen redovisning på slutet.

Vill du testa samma sak, utan att ha någon specialbyggd AI-koppling, räcker det med en prompt:

"Använd Advanced RAG enligt agents.md och skills.md på det här: verifiera varje sakpåstående mot minst två oberoende källor, rangordna källorna efter tillförlitlighet, och avsluta med en Retrieval Summary (teknik, källor, reranking, varför)."

(Länkar till agents.md och skills.md finns i källförteckningen nedan.)

Och en brasklapp, eftersom "äkta tvivel" känns viktigare här än att låta smart: det är inte riktig teknisk RAG. Ingen vektordatabas, ingen chunking. Det är samma krav och samma ärlighet, tillämpade manuellt av en AI-agent med vanliga sökverktyg. Skillnaden mellan att hitta något och att verifiera det — vilket, apropå ingressen, var precis vad jag borde gjort med Frans G. Bengtsson från början.

Jag har mer material liggande om det här — annat jag byggt med RAG, som jag ännu inte hittat tillbaka till helt. Det återkommer jag till.

## Källförteckning

Anthropic (2024) Introducing Contextual Retrieval. Blogginlägg, Anthropic Engineering, 19 september 2024. Tillgänglig: https://www.anthropic.com/engineering/contextual-retrieval (Anthropics egen vidareutveckling av RAG, upp till 67 procent färre missade träffar — visar var tekniken står idag, specifikt för Claude.)

Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J., Wang, M. och Wang, H. (2026a) Retrieval-Augmented Generation for Large Language Models: A Survey. arXiv:2312.10997. Tillgänglig: https://arxiv.org/abs/2312.10997 (Delar RAG i Naive, Advanced och Modular RAG — den vetenskapliga grunden för min egen Classic/Advanced-indelning.)

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S. och Kiela, D. (2020) Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. Advances in Neural Information Processing Systems 33 (NeurIPS 2020), s. 9459–9474. Tillgänglig: https://arxiv.org/abs/2005.11401 (Originalpappret som myntade termen RAG — historisk startpunkt för hela tekniken.)

Lundgren, K. (2024a) Exempel på RAG. Blogginlägg, controllerutangranser.wordpress.com, 27 maj 2024. Tillgänglig: https://controllerutangranser.wordpress.com/2024/05/27/exempel-pa-rag/ (Min första RAG-text, ett praktiskt Python/väder-exempel — innan Classic/Advanced-distinktionen fanns.)

Lundgren, K. (2024b) RAG för mer precisa AI-svar. Blogginlägg, klel.wordpress.com, 27 maj 2024. Tillgänglig: https://klel.wordpress.com/2024/05/27/rag-for-mer-precisa-ai-svar/ (Utgångspunkten för mitt senare, mer utvecklade RAG-arbete.)

Lundgren, K. (2026) Kan man lita på det AI:n berättar om Frans G. Bengtsson? Blogginlägg, klel.wordpress.com, 15 juli 2026. Tillgänglig: https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/ (Min praktiska tillämpning av Classic vs. Advanced RAG på en verklig biografisida.)

RAG-agentfil (agents.md). Tillgänglig: https://github.com/kentlundgren/AI-teknik/blob/main/RAG/agents.md

RAG-skills (skills.md). Tillgänglig: https://github.com/kentlundgren/AI-teknik/blob/main/RAG/skills.md

Frans G. Bengtsson-sidan (live). Tillgänglig: https://kentlundgren.github.io/AI-teknik/RAG/Frans-G-Bengtsson/

RAG-metod (metodresonemang). Tillgänglig: https://github.com/kentlundgren/AI-teknik/blob/main/RAG/Frans-G-Bengtsson/RAG-metod.md
