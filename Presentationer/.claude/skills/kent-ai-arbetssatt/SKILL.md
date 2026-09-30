---
name: kent-ai-arbetssatt
description: >
  Hur Kent Lundgren arbetar med generativ AI, som han själv har beskrivit och bekräftat:
  lära känna modeller och harness genom att göra samma sak flera gånger vid olika
  tillfällen, verifiera och kvalitetssäkra själv, planera skriftligt först (PRD, SPEC,
  process-logg), och vilka verktyg han använder till vad. Använd när Claude skriver
  text i Kents namn eller röst om hur han arbetar med AI (LinkedIn, blogg, ansökan,
  intervjusvar, Provbänken/Nr2 eller annan presentation), när en sida ska beskriva hans
  arbetssätt, eller när Kent själv berättar något nytt om hur han jobbar med AI och det
  bör sparas. Innehåller bara det Kent bekräftat; allt annat ska frågas, inte fyllas i.
metadata:
  type: process
---

# Kents arbetssätt med generativ AI

Den här skillen samlar **vad Kent själv har sagt och bekräftat** om hur han arbetar
med generativ AI. Den finns för att text i hans namn ska stämma med verkligheten, och
för att han inte ska behöva förklara sitt arbetssätt på nytt i varje session.

**Placering:** fullständig version här (`Presentationer/.claude/skills/`), så att den
syns på GitHub. Ett tunt pekar-skill finns globalt i
`~/.claude/skills/kent-ai-arbetssatt/`. Lägg inget innehåll där.

Gäller tillsammans med `kent-meta-regler-for-code` (särskilt Regel 3, inga fabricerade
fakta, och Regel 13, skriv aldrig in en handling i Kents röst som han inte själv gjort)
och `kent-skrivstil` (rösten). Upprepa inte dem här.

## Hårda gränser när texten handlar om Kent

- **Bara det som står i avsnitt 1–5.** Är något inte bekräftat: fråga Kent, eller skriv
  det passivt/allmänt ("går att göra"), aldrig "jag har gjort".
- **Påstå inte vilken modell som är bäst på vad.** Kent har sagt att han känner
  modellernas styrkor och svagheter, men *vilka* de är står inte dokumenterat här än
  (se avsnitt 6). Hitta inte på jämförelser.
- **Kents upplevelse väger tyngre än en teknisk "sanning"** (se `kent-bygg-sidor`, regel 2).

## 1. Lära känna modeller och harness genom upprepning

Kents egna ord, bekräftade 2026-09-30:

- Han arbetar **proaktivt** med att lära känna olika AI-modellers och olika harness
  styrkor och svagheter.
- Han har **kört samma uppdrag och skapat samma produkt flera gånger, vid olika
  tidpunkter, med olika AI-modeller och olika harness.** Så lär han sig.
- Att **envist göra samma sak vid olika tillfällen** är ett sätt att lära sig AI.
- Harness = verktyget som kör modellen (till exempel Claude Code eller Cursor).
  Förklara ordet kort när läsaren kan vara en rekryterare.

**Det tydligaste exemplet: vindkraftskalkylen.** Samma kalkyl i flera versioner:

| Version | När | Verktyg | Länk |
|---|---|---|---|
| Tidigare skepnader | sedan 2024 | Excel, React, en chatbot inkopplad (enligt Kents blogginlägg) | [Ett vindkraftverk, fem sanningar](https://controllerutangranser.wordpress.com/2026/07/03/ett-vindkraftverk-fem-sanningar-vems-kalkyl-raknar-vi-egentligen/) |
| Fem perspektiv | juli 2026 (första commit 2026-07-03) | Cursor | [Live](https://kentlundgren.github.io/Vindkraft/vindkraftskalkyl/vindkraftskalkyl.html) |
| Investeringskalkylator, 4 MW | 14 aug 2026 | Gemini 3 | [Live](https://kentlundgren.github.io/AI-teknik/Vindkraft/260814/Gemini3/vindkraftskalkyl_260814.html) |
| Next.js-app | september 2026 | Next.js på Vercel | [Live](https://vindkraft-ver3.vercel.app) |

Vilken AI-modell som stod bakom Cursor- och Next.js-versionerna är **inte** dokumenterat
här. Fråga, gissa inte.

Mer om Kents motivation (testa, leka, lära, inte jobbsökning): minnesposten
`user_kent_ai_motivation`.

## 2. Verktyg, och vad han använder dem till

Bekräftat av Kent 2026-09-29/30 och publicerat på Provbänken (`Presentationer/Nr2`):

- **Löpande arbete:** MS Copilot, för kortare frågor och standardanalyser.
- **Djupare arbete:** Claude, Cursor och GitHub, där han bygger och förfinar analysverktyg.
- **Andra åsikt och faktakoll:** Perplexity, ChatGPT, Gemini och Grok.
- **Lära och studera:** Gemini Notebook (tidigare NotebookLM, omdöpt av Google i juli
  2026). Kents bedömning: ett bra verktyg för att lära nytt. Av material, länkar och
  YouTube-videor går det att skapa podd-liknande ljudsammanfattningar, quiz och mer.
- **Git:** Kent committar och pushar själv, i Cursor (se `kent-meta-regler-for-code`, Regel 11).

Kontrollera produktnamn mot källan innan de skrivs: AI-produkter byter namn (NotebookLM
blev Gemini Notebook).

## 3. Verifiera och kvalitetssäkra

Bekräftat av Kent 2026-09-29 (Provbänkens SPEC, avsnitt 6):

- Han kontrollerar AI:ns resultat mot källdata.
- **AI föreslår, han verifierar.**
- Han lägger inte persondata i AI-verktyg.

Fyra sätt han får nämna att han verifierar på:
1. **Bokslutstestet:** två AI-agenter (en siffergranskare, en språkgranskare) granskade
   ett årsbokslut, och Kent bedömde vilka fynd som var riktiga. Första körningen: 2
   allvarliga räknefel. Andra: inga allvarliga fel och 71 språkliga förbättringar.
   [Live](https://kentlundgren.github.io/AI/Bokslut_2025/index.html) (siffrorna är påhittade).
2. Text och siffror kontrolleras med en annan modell.
3. Summor räknas om i Excel utan AI.
4. Källor och länkar öppnas och läses, som i sidan om statsskuld.

**Skrivs inte:** "eller uppdragsgivares interna uppgifter". Kent har beslutat det, eftersom
publika verktyg med interna uppgifter byggts med AI-stöd och påståendet kan motsägas.

## 4. Planera skriftligt först

Bekräftat 2026-09-29: först en PRD (vad och varför), sedan en kort specifikation med
acceptanskriterier (exakt hur), och en process-logg under bygget. Resultat: beslut går att
spåra, och en granskare ser varför något blev som det blev.
[PRD-mall, generell](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md).
Reglerna ligger i `kent-meta-regler-for-code` (Regel 6 och 7).

## 5. Var han skriver om det

- LinkedIn: <https://www.linkedin.com/in/kentlundgren/>
- X: sökning `#nyaAI` från `kentlundgren` (Kents egen tagg)
- Bloggarna: [Tankar i tiden från Lund](https://klel.wordpress.com/category/ai/) och
  [Controller, lärare och coach utan gränser](https://controllerutangranser.wordpress.com/category/ai/)
- Inläggens **visningssiffror är Kents privata statistik.** Skriv dem inte på en publik sida.

## 6. Öppet: Kents iakttagelser om modellers styrkor och svagheter

**Inte dokumenterat än.** Kent har sagt att han känner dem. När han berättar vilka
iakttagelser han gjort (till exempel "modell X var bäst på Y", "harness Z hanterade W
sämre"), skriv in dem här, med datum, exakt som han formulerar det och med reservation om
han själv har en ("kan bero på min vana"). Fyll aldrig i från egen kunskap om modeller.

## Uppdateringslogg

- 2026-09-30 (v1): Skapad efter arbetet med Provbänken (`Nr2`), där Kent bad om att få med
  att han proaktivt lär känna modellers och harness styrkor och svagheter genom att göra
  samma sak flera gånger (vindkraftskalkylen), och frågade om det fanns ett skill för
  "hur jag arbetar med generativ AI". Det fanns inget; närmast var
  `kent-meta-regler-for-code` (samarbetsreglerna) och `kent-ekosystem-analys` (hur Claude
  fungerar, inte hur Kent arbetar). Avsnitt 6 lämnat medvetet tomt.
