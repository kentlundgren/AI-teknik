# AI i en miljöorganisation (NF)

- **Live:** [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/) (adressen gäller när sidan är pushad och GitHub Pages har byggt den; sidan är byggd och testad lokalt, version 1.4)

En analys av generativ AI:s resursanvändning (energi, vatten och övriga miljöfaktorer) för både dem som gillar AI och dem som är skeptiska, med Naturskyddsföreningen och Lunds Naturskyddsförening som exempel. Förslag på eget initiativ, inte beslutat av någon förening. Ett förslag till förhållningssätt (principer, trafikljus, bilder, checklista, vanliga frågor) kommer i en senare version (F-32).

## Sidan (version 1.4, 2026-11-12)

| Fil | Innehåll |
|---|---|
| [index.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/index.html) | Hubb: vad det är, status och länkar |
| [analys.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/analys.html) | Huvudsidan med stabilt namn: analysen i korthet |
| [vatten.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/vatten.html) | Vatten i detalj (steg 2) |
| [miljofaktorer.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/miljofaktorer.html) | Övriga miljöfaktorer och gradering (steg 2) |
| [anvandningssatt.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/anvandningssatt.html) | Vad en fråga är (X), ett arbete (Y) och Z (steg 2) |
| [kallor.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/kallor.html) | Källor, verifieringslogg, alla siffror, förbättringsregister och logg |
| [data/siffror.json](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/data/siffror.json) | Alla siffror, källor, antaganden och förbättringsrader |
| [sida.js](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/sida.js) | Gemensamt skript (version och datum står här) |
| [sida.css](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/sida.css) | Gemensam stil |
| [dokument.json](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/dokument.json) | Brödsmulor (skapade med `brodsmulor.py`) |
| [summera_tokens.py](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/summera_tokens.py) | Skript som summerar tokens i en Claude Code-session |

## Arbetsdokument (markdown)

| Fil | Innehåll |
|---|---|
| [PRD_ai_riktlinjer_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/PRD_ai_riktlinjer_261112.md) | PRD v0.14: bakgrund, mål, målgrupper, innehåll, faser |
| [SPEC_sida_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/SPEC_sida_261112.md) | SPEC v0.4: datamodell, beräkningar, sidstruktur och krav |
| [Analys_resurser_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_resurser_261112.md) | Analys v0.4: energi, vatten och bilder |
| [Analys_vatten_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_vatten_261112.md) | Analys v0.3: vatten i moderna AI-anläggningar |
| [Analys_miljofaktorer_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_miljofaktorer_261112.md) | Analys v0.2: miljöfaktorer och graderingsram |
| [Analys_anvandningssatt_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Analys_anvandningssatt_261112.md) | Analys v0.3: vad en fråga är, X, Y och Z, och återlästa tokens |
| [Forbattringar_261112.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/Forbattringar_261112.md) | Förbättringsregister, verifieringslogg och antagandelogg v0.7 |

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
