# PRD – PRD vs. SPEC.md i Claude-kompassen (Fas 0)

**Namn:** PRD_spec
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_spec.md`
**Skapad:** 2026-08-02
**Version:** 2 (delfråga a/c beslutade och sammanslagna efter Kents svar;
4d omtolkad och väntar på scope-beslut)
**Status:** Utkast — 2 av 4 delfrågor beslutade (a, c). Väntar på Kents
scope-beslut om multiagent-idén (d) och rekommendationen i (b) innan
frysning.
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
BESLUTAT ✓, samma svar som 4a.** Valfritt. Thoughtworks (Liu, 2025) varnar
för "spec drift" och avsaknad av kvalitetsstandard när specifikationer
används slentrianmässigt — vilket är precis varför 4a landade i "ta
ställning till", inte "gör alltid". Riktmärke: tekniskt komplexa eller
starkt agent-drivna leveranser, se det levande exemplet under 4a för hur
riktmärket tillämpas.

**d) Namnkonvention — ÖPPEN, mer komplex än ursprungsfrågan.** Ursprungsfrågan
gällde en axel: en enda fil (`SPEC.md`, à la `CLAUDE.md`/`AGENTS.md`) kontra
flera filer uppdelade *efter fas inom samma leverans* (`requirements.md`/
`design.md`/`tasks.md`, à la Kiro — krav vs. design vs. uppgifter, fortfarande
en arbetstråd). Kent har lyft en annan, distinkt idé under diskussionen:
flera filer uppdelade *efter specialiserad agent-roll* (t.ex. en design-/
layoutagent, en researchagent, en språkgranskare, en kritiker) — embryot till
ett fullständigt multiagent-arbetsflöde för att bygga/förbättra kompassen,
inte bara en filnamnskonvention. Den idén är större än vad 4d ursprungligen
avsåg och väntar på ett scope-beslut från Kent (se separat fråga i chatten):
notera den bara som framtida riktning här, eller bredda den här PRD:ns
scope för att utforska den nu.

## 5. Leveranser

- [ ] PRD frusen och godkänd av Kent
- [x] Beslut om delfråga a (arbetssätt vs. bara visning på sidan) — checkpoint-fråga, inte obligatoriskt SPEC.md
- [ ] Beslut om delfråga b (eget kort vs. rad i stegkedjan)
- [x] Beslut om delfråga c (obligatoriskt vs. valfritt) — valfritt, samma beslut som a
- [ ] Beslut om delfråga d (namnkonvention) — väntar på Kents scope-beslut om multiagent-idén
- [ ] Ny/utökad kortdata i `index.html`, Fas 0, enligt besluten ovan
- [ ] `PRD_generell.md` uppdaterad med ny stående delfråga: "Behövs ett
      SPEC.md-steg härifrån?"

## 6. Produktionsordning

1. Frys den här PRD:n efter Kents justeringar (väntar på b och d).
2. Uppdatera `PRD_generell.md` **innan** kompassen kodas — mallen ska styra
   hur nästa PRD skrivs, inte tvärtom. Lägg till den stående delfrågan från
   4a/4c.
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

Delfrågorna a och c är beslutade och sammanslagna: SPEC.md blir en
checkpoint-fråga i varje framtida PRD (`PRD_generell.md`), inte ett
obligatoriskt dokument. Delfråga b är i huvudsak löst genom Kents eget
förslag ("steg 0.5"), med en kvarstående detalj (eget kort vs. rad) där jag
lagt en rekommendation. Delfråga d visade sig rymma en större, distinkt idé
(multiagent-uppdelade specer) som väntar på ett scope-beslut från Kent innan
PRD:n kan frysas.

## Ändringslogg

- 2026-08-02 (v1): Skapad efter tre klargörande frågor till Kent (syfte,
  placering, källkrav) och en researchrunda med fyra oberoende källor om
  spec-driven development.
- 2026-08-02 (v2): Delfråga a och c beslutade och sammanslagna efter Kents
  svar (checkpoint per PRD, inte obligatoriskt SPEC.md), med ett levande
  exempel tillämpat på PRD:n själv. Delfråga d omtolkad efter Kents fråga —
  hans multiagent-idé är en annan axel än den ursprungliga
  fil-per-fas-frågan och väntar på ett separat scope-beslut.
