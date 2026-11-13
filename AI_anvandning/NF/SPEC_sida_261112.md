# SPEC: sidan om AI i en miljöorganisation (datamodell, beräkningar, struktur)

**Version:** 0.21 · **Datum:** 2026-11-12 · **Avsändare:** Kent Lundgren
**Ändringar i 0.21:** proportion.html har avsnittet #linkedin före Källor, bakgrund.html en loggrad och en länk under Mer att läsa. LinkedIn-artikeln är en egen text och står inte i källförteckningen.
**Ändringar i 0.20:** gen_og_bild.py skriver även og-agentisk.jpg och og-proportion.jpg (1200×630, JPEG), och agentisk.html och proportion.html har egna og:image, og:image:alt och twitter:image. AI:s platser i og-proportion.jpg hämtas ur posterna WEF_AI_2AR och WEF_AI_10AR.
**Ändringar i 0.19:** agentisk.html (ny sida, ingen datadriven tabell, uppgifter via data-post och data-kalla ur siffror.json), databas/supabase_agentisk_ai.sql (en rad i rang_omrostning), rangordning.js: knappen Visa min bedömning visas bara om tabellen har celler med klassen rg-efter-rost (variabeln harEgen).
**Ändringar i 0.18:** proportion.html har p.rg-teknikrad under rangordningen och en länk i p.adminrad till databas/Uppkoppling_Supabase.md. Dokumentet länkar tillbaka till sidan.
**Ändringar i 0.17:** proportion.html har p.adminrad (länkar till Supabase-dashboard, SQL Editor och databas/supabase_admin.sql, dold vid utskrift). databas/supabase_admin.sql innehåller adminkommandon och comment on table med tillbakaadressen.
**Ändringar i 0.16:** rangordning.js: om databasen inte nås eller saknar funktionerna sparas ordningen lokalt (saveState lokal, behovSynk) och skickas när databasen svarar. Bannern säger det. databas/supabase.md har avsnitt 2b om återbruk av projektet.
**Ändringar i 0.15:** rangordning.js, rangordning.css och rangordning_config.js (dra och släpp, pilknappar, frivilligt namn, medelplats, slumpad startordning, läge utan databas), databas/supabase_rangordning.sql (flera omröstningar, fem funktioner, låsta tabeller) och sidan proportion.html.
**Ändringar i 0.14:** startsidan: avsnittet Två frågor, två korta svar (.svarsrutor) med siffror ur datafilen, liten bild av affisch 3, knappen Gå direkt till bilderna i introt, markerat kort (li.markerat) och ny delningsbeskrivning.
**Ändringar i 0.13:** gor_pdf.py (PDF i A4 och A3 med PyMuPDF), affisch 3 i A4 med enfärgade ytor och ritade pilspetsar, och djuplänkar till bilderna: #bildN visar bilden, #bildN-stor öppnar den förstorad, adressen följer valet (history.replaceState) och knappen Kopiera länk.
**Ändringar i 0.12:** forstora.js och forstora.css (förstoring i ett fönster med hela bilden, bredd, 100 %, zoom, rullning och Esc), gen_affisch.py (affisch 3 som SVG, text bruten efter uppmätt bredd) och tre nya källor.
**Ändringar i 0.11:** förbehållsrutor (.notis) fälls ihop av sida.js (doljNotiser) till en rad som öppnar rutan, med valfri rubrik i data-rubrik, och öppnas vid utskrift. Utan JavaScript syns rutan.
**Ändringar i 0.10:** bildvaxel.js och bildvaxel.css (växlande bildvisning med paus, val av bild och stöd för minskad rörelse) och mappen media med två bilder.
**Ändringar i 0.9:** källor kan ha fältet nyckel (förklaring till varför källan är extra intressant), som visas som en markering i källförteckningen. Poster för bildrapporten uppdaterade (472 kommentarer, tonläge).
**Ändringar i 0.8:** nya sidor bilder.html och bakgrund.html (version 1.10), elva nya poster (UEA_*, ZHAO_*), sju nya källor och fyra nya termer i sida.js.
**Ändringar i 0.7:** intro på startsidan (`intro.js`, `intro.css`): gissa, mikron, kvitto, med händelsen `siffror-laddade` från `sida.js`, och delningsbild (`og-bild.jpg`, genererad av `gen_og_bild.py`) med Open Graph-taggar på alla sidor.
**Ändringar i 0.6:** källor i Harvardformat enligt kent-referens-skill: fälten `doi`, `hamtad` och `not` per källa, `ids` per rad i verifieringsloggen, `kort` med författare och år (a/b när år saknas), listtypen `sidkallor` (en källförteckning på varje sida, byggd av de källor sidan använder) och summarad (`tfoot`) i tabellen över tokens och kostnad.
**Ändringar i 0.5:** ny sida `forbrukning.html` (kontext, tokens, energi och pengar), källor utan webbadress (`url: null`), visning `data-visa="usd"`, ögonblicksbild A3 (Y_NY 1 214 129, Y_UT 397 735, Y_ATER 70 562 497, 195 anrop) med nya testvärden: Z_NY "cirka 2 000", Z_UT "cirka 800", Z_ALLA "cirka 120 000", tredje räknesättet "220–760 Wh", bedömd energi "550 Wh", API-kostnad Sonnet 5 minuter "13".
**Ändringar i 0.4:** testfallen för Z gäller ögonblicksbild A2 (Y_NY 1 154 565, Y_UT 370 966, Y_ATER 65 782 935, 188 anrop): Z_NY "cirka 1 900", Z_UT "cirka 740", Z_ALLA "cirka 110 000", tredje räknesättet "220–730 Wh". Nya poster ENERGI_BEDOMNING och ENERGI_KVOT_OVRE_UNDRE (beräknade), JEGHAM_WH_LANG_MAX och JEGHAM_FAKTOR.
**Ändringar i 0.3:** SPEC:en följer det som byggdes i sidans version 1.0: posttypen `uppskattad` (källans egen beräkning) och fältet `spann`, USGS-posterna som fyra poster plus två beräknade, platshållarnas attribut dokumenterade (avsnitt 5), testfallet för 0,3 Wh ändrat till "cirka 1,1 sekunder" (en decimal under 10 sekunder), öppna punkter uppdaterade (avsnitt 10).
**Ändringar i 0.2:** genomläsning med fräscha ögon: typ och belagd skiljs åt, beräknade poster har formel i stället för värde, platshållare i texten (`data-post`) så att inga siffror skrivs för hand, kontroll av att datafilen och registret stämmer överens, hänsyn till att `fetch` inte fungerar på `file://`, trafikljusets mellannivå visas i orange (inte gult), och två nya öppna punkter (innehållet i PRD avsnitt 5 saknas som text, databasen är en egen förbättringsrad).
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
- `typ`: vad värdet är: `uppmatt` (mätvärde), `uppskattad` (källans egen beräkning eller uppskattning), `antagen` (ett antagande i analysen) eller `beraknad` (räknas av sidan ur andra poster).
- `belagd`: `original` (läst i originalet), `sekundar` (via sekundärkälla), `bolagets_egen` eller `antagande`.
- `kalla`: id i listan `kallor`. Krävs för poster av typen `uppmatt`. En post av typen `antagen` har `kalla` om det finns stöd för antagandet, annars `null`. En post av typen `beraknad` har `formel` (avsnitt 4) och saknar `varde` i filen.
- `hamtdatum`: ISO-datum. Krävs när `kalla` finns.
- `forbattring`: lista med nummer i förbättringsregistret, tom lista om inget återstår.
- `spann`: valfritt, `[min, max]` när källan anger ett spann. `varde` är då mittvärdet och används i beräkningar.

**Poster som måste finnas i 1.0** (värden och källor hämtas ur analyserna, se `Forbattringar_261112.md` avsnitt 5): `X_IN` (100), `X_UT` (500), `X`, `Y_UT`, `Y_NY`, `Y_ATER` (mätta med `summera_tokens.py`, som är en egen post i `kallor` med mättidpunkt), `Z_NY`, `Z_UT`, `Z_ALLA`, `MW_EFFEKT` (1 000 W, typ `antagen` tills F-06 är löst), `GOOGLE_WH_FRAGA`, `GOOGLE_ML_FRAGA`, `EPOCH_WH_FRAGA`, `EPOCH_TOKENS_SVAR`, `BILD_WH`, `WUE_MICROSOFT_2025`, `WUE_USA_2023`, `INDIREKT_VATTEN_USA`, `DATACENTER_TWH_VARLD_2024`, `DATACENTER_ANDEL_VARLD_2024`, `ELMIX_NORDEN_G_KWH`, `ELMIX_VARLD_G_KWH`, `DATACENTER_TWH_SVERIGE_2022`, `USGS_UTTAG_GENOMSTR`, `USGS_FORBR_GENOMSTR`, `USGS_UTTAG_KYLTORN` och `USGS_FORBR_KYLTORN` (med de beräknade `ANDEL_FORBR_GENOMSTR` och `ANDEL_FORBR_KYLTORN`). Fler poster finns i `data/siffror.json` (56 i version 1.0).

**Valideringsregler** (se avsnitt 8): varje post har `id`, `enhet`, `typ`, `belagd`, och `varde` om den inte är `beraknad`. Varje `kalla` hittas i `kallor`. Varje nummer i `forbattring` hittas i `forbattringar`. Inga dubbla `id`. Beräknade poster har `formel` och räknas av sidan.

**Enda källa till sanning.** Siffror, källor, antaganden och förbättringsrader som sidan visar kommer från `data/siffror.json`. Markdown-filerna är arbetskopior. Förbättringsregistret i [Forbattringar_261112.md](Forbattringar_261112.md) är mästare för raderna F-nummer och rubrik, och valideringen kontrollerar att varje F-nummer i JSON-filen finns i registret (och tvärtom för rader med `syns: ja`).

## 4. Beräkningar (görs i `sida.js`, aldrig för hand i HTML)

| Nr | Namn | Formel | Visning |
|---|---|---|---|
| 1 | X | `X_IN + X_UT` | "600 tokens" |
| 2 | Z_NY | `Y_NY ÷ X` | avrundas till två värdesiffror, "cirka 950" |
| 3 | Z_UT | `Y_UT ÷ X_UT` | "cirka 290" |
| 4 | Z_ALLA | `(Y_NY + Y_ATER) ÷ X` | "cirka 34 000" |
| 5 | Tid i mikrovågsugn | `sekunder = Wh × 3 600 ÷ MW_EFFEKT` | se nedan |
| 6 | Vatten per kWh till ml | `ml = (liter per kWh) × Wh` (faktorerna 1 000 för liter till ml och Wh till kWh tar ut varandra) | ml, en värdesiffra eller två |
| 7 | Energi för en session | undre gräns `Z_NY × GOOGLE_WH_FRAGA` till `Z_NY × EPOCH_WH_FRAGA`, övre gräns `Z_ALLA × GOOGLE_WH_FRAGA` till `Z_ALLA × EPOCH_WH_FRAGA` | spann, aldrig ett enda tal |

**Visning av tid:** under 90 sekunder visas sekunder ("cirka 0,9 sekunder", en decimal under 10 sekunder, annars heltal). Från 90 sekunder till 90 minuter visas minuter. Därefter timmar med en decimal. Alltid "cirka" i framför beräknade värden.

**Talformat:** svensk standard: decimalkomma, tusentalsavgränsare med tunt mellanrum (`Intl.NumberFormat('sv-SE')`).

**Testfall (måste klara):** 0,24 Wh vid 1 000 W blir 0,864 s och visas "cirka 0,9 sekunder". 0,3 Wh blir 1,08 s, "cirka 1,1 sekunder". 2,907 Wh (`BILD_WH`) blir 10,47 s, "cirka 10 sekunder". Med ögonblicksbild A2: 1 154 565 ÷ 600 blir 1 924,3 och visas "cirka 1 900". 370 966 ÷ 500 blir 741,9, "cirka 740". (Z_ALLA ÷ 600: (1 154 565 + 65 782 935) ÷ 600 blir 111 562, "cirka 110 000".) Testvärdena ändras när en ny ögonblicksbild införs.

Ändras `X_IN`, `X_UT`, `Y_NY`, `Y_ATER` eller `MW_EFFEKT` i datafilen ska alla visade värden uppdateras utan att något annat ändras. `Y_NY` och `Y_ATER` kommer från skriptet `summera_tokens.py` (ögonblicksbild med tidpunkt, F-30).

## 5. Sidans innehåll och komponenter

**Platshållare i texten.** Inga siffror som finns i datafilen skrivs för hand i HTML. Texten använder platshållare som `sida.js` fyller i: `<span data-post="GOOGLE_WH_FRAGA"></span>` skriver värde och enhet, `<span data-berakna="mikro" data-post="GOOGLE_WH_FRAGA"></span>` skriver tiden i mikrovågsugn, och `<span data-berakna="z_ny"></span>` skriver Z. Text som skapas av JavaScript ska också få källlänkar och tabellhänvisningar som länkar, på samma sätt som text som står i HTML.

**Platshållarnas attribut** (implementerade i `sida.js`):
- `data-post="ID"` skriver värde och enhet med en markering. `data-badge="nej"` utelämnar markeringen och `data-utanenhet="ja"` utelämnar enheten.
- `data-formel="UTTRYCK"` räknar ett uttryck av post-id, tal och `+ - * / ( )`, och `data-formel2` anger övre gräns för ett spann. `data-visa` är `tid` (värdet är sekunder), `energi` (Wh, visas även som kWh), `vatten` (ml, visas även som liter) eller `tal`. `data-enhet`, `data-sig` (värdesiffror, standard 2) och `data-cirka="nej"` styr visningen.
- `data-kalla="ID"` skriver källans korta namn som en länk till originalet.
- `data-lista="kallor|forbattringar|forbattringar-alla|poster|antaganden|verifieringar|versionslogg"` skriver en lista eller tabell ur datafilen (`data-ids` och `data-filter="syns"` filtrerar förbättringsrader).

**Om datafilen inte kan läsas.** `fetch` fungerar inte på `file://`, så sidan testas via en lokal server (till exempel `python -m http.server` i mappen). Kan datafilen ändå inte läsas visar sidan en tydlig rad ("Siffrorna kunde inte läsas, kontrollera sidan på GitHub Pages") i stället för tomma platshållare eller gamla siffror.

**Tvåstegsmodell.** Varje svår fråga (vatten, miljöfaktorer, vad en fråga är) har
1. en **kort ruta** på `analys.html` (3–5 meningar och en liten numrerad tabell) som är faktamässigt korrekt, med spann och osäkerhet, och
2. en **länk** till en egen fördjupningssida med hela analysen.

**Markering av hur väl en siffra är belagd.** Varje siffra som kommer ur datafilen får en liten markering bredvid sig (färg och ord, inte bara färg): `original`, `sekundär`, `bolagets egen uppgift` eller `antagande`. Färger: grön, blå, orange och grå. **Aldrig gult**, eftersom gult är reserverat för inmatning. Markeringen länkar till källan (`#ref-<id>`) och, om `forbattring` inte är tom, till raden i förbättringsregistret.

**Förklaringar.** Förkortningar och facktermer (WUE, PUE, TWh, token, CO2e, uttag, förbrukning och liknande) förklaras vid första användning i löptext och med hovring, fokus och tryck, inte bara `title`. Förklaringen hämtas ur källan, aldrig gissad. En liten ordlista i `sida.js` lägger en `abbr`-liknande komponent med tangentbords- och pekstöd.

**Trafikljusets färger.** Den mellersta nivån i trafikljusmodellen (PRD avsnitt 5) visas i **orange** och heter "Kräver kontroll", inte "gult", eftersom gult är reserverat för inmatning. (Att bekräfta med Kent.)

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

Version 1.0 läser en JSON-fil. En databas eller ett schemalagt skript som kontrollerar om källorna ändrats är ett senare steg (F-31 i förbättringsregistret). Datamodellen i avsnitt 3 är avsedd att kunna flyttas till en databas utan att sidorna ändras.

## 10. Öppna punkter

Byggd som sidans version 1.0 (lokalt testad 2026-11-12). Kvar:

1. **Sidnamn** (F-19): `analys.html` används och är lätt att byta (filnamn och `dokument.json`).
2. **Källa för mikrovågsugnens effekt** (F-06): `MW_EFFEKT` är en `antagen` post med markering "antagande".
3. **Fördjupningssidor:** fyra sidor ingår i 1.0 (`vatten.html`, `miljofaktorer.html`, `anvandningssatt.html`, `kallor.html`).
4. **Delningsbild** (Open Graph): påminnelse när sidan närmar sig publicering. Bild och text anpassas till projektet.
5. **Texten till PRD avsnitt 5** (principer, trafikljus, bilder och video, checklista, vanliga frågor) saknas (F-32) och kommer i en senare version.

## Repo` sist.

## 9. Databas, senare

Version 1.0 läser en JSON-fil. En databas eller ett schemalagt skript som kontrollerar om källorna ändrats är ett senare steg (F-31 i förbättringsregistret). Datamodellen i avsnitt 3 är avsedd att kunna flyttas till en databas utan att sidorna ändras.

## 10. Öppna punkter före bygget

1. **Sidnamn** (F-19): `analys.html` är kandidat. Lätt att byta eftersom namnen står på ett ställe (filnamn och `dokument.json`).
2. **Källa för mikrovågsugnens effekt** (F-06): tills den finns är `MW_EFFEKT` en `antagen` post med markering "antagande".
3. **Vilka fördjupningssidor** som ska vara med i 1.0. Förslaget i avsnitt 2 innehåller fem sidor utöver `index.html`.
4. **Delningsbild** (Open Graph): påminnelse när sidan närmar sig slutet. Bild och text anpassas till projektet.
5. **Innehållet i PRD avsnitt 5** (principer, trafikljus, bilder och video, checklista, vanliga frågor) finns ännu inte som text (F-32). Den här SPEC:en täcker resursdelen: vatten, miljöfaktorer, vad en fråga är och sessionen. Bygget kan börja med resursdelen och lägga till förhållningssättet i en senare version, eller vänta tills texten finns. Beslut av Kent.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
