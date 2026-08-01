# Claudes ekosystem – tre faser, Cursor och GitHub

En **bloggtext och ett interaktivt verktyg** om att hitta rätt bland Claudes olika
ytor, verktyg och AI-modeller, och hur det kopplar vidare till Cursor, Git och
GitHub — samt filerna (CLAUDE.md, AGENTS.md, SKILL.md) som styr samarbetet med AI:n.
Byggt tillsammans med Claude Code, som ett konkret exempel på det de handlar om.

## Live-sida (GitHub Pages) och bloggtext

- Claude-kompassen: https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
- Bloggtext: [En bild av Claudes ekosystem](https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/)

## Vad sidan tar upp

Verktyget är uppbyggt i **tre faser** (klickbara kort, med direktlänkar `#fas1`,
`#fas2`, `#fas3`, `#sammanfattning`):

- **Fas 1 — filerna som styr**, innan man ens börjar: CLAUDE.md, AGENTS.md och
  SKILL.md, inklusive ett verifierat faktum (Claude Code läser bara sin egen
  CLAUDE.md, inte AGENTS.md) och ett verkligt exempel på när samma skill legat
  på två nivåer samtidigt, osynkat.
- **Fas 2 — ytorna**: claude.ai i webbläsaren, Claude-appen, kommandotolken och
  Cursor — samma motor, olika kartor.
- **Fas 3 — Cursor och Git (3a) → GitHub (3b)**: versionhantering och leverans
  till webben, med Kents egen, subjektiva motivering för att välja Cursor framför
  Claude Code i den här fasen.
- **Sammanfattning**: hur sidan själv blev till, med en tidslinje och en
  källmodal (annoterat Harvardformat) för allt som refereras.

## Filer i mappen

| Fil | Roll |
| --- | --- |
| `index.html` | Claude-kompassen — hela verktyget i en självbärande fil |
| `CLAUDE.md` | Projektkontext + arbetsregler för Claude Code i det här projektet |
| `README.md` | Denna fil |
| `bloggtext-utkast-surface-harness.md` | Källutkastet till bloggtexten (publicerad, se länk ovan) |
| `.claude/skills/` | Två projektnivå-skills: `claude-kompassen-konventioner` (struktur/konventioner för `index.html`) och `kent-advanced-rag` (kopia av en global skill, se `CLAUDE.md`) |
| `*.jpg` | Skärmdumparna som både bloggtexten och verktyget bygger på |

## Kort sammanfattning

- Bygger vidare på tre tidigare blogginlägg om samma återkommande tema: att tappa
  bort sig, och gradvis hitta ord och struktur, i Claudes och det bredare
  AI-ekosystemet.
- Skrivet och kodat i ett samarbete mellan Kent Lundgren och Claude Code, med
  många rundor av frågor, rättningar och verifiering mot primärkällor — texten
  och verktyget är själva ett exempel på det de handlar om.

## Relaterat

- Claude-delens startsida: [`../README.md`](../README.md)
- Projektets startsida: [`../../../README.md`](../../../README.md)
- Skills-delen (samma repo, liknande tema om styrfiler): [`../../../Skills/`](../../../Skills/)
