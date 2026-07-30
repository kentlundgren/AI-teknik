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
**Klart och publicerat** (29–30/7 2026): bloggtext, verktyg och LinkedIn-inlägg alla
publicerade. Filer och länkar:
- `bloggtext-utkast-surface-harness.md` — källan till bloggtexten. Publicerad:
  [En bild av Claudes ekosystem](https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/)
  (29/7 2026, disposition "B" — speglar verktygets Fas-struktur).
- `index.html` — Claude-kompassen, publicerad live via GitHub Pages på
  https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
  Fem sektioner med ankarlänkar: `#fas1`, `#fas2`, `#fas3`, `#sammanfattning`, `#kallor`.
- LinkedIn: [Vilken är din Claude favorit](https://www.linkedin.com/pulse/vilken-%C3%A4r-din-claude-favorit-kent-lundgren-atqye/)
  (30/7 2026, Kents egen slutredigering).
- `README.md` (denna mapp), `../README.md` (Claude-mappen) och repots rot-`README.md`
  alla uppdaterade för att spegla Fas-strukturen och de publicerade länkarna.
- Projektnivå-skills i `.claude/skills/`: `claude-kompassen-konventioner` (struktur för
  `index.html`) och `linkedin-ai-respons` (kommentarer på andras AI-inlägg).

**Viktigt — två index-filer i mappen, förväxla dem inte:**
- `index.html` — den riktiga, aktiva filen. Jobba alltid med den här.
- `index copy.html` — en manuell backup-kopia Kent själv skapade (29/7 2026), bara som
  säkerhet om något går snett. Ignorera den helt, redigera den aldrig, och föreslå den
  inte som källa för något.

Fullständig, löpande plan (med all bakgrund/research) finns i:
`C:\Users\kentl\.claude\plans\abstract-leaping-lark.md`

## Skill-inventering

Skills finns på tre nivåer. Claude Code (Cursor) når bara nivå 1 och 2 — inte 3.

**Nivå 1 — Projektnivå** (`.claude/skills/` i den här mappen, nås av Claude Code):
- `claude-kompassen-konventioner` — konventioner för index.html i just det här projektet
- `linkedin-ai-respons` — LinkedIn-kommentarer på andras AI-inlägg

**Nivå 2 — Global på datorn**, nås av Claude Code:
- `C:\Users\kentl\.claude\skills\`: `humanizer_ton`, `kent-bygg-sidor`, `kent-respons`,
  `kent-skrivstil`, `skills-meta-guide`
- `C:\Users\kentl\.cursor\skills\`: `bjerred-firebase-sync`, `firebase-backend`
- `C:\Users\kentl\.cursor\skills-cursor\`: Cursor-inbyggda skills (automate, canvas,
  create-hook, create-rule, create-skill, loop, sdk, m.fl.)

**Nivå 3 — Kontoanknuten på claude.ai**, nås INTE av Claude Code — bara från claude.ai/Cowork:
- `kent-ekosystem-analys` — sammanfattar Claudes ekosystem-förståelse för återanvändning.
  Skapad 30/7 2026. Kent anser att den är korrekt. Kan bara läsas och redigeras direkt
  i claude.ai eller Cowork — Claude Code ser den aldrig.

**Regel vid all skill-hantering:**
När vi diskuterar, uppdaterar, justerar eller skapar en skill — oavsett anledning —
ska Claude Code alltid tydligt ange:
1. **Skillens namn** (t.ex. `kent-skrivstil`)
2. **Nivå** (1 = projektnivå, 2 = global på datorn, 3 = kontoanknuten)
3. **Exakt sökväg** (t.ex. `C:\Users\kentl\.claude\skills\kent-skrivstil\SKILL.md`)

Detta för att undvika att fel skill redigeras — samma skillnamn kan förekomma på flera
nivåer samtidigt utan att vara synkade, vilket redan inträffat (kent-skrivstil, 30/7 2026).
Om det råder minsta tvekan om vilken skill som avses: fråga Kent innan något redigeras.

## Arbetsregler (generella, gäller detta och liknande projekt i AI-teknik-repot)

- **Git commit/push: normalt gör Kent detta själv via Cursor.** Det ger kontroll och
 medvetenhet varje gång något publiceras. Claude Code föreslår aldrig commit/push
 proaktivt och kör det aldrig utan att bli tillfrågad. Read-only git-kommandon
 (status, diff, log, remote -v) för diagnostik är alltid okej.
 **Undantag:** om Kent uttryckligen ber Claude Code att committa och/eller pusha — t.ex.
 om Cursors egna commit/push-funktion hänger sig (inträffade 30/7 2026) — kör Claude
 Code dessa kommandon direkt. Det är Kents explicita önskan som avgör.
- **README-konvention:** så fort ett nytt delprojekt eller en ny uppsättning filer skapas
  i ett repo (särskilt ett som publiceras via GitHub Pages) ska en `README.md` skapas i
  samma mapp — kort projektbeskrivning + länk till Live Page-URL:en. Mönster redan etablerat
  i samma repo: `Skills/README.md`, `RAG/README.md`.

## Källhantering
Harvard-format, klickbara länkar i löptext, inga gissade URL:er. Modellnamn och tekniska
påståenden (t.ex. CLAUDE.md vs AGENTS.md-stöd i olika verktyg) verifieras mot primärkälla
innan publicering — sekundära SEO-blogg-källor har visat sig motsägelsefulla sinsemellan.
