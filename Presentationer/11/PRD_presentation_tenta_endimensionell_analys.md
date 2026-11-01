# PRD – Presentation 11: tentan i endimensionell analys, steg för steg

**Namn:** PRD_presentation_tenta_endimensionell_analys
**Plats:** `AI-teknik/Presentationer/11/PRD_presentation_tenta_endimensionell_analys.md`
**Skapad:** 2026-10-31
**Version:** 2 (läget 2026-10-31 inlagt; prototyp för uppgift 1 och preliminära svar)
**Status (2026-10-31):** utkast. Inget är beslutat utom det som står som BESLUTAT. Preliminära svar på alla nio uppgifter är beräknade med [kontroll_med_sympy.py](kontroll_med_sympy.py), men inte låsta med tidsstämpel, inte bekräftade av Kent och inte skrivna som lösningar. Guiden: [index.html](index.html).

## 0. Läget och nästa steg (läs först i nästa session)

**Gjort 2026-10-31:** tentan avläst (Tabell 1); PRD v1; svar beräknade med sympy/numerik (1: y = −2x + 11, (x−5)² − 6, −2, −1 < x < 1/3, 56, 1/8; 2: x = 2, 5, 10; 4: min 3 i x = 1, max 5 ln 4 − 3 i x = 4, asymptot x = 0; 5: 0, −2/3, 1/4; 6: h = 1, ℓ = 4, b = 3 dm, V = 12 dm³; 7: BD = √6; 8: ej deriverbar i x = kπ/2; 9: PQ min 15√3 cm); prototyp för uppgift 1 med fyra steg, självkontroll och poängräknare; Tabell 1 med svar ligger bakom ett stängt fält. Jämförelse med TATA41 (tentan i `10`): olika innehåll (LTH saknar integraler och serier, har geometri), ungefär jämförbar nivå, bedömning och inte mätning.

**Kent ska besluta/bekräfta:** (1) stämmer avläsningen av tentan (4h)? (2) varifrån kommer PDF:en och får frågorna återges (4e)? (3) fyra steg per uppgift, delsteg med egna kontrollfält, med "vanligt fel"? (4) ska AI-testet vara med (4d)? (5) vilken kursbok/kurssida (4i)? (6) ska jag låsa svaren med tidsstämpel nu?

**Att göra senare:** lås svaren med tidsstämpel; kontrollera om LTH publicerat ett lösningsförslag (titta inte innan svaren är låsta); lagra svar som hashvärden så de inte syns i källkoden; SPEC.md (4l); sedan uppgift 2 och framåt i samma form som uppgift 1; figurer och grafer som SVG (4, 6, 7, 8, 9).
**Typ:** guidad genomgång av en tenta. Inte en undersökning som `10`, och inte en presentation av Kents arbetssätt som `Nr1` och `Nr2`. Mappnamnet `11` är Kents val 2026-10-31 (följer `10`).
**Avsändare:** Kent Lundgren.

## 1. Bakgrund

I [Presentation 10](../10/README.md) prövade Kent hur generativ AI klarar envariabelanalys: Claude Code löste en öppen tenta (TATA41, Linköpings universitet) och Grok löste samma tenta och en värmeledningsuppgift mot ett facit som var låst i förväg. Det handlade om vad modellerna kan.

Den 2026-10-31 la Kent en ny tenta i mappen `11`: [endimensionell_analys_LTH_261030.pdf](endimensionell_analys_LTH_261030.pdf). Enligt sidhuvudet är den en tentamensskrivning vid Lunds tekniska högskola, matematik, "Endimensionell analys B1", skriven 2026-10-30 kl. 14.00–19.00, utan hjälpmedel. Filen är en skannad bild av två sidor utan textlager; texten nedan är avläst ur bilden och ska kontrolleras av Kent (se 4h).

Denna gång är frågan en annan: **inte "kan AI lösa tentan", utan "hur får man en läsare att kunna lösa den själv?"** Kent vill att presentationen visar frågorna, ger förslag på lösningar och guidar läsaren så att hen kan lösa uppgifterna på egen hand.

## 2. Syfte

- **Guida läsaren till egen lösning.** Varje uppgift ska ha en väg från "jag förstår inte frågan" till "jag klarade den", där läsaren själv bestämmer hur mycket hjälp hen tar.
- **Visa vilket kunnande varje uppgift prövar** (algebra, funktioner, gränsvärden, derivata, optimering, geometri), så att läsaren ser vad som behöver övas.
- **Visa hur en motiverad lösning ser ut.** Tentan kräver "ordentliga motiveringar" (se Tabell 1), och det är där många poäng går förlorade.
- **Knyta an till `10`:** samma ämne, men fokus på lärande, inte på modellens förmåga.

## 3. Tentan: vad den innehåller

**Tabell 1. Tentans uppgifter, avlästa ur PDF:en.** (Ordalydelsen skrivs in i `data.js` först när Kent bekräftat avläsningen.)

| Uppgift | Innehåll | Del | Poäng |
|---|---|---|---|
| 1 | Sex korta delfrågor, bara svar: a) linje genom (3, 5) parallell med 2x + y = 1; b) kvadratkomplettera x² − 10x + 19; c) förenkla ²log 6 − ²log 8 − ²log 3; d) lös 3 < 4/(x + 1); e) binomialkoefficienten (8 över 5); f) f′(√3) för f(x) = sin(arctan x) | Godkänd | 0–3 (0–3 rätt = 0 p, 4 rätt = 1 p, 5 rätt = 2 p, 6 rätt = 3 p) |
| 2 | Lös ekvationen x·\|x − 8\| = \|x + 5\| + 5 | Godkänd | 3 |
| 3 | a) definiera kontinuitet i punkten a; b) härled derivatan av g(x) = x⁵ | Godkänd | 3 |
| 4 | Skissera grafen till f(x) = 4/x − x + 5 ln x, x > 0, med lokala extrempunkter och asymptoter | Godkänd | 3 |
| 5 | Gränsvärden: a) x → ∞ av (5eˣ + x²)/(3ˣ − ln x); b) x → 0 av (x² + x + ln(1 + x))/(4x³ − 3x); c) x → 1 av (x² − 1)/(2x³ + x² − 3) | Godkänd | 3 |
| 6 | Maximera volymen V = ℓbh för en låda av ett rektangulärt papper 6 dm × 9 dm (figur med måtten h, b, ℓ) | Godkänd | 3 |
| 7 | Triangeln ABC: bisektrisen till ∠A skär BC i D. Beräkna BD då AB = 3, AC = 4, AD = 2 | Överbetyg | 3 |
| 8 | f(x) = arcsin(cos x) + arccos(sin x): ange alla x där f inte är deriverbar och skissera grafen | Överbetyg | 3 |
| 9 | Ett papper 20 cm × 30 cm viks så att hörnet A hamnar på sidan BC; bestäm minsta möjliga längd av vikningslinjen PQ (figur) | Överbetyg | 3 |

**Regler enligt tentan (att återge exakt, inte tolka):** inga hjälpmedel; varje uppgift ger som mest 3 poäng; lösningarna ska vara försedda med ordentliga motiveringar; för godkänt och betyg 3 krävs minst 9 poäng på godkäntdelen samt 0 poäng på högst en av de sex uppgifterna; 14 poäng på godkäntdelen ger 1 bonuspoäng på överbetygsdelen; betyg 4 kräver minst 3 poäng och betyg 5 minst 6 poäng på överbetygsdelen.

Notera: figurerna till uppgift 6 och 9 är en del av uppgiften och måste ritas om på sidan (SVG), inte bara beskrivas.

## 4. Frågor och beslut

Varje fråga har mitt gissade svar (förslag), så att Kent kan svara "ja" eller ändra.

**a. Huvudläsare — ÖPPEN. Förslag:** den som ska läsa eller läser envariabelanalys första gången (teknolog, eller gymnasieelev som siktar på teknisk högskola), plus lärare och föräldrar som vill se vad en tenta kräver. Texten svensk. Ska även en som inte läst kursen kunna följa? Förslag: ja, via en nivå som förklarar begrepp.

**b. Guidemodell — ÖPPEN. Förslag: en trappa med fyra steg per uppgift**, där läsaren öppnar ett steg i taget och aldrig ser nästa förrän hen väljer det:
1. *Vad frågas?* Frågan omskriven med begreppen förklarade (t.ex. vad en asymptot är). Ingen lösning.
2. *Ledtråd.* En mening om vilken metod som är relevant (t.ex. "förläng med konjugatet", "derivera och leta nollställen").
3. *Delsteg med kontrollpunkter.* Lösningen uppdelad i steg där läsaren kan kontrollera sitt mellansvar innan hen går vidare.
4. *Fullständig lösning med motivering.* Så som tentan kräver att den skrivs.
Därtill efter steg 4: *vanliga fel* och *liknande uppgift att pröva själv*. **Fråga:** ska även *självkontroll* finnas (läsaren skriver sitt svar i ett fält och får "stämmer / stämmer inte" utan att se lösningen)? Förslag: ja, för uppgifterna med kort svar (1a–f, 5a–c, 6, 9); gult `#FFF9C4` används då bara på inmatningsfältet.

**c. Vem tar fram lösningarna, och hur kontrolleras de — ÖPPEN, viktigast.** Ingen officiell lösning finns i mappen. Förslag: lösningarna är *förslag på lösningar* som kontrolleras innan något publiceras: (1) varje svar räknas fram med datorverktyg (t.ex. Python/sympy) mot en andra metod, (2) facit för kortsvarsuppgifterna låses i förväg som i test 2 i `10` (hashvärde), (3) Kent går igenom varje lösning och bekräftar den innan den får stå på sidan. Texten får aldrig säga att Kent själv räknat eller kontrollerat något han inte gjort (regel 13 i `kent-meta-regler-for-code`); den får säga att uppgifterna är kontrollerade mot angivna metoder. Ingen AI-märkning, men ett öppet metodavsnitt ("så här har lösningarna kontrollerats").

**d. Ska AI-testet från `10` vara med — ÖPPEN. Förslag: ja, men som en liten del på slutet, inte som huvudsak.** Tentan skrevs 2026-10-30, dagen före, vilket gör den till en uppgift som ingen modell kan ha sett i sin träning. Det är ett rent test av samma slag som i `10`. Alternativ: lämna det helt åt `10` och håll `11` till lärandet. Vill Kent ha testet: samma upplägg som test 1–3 (facit låst först, en körning, redovisat vad som inte visas). Notera att tentan säger "inga hjälpmedel"; AI-testet är då ett test av modellen, inte ett förslag till studenter.

**e. Rättigheter och publicering — Kents bedömning 2026-11-01: tentan är publik** (sonen fick ta den med sig hem, och teknologer övar på tidigare tentor). Stöd: LTH Matematik lägger ut gamla tentor och lösningsförslag för andra kurser (till exempel Analys 2, FMAA50, på maths.lu.se, hämtat 2026-11-01). Inte kontrollerat för den här tentan eller för FMAA05; frågan till institutionen (expedition@math.lth.se) är inte ställd. Ursprunglig frågeställning: Tentan är LTH:s och Matematiks dokument. Jag vet inte var Kent fått PDF:en och inte om LTH tillåter att tentafrågor återges publikt (i `10` gick LTH:s offentliga tentaarkiv inte att nå). **Förslag:** fråga Kent varifrån PDF:en kommer; kontrollera LTH:s och institutionens villkor (och om tentan redan är publicerad av institutionen); om tillstånd saknas, länka till institutionens egen sida i stället för att kopiera uppgifterna, och bygg guiden kring egna, likartade uppgifter. PDF:en ligger redan i en mapp som kan pushas till ett publikt repo; Kent committar själv, så flagga detta innan första commit.

**f. Form — ÖPPEN. Förslag:** en lång scrollsida i samma teknik som `10` (HTML/CSS/JS, data skild från motor, ingen automatisk uppspelning, läsbar på mobil, utskriftsvänlig). Översikt överst (Tabell 1 med länkar till varje uppgift), sedan ett kort per uppgift med trappan. Matematiken sätts med KaTeX från en CDN med exakt version. Grafer (uppgift 4 och 8) och figurer (6, 9, 7) ritas som SVG av `data.js`. Varje tabell och figur får nummer, namn och eget ankare; hänvisningar i löptext är klickbara.

**g. Ordning och nivåer — ÖPPEN. Förslag:** följ tentans ordning (1–9), med en märkning per uppgift av vilken del den tillhör (godkänd/överbetyg) och en rekommenderad väg: *börja med uppgift 1–3 för att nå godkänt, därefter 4–6, och 7–9 om du siktar högre.* Poängreglerna återges exakt från tentan.

**h. Kontroll av avläsningen — ÖPPEN.** Jag läste tentan ur en skannad bild. Innan något byggs ska Kent bekräfta Tabell 1, särskilt 1c (logaritm med bas 2), 1d, 5a–c, 8 och måtten i uppgift 6 och 9. Fel i en siffra gör hela lösningen fel.

**i-1. Kursbok — läst i original (2026-11-01).** LTH:s kursplan för Endimensionell analys (FMAA05, spår B, läsåret 2019/20; samma kurs finns som FMAA01, spår A) anger som kurslitteratur Månsson, J. och Nordbeck, P.: *Endimensionell analys*, Studentlitteratur, 2011, ISBN 9789144056104, samt *Övningar i endimensionell analys*, Studentlitteratur, 2018, ISBN 9789144127187, och Diehl, S.: *Inledande geometri för högskolestudier*, Studentlitteratur, 2015, kapitel P, T och A ([kursplanen, PDF](https://kurser.lth.se/kursplaner/19_20/FMAA05.pdf), hämtad 2026-11-01). Kursplanen för 2026/27 hittades inte; kontrollera mot LTH:s aktuella kursplan innan boken anges som gällande. Vilket spår "B1" motsvarar är inte kontrollerat.

**i. Källor — UTKAST.** Teori (kontinuitet, derivatans definition, extrempunkter, gränsvärden, logaritmlagar) ska hänvisa till en kursbok eller institutionens kursmaterial som läses i original. **Vilken bok/kurssida LTH använder vet jag inte; Kent anger.** Harvardstil, alfabetisk ordning, hämtdatum för webbkällor, kursiv relevansförklaring, länkkontroll före leverans. Ingen källa som inte läst i original.

**j. Röst och ton.** Kent är avsändare. Ramtexten i hans röst (granskad mot `kent-skrivstil` och `humanizer_ton`). Lösningstexterna är matematiskt sakliga och riktar sig direkt till läsaren ("pröva att…", "titta på…"). Förklara uttryck vid första användning (asymptot, kvadratkomplettering, bisektris, derivata, kontinuitet m.fl.), i löptext och vid hovring/fokus/tryck.

**k. Mappnamn och plats — BESLUTAT ✓ (Kent 2026-10-31): `11`.** Notera mot `10`:s öppna fråga om en egen mapp `Undersokningar/`: `11` är en guide, inte en undersökning, så den räknas inte som den andra undersökningen. Påminn ändå Kent vid nästa undersökning. Adressen på Pages blir `https://kentlundgren.github.io/AI-teknik/Presentationer/11/` när den publicerats.

**l. Behövs ett SPEC.md-steg härifrån?** **Ja, när 4b, 4c, 4e och 4f är beslutade.** Då finns acceptanskriterier värda att skriva: datastruktur per uppgift (steg 1–4), regler för självkontroll, hur facit låses, figurer och grafer, mobilbredder, tillgänglighet, vad som aldrig får med.

## 5. Omfattning

**Ingår (förslag):**
- En publik statisk sida på `.../AI-teknik/Presentationer/11/`.
- Översikt över tentan, ett guidekort per uppgift (fyra steg), regler för poäng och betyg återgivna exakt.
- Kontrollerade förslag på lösningar med motiveringar, kontrollmetod redovisad.
- Källförteckning, README med Live-länk och `## Repo` sist, "uppdaterad den [datum]" i sidhuvudet (underhållsregeln i `Presentationer/CLAUDE.md`).

**Ingår inte:**
- Påståenden om hur LTH rättar eller poängsätter utöver det tentan själv anger.
- Uppgifter om verkliga personer (studenter, tentavakter, lärare).
- Löften om att läsaren får ett visst betyg.
- Lösningar som inte är kontrollerade.

## 6. Leveranser

- [ ] Kent bekräftar avläsningen av tentan (4h)
- [ ] Beslut om rättigheter och publicering (4e)
- [ ] Beslut om guidemodell och självkontroll (4b), lösningsprocess (4c) och AI-del (4d)
- [ ] Källor valda, lästa i original och länkkontrollerade (4i)
- [ ] SPEC.md skriven och godkänd (4l)
- [ ] Facit framtaget och låst, lösningarna kontrollerade och bekräftade av Kent
- [ ] Fräscha-ögon-genomläsning av PRD:en innan den kallas klar
- [ ] Bygge, README med Live-länk, versionsdatum i sidhuvudet

## 7. Nästa steg

1. Kent svarar på 4e (var kommer tentan ifrån, får frågorna återges?), 4h (stämmer avläsningen?), 4b, 4c och 4d.
2. Därefter SPEC.md (4l), och först då framtagning av lösningar och facit.

## Ändringslogg

- **v7 (2026-11-01):** sidan publicerad på GitHub Pages; Kents bedömning att tentan är publik inlagd i 4e; rutan "Arbetsversion" ersatt med en neutral läsarnotering.
- **v6 (2026-11-01):** sidan byggd som `index.html` med `style.css`, `data.js`, `figurer.js` och `script.js` (motor skild från data). Hörnparet (`{ } GitHub`, `</> teknik` med modal), `#`-ankare på rubriker, förklaringar vid hovring, fokus och tryck, numrerade figurer och tabeller, källistan, brödsmulor mellan guiden, PRD:n och läsvyerna av md-filerna, README. Svaren ligger i klartext i `data.js` (hashning är ett öppet val). Bilden för delning (Open Graph) är inte gjord. De tre `prototyp_*.html` är borttagna och ersatta av `index.html`.
- **v5 (2026-11-01):** Kent bekräftade avläsningen av uppgift 1 och 2. Ny prototyp med alla nio uppgifter: `prototyp_alla_uppgifter.html` (gemensam motor, data i ett block, kontrollfält för mellansvar, checklistor för definitions-, bevis- och skissuppgifter, figurer som SVG, svårighetstabell). Kontrollen utökad till 21 kontroller inklusive mellanled ([kontroll_oberoende.py](kontroll_oberoende.py)). Nya filer: [META_svara_pa_tentauppgifter.md](META_svara_pa_tentauppgifter.md) (vad som är svårt och kan gå fel) och [JAMFORELSE_tentor_LTH_261030_och_LiU_260819.md](JAMFORELSE_tentor_LTH_261030_och_LiU_260819.md). Svårighetsbedömningen i sidan är Claudes och anges som sådan; reglerna om AI-märkning i `CLAUDE.md` bör vägas mot detta före publicering. "Vanligt fel"-rutorna är min bedömning och bör rubriceras som typiska fallgropar före publicering.
- **v4 (2026-11-01):** `prototyp_uppgift2.html` tillagd: guide för uppgift 2 med samma fyra steg, plus kontrollfält för mellansvar i varje fall, Figur 1 (tallinje med tre fall) och Figur 2 (graferna med de tre skärningspunkterna), och ett förslag på hur lösningen kan skrivas med motivering. Provkörd i förhandsvisningen. Uppgift 1 och 2 delar ännu motor genom kopiering; motor och data ska skiljas i bygget (SPEC).
- **v3 (2026-11-01):** tentan kommer från Kents son (fick med den hem efter skrivningen); rättigheterna i 4e är fortfarande inte klarlagda. Tidsstämpellåsning av svar utgår (svaren är tidsoberoende; låsning behövs bara om en modells förmåga testas mot ett facit). I stället: [kontroll_oberoende.py](kontroll_oberoende.py) prövar alla svar med brute force och insättning, 15 av 15 kontroller OK. Kursbok läst i original (4i-1). Prototypen markerar rätt svar i en grön ruta.
- **v2 (2026-10-31):** nytt avsnitt 0 (läget och nästa steg); preliminära svar och kontrollskript; prototyp för uppgift 1.
- **v1 (2026-10-31):** första utkast. Tentan avläst ur den skannade PDF:en (Tabell 1), syfte, guidemodell i fyra steg, tolv frågor med gissade svar, omfattning och leveranser.
