# Presentation 11: tentan i endimensionell analys, steg för steg

- **Live:** [https://kentlundgren.github.io/AI-teknik/Presentationer/11/](https://kentlundgren.github.io/AI-teknik/Presentationer/11/) (adressen fungerar först när mappen är pushad och publicerad)
- **Avsändare:** Kent Lundgren

En guide där läsaren leds steg för steg genom tentan i Endimensionell analys B1 vid Lunds tekniska högskola (LTH), skriven 2026-10-30. Varje uppgift har fyra steg som läsaren öppnar ett i taget (vad frågas, ledtråd, delsteg, lösning), kontrollfält för svar och mellansvar, checklistor där svaret är en text eller en skiss, figurer och en bedömning av hur svår uppgiften var. Uppgifterna är hämtade ur tentan och de källor som anges längst ned på sidan och är inte kvalitetssäkrade av någon utomstående. Kontrollera mot källan innan något återges.

**Vad det är:** en guide, varken en undersökning som `10` eller en presentation av Kents arbetssätt som `Nr1` och `Nr2`. Mappnumret är inte en version. Sidhuvudet visar "uppdaterad den [datum]", som ändras vid varje innehållsändring (format `1 nov 2026`).

**Status (2026-11-01):** arbetsversion, inte publicerad. Rätten att återge tentan publikt är inte klarlagd. Se `PRD_presentation_tenta_endimensionell_analys.md` för öppna frågor.

## Så öppnar du sidan lokalt

Startsidan är `index.html`. Webbläsaren visar bara en fillista om du öppnar själva mappen, så öppna filen `index.html`. På GitHub Pages visas sidan direkt på mappens adress när den är publicerad.

## Innehåll i mappen

| Fil | Vad |
|---|---|
| `index.html`, `style.css` | Sidan och dess utseende |
| `data.js` | Alla uppgifter, svar, ledtrådar, delsteg och svårighetsbedömning |
| `figurer.js` | Figurerna (grafer och geometri) som SVG, ritade av kod |
| `script.js` | Motorn: bygger sidan, kontrollerar svar, modal, ankare |
| `PRD_presentation_tenta_endimensionell_analys.md` | Beslut, öppna frågor och ändringslogg |
| `META_svara_pa_tentauppgifter.md` | Vad som är svårt och kan gå fel när en AI läser av och löser uppgifterna |
| `JAMFORELSE_tentor_LTH_261030_och_LiU_260819.md` | Jämförelse med tentan i Envariabelanalys 1 (TATA41, Linköping) |
| `kontroll_oberoende.py`, `kontroll_med_sympy.py` | Kontrollerna av svaren (21 respektive flera kontroller) |
| `*.html` med samma namn som en `.md`-fil | Läsvyer av md-filerna, genererade med `md_till_html.py` |
| `prototyp_*.html` | Tidiga prototyper (uppgift 1, uppgift 2, alla uppgifter), ersatta av `index.html` |
| `endimensionell_analys_LTH_261030.pdf` | Den skannade tentan. Rätten att publicera den är inte klarlagd |

## Underhållsregel

Ändras innehållet: uppdatera datumet i sidhuvudet (`versionText` i `index.html`).

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/Presentationer/11
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\Presentationer\11`
