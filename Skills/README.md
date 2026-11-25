# Skills – hur AI-skills fungerar

**Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/Skills/](https://kentlundgren.github.io/AI-teknik/Skills/)

En **pedagogisk lärosida** om själva skill-systemet: vad en AI-"skill" är, var
skills bor på olika nivåer, hur de nås/läses av olika verktyg, och hur man skapar
en egen. Den här delen är ett komplement till [RAG-delen](../RAG/) – här handlar det
inte om en enskild AI-teknik, utan om **verktyget** (skills) som agenter använder.

## Vad sidan tar upp

Live-sidan är uppdelad i fyra tydligt åtskilda delar (växlare högst upp). Varje del
går att länka till direkt:
[#delA](https://kentlundgren.github.io/AI-teknik/Skills/#delA),
[#delB](https://kentlundgren.github.io/AI-teknik/Skills/#delB) och
[#delC](https://kentlundgren.github.io/AI-teknik/Skills/#delC) och
[#delD](https://kentlundgren.github.io/AI-teknik/Skills/#delD).

- **Del A – Var skills bor och hur de nås.** De fyra platserna på disken
  (`.cursor\skills-cursor\`, `.cursor\skills\`, `.claude\skills\` och
  `.claude\plugins\marketplaces\…`), varför Cursor även kan läsa `.claude`-skills
  (gemensamt `SKILL.md`-format + flera läsare), samt skillnaden mellan **global**
  nivå (gäller alla projekt) och **projektnivå** (gäller bara ett projekt).
- **Del B – Vad en skill är och hur man skapar en.** Progressiv laddning, anatomin
  i en `SKILL.md` (frontmatter med `name`/`description` + brödtext) och en
  steg-för-steg-guide för att skapa en egen skill.
- **Del C – Agentiska arbetsflöden.** En pedagogisk beskrivning av metaskillen
  [`kent-agentiska-arbetsfloden`](../.claude/skills/kent-agentiska-arbetsfloden/) (v6.3)
  och det genomarbetade exemplet
  [`langkatekesen-protokoll`](../.claude/skills/langkatekesen-protokoll/) (v6):
  hur två skills och en schemalagd uppgift hör ihop, skillnaden mellan arbetsflöde och
  agent, fem typer av arbetsflöden, de tio faserna, riskklassning (låg, mellan, hög)
  med ångra och reservplan, tre utfall för schemalagda uppgifter, exemplet steg för
  steg med risknivå per steg, hur exemplet växte version för version, lärdomar som
  blev regler, hur ett flöde delas upp mellan moln och dator (med en jobbsökaragent
  som exempel), hur en publik process och ett privat underlag samarbetar
  ([#c-publik-rubrik](https://kentlundgren.github.io/AI-teknik/Skills/#c-publik-rubrik)) och källorna i Harvardstil. Skillsen ligger i `.claude/skills/`; sidan
  beskriver och länkar dit men innehåller inga kopior.
- **Del D – Samma förmåga, olika ställen.** Varför Claude Code och Cowork läser
  skills från olika ställen (det avgörande är om sessionen körs på datorn eller i
  molnet), vilken session som läser vad, en tumregel för var man arbetar och var en
  ny skill ska sparas, och förslag till Anthropic som kan läsas fristående på svenska
  eller engelska:
  [#delD-forslag](https://kentlundgren.github.io/AI-teknik/Skills/#delD-forslag) och
  [#delD-forslag-en](https://kentlundgren.github.io/AI-teknik/Skills/#delD-forslag-en).

Sidan har en fast sidram: brödsmulor uppe till vänster, `{ } GitHub` nere till
vänster (länk till mappen), versionsraden i mitten av sidfoten och `</> teknik` nere
till höger (en ruta om sidans teknik och metod).

## Filer i mappen

| Fil | Roll |
| --- | --- |
| `index.html` | Struktur/innehåll för live-sidan (Del A, B och C, hörn-länkar och teknikruta) |
| `styles.css` | Utseende (matchar RAG-sidornas mörka tema) |
| `script.js` | Interaktivitet (växlare mellan Del A, B och C, teknikrutan) |
| `README.md` | Denna fil |

## Kort sammanfattning

- En **skill** är en mapp med minst en fil, `SKILL.md`, som innehåller
  instruktioner en AI-agent laddar **vid behov**.
- `SKILL.md` har ett **frontmatter** (`name` + `description`) och en **brödtext**.
  Fältet `description` avgör om agenten plockar upp skillen – beskriv både *vad*
  den gör och *när* den ska användas.
- Skills kan ligga **globalt** (i användarmappen, gäller alla projekt) eller
  **per projekt** (i en `.cursor\skills\`-mapp inne i projektet).

## Kents egna skills om agentiska arbetsflöden

Skillsen ligger på en enda plats i repot, [`../.claude/skills/`](../.claude/skills/),
där Claude Code och Cursor läser dem. Varje skillmapp har en README. Tidigare fanns
läsbara kopior här i `Skills/`; de togs bort 2026-11-24 så att det bara finns en kopia.

| Skill | Version | Vad skillen gör |
| --- | --- | --- |
| [`kent-agentiska-arbetsfloden`](../.claude/skills/kent-agentiska-arbetsfloden/) | v6.3 | Playbook för att designa agentiska arbetsflöden (metaskill): typlära, tio faser, riskklassning, publik process och privat underlag, valpunkter, fallgropar och Lärt av andra |
| [`langkatekesen-protokoll`](../.claude/skills/langkatekesen-protokoll/) | v6 | Protokollutkast och granskning för Långkatekesens styrelsemöten, med risk, ångra och reservplan per åtgärd. Mejladresserna är borttagna i repot |

Versionen står i rubriken i varje `SKILL.md`, och Git-historiken visar ändringarna
version för version.

## Relaterat

- Systersida: [Claude-kompassen](https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/) beskriver arbetssättet (ytor, Cursor, Git och GitHub); den här sidan beskriver verktyget skills.
- Projektets startsida: [`../README.md`](../README.md)
- RAG-delen: [`../RAG/`](../RAG/)

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/Skills
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\Skills`
