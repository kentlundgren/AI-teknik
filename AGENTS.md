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

## Ton

Pedagogisk, precist om status och osäkerhet, inga påhittade bibliotek eller citat.

*Införd 2026-09-12 efter att remote-first-övningen i `Solutions/260912/` visade att agenten behöver ett repo-övergripande minne, inte bara RAG-regler.*
