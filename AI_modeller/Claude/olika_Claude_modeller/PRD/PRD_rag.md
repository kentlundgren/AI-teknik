# PRD – RAG i Claude-kompassen (Fas 1: styrfiler)

**Namn:** PRD_rag
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_rag.md`
**Skapad:** 2026-08-01
**Version:** 15 (begriplighetstest kört, RAG-kortets undertext/öppning
skärpt som svar på testresultatet)
**Status:** **Genomfört.** Blogginlägg, RAG-kort och källdata är levererade
och verifierade — se avsnitt 5. Ingen kod eller källpost kvarstår.
**Typ:** Tilläggs-PRD (bygger på befintlig struktur i Claude-kompassen, Fas 1),
inte en grund-PRD för ett nytt projekt.

## 1. Bakgrund

Kent har arbetat med RAG (Retrieval-Augmented Generation) i andra projekt och
vill väva in ämnet i Claude-kompassen. Innan något skrivs stämdes den
grundläggande tolkningen av två saker:

- **Placering:** Kent bedömer att RAG hör hemma i **Fas 1** — filerna som
  styr/kontrollerar samarbetet — snarare än i Fas 2 (ytor) eller som en helt
  ny fas.
- **Vinkel:** Båda, i ordningen (a) konceptförklaring som bygger en bro till
  det som redan finns i Fas 1 (CLAUDE.md/AGENTS.md/SKILL.md som statiska
  styrfiler), sedan (b) Kents egen konkreta RAG-erfarenhet från andra projekt
  vävs in som exempel — samma mönster som Fas 0-PRD:t redan använder ("levande
  exempel").

**Tillägg 2026-08-01 (samma dag):** Kent bekräftade kortstrukturen (4a) genom
att bifoga en skiss/skärmdump av Fas 1 med ett fjärde, ännu tomt kort märkt
"RAG" placerat direkt till höger om SKILL.md-kortet — samma visuella mönster
(ram, rubrik, undertext) som de tre befintliga korten. Han bekräftade även
att slutresultatet ska bli både ett blogginlägg och en uppdaterad kompass
(4d).

**Tillägg 2026-08-01, samma dag (nytt, levande exempel):** under själva
planeringen av det här PRD:t inträffade en konkret instans av precis det
problem Fas 1 redan beskriver — att styrfiler/skills sprids över många
platser och är svåra att hålla reda på. Kent bad om en ny stående regel
(annoterad källförteckning, se 4e), den lades först till på bara *ett* av
fem ställen den borde gälla, och Kent fick själv upptäcka glappet och be om
att det spreds "överallt" (global skill, projektets CLAUDE.md, ett annat
projekts egen styrfil `RAG/WORKFLOW.md`, en projektskill, en README). Kent
har uttryckligen bett att detta vävs in som material i det nya
blogginlägget/RAG-kortet.

## 2. Syfte

Förklara RAG som begrepp i Claude-kompassen, och koppla det tydligt till den
logik Fas 1 redan etablerat: CLAUDE.md, AGENTS.md och SKILL.md är alla sätt
att ge Claude kunskap/instruktioner den inte redan har i sig — statiskt
inskrivna, alltid eller kontextuellt inlästa. RAG är en annan lösning på
samma grundfråga ("hur får modellen kunskap den saknar?"), men löser den
dynamiskt: genom sökning/hämtning (retrieval) i en extern kunskapskälla vid
svarstillfället, istället för att skriva in kunskapen i förväg i en fil.

Bron att göra explicit: styrfilerna är *förutbestämd* kontext (samma
innehåll varje gång), RAG är *frågeberoende* kontext (olika innehåll hämtas
beroende på vad som efterfrågas). Det är en skillnad i **när** och **hur**
kunskap kommer in i samtalet, inte en tävling om vilken metod som är "bäst".

**Andra tråd att väva in:** RAG-projektets egen `agents.md` visar samma
spridningsproblem som Fas 1 redan tar upp — fast i renodlad form. Det är en
portabel, generell styrfil (skriven för att fungera i Claude Projects,
Cursor, LangChain m.fl.), medan `RAG/WORKFLOW.md` är en helt separat,
projektspecifik regelfil i samma mapp. Och episoden som utspelade sig
*under just den här PRD-processen* (se avsnitt 1) är ett skarpt,
självupplevt exempel: en ny regel Kent ville ha "överallt" fanns efter
första försöket bara på ett av fem ställen. Det är precis den "svårt att
hålla reda på allt"-problematiken Fas 1 redan beskriver (jfr.
tradeoff-texten om `kent-skrivstil` som legat osynkad på två nivåer
samtidigt) — RAG-arbetet ger ett andra, fristående belägg för samma poäng.

## 3. Omfattning

**Ingår (beslutat):**
1. Ett fjärde kort i Fas 1:s `steerFiles`-array, märkt "RAG", i samma visuella
   mönster som CLAUDE.md/AGENTS.md/SKILL.md (ram, rubrik, undertext, klickbar
   `.card-btn` + `.detail`-panel). Placering: direkt efter SKILL.md-kortet,
   enligt Kents skiss (2026-08-01).
2. Kents egen RAG-erfarenhet vävs in som konkret exempel — i huvudsak klart
   (4b): `AI-teknik/RAG/`-projektet (Classic vs. Advanced, Frans G.
   Bengtsson-exemplet) plus två äldre 2024-texter som historia.
3. Tre nya källposter i `sourcesData` (alfabetisk plats) för de tre valda
   källorna om RAG-konceptet (4c, beslutat — se avsnitt 4c för vilka), plus
   Frans G. Bengtsson-inlägget som ny `2026b` med omlettring av `2026b–g`
   till `2026c–h` (beslutat, se 4b). 2024-texterna går inte in i
   `sourcesData`, bara i blogginlägget.
4. Blogginlägg på klel.wordpress.com **och** uppdaterad kompass — båda,
   beslutat 2026-08-01 (4d).

**Ingår inte:**
- Ändring av grundstrukturen i index.html (sex sektioner, id:n, färgschema)
  — enligt `claude-kompassen-konventioner` ett publikt kontrakt, ändras inte
  utan uttrycklig fråga.
- Implementation av en faktisk RAG-pipeline i det här projektet. Kompassen
  *beskriver* RAG, den *bygger* inte en.

## 4. Frågor och beslut

*(Hette ursprungligen "Öppna frågor" — döpt om 2026-08-01 när Kent påpekade
att rubriken blivit missvisande: alla sex delfrågorna nedan är nu besvarade
utom en liten delfråga under 4b. Se Ändringslogg.)*

**4a. Nytt kort i Fas 1, eller tillägg i ett befintligt kort? — BESLUTAT ✓**
**Beslut (2026-08-01):** Fjärde kort, parallellt med CLAUDE.md/AGENTS.md/
SKILL.md, direkt efter SKILL.md. Bekräftat av Kent via skiss/skärmdump av
Fas 1-raden med ett tomt "RAG"-kort i samma visuella mönster. Notera att RAG
inte är en fil Claude Code läser in på samma sätt som de tre andra — men
Kent har uttryckligen valt att ändå visa det som ett jämbördigt fjärde kort,
och det beslutet gäller, oavsett vad som är tekniskt "mest exakt".

**4b. Vad är Kents konkreta RAG-erfarenhet? — BESLUTAT ✓**
**Huvudmaterial (2026-08-01):** hela projektet på
`C:\Users\kentl\OneDrive\AI\AI-teknik\RAG\` (live:
https://kentlundgren.github.io/AI-teknik/RAG/), bekräftat av Kent som det
material han menade. Innehåller:
- `RAG/README.md` — Classic RAG vs. Advanced RAG, med pipelines och
  jämförelsetabell.
- `RAG/agents.md` — en portabel, generell AGENTS.md-styrfil för en
  RAG-agent (beslutslogik Classic/Advanced, transparenskrav). **Central
  poäng:** detta är strukturellt samma filtyp som AGENTS.md-kortet i Fas 1,
  bara tillämpad på retrieval — den naturliga bryggan mellan RAG och
  Fas 1:s befintliga logik.
- `RAG/skills.md` — fyra konkreta skills (`internal_project_retrieval`,
  `web_external_retrieval`, `hybrid_retrieval_and_fusion`,
  `explain_rag_technique`).
- `RAG/Frans-G-Bengtsson/` — praktiskt tillämpat exempel: en biografisida
  byggd med både Classic och Advanced RAG sida vid sida, med verifierade
  Harvard-källor och en ifylld Retrieval Summary. Kopplat blogginlägg:
  Lundgren, K. (2026) 'Kan man lita på det AI:n berättar om Frans G.
  Bengtsson?', klel.wordpress.com, 15/7 2026.
  https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/

**Historik, hittad och verifierad 2026-08-01 (två äldre, enklare texter,
inte Classic/Advanced-uppdelade):**
- Lundgren, K. (2024) 'RAG för mer precisa AI-svar', klel.wordpress.com,
  27/5 2024. https://klel.wordpress.com/2024/05/27/rag-for-mer-precisa-ai-svar/
- Lundgren, K. (2024) 'Exempel på RAG', controllerutangranser.wordpress.com,
  27/5 2024. https://controllerutangranser.wordpress.com/2024/05/27/exempel-pa-rag/

**Beslut (2026-08-01):** dessa två 2024-texter tillför inte mycket sakligt
längre (ingen Classic/Advanced-distinktion, RAG/-projektet från 2026 har gått
förbi dem) men ska ändå vävas in som **historia/referenser i det nya
blogginlägget**, för att visa hur Kents eget RAG-tänkande utvecklats över två
år.

**BESLUTAT ✓ (2026-08-01) — sista öppna punkten löst:**
- **2024-texterna:** bara i blogginlägget, som historia/referenser. Går
  **inte** in i `sourcesData` — enklare, och Kent bedömde att de inte
  tillför nog sakligt för att förtjäna en egen kompasspost.
- **Frans G. Bengtsson-inlägget (15/7 2026):** in i **både** Claude-
  kompassen och blogginlägget. Det betyder att det *ska* läggas in i
  `sourcesData` — och därmed slår den tidigare identifierade
  omletterings-konsekvensen in på riktigt: inlägget är daterat 15/7 2026,
  kronologiskt *mellan* `Lundgren, K. (2026a)` (1/6) och `(2026b)` (27/7).
  **Konkret vid kodningen:** ny post blir `Lundgren, K. (2026b)` (15/7,
  Frans G. Bengtsson), och alla efterföljande poster skiftar en bokstav:
  gamla `2026b` (27/7) → `2026c`, `2026c` (28/7) → `2026d`, `2026d` (29/7)
  → `2026e`, `2026e` (30/7, LinkedIn) → `2026f`, `2026f` (31/7, "PRD
  först") → `2026g`, `2026g` (31/7, "Vet du ens var vi är?") → `2026h`. Alla
  in-text-hänvisningar till dessa bokstäver i `index.html` måste uppdateras
  i samma svep, inte bara listan i `sourcesData`.

**4c. Källor. — BESLUTAT ✓ (tre externa källor)**
Tre externa akademiska/officiella källor har researchats och verifierats
(länk kontrollerad, titel/författare/datum bekräftat) 2026-08-01, valda för
att komplettera (inte upprepa) Kents egen RAG-erfarenhet (4b):

1. Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N.,
   Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S. and Kiela, D.
   (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP
   Tasks', *Advances in Neural Information Processing Systems 33* (NeurIPS
   2020), pp. 9459–9474. https://arxiv.org/abs/2005.11401 — originalpappret
   som myntade termen RAG. Roll: historiskt ursprung, parallellt med Kents
   egna 2024-texter.
2. Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J.,
   Wang, M. and Wang, H. (2023) 'Retrieval-Augmented Generation for Large
   Language Models: A Survey', arXiv:2312.10997.
   https://arxiv.org/abs/2312.10997 — delar RAG i Naive/Advanced/Modular
   RAG. Roll: vetenskaplig grund för Kents egen Classic/Advanced-indelning
   (notera terminologiskillnad: pappret säger "Naive", Kent säger "Classic"
   — ska inte likställas rakt av i text).
3. Anthropic (2024) 'Introducing Contextual Retrieval', *Anthropic
   Engineering*, 19 September 2024.
   https://www.anthropic.com/engineering/contextual-retrieval — Claude-
   specifik vidareutveckling av RAG (49–67 % färre missade träffar). Roll:
   "vad som hänt sen", extra relevant just i Claude-kompassen.

**Beslut (2026-08-01): alla tre används.** Regel 2 och regel 3
(`kent-meta-regler-for-code`) är uppfyllda för alla tre — inget fabricerat,
alla länkar kontrollerade.

**4d. Blogginlägg — ja eller nej? — BESLUTAT ✓**
**Beslut (2026-08-01):** Båda — ett blogginlägg på klel.wordpress.com och en
uppdaterad kompass, samma mönster som `PRD_mappkontroll.md` (blogg bär det
fulla resonemanget, kompass visar ett komprimerat destillat).

**4e. Referensstil — BESLUTAT: kommenterad Harvard-referens (annotated
bibliography)**
Kent vill att varje källa, utöver vanligt Harvard-format, får en kort,
egen mening i parentes efter referensen som sammanfattar vad källan handlar
om och/eller varför den är med — ett mönster han använt i annat sammanhang.
Bekräftat exempel (Kent godkände ton och längd):

> Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N.,
> Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S. and Kiela, D.
> (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP
> Tasks', *Advances in Neural Information Processing Systems 33* (NeurIPS
> 2020), pp. 9459–9474. https://arxiv.org/abs/2005.11401 *(Originalpappret
> som myntade termen RAG — historisk startpunkt för hela tekniken.)*
>
> Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J.,
> Wang, M. and Wang, H. (2023) 'Retrieval-Augmented Generation for Large
> Language Models: A Survey', arXiv:2312.10997.
> https://arxiv.org/abs/2312.10997 *(Delar RAG i Naive, Advanced och Modular
> RAG — den vetenskapliga grunden för Classic/Advanced-indelningen i Kents
> eget RAG-projekt.)*
>
> Anthropic (2024) 'Introducing Contextual Retrieval', *Anthropic
> Engineering*, 19 September 2024.
> https://www.anthropic.com/engineering/contextual-retrieval *(Anthropics
> egen vidareutveckling av RAG, upp till 67 % färre missade träffar — visar
> var tekniken står idag, specifikt för Claude.)*

**Implementationsdetalj för kodningsfasen (ej akut nu):** `sourcesData`-
arrayen i `index.html` har idag inget fält för en sådan kommentar (endast
`ref`, `title`, `type`, `pub`, `url`, `urlLabel`). Ett nytt fält (t.ex.
`annotation`) behöver läggas till när koden väl skrivs. Gäller bara de nya
RAG-källorna — befintliga Lundgren-poster ändras inte utan uttrycklig
begäran.

**Genomfört (2026-08-01):** Kent bad att detta görs till en stående,
generell regel, inte bara ett val för det här projektet. Spridd till fem
styrfiler: `kent-meta-regler-for-code` (Regel 2, nivå 2, global,
`C:\Users\kentl\.claude\skills\kent-meta-regler-for-code\SKILL.md`, v3),
projektets `CLAUDE.md` (avsnitt "Källhantering"), `AI-teknik/RAG/
WORKFLOW.md` (Regel 3, ett annat projekts egen styrfil), projektskillen
`claude-kompassen-konventioner`, och projektets `README.md`.
Kontonivå-originalet (`kent-meta-regler`) kan Claude Code inte skriva till —
Kent har fått kopierbar text för att synka det manuellt om han vill. Ny
stående praxis sparad i minnessystemet
(`feedback_propagate_standing_rules`): vid framtida generella
regeländringar söker Claude proaktivt igenom kända styrfilsplatser, istället
för att vänta på att Kent upptäcker glapp och ber om spridning separat.

**4f. Advanced RAG tillämpat på arbetet självt — BESLUTAT ✓ (nytt, metanivå)**
Kent föreslog (2026-08-01) att tillämpa sin egen Advanced RAG-policy
(`RAG/agents.md`/`skills.md`) på själva arbetet med den här PRD:n och
Claude-kompassen — inte bara beskriva RAG, utan praktisera den: verifiera
sakpåståenden mot minst två oberoende källor, med en transparent Retrieval
Summary. **Viktig ärlighetsdetalj:** detta är inte teknisk RAG (inga
embeddings/vektordatabas) — det är samma beslutslogik och transparenskrav,
tillämpade manuellt av Claude som agent med egna sökverktyg (WebSearch,
WebFetch). Skillnad mot grundnivån (`kent-meta-regler-for-code`, Regel 2/3,
som redan kräver verifierade länkar och inget fabricerat): kravet på
**minst två oberoende källor** och en **skriven Retrieval Summary**.

**Genomfört:** en ny skill skapad i två versioner:
- **Auktoritativ:** `kent-advanced-rag`, nivå 2 (global),
  `C:\Users\kentl\.claude\skills\kent-advanced-rag\SKILL.md`.
- **Kopia** (ej auktoritativ, tydligt markerad som sådan i filen), nivå 1
  (projekt), `.claude/skills/kent-advanced-rag/SKILL.md` i den här mappen —
  skapad för att Kent ska kunna se och länka till skillen på GitHub (den
  globala `.claude`-mappen ingår inte i något repo). Skillen länkar tillbaka
  till Claude-kompassen och till det här PRD:t, så sammanhanget den skapades
  i går att hitta senare.
- Projektets `CLAUDE.md` (Skill-inventeringen) uppdaterad med den nya
  skillen på båda nivåerna — samma spridningspraxis som i 4e, tillämpad
  direkt i stunden istället för att vänta på att Kent upptäcker glappet.

**Kents promptexempel (2026-08-01), bekräftat och länkverifierat:**

> "Använd Advanced RAG enligt
> [AI-teknik/RAG/agents.md](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/agents.md)
> och [skills.md](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/skills.md)
> på det här: verifiera varje sakpåstående mot minst två oberoende källor,
> rangordna källorna efter tillförlitlighet, och avsluta med en Retrieval
> Summary (teknik, källor, reranking, varför)."

**Beslut:** detta promptexempel ska med i både Claude-kompassen (RAG-kortet
i Fas 1) och det nya blogginlägget, som ett praktiskt exempel på "hur man
promptar RAG" — tillsammans med brasklappen att det inte är riktig teknisk
RAG (se ärlighetsdetaljen ovan). Blir ett fjärde "levande exempel" i
materialet, bredvid RAG/-projektet, Frans G. Bengtsson-exemplet och
spridnings-episoden (4e).

## 5. Leveranser

- [x] Beslut 4a (kortstruktur i Fas 1) — fjärde kort, efter SKILL.md
- [x] Kents RAG-erfarenhet identifierad och avgränsad (4b) — RAG/-projektet
      + Frans G. Bengtsson-exemplet (huvudmaterial) plus två 2024-texter
      (historia, blogg-endast)
- [x] Tre källor valda och verifierade (4c) — Lewis 2020, Gao 2023,
      Anthropic 2024
- [x] Beslut 4d (blogg och kompass, båda)
- [x] Beslut 4e (annoterad källförteckning) — genomfört, spridd till fem
      styrfiler
- [x] Beslut 4f (Advanced RAG på arbetet självt) — skillen `kent-advanced-rag`
      skapad (global + projektkopia), promptexempel bekräftat och
      länkverifierat, CLAUDE.md:s Skill-inventering uppdaterad
- [x] Beslut: 2024-texterna endast i blogginlägget; Frans G. Bengtsson-
      inlägget in i både `sourcesData` (som ny `2026b`, med omlettring
      c–h) och blogginlägget
- [x] Blogginlägg skrivet och publicerat: ["Sluta gissa – ragga i stället"](https://klel.wordpress.com/2026/08/01/sluta-gissa-ragga-i-stallet/)
      (klel.wordpress.com, 1/8 2026)
- [x] Text/innehåll skrivet för Fas 1-kortet (RAG) — fjärde kort i
      `steerFiles`, med konceptbrygga, riktigt utdrag ur `RAG/agents.md`,
      Classic/Advanced-förklaring, länk till Frans G. Bengtsson-exemplet
      och bloggen, båda promptexemplen (A/B), och en avslutande reflektion
- [x] Nya poster i `sourcesData`: Anthropic (2024), Gao (2023), Lewis (2020)
      på rätt alfabetisk plats, plus Frans G. Bengtsson-inlägget som ny
      `2026b` (omlettring av gamla b–g till c–h genomförd och verifierad
      i webbläsaren)
- [x] `sourcesData`-strukturen utökad med `annotation`-fält (`renderSources`
      uppdaterad för att visa det, befintliga poster opåverkade)
- [x] skillTooltip-stalefläcken fixad i samma svep: `linkedin-ai-respons`
      borttagen, `kent-meta-regler-for-code` och `kent-advanced-rag`
      tillagda i nivå 2a-listan
- [x] JS-syntax verifierad efter kodändring (`node --check`) — OK
- [x] Visuell koll i webbläsaren: kortet klickbart, detail-panel renderar,
      länkar fungerar, källistan (`#kallor`) visar alla nya poster i rätt
      ordning med annoteringar

## 6. Produktionsordning

Alla sakfrågor (4a–4f) är nu beslutade — inget kvarstår att stämma av. Kvar
är bara själva skrivandet. Samma mönster som `PRD_mappkontroll.md`:
innehåll/källa klart → blogg → kompass (bloggen bär det fulla resonemanget,
kompasskortet blir ett komprimerat destillat av det).

1. Blogginlägg skrivs (fullt resonemang: koncept + Kents erfarenhet +
   spridnings-episoden + Advanced RAG-metaexperimentet, från avsnitt 1–2
   och 4f)
2. RAG-kortet i Fas 1 skrivs — destillat av bloggen
3. `sourcesData` uppdaterad: nytt `annotation`-fält, tre nya källor
   (Lewis/Gao/Anthropic), Frans G. Bengtsson-inlägget som ny `2026b` med
   omlettring av gamla b–g till c–h
4. JS-syntax verifierad efter kodändring (`node --check`)

## 7. Källor

**Externa källor (Harvard, annoterat, alfabetisk ordning):**

- Anthropic (2024) 'Introducing Contextual Retrieval', *Anthropic
  Engineering*, 19 september 2024.
  https://www.anthropic.com/engineering/contextual-retrieval *(Anthropics
  egen vidareutveckling av RAG, upp till 67 % färre missade träffar — visar
  var tekniken står idag, specifikt för Claude.)*
- Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J.,
  Wang, M. and Wang, H. (2023) 'Retrieval-Augmented Generation for Large
  Language Models: A Survey', arXiv:2312.10997.
  https://arxiv.org/abs/2312.10997 *(Delar RAG i Naive, Advanced och
  Modular RAG — den vetenskapliga grunden för Classic/Advanced-indelningen
  i Kents eget RAG-projekt.)*
- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N.,
  Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S. and Kiela, D.
  (2020) 'Retrieval-Augmented Generation for Knowledge-Intensive NLP
  Tasks', *Advances in Neural Information Processing Systems 33* (NeurIPS
  2020), pp. 9459–9474. https://arxiv.org/abs/2005.11401 *(Originalpappret
  som myntade termen RAG — historisk startpunkt för hela tekniken.)*
- Lundgren, K. (2024a) 'Exempel på RAG', controllerutangranser.wordpress.com,
  27 maj 2024. https://controllerutangranser.wordpress.com/2024/05/27/exempel-pa-rag/
  *(Kents första RAG-text — ett praktiskt Python/väder-exempel, ingen
  Classic/Advanced-distinktion ännu. Bokstav "a" vald framför "b" enligt
  titelns alfabetiska ordning, då exakt klockslag samma dag är okänt.)*
- Lundgren, K. (2024b) 'RAG för mer precisa AI-svar', klel.wordpress.com,
  27 maj 2024. https://klel.wordpress.com/2024/05/27/rag-for-mer-precisa-ai-svar/
  *(En grundläggande introduktion till RAG med GitHub Copilot Enterprise
  som exempel — utgångspunkten för Kents senare, mer utvecklade
  RAG-arbete.)*
- Lundgren, K. (2026) 'Kan man lita på det AI:n berättar om Frans G.
  Bengtsson?', klel.wordpress.com, 15 juli 2026.
  https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/
  *(Kents praktiska tillämpning av Classic vs. Advanced RAG på en verklig
  biografisida — huvudexemplet bakom RAG-kortet i Fas 1.)*

**Interna referenser (projektfiler, inte Harvard-citerbara):**

- Denna konversation (planering av RAG-tillägget till Claude-kompassen,
  2026-08-01)
- `AI-teknik/RAG/README.md`, `agents.md`, `skills.md` — Kents portabla
  RAG-ramverk (Classic vs. Advanced)
- `AI-teknik/RAG/WORKFLOW.md` — arbetsregler för RAG-projektet
- `AI-teknik/RAG/Frans-G-Bengtsson/RAG-metod.md` — metodbeskrivning för det
  praktiska exemplet

## 8. Status

**Genomfört.** Alla sex delfrågor (4a–4f) beslutade och levererade: fjärde
kort i Fas 1 (med AGENTS.md-bryggan som berättarkrok), Kents fulla
RAG-historik (2024-texter → RAG/-projektet med Classic/Advanced → Frans G.
Bengtsson-exemplet), tre externa källor (Lewis, Gao, Anthropic), annoterad
källförteckning (nu en generell regel, spridd till fem styrfiler),
Advanced RAG-metaexperimentet med ny skill (`kent-advanced-rag`, global +
projektkopia). Blogginlägget ["Sluta gissa – ragga i stället"](https://klel.wordpress.com/2026/08/01/sluta-gissa-ragga-i-stallet/)
är publicerat (1/8 2026), med två promptexempel (fristående och en
övertydlig påminnelseversion) som Kent själv slipade till efter flera
rundor granskning. RAG-kortet är kodat i `index.html`, `sourcesData` är
uppdaterad (tre nya källor, Frans G. Bengtsson som ny `2026b`, omlettring
c–h, nytt `annotation`-fält), JS-syntaxen verifierad och kortet testat
visuellt i webbläsaren. Inget kvarstår.

## 9. Innehållsbrief för skriv-/kodningsfasen

*(Nytt avsnitt, tillagt på Kents begäran efter en andra genomläsning: en
kort, avgränsad sammanfattning av exakt vad som ska skrivas — utan
processhistorik — så att skriv-/kodningsfasen inte behöver sortera ut
signal från brus i resten av dokumentet.)*

**Fyra levande exempel finns, men de ska INTE vägas lika i bloggen:**

1. **Ryggraden (huvuddelen av texten): RAG/-projektet + Frans G.
   Bengtsson-exemplet, som en enda rörelse.** Börja med konceptbryggan
   (avsnitt 2: styrfiler = förutbestämd kontext, RAG = frågeberoende
   kontext). Förklara sedan Classic vs. Advanced RAG med Kents eget
   ramverk (`RAG/agents.md`/`skills.md`), och landa i Frans G.
   Bengtsson-sidan som konkret bevis — teori följt av praktik.
2. **Kort, avgränsad bisats: spridnings-episoden** (avsnitt 4e). Egen
   avgränsad ruta/stycke, inte ett huvudavsnitt — den bevisar Fas 1:s
   poäng om utspridda styrfiler, men handlar om process, inte om RAG i
   sig.
3. **Avslutningen: Advanced RAG-metaexperimentet** (avsnitt 4f), med
   promptexemplet som sista, konkreta, kopierbara rad i inlägget — ett
   "gör det här själv nu"-avslut, inte begravt i mitten.

**RAG-kortet i Fas 1 (kompassen):** ett komprimerat destillat av punkt 1
ovan (konceptbryggan + Classic/Advanced + länk till Frans G. Bengtsson),
plus promptexemplet från punkt 3 som en fact-box. Spridnings-episoden
(punkt 2) är blogg-material, inte kompass-material — för kort/konkret för
ett kort, hör hemma i det längre resonemanget.

**Källor att använda:** se avsnitt 7 i sin helhet (redan i annoterat
Harvard-format, klart att återanvända rakt av).

**Konkreta kodändringar, se avsnitt 5/6 för fullständig lista:** fjärde
kort i `steerFiles`, tre nya källor + Frans G. Bengtsson som ny `2026b`
(med omlettring c–h) i `sourcesData`, nytt `annotation`-fält, JS-syntax
verifierad.

## Ändringslogg

- 2026-08-01 (v1): Skapad. Bakgrund och syfte utifrån Kents två svar om
  placering (Fas 1) och vinkel (koncept + egen erfarenhet). Fyra öppna
  frågor identifierade, inget beslutat ännu.
- 2026-08-01 (v2): 4a beslutat (fjärde kort i Fas 1, efter SKILL.md, enligt
  Kents skiss) och 4d beslutat (både blogg och kompass). 4b och 4c kvarstår
  öppna på Kents egen begäran.
- 2026-08-01 (v3): Förtydligat att 4c medvetet väntar på 4b — Kent valde
  uttryckligen att inte research:a källor än, eftersom hans egen RAG-
  erfarenhet kan påverka vilken källa som blir relevant.
- 2026-08-01 (v4): 4b i huvudsak löst — Kent bekräftade
  `AI-teknik/RAG/`-projektet som huvudmaterial, och hittade två äldre
  (27/5 2024) introduktionstexter om RAG (klel.wordpress.com och
  controllerutangranser.wordpress.com), båda verifierade. Beslutat: de två
  äldre texterna vävs in som historia/referenser i det nya blogginlägget,
  inte som huvudmaterial. 4c: tre externa källor (Lewis et al. 2020, Gao et
  al. 2023, Anthropic 2024) researchade och verifierade (länk, titel,
  författare, datum kontrollerat) — väntar på Kents slutgiltiga urval.
- 2026-08-01 (v5): 4a ombekräftat (Claude instämmer uttryckligen: fjärde
  kort är rätt val). 4c beslutat — alla tre källor används. Ny punkt 4e
  tillagd och beslutad: källor skrivs som kommenterad Harvard-referens
  (annotated bibliography) — vanligt Harvard-format plus en kort
  parentetisk sammanfattning/motivering per källa. Exempel skrivna för
  samtliga tre källor, väntar på Kents ok av exakt ton/längd.
  Implementationsdetalj noterad: `sourcesData` behöver ett nytt fält för
  detta när kodningsfasen startar.
- 2026-08-01 (v6): Kent bekräftade exemplens ton/längd och bad att kravet på
  annoterad källförteckning görs till en stående, generell regel — inte
  bara ett val för det här projektet. Genomfört i
  `kent-meta-regler-for-code` (Regel 2, v3). Öppet om projekt-CLAUDE.md och
  `RAG/WORKFLOW.md` också ska uppdateras för konsekvens.
- 2026-08-01 (v7): Kent bad att spridningen görs "överallt" — genomfört i
  ytterligare fyra filer (projektets `CLAUDE.md`, `RAG/WORKFLOW.md`,
  `claude-kompassen-konventioner`, `README.md`). Kent kopplade detta
  explicit till Fas 1:s tema om utspridda styrfiler och bad att episoden
  vävs in som material i det nya blogginlägget/RAG-kortet. Ny stående regel
  sparad i minnessystemet (`feedback_propagate_standing_rules`).
- 2026-08-01 (v8): Genomläsning med "nya ögon" på Kents begäran, inför
  skriv-/kodningsfasen. Kent upptäckte själv att avsnitt 7 (Källor) fortfarande
  sa "inga ännu" trots att 4c varit beslutat sedan v5 — rättat, med fullt
  annoterad Harvard-lista (externa källor + Kents egna, i alfabetisk
  ordning) plus en separat lista interna referenser. Ytterligare
  inkonsekvenser hittade och rättade vid samma genomläsning: (1) avsnitt 8
  (Status) påstod fortfarande att 4c:s källurval var öppet, trots att det
  beslutats i v5; (2) 4e:s egen text sa fortfarande "öppet" om att sprida
  regeln till CLAUDE.md/WORKFLOW.md, trots att det gjordes klart i v7;
  (3) avsnitt 4d låg fysiskt *efter* 4e i dokumentet trots lägre bokstav —
  flyttat till rätt läsordning (a→b→c→d→e); (4) avsnitt 3 (Omfattning) och
  5 (Leveranser) märkte fortfarande 4b/4c som "öppna"; (5) en detalj som
  bara nämnts i chatten — att Frans G. Bengtsson-inlägget (15/7) skulle
  kräva omlettring av `sourcesData`s Lundgren-grupp (b–g → c–h) om det
  läggs in — hade aldrig skrivits in i själva PRD:t; tillagt under 4b:s
  öppna delfråga. Produktionsordning (6) och Leveranser (5) omskrivna för
  att spegla att 4a–4e faktiskt är klara.
- 2026-08-01 (v9): Ny punkt 4f — Kent föreslog att tillämpa sin egen
  Advanced RAG-policy på arbetet med den här PRD:n/kompassen självt, inte
  bara beskriva den. Genomfört: ny skill `kent-advanced-rag` skapad i två
  versioner (nivå 2 global, auktoritativ; nivå 1 projekt, tydligt markerad
  kopia för synlighet/länkbarhet på GitHub) — båda länkar tillbaka till
  Claude-kompassen och det här PRD:t. Projektets `CLAUDE.md`
  (Skill-inventeringen) uppdaterad direkt, utan att vänta på att Kent
  efterfrågar det separat (tillämpning av `feedback_propagate_standing_rules`
  i praktiken). Kents promptexempel (med riktiga GitHub-länkar till
  `agents.md`/`skills.md`) verifierat och godkänt som fjärde levande exempel
  i blogg/kompass, med brasklapp om att det inte är teknisk RAG.
- 2026-08-01 (v10): Kent frågade varför avsnitt 4 fortfarande heter "Öppna
  frågor" när nästan allt är beslutat — ännu en instans av samma
  stale-rubrik-problem (engelska "stale", se v13) som avsnitt 7/8 hade i
  v8. Rubriken döpt om till
  "Frågor och beslut", med en kort not om varför. Enda kvarvarande genuint
  öppna punkten: delfrågan under 4b (sourcesData/omlettring).
- 2026-08-01 (v11): Kent löste den sista öppna punkten: 2024-texterna
  stannar i blogginlägget (går inte in i `sourcesData`), medan Frans G.
  Bengtsson-inlägget (15/7) går in i **både** kompassen och blogginlägget —
  vilket utlöser den tidigare identifierade omletteringen (ny `2026b`,
  gamla b–g skiftar till c–h). Leveranser, Produktionsordning och Status
  uppdaterade för att spegla att alla sex delfrågorna (4a–4f) nu är
  beslutade — inga öppna sakfrågor kvar innan skriv-/kodningsfasen.
- 2026-08-01 (v12): Obetydlig testrad, tillagd för att Kent skulle kunna
  bekräfta att commit/push via Cursor fungerar som vanligt igen efter
  incidenten tidigare samma dag.
- 2026-08-01 (v13): Kent bad om en andra genomläsning innan skriv-/
  kodningsfasen, plus jämförelse mot `PRD_generell.md`. Strukturen matchar
  mallen exakt (avsnitt för avsnitt). Två nya stale-fläckar (engelska
  "stale" — inaktuell/föråldrad information; termen "stale-fläckar" är en
  egen, inte etablerad svensk-engelsk hybrid, se Kents fråga samma dag)
  hittade och rättade: avsnitt 3 (Omfattning) och avsnitt 5 (Leveranser)
  hänvisade
  fortfarande till "öppen delfråga" under 4b, trots att den löstes i v11;
  4b:s egen statustagg uppgraderad från "I huvudsak löst" till "Beslutat".
  Ny sektion 9 (Innehållsbrief) tillagd på Kents begäran, som svar på oron
  att PRD:t blivit så processtungt att skriv-/kodningsfasen riskerar att
  blanda ihop sakinnehåll med historik. Exempel-viktning fastställd: RAG/-
  projektet + Frans G. Bengtsson som ryggrad, spridnings-episoden som kort
  bisats, Advanced RAG-metaexperimentet/promptexemplet som avslutning —
  inte fyra jämnstora exempel.
- 2026-08-01 (v14): **Genomfört.** Blogginlägget skrevs (`kent-skrivstil`),
  fick titeln "Sluta gissa – ragga i stället" (Kents eget ordval, en
  RAG/ragga-ordlek) och publicerades på klel.wordpress.com. Flera
  granskningsrundor innan det stod klart: (1) källförteckningen orsakade
  upprepade WordPress-inklistringsproblem — löstes till slut genom att
  skriva källorna som fristående stycken utan punktlista (se
  `feedback_wordpress_paste_long_lines` i minnet, och `kent-skrivstil`);
  (2) promptexemplet utvecklades till två varianter — en fristående (för
  läsare utan skillen) och en övertydlig påminnelseversion som medvetet
  namnger den globala skillens exakta sökväg, som en motåtgärd mot just
  det "svårt att hålla reda på allt"-problem hela materialet handlar om;
  (3) mindre språkgranskning av Kents egna tillägg. Därefter kodades
  RAG-kortet i `index.html` (fjärde kort i `steerFiles`, efter SKILL.md),
  `sourcesData` uppdaterades (tre nya källor + `annotation`-fält + Frans G.
  Bengtsson som ny `2026b` med omlettring c–h — bekräftat: inga andra
  in-text-hänvisningar till bokstäverna fanns någon annanstans i filen),
  och skillTooltip-stalefläcken (linkedin-ai-respons m.m.) fixades i samma
  svep. JS-syntax verifierad (`node --check`), och kortet testat visuellt
  i webbläsaren (klick, detail-panel, länkar, källista). Inget kvarstår.
- 2026-08-01 (v15): Kent körde ett begriplighetstest — en ny, kontextlös
  Claude Code-session (öppnad utanför projektmappen) läste den publicerade
  kompassen och sammanfattade den med egna ord, se
  `Omdomen/omdome_260801.md` (omformaterad till riktig markdown). Testet
  bekräftade stark begriplighet överlag, men visade konkret att RAG-kortet
  krävde en andra genomläsning: öppningsmeningen påstod parallellitet med
  CLAUDE.md/AGENTS.md/SKILL.md ("en fjärde sorts styrfil") och motsade sig
  sedan själv två meningar senare. Verifierat samtidigt: en knapp märkt
  "Tekniköversikt" som testsessionen inte lyckades klicka fram finns
  faktiskt och fungerar (rad ~249 i `index.html`) — ett verktygsproblem i
  testsessionen, inte en bugg på sidan. Åtgärdat: RAG-kortets undertext
  ändrad från "Classic → Advanced" till "Ingen fil — en policy", och
  öppningsmeningen omskriven för att leda med skillnaden istället för
  likheten. Medvetet valt bort: en egen tag-färg för kortet, eftersom det
  skulle bryta mot `claude-kompassen-konventioner`s regel att nya
  färgvarianter hör till nya faser, inte enskilda kort. JS-syntax
  verifierad, ändringen bekräftad i webbläsaren.
