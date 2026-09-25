# Claude Usage – min förbrukning

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

## Så läggs det upp på GitHub Pages

1. Skapa ett nytt repo, till exempel `claude-usage`.
2. Ladda upp `index.html`, `style.css`, `app.js`, `data.js` och mappen `Skarmdumpar`.
3. Gå till *Settings > Pages*, välj grenen `main` och mappen `/ (root)`.
4. Sidan hamnar på `https://<ditt-användarnamn>.github.io/claude-usage/`.

Tänk på att ett publikt repo gör även skärmdumparna publika. Vill du inte det, låt bli att ladda upp mappen `Skarmdumpar`. Då fungerar allt utom länkarna "Visa" i historiken.

## Beräkningar (samma formler överallt)

- Veckan går från torsdag kl. 08:00 till nästa torsdag kl. 08:00.
- **Andel gången** = timmar sedan veckostart / 168 × 100
- **Kvar** = 100 − veckoprocent
- **Dagsbudget** = kvar / (timmar kvar / 24)
- **Buffert** = andel gången − veckoprocent
  - 0 eller mer ger grönt, mellan 0 och −10 gult, under −10 rött.
- **Prognos** = veckoprocent + (veckoprocent / timmar gångna) × timmar kvar
- **Produkt av veckan** = produktandel × veckoprocent / 100
