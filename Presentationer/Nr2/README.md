# Provbänken (Nr2)

- **Live Page (efter publicering):** [https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/](https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/)

Vad Kent Lundgren kan göra med AI i ekonomi- och controllerarbete, för arbetsgivare och konsultkunder. En sida med fyra frågor (hur AI används, vilka verktyg, vilka exempel, vilka uppdrag) och kort med exempel att öppna och kontrollera. Enbart svenska.

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

## Underhållsregler

- Innehållet ändras bara i `data.js`. Fält och teckengränser står i `SPEC.md`.
- Ändras innehållet: uppdatera `version` i `data.js` (visas i sidhuvudet).
- Sekretesslistan i `SPEC.md` avsnitt 5 gäller alltid: inga interna uppgifter från uppdragsgivare, inga personuppgifter, påhittade siffror ska sägas vara det.
- Kort med `sekretess: "ej_publik"` visas utan länk.
