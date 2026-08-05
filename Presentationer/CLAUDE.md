# Presentationer — självspelande, datadrivna presentationer

## Vad detta är

En samlingsmapp för Kents självspelande HTML/CSS/JS-presentationer, byggda
i mönstret som etablerades i `Nr1` (portfolio-genomgång av AI/webb-projekt).
Görs inte för jobbsökning — Kent bygger och delar de här för att han tycker
det är roligt, intressant och viktigt att testa, leka och lära tillsammans
med generativ AI (se hans egen formulering: "innan generativ AI, testar och
'leker' med oss människor..."). Varje undermapp (`Nr1`, framtida `Nr2`,
`Nr3` ...) är en egen presentation med sin egen PRD, som fångar just den
presentationens beslutshistorik.

Denna fil är repo-lokal (inte global) av samma skäl som skillet nedan:
synlighet och länkbarhet på GitHub när mappen är pushad, och en pekpunkt
för framtida sessioner som öppnas direkt här utan att ha läst hela
AI-teknik-repots historik.

## Skill-inventering

**Nivå 1 — Projektnivå (denna mapp):** `.claude/skills/kent-presentationer/`
— mönster och beslut specifika för den här sortens presentationer (motor+
data-separation, hastighetsvarianter via URL-parameter, skärmdumpsflöde,
säkerhet i återanvänd kod, källhantering, milestone-avbrott). Når Claude
Code och Cursor agent när man arbetar i den här mappen eller någon
undermapp.

**Nivå 2 — Global:** ett tunt pekar-skill finns kvar i
`C:\Users\kentl\.claude\skills\kent-presentationer\` för sessioner som
öppnas utanför AI-teknik-repot. Innehållet hålls bara här, inte där.

Se även `kent-bygg-sidor` (global, nivå 2) för Kents allmänna regler för
interaktiva sidor — gäller alltid tillsammans med det lokala skillet.

## Arbetsregler (samma som övriga AI-teknik-repot)

- **Git commit/push: Kent gör det själv, via Cursor.** Claude Code föreslår
  aldrig commit/push proaktivt och kör det aldrig utan att bli tillfrågad.
  Read-only git-kommandon för diagnostik är alltid okej.
- **README-konvention:** varje presentationsmapp (`NrX`) ska ha en
  `README.md` med kort beskrivning och länk till Live Page-URL:en, så fort
  den publicerats.
- **PRD innan produktion:** varje ny presentation (`NrX`) får en egen
  `PRD_<ämne>.md` i sin mapp, enligt Claude-kompassens
  `PRD_generell.md`-mall (se `AI_modeller/Claude/olika_Claude_modeller/PRD/`).

## Status

- **`Nr1`** — klar, byggd 2026-08-04, utökad löpande sedan dess. Åtta
  projekt + åtta årskort (två per år 2023–2026: "Vad som hände"/"Hur jag
  jobbade", innehållsmängd växer med vald hastighet) + två avslutande
  referens-slides, tre hastighetsvarianter (rapp/lagom/seriös, rapp är
  standard), manuell styrning (pilar, svep på mobil, paus/spela-knapp). Se
  `Nr1/PRD_presentation_ai_projekt.md` för fullständig beslutshistorik.
  Ännu inte publicerad till GitHub Pages eller committad — Kent gör det
  själv när han är redo.
