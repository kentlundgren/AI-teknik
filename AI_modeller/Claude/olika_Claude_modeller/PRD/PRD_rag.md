# PRD – RAG i Claude-kompassen (Fas 1: styrfiler)

**Namn:** PRD_rag
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_rag.md`
**Skapad:** 2026-08-01
**Version:** 4 (4a och 4d beslutade, 4b i huvudsak löst, 4c: tre källor
verifierade — väntar på Kents slutgiltiga urval)
**Status:** **Planering.** Ingen kod, blogg eller källa skriven ännu.
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

Kents egen konkreta RAG-erfarenhet är ännu inte beskriven i den här
konversationen — han har sagt att han återkommer till den. Den här versionen
av PRD:t är därför medvetet ofullständig på just den punkten.

**Tillägg 2026-08-01 (samma dag):** Kent bekräftade kortstrukturen (4a) genom
att bifoga en skiss/skärmdump av Fas 1 med ett fjärde, ännu tomt kort märkt
"RAG" placerat direkt till höger om SKILL.md-kortet — samma visuella mönster
(ram, rubrik, undertext) som de tre befintliga korten. Han bekräftade även
att slutresultatet ska bli både ett blogginlägg och en uppdaterad kompass
(4d). Två frågor kvarstår öppna på hans egen begäran: 4b (hans RAG-erfarenhet
— han hittar just nu inte tillbaka till tidigare anteckningar och återkommer)
och 4c (källa, se nedan).

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

## 3. Omfattning

**Ingår (beslutat):**
1. Ett fjärde kort i Fas 1:s `steerFiles`-array, märkt "RAG", i samma visuella
   mönster som CLAUDE.md/AGENTS.md/SKILL.md (ram, rubrik, undertext, klickbar
   `.card-btn` + `.detail`-panel). Placering: direkt efter SKILL.md-kortet,
   enligt Kents skiss (2026-08-01).
2. Kents egen RAG-erfarenhet vävs in som konkret exempel, när den beskrivits
   (4b, öppen).
3. Ny källpost i `sourcesData` (alfabetisk plats) för minst en primärkälla om
   RAG-konceptet (4c, öppen).
4. Blogginlägg på klel.wordpress.com **och** uppdaterad kompass — båda,
   beslutat 2026-08-01 (4d).

**Ingår inte:**
- Ändring av grundstrukturen i index.html (sex sektioner, id:n, färgschema)
  — enligt `claude-kompassen-konventioner` ett publikt kontrakt, ändras inte
  utan uttrycklig fråga.
- Implementation av en faktisk RAG-pipeline i det här projektet. Kompassen
  *beskriver* RAG, den *bygger* inte en.

## 4. Öppna frågor

**4a. Nytt kort i Fas 1, eller tillägg i ett befintligt kort? — BESLUTAT ✓**
**Beslut (2026-08-01):** Fjärde kort, parallellt med CLAUDE.md/AGENTS.md/
SKILL.md, direkt efter SKILL.md. Bekräftat av Kent via skiss/skärmdump av
Fas 1-raden med ett tomt "RAG"-kort i samma visuella mönster. Notera att RAG
inte är en fil Claude Code läser in på samma sätt som de tre andra — men
Kent har uttryckligen valt att ändå visa det som ett jämbördigt fjärde kort,
och det beslutet gäller, oavsett vad som är tekniskt "mest exakt".

**4b. Vad är Kents konkreta RAG-erfarenhet? — I HUVUDSAK LÖST ✓**
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
  Lundgren, K. (2026). *"Kan man lita på det AI:n berättar om Frans G.
  Bengtsson?"* klel.wordpress.com, 15/7 2026.
  https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/

**Historik, hittad och verifierad 2026-08-01 (två äldre, enklare texter,
inte Classic/Advanced-uppdelade):**
- Lundgren, K. (2024) *"RAG för mer precisa AI-svar."* klel.wordpress.com,
  27/5 2024. https://klel.wordpress.com/2024/05/27/rag-for-mer-precisa-ai-svar/
- Lundgren, K. (2024) *"Exempel på RAG."* controllerutangranser.wordpress.com,
  27/5 2024. https://controllerutangranser.wordpress.com/2024/05/27/exempel-pa-rag/

**Beslut (2026-08-01):** dessa två 2024-texter tillför inte mycket sakligt
längre (ingen Classic/Advanced-distinktion, RAG/-projektet från 2026 har gått
förbi dem) men ska ändå vävas in som **historia/referenser i det nya
blogginlägget**, för att visa hur Kents eget RAG-tänkande utvecklats över två
år. **Öppen delfråga:** ska dessa två äldre poster också läggas in i
Claude-kompassens egen `sourcesData`, eller bara nämnas/länkas i det externa
blogginlägget utan att bli en post i index.html? Avgörs när blogginlägget och
RAG-kortets text faktiskt skrivs.

**4c. Källor. — TRE KANDIDATER VERIFIERADE, väntar på Kents slutgiltiga urval**
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

**Öppen fråga:** Claude har rekommenderat att använda alla tre (olika roller:
ursprung / vetenskaplig grund / Claude-specifik vidareutveckling), men Kent
har ännu inte bekräftat urvalet. Regel 2 och regel 3 (`kent-meta-regler-for-
code`) är uppfyllda för alla tre — inget fabricerat, alla länkar kontrollerade.

**4d. Blogginlägg — ja eller nej? — BESLUTAT ✓**
**Beslut (2026-08-01):** Båda — ett blogginlägg på klel.wordpress.com och en
uppdaterad kompass, samma mönster som `PRD_mappkontroll.md` (blogg bär det
fulla resonemanget, kompass visar ett komprimerat destillat).

## 5. Leveranser

- [x] Beslut 4a (kortstruktur i Fas 1) — fjärde kort, efter SKILL.md
- [ ] Kents RAG-erfarenhet beskriven (4b) — väntar på Kent
- [ ] Minst en källa vald och verifierad (4c) — väntar på research/verifiering
- [x] Beslut 4d (blogg och kompass, båda)
- [ ] Text/innehåll skrivet för Fas 1-kortet (RAG)
- [ ] Ny post i `sourcesData`, alfabetisk plats
- [ ] Blogginlägg på klel.wordpress.com
- [ ] JS-syntax verifierad efter kodändring (`node --check`), enligt praxis
      från `PRD_mappkontroll.md`

## 6. Produktionsordning

Samma mönster som `PRD_mappkontroll.md`: innehåll/källa klart → blogg →
kompass (bloggen bär det fulla resonemanget, kompasskortet blir ett
komprimerat destillat av det).

1. 4b löst — Kents RAG-erfarenhet beskriven
2. 4c löst — minst en källa vald och verifierad
3. Blogginlägg skrivet (fullt resonemang: koncept + Kents exempel)
4. RAG-kortet i Fas 1 skrivs — destillat av bloggen
5. `sourcesData` uppdaterad, JS-syntax verifierad

## 7. Källor

Inga ännu — se öppen fråga 4c. Inget fabricerat eller ogranskat citeras här.

## 8. Status

**Utkast, i planeringsstadiet — nära skrivklart.** Placering (Fas 1, fjärde
kort, med AGENTS.md-bryggan som berättarkrok), slutleverans (blogg + kompass)
och Kents RAG-erfarenhet (RAG/-projektet, Classic vs Advanced, Frans G.
Bengtsson-exemplet, plus två 2024-texter som historia) är på plats. Enda
kvarstående öppna punkten: Kents slutgiltiga urval bland de tre verifierade
källkandidaterna (4c), samt den mindre delfrågan om de två 2024-texterna
även ska in i `sourcesData` eller bara nämnas i blogginlägget. Ingen kod,
blogg eller källpost är skriven ännu.

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
