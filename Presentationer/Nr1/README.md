# Presentation: AI-projekt, en resa

**Live Page (efter publicering):** https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/

Självspelande, datadriven presentation av sju AI/webb-projekt, från 2023
till idag. Byggd enligt [PRD_presentation_ai_projekt.md](PRD_presentation_ai_projekt.md).

## Använda

Ett enda `index.html`, men tre olika, delbara URL:er — en per
hastighetsvariant (styrs av `?hastighet=`-parametern, se `script.js`).
Efter publicering till GitHub Pages blir de tre länkarna:

- **Rapp** (7 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=rapp
- **Lagom** (20 sek/projekt, standard): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=lagom
- **Seriös** (45 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=serios

Bara ett `index.html` att underhålla, men tre fullständiga URL:er att dela
beroende på sammanhang — det var precis poängen med att lösa det via en
parameter i stället för tre separata filer (se PRD:n, 4c). Hastigheten kan
även bytas löpande med knapparna uppe till höger på sidan. Mellanslag
pausar/återupptar, piltangenterna byter bild manuellt.

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
