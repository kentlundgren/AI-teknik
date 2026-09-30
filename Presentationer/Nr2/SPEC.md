# SPEC – Provbänken (Nr2)

**Hör till:** `PRD_presentation_ai_arbetsgivare.md` (v4)
**Skapad:** 2026-09-29
**Version:** 3.7 (se ändringsloggen; tidigare 3.3: frågor i Kents röst; kategorin "Forskningskalkyl", gruppering i kortvyn, Cursor under AI; godkänd av Kent 2026-09-29 som v3; två små tillägg vid bygget: siffror "anonymiserade", arbetssatt får vara tomt för ej_publik)
**Status:** **Godkänd som byggunderlag.** Ändringar görs som ny version.
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
| 1 | Hur använder jag AI i controllerarbetet? | Tre nivåer: löpande arbete (MS Copilot för kortare frågor och standardanalyser), djupare byggen (Claude, Cursor, GitHub), andra åsikt och faktakoll (Perplexity, ChatGPT, Gemini). Kvalitetssäkring: se 6. |
| 2 | Vilka verktyg och system behärskar jag? | Ekonomisystem: Raindance, Unit4/UBW. BI/visualisering: Power BI, Hypergene, QlikView/QlikSense, Stratsys. Budget/prognos: Planacy, Excel (avancerad). AI: Claude, ChatGPT, Perplexity, Gemini, MS Copilot (utan versionsnummer). Egen utveckling: HTML, CSS, JavaScript, Cursor, GitHub. SAP nämns inte. |
| 3 | Vilka exempel kan jag visa? | Korten (se 4). |
| 4 | Vilka uppdrag och branscher passar mig? | Öppen för privat, offentlig, statlig och kommunal verksamhet, nyfiken på de flesta branscher. Uppdrag där den tekniska bakgrunden (civilingenjör, LTH) kommer till nytta, t.ex. industri, energi, infrastruktur. Geografi, tillgänglighet och arvode står **inte** på sidan. |

Fråga 3 är förvald när sidan öppnas, så en besökare direkt ser exempel.

## 4. Kort (data)

Varje kort i `data.js` har exakt dessa fält:

```
id            unik text, gemener och bindestreck
kategori      en av: "Granskning", "Ekonomikommunikation", "Forskningskalkyl", "Analys och faktakoll",
              "Revision och redovisning", "Förening", "Modellering", "Arbetssätt"
rubrik        max 60 tecken
en_mening     max 160 tecken, vad det är
arbetssatt    max 280 tecken, hur AI och Kent delade på arbetet ("AI föreslog, jag verifierade ...");
              får vara tomt för kort med sekretess "ej_publik"
verktyg       lista med texter
resultat      max 200 tecken, vad det visade
lank          absolut https-adress eller null
lank_text     max 60 tecken, beskrivande, inte en rå URL
siffror       "paahittade" | "oppna_kallor" | "inga" | "verkliga_foreningens_egna" | "anonymiserade"
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
| samradsguiden | `https://kentlundgren.github.io/Codex/Fritid/NF/Samradsguiden/` (startsidan, inte `lund-ncc.html`; tillagt 2026-09-30) |
| balanskrav | `https://lundgren9.github.io/ekonomi/Balanskrav/index.html` (villkor: källraderna "Internt kommunalt underlag" är borttagna eller omskrivna innan länken används; ÖPPEN) |
| arbetssatt | `https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md` (beslutat: med kort och länk till PRD-mallen) |

**Nämns utan länk (`sekretess: "ej_publik"`)**, en mening vardera: KOF-hyreskostnad, avstämning av balanskonton, investeringsbudget, badkalkyl.
**Ska inte nämnas alls:** felsökning ekonomisystem, budgetprocess, Borrby.

## 5. Sekretesslista (får aldrig finnas på sidan)

- Interna serveradresser, inloggningsadresser, interna e-postadresser hos uppdragsgivare.
- Verkliga saldon, budgetbelopp, hyresobjekt eller objektnummer från en uppdragsgivare.
- Personnamn (utom Kents eget), uppgifter om Kents familj, telefonnummer, hemadress.
- Länkar till sidor som innehåller något ovan.
- Rå URL i löptext. Länkar har beskrivande text.
- Påståenden om vad Kent gör eller har gjort som inte är bekräftade av honom.

## 6. Kvalitetssäkringstexten (BESLUTAD, PRD 4h)

Får bara innehålla det Kent bekräftat (2026-09-29):

- "Jag kontrollerar AI:ns resultat mot källdata."
- "AI föreslår, jag verifierar."
- "Jag lägger inte persondata i AI-verktyg."
- Fyra sätt att verifiera får nämnas, var och en som en kort rad: Bokslutstestet (agenternas fynd jämfördes mot dokumentet och bedömdes), andra åsikt i en annan modell, egna kontrollsummor i Excel, och att källor och länkar öppnas och läses.

**Skrivs inte in (beslutat):** "eller uppdragsgivares interna uppgifter". Skälet: publika Simrishamn-verktyg med interna uppgifter byggdes med AI-stöd, så påståendet kan motsägas.

## 7. Tekniska krav

- Fungerar från 360 px bredd utan sidledes scroll; läsbart upp till 1200 px.
- Kontrast minst WCAG AA; alla knappar nåbara med tangentbord; synlig fokusmarkering.
- Reservläge utan JavaScript (beslutat): ett `<noscript>`-block med exemplen som en enkel länklista (beskrivande länktexter). Ingen full dubblering av korten.
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

- **v3.7 (2026-09-30):** Grok och Gemini Notebook (tidigare NotebookLM, omdöpt av Google i juli 2026) tillagda som AI-verktyg i fråga 1 och 2, med länkar.
- **v3.6 (2026-09-30):** Verktygsnamn i svarstexterna (MS Copilot, Claude, Cursor, GitHub, Perplexity, ChatGPT, Gemini) länkas till respektive officiella sida. Adresserna ligger i `verktygslankar` i `data.js`.
- **v3.5 (2026-09-30):** Fråga 1 delas i tre avsnitt med egna rubriker (verktyg, planering, kvalitetssäkring), och korten visas inne i det avsnitt de illustrerar i stället för under svarsrutan. "Kvalitetssäkring" och "Så verifierar jag" slås ihop. Kortet Claude-kompassen (kategori Arbetssätt) tillagt. GitHub-hörn och teknik-modal tillagda.
- **v3.4 (2026-09-30):** Kortet Samrådsguiden (kategori Förening) tillagt, eftersom ansökan till Invici länkar den.
- **v3.3 (2026-09-30):** Frågorna skrivs i Kents röst ("jag"/"mig") enligt Kents synpunkt på publicerad sida.
- **v3.2 (2026-09-30):** Efter Kents synpunkter på publicerad sida: Cursor flyttat till AI-raden, GitHub kvar under egen utveckling; kortet Ekonomikommunikation heter nu kategori "Forskningskalkyl"; kort grupperas under en rubrik per kategori och kort utan länk i egen grupp.
- **v3.1 (2026-09-29):** Vid bygget: fältet siffror fick värdet "anonymiserade"; arbetssatt får vara tomt när sekretess är "ej_publik". Balanskrav byggs som "ej_publik" (utan länk) tills sidans källrader är rättade.
- **v3 (2026-09-29):** Kent godkände. Arbetssätt-kortet länkar PRD-mallen. Reservläge: enkel noscript-lista.
- **v2 (2026-09-29):** Avsnitt 6 skrivet efter Kents svar på h.
- **v1 (2026-09-29):** Första utkast efter Kents beslut: SPEC ja, bara svenska, fyra frågor.
