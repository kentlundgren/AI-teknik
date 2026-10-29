# AGENTS.md — överliggande agentminne för AI-teknik

Den här filen gäller **hela repot**, inte bara RAG-delen. Den är avsiktligt kort. Detaljerade Git-regler står i [`RAG/WORKFLOW.md`](./RAG/WORKFLOW.md). RAG-retrievalpolicyn står i [`RAG/agents.md`](./RAG/agents.md).

## Fråga vid minsta tvekan

Innan du kodar, skapar filer, ändrar styrdokument eller skriver till GitHub:

1. Finns det mer än en rimlig tolkning? Fråga.
2. Saknas mapp, filnamn, gren, publik eller omfattning? Fråga.
3. Är det oklart om användaren själv ska committa, eller om agenten ska pusha? Fråga.
4. Gissa inte viktiga val. En konkret fråga slår en felplacerad leverans.

Om du ändå går vidare: skriv antagandet högst upp («jag tolkar X som Y») så att det går att rätta.

Samma regel finns som globalt Grok-skill `fraga-forst` och som Regel 2 i `RAG/WORKFLOW.md`.

## Git

- Standard: användaren committar och pushar själv.
- Undantag: uttrycklig begäran («pusha till GitHub», «lägg filen i repot»).
- Nya HTML-sidor ska ha hörn-länkarna `{ } GitHub` och `</> teknik` enligt `.cursor/rules/horn-lankar-github-teknik.mdc`.

## README: live-sida överst, avsnittet `## Repo` sist

Varje mapp-`README.md` har två fasta platser:

1. **Överst, direkt under rubriken:** live-sidan, om mappen har en GitHub Pages-sida (`index.html`). Klickbar länk:
   `**Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/<sökväg>/](https://kentlundgren.github.io/AI-teknik/<sökväg>/)`
2. **Sist, som sista avsnitt:** `## Repo` med två rader, GitHub-adressen och den lokala sökvägen på Kents dator (som kod, inte länk):
   ```markdown
   ## Repo

   - GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/<sökväg>
   - Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\<sökväg med \>`
   ```

Ingen annan rad i README:n anger repo, GitHub-adress eller lokal sökväg till mappen själv, och ingenting står efter `## Repo`. En `**Lokal mapp:**`-rad överst används inte. Regeln gäller även README-filer som skript genererar eller uppdaterar.

Överliggande README som listar mappen ska också ha live-länken. Finns ingen live-sida än, ska README inte låtsas det. Se Regel 6 i `RAG/WORKFLOW.md` och Grok-skill:et `readme-live-lank`.

## Skills

Skills ligger direkt under repots rot, i `.claude/skills/<namn>/`. Det läses av Claude Code och Cursor. Ska Grok Build också använda en skill behövs en tunn pekare i `.grok/skills/<namn>/` som pekar på den fullständiga filen. Det finns ännu inga sådana pekare här, och om Grok hittar `.claude/skills/` själv är inte verifierat: kör `grok inspect` i repot för att se. Skills som gäller alla repon har en tunn pekare globalt i `~/.claude/skills/`. Fullständigt resonemang, källor och vad som är osäkert: Regel 4 i skillen `kent-meta-regler-for-code`.

Här skedde en uppdatering 2026-10-02: avsnittet lades till.

## Månadsrapport

Skriver Kent nyckelordet **månadsrapport** (eventuellt med månad), eller frågar "vad har jag gjort den här månaden?": läs skillen [kent-manadsrapport](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-manadsrapport/SKILL.md) och följ den. Den räknar projekt över alla Kents repon och kräver att du kan köra Python och Git på hans dator. Färdiga rapporter finns i [Manadsrapport/](https://github.com/kentlundgren/AI-teknik/blob/main/Manadsrapport/README.md). Lokalt ligger skillen i `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-manadsrapport`. Committa och pusha inte på eget initiativ.

## Källor

Harvardstil enligt Grok-skill:et `kent-referens` och Regel 3 i `RAG/WORKFLOW.md`.
Synlig hel URL är standard. **Den utskrivna URL:en ska vara klickbar** — i HTML `<a href="URL">URL</a>`, i Markdown `[URL](URL)`. En adress som bara står som text är fel. Kontrollera att länken fungerar innan den publiceras. Relevansnot i kursiv parentes efter varje post.

## Ton

Pedagogisk, precist om status och osäkerhet, inga påhittade bibliotek eller citat.

*Uppdaterad 2026-09-12: klickbara URL:er i källförteckning.*
*Uppdaterad 2026-10-29: README har live-sidan överst och avsnittet `## Repo` (GitHub och lokal sökväg) sist.*
