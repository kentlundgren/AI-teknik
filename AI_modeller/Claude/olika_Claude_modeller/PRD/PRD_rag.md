# PRD – RAG i Claude-kompassen (Fas 1: styrfiler)

**Namn:** PRD_rag
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_rag.md`
**Skapad:** 2026-08-01
**Version:** 2 (två av fyra öppna frågor lösta — se avsnitt 4)
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

**4b. Vad är Kents konkreta RAG-erfarenhet? — ÖPPEN**
Väntar på beskrivning av det/de andra projekt Kent nämner. Han har själv sagt
(2026-08-01) att han för tillfället inte hittar tillbaka till tidigare
anteckningar om detta och återkommer. Påverkar hur stort avsnitt 2 (vinkel b)
blir, och vilka konkreta detaljer som kan användas. Inget att göra här förrän
Kent hör av sig.

**4c. Källor. — ÖPPEN**
Ingen källa är ännu vald eller verifierad. Regel 2 (Harvard-format,
verifierade länkar, ingen gissad URL) och regel 3 (inga fabricerade fakta)
gäller båda här — se `kent-meta-regler-for-code`. Kandidat att undersöka och
verifiera innan den citeras: originalpappret som myntade termen RAG (Lewis
et al., 2020) — men detta är **inte verifierat än** (länk, exakt titel,
publikationskanal) och ska inte skrivas in i `sourcesData` eller nämnas i
text förrän det är kontrollerat. Ev. även en primärkälla från Anthropic om
retrieval/RAG med Claude, om en sådan finns och kan verifieras.

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

**Utkast, i planeringsstadiet.** Placering (Fas 1, fjärde kort) och
slutleverans (blogg + kompass) beslutade. Två öppna frågor kvarstår innan
skrivarbetet kan börja: 4b (Kents egen RAG-erfarenhet, väntar på honom) och
4c (val och verifiering av minst en källa). Ingen kod, blogg eller källa är
skriven.

## Ändringslogg

- 2026-08-01 (v1): Skapad. Bakgrund och syfte utifrån Kents två svar om
  placering (Fas 1) och vinkel (koncept + egen erfarenhet). Fyra öppna
  frågor identifierade, inget beslutat ännu.
- 2026-08-01 (v2): 4a beslutat (fjärde kort i Fas 1, efter SKILL.md, enligt
  Kents skiss) och 4d beslutat (både blogg och kompass). 4b och 4c kvarstår
  öppna på Kents egen begäran.
