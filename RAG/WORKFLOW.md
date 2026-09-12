# Arbetsregler för AI-agenten (Git & GitHub)

Denna fil innehåller **arbetsregler** för hur AI-agenten (Cursor, Claude, Grok m.fl.) ska
bete sig i detta projekt när det gäller versionshantering. Den är medvetet skild
från `agents.md` (som är det portabla RAG-styrdokumentet) för att hålla det
dokumentet rent och återanvändbart.

Repo-övergripande agentminne står i [`AGENTS.md`](../AGENTS.md).

---

## Regel 1: Git commit och push sköts av användaren

**Standardläge:** användaren committar och pushar **själv** till GitHub.

- Agenten ska **inte** på eget initiativ köra `git commit`.
- Agenten ska **inte** på eget initiativ köra `git push`.
- Agenten får förbereda filer och föreslå commit-meddelanden.

## Undantag: Uttrycklig begäran

Om användaren **uttryckligen** ber agenten att committa och/eller pusha, ska agenten göra det.

## Regel 2: Fråga alltid vid minsta tvekan – innan du kodar

Fråga vid den **minsta tvekan** innan du kodar, skapar filer eller skriver till GitHub.
Samma regel: [`AGENTS.md`](../AGENTS.md), Grok-skill `fraga-forst`.

## Regel 3: Källor och referenser i Harvardformat (med kontrollerade länkar)

Harvardstil, länk till källan, kontrollera att länken fungerar och är relevant.
Annoterad källförteckning: kort parentes efter varje referens.

## Regel 4: GitHub-länk på alla live-sidor (nere till vänster)

Varje live-sida ska ha `{ } GitHub` nere till vänster (källkodsmappen, ny flik) och
`</> teknik` nere till höger enligt `.cursor/rules/horn-lankar-github-teknik.mdc`.

## Regel 5: Skapa en README-fil när det är lämpligt

Ny mapp/del som behöver förklaras får en `README.md`: syfte, filer, hur man använder materialet.

## Regel 6: Live-sidelänk i README är obligatorisk

När en mapp har (eller får) en GitHub Pages-sida ska `README.md` i den mappen
**alltid** innehålla en synlig länk till live-sidan:

`https://kentlundgren.github.io/AI-teknik/<sökväg-till-mappen>/`

- Länken ska sitta högt i README:n, inte bara i en filtabell längst ner.
- Överliggande README som listar mappen ska också länka till samma live-sida.
- Skapas `index.html` i en befintlig mapp: uppdatera README i samma commit-svep.
- Finns ingen live-sida än, ska README inte låtsas det. Finns den, får länken inte saknas.

Samma krav står i [`AGENTS.md`](../AGENTS.md) och i Grok-skill:et `readme-live-lank`.

## Påminnelse: PowerShell-miljö

Dela kommandon. Använd inte `&&` som satsavdelare i PowerShell.

---

*Uppdatering 2026-09-12: Regel 6 tillagd (live-sidelänk i README).*
