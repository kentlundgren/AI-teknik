# Claudes ekosystem – ytor, verktyg, modeller, Cursor och Git

En **syntes-text och ett interaktivt kodningsverktyg** om att hitta rätt bland Claudes
olika ytor (claude.ai, Claude-appen, kommandotolken, Cursor), verktyg (Chat, Projects,
Artifacts, Cowork, Code), AI-modeller, och hur det kopplar vidare till Cursor, Git och
GitHub — samt filerna (CLAUDE.md, AGENTS.md, SKILL.md) som styr samarbetet med AI:n.

## Live-sida (GitHub Pages)

- Claude-kompassen: https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/

## Vad sidan tar upp

Ett interaktivt verktyg i tre lager (klickbara kort):

- **Ytor** – claude.ai i webbläsaren, Claude-appen, kommandotolken och Cursor, med
  varsin skärmdump och en lista över vilka verktyg och modeller som finns där.
- **Efter Claude** – kedjan Cursor → Git → GitHub, inklusive en verklig diagnos av en
  GitHub CLI-autentisering som gått ut (`gh auth status` vs. vanlig `git`).
- **Filerna som styr** – kort om CLAUDE.md, AGENTS.md och SKILL.md, och det verifierade
  faktumet att Claude Code bara läser sin egen CLAUDE.md, inte AGENTS.md.

## Filer i mappen

| Fil | Roll |
| --- | --- |
| `index.html` | Claude-kompassen — hela verktyget i en självbärande fil |
| `CLAUDE.md` | Projektkontext + arbetsregler för Claude Code i det här projektet |
| `README.md` | Denna fil |
| `bloggtext-utkast-surface-harness.md` | Arbetsutkast till den tillhörande bloggtexten (klel.wordpress.com) — ej färdigredigerat |
| `*.jpg` | De skärmdumpar som både bloggtexten och verktyget bygger på |

## Kort sammanfattning

- Bygger vidare på tre tidigare blogginlägg om samma återkommande tema: att tappa bort
  sig, och gradvis hitta ord och struktur, i Claudes och det bredare AI-ekosystemet.
- Skrivet och kodat i ett samarbete mellan Kent Lundgren och Claude Code — texten och
  verktyget är själva ett exempel på det de handlar om.

## Relaterat

- Projektets startsida: [`../../../README.md`](../../../README.md)
- Skills-delen (samma repo, liknande tema om styrfiler): [`../../../Skills/`](../../../Skills/)
