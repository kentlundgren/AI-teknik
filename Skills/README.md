# Skills – hur AI-skills fungerar

En **pedagogisk lärosida** om själva skill-systemet: vad en AI-"skill" är, var
skills bor på olika nivåer, hur de nås/läses av olika verktyg, och hur man skapar
en egen. Den här delen är ett komplement till [RAG-delen](../RAG/) – här handlar det
inte om en enskild AI-teknik, utan om **verktyget** (skills) som agenter använder.

## Live-sida (GitHub Pages)

- Skills-översikt: https://kentlundgren.github.io/AI-teknik/Skills/

## Vad sidan tar upp

Live-sidan är uppdelad i två tydligt åtskilda delar (växlare högst upp):

- **Del A – Var skills bor och hur de nås.** De fyra platserna på disken
  (`.cursor\skills-cursor\`, `.cursor\skills\`, `.claude\skills\` och
  `.claude\plugins\marketplaces\…`), varför Cursor även kan läsa `.claude`-skills
  (gemensamt `SKILL.md`-format + flera läsare), samt skillnaden mellan **global**
  nivå (gäller alla projekt) och **projektnivå** (gäller bara ett projekt).
- **Del B – Vad en skill är och hur man skapar en.** Progressiv laddning, anatomin
  i en `SKILL.md` (frontmatter med `name`/`description` + brödtext) och en
  steg-för-steg-guide för att skapa en egen skill.

## Filer i mappen

| Fil | Roll |
| --- | --- |
| `index.html` | Struktur/innehåll för live-sidan (Del A + Del B) |
| `styles.css` | Utseende (matchar RAG-sidornas mörka tema) |
| `script.js` | Interaktivitet (växlare mellan Del A och Del B, årtal i sidfoten) |
| `README.md` | Denna fil |

## Kort sammanfattning

- En **skill** är en mapp med minst en fil, `SKILL.md`, som innehåller
  instruktioner en AI-agent laddar **vid behov**.
- `SKILL.md` har ett **frontmatter** (`name` + `description`) och en **brödtext**.
  Fältet `description` avgör om agenten plockar upp skillen – beskriv både *vad*
  den gör och *när* den ska användas.
- Skills kan ligga **globalt** (i användarmappen, gäller alla projekt) eller
  **per projekt** (i en `.cursor\skills\`-mapp inne i projektet).

## Relaterat

- Projektets startsida: [`../README.md`](../README.md)
- RAG-delen: [`../RAG/`](../RAG/)
