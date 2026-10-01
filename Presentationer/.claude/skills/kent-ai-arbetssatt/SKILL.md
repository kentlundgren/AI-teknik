---
name: kent-ai-arbetssatt
description: >
  Hur Kent Lundgren arbetar med generativ AI, som han själv har beskrivit och bekräftat:
  lära känna modeller och harness genom att göra samma sak flera gånger vid olika
  tillfällen, verifiera och kvalitetssäkra själv, planera skriftligt först (PRD, SPEC,
  process-logg), vilka verktyg han använder till vad, och hans mönster att spegla samma
  ämne i flera medier (program, bloggtext, LinkedIn, ibland video och podd). Använd när Claude skriver
  text i Kents namn eller röst om hur han arbetar med AI (LinkedIn, blogg, ansökan,
  intervjusvar, Provbänken/Nr2 eller annan presentation), när en sida ska beskriva hans
  arbetssätt, eller när Kent själv berättar något nytt om hur han jobbar med AI och det
  bör sparas. Använd också så snart Kent nämner ett inlägg, program, bloggtext, video eller
  podd om ett ämne: sök då upp och fråga efter de andra medierna om samma ämne (avsnitt 7).
  Innehåller bara det Kent bekräftat; allt annat ska frågas, inte fyllas i.
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

**Ett andra exempel: fredagsquizen, 23 veckor.** Bekräftat av Kent 2026-10-01.
Varje fredag under 23 veckor (aug 2025 – jan 2026) skapade Kent ett quiz om
Simrishamns kommuns verksamhet — med frågor, svar och bloggreferenser — och
delade det med kollegor via Teams. Frågorna togs fram med Claude och Cursor.
Vecka efter vecka märkte han att quizen gick snabbare att ta fram och blev bättre.
Under samma period lärde han sig GitHub, och quizen publicerades också på GitHub Pages.
Kärnan: lära på ett kul och nyfiket sätt, och följa sin egen och modellernas förbättring
parallellt. Alla kopplade blogginlägg samlade under taggen
[#fredagsquiz](https://controllerutangranser.wordpress.com/tag/fredagsquiz/).
Samlat på Provbänken fråga 1 ("Så lär jag känna modellerna"), fråga 3 ("Kul och lärande")
och fråga 5 (kort id `fredagsquiz`).

**Ett andra exempel: statsskulden, samma ämne ett år senare.** 2025 byggde Kent en
interaktiv presentation av Sveriges och USA:s statsskuld med Gemini (Canvas), och skrev,
filmade och pratade om den. 2026 gjorde han om den med verifierade källor och skrev en
bloggtext om vad det lärde honom om vibe-kodning. Se avsnitt 7 för alla medier.

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

**Utvecklingen över tid (Kents egna ord, 2026-10-01):** på sista tiden arbetar han mer och mer med
PRD. Hans LinkedIn-inlägg "Min "samvaro" med Claude" (2 aug 2026) börjar: "Jag skäms lite när jag
tänker på hur jag jobbade med AI förut. Ingen plan, bara kod. Det har ändrats, i tre tydliga steg."
Bilden "Min utveckling med generativ AI – tre steg" visar stegen: (1) **fråga hellre en gång för
mycket**, (2) **ett riktigt samtal innan kod**, (3) **en formell PRD (Fas 0) plus ibland en SPEC**.
Samma ämne finns som bloggtexter ("PRD först, sedan CLAUDE.md", 31 jul 2026, och "Behöver jag en
spec.md?", 2 aug 2026) och som PRD-mallen. Samlat på Provbänken, fråga 1 (kortet "PRD, specifikation
och process-logg").

## 5. Var han skriver om det

- LinkedIn: <https://www.linkedin.com/in/kentlundgren/>
- X: sökning `#nyaAI` från `kentlundgren` (Kents egen tagg)
- Bloggarna: [Tankar i tiden från Lund](https://klel.wordpress.com/category/ai/) och
  [Controller, lärare och coach utan gränser](https://controllerutangranser.wordpress.com/category/ai/)
- Inläggens **visningssiffror är Kents egen statistik** och blir gamla. Kent har beslutat
  (2026-09-30) att en siffra får visas på en publik sida om den är **avrundad och daterad**
  ("drygt 4 000 visningar, per 30 sep 2026"), och bara den han själv gett. Hämta aldrig
  siffror på eget initiativ för att publicera dem.

## 6. Öppet: Kents iakttagelser om modellers styrkor och svagheter

**Nästan inte dokumenterat än.** Kent har sagt att han känner dem. När han berättar vilka
iakttagelser han gjort (till exempel "modell X var bäst på Y", "harness Z hanterade W
sämre"), skriv in dem här, med datum, exakt som han formulerar det och med reservation om
han själv har en ("kan bero på min vana"). Fyll aldrig i från egen kunskap om modeller.

**Hittills nedskrivet (Kents egna uppgifter):**
- **Oktober 2024, Anthropics Claude 3.5 Sonnet** (den modell som då gällde): Kent lyckades få
  fram vindkraftskalkylen med den **gratis** modellen. Han har också gått igenom många
  olika AI-modeller, i princip alla som gällde i oktober 2024, i en YouTube-video
  ([Vindkraftskalkyl med hjälp av AI - Anthropics Claude](https://youtu.be/JSoxry9Xpr0)) och en
  [bloggtext](https://controllerutangranser.wordpress.com/2024/10/22/vindkraftskalkyl-med-hjalp-av-ai/)
  (22 okt 2024). Uppgiften 2026-09-30; innehållet i videon är inte genomgånget.
- **2024, React med och utan JSX** (vindkraftskalkylerna 19 och 25): att bygga med React gjordes
  för att få svaret direkt utan en beräkna-knapp. Nu kan Kent med AI bygga med vanlig HTML, CSS
  och JavaScript, utan React, och ändå få svaret direkt när man ändrar en cell. Han tyckte det var
  "magiskt" och tycker fortfarande att det är lite märkvärdigt.
- **Före GitHub (2024):** när han bad generativ AI förbättra en kalkyl kunde den göra den sämre
  eller skapa en bugg som hängde hela programmet, och då gick det inte att ångra. Han fick börja
  om med en ny fil per version (därför "Vindkraftskalkyl 25" = version 25).

## 7. Ett ämne, flera perspektiv: samma fenomen i flera medier

**Mönstret (Kents egen beskrivning, 2026-09-30).** Kent gör en AI-produkt som läggs på
GitHub, och skriver sedan om den **både på LinkedIn och i en bloggtext**. Ibland finns
också en **YouTube-video** och/eller en **podd**. Ett ämne X återfinns alltså ofta i
flera medier, som var och en speglar X ur ett eget perspektiv. **Syftet är att lära sig mer
om, och skriva om, generativ AI.** Att spegla samma fenomen ur flera håll är ett sätt att
förstå det, på samma sätt som upprepningen i avsnitt 1.

**Medier:** Program/app (GitHub Pages, Vercel eller `kentlundgren.se`), Bloggtext
(`controllerutangranser.wordpress.com` eller `klel.wordpress.com`), LinkedIn, YouTube
(kanalen `@KentLundgrenLarsErik`), Podd (Spotify). Alla medier finns inte för alla ämnen.

**Exempel som Kent själv gett:**

| Ämne | Program | Bloggtext | LinkedIn | YouTube | Podd |
|---|---|---|---|---|---|
| Lönar sig resan efter öl? (2026) | [Ölkalkylen](https://kentlundgren.github.io/Ovrigt/Fritid/ol_Tyskland/index.html) | [Hur många öl till break-even?](https://controllerutangranser.wordpress.com/2026/07/29/hur-manga-ol-till-break-even/) | ja (drygt 4 000 visningar, per 30 sep 2026) | – | – |
| Statsskuld Sverige och USA, **2026** | [Program](https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/) | [Vad ett beslutsträd om statsskuld lär oss om vibe-kodning](https://controllerutangranser.wordpress.com/2026/07/28/vad-ett-beslutstrad-om-statsskuld-lar-oss-om-vibe-kodning/) | ja | – | – |
| Statsskuld Sverige och USA, **2025** | [Program (Gemini)](https://kentlundgren.se/program/ekonomi/statsskuld/statsskuld_gemini2.html) | [Sverige och USA:s statsskuld](https://controllerutangranser.wordpress.com/2025/06/11/sverige-och-usas-statsskuld/) | **saknas** | [Statsskuld Sverige och USA 1970-2025](https://youtu.be/YNELsJQJO7w) | [#24 Sveriges och USA:s statsskuld](https://open.spotify.com/episode/4aXJYB0JuHLOyYTcXYVy6K) |

Fler ämnen finns samlade på Provbänken, fråga 5 (`Nr2`, `data.js`, korten med kategorin
"Ämne i flera medier"): AI-testerna, Vindkraftskalkylen, Rösterna efter ChatGPT, Claude-kostnad
med flera. Vissa har bara ett medium hittills (Harness och agenter finns bara som LinkedIn-artikel,
Minnesanvändning och En gren för sanningen bara som bloggtext). **Det betyder inte att andra medier
saknas, bara att de inte hittats än.**

### Stående arbetsregel (Kents uttryckliga begäran 2026-09-30)

När Kent nämner **ett** medium om ett ämne Y (ett LinkedIn-inlägg, ett program, en bloggtext,
en video, en podd), gör alltid detta, utan att bli påmind:

1. **Sök rätt på syskonen.** Finns det även ett program/app, en bloggtext, ett
   LinkedIn-inlägg, en video eller en podd om Y? Använd `kent-hitta-projekt`, Steg 4
   (bloggtexten länkar ofta till programmet; `lnkd.in`-genvägar går att följa med `curl -L`).
2. **Fråga Kent** om något saknas eller är osäkert: "Finns det även en bloggtext om Y?"
   Gissa inte, och påstå inte att ett medium finns när det inte gör det.
3. **Föreslå och notera kopplingar** mellan medierna: länka dem till varandra när du
   hjälper Kent skriva (se `kent-skrivstil`, "Kopplingar mellan medier"), och samla ämnet som
   ett **ämneskort** på Provbänken fråga 5 med fältet `medier` (se `kent-presentationer`,
   Regel 16).
4. **Notera årsomgångar.** Samma ämne kan finnas i flera år (statsskulden 2025 och 2026).
   Samla dem under samma ämne, med året angivet, och koppla till avsnitt 1 (upprepning).

Länkar till publicering ska vara **utan spårningsparametrar** (`?si=`, `utm_`, `rcm`).

**Var regeln bor** (så att den finns i fler sammanhang än den här skillen):
`kent-meta-regler-for-code` Regel 15, `kent-hitta-projekt` Steg 4, `kent-skrivstil`
("Kopplingar mellan medier"), `Presentationer/CLAUDE.md` och minnesposten
`feedback_amne_flera_medier`.

## Uppdateringslogg

- 2026-10-01 (v3): Avsnitt 1 utökat med **fredagsquiz** som ett bekräftat andra
  exempel på lärande genom upprepning (23 veckor, aug 2025 – jan 2026, Claude +
  Cursor, taggen #fredagsquiz på bloggen). Samlat på Provbänken fråga 1, 3 och 5.
- 2026-09-30 (v2), samma dag: Nytt **avsnitt 7, Ett ämne, flera perspektiv**: Kents mönster att
  spegla samma ämne i program, bloggtext, LinkedIn, ibland video och podd, för att lära sig mer om
  generativ AI (exempel: Ölkalkylen, statsskulden 2025 och 2026), med en stående arbetsregel om att
  söka upp och fråga efter de andra medierna när ett nämns. Regeln om visningssiffror ändrad:
  avrundade och daterade siffror Kent själv gett får visas. Utlöst av arbetet med Provbänken fråga 5.
- 2026-09-30 (v1): Skapad efter arbetet med Provbänken (`Nr2`), där Kent bad om att få med
  att han proaktivt lär känna modellers och harness styrkor och svagheter genom att göra
  samma sak flera gånger (vindkraftskalkylen), och frågade om det fanns ett skill för
  "hur jag arbetar med generativ AI". Det fanns inget; närmast var
  `kent-meta-regler-for-code` (samarbetsreglerna) och `kent-ekosystem-analys` (hur Claude
  fungerar, inte hur Kent arbetar). Avsnitt 6 lämnat medvetet tomt.
