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
  Fyra sektioner med ankarlänkar: `#fas1`, `#fas2`, `#fas3`, `#sammanfattning`.
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

**Öppet:** Kent har en kontoanknuten skill `kent-ekosystem-analys` (skapad 30/7 i en
annan session) som sammanfattar samma ekosystem-förståelse för återanvändning i framtida
konversationer. Den innehöll vid genomläsning 30/7 två sakfel (se skillens egen
uppdateringslogg) som rättats där det går — men den filen ligger i en sessionscache
Claude Code inte kan garantera synkas tillbaka till kontot. Stäm av direkt i skillen
om den ser korrekt ut nästa gång den används.

## Arbetsregler (generella, gäller detta och liknande projekt i AI-teknik-repot)

- **Git commit/push: normalt gör Kent detta själv via Cursor.** Det ger kontroll och
 medvetenhet varje gång något publiceras. Read-only git-kommandon (status, diff, log,
 remote -v) för diagnostik är alltid okej.
 **Undantag:** om Kent uttryckligen ber Claude Code att committa och/eller pusha — t.ex.
 om Cursors egna commit/push-funktion hänger sig eller av annan anledning — kör Claude
 Code dessa kommandon direkt, utan att tveka. Det är Kents explicita önskan som avgör,
 inte en fast regel om vem som "alltid" ska trycka på knappen.
- **README-konvention:** så fort ett nytt delprojekt eller en ny uppsättning filer skapas
  i ett repo (särskilt ett som publiceras via GitHub Pages) ska en `README.md` skapas i
  samma mapp — kort projektbeskrivning + länk till Live Page-URL:en. Mönster redan etablerat
  i samma repo: `Skills/README.md`, `RAG/README.md`.

## Källhantering
Harvard-format, klickbara länkar i löptext, inga gissade URL:er. Modellnamn och tekniska
påståenden (t.ex. CLAUDE.md vs AGENTS.md-stöd i olika verktyg) verifieras mot primärkälla
innan publicering — sekundära SEO-blogg-källor har visat sig motsägelsefulla sinsemellan.
