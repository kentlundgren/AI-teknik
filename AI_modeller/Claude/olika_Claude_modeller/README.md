# Claudes ekosystem – fyra faser, Cursor och GitHub

En **bloggtext och ett interaktivt verktyg** om att hitta rätt bland Claudes olika
ytor, verktyg och AI-modeller, och hur det kopplar vidare till Cursor, Git och
GitHub — samt filerna (CLAUDE.md, AGENTS.md, SKILL.md) som styr samarbetet med AI:n,
och kravdokumentet (PRD, ibland ett eget SPEC.md) som föregår allt annat.
Byggt tillsammans med Claude Code, som ett konkret exempel på det de handlar om.

## Live-sida (GitHub Pages), bloggtexter och LinkedIn

- Claude-kompassen: https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
- Bloggtext: [En bild av Claudes ekosystem](https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/) (29/7 2026)
- Bloggtext: [Behöver jag en spec.md?](https://klel.wordpress.com/2026/08/02/behover-jag-en-spec-md/) (2/8 2026)
- LinkedIn: [Vilken är din Claude favorit](https://www.linkedin.com/pulse/vilken-%C3%A4r-din-claude-favorit-kent-lundgren-atqye/) (30/7 2026)
- LinkedIn: [Min "samvaro" med Claude](https://www.linkedin.com/pulse/min-samvaro-med-claude-kent-lundgren-gdjee/) (2/8 2026)

## Vad sidan tar upp

Verktyget är uppbyggt i **sex sektioner** (klickbara kort, med direktlänkar `#fas0`,
`#fas1`, `#fas2`, `#fas3`, `#sammanfattning`, `#kallor`):

- **Fas 0 — kravdokumentet**: PRD (vad ska byggas, för vem, och vad som
  uttryckligen är bortvalt) och, ibland, ett eget SPEC.md för
  agent-specifikationer — steget som föregår allt annat, tillagt 31/7–2/8 2026.
- **Fas 1 — filerna som styr**: CLAUDE.md, AGENTS.md och SKILL.md, inklusive ett
  verifierat faktum (Claude Code läser bara sin egen CLAUDE.md, inte AGENTS.md)
  och ett verkligt exempel på när samma skill legat på två nivåer samtidigt, osynkat.
- **Fas 2 — ytorna**: claude.ai i webbläsaren, Claude-appen, kommandotolken och
  Cursor — samma motor, olika kartor.
- **Fas 3 — Cursor och Git (3a) → GitHub (3b)**: versionhantering och leverans
  till webben, med Kents egen, subjektiva motivering för att välja Cursor framför
  Claude Code i den här fasen.
- **Sammanfattning**: hur sidan själv blev till, med en tidslinje.
- **Källor**: en egen sektion med en Harvard-formaterad, alfabetisk och
  annoterad källförteckning för allt som refereras.

## Filer i mappen

| Fil/mapp | Roll |
| --- | --- |
| `index.html` | Claude-kompassen — hela verktyget i en självbärande fil |
| `CLAUDE.md` | Projektkontext + arbetsregler för Claude Code i det här projektet |
| `README.md` | Denna fil |
| `PRD/` | Kravdokument bakom projektets olika delar: mappkontroll, RAG, SPEC.md-processen och den generella PRD-processen |
| `Bilder/` | Skärmdumpar och illustrationer som bloggtexterna och verktyget bygger på (flyttade hit från projektroten 2/8 2026) |
| `Omdomen/` | Ett fristående begriplighetstest av sidan, gjort av en kontextlös Claude Code-session (1/8 2026) |
| `bloggtext-utkast-surface-harness.md` | Källutkastet till den publicerade bloggtexten "En bild av Claudes ekosystem" |
| `bloggtext-utkast-rag.md` | Utkast om RAG (Classic vs. Advanced) — ännu inte publicerat |
| `.claude/skills/` | Två projektnivå-skills: `claude-kompassen-konventioner` (struktur/konventioner för `index.html`) och `kent-advanced-rag` (kopia av en global skill, se `CLAUDE.md`) |

## Kort sammanfattning

- Bygger vidare på tre tidigare blogginlägg om samma återkommande tema: att tappa
  bort sig, och gradvis hitta ord och struktur, i Claudes och det bredare
  AI-ekosystemet.
- Skrivet och kodat i ett samarbete mellan Kent Lundgren och Claude Code, med
  många rundor av frågor, rättningar och verifiering mot primärkällor — texten
  och verktyget är själva ett exempel på det de handlar om.
- Processen bakom sidan är själv dokumenterad: varje nytt tillägg (RAG, SPEC.md)
  har gått via ett eget PRD i `PRD/`-mappen innan det byggts in i `index.html`.

## Relaterat

- Claude-delens startsida: [`../README.md`](../README.md)
- Projektets startsida: [`../../../README.md`](../../../README.md)
- Skills-delen (samma repo, liknande tema om styrfiler): [`../../../Skills/`](../../../Skills/)
