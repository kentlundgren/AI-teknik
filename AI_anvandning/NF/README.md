# AI i en miljöorganisation (NF)

- **Live:** [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/) (adressen gäller när sidan är pushad och GitHub Pages har byggt den; sidan är byggd och testad lokalt, version 1.19)

En analys av generativ AI:s resursanvändning (energi, vatten och övriga miljöfaktorer) för både dem som gillar AI och dem som är skeptiska, med Naturskyddsföreningen och Lunds Naturskyddsförening som exempel. Förslag på eget initiativ, inte beslutat av någon förening. Ett förslag till förhållningssätt (principer, trafikljus, bilder, checklista, vanliga frågor) kommer i en senare version (F-32).

## Sidan (version 1.19, 2026-11-12)

| Fil | Innehåll |
|---|---|
| [index.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/index.html) | Hubb: två korta svar (el och vatten, bilder), status och länkar |
| [analys.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/analys.html) | Huvudsidan med stabilt namn: analysen i korthet |
| [vatten.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/vatten.html) | Vatten i detalj (steg 2) |
| [miljofaktorer.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/miljofaktorer.html) | Övriga miljöfaktorer och gradering (steg 2) |
| [anvandningssatt.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/anvandningssatt.html) | Vad en fråga är (X), ett arbete (Y) och Z (steg 2) |
| [forbrukning.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/forbrukning.html) | Min förbrukning: kontext, tokens, energi och pengar (abonnemang och API) |
| [bilder.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/bilder.html) | Bilder och förtroende: vad underlaget säger om reaktioner på AI-bilder (steg 2) |
| [bakgrund.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/bakgrund.html) | Bakgrund och användning: varför sidan finns, anonymiserad, med en daterad logg |
| [proportion.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html) | AI i proportion: mått från Ipsos, FN, Världsbanken, WMO och WEF, och en rangordning av tio frågor som läsaren kan göra |
| [rangordning.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning.js), [rangordning.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning.css) och [rangordning_config.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/rangordning_config.js) | Rangordning med valfritt namn och gruppens ordning. Utan databas visas bara den egna ordningen |
| [databas](https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF/databas) | Supabase: SQL-fil för flera omröstningar och instruktioner (supabase.md) |
| [kallor.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/kallor.html) | Källor, verifieringslogg, alla siffror, förbättringsregister och logg |
| [data/siffror.json](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/data/siffror.json) | Alla siffror, källor, antaganden och förbättringsrader |
| [sida.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/sida.js) | Gemensamt skript (version och datum står här) |
| [sida.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/sida.css) | Gemensam stil |
| [intro.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/intro.js) och [intro.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/intro.css) | Intro på startsidan: gissa, mikron, kvitto. Startar vid varje laddning och omladdning (`?intro=0` döljer det) |
| [og-bild.jpg](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/og-bild.jpg) och [gen_og_bild.py](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/gen_og_bild.py) | Delningsbild (1200×630) och skriptet som genererar den ur datafilen |
| [bildvaxel.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/bildvaxel.js) och [bildvaxel.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/bildvaxel.css) | Växlande visning av de två affischerna på sidan Bilder och förtroende |
| [forstora.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/forstora.js) och [forstora.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/forstora.css) | Förstoring av bilder med zoom och rullning |
| [gor_pdf.py](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/gor_pdf.py) | Skapar PDF-filer i exakt A4- och A3-storlek av affisch 3 (kräver PyMuPDF) |
| [gen_affisch.py](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/gen_affisch.py) | Skriptet som genererar affisch 3 i A4-format (media/el_nino_vektor.svg) |
| [media](https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF/media) | Tre affischer: två i låg upplösning (tillstånd återstår: F-46) och affisch 3 som A4-vektorgrafik med PDF i A4 och A3 |
| [dokument.json](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/dokument.json) | Brödsmulor (skapade med `brodsmulor.py`) |
| [summera_tokens.py](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/summera_tokens.py) | Skript som summerar tokens i en Claude Code-session |

## Arbetsdokument (markdown)

| Fil | Innehåll |
|---|---|
| [PRD_ai_riktlinjer_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/PRD_ai_riktlinjer_261112.md) | PRD v0.29: bakgrund, mål, målgrupper, innehåll, faser |
| [SPEC_sida_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/SPEC_sida_261112.md) | SPEC v0.17: datamodell, beräkningar, sidstruktur och krav |
| [Analys_resurser_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_resurser_261112.md) | Analys v0.4: energi, vatten och bilder |
| [Analys_vatten_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_vatten_261112.md) | Analys v0.3: vatten i moderna AI-anläggningar |
| [Analys_miljofaktorer_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_miljofaktorer_261112.md) | Analys v0.2: miljöfaktorer och graderingsram |
| [Analys_anvandningssatt_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_anvandningssatt_261112.md) | Analys v0.3: vad en fråga är, X, Y och Z, och återlästa tokens |
| [Forbattringar_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Forbattringar_261112.md) | Förbättringsregister, verifieringslogg och antagandelogg v0.9 |

## Testa lokalt

Siffrorna läses ur en JSON-fil, och `fetch` fungerar inte på `file://`. Starta en lokal server i mappen och öppna sidan:

```bash
python -m http.server 8765
```

Lägg `?test=1` efter adressen (till exempel `http://localhost:8765/analys.html?test=1`) för att köra valideringen av datafilen och testfallen för beräkningarna.

Underlaget (en privat e-posttråd) finns inte i repot.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF`
