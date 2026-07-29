# Projekt: Syntestext + kodning — Claudes ekosystem, Cursor, Git, GitHub

## Vad detta är
Arbetsmapp för att skriva en bloggtext och bygga en liten kodningsövning ("Claude-kompassen")
om hur man hittar rätt bland Claudes olika ingångar (claude.ai webb, Claude-appen,
kommandotolken/Cursor), verktyg (Chat, Projects, Artifacts, Cowork, Code), AI-modeller, samt
hur det kopplar vidare till Cursor, Git och GitHub — och hur styrfiler (CLAUDE.md, AGENTS.md,
SKILL.md) formar samarbetet. Skrivs av Kent Lundgren, publiceras på klel.wordpress.com.

Denna fil är själv ett exempel på ämnet: den visar hur CLAUDE.md ger Claude Code persistent
projektkontext mellan sessioner.

## Käll-inlägg som syntesen bygger på
- [Claude Cowork, Cursor och Claude Code – tre verktyg, ett arbetsflöde](https://klel.wordpress.com/2026/06/01/claude-cowork-cursor-och-claude-code-tre-verktyg-ett-arbetsflode/) (1/6 2026)
- [Tappade bort mig i Claudes ekosystem](https://klel.wordpress.com/2026/07/27/tappade-bort-mig-i-claudes-ekosystem/) (27/7 2026)
- [Namnet 'main' betyder inte alltid main](https://klel.wordpress.com/2026/07/28/namnet-main-betyder-inte-alltid-main/) (28/7 2026)

## Bilder i mappen (ska väva in i text + kod, inte bara illustrera)
1. `Clalude_ai_tre_saker_i_en__260729.jpg` — claude.ai webb: Chat/Code/Cowork på en startsida
2. `Clalude_appen_tre_saker_i_en__260729.jpg` — Claude-appen: samma tre, annan layout
3. `kör_igång_Clalude_i_kommandotolken_260729.jpg` — Claude Code i fristående kommandotolk
4. `GitHub_CLI_authentication_expired_260729.jpg` — gh-autentisering, ej inloggad (diagnostiserat)
5. `Claude_i_Cursor.jpg` — Claude Code dubbelt inuti Cursor (sidopanel + terminal samtidigt)

## Status
**Version 1 klar** (29/7 2026): bloggtextutkast och kodningsövning skrivna efter Kents
go-signal. Filer:
- `bloggtext-utkast-surface-harness.md` — utkast, alla fem bilder inbäddade, Harvard-källor.
- `claude-kompassen.html` — interaktivt referensverktyg, testat i webbläsarförhandsvisning
  (fungerar). Lokal fil, inte publicerad som Artifact.

Fullständig, löpande plan (med all bakgrund/research) finns i:
`C:\Users\kentl\.claude\plans\abstract-leaping-lark.md`

**Kvarstår:** Kents genomläsning/redigering av utkastet, ev. humanizer-ton-pass, beslut om
`claude-kompassen.html` ska publiceras som Artifact (kräver uttryckligt godkännande).

## Arbetsregler (generella, gäller detta och liknande projekt i AI-teknik-repot)

- **Git commit/push görs alltid av Kent själv, via Cursor.** Claude Code (jag) förbereder,
  skriver och testar filer lokalt, men kör aldrig `git commit`/`git push` proaktivt eller
  som en genväg — även om det tekniskt fungerar lika bra härifrån. Detta ger Kent kontroll
  och medvetenhet varje gång något nytt publiceras. Read-only git-kommandon (status, diff,
  log, remote -v) för diagnostik är däremot okej.
- **README-konvention:** så fort ett nytt delprojekt eller en ny uppsättning filer skapas
  i ett repo (särskilt ett som publiceras via GitHub Pages) ska en `README.md` skapas i
  samma mapp — kort projektbeskrivning + länk till Live Page-URL:en. Mönster redan etablerat
  i samma repo: `Skills/README.md`, `RAG/README.md`.

## Källhantering
Harvard-format, klickbara länkar i löptext, inga gissade URL:er. Modellnamn och tekniska
påståenden (t.ex. CLAUDE.md vs AGENTS.md-stöd i olika verktyg) verifieras mot primärkälla
innan publicering — sekundära SEO-blogg-källor har visat sig motsägelsefulla sinsemellan.
