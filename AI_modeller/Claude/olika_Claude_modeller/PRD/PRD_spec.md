# PRD – PRD vs. SPEC.md i Claude-kompassen (Fas 0)

**Namn:** PRD_spec
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_spec.md`
**Skapad:** 2026-08-02
**Version:** 1 (skapad efter klargörande frågor och research)
**Status:** Utkast — väntar på Kents granskning och justering innan frysning.
**Typ:** Tilläggs-PRD (bygger på befintlig struktur i Claude-kompassen, Fas 0),
inte en grund-PRD för ett nytt projekt.

## 1. Bakgrund

Claude-kompassens Fas 0 beskriver idag PRD (Product Requirements Document)
som kravdokumentet som föregår CLAUDE.md/AGENTS.md/SKILL.md — se det
befintliga PRD-kortet i `index.html`. Kent har reflekterat över att
AI-kodningsvärlden på senare tid gör en tydligare åtskillnad mellan PRD
(människo-/produktinriktad: vad och varför) och **SPEC.md** (mer
agent-orienterad, med precisa acceptanskriterier och tekniska
begränsningar). Den här PRD:n undersöker om och hur Claude-kompassen bör
spegla den skillnaden.

**Tillägg 2026-08-02, klargörande svar:** Kent lämnade frågan om SPEC.md ska
bli en del av projektets *eget* arbetssätt (inte bara en förklaring för
läsaren) öppen — se 4a. Han föreslog själv en konkret placering: SPEC.md som
ett "steg 0.5", efter PRD men före CLAUDE.md — se 4b.

## 2. Syfte

- Ge kompassens läsare en korrekt, källbelagd bild av var SPEC.md hör hemma
  i förhållande till PRD och styrfilerna i Fas 1.
- Avgöra om distinktionen bara ska *förklaras* på sidan, eller om den även
  ska bli en ny *praktik* i det här projektets egen PRD-process
  (`PRD_generell.md`).

## 3. Omfattning

**Ingår:**
- Research (Harvard-källor) om hur SPEC.md/spec-driven development
  definieras och används idag, se avsnitt 7.
- Ett konkret förslag på var och hur Fas 0 ska utökas (kortstruktur,
  textinnehåll på hög nivå — inte färdig HTML-kod).
- Beslutsunderlag för om SPEC.md ska bli en del av projektets eget
  arbetssätt.

**Ingår inte:**
- Att skriva om Fas 1–3 i kompassen.
- Att retroaktivt skriva om `PRD_mappkontroll.md` eller `PRD_rag.md`.
- Att bygga en mall-generator eller tooling för SPEC.md-filer.
- Att implementera ändringen i `index.html` — det sker som ett separat steg
  efter att den här PRD:n frysts, enligt processen PRD-kortet själv
  beskriver.
- Att avgöra frågan för Kents projekt utanför det här repot (rekommendationen
  kan återanvändas, men det är inte vad som avgörs här).

## 4. Frågor och beslut

**a) Ska SPEC.md bli en del av projektets eget arbetssätt, eller bara
förklaras som koncept på sidan? — ÖPPEN.** Kent svarade uttryckligen
"osäker, PRD:n får utforska". Konsekvens om svaret blir ja: `PRD_generell.md`
behöver ett nytt avsnitt om när ett SPEC.md-steg läggs till efter en PRD.
Konsekvens om nej: bara textinnehållet i `index.html` berörs.

**b) Var i Fas 0 ska SPEC-konceptet placeras? — I HUVUDSAK LÖST ✓, en
detalj kvar.** Kent föreslog själv "steg 0.5": SPEC.md kommer efter PRD,
före CLAUDE.md. Källorna stödjer det rakt av — GitHub Spec-Kits
Specify→Plan→Tasks→Implement och Kiros requirements→design→tasks placerar
båda den precisa specifikationen mellan högnivå-intention och
implementation (Delimarsky, 2025; Kiro, 2026). Kvarstående detalj: ska
SPEC.md få **ett eget syskonkort** i Fas 0 (samma format som dagens
PRD-kort — egen intro, eget "varför skiljer den sig") eller bara **en rad**
i PRD-kortets befintliga stegkedja? Min rekommendation: eget syskonkort.
PRD-kortet får sin tyngd just av att förklara *varför* det skiljer sig från
grannen (CLAUDE.md) — SPEC.md förtjänar samma utrymme gentemot sin egen
granne (PRD), annars blir det en osynlig detalj i en punktlista.

**c) Ska SPEC.md vara obligatoriskt efter varje PRD, eller valfritt? —
ÖPPEN, ny fråga identifierad under researchen.** Thoughtworks (Liu, 2025)
varnar för "spec drift" och avsaknad av kvalitetsstandard när specifikationer
används slentrianmässigt. Rekommendation: valfritt — ett steg som används
för tekniskt komplexa eller starkt agent-drivna leveranser, inte för varje
liten ändring.

**d) Namnkonvention: en enda `SPEC.md` (à la `CLAUDE.md`/`AGENTS.md`) eller
flera filer (`requirements.md`/`design.md`/`tasks.md` à la Kiro)? — ÖPPEN.**
Rekommendation: en enda `SPEC.md`, för visuell och begreppsmässig konsekvens
med de andra `.md`-styrfilerna som redan finns i Fas 1.

## 5. Leveranser

- [ ] PRD frusen och godkänd av Kent
- [ ] Beslut om delfråga a (arbetssätt vs. bara visning på sidan)
- [ ] Beslut om delfråga b (eget kort vs. rad i stegkedjan)
- [ ] Beslut om delfråga c (obligatoriskt vs. valfritt)
- [ ] Beslut om delfråga d (namnkonvention)
- [ ] Ny/utökad kortdata i `index.html`, Fas 0, enligt besluten ovan
- [ ] `PRD_generell.md` uppdaterad, om delfråga a besvaras "ja"

## 6. Produktionsordning

1. Frys den här PRD:n efter Kents justeringar.
2. Om delfråga a = ja: uppdatera `PRD_generell.md` **innan** kompassen kodas
   — mallen ska styra hur nästa PRD skrivs, inte tvärtom.
3. Uppdatera `index.html`, Fas 0, enligt besluten i avsnitt 4.
4. Möjlig framtida leverans (out of scope att besluta här, nämns bara för
   spårbarhet): ett blogginlägg om PRD vs. SPEC.md, i linje med det
   återkommande mönstret käll-/innehållsarbete → blogg → kompass som
   `PRD_generell.md` beskriver.

## 7. Källor

Delimarsky, D. (2025) 'Spec-driven development with AI: Get started with a
new open source toolkit', *GitHub Blog*, 2 september.
https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/
*(Officiell GitHub-annonsering av Spec-Kit och dess
Specify→Plan→Tasks→Implement-arbetsflöde — primärkälla för hur specen
placeras mellan intention och implementation.)*

Kiro (2026) 'Specs', *Kiro Docs* (Amazon Web Services), uppdaterad 22 juli.
https://kiro.dev/docs/specs/ *(Officiell produktdokumentation. Visar ett
alternativt mönster — tre separata filer, requirements.md/design.md/tasks.md
— istället för en enda SPEC.md, relevant för delfråga d.)*

Liu, S. (2025) 'Spec-driven development: Unpacking one of 2025's key new
AI-assisted engineering practices', *Thoughtworks Insights*, 4 december.
https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices
*(Oberoende konsultanalys, inte en verktygsleverantör — lyfter riskerna med
spec drift och avsaknad av kvalitetsstandard, grunden för delfråga c.)*

Osmani, A. (2026) 'How to write a good spec for AI agents',
addyosmani.com, 13 januari. https://addyosmani.com/blog/good-spec/ *(Den
mest direkt relevanta källan: föreslår att blanda PRD:ns "varför" med en
SRS-liknande precisionsnivå, och namnger uttryckligen SPEC.md som den
beständiga filen mellan sessioner.)*

## 8. Status

PRD:n är ett förstautkast, inte frusen. Delfråga a lämnas medvetet öppen på
Kents egen begäran. Delfråga b är i huvudsak löst genom Kents eget förslag
("steg 0.5"), med en återstående detalj (eget kort vs. rad) där jag lagt en
rekommendation. Delfrågorna c och d är nya, identifierade under researchen,
och väntar på Kents ställningstagande innan PRD:n kan frysas.

## Ändringslogg

- 2026-08-02 (v1): Skapad efter tre klargörande frågor till Kent (syfte,
  placering, källkrav) och en researchrunda med fyra oberoende källor om
  spec-driven development.
