# PRD – De fyra AI-säkerhetsrösterna efter ChatGPT

**Namn:** PRD_rosterna_efter_chatgpt
**Plats:** `AI_sakerhet/Nummer1/PRD/PRD_rosterna_efter_chatgpt.md`
**Skapad:** 2026-09-18
**Version:** 1 (första utkastet, underlag för diskussion)
**Status:** Under diskussion — struktur och källor på plats, flera delfrågor öppna (se avsnitt 4).
**Typ:** Grund-PRD för `AI_sakerhet/Nummer1` — första konkreta leveransen i det bredare AI-säkerhet-projektet i `AI_sakerhet`.

## 1. Bakgrund

Kent har i ett forum tagit fram ett underlag om hur fyra kända
AI-risk-profiler — Max Tegmark, Olle Häggström, Nick Bostrom och Anders
Sandberg — själva skrivit och agerat *efter* ChatGPT-lanseringen i slutet av
2022, dvs. i den period då generativ AI gjorde den tidigare, mer abstrakta
superintelligensdebatten konkret för allmänheten.

Underlagets kärntes: rösterna har inte hållit samma linje i denna period.
Tegmark och Häggström fortsätter skriva att kapplöpningen mot allt
kraftfullare AI är farlig och måste hejdas. Bostrom vidhåller
kontrollproblemet i intervjuer, men hans egna nyare texter (2024–2026)
handlar mer om *timing* och en "löst värld" än om stopp. Sandberg har efter
2023 mest synts i poddar, är mer försiktigt optimistisk, och passar därför
sämre som en "AI är farligt för mänskligheten"-röst i just denna period.

**Tillägg 2026-09-18:** Källförteckningen (nio källor) är länkkontrollerad
enligt Regel 2 i `kent-meta-regler-for-code`. Samtliga titlar, författare
och datum stämmer mot Kents ursprungliga uppgifter, med två små
reservationer:
- ISBN för *Deep Utopia* (Bostrom, 2024) syns inte på `nickbostrom.com/deep-utopia`
  — kan inte bekräftas utan att kontrollera en tredje källa (t.ex.
  förlagets egen sida eller ett bibliotekskatalog).
- Exakt publiceringsdatum för *Statement on Superintelligence*
  (`superintelligence-statement.org`) visas inte längre på sidan — den
  visar numera bara aktuellt signaturantal (141 547 vid kontrolltillfället).
  Både Tegmark och Häggström återfanns dock bland de listade
  undertecknarna, vilket stämmer med innehållet i övrigt.

## 2. Syfte

Ta fram en faktagranskad, källbelagd genomgång av hur dessa fyra profilers
offentliga hållning till AI-risk har utvecklats i den generativa AI-eran
(ChatGPT, nov/dec 2022, och framåt) — som underlag för både ett blogginlägg
och en interaktiv jämförelsesida, som första konkreta leverans i det
bredare AI-säkerhet-projektet i `AI_sakerhet`.

Två delmål:
- Visa **vem som varit mest konsekvent** i att varna för/kräva stopp av
  kapplöpningen mot superintelligens, med Kents egna primärkällor som bevis
  — inte bara ett allmänt intryck.
- Synliggöra **var linjerna glidit isär** (särskilt Bostroms förskjutning
  mot timing-frågor, och Sandbergs svagare roll i just denna period) på ett
  sätt som är rättvist mot varje persons faktiska texter, inte en
  förenklad karikatyr.

## 3. Omfattning

**Ingår:**
- De fyra namngivna personerna (Tegmark, Häggström, Bostrom, Sandberg) och
  deras egna texter/utspel efter ChatGPT-lanseringen (slutet av 2022 och
  framåt).
- Kents befintliga källförteckning (nio källor), nu länkkontrollerad.
- En tydlig, källbelagd jämförelse/tes om hur respektive persons linje
  utvecklats i perioden.
- Explicit skillnad mellan **egna texter** (primärkälla, väger tyngst) och
  **tal/intervjuer/poddar** (sekundärt, redovisas som sådant — se Kents
  egen distinktion i underlaget, t.ex. Bostroms Expansión-intervju eller
  Tegmarks föreläsning i september 2026).

**Ingår inte:**
- En fullständig historik av superintelligensdebatten *före* ChatGPT (Bostroms
  2014-bok *Superintelligence* m.m.) — nämns bara kortfattat som bakgrund,
  inte som eget källmaterial att analysera.
- Andra AI-risk-profiler utanför dessa fyra (t.ex. Yudkowsky, Amodei,
  Hinton) — de kan förekomma som referenspunkter (Häggström polemiserar
  t.ex. mot både Bostrom och Amodei) men blir inte egna huvudpersoner här.
  Kan bli egna, senare delar av `AI_sakerhet` om Kent vill det.
- Teknisk fördjupning i konkreta alignment-metoder (t.ex. detaljerna i
  "Towards Guaranteed Safe AI") — texten refereras för sin *hållning*, inte
  som en teknisk genomgång av metoden.

## 4. Frågor och beslut

**a) Publiceringsordning: blogginlägg eller interaktiv sida först? — BESLUTSFÖRSLAG, VÄNTAR PÅ KENT**
Rekommendation: blogginlägget skrivs först. Skälet är samma mönster som
`PRD_generell.md` (avsnitt 6, Produktionsordning) själv destillerat ur
tidigare projekt: käll-/innehållsarbetet är klart → blogginlägget bär det
fulla resonemanget och tvingar fram en skarp tes → den interaktiva sidan
blir sedan ett komprimerat, visuellt destillat av en redan mogen analys.
Att bygga den interaktiva sidan först riskerar en omstrukturering när
argumentationen ändras under skrivandet.

**b) Vilken blogg tar emot texten? — ÖPPEN**
klel.wordpress.com eller kentlundgren.se? Ingen av dem är angiven i
underlaget Kent klistrade in.

**c) Vad ska den interaktiva sidan konkret vara? — ÖPPEN**
Ett fristående verktyg à la Claude-kompassen (klickbara kort per person,
lager/faser, tidslinje)? En enklare jämförelsetabell? Eller något tredje?
Formatet påverkar hur mycket av `kent-bygg-sidor`-skillens mönster
(GitHub-hörna, teknik-modal från start) som är relevant redan i `Nummer1`.

**d) Behövs ett SPEC.md-steg härifrån? — BESLUTSFÖRSLAG: NEJ, ÄNNU**
Svaret landar preliminärt i nej för blogginlägget (ren textleverans, inget
agent-orienterat att specificera). För den interaktiva sidan beror svaret på
utfallet av fråga (c) — om den blir ett nytt, mer komplext verktyg (snarare
än en enkel tabell) kan en kort SPEC.md för just den tekniska delen vara
motiverad när vi kommer dit. Föreslår att vi tar upp frågan igen efter (c)
är beslutad, inte låser den nu.

**e) Hur hanteras de två overifierade detaljerna (ISBN, exakt datum)? — ÖPPEN**
Utelämna dem tyst ur källförteckningen, markera dem explicit som
overifierade i texten, eller ska jag försöka verifiera dem mot en
tredje källa (förlagets sida, Wayback Machine för statement-sidans
ursprungliga lansering)?

## 5. Leveranser

- [x] Källförteckning länkkontrollerad (nio av nio källor, Regel 2)
- [ ] Beslut om publiceringsordning (fråga 4a)
- [ ] Beslut om målblogg (fråga 4b)
- [ ] Beslut om den interaktiva sidans format (fråga 4c)
- [ ] Blogginlägg skrivet (Kents röst, `kent-skrivstil`)
- [ ] Interaktiv sida byggd (`kent-bygg-sidor`, efter blogginlägget)
- [ ] ISBN/datum-frågan löst (fråga 4e)

## 6. Produktionsordning

1. Källkontroll (klart, se avsnitt 1 och 5).
2. Öppna frågor i avsnitt 4 diskuteras och beslutas med Kent.
3. Blogginlägg skrivs (bär det fulla resonemanget och den skarpa tesen om
   vem som varit mest konsekvent).
4. Interaktiv sida byggs som ett komprimerat, visuellt destillat av
   blogginlägget.

## 7. Källor

Future of Life Institute (2023) *Pause Giant AI Experiments: An Open
Letter*, 22 mars. Tillgänglig på:
<https://futureoflife.org/open-letter/pause-giant-ai-experiments/> (hämtad
18 september 2026). *(Det första stora utspelet efter GPT-4; Tegmark/FLI i
centrum. Länkkontrollerad 2026-09-18: titel och datum bekräftade.)*

Future of Life Institute (2025) *Statement on Superintelligence*, 22
oktober. Tillgänglig på: <https://superintelligence-statement.org/> (hämtad
18 september 2026). *(Tegmarks och FLI:s skarpaste krav efter ChatGPT:
villkorat förbud mot superintelligens. Länkkontrollerad 2026-09-18: innehåll
bekräftat, Tegmark och Häggström båda listade som undertecknare — exakt
publiceringsdatum syns dock inte längre på sidan, bara aktuellt
signaturantal.)*

Häggström, O. (2025) *Our AI future and the need to stop the bear*, 21
februari. Tillgänglig på:
<https://www.math.chalmers.se/~olleh/AIandHumanCivilization.pdf> (hämtad 18
september 2026). *(Häggströms egen huvudtext efter LLM-genombrottet; han
rekommenderar den före 2016-boken. Länkkontrollerad 2026-09-18: titel och
datum bekräftade via textextraktion ur PDF:en.)*

Häggström, O. (2026a) 'AI-utvecklingen måste stävjas snarast möjligt',
*Opulens*, 19 januari. Tillgänglig på:
<https://www.opulens.se/opinion/kronikor/ai-utvecklingen-maste-stavjas-snarast-mojligt/>
(hämtad 18 september 2026). *(Svensk kortversion av samma tes för en
bredare läsekrets. Länkkontrollerad 2026-09-18: rubrik och datum
bekräftade.)*

Häggström, O. (2026b) 'Full speed ahead! I worry about the attitude
displayed in recent papers by Dario Amodei and Nick Bostrom', *Crunch Time
for Humanity*, 20 februari. Tillgänglig på:
<https://haggstrom.substack.com/p/full-speed-ahead> (hämtad 18 september
2026). *(Direkt polemik mot Bostroms timing-paper i den generativa eran.
Länkkontrollerad 2026-09-18: rubrik, datum och innehåll bekräftade.)*

Bostrom, N. (2024) *Deep Utopia: Life and Meaning in a Solved World*.
Ideapress Publishing. ISBN 9781646871643. Tillgänglig på:
<https://nickbostrom.com/deep-utopia>. *(Bostroms huvudbok efter ChatGPT;
behandlar den "lösta världen" mer än existentiell fara. Länkkontrollerad
2026-09-18: titel, år och förlag bekräftade — ISBN syns inte på sidan,
overifierat i denna omgång, se fråga 4e.)*

Bostrom, N. (2026) *Optimal Timing for Superintelligence: Mundane
Considerations for Existing People*. Working paper, version 1.0.
Tillgänglig på: <https://nickbostrom.com/optimal.pdf> (hämtad 18 september
2026). *(Bostroms mest omtalade egna text 2026; medger hög P(doom) men
argumenterar ofta för tidig AGI. Länkkontrollerad 2026-09-18: titel och
versionsnummer bekräftade via textextraktion ur PDF:en.)*

Dalrymple, D., Skalse, J., Bengio, Y., Russell, S., Tegmark, M. et al.
(2024) 'Towards guaranteed safe AI: a framework for ensuring robust and
reliable AI systems', *arXiv*, 2405.06624. DOI:
<https://doi.org/10.48550/arXiv.2405.06624>. *(Teknisk position paper där
Tegmark är medförfattare; empirisk testsäkerhet räcker inte för generell
autonom AI. Länkkontrollerad 2026-09-18: titel, författare (inkl. Tegmark)
och datum bekräftade.)*

Tegmark, M. & Omohundro, S. (2023) 'Provably safe systems: the only path to
controllable AGI', *arXiv*, 2309.01933. DOI:
<https://doi.org/10.48550/arXiv.2309.01933>. *(Tegmarks första större egna
säkerhetstext efter ChatGPT: AGI utan bevisbar kontroll är oacceptabel.
Länkkontrollerad 2026-09-18: titel, författare och datum bekräftade.)*

## 8. Status

Källorna är samlade och länkkontrollerade. Fem delfrågor väntar på Kents
beslut (avsnitt 4) innan produktionen (avsnitt 6) kan starta på riktigt —
framför allt ordningen blogg/interaktiv sida, målblogg, och den interaktiva
sidans konkreta format.

## Ändringslogg

- 2026-09-18 (v1): Skapad. Struktur enligt `PRD_generell.md`. Kents
  forum-underlag och källförteckning inkopierade i avsnitt 1 och 7,
  samtliga nio källor länkkontrollerade (Regel 2). Fem öppna delfrågor
  identifierade i avsnitt 4, inklusive den obligatoriska SPEC.md-checkpointen
  (Regel 6).
