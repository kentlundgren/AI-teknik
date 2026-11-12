# Analys: miljöpåverkan från generativ AI utöver energi och vatten, och en graderingsram

**Version:** 0.1 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** arbetsunderlag. Det finns ingen publicerad, vedertagen rangordning av AI:s miljöpåverkan. Graderingen nedan är en egen bedömning med uttalade kriterier, inte ett forskningsresultat. Siffrorna är hämtade ur angivna källor och inte kvalitetssäkrade. Läsaren ska kontrollera mot källan. Hämtdatum: 2026-11-12. Hör ihop med [Analys_resurser_261112.md](Analys_resurser_261112.md) och [Analys_vatten_261112.md](Analys_vatten_261112.md).

## 1. Frågan

Energi och vatten är de mest diskuterade faktorerna, men inte de enda. Vad mer påverkar miljön, och är energin störst och vattnet näst störst?

## 2. Vilka faktorer finns

FN:s miljöprogram (UNEP) beskriver AI:s miljöpåverkan över hela livscykeln, från datainsamling och modellutveckling till drift och infrastruktur. Som direkta effekter nämns energi, vatten och mineralanvändning, utsläpp och elektroniskt avfall, och som indirekta effekter förändringar i ekonomi och beteende (UNEP, 2024; uppgiften är hämtad ur sökresultat, UNEP-sidan gick inte att läsa i sin helhet).

Tabell 1. Miljöfaktorer i livscykeln

| Nr | Faktor | Vad det är | Vad källorna säger |
|---|---|---|---|
| 1 | Elanvändning och klimat | El till datacenter (träning och användning). Klimatpåverkan beror på elens ursprung | Datacenter cirka 415 TWh och cirka 1,5 % av världens el 2024, ökning cirka 12 % per år (IEA, 2025) |
| 2 | Vatten, direkt | Kylvatten vid datacentret, förbrukat (avdunstat) eller uttaget | Se Analys_vatten. Bråkdelar av en milliliter per textfråga |
| 3 | Vatten, indirekt | Vatten som förbrukas där elen produceras | I USA cirka tolv gånger större än det direkta (Shehabi m.fl., 2024) |
| 4 | Hårdvara: tillverkning och mineraler | Chip, servrar och utvinning av metaller och mineraler | UNEP nämner utvinning av kritiska mineral och metaller för AI-chip. Jag har inte hittat en mätning av tillverkningens andel av livscykelns utsläpp |
| 5 | Elektroniskt avfall | Utrangerade servrar och chip | Ett scenario för generativ AI ger 1,2–5,0 miljoner ton ackumulerat avfall 2020–2030, och cirkulära åtgärder kan minska det med 16–86 % (Wang m.fl., 2024) |
| 6 | Lokal påverkan på elnät och elpriser | Datacenter som tillkommande elanvändare | Energimyndigheten nämner nya datacenter som en av de största tillkommande elanvändarna om elektrifieringen går snabbt (se Analys_resurser, avsnitt 7) |
| 7 | Mark, ljud och natur | Byggnader, kraftledningar, kylning, buller | Inte undersökt. Det finns ingen källa i detta underlag |
| 8 | Indirekta effekter | Vad AI används till: kan minska eller öka utsläpp i andra sektorer | UNEP nämner indirekta effekter av ekonomisk och beteendemässig förändring. Kan gå åt båda hållen. Inte kvantifierat här |

## 3. Går det att gradera?

Kortsvaret: inte med en enda rangordning som källorna stödjer. Vad som är "störst" beror på tre saker:

- **Perspektiv.** Globalt klimat, lokal vattenbrist, material och avfall och lokala nät ger olika svar.
- **Systemgräns.** Räknas bara datacentret med, eller också elens vatten och tillverkningen av hårdvaran?
- **Mätbarhet.** Elanvändningen är bäst mätt. Hårdvarans och avfallets andel är illa mätt, vilket gör att de lätt hamnar långt ned i en rangordning utan att nödvändigtvis vara små.

## 4. Min preliminära gradering (egen bedömning, inte ett forskningsresultat)

Kriterier för gradering, ett steg i taget:

1. **Storlek:** hur stort är det i absoluta tal och som andel av en jämförbar helhet?
2. **Växtakt:** hur snabbt ökar det?
3. **Lokalitet:** kan det slå hårt på en plats, även om det är litet globalt?
4. **Reversibilitet:** går skadan att återställa?
5. **Säkerhet i underlaget:** hur väl känner vi siffrorna?

Tabell 2. Gradering (preliminär)

| Nr | Faktor | Storlek | Växtakt | Lokalt slagkraftig | Säkerhet i underlaget | Kommentar |
|---|---|---|---|---|---|---|
| 1 | Elanvändning och klimat | Störst av det som är mätt | Hög (cirka 12 % per år) | Ja, vid nätet | Hög | Klimatpåverkan följer elens ursprung |
| 3 | Indirekt vatten (elens vatten) | Större än direkt vatten i USA | Följer elen | Ja | Medel | Räknas ofta in under elen |
| 2 | Direkt vatten | Litet per fråga, växer totalt | Hög | Ja, i torra områden | Medel | Slutna system minskar det, mot lite mer el |
| 4–5 | Hårdvara, mineraler, e-avfall | Okänd andel, sannolikt betydande | Hög | Ja, på utvinningsorterna | Låg | Det saknas en bra mätning, risk att underskattas |
| 6 | Elnät och elpriser | Beror på plats | Hög | Ja | Medel | Mer en fördelningsfråga än en total belastning |
| 7 | Mark, ljud, natur | Okänt | Okänd | Ja | Mycket låg | Ej undersökt |
| 8 | Indirekta effekter | Okänt, båda riktningar | Okänd | Nej | Låg | Kan väga tyngre än allt det andra, men går inte att säga idag |

**Är energin störst och vattnet näst störst?** Bland det som är bäst mätt är elen störst. Vattnet kommer sedan, och det största vattnet ligger i elproduktionen, så i praktiken hör en stor del av "vattenfrågan" ihop med energifrågan. Men det går inte att säga att vattnet är näst störst: hårdvaran, mineralerna och avfallet är sämre mätta, och jag kan inte med källor visa om de ligger över eller under vattnet. Det ärliga svaret är att rangordningen beror på perspektiv, och att den lägsta säkerheten finns hos faktorer som troligen är större än de ser ut.

## 5. Konsekvenser för sidan

- Visa en kort "miljöfaktorer"-tabell med de fem första raderna i tabell 1 och graden av säkerhet. Länka vidare till detaljerna.
- Skriv inte en enda rangordning som om den vore fakta. Skriv att det inte finns någon vedertagen rangordning, vilka kriterier vi använt och att graderingen är vår bedömning.
- Framhäv det som är dåligt mätt: att något inte är mätt betyder inte att det är litet.

## 6. Det som återstår att verifiera

- UNEP (2024): öppna dokumentet i original och kontrollera formuleringarna om mineral och e-avfall.
- Tillverkningens andel av hårdvarans livscykelutsläpp: sök en studie.
- Storleken på global e-avfallsmängd, för att kunna sätta Wang m.fl. i proportion.
- Mark, ljud och natur: sök källor eller skriv att det inte undersökts.
- Träning kontra användning: äldre uppskattningar ger användningens andel som 35–60 % av energin, nyare projektioner högre (uppgifter ur en sammanställning i en vetenskaplig förtryckt artikel, ej öppnad). Kontrollera.

## Källor (Harvard, alfabetisk ordning, hämtade 2026-11-12)

- Internationella energiorganet (IEA) (2025) *Energy and AI*, sammanfattning. https://www.iea.org/reports/energy-and-ai/executive-summary *(Datacentrens elanvändning i världen. Läst i originalet.)*
- Shehabi, A. m.fl. (2024) *2024 United States Data Center Energy Usage Report*, LBNL-2001637, Lawrence Berkeley National Laboratory. https://eta-publications.lbl.gov/sites/default/files/2024-12/us_data_center_energy_usage_report_lbnl-2001637.pdf *(Direkt och indirekt vatten. Kopian är märkt som embargo, kontrollera mot officiell version.)*
- UNEP (2024) *Artificial intelligence (AI) end-to-end: the environmental impact of the full AI lifecycle needs to be comprehensively assessed*. https://www.unep.org/resources/report/artificial-intelligence-ai-end-end-environmental-impact-full-ai-lifecycle-needs-be *(FN:s miljöprogram om AI:s livscykelpåverkan. Sidan gick inte att läsa fullt ut. Innehållet är hämtat ur sökresultat.)*
- Wang, P. m.fl. (2024) 'E-waste challenges of generative artificial intelligence', *Nature Computational Science*, november 2024. https://www.nature.com/articles/s43588-024-00712-6 *(Scenario för elektroniskt avfall från generativ AI. Sammanfattningen läst i originalet.)*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
