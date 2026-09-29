# PRD – Nr2: Vad jag kan med AI, för arbetsgivare

**Namn:** PRD_presentation_ai_arbetsgivare
**Plats:** `AI-teknik/Presentationer/Nr2/PRD_presentation_ai_arbetsgivare.md`
**Skapad:** 2026-09-29
**Version:** 1 (utkast – väntar på beslut a–g i avsnitt 4)
**Status:** **Utkast.** Inget är byggt. Målgrupp och grundidé är klara, formen (4a) och urvalet (4c) är öppna.
**Typ:** Grund-PRD för en ny presentation (`Nr2`). Bygger på mönstren i `Nr1` men har ett annat syfte och en annan form.

## 1. Bakgrund

`Nr1` är en självspelande, kronologisk visning (2023 → 2026) av Kents AI- och webbprojekt. Den byggdes för att Kent tycker det är roligt och lärorikt att testa tillsammans med generativ AI. `Presentationer/CLAUDE.md` säger uttryckligen att presentationerna "görs inte för jobbsökning".

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
- Ungefär sex arbetssätt/kategorier med 1–3 exempel vardera, med belägg (länk, bild eller kort utdrag).
- Ett tydligt avsnitt om hur AI-resultat kvalitetssäkras och vad som aldrig läggs i AI-verktyg.
- Läsbar på mobil, utskriftsvänlig, laddar utan väntetid.
- README med Live Page-länk högst upp, versionsdatum i sidhuvudet (enligt `Presentationer/CLAUDE.md`).

**Ingår inte:**
- Självspelande bildspel som huvudform (kan finnas som tillval, se 4a).
- Kommunens interna data, verkliga saldon, hyresobjekt, serveradresser eller budgetunderlag.
- Personuppgifter eller uppgifter om Kents familj.
- Hemsida för jobbsökning i övrigt (CV och brev ligger i ArbetenSokta).
- Ändringar i `Nr1`.

## 4. Frågor och beslut

**a. Form — ÖPPEN.** Kent vill att Nr2 ska vara "rätt så annorlunda" än Nr1. Alternativ:
- **A. Kortöversikt.** Sex kort, ett per arbetssätt. Varje kort fälls ut med "vad jag gjorde", verktyg, resultat och länk.
- **B. Bildspel efter ämne.** Samma motor som Nr1 men sorterad efter arbetssätt i stället för år. Minst annorlunda, kräver tid av besökaren.
- **C. Frågeguide.** Besökaren väljer en fråga ur annonsen ("Hur använder du AI dagligen?", "Vilka verktyg?", "Vilka exempel?") och får svar med belägg.
- **Rekommendation: C som ingång, A som innehåll.** De fem punkterna i annonsen blir ingång. Kort och svar bygger på samma data. Det ger en läsare med två minuter snabbt svar, och en med tio minuter kan fördjupa sig. Ingen automatisk uppspelning.

**b. Läsare och språk — DELVIS BESLUTAT.** Läsaren är arbetsgivare och konsultkunder, ofta chefer, rekryterare och ekonomichefer utan teknisk bakgrund. Svenska först. Engelska är öppet (Invici ber om svenska och engelska).

**c. Urval av exempel — ÖPPEN.** Förslag efter säkerhetsgenomgången:
- **Granskning med specialiserade agenter:** Bokslut 2025 (påhittade siffror, se d).
- **Ekonomikommunikation:** fyra grupper, fyra år fram (påhittat räkneexempel).
- **Analys och faktakoll:** Statsskuld Sverige–USA (öppna källor, dokumenterad metod).
- **Revision och redovisning:** Kalmar Nation, BAS 2026.
- **Datastöd till förening:** Bjerred (el, inpasseringar, medlemmar).
- **Modellering/prognos:** Balanskrav 2027–2031 (anonymiserad) eller badkalkyl — avgörs i e.
- **Arbetssätt och kunskapsdelning:** PRD → SPEC → process-logg, skills, fredagsquiz.

**d. Bokslut 2025 som test — BESLUTAT ✓ (genomförs av Kent).** Siffrorna görs påhittade men konsekventa så att summorna stämmer, originaldokumenten tas bort och sidan säger det öppet. Ett utkast finns i `ArbetenSokta/Referens/Bokslut_2025_fiktiv/`. Kvar för Kent: kopiera in i repot `kentlundgren/AI`, ta bort de fyra bilderna med belopp, och commit/push.

**e. Simrishamn-verktygen — ÖPPEN.** KOF-hyreskostnad, avstämning av balanskonton, felsökning ekonomisystem, budgetprocess, investeringsbudget, Borrby och badkalkyl innehåller interna eller känsliga uppgifter. Alternativ: utelämna, bygga anonymiserade demo-versioner med påhittad data, eller beskriva dem i text utan länk. **Rekommendation:** utelämna felsökning, budgetprocess och Borrby helt; beskriv resten i en mening utan länk tills Simrishamn har gett sitt godkännande.

**f. Syftesändring i `Presentationer/CLAUDE.md` — ÖPPEN.** Regeln "görs inte för jobbsökning" stämmer inte längre för Nr2. Förslag: skriv in att Nr2 är byggd för arbetsgivare, medan Nr1 är kvar som personlig visning. Uppdateras samtidigt som Nr2 byggs.

**g. Behövs ett SPEC.md-steg härifrån? — ÖPPEN.** Rekommendation: **ja, kort.** Här finns tydliga acceptanskriterier som gör en SPEC värd att skriva: dataformat per exempel, vad som aldrig får med (sekretesslistan), mobilbreddder, tillgänglighet och kontrast, laddtid.

## 5. Leveranser

- [ ] Beslut a, c, e, f och g klara
- [ ] SPEC.md (om g = ja)
- [ ] Datafil med exempel (kategori, rubrik, en mening, verktyg, arbetssätt, resultat, länk, sekretessnivå)
- [ ] `index.html`, stil och motor
- [ ] Bokslut 2025 gjort om med påhittade siffror och publicerat av Kent
- [ ] Länkkontroll av samtliga länkar (öppna en och en)
- [ ] Kontroll mot sekretesslistan (inga interna serveradresser, verkliga saldon, personnamn)
- [ ] Granskning på mobil och i utskrift
- [ ] `README.md` med Live Page-länk och versionsdatum i sidhuvudet
- [ ] `Presentationer/CLAUDE.md` uppdaterad (f)
- [ ] Kent committar och pushar (Claude gör det inte)
- [ ] Kent uppdaterar CV:t så att det pekar på färdig Nr2, inte före

## 6. Produktionsordning

1. Beslut a, c, e (formen och urvalet styr allt annat).
2. Bokslut 2025 klart och publicerat, eftersom det är exempel 1.
3. SPEC.md (om ja).
4. Datafilen, sedan motorn och stilen, med kortdata som enda källa.
5. Länk- och sekretesskontroll.
6. Publicering (Kent), sedan CV-uppdatering. **CV:t skickas inte med Nr2-länk förrän sidan svarar.** Sista ansökningsdag hos Invici är 2026-10-13.

## 7. Källor

Interna projektreferenser (inte Harvard-citerbara):
- `Presentationer/Nr1/PRD_presentation_ai_projekt.md`: mönster och beslutshistorik för motor och data.
- `Presentationer/.claude/skills/kent-presentationer/SKILL.md`: hastighetsvarianter, säkerhet i återanvänd kod, källhantering.
- CV-utkast `CV__Kent_Lundgren_AI-Controller_Invicis_konsultnätverk_260929` (D:-arkivet): Kents sex kategorier.
- Annons: [Invici, AI-Controller](https://www.invici.se/lediga-ekonomijobb/7666/), sparad i `ArbetenSokta/Annonser/`.

## 8. Status

Utkast v1. Målgruppen (arbetsgivare) är bestämd. Rekommendationen är en frågeguide med annonsens punkter som ingång och en kortöversikt som innehåll. Urvalet är begränsat till sådant som kan visas utan att röja interna uppgifter. Nästa steg är Kents beslut på a, c och e, och att Bokslut 2025-ändringarna läggs i repot.

## Ändringslogg

- **v1 (2026-09-29):** Första utkast efter Kents beslut om målgrupp, Bokslut 2025-genomgången och länkgranskningen.
