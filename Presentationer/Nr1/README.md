# Presentation: AI-projekt, en resa

**Live Page (efter publicering):** https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/

Självspelande, datadriven presentation av nio AI/webb-projekt, åtta
årskort (två per år 2023–2026: "Vad som hände" / "Hur jag jobbade") och
två avslutande referens-slides (begreppslista + källförteckning) — nitton
slides totalt, i kronologisk ordning. Viktiga AI-modeller/AI-verktyg är
klickbara första gången de nämns. Årskorten visar olika mycket innehåll
beroende på vald hastighet (fler fakta vid Seriös än vid Rapp) — se
`script.js`s tier-system. Byggd enligt
[PRD_presentation_ai_projekt.md](PRD_presentation_ai_projekt.md).

## Använda

Ett enda `index.html`, men tre olika, delbara URL:er — en per
hastighetsvariant (styrs av `?hastighet=`-parametern, se `script.js`).
Efter publicering till GitHub Pages blir de tre länkarna:

- **Rapp** (7 sek/projekt, **standard**): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=rapp
- **Lagom** (20 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=lagom
- **Seriös** (45 sek/projekt): https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/index.html?hastighet=serios

Rapp är standard utan `?hastighet=`-parameter — så det syns direkt att det
är ett bildspel, inte en statisk sida. Årskorten respekterar vald
hastighet både för visningstid och innehållsmängd — vid Rapp visas bara
de viktigaste fakta (tier 1), vid Seriös visas allt (tier 1–3).

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

## En levande presentation

Presentationen är inte statisk — projekt tillkommer, texter uppdateras.
Därför visas alltid ett datum i rubriken ("version Nr1 per den X") så att
besökaren direkt ser hur aktuellt innehållet är.

## Lägga till eller ta bort ett projekt

Redigera `projects.js` — en post per projekt, ingen ändring av
`index.html`/`style.css`/`script.js` behövs. Två typer:

- `kind: "screenshot"` — kräver en bild i `images/` (eller annan mapp, se `Bilder/`); en animerad `.gif` fungerar direkt, ingen specialkod behövs
- `kind: "code"` — renderas som ett kodkort direkt i HTML/CSS, ingen bildfil behövs
- `kind: "year-card"` (`variant: "tech"`/`"personal"`) — årskort med årtal + fakta,
  varje fact har en `tier` (1 = alltid, 2 = lagom+seriös, 3 = bara seriös)
- `kind: "glossary"` — avslutande slide, alfabetisk lista över alla klickbara begrepp
- `kind: "bibliography"` — avslutande slide, annoterad Harvard-källförteckning

Valfritt fält `promptReveal` på `screenshot`/`code`-poster: visar en fullständig
text (t.ex. en originalprompt) i en overlay vid hovring eller tryck/klick —
se `stickfigur-spel`-posten för ett exempel.

Nya kandidat-projekt loggas först i [Kandidatprojekt.md](Kandidatprojekt.md)
innan de eventuellt läggs in här — se den filen för rutinen.

## Filer

- `index.html` / `style.css` / `script.js` — motorn
- `projects.js` — allt innehåll (nio projekt + åtta årskort + två referens-slides)
- `glossary.js` — delad ordlista (AI-modeller/AI-verktyg), länkar första förekomsten av varje term
- `images/` — skärmdumpar av de flesta live-projekten; `Bilder/` — enstaka nyare bilder/GIF:ar (t.ex. Stickfigur Spel)
- `PRD_presentation_ai_projekt.md` — hela beslutshistoriken
- `SPEAKER_NOTES.md` — Kents egna presentatörsanteckningar per projekt (id-kopplat, inte del av sidan)
- `Claude_familjen.md` — fullständig, primärkälleverifierad tidslinje över hela Claude-familjen (18 lanseringar, 2023–2026); bruttolista att välja en delmängd ur till kommande årskort, inte allt härifrån visas nödvändigtvis i presentationen
- `Kents_work_with_AI.md` — personlig reflektion över hur Kents eget arbetssätt med AI-verktyg utvecklats 2023–2026 (Perplexity → Claude Projects → Claude Code/Cursor/GitHub → Claude 4.6), korsreferererar `Claude_familjen.md`; bruttolista, delmängd blir egna slides i ett senare steg
- `AI_branschen_brett.md` — bruttolista över hela AI-branschens (inte bara Anthropics) mest häpnadsväckande händelser 2023–2026 (GPT-4, Sora, Llama 3, Altman-dramat, m.fl.), primärkälleverifierad, korsreferererar `Claude_familjen.md` i stället för att duplicera Claude-lanseringarna
- `Kandidatprojekt.md` — löpande idébank över tänkbara framtida projekt-slides, loggas direkt när ett projekt nämns i konversation
