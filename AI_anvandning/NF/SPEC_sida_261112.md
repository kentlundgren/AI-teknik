# SPEC: sidan om AI i en miljöorganisation (datamodell, beräkningar, struktur)

**Version:** 0.1 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Status:** teknisk specifikation inför bygget av HTML-sidan. Hör ihop med [PRD_ai_riktlinjer_261112.md](PRD_ai_riktlinjer_261112.md) (vad och varför). Den här filen säger *exakt hur*. Inte beslutad av Lunds Naturskyddsförening eller Naturskyddsföreningen.

## 1. Syfte och avgränsning

Bygg en statisk webbplats (HTML, CSS, JavaScript utan ramverk och utan server) för GitHub Pages, som presenterar analysen i två steg: en kort faktamässigt korrekt ruta, och en länk till en fullständig analys. Alla siffror ska komma från en enda datafil. Ingen databas i version 1.0 (se avsnitt 9). Inga inmatningsfält i version 1.0.

Utanför omfattningen: inloggning, formulär, spårning, kakor, anrop till externa tjänster vid körning.

## 2. Filstruktur (förslag)

Allt ligger i `AI_anvandning/NF/`. Sidnamnen är ett förslag och kan bytas (F-19). Namn utan å, ä och ö, gemener.

| Nr | Fil | Roll |
|---|---|---|
| 1 | `index.html` | Kort hubb: vad det är, vem som står bakom, status "förslag", version och datum, länkar till sidorna nedan |
| 2 | `analys.html` | Huvudsidan med stabilt namn. Sammanfattning och steg 1-rutor, med länkar till fördjupning |
| 3 | `vatten.html` | Steg 2 för vatten |
| 4 | `miljofaktorer.html` | Steg 2 för övriga miljöfaktorer och graderingen |
| 5 | `anvandningssatt.html` | Vad en fråga är (X), sessionens tokens (Y) och Z |
| 6 | `kallor.html` | Källförteckning, verifieringslogg, förbättringsregister och antagandelogg |
| 7 | `data/siffror.json` | All data (avsnitt 3) |
| 8 | `sida.css` och `sida.js` | Gemensam css och JavaScript (rendering, beräkningar) |
| 9 | `old/` | Äldre versioner av huvudsidan, namn `analys_<version>_<datum>.html` |
| 10 | `dokument.json` och `brodsmulor.css` | Brödsmulor, skapade med `brodsmulor.py` (avsnitt 7) |

Markdown-filerna i mappen (PRD, analyser, register, den här SPEC:en) är källa och arbetsunderlag. Sidorna länkar till dem med blob-länkar på GitHub, aldrig direkt till `.md` på Pages och aldrig till `raw`.

## 3. Datamodell: `data/siffror.json`

Ett objekt med fyra listor. Fält utan värde utelämnas inte, de sätts till `null`.

```json
{
  "datamodell": "1",
  "datum": "2026-11-12",
  "poster": [
    {
      "id": "GOOGLE_WH_FRAGA",
      "namn": "Energi per median-textfråga, Google",
      "varde": 0.24,
      "enhet": "Wh",
      "typ": "uppmatt",
      "belagd": "bolagets_egen",
      "kalla": "vahdat_dean_2025",
      "sida": null,
      "hamtdatum": "2026-11-12",
      "forbattring": ["F-26"],
      "kommentar": "Ej verifierad av tredje part (Googles egen uppgift)."
    }
  ],
  "antaganden": [ { "id": "A1", "datum": "2026-11-12", "poster": ["X_IN", "X_UT"], "skal": "..." } ],
  "kallor": [ { "id": "vahdat_dean_2025", "harvard": "...", "url": "https://...", "not": "kursiv relevansnot" } ],
  "forbattringar": [ { "id": "F-26", "rubrik": "...", "malversion": "1.0", "syns": true } ]
}
```

**Fält i en post.**
- `id`: versaler och understreck, unikt, ändras aldrig efter publicering.
- `typ`: `uppmatt`, `beraknad`, `antagen` eller `bolagets_uppgift`.
- `belagd`: `original` (läst i originalet), `sekundar` (via sekundärkälla), `bolagets_egen` eller `antagande`.
- `kalla`: id i listan `kallor`. Krävs för alla poster utom `antagen`. En post av typen `beraknad` har i stället `formel` (avsnitt 4).
- `hamtdatum`: ISO-datum. Krävs när `kalla` finns.
- `forbattring`: lista med nummer i förbättringsregistret, tom lista om inget återstår.

**Poster som måste finnas i 1.0** (värden och källor hämtas ur analyserna, se `Forbattringar_261112.md` avsnitt 5): `X_IN` (100), `X_UT` (500), `X`, `Y_UT`, `Y_NY`, `Y_ATER`, `Z_NY`, `Z_UT`, `Z_ALLA`, `MW_EFFEKT` (1 000 W, typ `antagen` tills F-06 är löst), `GOOGLE_WH_FRAGA`, `GOOGLE_ML_FRAGA`, `EPOCH_WH_FRAGA`, `EPOCH_TOKENS_SVAR`, `BILD_WH`, `WUE_MICROSOFT_2025`, `WUE_USA_2023`, `INDIREKT_VATTEN_USA`, `DATACENTER_TWH_VARLD_2024`, `DATACENTER_ANDEL_VARLD_2024`, `ELMIX_NORDEN_G_KWH`, `ELMIX_VARLD_G_KWH`, `DATACENTER_TWH_SVERIGE_2022`, `USGS_KARNKRAFT_GENOMSTROMNING` och `USGS_KARNKRAFT_KYLTORN`.

**Valideringsregler** (se avsnitt 8): varje post har `id`, `varde`, `enhet`, `typ`, `belagd`. Varje `kalla` hittas i `kallor`. Varje nummer i `forbattring` hittas i `forbattringar`. Inga dubbla `id`. Beräknade poster saknar `varde` i filen och räknas av sidan.

## 4. Beräkningar (görs i `sida.js`, aldrig för hand i HTML)

| Nr | Namn | Formel | Visning |
|---|---|---|---|
| 1 | X | `X_IN + X_UT` | "600 tokens" |
| 2 | Z_NY | `Y_NY ÷ X` | avrundas till två värdesiffror, "cirka 950" |
| 3 | Z_UT | `Y_UT ÷ X_UT` | "cirka 290" |
| 4 | Z_ALLA | `(Y_NY + Y_ATER) ÷ X` | "cirka 34 000" |
| 5 | Tid i mikrovågsugn | `sekunder = Wh × 3 600 ÷ MW_EFFEKT` | se nedan |
| 6 | Vatten per kWh till ml | `ml = (liter per kWh) × Wh` (liter per kWh × kWh = liter, gånger 1 000 = ml, och Wh ÷ 1 000 = kWh, så faktorerna tar ut varandra) | se nedan |
| 7 | Energi för en session | `Z_NY × (0,24 till 0,3 Wh)` (undre) och `Z_ALLA × (0,24 till 0,3 Wh)` (övre) | spann, aldrig ett enda tal |

**Visning av tid:** under 90 sekunder visas sekunder ("cirka 0,9 sekunder", en decimal under 10 sekunder, annars heltal). Från 90 sekunder till 90 minuter visas minuter. Därefter timmar med en decimal. Alltid "cirka" i framför beräknade värden.

**Talformat:** svensk standard: decimalkomma, tusentalsavgränsare med tunt mellanrum (`Intl.NumberFormat('sv-SE')`).

**Testfall (måste klara):** 0,24 Wh vid 1 000 W blir 0,864 s och visas "cirka 0,9 sekunder". 0,3 Wh blir 1,08 s, "cirka 1 sekund". 2,9 Wh blir 10,44 s, "cirka 10 sekunder". 569 298 ÷ 600 blir 948,8 och visas "cirka 950". 145 705 ÷ 500 blir 291,4, "cirka 290".

Ändras `X_IN`, `X_UT`, `Y_NY`, `Y_ATER` eller `MW_EFFEKT` i datafilen ska alla visade värden uppdateras utan att något annat ändras. `Y_NY` och `Y_ATER` kommer från skriptet `summera_tokens.py` (ögonblicksbild med tidpunkt, F-30).

## 5. Sidans innehåll och komponenter

**Tvåstegsmodell.** Varje svår fråga (vatten, miljöfaktorer, vad en fråga är) har
1. en **kort ruta** på `analys.html` (3–5 meningar och en liten numrerad tabell) som är faktamässigt korrekt, med spann och osäkerhet, och
2. en **länk** till en egen fördjupningssida med hela analysen.

**Markering av hur väl en siffra är belagd.** Varje siffra som kommer ur datafilen får en liten markering bredvid sig (färg och ord, inte bara färg): `original`, `sekundär`, `bolagets egen uppgift` eller `antagande`. Färger: grön, blå, orange och grå. **Aldrig gult**, eftersom gult är reserverat för inmatning. Markeringen länkar till källan (`#ref-<id>`) och, om `forbattring` inte är tom, till raden i förbättringsregistret.

**Förklaringar.** Förkortningar och facktermer (WUE, PUE, TWh, token, CO2e, uttag, förbrukning och liknande) förklaras vid första användning i löptext och med hovring, fokus och tryck, inte bara `title`. Förklaringen hämtas ur källan, aldrig gissad. En liten ordlista i `sida.js` lägger en `abbr`-liknande komponent med tangentbords- och pekstöd.

**Ruta "Det här förbättras i kommande versioner".** Visar raderna i `forbattringar` där `syns` är sant, med nummer, rubrik och målversion.

**Versionsrad.** Överst på varje sida: `Version X.Y · ÅÅÅÅ-MM-DD · Kent Lundgren`. Konstanterna `VERSION` och `VERSIONSDATUM` ligger i `sida.js`, med en `UPPDATERING`-rad i filhuvudet. Alla sidor delar versionsnummer. Varje ändring på sidan höjer versionen och datumet i samma arbete. `analys.html` visar också en kort versionslogg. En ny sida börjar på 1.0.

**Tabeller och diagram.** Varje tabell och diagram har nummer och namn ovanför ("Tabell 3. …"), ett eget `#`-ankare (`#Tabell3`) och hänvisningar i löptext är klickbara länkar. Numren är stabila.

**Ankare.** Varje H2 och H3 har ett stabilt `id` och ett litet `#` vid hovring. Id:n ändras aldrig efter publicering. Inga å, ä, ö i id.

**Källor.** Första omnämnandet av varje källa i löpande text är en länk. Varje källa i källförteckningen har ett eget id (`#ref-<id>`). Förteckningen är alfabetisk, Harvard, med kursiv relevansnot.

**Hörnparet** (båda, i samma leverans): `{ } GitHub` nere till vänster (länk till mappen på GitHub) och `</> teknik` nere till höger (modal med korten *Tekniken* och *Metoden*). Mekanik och klasser kopieras från `Presentationer/Nr1/`. Färgerna tas från sidans egna css-variabler. Korten beskriver bara sanna, specifika detaljer (till exempel "alla siffror läses ur en JSON-fil", "ingen data skickas till någon server") och namnger inget AI-verktyg.

**Röst och avsändare.** Texten talar för Kent i första person där den uttrycker hans slutsatser och val, och innehåller bara påståenden som är sanna för honom (inga "jag har läst" om sådant han inte gjort). Kent är avsändare, inte föreningen. En synlig rad: "Förslag och analys på eget initiativ, inte beslutat av Lunds Naturskyddsförening eller Naturskyddsföreningen. Siffrorna är hämtade ur källorna längst ned och är inte kvalitetssäkrade. Kontrollera mot källan innan något återges." Ingen AI-märkning.

## 6. Utseende och tillgänglighet

- Mobil först, 16 px sidmarginal, ingen horisontell rullning vid 375 px bredd.
- Läsbar typografi, kontrast enligt WCAG AA, fungerar i ljust och mörkt läge (`prefers-color-scheme`) med bakgrund satt explicit.
- Alla interaktiva delar nås och styrs med tangentbord. Information förmedlas aldrig bara med färg.
- Svensk versalbruk i rubriker (versal bara först i rubriken, samt egennamn och förkortningar).

## 7. Navigation

`dokument.json` i mappen listar sidorna ovan (huvuddokument: `index.html`). Brödsmulor och raden "Fler dokument i samma mapp" skapas med `python C:\Users\kentl\.claude\skills\kent-bygg-sidor\brodsmulor.py <mapp>`. Blocket mellan `brodsmulor:start` och `brodsmulor:slut` ändras aldrig för hand. `index.html` är startsida så att mappens adress på GitHub Pages visar sidan.

## 8. Krav för att kalla bygget klart

1. **Validering av datafilen:** ett skript (eller en funktion som körs vid sidladdning i testläge) kontrollerar reglerna i avsnitt 3 och rapporterar fel med post-id.
2. **Testfallen i avsnitt 4** ger de angivna värdena.
3. **Inga hårdkodade siffror i HTML:** varje siffra som finns i datafilen kommer därifrån. Kontroll med sökning efter de kända värdena i HTML-filerna.
4. **Länkar:** alla länkar till källor och interna ankare fungerar. `.md`-länkar går till blob-vyn.
5. **Version:** `grep -n "VERSION" sida.js` visar höjt nummer och datum. En `UPPDATERING`-rad finns.
6. **Test lokalt i förhandsvisning** (skärmdump och genomklickning, även på 375 px) innan något kallas klart.
7. **Ingen publicering och ingen git-åtgärd** utan att Kent ber om det. Kent committar och pushar själv.
8. **README** med Live-länk överst och `## Repo` sist.

## 9. Databas, senare

Version 1.0 läser en JSON-fil. En databas eller ett schemalagt skript som kontrollerar om källorna ändrats är ett senare steg (förbättringsregistret, F-30 och framåt). Datamodellen i avsnitt 3 är avsedd att kunna flyttas till en databas utan att sidorna ändras.

## 10. Öppna punkter före bygget

1. **Sidnamn** (F-19): `analys.html` är kandidat. Lätt att byta eftersom namnen står på ett ställe (filnamn och `dokument.json`).
2. **Källa för mikrovågsugnens effekt** (F-06): tills den finns är `MW_EFFEKT` en `antagen` post med markering "antagande".
3. **Vilka fördjupningssidor** som ska vara med i 1.0. Förslaget i avsnitt 2 innehåller fem sidor utöver `index.html`.
4. **Delningsbild** (Open Graph): påminnelse när sidan närmar sig slutet. Bild och text anpassas till projektet.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
