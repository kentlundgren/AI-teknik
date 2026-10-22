# SPEC – Presentation 10: "2026 är året det blev normalt och moget"

**Hör till:** [PRD_presentation_generation_2005.md](PRD_presentation_generation_2005.md) (v14) och [ARTIKEL_utkast_1_2026-10-22.md](ARTIKEL_utkast_1_2026-10-22.md)
**Skapad:** 2026-10-22
**Version:** 1.2 (Diagram 1 och Tabell 3 tillagda 2026-10-22 på Kents begäran; diagrammet ombyggt samma dag till tidsaxel med riktiga datum; grundversionen godkänd samma dag)
**Status:** **Godkänd av Kent 2026-10-22.** Första versionen byggd lokalt samma dag. Ändringar görs som ny version.
**Syfte:** Låst byggspecifikation. PRD:n säger *vad och varför*, den här filen säger *exakt hur* och när det är klart.
**Avsändare:** Kent Lundgren.

## 1. Beslut som gäller (Kents val 2026-10-22, "använd mina gissade svar")

| Val | Beslut |
|---|---|
| Mappnamn | Behåll `10`. Adress: `https://kentlundgren.github.io/AI-teknik/Presentationer/10/` |
| SPEC först | Ja, den här filen. |
| Form | **En lång sida som man scrollar** (reportage), inte Nr1:s självspelande kort. Läsaren styr tempot. |
| Videor | Ligger kvar i repot och bäddas in med `preload="none"`. Ingen automatisk uppspelning. |

## 2. Läsare, språk och röst

- Läsare: studenter, lärare, studievägledare, högskolepersonal, ingenjörer och föräldrar. Inga förkunskaper om AI krävs.
- **Enbart svenska.** Ingen språkväxlare.
- **Kents röst, första person** ("jag", "mig") i all text som talar för Kent. Texten bygger på den publicerade artikeln ([bloggen, 2026-10-22](https://klel.wordpress.com/2026/10/22/2026-ar-aret-det-blev-normalt-och-moget/)), vars påståenden Kent redan publicerat. Nya påståenden utöver artikeln får bara vara sådant Kent bekräftat eller rent beskrivande (till exempel bildtexter).
- Ingen AI-märkning av sidan. I stället en rad: *"Uppgifterna är hämtade ur källorna längst ned och är inte kvalitetssäkrade. Kontrollera mot källan innan något återges."* Claude Code och Grok får nämnas som de som löste testuppgifterna, eftersom det är ämnet.
- Ingen i Kents närhet nämns vid namn. Formuleringen är "någon i min närhet".

## 3. Struktur (en sida, `index.html`)

1. **Sidhuvud:** rubriken, en rad om vad sidan är, `version 10 per den [DATUM]` (format `22 okt 2026`, uppdateras vid varje ändring enligt regeln i `Presentationer/CLAUDE.md`), länk till bloggartikeln.
2. **Tesen** ("Vad menar jag med normalt och moget?").
3. **Fem belägg** med **Tabell 1** (belagt, delvis belagt, inte belagt). Varje rad kan fällas ut och visar källan och vad den säger.
4. **Vem betalar?** Fyra spår: studenten, familjen, lärosätet, leverantören. Under varje: vad som är belagt, vad som är hypotes.
4b. **Diagram 1 och Tabell 3** (under "Är modellerna verkligen tillräckligt bra?"): ett diagram över resultat på sex prov i matematik och naturvetenskap, 2022–2026, ritat som SVG av `data.js` (fält `diagram`). **Tidsaxel med riktiga datum:** varje kalenderår är ett band som börjar den 1 januari (märkt "1 jan", med kvartalsstreck apr, jul och okt). Punkten ligger på källans datum; där bara månaden eller året är känt visas en sträng över månaden eller året. Tiden efter hämtdatumet (22 okt 2026) är grå. Varje punkt har en källa, och Tabell 3 visar datum, värde, modell, källa och anmärkning. Streckad linje betyder mer än två år mellan punkter. Diagrammet kan rullas i sidled under 640 px. Tabell 3 fick nummer 3 för att hålla Tabell 1 och 2 stabila.
5. **Testerna:** Test 1 (tenta), Test 2 (värmeledning, facit låst), Test 3 (samma uppgifter till Grok). **Tabell 2** med resultaten. Media enligt avsnitt 5.
6. **Vad testerna inte visar.**
7. **Vad tror jag nu?** Slutar med den öppna frågan, inte en sammanfattning.
8. **Källor** (Harvardstil, alfabetisk, med hämtdatum, kursiv relevansparentes, klickbara adresser).
9. **Sidfot:** länk till artikeln, GitHub-mappen, och kontakt via LinkedIn (`https://www.linkedin.com/in/kentlundgren/`).

## 4. Data och motor

- Filer: `index.html`, `style.css`, `script.js` (motor), `data.js` (innehåll). Inga externa beroenden.
- **Brödtexten ligger som statisk HTML** så att sidan går att läsa utan JavaScript. JavaScript används för: Tabell 1 och Tabell 2 från `data.js`, utfällbara rader, förklaringar vid hovring/fokus/tryck, hänvisningar till tabeller och bilder som länkar, och källistan.
- All text från `data.js` sätts in med `textContent`. Reservläge utan JavaScript: ett `<noscript>`-block med en länk till bloggartikeln och GitHub-mappen.
- **Fält per belägg i `data.js`:** `id`, `nr`, `belagg` (max 100 tecken), `status` (`belagt` | `delvis` | `inte_belagt`), `kalla_id` (lista), `forklaring` (max 280 tecken, vad källan säger).
- **Fält per testkörning:** `id`, `test`, `uppgift`, `modell`, `verktyg`, `lage`, `resultat` (text), `avvikelse` (text), `godkant` (`ja` | `nej` | `ej_bedomt`), `forbehall` (lista med korta texter), `lank_resultat` (https-adress till `.md` på GitHub, blob-länk).
- **Fält per mediafil:** `id`, `typ` (`bild` | `video`), `nr`, `namn`, `fil` (relativ sökväg), `alt`/`beskrivning` (max 300 tecken), `bredd`, `hojd`, `poster` (för video).

## 5. Media (från mappen `Grok/Bilder`, 2026-10-22)

| Nr | Namn (förslag) | Fil | Storlek |
|---|---|---|---|
| Bild 1 | Prompt A i Groks app (läget Auto) | `Grok_svarar_pa_forsta_fragan.jpg` | 83 kB |
| Bild 2 | Groks svar på tentan | `Grok_svarar_pa_forsta_fragan_svaret.jpg` (lång bild, 771×3386) | 533 kB |
| Bild 3 | Prompt B i Groks app (läget Build, Beta) | `Grok_Build_svarar_pa_andra_fragan.jpg` | 102 kB |
| Bild 4 | Groks svar på värmeledningen | `Grok_svarar_pa_andra_fragan_svaret.jpg` | 230 kB |
| Video 1 | Slutet på hur Grok löser tentan (de sista 15 s) | `Grok_loser_forsta_uppgiften.mp4` | 1,3 MB |
| Video 2 | Grok löser värmeledningen (3 min, arbetstid 6 min 44 s i appen) | `Grok_loser_andra_uppgiften.mp4` | 12 MB |

- Varje bild och video har **nummer och namn ovanför** ("Bild 3. …"), eget `#`-ankare och en kort textbeskrivning (`alt` eller synlig bildtext). Hänvisningar i löptext är klickbara länkar.
- **Video:** `<video controls playsinline muted preload="none" poster="…">`, ingen `autoplay`. Posterbild skapas av en stillbild ur videon (under 100 kB, i en egen mapp `media/`). Fallback-text: "Din webbläsare kan inte spela videon" med länk till filen. Ljudspåret är tomt, så ingen textning krävs. Beskrivningen återger vad som syns, inklusive att arbetsloggen visar att Grok kontrollerade mot den analytiska serien.
- **Den långa bilden (Bild 2)** visas i en rullbar ruta med fast höjd, plus länk till svaret som text ([grok_svar_A_oforandrat.md](test3_grok/grok_svar_A_oforandrat.md)).
- **Undantag från regeln om bilder under 200 kB** (från Nr2): bildfilerna ovan är redan Kents och ligger kvar. Bild 2 (533 kB) och Video 2 laddas först när läsaren når dem (`loading="lazy"`, `preload="none"`).
- Tentan och lösningsskissen (Linköpings universitet) **kopieras inte** till sidan. De länkas.

## 6. Byggregler som gäller (ur `kent-bygg-sidor` och `kent-referens-skill`)

- **Regel 6:** GitHub-hörna nedre vänster (`https://github.com/kentlundgren/AI-teknik/tree/main/Presentationer/10`) och teknik-modal nedre höger, tillsammans, kopierade från `Presentationer/Nr1/`. Modalens kort (Tekniken och Metoden) beskriver bara sådant som är sant: statisk sida, ingen server, data skild från motor, vilka test som gjorts och hur facit låstes.
- **Regel 7:** varje H2 och H3 har ett stabilt `id` och ett `#`-ankare vid hovring. Varje källa har eget id (`#ref-...`). Ankar-id:n ändras inte efter publicering.
- **Regel 12:** gult (`#FFF9C4`) används bara på inmatningsfält. Sidan har inga. Status markeras med grönt (belagt), orange (delvis belagt) och rött (inte belagt), alltid också med ord.
- **Regel 13:** förkortningar och facktermer förklaras vid hovring, fokus och tryck, och helst en kort synlig rad: AI-agent, harness, GPQA Diamond, FrontierMath Tier 4, Crank–Nicolson, Richardson-extrapolation, hashvärde (SHA-256), sympy, UKÄ, HEPI, Auto/Build. Förklaringen hämtas ur källan; saknas den står det att den saknas. (Definitionen av *harness* är från leverantörsbloggar, och det ska stå.)
- **Regel 14:** Tabell 1 och Tabell 2, samt Bild och Video, har nummer, namn och eget ankare. Hänvisningar ("Se Tabell 2") är klickbara länkar, även text som skapas av JavaScript.
- **Regel 15:** första omnämnandet av varje källa är en länk (författare-år eller namn), inte bara posten i listan. PDF-sidor länkas med `#page=N` när sida anges.
- **Regel 16:** länkar till `.md`-filer går till GitHub-blob (läsbar vy), aldrig till rå `.md`. Länkar till HTML går till Pages.
- **Brödsmulor (regel 17):** inte aktuellt, sidan är ett enda HTML-dokument.
- **Regel 9:** påminn Kent om delningsbild (`og-bild.jpg`, 1200×630, JPEG, under 300 kB) innan länken delas. Bilden och texten väljs för det här projektet. Förslag att diskutera: Tabell 2 som bild, eller skärmbilden från Test 2.

## 7. Tekniska krav

- Fungerar från 360 px bredd utan sidledes scroll; läsbart upp till 1200 px.
- Kontrast minst WCAG AA; alla knappar nåbara med tangentbord; synlig fokusmarkering; förklaringar går att öppna med tangentbord och tryck, inte bara med musen.
- `prefers-reduced-motion` respekteras. Ingen animation som startar av sig själv.
- Externa länkar: `target="_blank" rel="noopener noreferrer"`.
- Utskrift: alla utfällbara rader utfällda, videor ersätts av posterbild och textbeskrivning, knappar dolda.
- Laddtid: texten och Tabell 1 syns på under 1 sekund på vanlig uppkoppling. Video 2 och Bild 2 påverkar inte första laddningen.
- Ljust utseende räcker; mörkt läge är valfritt.
- `README.md` i mappen direkt under rubriken: `- **Live:** [https://kentlundgren.github.io/AI-teknik/Presentationer/10/](https://kentlundgren.github.io/AI-teknik/Presentationer/10/)`, plus lokal sökväg (regel för README).

## 8. Sanning och sekretess (får aldrig finnas på sidan)

- Namn eller födelsedatum på någon i Kents närhet.
- Tentan eller lösningsskissen i sin helhet. Bara länkar och korta egna sammanfattningar.
- Påståenden om vad Kent gjort som han inte bekräftat. Kent har bekräftat: Cursor är hans arbetsverktyg, han körde Prompt A och B i Grok, Grok Build kördes i en tom mapp.
- Uppgiften om Gemini för en tredjedel av priset får bara stå som **obekräftad** ("Jag har inte kunnat bekräfta uppgiften").
- Siffror från Menlo Ventures får inte presenteras som gällande studenter. Siffrorna för fusk (237 → 851) från TV4 används inte, eftersom de strider mot Ingenjörens.

## 9. Acceptanslista (klart när allt detta stämmer)

- [x] Sidan öppnas utan fel i konsolen, på mobil (360 px) och dator. *(Testat 2026-10-22 på 375 px och 1024 px: inga konsolfel, ingen sidledes scroll.)*
- [ ] Brödtexten går att läsa med JavaScript avstängt. *(Texten ligger som statisk HTML, men det är inte prövat med JavaScript avstängt.)*
- [x] Tabell 1 och Tabell 2 byggs av `data.js`; varje rad har alla fält och håller teckengränserna (kontrolleras med script). *(Tabell 1: alla fem rader inom gränserna, kontrollerat med script.)*
- [x] Varje källa i listan: första omnämnandet i löptext är en länk, adressen är klickbar och svarar (200), och länken stöder påståendet. *(Alla 19 källor har sin adress som länk i löptexten, och alla 32 externa adresser svarar 200.)*
- [x] Alla sex mediafiler visas eller spelas; videorna startar inte av sig själva; Video 2 laddas först vid uppspelning. *(Bilderna och videornas stillbilder visas, `preload="none"`, ingen `autoplay`. Själva uppspelningen är inte testad.)*
- [x] Alla hänvisningar till tabeller, bilder och videor är länkar.
- [ ] Förklaringar går att öppna med mus, tangentbord och tryck. *(Klick med mus testat. Tangentbord och tryck är implementerade men inte testade.)*
- [x] GitHub-hörnan och teknik-modalen finns, och modalen innehåller bara sanna uppgifter. *(Öppnas, stängs med kryss och Escape, fokus återställs.)*
- [x] Inget ur avsnitt 8 finns på sidan (sökning efter namn, födelsedatum, hela tentan). *(Sökt efter namn och födelsedatum. Tentan och lösningsskissen är bara länkade.)*
- [ ] Texten är i Kents röst och stämmer med den publicerade artikeln, utom där den medvetet skiljer sig.
- [x] `version 10 per den [DATUM]` visas i sidhuvudet.
- [ ] Utskrift ger läsbart resultat.
- [ ] README med Live-länk finns. Påminnelse om delningsbild är gjord.
- [ ] Kent har godkänt innan något publiceras. Kent committar och pushar själv.

*Obockade punkter är inte klara: Kents genomläsning av rösten, utskrift, JavaScript avstängt, tangentbord och tryck, README-påminnelsen om delningsbild samt Kents godkännande före publicering.*

## 10. Öppna punkter (att besluta innan eller under bygget)

1. **Personatidslinjen 2021–2026** från PRD:n ingår inte i den här versionen, eftersom artikeln inte har den. Ska den komma med senare?
2. **Delningsbild:** vilken bild?
3. **Bloggartikeln:** de fem trasiga relativa länkarna ska bytas till GitHub-adresser (se PRD v13) och en mening om Groks kontroll mot den analytiska serien läggas till (se PRD v14).
4. **Grok Builds modellnamn** är okänt. Texten säger det.
5. **LinkedIn-versionen** av artikeln är ett separat spår.

## 11. SPEC.md-checkpoint

Den här filen är SPEC-steget som PRD:n frågade efter. Nästa steg efter Kents godkännande: bygga en första version lokalt, förhandsvisa i webbläsaren (skärmdump och klick igenom), och först därefter be Kent godkänna publicering.
