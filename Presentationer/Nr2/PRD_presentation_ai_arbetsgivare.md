# PRD – Provbänken (Nr2): Vad jag kan med AI, för arbetsgivare

**Namn:** PRD_presentation_ai_arbetsgivare
**Visningsnamn:** **Provbänken** (beslutat 2026-09-29). Mappen och adressen förblir `Nr2`; "Provbänken" är namnet man säger och skriver i text.
**Plats:** `AI-teknik/Presentationer/Nr2/PRD_presentation_ai_arbetsgivare.md`
**Skapad:** 2026-09-29
**Version:** 4 (beslut b, g och guidens fyra frågor klara; SPEC.md v1 skriven; h öppen)
**Status:** **Utkast med beslutad inriktning.** Inget är byggt. Form, urval och hantering av Simrishamn-verktygen är beslutade. Syftesändringen i `Presentationer/CLAUDE.md` (f) är gjord. SPEC.md v1 är skriven. Kvar före bygget: kvalitetssäkringstexten (h) och två punkter i SPEC (kortet "arbetssätt", reservläge utan JavaScript).
**Typ:** Grund-PRD för en ny presentation (`Nr2`). Bygger på mönstren i `Nr1` men har ett annat syfte och en annan form.

## 1. Bakgrund

`Nr1` är en självspelande, kronologisk visning (2023 → 2026) av Kents AI- och webbprojekt. Den byggdes för att Kent tycker det är roligt och lärorikt att testa tillsammans med generativ AI. `Presentationer/CLAUDE.md` sade uttryckligen att presentationerna "görs inte för jobbsökning" (ändrat 2026-09-29, se 4f).

**Tillägg 2026-09-29:** Kent söker uppdrag som AI-Controller via Invicis konsultnätverk i Skåne (sista ansökningsdag 2026-10-13, urval löpande). Annonsen ber om exempel på hur AI används i controllerarbetet, vilka system och AI-lösningar som behärskas, och analyser, dashboards eller arbetssätt som utvecklats. Kents CV svarar med en lista länkar och hänvisar till en samlad presentation, `Nr2`, som ännu inte finns (404 den dagen).

**Tillägg 2026-09-29, säkerhetsgenomgång:** Länkarna i CV-utkastet granskades. Flera Simrishamn-sidor innehåller kommunens interna uppgifter (interna serveradresser, hyresobjekt, verkliga saldon, budgetunderlag). Bokslut 2025-testet har därför gjorts om med påhittade siffror och originaldokumenten är borttagna. Se 4d och 4e.

## 2. Syfte

- **Visa en arbetsgivare eller konsultkund, snabbt, vad Kent kan göra med AI i ekonomi- och controllerarbete**, med belägg man kan öppna och kontrollera.
- **Svara på annonsens frågor direkt**: hur AI används, vilka verktyg som behärskas, vilka arbetssätt och analyser som byggts.
- **Visa omdöme, inte bara verktyg**: arbetssättet "AI föreslår, jag verifierar", och att Kent avgör när mänsklig granskning krävs.
- **Skilja sig från `Nr1`.** Nr1 berättar en resa i tid. Nr2 är en sak man använder för att bedöma en kandidat.

## 3. Omfattning

**Ingår:**
- En publik, statisk sida på `.../AI-teknik/Presentationer/Nr2/`, byggd i HTML/CSS/JS, med data skild från motor (som i Nr1).
- Ungefär sex–sju arbetssätt/kategorier (se 4c) med 1–3 exempel vardera, med belägg (länk, bild eller kort utdrag).
- Ett tydligt avsnitt om hur AI-resultat kvalitetssäkras och vad som aldrig läggs i AI-verktyg.
- Läsbar på mobil, utskriftsvänlig, laddar utan väntetid.
- README med Live Page-länk högst upp, versionsdatum i sidhuvudet (enligt `Presentationer/CLAUDE.md`).

**Ingår inte:**
- Självspelande bildspel (varken som huvudform eller tillval, se 4a).
- Kommunens interna data, verkliga saldon, hyresobjekt, serveradresser eller budgetunderlag.
- Personuppgifter eller uppgifter om Kents familj.
- Hemsida för jobbsökning i övrigt (CV och brev ligger i ArbetenSokta).
- Ändringar i `Nr1`.

## 4. Frågor och beslut

**a. Form — BESLUTAT ✓ (2026-09-29): frågeguide som ingång, kortöversikt som innehåll, ingen automatisk uppspelning.** Kent vill att Nr2 ska vara "rätt så annorlunda" än Nr1. Alternativen som vägdes:
- **A. Kortöversikt.** Sex kort, ett per arbetssätt. Varje kort fälls ut med "vad jag gjorde", verktyg, resultat och länk.
- **B. Bildspel efter ämne.** Samma motor som Nr1 men sorterad efter arbetssätt i stället för år. Minst annorlunda, kräver tid av besökaren.
- **C. Frågeguide.** Besökaren väljer en fråga ur annonsen ("Hur använder du AI dagligen?", "Vilka verktyg?", "Vilka exempel?") och får svar med belägg.
- **Valt: C som ingång, A som innehåll.** Kort och svar bygger på samma data. En läsare med två minuter får snabbt svar, och en med tio minuter kan fördjupa sig.
- **Fyra frågor — BESLUTAT ✓ (2026-09-29):** annonsens lista har fem punkter, men tillgänglighet/geografi/arvode hör inte hemma på en publik sida. Guiden har därför fyra frågor: hur AI används, vilka verktyg och system, vilka exempel, vilka uppdrag och branscher. Se SPEC.md avsnitt 3.

**b. Läsare och språk — BESLUTAT ✓ (2026-09-29).** Läsaren är arbetsgivare och konsultkunder, ofta chefer, rekryterare och ekonomichefer utan teknisk bakgrund. **Enbart svenska**, ingen språkväxlare.

**c. Urval av exempel — BESLUTAT ✓ (2026-09-29).** Med:
- **Granskning med specialiserade agenter:** Bokslut 2025 (påhittade siffror, se d).
- **Ekonomikommunikation:** fyra grupper, fyra år fram (påhittat räkneexempel).
- **Analys och faktakoll:** Statsskuld Sverige–USA (öppna källor, dokumenterad metod).
- **Revision och redovisning:** Kalmar Nation, BAS 2026.
- **Datastöd till förening:** Bjerred (el, inpasseringar, medlemmar).
- **Modellering/prognos:** Balanskrav 2027–2031 (anonymiserad). Villkor: källraderna märkta "Internt kommunalt underlag" tas bort eller skrivs om innan länken används.
- **Arbetssätt och kunskapsdelning:** PRD → SPEC → process-logg, skills, fredagsquiz. *(Inte uttryckligen valt av Kent 2026-09-29; behåll som förslag tills bekräftat.)*
- Badkalkyl ingår inte (faller under e).

**d. Bokslut 2025 som test — GJORT LOKALT, väntar på Kents commit/push.** Siffrorna är påhittade men konsekventa så att summorna stämmer, originaldokumenten är borttagna (av Kent på GitHub), de två sifferrapporterna och de fyra bilderna med belopp är borttagna lokalt, och `index.html` säger öppet att siffrorna är påhittade. Ändringarna ligger som ocommittade filer i Kents klon på D: (`...\program\AI\Bokslut_2025`). Kvar för Kent: kontrollera sidorna i webbläsaren, commit och push. Tills det är gjort ligger sifferrapporterna och bilderna fortfarande på GitHub Pages.

**e. Simrishamn-verktygen — BESLUTAT ✓ (2026-09-29).** KOF-hyreskostnad, avstämning av balanskonton, felsökning ekonomisystem, budgetprocess, investeringsbudget, Borrby och badkalkyl innehåller interna eller känsliga uppgifter. Beslut: **felsökning, budgetprocess och Borrby utelämnas helt.** KOF-hyreskostnad, avstämning, investeringsbudget och badkalkyl nämns i en mening vardera, **utan länk**, tills kommunen har gett sitt godkännande. Anonymiserade demo-versioner byggs inte före 2026-10-13.

**f. Syftesändring i `Presentationer/CLAUDE.md` — BESLUTAT ✓ OCH GJORT (2026-09-29).** Filen anger nu att Nr2 är byggd för arbetsgivare med extra regler (inga interna uppgifter, inga personuppgifter, påhittade siffror ska sägas vara det, CV länkar inte före publicering), och att Nr1 är den personliga visningen. Statusraden är också rättad (Nr1 är publicerad).

**g. Behövs ett SPEC.md-steg härifrån? — BESLUTAT ✓ (2026-09-29): ja, kort. SPEC.md v1 är skriven.** Här finns tydliga acceptanskriterier som gör en SPEC värd att skriva: dataformat per exempel, vad som aldrig får med (sekretesslistan), mobilbredder, tillgänglighet och kontrast, laddtid.

**h. Kvalitetssäkringstexten — ÖPPEN, kräver Kents bekräftelse.** Avsnittet om hur AI-resultat kvalitetssäkras och vad som aldrig läggs i AI-verktyg (avsnitt 3) får bara innehålla det Kent faktiskt gör. Utkast att bekräfta eller ändra: (1) "Jag kontrollerar AI:ns resultat mot källdata", (2) "AI föreslår, jag verifierar", (3) "Jag lägger inte persondata eller uppdragsgivares interna uppgifter i AI-verktyg". Punkt 3 är inte bekräftad av Kent. Skrivs inte in på sidan förrän den är det.

## 5. Leveranser

- [x] Beslut a, c och e klara (2026-09-29); visningsnamn Provbänken beslutat
- [x] Beslut f klart och genomfört
- [x] Beslut g, b och guidens fyra frågor klara (2026-09-29)
- [ ] Beslut h klart (kvalitetssäkringstexten)
- [x] SPEC.md v1 skriven (två öppna punkter i den: kortet "arbetssätt", reservläge utan JavaScript)
- [ ] SPEC.md granskad och godkänd av Kent
- [ ] Datafil med exempel (kategori, rubrik, en mening, verktyg, arbetssätt, resultat, länk, sekretessnivå)
- [ ] `index.html`, stil och motor
- [x] Bokslut 2025 gjort om lokalt med påhittade siffror (2026-09-29)
- [ ] Bokslut 2025 committat och pushat av Kent, sidorna kontrollerade i webbläsaren
- [ ] Länkkontroll av samtliga länkar (öppna en och en)
- [ ] Kontroll mot sekretesslistan (inga interna serveradresser, verkliga saldon, personnamn)
- [ ] Granskning på mobil och i utskrift
- [ ] `README.md` med Live Page-länk och versionsdatum i sidhuvudet
- [x] `Presentationer/CLAUDE.md` uppdaterad (f)
- [ ] Kent committar och pushar (Claude gör det inte)
- [ ] Kent uppdaterar CV:t så att det pekar på färdig Nr2, inte före

## 6. Produktionsordning

1. Beslut a, b, c, e, f, g är klara. Kvar före bygget: h och att Kent godkänner SPEC.md.
2. Bokslut 2025 committat och publicerat av Kent, eftersom det är exempel 1.
3. SPEC.md godkänd.
4. Datafilen, sedan motorn och stilen, med kortdata som enda källa.
5. Länk- och sekretesskontroll.
6. Publicering (Kent), sedan CV-uppdatering. **CV:t skickas inte med Nr2-länk förrän sidan svarar.** Sista ansökningsdag hos Invici är 2026-10-13.

## 7. Källor

Interna projektreferenser (inte Harvard-citerbara):
- `Presentationer/Nr1/PRD_presentation_ai_projekt.md`: mönster och beslutshistorik för motor och data.
- `Presentationer/.claude/skills/kent-presentationer/SKILL.md`: hastighetsvarianter, säkerhet i återanvänd kod, källhantering.
- CV-utkast `CV__Kent_Lundgren_AI-Controller_Invicis_konsultnätverk_260929` (D:-arkivet): Kents sex kategorier.
- `Presentationer/CLAUDE.md`: uppdaterad 2026-09-29 med Nr2:s extra regler.
- Annons: [Invici, AI-Controller](https://www.invici.se/lediga-ekonomijobb/7666/), sparad i `ArbetenSokta/Annonser/`.

## 8. Status

Utkast v4. Målgrupp (arbetsgivare), namn (Provbänken), form (frågeguide + kort), urval och hantering av Simrishamn-verktygen är beslutade, och `Presentationer/CLAUDE.md` är uppdaterad. Bokslut 2025 är ändrat lokalt och väntar på Kents commit. Öppet före bygget: texten om kvalitetssäkring (h) och Kents godkännande av SPEC.md. Ingen kod är skriven.

## Ändringslogg

- **v4 (2026-09-29):** Beslut b (bara svenska), g (SPEC ja, kort) och guidens fyra frågor. `SPEC.md` v1 skriven. Leveranser, produktionsordning och status uppdaterade.
- **v3 (2026-09-29):** Genomläsning med fräscha ögon. Rättat: stale status (avsnitt 8) och statusrad, 4d (Bokslut 2025 är gjort lokalt, inte "genomförs av Kent"), 4f (gjort), produktionsordning, "tillval" i Ingår inte som stred mot 4a, antal kategorier (sex–sju), stavfel. Nytt: 4h (kvalitetssäkringstexten kräver bekräftelse), och i 4a att tillgänglighet/arvode inte hör hemma på publik sida. `Presentationer/CLAUDE.md` rättad (Nr1 är publicerad, Nr2 tillagd).
- **v2 (2026-09-29):** Visningsnamn Provbänken. Beslut a (frågeguide + kort), c (urval, inklusive Balanskrav med villkor) och e (utelämna tre Simrishamn-verktyg, nämn fyra utan länk). Status och leveranslista uppdaterade.
- **v1 (2026-09-29):** Första utkast efter Kents beslut om målgrupp, Bokslut 2025-genomgången och länkgranskningen.
