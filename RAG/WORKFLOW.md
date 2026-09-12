# Arbetsregler för AI-agenten (Git & GitHub)

Denna fil innehåller **arbetsregler** för hur AI-agenten (Cursor, Claude, Grok m.fl.) ska
bete sig i detta projekt när det gäller versionshantering. Den är medvetet skild
från `agents.md` (som är det portabla RAG-styrdokumentet) för att hålla det
dokumentet rent och återanvändbart.

Repo-övergripande agentminne står i [`AGENTS.md`](../AGENTS.md).

---

## Regel 1: Git commit och push sköts av användaren

**Standardläge:** Kent (användaren) committar och pushar **själv** till GitHub.
Syftet är att Kent ska förstå och kunna hantera Git-flödet på egen hand.

Därför gäller:

- Agenten ska **inte** på eget initiativ köra `git commit`.
- Agenten ska **inte** på eget initiativ köra `git push` (eller "Publish/Sync Branch").
- Agenten får däremot hjälpa till att **förbereda** (t.ex. skapa/ändra filer,
  förklara vad som ändrats, föreslå commit-meddelanden) – men själva commit och
  push utför Kent.

## Undantag: Uttrycklig begäran

Om Kent **uttryckligen** ber agenten att committa och/eller pusha, ska agenten
göra det. Exempel: "Committa detta åt mig." / "Pusha till GitHub."

När agenten utför detta på begäran ska den visa vad som committas, använda ett
tydligt meddelande och redovisa resultatet.

## Regel 2: Fråga alltid vid minsta tvekan – innan du kodar

Agenten ska **alltid** fråga vid den **minsta tvekan** innan den kodar, skapar filer
eller skriver till GitHub. Samma regel: [`AGENTS.md`](../AGENTS.md), Grok-skill `fraga-forst`.

- Flera rimliga tolkningar → fråga först.
- Saknad sökväg, namn, publik eller gren → fråga först.
- Gissa inte viktiga val. Om du ändå går vidare: skriv antagandet explicit.

## Regel 3: Källor och referenser i Harvardformat (med kontrollerade länkar)

- Harvardstil i löptext och källförteckning.
- Varje referens ska ha en URL när en sådan finns.
- Kontrollera att länken fungerar och är relevant.
- Annoterad källförteckning: kort parentes efter varje referens.

## Regel 4: GitHub-länk på alla live-sidor (nere till vänster)

Varje live-sida ska ha `{ } GitHub` nere till vänster (källkodsmappen, `target="_blank" rel="noopener"`)
och `</> teknik` nere till höger enligt `.cursor/rules/horn-lankar-github-teknik.mdc`.

## Regel 5: Skapa en README-fil när det är lämpligt

Ny mapp/del som behöver förklaras får en `README.md`: syfte, filer, hur man använder materialet,
korsreferenser uppåt.

## Regel 6: Live-sidelänk i README är obligatorisk

När en mapp har (eller får) en GitHub Pages-sida ska `README.md` i den mappen
**alltid** innehålla en synlig länk till live-sidan:

`https://kentlundgren.github.io/AI-teknik/<sökväg-till-mappen>/`

- Länken ska sitta högt i README:n, inte bara i en filtabell längst ner.
- Överliggande README som listar mappen ska också länka till samma live-sida.
- Skapas `index.html` i en befintlig mapp: uppdatera README i samma svep.
- Finns ingen live-sida än, ska README inte låtsas det. Finns den, får länken inte saknas.

Samma krav: [`AGENTS.md`](../AGENTS.md), Grok-skill `readme-live-lank`.

## Påminnelse: PowerShell-miljö

Kent använder oftast **PowerShell** på Windows. `&&` fungerar inte som satsavdelare — dela kommandona.

---

*Uppdatering 2026-09-12: Regel 6 tillagd (live-sidelänk i README). Ursprung: filen skapades efter en oavsiktlig push.*
