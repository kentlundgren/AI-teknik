# Test 1: tentamen i Envariabelanalys 1 (TATA41, Linköpings universitet, 2026-08-19)

**Hör till:** [ARTIKEL_disposition_2026-10-22.md](../ARTIKEL_disposition_2026-10-22.md) och [PRD_presentation_generation_2005.md](../PRD_presentation_generation_2005.md)
**Genomfört:** 2026-10-22
**Status:** Illustration, inte en studie. En tenta, en körning, en modell. Uppgifterna är hämtade ur angivna källor och inte kvalitetssäkrade av någon utomstående rättare.

## 1. Varför just den här tentan

- **LTH:s öppna tentaarkiv gick inte att nå** (404 på maths.lu.se, den äldre servern ctr.maths.lu.se svarar inte). Det är därför inte en LTH-tenta.
- **Linköpings universitet** publicerar tentor *med lösningsskisser* på kursens officiella sida, den senaste från 2026-08-19: [TATA41 Envariabelanalys 1, gamla tentor](https://courses.mai.liu.se/GU/TATA41/tentor.html). Kursen är en första matematikkurs för flera ingenjörsprogram (sidan listar bland annat programkoderna I, Y, D och IT). Att den hör till Linköpings tekniska högskola, inte LTH, ska stå öppet i texten.
- **Tentan ligger efter modellens kunskapsgräns.** Tentan är daterad 2026-08-19 och modellen som löste den (Claude Sonnet 5.5, i Claude Code) har kunskapsgräns i juni 2026. Modellen kan alltså inte ha sett tentan i träningen. Att lösningsskissen fanns på nätet innan jag öppnade den har jag undvikit genom ordningen i avsnitt 3.

## 2. Källor (ingen tenta återpubliceras här)

- Tentan: [T260819.pdf](https://courses.mai.liu.se/GU/TATA41/Tentor/T260819.pdf)
- Lösningsskiss: [L260819.pdf](https://courses.mai.liu.se/GU/TATA41/Tentor/L260819.pdf)
- Kurssidan, hämtad 2026-10-22 (sidan visar "Senast uppdaterad: 2026-08-19"): https://courses.mai.liu.se/GU/TATA41/tentor.html

Tentan och lösningarna ägs av Linköpings universitet. De är bara länkade, inte kopierade till den här mappen.

## 3. Så gjordes testet

1. Jag hämtade **bara tentan**, inte lösningsskissen, och läste uppgifterna som bilder (texten blev förvrängd när den extraherades från PDF:en).
2. Jag löste alla sju uppgifterna för hand i resonemang och kontrollerade sedan svaren med **sympy**, ett Python-bibliotek för symbolisk matematik ([kontroll_med_sympy.py](kontroll_med_sympy.py)).
3. Jag sparade mina svar med tidsstämpel innan jag hämtade lösningsskissen ([svar_sparade_innan_facit.md](svar_sparade_innan_facit.md), [tidsstampel_innan_facit.txt](tidsstampel_innan_facit.txt): 2026-10-22 00:22:10, lokal tid).
4. Först därefter hämtade jag lösningsskissen och jämförde svar för svar.

**Skillnad mot en riktig student:** studenten får bara penna, linjal och gradskiva. Agenten hade tillgång till Python och sympy. Det är just skillnaden mellan en modell och en agent (modell + harness).

## 4. Resultat: svar jämfört med lösningsskissen

| Uppgift | Mitt svar | Lösningsskissens svar | Stämmer |
|---|---|---|---|
| 1a | k = 2 | k = 2 | Ja |
| 1b | Störst 1 (x = 0), minst 2 − 2 ln 2 (x = ln 2) | Samma | Ja |
| 2a | 1 | 1 | Ja |
| 2b | −1/4 | −1/4 | Ja |
| 2c | ½ ln(1+x²) + x²/(1+x²) | Samma | Ja |
| 3a | (1/3) ln(8/5) | ln 2 − (ln 5)/3 = (1/3) ln(8/5) | Ja (samma tal) |
| 3b | eˣ(cos x + sin x)/2 + C | Samma | Ja |
| 3c | (1/3)(arctan(3e) − arctan 3) | Samma | Ja |
| 4a | 5/2 | 5/2 | Ja |
| 4b | 3/e⁴ | 3/e⁴ | Ja |
| 5 | k > ½ e^(−3/4) | k > ½ e^(−3/4) | Ja |
| 6 | a = 1/2, b = √2/2 | a = 1/2, b = 1/√2 (samma tal) | Ja |
| 7 | A_N ökande, 1 ≤ A_N ≤ 3, A = e²/(e−1)² ≈ 2,5027 ∈ [2, 3] | A = (e/(e−1))² ≈ 2,50265 (samma tal) | Ja (värdet) |

**Alla numeriska och slutliga svar stämmer med lösningsskissen.** Uppgifterna 6 och 7 är bevis; där har jag kontrollerat resultatet men inte skrivit ut ett fullständigt, formellt bevis. En tentarättare skulle bedöma bevisens fullständighet och motivering, och det har ingen gjort. Jag har därför **inte** satt någon poängsumma.

## 5. Vad testet visar och inte visar

**Det visar** att en AI-agent (nuvarande modell med Python som verktyg) kan lösa en hel tentamen i första kursen i envariabelanalys och få samma slutsvar som lärarens lösningsskiss, och att man kan kontrollera det på ett reproducerbart sätt.

**Det visar inte:**
- Att modellen klarar tentan *utan* verktyg (jag har inte gjort den körningen).
- Att resultatet gäller andra kurser, andra tentor eller andra modeller. Det är en tenta, en körning, en modell.
- Hur ett skrivet bevis hade bedömts i poäng.
- Att en student kan *lita* på AI: det är tentan som har ett facit. I verkliga studier saknas facit, och då måste svaret kontrolleras på annat sätt.

**En liten detalj att ta med:** sympy gav svaret på 3c som ett komplext uttryck med imaginära delar. Det är matematiskt samma tal som lösningsskissens reella uttryck, men man måste kontrollera det numeriskt (0,0666, samma som handräkningen) för att se det. Verktygets rådata måste alltså också granskas.

## 6. Möjlig andra tenta (inte genomförd)

LTH:s kurs FMEA30 (Mekanik) har en tenta från 2019-08-28 med lösningar på tredjepartssidan Kollin ([tenta](https://s3-eu-north-1.amazonaws.com/kollin-exams/pdfs/FMEA30/FMEA30Tentamen20190828.pdf), [lösningar](https://s3-eu-north-1.amazonaws.com/kollin-exams/pdfs/FMEA30/FMEA30Losningar20190828.pdf)). Jag har bara kontrollerat att filerna går att hämta, inte läst dem eller bedömt om Kollin har rätt att dela dem. Tentan är från 2019 och kan därför finnas i modellernas träningsdata.
