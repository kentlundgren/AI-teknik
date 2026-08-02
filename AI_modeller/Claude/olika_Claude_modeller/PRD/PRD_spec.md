# PRD – PRD vs. SPEC.md i Claude-kompassen (Fas 0)

**Namn:** PRD_spec
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_spec.md`
**Skapad:** 2026-08-02
**Version:** 6 (fryst av Kent 2026-08-02)
**Status:** **Fryst.** Nästa steg enligt produktionsordningen: blogginlägg
→ `PRD_generell.md`-uppdatering → `index.html`, Fas 0.
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

**Tillägg 2026-08-02, ny fråga under 4b-diskussionen:** Kent lyfte en separat
arkitekturfråga — om `index.html` (som växer i storlek och komplexitet) bör
delas upp i separata HTML/CSS/JS-filer, och om det i så fall påverkar var/hur
SPEC.md-konceptet visualiseras. Bedömning: det påverkar inte 4b — samma
kortdatastruktur (`id`/`name`/`sub`/`intro`/`steps`/`fact`/`note`) fungerar
oavsett om koden ligger i en fil eller flera. Frågan är egen och läggs
utanför den här PRD:ns scope (se avsnitt 3, "Ingår inte").

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
- Ett blogginlägg till klel.wordpress.com/category/ai/ som sammanfattar och
  reflekterar kring PRD vs. SPEC.md-distinktionen, skrivet innan kodningen
  börjar — Kents etablerade mönster för att samla tankarna innan en
  leverans byggs, bekräftat för den här PRD:n 2026-08-02.

**Ingår inte:**
- Att skriva om Fas 1–3 i kompassen.
- Att retroaktivt skriva om `PRD_mappkontroll.md` eller `PRD_rag.md`.
- Att bygga en mall-generator eller tooling för SPEC.md-filer.
- Att implementera ändringen i `index.html` — det sker som ett separat steg
  efter att den här PRD:n frysts, enligt processen PRD-kortet själv
  beskriver.
- Att avgöra frågan för Kents projekt utanför det här repot (rekommendationen
  kan återanvändas, men det är inte vad som avgörs här).
- Att avgöra om `index.html` ska delas upp i separata HTML/CSS/JS-filer —
  se Tillägg 2026-08-02 ("ny fråga under 4b-diskussionen") i avsnitt 1. Det
  är en egen, större arkitekturfråga som inte gates:as av eller påverkar
  SPEC-kortets placering (se 4b), och hör hemma i en egen framtida PRD.

## 4. Frågor och beslut

**a) Ska SPEC.md bli en del av projektets eget arbetssätt, eller bara
förklaras som koncept på sidan? — BESLUTAT ✓ (sammanslagen med tidigare
4c).** SPEC.md ska inte alltid skrivas — men varje PRD-arbete i det här
projektet ska explicit ta ställning till om ett SPEC.md-steg behövs som
nästa steg, innan CLAUDE.md uppdateras eller kodning börjar. Det är själva
ställningstagandet, inte artefakten, som blir den nya stående praktiken.
Konsekvens: `PRD_generell.md` får en ny, återkommande delfråga i avsnitt 4
("Frågor och beslut") för alla framtida PRD:er: *"Behövs ett SPEC.md-steg
härifrån?"*

**Levande exempel, tillämpat på denna PRD:** behöver *den här* leveransen
(nytt/utökat kort i Fas 0) ett eget SPEC.md innan kodning? Svar: nej —
uppgiften är innehålls-/textarbete inom en redan etablerad kortmall (samma
fält — id/name/sub/intro/steps/fact/note — som `PRD_rag.md` redan levererade
utan SPEC.md). Den kvalificerar inte som tekniskt komplex eller starkt
agent-driven. Det blir kompassens första konkreta, *negativa* exempel på
checkpoint-frågan — lika lärorikt som ett positivt exempel hade varit.

**b) Var i Fas 0 ska SPEC-konceptet placeras? — BESLUTAT ✓.** Ett eget
syskonkort inom Fas 0 (samma format som dagens PRD-kort), **inte** en ny
egen "Fas 0.5" som Kent först föreslog. Kent bekräftade riktningen men var
osäker på om valet var rent visuellt eller om det påverkade kompassens
processflöde/logik — värt att reda ut explicit: **det är ett
informationsarkitektur-/designval, inte ett logikval.** Fas 0 representerar
redan hela "innan CLAUDE.md skrivs"-steget; att lägga ett andra kort i
samma Fas-sektion ändrar inte sekvensen Fas 0 → Fas 1 → Fas 2 → Fas 3 — det
är samma mönster som redan finns i Fas 1, som har flera kort (CLAUDE.md,
AGENTS.md, SKILL.md, RAG) inom en och samma fas utan att fasindelningen
påverkas. Källorna stödjer ordningen PRD → SPEC → kodning i sak (Delimarsky,
2025; Kiro, 2026), men *var på sidan* det visas är separat från *i vilken
ordning* det sker.

**c) Ska SPEC.md vara obligatoriskt efter varje PRD, eller valfritt? —
BESLUTAT ✓, samma svar som 4a.** Valfritt. Thoughtworks (Liu, 2025) varnar
för "spec drift" och avsaknad av kvalitetsstandard när specifikationer
används slentrianmässigt — vilket är precis varför 4a landade i "ta
ställning till", inte "gör alltid". Riktmärke: tekniskt komplexa eller
starkt agent-drivna leveranser, se det levande exemplet under 4a för hur
riktmärket tillämpas.

**d) Namnkonvention — BESLUTAT ✓.** En enda `SPEC.md`, för visuell och
begreppsmässig konsekvens med `CLAUDE.md`/`AGENTS.md`/`SKILL.md` i Fas 1.
Kent lyfte under diskussionen en distinkt, större idé: flera spec-filer
uppdelade *efter specialiserad agent-roll* (t.ex. en design-/layoutagent, en
researchagent, en språkgranskare, en kritiker) — embryot till ett
fullständigt multiagent-arbetsflöde för att bygga/förbättra kompassen,
snarare än en filnamnskonvention för en enskild leverans. Kent beslutade att
hålla den här PRD:n avgränsad: idén noteras här som framtida riktning (se
`fact`-liknande notering nedan) men avgörs inte i det här dokumentet — en
eventuell multiagent-arbetsflödes-PRD blir ett eget, senare dokument.

*Framtida riktning, ej beslutad här:* ett SPEC-steg som i sig består av
flera rollspecifika filer (design/layout, research, språkgranskning,
kritisk granskning) skulle kunna styra ett multiagent-arbetsflöde för
kompassens egen produktion. Väcker frågor om orkestrering (jfr Workflow-
verktyget) som ligger utanför den här PRD:ns omfattning.

## 5. Leveranser

- [x] Genomläsning med nya ögon genomförd (2026-08-02, tre glapp hittade och rättade)
- [x] PRD frusen och godkänd av Kent (2026-08-02)
- [x] Beslut om delfråga a (arbetssätt vs. bara visning på sidan) — checkpoint-fråga, inte obligatoriskt SPEC.md
- [x] Beslut om delfråga b (eget kort vs. rad i stegkedjan) — eget syskonkort inom Fas 0, inte ny Fas 0.5
- [x] Beslut om delfråga c (obligatoriskt vs. valfritt) — valfritt, samma beslut som a
- [x] Beslut om delfråga d (namnkonvention) — en enda SPEC.md; multiagent-idén noterad som framtida riktning, egen PRD senare
- [ ] Blogginlägg skrivet och publicerat (klel.wordpress.com/category/ai/), innan kodning
- [ ] Ny/utökad kortdata i `index.html`, Fas 0, enligt besluten ovan
- [ ] `PRD_generell.md` uppdaterad med ny stående delfråga: "Behövs ett
      SPEC.md-steg härifrån?"

## 6. Produktionsordning

1. Genomläsning med nya ögon (gjord 2026-08-02, se Ändringslogg v5).
2. Frys den här PRD:n.
3. Skriv och publicera blogginlägget till klel.wordpress.com/category/ai/ —
   *innan* kodning, samma mönster som `PRD_generell.md` beskriver
   (käll-/innehållsarbete klart → blogginlägg bär det fulla resonemanget →
   kod/kompass blir ett komprimerat destillat av bloggen).
4. Uppdatera `PRD_generell.md` med den stående delfrågan från 4a/4c —
   mallen ska styra hur nästa PRD skrivs, inte tvärtom.
5. Uppdatera `index.html`, Fas 0, enligt besluten i avsnitt 4.

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

Alla fyra delfrågor är beslutade. a och c slogs ihop: SPEC.md blir en
checkpoint-fråga i varje framtida PRD (`PRD_generell.md`), inte ett
obligatoriskt dokument — med ett levande exempel tillämpat på PRD:n själv
(svaret blev nej för denna leverans). d landade i en enda `SPEC.md`, med
Kents multiagent-idé medvetet lämnad utanför scope som en framtida, separat
PRD. b landade i ett eget syskonkort inom Fas 0 — inte en ny "Fas 0.5" —
ett informationsarkitektur-/designval som inte rör kompassens processflöde.
En till separat fråga restes under samma diskussion (bör `index.html` delas
upp i HTML/CSS/JS?) och lades medvetet utanför scope, se Tillägg 2026-08-02
("ny fråga under 4b-diskussionen") i avsnitt 1 och "Ingår inte" i avsnitt 3.
En genomläsning med nya ögon (Kents etablerade praxis innan kodning startar)
hittade tre glapp — en stale rad i produktionsordningen, en tvetydig
korsreferens mellan två likadant daterade Tillägg, och bloggmomentet
felaktigt skrivet som "out of scope" trots att Kent bekräftat det — alla
rättade i v5. PRD:n är redo att frysas.

## Ändringslogg

- 2026-08-02 (v1): Skapad efter tre klargörande frågor till Kent (syfte,
  placering, källkrav) och en researchrunda med fyra oberoende källor om
  spec-driven development.
- 2026-08-02 (v2): Delfråga a och c beslutade och sammanslagna efter Kents
  svar (checkpoint per PRD, inte obligatoriskt SPEC.md), med ett levande
  exempel tillämpat på PRD:n själv. Delfråga d omtolkad efter Kents fråga —
  hans multiagent-idé är en annan axel än den ursprungliga
  fil-per-fas-frågan och väntar på ett separat scope-beslut.
- 2026-08-02 (v3): Delfråga d beslutad efter Kents scope-svar — en enda
  SPEC.md, multiagent-idén medvetet lämnad utanför scope som framtida,
  egen PRD. Endast delfråga b (rekommendationen om eget syskonkort) kvarstår
  innan frysning.
- 2026-08-02 (v4): Delfråga b beslutad — eget syskonkort inom Fas 0, inte
  ny Fas 0.5, klargjort som design-/informationsarkitekturval snarare än
  processflödesändring. Kents fråga om att dela upp `index.html` i
  HTML/CSS/JS noterad och medvetet lagd utanför scope. Alla fyra delfrågor
  nu beslutade — PRD:n redo att frysas.
- 2026-08-02 (v5): Genomläsning med nya ögon, på Kents begäran innan
  kodning. Tre glapp hittade och rättade: stale "(väntar på b och d)" i
  produktionsordningen, tvetydig korsreferens mellan två likadant daterade
  Tillägg i avsnitt 1, och bloggmomentet felskrivet som "out of scope" trots
  att Kent bekräftat att han vill ha ett blogginlägg till
  klel.wordpress.com/category/ai/ innan kodningen — flyttat in i Omfattning,
  Leveranser och Produktionsordning.
- 2026-08-02 (v6): PRD fryst av Kent. Nästa steg: blogginlägg, sedan
  `PRD_generell.md`, sedan `index.html`.
