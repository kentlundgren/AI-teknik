# Utvecklingslogg för jobbsökaragenten

Nyast överst. Varje rad säger vad som iakttogs, vad som ändrades och vilken
effekt det fick. Loggen är publik och innehåller bara generella iakttagelser och
sammanräknade resultat. Enskilda annonser och bedömningar ligger privat.

## Logg

| Datum | Version | Fas | Iakttagelse | Ändring | Effekt |
|---|---|---|---|---|---|
| 2026-11-25 | 0.1 | 2 | En fråga till människan hade delvis svar i det befintliga underlaget, och sorteringen gjordes utan det | Underlagen söks igenom innan en uppgift behandlas som okänd | Gäller bedömningen; inte omtestat |
| 2026-11-25 | 0.1 | 2 | Provskripten låg i en tillfällig mapp och hade sökningarna inskrivna i koden | `skript/hamta.py` byggt: sökningar och tillstånd i privata filer, felutfall med slutkod 2, spärr mot att skriva i det publika repot | Se testraderna nedan |
| 2026-11-25 | 0.1 | 2 | En söksida utan träffar svarade som om allt gick bra | Noll rader redovisas som avvikelse per källa | Se testraderna nedan |
| 2026-11-25 | 0.1 | 2 | Samma tjänst kan ligga ute två gånger eller återpubliceras med ny länk | Jämförelse på arbetsgivare och titel utöver länken | Fångar bara samma arbetsgivare och titel, inte samma uppdrag via olika förmedlare |
| 2026-11-25 | 0.1 | 2 | Sista ansökningsdag försvann när taggarna rensades, och vissa datum låg orimligt långt fram | Datumet läses ur källkoden; mer än 150 dagar märks osäkert | Gränsen 150 dagar är ett antagande |
| 2026-11-25 | 0.1 | 1 | Den tidigare sökrutinen visade en redan hanterad annons, saknade minne och läste ingen profil | Mål: sortera mot en profil och minnas vad som visats | Baslinje att jämföra mot |

## Testresultat

| Datum | Version | Test | Resultat |
|---|---|---|---|
| 2026-11-25 | prov före 0.1 | Manuell sortering av en tvåveckorsperiod, bedömd av människan | Sorteringen godkändes i sin helhet. En del annonser var bedömda på utdrag eller bara på titeln |
| 2026-11-25 | 0.1 | Skriptet mot tomt minne, jämfört med provets träffar (samma dag) | 27 av 27 annonser, inga saknade och inga extra |
| 2026-11-25 | 0.1 | Skriptet mot minnet efter provet | 0 annonser rapporterade som nya |
| 2026-11-25 | 0.1 | Dubbletter och passerad sista dag | 2 möjliga dubbletter och flera passerade datum märktes |
| 2026-11-25 | 0.1 | Felvägar: fel formatversion, resultat i publikt repo, enbart felaktig sökväg | Alla tre gav FEL och slutkod 2 |
| 2026-11-25 | 0.1 | Enstaka sökvägar utan rader bland fungerande | Redovisades som avvikelse, körningen blev klar |

Bedömningen (modellens steg) har ännu inte körts om mot testfallen.

## Kända brister

- Bara en källa (vakanser.se) är prövad.
- Alla sökord för de roller som ska bevakas är inte prövade.
- Orten i listan kan vara fel eller ofullständig. Skriptet filtrerar därför inte på ort.
- Samma uppdrag via flera förmedlare upptäcks inte av skriptet.
