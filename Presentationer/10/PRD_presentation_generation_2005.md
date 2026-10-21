# PRD – Presentation 10: Generation 2005 och generativ AI

**Namn:** PRD_presentation_generation_2005
**Plats:** `AI-teknik/Presentationer/10/PRD_presentation_generation_2005.md`
**Skapad:** 2026-10-21
**Version:** 14 (fyra källgenomgångar gjorda; artikel som första leverans; Test 1–3 genomförda; artikeln publicerad på bloggen 2026-10-22)
**Status:** **Utkast. Inget är byggt, ingen SPEC.md är skriven.** Alla beslut i avsnitt 4 är öppna tills Kent bekräftat dem.
**Typ:** Grund-PRD för en ny presentation. Mappen heter `10` (Kents val 2026-10-21). Övriga presentationer heter `Nr1`–`Nr3`; om mappnamnet ska följa det mönstret är en öppen fråga (4i).
**Avsändare:** Kent Lundgren.

## 1. Bakgrund

Den som är född 2005 började gymnasiet hösten 2021 och tog studenten våren 2024. Hen var alltså 17 år när ChatGPT släpptes i november 2022 (andra året på gymnasiet, enligt tidslinjen nedan), arbetade ungefär 2024–2026 och börjar på teknisk högskola (exempelvis LTH) hösten 2026.

Kents tes: **2026 är första året då generativ AI är så kraftfull att ingen undervisning kan bortse från den**, och en person född 2005 kan därför vara den första generationen som kan ha full nytta av generativ AI: lite under gymnasiet, med full kraft vid högskolestart 2026.

Presentationen skrivs om **vem som helst född 2005** med den banan (persona, se 4a). Den utgår inte från en enskild person.

Tidslinjen för personan, härledd av födelseåret (verifieras mot skolans regler i SPEC):

| Period | Skede |
|---|---|
| 2012–2021 | Grundskola (förskoleklass–åk 9) |
| ht 2021 – vt 2024 | Gymnasium; ChatGPT släpps under åk 2 (nov 2022) |
| 2024–2026 | Arbete (cirka två år) |
| ht 2026 | Start på teknisk högskola |

**Det som väckte frågan (Kent, 2026-10-21):** en nybliven student vid LTH berättade att nyantagna hösten 2026 kunde köpa ett Gemini-abonnemang för cirka en tredjedel av priset (cirka 66 kr i stället för 200 kr per månad). Det fick Kent att undra om detta är första året "nya AI" är fullt accepterad som en normal del av studierna. Uppgiften om 66 kr är **inte bekräftad** i någon källa; se [FYND_kallor_2026-10-21.md](FYND_kallor_2026-10-21.md).

**Första källgenomgången (2026-10-21):** intuitionen är riktig i sak men daterad för sent. Lunds universitet gav studenter tillgång till Gemini och Copilot Chat via studentkonto redan före hösten 2026, och lärosätena har under 2025 gått från tolerans till att själva tillhandahålla verktyg och ändra examinationen. Samtidigt är regler kursvisa, KTH kallar användningen frivillig och LU skriver att AI aldrig ska ersätta eget lärande. Därför bör tesen formuleras mindre kategoriskt (se 4c).

## 2. Syfte

- **Låta läsaren pröva tesen**, inte bara läsa den: kan det vara så att 2005-kullen är första generationen med full nytta, och att 2026 är brytpunkten för undervisning?
- **Visa vad generativ AI kunde 2021–2024 respektive 2026**, med belägg, så att läsaren kan jämföra själv.
- **Peka på vad det betyder för undervisning**: vad som blir svårt att bortse från, och vad som fortfarande kräver att studenten själv kan sakerna.
- **Bjuda in till reflektion och motargument**, inte leverera ett facit.

## 3. Omfattning

**Ingår (förslag):**
- En publik statisk sida på `.../AI-teknik/Presentationer/10/`, HTML/CSS/JS, data skild från motor (som Nr1/Nr2).
- Tidslinje eller jämförelse över personans fyra skeden (gymnasiet, arbete, högskolestart).
- Ett avsnitt "Håller tesen?" med argument för och emot.
- Källförteckning (Harvardstil, verifierade länkar) med fokus på generativ AI och undervisning.
- README med Live Page-länk, versionsdatum i sidhuvudet (underhållsregeln i `Presentationer/CLAUDE.md`).

**Ingår inte:**
- Uppgifter om någon verklig, namngiven person (se 4a).
- Påhittade personliga upplevelser presenterade som fakta. Allt berättande om personan märks som exempel.
- Påståenden om vad enskilda skolor eller LTH beslutat utan att det är kontrollerat i originalkällan.
- Råd om val av utbildning eller studieteknik som om det vore forskning.

## 4. Frågor och beslut

**a. Persona eller verklig person — FÖRSLAG: persona.** Tanken väcktes av en närstående som börjar på högskola 2026, men texten ska gälla vem som helst född 2005. **BESLUTAT ✓ (2026-10-21, Kent): personen nämns inte vid namn och födelsedatum anges inte.** Födelseåret ("född 2005") räcker.

**b. Läsare — UTKAST (Kents beskrivning 2026-10-21).** Någon som vill se och reflektera över om 2005-kullen kan vara första generationen med full nytta av generativ AI, och om 2026 är året då undervisningen inte kan bortse från den. Troliga läsare: studenter, föräldrar, lärare, studievägledare, högskolepersonal. Enbart svenska. **Öppen: vilka av dessa är huvudläsare?**

**c. Tesen och dess svaga punkter.** Tesen bör presenteras som en *hypotes som prövas*. Motargument som sidan måste bemöta eller åtminstone nämna:
- Varför 2005 och inte 2004 eller 2006? Kullgränser är godtyckliga; det är nyttan vid ett givet år som räknas, inte födelseåret.
- "Kraftfull nog 2026" är ett påstående om verktygens kapacitet som måste styrkas med källa (modellers prestanda, studier), inte bara upplevas.
- Nytta är inte detsamma som lärande: AI kan hjälpa till att klara uppgifter utan att man lär sig (se forskningsläget, 4g).
- Tillgång och kostnad: full nytta kräver tillgång till bra verktyg.
**Öppen: vill Kent att motargumenten får ett eget avsnitt (förslag) eller vävs in?**
**Ny information 2026-10-21:** källgenomgången visar att "2026 är första året" inte kan styrkas. Verktyg via lärosätet fanns redan 2025 vid LU, och Google erbjöd svenska studenter gratis AI Pro hösten 2025. Förslag på hållbarare formulering: *"2025–2026 är brytpunkten då lärosäten går från att tolerera till att själva tillhandahålla och reglera generativ AI."* **Öppen: vill Kent behålla 2026 som tes eller ändra till brytpunkten 2025–2026?**
**Kents hypotes 2026-10-21 ("envis"):** 2026 är första året då en majoritet av studenterna har abonnemang på någon AI-modell, och då det "måste" finnas. **Andra källgenomgången (FYND avsnitt 9):** *användningen* stöder hypotesen starkt (Internetstiftelsen: över 6 av 10 svenskar 2026 mot 4 av 10 2025, 9 av 10 bland födda på 2000-talet; HEPI: 95 procent av brittiska studenter), men **ingen källa visar att en majoritet av studenterna betalar**, och gratisversioner samt lärosätesverktyg gör att "måste ha abonnemang" inte är belagt. Förslag: ställ i stället frågan *"vem betalar för studentens AI?"*.
**Tredje omgången (FYND avsnitt 10):** Kents drivkraft är att 2026 är första året då samhälle, lärosäte och student delar på kostnaden och då lärosätena ser poängen i stället för fusk. Det som är belagt: (1) Google lanserade den 19 augusti 2026 studentpaket, bland annat ett paket med AI Pro och YouTube Premium för "upp till 70 procent rabatt", vilket troligen är ursprunget till "en tredjedel"; (2) LU-studenter har redan ett Google-konto och kan använda Gemini och Copilot Chat via det; (3) lärosätena skärper samtidigt examinationen. **Inte belagt:** att staten eller LU betalar 2/3, att "fusk-problemet är över", och när/varför Gemini kom in på LU. Hypotesen att Google står för rabatten (kampanj) är bättre belagd än att samhället gör det.

**d. Form — ÖPPEN, spånas.** Alternativ:
- **A. Tidslinje i fyra skeden** (som Nr1:s årskort): vad AI kunde då, hur personan kunde använda det, vad undervisningen sa.
- **B. Före/efter-jämförelse:** samma uppgift (t.ex. en inlämning eller en tentafråga) löst med verktygen 2022 respektive 2026, med belägg.
- **C. Tesen som fråga med röstning/reflektion:** besökaren tar ställning (instämmer/tvekar/invänder) och får se argument för och emot.
- **D. Kombination:** A som ryggrad, B som fördjupning i ett skede, C som avslutning.
Förslag att börja diskutera från: **D**, men börja enklast (A + avsnittet "Håller tesen?").

**Utvecklat formförslag (v5, 2026-10-21, att diskutera):** efter tre källgenomgångar föreslås en sida med fem delar, i denna ordning. Principen är att varje påstående har en länkad källa och att tesen prövas, inte utropas.
1. **Ingång: tesen som fråga.** "Är hösten 2026 första gången nästan alla studenter har en stark AI vid sin sida?" Tre svarsknappar (ja / delvis / nej) som leder vidare till bevisen. Ingen röstning sparas.
2. **Tidslinje 2021–2026 i fyra skeden** (som Nr1:s årskort), där varje kort har tre rader: *vad verktygen kunde* (belagt), *vad skolan sa* (belagt), *vad en person född 2005 realistiskt kunde göra* (märks som exempel). Skeden: gymnasiet 2021–2024, arbetsåren 2024–2026, hösten 2025 (brytpunkt: gratisår och lärosätesverktyg), hösten 2026 (högskolestart).
3. **"Vem betalar?" som huvudgrepp.** En enkel bild med fyra spår: studenten själv, familjen, lärosätet (Workspace/Copilot via studentkontot) och leverantören (kampanjpris och gratisår). Under varje spår: vad som är belagt, vad som är hypotes. Detta är presentationens egen idé och bygger på Kents fråga om vem som delar på kostnaden.
4. **"Håller tesen?"**: tre belagda argument för (användningen exploderade 2025–2026, lärosäten tillhandahåller verktyg, examinationen anpassas) mot tre belagda argument emot (ingen visad betalande majoritet, kursvisa regler och "aldrig ersätta eget lärande", AI-fusk ökar), samt "vad vi inte vet".
5. **Källor och metod:** alfabetisk källförteckning, hämtdatum, och en ruta "Så här har siffrorna kontrollerats" som säger att uppgifterna är hämtade ur angivna källor och inte kvalitetssäkrade.
**Tekniskt:** statisk sida (HTML/CSS/JS), data skild från motor, ingen automatisk uppspelning, läsbar på mobil, utskriftsvänlig. Varje tabell och diagram får nummer, namn och eget ankare enligt Kents byggregler.
**Öppna val i formen:** (i) Ska "vem betalar" vara själva huvudgreppet (förslag) eller ett avsnitt bland andra? (ii) Ska tesen-ingången (del 1) vara med, eller räcker tidslinjen? (iii) Ska personan få en kort berättande vinjett per skede, tydligt märkt som exempel? (iv) Vilket tonläge: reflekterande och öppen (förslag) eller argumenterande för Kents tes?

**e. Vad ska visas per skede (gymnasiet / arbete / högskolestart).** Fyra delar per skede: (1) vilka generativa verktyg fanns, (2) vad en person födda 2005 realistiskt kunde göra med dem, (3) vad skolan/högskolan sa eller gjorde (policy, riktlinjer), (4) vad som var begränsningen. **Öppen: vilka verktyg och modeller ska nämnas vid namn?** Varje modellpåstående ("kunde skriva kod", "klarade tentor") måste ha belägg.

**f. "Nya AI" — BESLUTAT ✓ (2026-10-21):** avser kraftfull generativ AI (text, kod, bild m.m.) som den är från 2026. Definieras i sidan vid första användning, i enlighet med regeln att förklara uttryck.

**g. Källor — UTKAST.** Kent vill ha bra källor om generativ AI och undervisning. Områden att söka, **alla ska läsas i originaltext och länkkontrolleras innan de används** (inga referenser är verifierade än):
- Myndigheter och internationella organ: Skolverket, Universitetskanslersämbetet (UKÄ), UNESCO, OECD, EU-kommissionen.
- Lärosätenas egna riktlinjer: LTH/Lunds universitet (policy för AI i undervisning och examination), samt gärna ett par jämförbara tekniska högskolor.
- Forskning: översiktsartiklar och studier om generativ AI och lärande (nytta, risker, fusk, lärandeeffekter), svenska och internationella.
- Primärkällor om verktygens kapacitet: leverantörernas egna tekniska rapporter och oberoende utvärderingar.
- Rapporter om hur studenter faktiskt använder verktygen (enkäter).
Krav: Harvardstil, alfabetisk ordning, hämtdatum för webbkällor, kursiv relevansförklaring. Vad som inte hittas eller inte går att läsa i original redovisas som sådant.
**Status 2026-10-21:** första genomgången är gjord och redovisad i [FYND_kallor_2026-10-21.md](FYND_kallor_2026-10-21.md) med åtta lästa källor (LU, Google, KTH, Ingenjören, regeringen, Computer Sweden). Bastani m.fl. (PNAS 2025) och UNESCO (2023) är kända men ännu inte lästa i original. Chalmers, Uppsala och Linköping är otillräckligt undersökta.

**h. Röst och ton.** Kent är avsändare. Ramtexten skrivs i Kents röst (granskad mot `kent-skrivstil` och `humanizer_ton`). Berättandet om personan skrivs i tredje person och märks som exempel. Ingen AI-märkning. Inget skrivs som att Kent själv gjort något han inte gjort.

**i. Mappnamn — ÖPPEN.** `10` följer inte `NrX`-mönstret. Alternativ: behåll `10`, byt till `Nr4` (eller `Nr3`, som är tom). Påverkar adressen på Pages och README.

**j. Behövs ett SPEC.md-steg härifrån?** **Förslag: ja, kort, när form (d) och källurval (g) är beslutade.** Då finns acceptanskriterier värda att skriva: datastruktur per skede, källkrav, vad som aldrig får med (personuppgifter), mobilbredder, tillgänglighet.

**k. Matematik, naturvetenskap och AI-agenter — UTKAST (Kent 2026-10-21).** Kents tes: 2026 är första året då en teknolog kan lita på AI-modellen i matematik och naturvetenskap, och då studenter hanterar harness-appar och flera agenter någorlunda väl. Fyndsammanställning: [FYND_matematik_och_agenter_2026-10-21.md](FYND_matematik_och_agenter_2026-10-21.md). Kort: modellerna passerade expertnivå på GPQA Diamond (93 procent mot 81 procent för experter) och gick från 2 till 31–38 procent på FrontierMath Tier 4 mellan november 2024 och mars 2026, och fick IMO-guld 2025. Alltså är språnget 2024–2026, inte bara 2026. Men förmågan är ojämn, bevis är svårare än svar, och benchmark kan innehålla fel. Ingen studie av verkliga tentor på LTH/KTH/Chalmers hittades, och ingen mätning av studenters agent-kompetens. **Begrepp:** agent = modell + harness; "verktyg" är det agenten anropar (se FYND avsnitt 2). **Öppet:** (i) skriva tesen som "seriös sparringpartner 2024–2026" i stället för "lita på 2026"? (ii) göra ett eget replikerbart test på offentliga tentor (FYND avsnitt 7)?

**l. Första leverans är en artikel, inte presentationen — BESLUTAT ✓ (Kent 2026-10-22, "agera på gissningarna").** Kent vill först skriva en argumenterande text (GitHub, blogg och LinkedIn) som lanserar tesen, med rubriken **"2026 är året det blev normalt och moget"**. Texten bygger på hans två inlägg ([Vad mäter AI-testerna egentligen?](https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/), 2026-09-25, och [Generativ AI – farlig farligt, eller härligt härligt](https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/), 2026-09-18) och avslutas med ett eller två tester med känt facit. Presentationen i denna mapp kommer senare och återanvänder fakta och källor. Disposition, ingressförslag, testplan och beslutslista: [ARTIKEL_disposition_2026-10-22.md](ARTIKEL_disposition_2026-10-22.md). Tesens ordalydelse: "moget" ersätter "första året" och "kan lita på". **Test 1 genomfört 2026-10-22:** LTH:s offentliga tentaarkiv gick inte att nå, så Linköpings universitets öppna tenta TATA41 Envariabelanalys 1 (2026-08-19, med officiell lösningsskiss) användes i stället. Alla svar stämde med lösningsskissen; en tenta, en körning, en modell, med Python som verktyg. Se [test1_TATA41_2026-08-19/RESULTAT_test1.md](test1_TATA41_2026-08-19/RESULTAT_test1.md). **Test 2 genomfört 2026-10-22:** värmeledning i en stav, tre delfrågor, facit låst med hashvärde före lösningen; alla svar stämde. Uppgiften formulerades av samma modell som löste den, vilket begränsar vad den visar. Se [test2_vaermeledning/RESULTAT_test2.md](test2_vaermeledning/RESULTAT_test2.md).

## 5. Leveranser

- [ ] Beslut a (persona), b (huvudläsare) och d (form) klara
- [ ] Beslut c (motargument) klart
- [ ] Källsökning gjord, urval läst i original och länkkontrollerat (g)
- [ ] Beslut i (mappnamn) klart
- [ ] SPEC.md skriven och godkänd (j)
- [ ] Fräscha-ögon-genomläsning av PRD:en innan den kallas klar
- [ ] Bygge, README med Live Page-länk, versionsdatum i sidhuvudet

## 6. Nästa steg

1. Kent svarar på 4a, b, d och i.
2. Därefter sökning och läsning av källor (g), förslagsvis nästa session, innan någon text om verktygens kapacitet skrivs.

## Ändringslogg

- **v1 (2026-10-21):** Första utkast efter Kents beskrivning av tesen, läsaren och personan.
- **v14 (2026-10-22):** Kents mapp `Grok/Bilder` genomgången (4 skärmbilder, 2 skärminspelningar, totalt cirka 14 MB). Nya fynd: Prompt A kördes i läget "Auto" och Prompt B i läget "Build (Beta)"; Groks arbetslogg för B visar att den räknade fram Fourierserien som intern kontroll. Resultatfilerna i `test3_grok/` uppdaterade. Bloggartikeln behöver en mening om det (se chatten).
- **v13 (2026-10-22):** Artikeln publicerad på Kents blogg: [2026 är året det blev normalt och moget](https://klel.wordpress.com/2026/10/22/2026-ar-aret-det-blev-normalt-och-moget/), i princip oförändrad mot utkast 1. Upptäckt: fem relativa länkar (`test3_grok/`, `FYND_kallor_2026-10-21.md`, `FYND_matematik_och_agenter_2026-10-21.md`, `test1_TATA41_2026-08-19/RESULTAT_test1.md`, `test2_vaermeledning/RESULTAT_test2.md`) fungerar inte på bloggen och ska bytas mot GitHub-adresser under `https://github.com/kentlundgren/AI-teknik/blob/main/Presentationer/10/`.
- **v12 (2026-10-22):** Artikelutkast 1 skrivet (disposition A, ingress 1): [ARTIKEL_utkast_1_2026-10-22.md](ARTIKEL_utkast_1_2026-10-22.md). Alla 19 länkar kontrollerade (200). Kent har bekräftat Cursor-stycket (att Cursor är verktyget han själv jobbar i och att han ser skillnaden mellan att fråga och att ge en agent en uppgift). Väntar på Kents genomläsning av resten, särskilt tesens mjukare formulering och slutets "jag lutar åt förklaring och motivering".
- **v11 (2026-10-22):** Test 3B: Prompt B (värmeledning) besvarad av Grok Build; alla tre delfrågor stämmer med det låsta facit. Grok Build kördes enligt Kent i en tom mapp utan facit. Öppet: modellens namn. Se `test3_grok/RESULTAT_B_vaermeledning_grok.md`.
- **v10 (2026-10-22):** Test 3: samma uppgifter till Grok. Prompt A (tentan) besvarad av Grok 4.7; alla slutsvar stämmer, skillnaden ligger i hur väl bevisen motiveras. Prompt B väntar. Se `test3_grok/`.
- **v9 (2026-10-22):** Test 2 (agentuppgift, värmeledning) genomfört med facit låst i förväg; resultat i `test2_vaermeledning/`.
- **v8 (2026-10-22):** Test 1 genomfört på en öppen LiU-tenta (TATA41, 2026-08-19); resultat i `test1_TATA41_2026-08-19/`.
- **v7 (2026-10-22):** Ny punkt 4l: artikel som första leverans, rubrik "2026 är året det blev normalt och moget"; disposition i `ARTIKEL_disposition_2026-10-22.md`.
- **v6 (2026-10-21):** Ny punkt 4k om matematik, naturvetenskap och AI-agenter; fynd i `FYND_matematik_och_agenter_2026-10-21.md`.
- **v5 (2026-10-21):** Formförslaget i 4d utvecklat till en sida med fem delar, med "vem betalar?" som huvudgrepp; fyra öppna val i formen.
- **v4 (2026-10-21):** Tredje källgenomgången (FYND avsnitt 10): Googles studentpaket 2026 som trolig förklaring till "en tredjedel", LU:s Google-konton som trolig förklaring till varför Google, och vad som inte är belagt om delad finansiering.
- **v3 (2026-10-21):** Kents hypotes om betalande majoritet prövad i andra källgenomgången (FYND avsnitt 9); förslag att ändra frågan till "vem betalar".
- **v2 (2026-10-21):** Personen nämns inte vid namn (beslutat). Bakgrunden (Gemini-erbjudandet) och första källgenomgången inlagda; fynd i `FYND_kallor_2026-10-21.md`. Tesen i 4c fick ett förslag på mer hållbar formulering.
