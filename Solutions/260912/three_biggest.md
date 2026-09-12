# Tre av de mest häpnadsväckande AI-lösningarna på matematiska problem (2026)

**Mappdatum:** 2026-09-12  
**Sammanställning:** pedagogisk översikt över tre forskningsnära resultat där generativ AI bidragit till att lösa eller motbevisa länge öppna matematiska problem.  
**Syfte:** bevara en läsbar, källbelagd bild av läget just den här dagen — inte att slå fast att Clay Institute eller matematiksamfundet redan har godkänt alla påståenden.

Ett av de tre resultaten handlar just om **strömningar**: Navier–Stokes-ekvationerna, som beskriver hur vätskor och gaser rör sig.

> **Status 12 september 2026.** Flera av resultaten är mycket nya. Navier–Stokes-lösningen tillkännagavs 8 september 2026. Lean-formalism hjälper, men det är inte samma sak som ett färdigt millenniepris eller en allmänt accepterad tidskriftsartikel. Prioriteringsfrågor och extern granskning pågår.

---

## 1. Navier–Stokes existens och glatthet (millennieproblem) — september 2026

**Område:** partiella differentialekvationer, fluiddynamik (“strömningar”).  
**Aktör:** internt OpenAI-system, starkare än den då nyss släppta GPT-6 Astra; uppemot 10 000 samarbetande agenter under cirka 88 timmar, plus Lean-formalisering.  
**Källa för påståendet:** [OpenAI (2026) *On the Navier–Stokes Millennium Prize Problem*](https://openai.com/index/navier-stokes-solution/).

### Vad som var öppet

Navier–Stokes-ekvationerna (1800-talet) är den matematiska modellen för hur fluider rör sig — väder, flygplansvingar, blodflöde, havsströmmar. De behandlar fluiden som ett kontinuum, inte som enskilda molekyler.

Frågan som stod öppen i ungefär 90 år, och formulerades som ett av Clay Mathematics Institutes sju millennieproblem år 2000, var i korthet:

- Startar man med en helt slät, “snäll” tredimensionell inkompressibel fluid med ändlig energi — kan hastigheten bli oändlig på *ändlig tid*?
- Kan lösningen alltså *blåsa upp* (blow-up / singularitet)?

I två dimensioner är lösningarna väluppfostrade. I tre dimensioner med viskositet visste man inte säkert. Om en singularitet kan uppstå betyder det att kontinuum-modellen går sönder: ekvationerna slutar beskriva något fysiskt rimligt och man måste gå ner på molekylnivå.

### Vad AI-systemet påstås ha visat

Enligt OpenAI finns det starttillstånd där dynamiken utvecklar en singularitet på ändlig tid. Det svarar mot utsaga “C” (och även “D”) i Clay Institutes officiella formulering.

Singulariteten beskrivs som en virvel som sträcks ut, blir allt tunnare och längre (som spaghetti) och snurrar allt fortare. Hastigheten går mot oändligheten på ändlig tid, medan den totala energin förblir ändlig. En slät yttre kraft används, men själva “explosionen” kommer från fluidens egen dynamik: termerna i ekvationerna blir enorma men tar ut varandra på ett precist sätt ([OpenAI, 2026](https://openai.com/index/navier-stokes-solution/); [Castelvecchi, 2026](https://www.nature.com/articles/d41586-026-02842-5)).

**Vad det *inte* betyder:** att riktiga vätskor plötsligt får oändlig fart. Det betyder att *modellen* tillåter mer än vad fysiken tål. Vi förstår nu — om resultatet håller — att ekvationerna inte alltid ger globalt släta lösningar.

### Granskningsläge

- Internt Lean-verifierat enligt OpenAI.
- Clay Institute och det breda matematiksamfundet har inte officiellt godkänt resultatet (12 september 2026).
- OpenAI har uppgett att de inte avser att göra anspråk på millenniepriset.
- Det finns en prioriteringsdiskussion med Tristan Buckmaster och Levent Alpöge, som strax innan publicerat närliggande resultat för Euler-ekvationerna (fallet utan viskositet) med hjälp av Claude och OpenAI-modeller ([Castelvecchi, 2026](https://www.nature.com/articles/d41586-026-02842-5)).

---

## 2. Erdős enhetsavståndsproblem — maj 2026

**Område:** diskret geometri.  
**Aktör:** intern OpenAI-modell (allmän resonemangsmodell, inte ett specialbyggt geometrisystem).  
**Källa för påståendet:** [OpenAI (2026) *An OpenAI model has disproved a central conjecture in discrete geometry*](https://openai.com/index/model-disproves-discrete-geometry-conjecture/).

### Vad som var öppet

Paul Erdős frågade 1946: om man sätter *n* punkter i planet, hur många par kan ligga på *exakt* avstånd 1?

Länge trodde man att regelbundna, gitterliknande mönster var nästan optimala, och att antalet enhetsavstånd inte kunde växa mycket snabbare än *n* (formellt en övre gräns av typen $n^{1+o(1)}$).

### Vad AI-systemet visade

Modellen hittade en oändlig familj av konstruktioner som ger polynomiellt fler enhetsavstånd än förmodan tillät — $n^{1+\delta}$ för något fast $\delta > 0$ och oändligt många $n$. Beviset använde oväntade idéer från algebraisk talteori som geometriker inte hade kopplat till den elementära geometrifrågan.

Tim Gowers (Fields-medaljör) kallade resultatet en milstolpe i AI-matematik: om en människa skickat in pappret till *Annals of Mathematics* hade han rekommenderat acceptans utan tvekan ([OpenAI, 2026](https://openai.com/index/model-disproves-discrete-geometry-conjecture/); [New Scientist, 2026](https://www.newscientist.com/article/2527564-mathematicians-stunned-by-ais-biggest-breakthrough-in-mathematics-yet/)).

Det framhölls som det första riktigt centrala öppna problemet i ett delområde som löstes i stort sett autonomt av en generell resonemangsmodell. Externa matematiker granskade argumentet.

---

## 3. Jacobian-förmodan motbevisad — juli 2026

**Område:** algebraisk geometri / polynomiella avbildningar.  
**Aktör:** Claude Fable 5 (Anthropic) tillsammans med Levent Alpöge.  
**Källa för påståendet:** [Wikipedia, *Jacobian conjecture*](https://en.wikipedia.org/wiki/Jacobian_conjecture) samt samtida rapportering ([New Scientist, 2026](https://www.newscientist.com/article/2580374-ais-solution-to-87-year-old-riddle-takes-mathematicians-by-surprise/)).

### Vad som var öppet

Ott-Heinrich Keller ställde 1939 frågan: om en polynomiell avbildning $\mathbb{C}^n \to \mathbb{C}^n$ har konstant nollskild Jacobian-determinant (lokalt inverterbar överallt), måste den då vara globalt inverterbar — ett polynomiellt automorfi?

Förmodan stod på Stephen Smales lista över problem för nästa århundrade. I 87 år fanns varken hållbart bevis eller motexempel. Flera publicerade “bevis” visade sig felaktiga.

### Vad som visades

Ett explicit motexempel i tre variabler: Jacobian-determinanten är konstant $-2$ överallt, men tre olika punkter avbildas på samma punkt. Då kan avbildningen inte ha invers. Förmodan är därmed falsk i dimension 3 och högre (tvåvariabelfallet är fortfarande öppet).

Det slående är hur *litet* motexemplet är — en konkret formel som kan kontrolleras i ett datoralgebrasystem — och att en generell språkmodell tillsammans med en matematiker hittade den där generationer av algebraiker inte gjort det.

---

## Kort om läget 2026

2026 har varit ett språngår för AI i forskningsnära matematik. Tidigare milstolpar — AlphaProof och AlphaGeometry 2 på IMO-nivå 2024–2025, FunSearch, DeepMinds arbete med instabila singulariteter i fluidekvationer 2025 — ser i efterhand ut som uppvärmning ([Wikipedia, 2026](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence)).

Andra starka 2026-resultat som *inte* räknas in bland de tre ovan, men som hör till samma våg:

- “Dying percolation”-förmodan (ingen oändlig kluster vid kritisk sannolikhet i alla dimensioner), Anthropic/Claude i början av september 2026.
- Köthe-förmodan i ringteori (påstått motbevis, Lean-kontrollerat).
- Flera delresultat från OpenAI Astra i augusti 2026 (bland annat konstruktion av icke-sofiska grupper).

**Gemensamt mönster:** modellerna hittar inte bara “svaret” utan oväntade kopplingar mellan områden. Lean gör att långa kedjor kan maskinkollas. Samtidigt är verifiering, kreditfördelning och vad “AI löste det” egentligen betyder fortfarande öppna frågor — särskilt när tusentals agenter och miljonbelopp i beräkning ingår.

---

## Källor

Castelvecchi, D. (2026) OpenAI claims huge maths breakthrough on a famed ‘Millennium Problem’. *Nature*, 8 september. Tillgänglig på: https://www.nature.com/articles/d41586-026-02842-5 (hämtad 2026-09-12). *(Samtida vetenskaplig nyhetsartikel om OpenAI:s Navier–Stokes-påstående, prioriteringsläget och vad blow-up betyder.)*

New Scientist (2026a) Mathematicians stunned by AI's biggest breakthrough in mathematics yet. 21 maj. Tillgänglig på: https://www.newscientist.com/article/2527564-mathematicians-stunned-by-ais-biggest-breakthrough-in-mathematics-yet/ (hämtad 2026-09-12). *(Samtida rapportering och citat kring Erdős enhetsavståndsresultatet, inklusive Gowers bedömning.)*

New Scientist (2026b) AI's solution to 87-year-old riddle takes mathematicians by surprise. 20 juli. Tillgänglig på: https://www.newscientist.com/article/2580374-ais-solution-to-87-year-old-riddle-takes-mathematicians-by-surprise/ (hämtad 2026-09-12). *(Samtida rapportering om Jacobian-motexemplet och Claude Fable 5.)*

OpenAI (2026a) An OpenAI model has disproved a central conjecture in discrete geometry. 20 maj. Tillgänglig på: https://openai.com/index/model-disproves-discrete-geometry-conjecture/ (hämtad 2026-09-12). *(Primärkälla för enhetsavståndsresultatet och den algebraisk-talteoretiska kopplingen.)*

OpenAI (2026b) On the Navier–Stokes Millennium Prize Problem. 8 september. Tillgänglig på: https://openai.com/index/navier-stokes-solution/ (hämtad 2026-09-12). *(Primärkälla för vad OpenAI påstår sig ha bevisat om singularitet, energi och Lean-formalisering.)*

Wikipedia (2026a) Jacobian conjecture. Tillgänglig på: https://en.wikipedia.org/wiki/Jacobian_conjecture (hämtad 2026-09-12). *(Samlad formulering av förmodan och det explicita 3D-motexemplet.)*

Wikipedia (2026b) List of mathematical discoveries by artificial intelligence. Tillgänglig på: https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence (hämtad 2026-09-12). *(Översikt över 2026-års AI-matematikresultat och deras dåvarande verifieringsstatus.)*

---

*Anteckning. Texten är en sammanställning gjord 2026-09-12 för arkivet i `kentlundgren/AI-teknik`. Påståenden om de allra nyaste resultaten — särskilt Navier–Stokes — bör läsas mot primärkällorna och mot senare granskning.*
