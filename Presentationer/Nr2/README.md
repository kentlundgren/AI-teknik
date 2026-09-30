# Provbänken (Nr2)

- **Live Page (efter publicering):** [https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/](https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/)

Vad Kent Lundgren kan göra med AI i ekonomi- och controllerarbete, för arbetsgivare och konsultkunder. En sida med fem frågor (hur AI används, vilka verktyg, vilka exempel, vilka uppdrag, vad som skapats och berättats om generativ AI) och kort med exempel att öppna och kontrollera. Enbart svenska.

Till skillnad från [Nr1](../Nr1/) (en personlig, kronologisk visning) är Nr2 byggd för att bedöma en kandidat.

## Filer

| Fil | Innehåll |
|---|---|
| `index.html` | Sidans struktur och reservlista utan JavaScript |
| `style.css` | Utseende (mobil först, utskriftsvänligt) |
| `script.js` | Motor: bygger frågor och kort ur `data.js` |
| `data.js` | Enda källa till innehåll: frågor, svar och kort |
| `PRD_presentation_ai_arbetsgivare.md` | Planering och beslutshistorik |
| `SPEC.md` | Låst byggspecifikation och acceptanslista |
| `bilder/` | Bilder på korten (JPEG, under 200 kB) |
| `delning/` | Delningsbilder (1200×630) för varje fråga, och `kalla/` med HTML-källorna till dem |
| `ai-i-arbetet/`, `verktyg/`, `exempel/`, `uppdrag/`, `skrivit/` | En liten sida per fråga, med egen delningsbild, som skickar vidare till frågan |

## Dela en enskild fråga (egen bild på LinkedIn och X)

LinkedIn och X läser bildtaggarna (`og:image`) i sidans HTML och ignorerar allt efter `#`, så `…/Nr2/#verktyg` ger alltid huvudsidans bild. Dela därför frågans egen adress, som ger sin egen bild och sedan skickar besökaren vidare:

| Fråga | Delningslänk |
|---|---|
| Hur använder jag AI i controllerarbetet? | `https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/ai-i-arbetet/` |
| Vilka verktyg och system behärskar jag? | `https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/verktyg/` |
| Vilka exempel kan jag visa? | `https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/exempel/` |
| Vilka uppdrag och branscher passar mig? | `https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/uppdrag/` |
| Vad har jag skapat och berättat om generativ AI? | `https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/skrivit/` |

Bilderna görs ur `delning/kalla/og-<fråga>.html` med headless Chrome (1200×630, sedan JPEG). LinkedIn och X sparar (cachar) bilder, så testa med LinkedIn Post Inspector efter publicering. En ny eller ändrad fråga behöver en egen mapp med `index.html` (kopiera en befintlig och byt id, rubrik, beskrivning och bild).

## Underhållsregler

- Innehållet ändras bara i `data.js`. Fält och teckengränser står i `SPEC.md`.
- Ändras innehållet: uppdatera `version` i `data.js` (visas i sidhuvudet).
- Sekretesslistan i `SPEC.md` avsnitt 5 gäller alltid: inga interna uppgifter från uppdragsgivare, inga personuppgifter, påhittade siffror ska sägas vara det.
- Kort med `sekretess: "ej_publik"` visas utan länk.
