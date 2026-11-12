# Förbättringsregister och verifieringslogg

**Version:** 0.2 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** arbetsdokument. Samlar allt som ska analyseras och beskrivas bättre i kommande versioner, och vad som är kontrollerat mot originalkällor. Hör ihop med [PRD_ai_riktlinjer_261112.md](PRD_ai_riktlinjer_261112.md).

## 1. Hur vi skriver upp och minns

Principen: **en lista, ett ställe, med nummer.** Allt som ska förbättras får en rad här, och övriga dokument hänvisar till raden (till exempel "se F-03") i stället för att ha egna "återstår"-listor som glider isär.

- **Varje rad har:** nummer (F-01, F-02 …), område, vad som ska förbättras, varför, hur väl belagt det är idag, målversion och om det syns på sidan.
- **Status:** *öppen*, *pågår* eller *klar* (med datum och version då den klarades).
- **När något klaras:** raden flyttas till avsnitt 4 (klara) med datum och vilken version den ingick i. Raden raderas inte. Då finns historiken kvar.
- **Målversion:** `1.0` betyder att det måste vara klart innan sidan publiceras. `1.x` betyder att det kan komma i en senare version. `2.0` är en större omarbetning.
- **Det som syns för läsaren:** sidan visar en kort ruta "Det här förbättras i kommande versioner" med de rader som är markerade *syns: ja*, och en versionslogg (vilken version som gäller, vad som ändrats). Eftersom repot är öppet på GitHub är registret i sig inte hemligt. "Internt" betyder därför bara att det inte står på själva sidan.
- **På sidan, vid varje osäker siffra:** en liten markering ("osäker, förbättras i kommande version", med länk till raden i registret om sidan har ett sådant).
- **I datafilen (JSON) för siffrorna:** varje värde får fälten `källa`, `hämtdatum`, `belagd` (original, sekundär eller bolagets egen uppgift) och `forbattring` (nummer i registret). Då kan sidan själv visa markeringen och vi kan se vad som återstår genom att söka på fältet.

## 2. Register över kvarvarande förbättringar

Tabell 1. Kvarvarande förbättringar

| Nr | Område | Vad som ska förbättras | Nuvarande belägg | Målversion | Syns på sidan |
|---|---|---|---|---|---|
| F-01 | Resurser | Jämförelser med fler vardagsvanor (strömning, bilkörning, andra apparater) | Ingen jämförelse utom mikrovågsugn | 1.x | Ja |
| F-02 | Sverige | Total svensk elanvändning kontrollerad mot Energimyndigheten (nu cirka 135–136 TWh via Energiföretagen/Ekonomifakta) | Sekundär | 1.0 | Nej |
| F-03 | Vatten, Sverige | Datacenters vattenanvändning och kylmetoder i Sverige. Ingen siffra funnen | Saknas | 1.x | Ja |
| F-04 | Vatten | Oberoende källa (inte tillverkare) om energiskillnaden mellan avdunstningskylning och slutna system | Tillverkarens egen uppgift (Microsoft) | 1.x | Ja |
| F-05 | Sverige | Energimyndighetens scenariostudie om elanvändning till 2030 (datacenter som tillkommande användare). Öppna originalet | Sökresultat | 1.x | Nej |
| F-06 | Resurser | Källa för att en vanlig mikrovågsugn har märkeffekt omkring 1 000 W, och för vad den drar ur uttaget | Se avsnitt 3 | 1.0 | Ja |
| F-07 | Förening | Naturskyddsföreningens egna uttalanden om AI (en första sökning hittade inget). Kontrollera deras webbplats | Saknas | 1.0 | Nej |
| F-08 | Vatten, Sverige | Indirekt vatten för **svensk** el (vattenkraftens avdunstning, kärnkraftens kylning, vindkraft) | Saknas | 1.x | Ja |
| F-09 | Vatten | Googles totala vattenförbrukning (10,9 miljarder gallon 2025 enligt sökresultat) och Horndal-uppgiften. Öppna Googles rapport | Sekundär | 1.x | Nej |
| F-10 | Vatten | Jegham m.fl. (2025): per-frågesiffran 1,2 ml. Öppna artikeln | Endast sammanfattning | 1.x | Nej |
| F-11 | Miljöfaktorer | UNEP:s hela rapport (PDF, 1,64 MB): mineral, e-avfall, vatten. Abstract är kontrollerat | Abstract | 1.0 | Nej |
| F-12 | Miljöfaktorer | Tillverkningens andel av hårdvarans livscykelutsläpp. Sök en studie | Saknas | 2.0 | Ja |
| F-13 | Miljöfaktorer | Proportioner: global e-avfallsmängd, för att sätta Wang m.fl. i relation | Saknas | 1.x | Ja |
| F-14 | Miljöfaktorer | Mark, ljud och natur. Ej undersökt | Saknas | 2.0 | Ja |
| F-15 | Resurser | Träning kontra användning (användningens andel av energin). Äldre uppskattning 35–60 %, nyare högre, men källorna är en sammanställning i en förtryckt artikel | Sekundär | 1.x | Ja |
| F-16 | Vatten | Microsofts uppgifter: läs originalsidorna själv (nu lästa via en delegerad genomgång). Diagrammet över vatten per kylteknik är en bild | Sekundär | 1.0 | Nej |
| F-17 | Resurser | Per arbetspass: ingen mätning finns. Följ upp om leverantörer börjar redovisa energi per session | Scenario | 2.0 | Ja |
| F-18 | Bilder | Nyare mätningar av energi per bild (Luccioni m.fl. gäller äldre modeller) | En studie | 1.x | Ja |
| F-19 | Dokument | Namn på sidan och dokumentet | Öppet | 1.0 | Nej |
| F-20 | Miljöfaktorer | Indirekta effekter (rebound, nytta i andra sektorer). Går åt båda hållen, inte kvantifierat | Saknas | 2.0 | Ja |
| F-21 | Bilder | Forskning om hur publik reagerar på AI-bilder och märkning (stöd för skälen 2–5 i Analys_resurser avsnitt 4) | Saknas, bara organisationens egen erfarenhet | 1.x | Ja |
| F-22 | Vatten | Kontrollera kylmetod för ett svenskt datacenter genom att läsa respektive bolags miljöredovisning | Saknas | 1.x | Ja |
| F-23 | Vatten | Kyltornens och genomströmningskylningens relevans för datacenter (hur vanligt är vad?). Idag bygger jämförelsen på kraftverk | Kraftverk (USGS) | 1.x | Ja |
| F-24 | Nytta | Belägg för hur mycket AI-stöd faktiskt sparar eller ger i arbete (forskningen är, så vitt jag vet, blandad, men inga källor är hämtade). Sidan påstår ingen siffra för nyttan | Saknas | 1.0 | Ja |
| F-25 | Resurser | Energi per token och per modellanrop för arbete med många steg, och hur cachning av återläst kontext påverkar. Idag bara en proxy ur Epoch AI för GPT-4o | Proxy | 2.0 | Ja |
| F-26 | Resurser | Googles definition av median-prompten i hela artikeln (arXiv:2508.15734): längd i tokens. Idag bara abstract läst | Abstract | 1.0 | Nej |
| F-27 | Resurser | Exakt antal modellanrop i den här sessionen, i stället för uppskattningen cirka 70 | Uppskattning | 1.x | Ja |
| F-28 | Nytta | Jämförelse med människans resursanvändning för motsvarande arbete (källa saknas) | Saknas | 2.0 | Ja |

## 3. Mikrovågsugnens effekt (F-06)

**Läget:** jag har hittat uppgifter om *märkeffekt* (den effekt som går ut i maten) men ingen auktoritativ källa för vad en vanlig ugn drar ur uttaget.
- Elektrolux EMZ725MMK: mikrovågseffekt 900 W (uppgift på en återförsäljares sida, Bygghemma, inte tillverkarens).
- Bäst i test (jämförelsesajt): "vanligaste effekt idag är mellan 500–900 W", de listade modellerna 800 W och 900–1 000 W.
- Uttagen effekt: ingen verifierad källa. En sida av låg kvalitet anger 1 300–1 500 W för en ugn på 1 000 W. En produktsida för tillverkare eller en bruksanvisning med tekniska data skulle ge ett tillförlitligt värde.

**Hur sidan formulerar det tills vidare:** "en mikrovågsugn på 1 000 W (märkeffekten), en vanlig storlek". Sidan påstår inget om vad ugnen drar ur vägguttaget. Parametern görs inte inställbar (beslut).
**Nästa steg:** läs tekniska data i en svensk bruksanvisning (till exempel Electrolux) för att få både märkeffekt och anslutningseffekt, och citera den med tillverkare, modell och datum.

## 4. Klara förbättringar

| Nr | Vad | När | Version |
|---|---|---|---|
| K-01 | Bildsiffran 2,9 Wh per bild kontrollerad mot artikeln (Luccioni m.fl.), se avsnitt 5 | 2026-11-12 | Analys_resurser v0.3 |
| K-02 | Embers 473 g/kWh kontrollerad mot originalsidan | 2026-11-12 | Analys_resurser v0.3 |
| K-03 | USGS: definitionerna och koefficienterna för genomströmning och kyltorn kontrollerade, se avsnitt 5 | 2026-11-12 | Analys_vatten v0.3 |
| K-04 | LBNL: officiell referens (utgiven 2024-12-19, DOI) funnen | 2026-11-12 | Analys_vatten v0.3 |
| K-05 | Li m.fl.: 500 ml per 10–50 svar och 16,9 ml per svar kontrollerade i artikeln | 2026-11-12 | Analys_vatten v0.3 |
| K-06 | UNEP:s abstract kontrollerat på UNEP:s dokumentsida | 2026-11-12 | Analys_miljofaktorer v0.2 |

## 5. Verifieringslogg 2026-11-12

Tabell 2. Vad som kontrollerats och hur

| Källa | Påstående | Hur kontrollerat | Resultat |
|---|---|---|---|
| Ember (2025), *Global Electricity Review 2025* | Global elmix 2024: 473 g CO2/kWh, ned från 484 år 2023 | Sidtexten hämtad och läst | Stämmer, ordagrant på sidan |
| Luccioni m.fl. (2024), arXiv v3 | Bildgenerering cirka 2,9 kWh per 1 000 användningar i genomsnitt, textgenerering cirka 0,047 kWh, "över 60 gånger" mer för bild, den minst effektiva bildmodellen 11,49 kWh per 1 000 | Hela PDF:en hämtad och sökt i | Stämmer. Värdena beror på bildstorlek och inställningar (författarna skriver det själva) |
| Li m.fl. (2025), arXiv | 500 ml vatten för cirka 10–50 medelstora svar. Per svar t.ex. 16,9 ml (2,2 ml på plats och 14,7 ml vid elproduktionen) i en tabellrad | PDF hämtad och sökt i | Stämmer, men gäller GPT-3 i amerikanska anläggningar och är därför mycket högre än Googles uppgift. Abstract anger också 4,2–6,6 miljarder kubikmeter i vattenuttag för global AI-efterfrågan 2027 |
| USGS (2019), SIR 2019-5103 (data för 2015) | Genomströmning: uttag stort, förbrukning är den påtvingade avdunstningen från mottagande vatten. Kärnkraft med genomströmning i sötvatten: uttag 39 gallon/kWh, förbrukning 0,41 gallon/kWh (cirka 1 %). Kärnkraft med kyltorn: uttag 0,70 och förbrukning 0,50 gallon/kWh (cirka 71 %) | Hela PDF:en hämtad, tabell 8 och 9 lästa | Stämmer. Förbrukning är inte modellerad för genomströmning med saltvatten, vilket är det som gäller kustkärnkraft |
| Shehabi m.fl. (2024), LBNL | 66 miljarder liter direkt 2023, cirka 800 miljarder liter indirekt, 4,52 liter per kWh | PDF hämtad och lästa avsnitt | Stämmer. Rapporten är utgiven 2024-12-19 (DOI 10.71468/P1WC7Q, https://escholarship.org/uc/item/32d6m0d1). PDF-kopian är märkt som embargo, men utgivningen är bekräftad |
| UNEP (2024), dokumentsida | Livscykelperspektiv med energi, vatten, mineral, utsläpp, e-avfall och indirekta effekter | Dokumentsidan läst i webbläsare (abstract) | Stämmer på abstractnivå. Hela rapporten är inte läst (F-11) |
| Microsoft (2024, 2026) | Slutna kretsar utan avdunstning, WUE 0,30 respektive 0,27 L/kWh, nominell ökning av energianvändningen | Två sidor lästa via en delegerad genomgång | Stämmer enligt genomgången. Egen läsning kvar (F-16) |
| Altman (2025) | 0,34 Wh och 0,000085 gallon per genomsnittlig fråga | Sidtexten hämtad | Stämmer, ordagrant. Ingen metod redovisas |
| Google (Vahdat & Dean, 2025) | 0,24 Wh, 0,03 g CO2e, 0,26 ml, "inte verifierade av tredje part" | Sidtexten hämtad | Stämmer |
| Epoch AI (You, 2025) | Cirka 0,3 Wh per fråga | Sidtexten hämtad | Stämmer |
| IEA (2025) | 415 TWh, cirka 1,5 %, 45 % USA, 25 % Kina, 15 % Europa | Sidtexten hämtad | Stämmer |
| Energimyndigheten (2023), RISE | 2,8–3,2 TWh 2022 m.m. | PDF hämtad och lästa avsnitt | Stämmer |
| Naturvårdsverket (2026) | 59 g CO2e/kWh | PDF hämtad och lästa avsnitt | Stämmer |
| Wang m.fl. (2024), Nature Computational Science | 1,2–5,0 miljoner ton e-avfall 2020–2030, 16–86 % minskning med cirkulära åtgärder | Abstract hämtat | Stämmer på abstractnivå |

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
