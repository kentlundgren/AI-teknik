# Presentation: AI-projekt, en resa

**Live Page (efter publicering):** https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/

Självspelande, datadriven presentation av sju AI/webb-projekt, från 2023
till idag. Byggd enligt [PRD_presentation_ai_projekt.md](PRD_presentation_ai_projekt.md).

## Använda

Öppna `index.html` i en webbläsare. Tre hastighetsvarianter via
URL-parameter:

- `index.html?hastighet=rapp` — 7 sek/projekt
- `index.html?hastighet=lagom` — 20 sek/projekt (standard)
- `index.html?hastighet=serios` — 45 sek/projekt

Hastigheten kan även bytas löpande med knapparna uppe till höger.
Mellanslag pausar/återupptar, piltangenterna byter bild manuellt.

## Lägga till eller ta bort ett projekt

Redigera `projects.js` — en post per projekt, ingen ändring av
`index.html`/`style.css`/`script.js` behövs. Två typer:

- `kind: "screenshot"` — kräver en bild i `images/`
- `kind: "code"` — renderas som ett kodkort direkt i HTML/CSS, ingen bildfil behövs

## Filer

- `index.html` / `style.css` / `script.js` — motorn
- `projects.js` — allt innehåll (fas 1: sju projekt)
- `images/` — skärmdumpar av de fem live-projekten
- `PRD_presentation_ai_projekt.md` — hela beslutshistoriken
