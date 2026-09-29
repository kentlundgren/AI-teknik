# SPEC – Provbänken (Nr2)

**Hör till:** `PRD_presentation_ai_arbetsgivare.md` (v4)
**Skapad:** 2026-09-29
**Version:** 1 (utkast – öppna punkter markerade ÖPPEN)
**Syfte:** Låst byggspecifikation. PRD:n säger *vad och varför*, den här filen säger *exakt hur det ska vara* och när det är klart.

---

## 1. Läsare och språk

- Läsare: rekryterare, ekonomichefer och konsultkunder, utan teknisk bakgrund.
- **Enbart svenska** (beslutat 2026-09-29). Ingen språkväxlare.
- Ton: nordisk, saklig, inga säljande adjektiv. Förbjudna ord enligt Kents skrivregler (bl.a. "mycket", "omfattande", "särskilt", "unik", "brinner", "passionerad").

## 2. Struktur

En sida, `index.html`, en `style.css`, en `script.js` (motor) och en `data.js` (innehåll). Ingen automatisk uppspelning, inga externa beroenden utom vid behov typsnitt/ikoner från en tillåten CDN (helst inga).

1. **Sidhuvud:** "Provbänken" + en rad om vad sidan är + `version Nr2 per den [DATUM]` (regeln i `Presentationer/CLAUDE.md`, format `29 sep 2026`).
2. **Frågeguide:** fyra knappar/flikar (se 3). Vald fråga visar svaret och relevanta kort.
3. **Kortöversikt:** alla exempel som kort, filtrerbara via frågeguiden, fälls ut/ihop.
4. **Sidfot:** kort om "påhittade siffror ska sägas vara det", kontaktväg (endast e-post från CV: `lundgren.kent@gmail.com`), länk till LinkedIn (`https://www.linkedin.com/in/kentlundgren/`).

## 3. De fyra frågorna

| # | Fråga (rubrik) | Svar |
|---|---|---|
| 1 | Hur använder du AI i controllerarbetet? | Tre nivåer: löpande arbete (MS Copilot för kortare frågor och standardanalyser), djupare byggen (Claude, Cursor, GitHub), andra åsikt och faktakoll (Perplexity, ChatGPT, Gemini). Kvalitetssäkring: se 6 (ÖPPEN, kräver Kents bekräftelse). |
| 2 | Vilka verktyg och system behärskar du? | Ekonomisystem: Raindance, Unit4/UBW. BI/visualisering: Power BI, Hypergene, QlikView/QlikSense, Stratsys. Budget/prognos: Planacy, Excel (avancerad). AI: Claude, ChatGPT, Perplexity, Gemini, MS Copilot (utan versionsnummer). Egen utveckling: HTML, CSS, JavaScript, Cursor, GitHub. SAP nämns inte. |
| 3 | Vilka exempel kan jag titta på? | Korten (se 4). |
| 4 | Vilka uppdrag och branscher passar? | Öppen för privat, offentlig, statlig och kommunal verksamhet, nyfiken på de flesta branscher. Uppdrag där den tekniska bakgrunden (civilingenjör, LTH) kommer till nytta, t.ex. industri, energi, infrastruktur. Geografi, tillgänglighet och arvode står **inte** på sidan. |

Fråga 3 är förvald när sidan öppnas, så en besökare direkt ser exempel.

## 4. Kort (data)

Varje kort i `data.js` har exakt dessa fält:

```
id            unik text, gemener och bindestreck
kategori      en av: "Granskning", "Ekonomikommunikation", "Analys och faktakoll",
              "Revision och redovisning", "Förening", "Modellering", "Arbetssätt"
rubrik        max 60 tecken
en_mening     max 160 tecken, vad det är
arbetssatt    max 280 tecken, hur AI och Kent delade på arbetet ("AI föreslog, jag verifierade ...")
verktyg       lista med texter
resultat      max 200 tecken, vad det visade
lank          absolut https-adress eller null
lank_text     max 60 tecken, beskrivande, inte en rå URL
siffror       "paahittade" | "oppna_kallor" | "inga" | "verkliga_foreningens_egna"
sekretess     "ok" | "ej_publik"   (ej_publik = visas utan länk)
```

Exempel som ingår (alla `sekretess: "ok"` om inget annat anges):

| id | Länk |
|---|---|
| bokslut-2025 | `https://kentlundgren.github.io/AI/Bokslut_2025/index.html` (siffror: påhittade; kräver att Kent pushat ändringarna) |
| ekonomikommunikation | `https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/index.html` |
| statsskuld | `https://kentlundgren.github.io/Ekonomi/statsskuld/sverige_amerika/index.html` |
| bas-2026 | `https://kentlundgren.github.io/Ekonomi/redovisning/BAS/index.html` |
| revision-kalmar-nation | `https://kentlundgren.github.io/Ekonomi/redovisning/revision/` |
| bjerred | `https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/` |
| balanskrav | `https://lundgren9.github.io/ekonomi/Balanskrav/index.html` (villkor: källraderna "Internt kommunalt underlag" är borttagna eller omskrivna innan länken används; ÖPPEN) |
| arbetssatt | ingen länk eller länk till PRD-mall/skill (ÖPPEN, ej bekräftat av Kent) |

**Nämns utan länk (`sekretess: "ej_publik"`)**, en mening vardera: KOF-hyreskostnad, avstämning av balanskonton, investeringsbudget, badkalkyl.
**Ska inte nämnas alls:** felsökning ekonomisystem, budgetprocess, Borrby.

## 5. Sekretesslista (får aldrig finnas på sidan)

- Interna serveradresser, inloggningsadresser, interna e-postadresser hos uppdragsgivare.
- Verkliga saldon, budgetbelopp, hyresobjekt eller objektnummer från en uppdragsgivare.
- Personnamn (utom Kents eget), uppgifter om Kents familj, telefonnummer, hemadress.
- Länkar till sidor som innehåller något ovan.
- Rå URL i löptext. Länkar har beskrivande text.
- Påståenden om vad Kent gör eller har gjort som inte är bekräftade av honom.

## 6. Kvalitetssäkringstexten (ÖPPEN, PRD 4h)

Får bara innehålla det Kent bekräftat. Utkast: (1) "Jag kontrollerar AI:ns resultat mot källdata." (2) "AI föreslår, jag verifierar." (3) "Jag lägger inte persondata eller uppdragsgivares interna uppgifter i AI-verktyg." Punkt 3 är obekräftad och skrivs inte in före Kents ja.

## 7. Tekniska krav

- Fungerar från 360 px bredd utan sidledes scroll; läsbart upp till 1200 px.
- Kontrast minst WCAG AA; alla knappar nåbara med tangentbord; synlig fokusmarkering.
- Fungerar med JavaScript avstängt i den meningen att innehållet är läsbart (kort som ren HTML är reservläge; ÖPPEN om detta kostar mer än det smakar).
- All text från `data.js` sätts in som text, inte som HTML (`textContent`), så inget innehåll kan köra kod.
- Externa länkar: `target="_blank" rel="noopener noreferrer"`.
- Utskrift: alla kort utfällda, knappar dolda, en logisk läsordning.
- Laddtid: under 1 sekund på vanlig uppkoppling; inga bilder över 200 kB.
- Ljust utseende räcker; mörkt läge är valfritt.

## 8. Acceptanslista (klart när allt detta stämmer)

- [ ] Sidan öppnas utan fel i konsolen, på mobil (360 px) och dator.
- [ ] Alla fyra frågor visar rätt innehåll; fråga 3 är förvald.
- [ ] Varje kort har alla fält och håller teckengränserna (kontrolleras med script, inte på känn).
- [ ] Varje länk öppnats och lästs; ingen ger 404; ingen leder till innehåll ur sekretesslistan.
- [ ] Sidan innehåller inget ur sekretesslistan (sökning på: `.int`, `rdsaas`, `@simrishamn`, verkliga belopp, personnamn).
- [ ] Bokslut 2025-sidorna är pushade av Kent och säger att siffrorna är påhittade.
- [ ] Inga förbjudna ord; ingen avslutande "ser fram emot"-fras; inga påståenden Kent inte bekräftat.
- [ ] Utskrift ger läsbart resultat.
- [ ] `version Nr2 per den [DATUM]` visas i sidhuvudet.
- [ ] `README.md` har Live Page-länken högst upp.
- [ ] Kent har läst sidan från början till slut och godkänt.

## 9. Ändringslogg

- **v1 (2026-09-29):** Första utkast efter Kents beslut: SPEC ja, bara svenska, fyra frågor.
