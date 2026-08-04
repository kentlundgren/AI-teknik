# Presentation: AI-projekt, en resa

**Live Page (efter publicering):** https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/

Självspelande, datadriven presentation av åtta AI/webb-projekt (plus två
korta "milestone"-avbrott), från 2023 till idag, i kronologisk ordning.
Byggd enligt [PRD_presentation_ai_projekt.md](PRD_presentation_ai_projekt.md).

## Använda

Ett enda `index.html`, men tre olika, delbara URL:er — en per
hastighetsvariant (styrs av `?hastighet=`-parametern, se `script.js`).
Efter publicering till GitHub Pages blir de tre länkarna:

- **Rapp** (7 sek/projekt, **standard**): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=rapp
- **Lagom** (20 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=lagom
- **Seriös** (45 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=serios

Rapp är standard utan `?hastighet=`-parameter — så det syns direkt att det
är ett bildspel, inte en statisk sida. Milestone-avbrotten (2024,
2025–2026) visas alltid i 4 sekunder, oavsett hastighetsval.

Bara ett `index.html` att underhålla, men tre fullständiga URL:er att dela
beroende på sammanhang — det var precis poängen med att lösa det via en
parameter i stället för tre separata filer (se PRD:n, 4c).

**Manuell styrning:**
- Diskreta pilar (‹ ›) i kanterna av bilden — klick för föregående/nästa
- Svep vänster/höger med tummen på mobil
- Piltangenterna (←/→) på tangentbord
- Play/paus-knappen uppe till vänster i huvudet (eller mellanslag) — stoppar
  och startar det automatiska bildspelet. Manuell navigering (pilar, svep,
  piltangenter) fungerar även när det är pausat, och håller sig pausat
  efteråt — bildspelet startar inte om sig självt bara för att man bläddrat.
- Hastigheten kan också bytas löpande med knapparna uppe till höger.

## Lägga till eller ta bort ett projekt

Redigera `projects.js` — en post per projekt, ingen ändring av
`index.html`/`style.css`/`script.js` behövs. Två typer:

- `kind: "screenshot"` — kräver en bild i `images/`
- `kind: "code"` — renderas som ett kodkort direkt i HTML/CSS, ingen bildfil behövs
- `kind: "milestone"` — kort avbrott med årtal + fakta, ingen bild eller länk

## Filer

- `index.html` / `style.css` / `script.js` — motorn
- `projects.js` — allt innehåll (fas 1: åtta projekt + två milestones)
- `images/` — skärmdumpar av de sex live-projekten
- `PRD_presentation_ai_projekt.md` — hela beslutshistoriken
- `SPEAKER_NOTES.md` — Kents egna presentatörsanteckningar per projekt (id-kopplat, inte del av sidan)
