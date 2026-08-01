# RAG, och varfor jag slutade gissa

Jag har en favoritprompt jag anvant i flera ar for att testa nya sprakmodeller: "Beratta om Frans G. Bengtssons liv och leverne." Den kanns ofarlig - en dod forfattare, valdokumenterad, inga asikter att navigera runt. Perfekt for att se hur en modell hanterar ren fakta.

I somras gjorde jag samma sak pa riktigt, inte bara som test. Jag byggde en hel sida om honom, med hjalp av tva tekniker for att hamta och verifiera information innan nagot skrevs. Och det forsta jag stotte pa var nagot som hander oftare an man tror nar man faktiskt kontrollerar: kallorna var inte overens.

Var det 1930 eller 1931 han tog sin licentiatexamen? Foddes han pa Rossjoholm eller Ramnekulla? Jag kunde ha valt en av delarna och skrivit det som ett sakert faktum - ingen lasare hade markt skillnaden. Istallet skrev jag ut bada, oppet, och lat sidan visa att kallorna skiljde sig at.

Det ar i grunden vad det har inlagget handlar om.

## Vad hande med RAG sen jag skrev om det 2024?

Jag skrev om RAG (Retrieval-Augmented Generation) redan 2024 - en enkel introduktion om hur en sprakmodell kan hamta extern information istallet for att bara lita pa det den "minns" fran traningen (Lundgren, 2024b). Samma vecka skrev jag ocksa ett mer praktiskt exempel, ett vader-API kopplat till en modell (Lundgren, 2024a). Ingen av texterna gjorde nagon skillnad pa enkla och avancerade varianter. RAG var bara RAG.

Tva ar senare vet jag battre. Det finns inte en RAG-teknik, det finns (minst) tva.

### Retrieval, alltsa

Innan jag gar vidare: R:et i RAG star for retrieval - hamtning. Innan modellen skriver ett svar soker systemet upp relevant material i en extern kalla (dokument, en databas, webben) och ger modellen det som underlag, istallet for att modellen bara skriver ur minnet. Det ar den mekanismen som ska minska hallucinationer - att svaret ar grundat i nagot man faktiskt kan peka pa, inte bara i det som lat troligt.

Jag ska vara arlig: jag holl fortfarande pa att reda ut exakt vad "retrieval" betyder nar jag skrev det har inlagget. Det ar inte ett begrepp jag haft klart for mig lange - men det ar precis den termen som binder ihop allt nedan.

## Classic RAG kontra Advanced RAG

Den enkla varianten, Classic RAG, ar en rak kedja:

1. Fraga - gors om till en vektor (embedding)
2. Sok efter de mest lika textbitarna i en vektordatabas
3. Skicka de basta traffarna till sprakmodellen
4. Modellen svarar utifran dem

Bra nar fragan ar enkel och faktabaserad. Ungefar som att sla upp i en bok med bara innehallsforteckningen till hjalp.

Advanced RAG lagger till flera steg: en kombination av semantisk sokning och nyckelordssokning (hybrid retrieval), filtrering pa kalla/datum (metadata filtering), en omvardering av traffarna (reranking) och en sammanvagning av flera kallor till ett sammanhangande svar (context fusion) - med en oppen redovisning av vad som gjordes och varfor.

Det har ar inte bara min egen indelning. En omfattande forskningsoversikt (Gao m.fl., 2026a) delar in faltet i just Naive, Advanced och Modular RAG (de sager "Naive", jag har kallat det "Classic" - samma ide, olika ord). Sjalva grundtekniken gar tillbaka till Lewis m.fl. (2020), pappret som myntade termen RAG.

## Frans G. Bengtsson, i praktiken

Tillbaka till min favoritprompt. Den har gangen korde jag den inte som ett engangstest, utan byggde en sida med en Classic-version och en Advanced-version sida vid sida, och skrev ner hela metodresonemanget innan en enda mening om Bengtsson skrevs.

Eftersom en biografi ar komplex och faktakanslig landade jag i Advanced-laget: fyra externa kallor (svenska och engelska Wikipedia, Norstedts forlag, Frans G. Bengtsson-sallskapet), korsverifierade mot varandra dar det gick. Och just dar dok de motstridiga uppgifterna upp - fodelseort, examensar. Istallet for att gomma osakerheten skrev jag ut en Retrieval Summary: vilken teknik jag anvant, vilka kallor, om jag gjort kallkritik, och varfor just den tekniken.

Det ar den delen jag ar mest nojd med. Inte att sidan blev perfekt - den ar inte det, tva saker ar fortfarande oppet redovisade som osakra - utan att den ar arlig om vad den inte vet sakert.

### En regel som bara nadde ett av fem stallen

Ett litet sidosparr, for att det hande mig bokstavligen medan jag skrev det har: jag bad om att alla kallor jag anger framover ocksa ska ha en kort, egen kommentar om vad de handlar om - utover det vanliga Harvard-formatet. Regeln lades in pa ratt stalle, men bara pa ett av fem stallen den borde galla. Jag fick sjalv upptacka glappet och be om att den spreds till resten.

Det ar exakt det problem jag redan skrivit om nar det galler styrfiler och skills som ligger utspridda pa olika nivaer utan att synkas. Den har gangen var det inte en gammal iakttagelse - det hande i realtid, mitt i arbetet med den har texten.

## Testa det sjalv

Jag har nu skrivit ner min egen Advanced RAG-policy som en agentfil och konkreta skills - portabla, tankta att fungera oavsett vilket AI-verktyg man anvander. Mitt i arbetet med det har inlagget testade jag att krava att Claude faktiskt foljde min egen policy pa arbetet med att skriva om den - inte bokstavlig teknisk RAG (ingen vektordatabas, inga embeddings), men samma beslutslogik: minst tva oberoende kallor, kallkritik, och en oppen redovisning pa slutet.

Vill du testa samma sak, utan att ha nagon specialbyggd AI-koppling, racker det med en prompt:

"Anvand Advanced RAG enligt agents.md och skills.md pa det har: verifiera varje sakpastaende mot minst tva oberoende kallor, rangordna kallorna efter tillforlitlighet, och avsluta med en Retrieval Summary (teknik, kallor, reranking, varfor)."

(Lankar till agents.md och skills.md finns i kallforteckningen nedan.)

Och en brasklapp, eftersom "akta tvivel" kanns viktigare har an att lata smart: det ar inte riktig teknisk RAG. Ingen vektordatabas, ingen chunking. Det ar samma krav och samma arlighet, tillampade manuellt av en AI-agent med vanliga sokverktyg. Skillnaden mellan att hitta nagot och att verifiera det - vilket, apropa ingressen, var precis vad jag borde gjort med Frans G. Bengtsson fran borjan.

Jag har mer material liggande om det har - annat jag byggt med RAG, som jag annu inte hittat tillbaka till helt. Det aterkommer jag till.

## Kallforteckning

- Anthropic (2024) Introducing Contextual Retrieval. Blogginlagg, Anthropic Engineering, 19 september 2024. https://www.anthropic.com/engineering/contextual-retrieval (Anthropics egen vidareutveckling av RAG, upp till 67 procent farre missade traffar - visar var tekniken star idag, specifikt for Claude.)
- Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J., Wang, M. och Wang, H. (2026a) Retrieval-Augmented Generation for Large Language Models: A Survey. arXiv:2312.10997. https://arxiv.org/abs/2312.10997 (Delar RAG i Naive, Advanced och Modular RAG - den vetenskapliga grunden for min egen Classic/Advanced-indelning.)
- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Kuttler, H., Lewis, M., Yih, W., Rocktaschel, T., Riedel, S. och Kiela, D. (2020) Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. Advances in Neural Information Processing Systems 33 (NeurIPS 2020), s. 9459-9474. https://arxiv.org/abs/2005.11401 (Originalpappret som myntade termen RAG - historisk startpunkt for hela tekniken.)
- Lundgren, K. (2024a) Exempel pa RAG. Blogginlagg, controllerutangranser.wordpress.com, 27 maj 2024. https://controllerutangranser.wordpress.com/2024/05/27/exempel-pa-rag/ (Min forsta RAG-text, ett praktiskt Python/vader-exempel - innan Classic/Advanced-distinktionen fanns.)
- Lundgren, K. (2024b) RAG for mer precisa AI-svar. Blogginlagg, klel.wordpress.com, 27 maj 2024. https://klel.wordpress.com/2024/05/27/rag-for-mer-precisa-ai-svar/ (Utgangspunkten for mitt senare, mer utvecklade RAG-arbete.)
- Lundgren, K. (2026) Kan man lita pa det AI:n berattar om Frans G. Bengtsson? Blogginlagg, klel.wordpress.com, 15 juli 2026. https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/ (Min praktiska tillampning av Classic vs. Advanced RAG pa en verklig biografisida.)
- RAG-agentfil (agents.md): https://github.com/kentlundgren/AI-teknik/blob/main/RAG/agents.md
- RAG-skills (skills.md): https://github.com/kentlundgren/AI-teknik/blob/main/RAG/skills.md
- Frans G. Bengtsson-sidan (live): https://kentlundgren.github.io/AI-teknik/RAG/Frans-G-Bengtsson/
- RAG-metod (metodresonemang): https://github.com/kentlundgren/AI-teknik/blob/main/RAG/Frans-G-Bengtsson/RAG-metod.md
