# Presentationer — självspelande, datadrivna presentationer

## Vad detta är

En samlingsmapp för Kents HTML/CSS/JS-presentationer, byggda i mönstret som
etablerades i `Nr1` (portfolio-genomgång av AI/webb-projekt).
`Nr1` görs inte för jobbsökning — Kent bygger och delar den för att han
tycker det är roligt, intressant och viktigt att testa, leka och lära
tillsammans med generativ AI (se hans egen formulering: "innan generativ AI,
testar och 'leker' med oss människor..."). Varje undermapp (`Nr1`, `Nr2`,
`Nr3` ...) är en egen presentation med sin egen PRD, som fångar just den
presentationens beslutshistorik.

**Undantag sedan 2026-09-29: `Nr2` ("Provbänken") är byggd för arbetsgivare.**
Den vänder sig till rekryterare, ekonomichefer och konsultkunder som vill se
vad Kent kan göra med AI i ekonomi- och controllerarbete, och länkas från
hans ansökningar (första gången AI-Controller, Invicis konsultnätverk, sista
ansökningsdag 2026-10-13). Därför gäller extra regler för Nr2: inga interna
uppgifter från uppdragsgivare (serveradresser, saldon, hyresobjekt,
budgetunderlag), inga personuppgifter, påhittade siffror ska sägas vara
påhittade, och CV:t får inte länka Nr2 förrän sidan svarar. Se
`Nr2/PRD_presentation_ai_arbetsgivare.md`. `Nr1` är fortfarande den
personliga visningen.

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

**Projektnivå, andra skillet:** `.claude/skills/kent-ai-arbetssatt/`
(tillagt 2026-09-30) — hur Kent arbetar med generativ AI, som han själv
bekräftat: lära känna modeller och harness genom upprepning,
kvalitetssäkring, planera skriftligt först, vilka verktyg till vad. Läs det
innan text skrivs i Kents namn om hans arbetssätt (Provbänken, LinkedIn,
ansökningar). Bara det Kent bekräftat ska stå där.

**Nivå 2 — Global:** tunna pekar-skills finns kvar i
`C:\Users\kentl\.claude\skills\kent-presentationer\` och
`C:\Users\kentl\.claude\skills\kent-ai-arbetssatt\` för sessioner som
öppnas utanför AI-teknik-repot. Innehållet hålls bara här, inte där.

Se även `kent-bygg-sidor` (global, nivå 2) för Kents allmänna regler för
interaktiva sidor — gäller alltid tillsammans med det lokala skillet.

## Underhållsregel — versionsdatum i varje NrX-presentation

Varje gång innehållet i en presentationsmapp (`Nr1/`, `Nr2/` ...) ändras
— nytt projekt läggs till, en slide redigeras, ordning ändras, texter
uppdateras — **uppdatera alltid datumet i varumärkestexten** i mappens
`index.html`. För `Nr1` är det rad 15:

```html
<div id="brand">Kent Lundgren
  <span>— AI-projekt, en resa — version Nr1 per den [DATUM]</span>
</div>
```

Sätt `[DATUM]` till ändringsdagen (format: `5 aug 2026`).
Versionsnumret (`Nr1`, `Nr2` ...) ändras bara vid en strukturellt ny
generation av presentationen — **inte** vid löpande innehållsuppdateringar.

Syftet: besökaren ska direkt se att presentationen är levande och aktuell.
Datumet är den enda signalen om när innehållet senast ändrades.

Regeln finns även dokumenterad lokalt i respektive `NrX/README.md` under
rubriken "Underhållsregler".

## Arbetsregler (samma som övriga AI-teknik-repot)

- **Kents egen röst (tillagd 2026-09-30):** all text i presentationerna
  (rubriker, frågor, knappar, brödtext) skrivs i första person ("jag",
  "mig"), inte som frågor eller påståenden riktade till "du". Håll samma
  röst genom hela sidan. Sanningskravet gäller ändå: bara sådant Kent
  bekräftat.
- **Git commit/push: Kent gör det själv, via Cursor.** Claude Code föreslår
  aldrig commit/push proaktivt och kör det aldrig utan att bli tillfrågad.
  Read-only git-kommandon för diagnostik är alltid okej.
- **Samma ämne i flera medier (tillagd 2026-09-30):** Kent speglar ofta ett
  ämne som program/app, bloggtext och LinkedIn-inlägg, ibland även YouTube och
  podd, för att lära sig mer om generativ AI. När Kent nämner **ett** av dem:
  sök upp och fråga efter de andra medierna om samma ämne, och notera
  kopplingarna (Provbänken fråga 5, fältet `medier`). Påstå aldrig att ett
  medium finns när det inte gör det. Se skillen `kent-ai-arbetssatt`, avsnitt 7.
- **README-konvention:** varje presentationsmapp (`NrX`) ska ha en
  `README.md` med kort beskrivning och länk till Live Page-URL:en, så fort
  den publicerats.
- **PRD innan produktion:** varje ny presentation (`NrX`) får en egen
  `PRD_<ämne>.md` i sin mapp, enligt Claude-kompassens
  `PRD_generell.md`-mall (se `AI_modeller/Claude/olika_Claude_modeller/PRD/`).

## Status

- **`Nr1`** — klar, byggd 2026-08-04, utökad löpande sedan dess. Årskort
  (två per år 2023–2026: "Vad som hände"/"Hur jag jobbade", innehållsmängd
  växer med vald hastighet), projekt, läslistor och två avslutande
  referens-slides, tre hastighetsvarianter (rapp/lagom/seriös, rapp är
  standard), manuell styrning (pilar, svep på mobil, paus/spela-knapp). Se
  `Nr1/README.md` för aktuell omfattning och
  `Nr1/PRD_presentation_ai_projekt.md` för fullständig beslutshistorik.
  Publicerad (svarar 200 på GitHub Pages, kontrollerat 2026-09-29).
- **`Nr2` — "Provbänken"** — PRD-utkast v3 (2026-09-29), inget byggt.
  Publik för arbetsgivare; frågeguide med kortöversikt. Se
  `Nr2/PRD_presentation_ai_arbetsgivare.md`. Ej publicerad (404).
