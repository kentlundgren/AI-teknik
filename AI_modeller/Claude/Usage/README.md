# Claude Usage – min förbrukning

**Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/Usage/](https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/Usage/)

**Filerna på GitHub:** [https://github.com/kentlundgren/AI-teknik/tree/main/AI_modeller/Claude/Usage](https://github.com/kentlundgren/AI-teknik/tree/main/AI_modeller/Claude/Usage)

Ett litet program (HTML, CSS och JavaScript) som visar hur mycket av Claudes användningsgränser som är förbrukat, hur mycket som är kvar och hur det har utvecklats över tid.

## Filer

| Fil | Innehåll |
|---|---|
| `index.html` | Sidans struktur: flikar och rutor |
| `style.css` | Utseende, med ljust och mörkt tema |
| `app.js` | Alla beräkningar och all visning |
| `data.js` | All historik, en rad per avläsning (den enda fil som ändras löpande) |
| `Skarmdumpar/ÅÅMMDD/` | Skärmdumparna som varje avläsning bygger på |

## Så registreras en ny avläsning

1. Ta en skärmdump av *Inställningar > Usage*. Scrolla gärna så att "This week's usage by product" syns.
2. Ge bilden till Claude.
3. Claude läser av värdena och visar dem. Du bekräftar.
4. Claude lägger till en rad sist i `data.js` och sparar bilden i `Skarmdumpar/ÅÅMMDD/`.
5. Ladda om `index.html`.

Har du använt **Reset for free**, sätt `anvand: true` under `erbjudanden.reset` i `data.js`.

## Publicering

Mappen ligger i repot [AI-teknik](https://github.com/kentlundgren/AI-teknik) och publiceras med GitHub Pages på live-sidan ovan. Kent committar och pushar själv, enligt repots [AGENTS.md](https://github.com/kentlundgren/AI-teknik/blob/main/AGENTS.md).

Skärmdumparna i `Skarmdumpar/` är publika eftersom repot är publikt.

## Beräkningar (samma formler överallt)

- Veckan går från torsdag kl. 08:00 till nästa torsdag kl. 08:00.
- **Andel gången** = timmar sedan veckostart / 168 × 100
- **Kvar** = 100 − veckoprocent
- **Dagsbudget** = kvar / (timmar kvar / 24)
- **Buffert** = andel gången − veckoprocent
  - 0 eller mer ger grönt, mellan 0 och −10 gult, under −10 rött.
- **Prognos** = veckoprocent + (veckoprocent / timmar gångna) × timmar kvar
- **Produkt av veckan** = produktandel × veckoprocent / 100
