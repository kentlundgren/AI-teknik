# PRD – Generell mall (struktur för hur en PRD byggs upp i det här arbetssättet)

**Namn:** PRD_generell
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_generell.md`
**Skapad:** 2026-08-01
**Version:** 5 (tre nya lärdomar och en förstärkning tillagda i avsnitt 3, destillerade ur ett fjärde, verkligt genomfört PRD-projekt utanför det här repot)
**Status:** Referensdokument — inte en PRD för ett verkligt uppdrag. En
genomgång av strukturen, destillerad ur fyra genomförda PRD:er (se länkar
nedan).
**Typ:** Referens/mall — inte grund- eller tilläggs-PRD.

Den här filen beskriver *inte* ett riktigt uppdrag. Den är destillerad ur de
fyra riktiga PRD:er som faktiskt tagits fram hittills — tre i det här
repot,
[PRD_mappkontroll.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_mappkontroll.md)
(klar), [PRD_rag.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_rag.md)
(klar) och [PRD_spec.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_spec.md)
(klar, tillförde inget nytt strukturavsnitt men väl en ny stående delfråga,
se avsnitt 2 nedan) — samt en fjärde, `PRD_aktivitetsrapport_260803.md`, i
det separata, privata projektet ArbetenSokta (inget publikt repo, därför
ingen länk här) — för att visa mönstret som återkommer i dem, snarare än
att uppfinna ett nytt.

## 1. Varför en PRD innan kodning?

Grundprincipen som [Claude-kompassens](https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/)
egen Fas 0 beskriver: kom överens om *vad* och *varför* innan något kodas
eller publiceras. En felaktig utgångspunkt är dyr att rätta till i
efterhand — särskilt om kod eller publicerad text redan byggts på den. En
PRD är den skriftliga platsen där den avstämningen sker och blir spårbar,
istället för att bara finnas i en konversation som glöms bort.

## 2. Grundstruktur, avsnitt för avsnitt

**Header-fält (alltid överst, innan första rubriken):**
- **Namn** — kort, innehållsbaserat filnamn (`PRD_<ämne>.md`). Inte
  löpnummer (PRD1, PRD2, PRD3) — se lärdom i avsnitt 3.
- **Plats** — fullständig sökväg till filen.
- **Skapad** — datum.
- **Version** — löpnummer plus en kort parentes om vad senaste ändringen
  gällde, så man ser utvecklingen utan att läsa hela ändringsloggen.
- **Status** — en enda rad, uppdaterad i *varje* version (annars blir den
  **stale** — engelska för information som blivit inaktuell/föråldrad
  utan att uppdateras; se lärdom, avsnitt 3).
- **Typ** — grund-PRD (helt nytt projekt) eller tilläggs-PRD (bygger på
  befintlig struktur).

**1. Bakgrund** — vad hände, vad ledde fram till att det här behövs. Om
PRD:n växer fram i flera steg (vilket flera hittills gjort), bygg ut med
daterade "Tillägg [datum]"-stycken istället för att skriva om historien —
det bevarar spårbarheten för *varför* ett beslut togs, i den ordning det
togs.

**2. Syfte** — varför görs det här, vilket problem löses. Om flera
kärnbudskap finns, lista dem separat istället för att väva ihop dem.

**3. Omfattning** — Ingår / Ingår inte, tydligt avgränsat. "Ingår inte" är
minst lika viktigt som "Ingår" — det är där man skriver ut vad som *inte*
ska hända, för att förhindra scope creep senare.

**4. Frågor och beslut** — **inte** en fast rubrik som "Öppna frågor" (se
lärdom, avsnitt 3 — det var precis den missen `PRD_rag.md` gjorde). Varje
delfråga får en bokstav (a, b, c …) och en statustagg direkt i rubriken
("— ÖPPEN", "— BESLUTAT ✓", "— I HUVUDSAK LÖST ✓"), så statusen syns utan
att man behöver läsa hela texten. När en delfråga besluta, uppdatera
statustaggen på plats — skriv inte bara ett nytt stycke längre ner.

**Stående delfråga, obligatorisk i varje PRD framöver (tillagd 2026-08-02,
se `PRD_spec.md`):** en av delfrågorna i avsnitt 4 ska alltid vara *"Behövs
ett SPEC.md-steg härifrån?"* — dvs. ska en agent-orienterad specifikation
(exakta gränsfall, acceptanskriterier, tekniska begränsningar) skrivas som
ett eget steg mellan den här PRD:n och kodningen. Svaret är oftast nej —
`PRD_spec.md` själv landade i nej för sin egen leverans (ett textkort i en
redan etablerad mall) — men frågan ska ändå ställas varje gång, medvetet,
inte bara när uppgiften känns teknisk. Det är själva ställningstagandet,
inte ett obligatoriskt SPEC.md-dokument, som är den nya stående praktiken.

**5. Leveranser** — checklista (`[x]`/`[ ]`), en rad per konkret,
avprickningsbar sak. Ska alltid spegla samma sanning som avsnitt 4 — om en
fråga är beslutad där ska motsvarande leverans vara avbockad här.

**6. Produktionsordning** — i vilken ordning delarna görs, och *varför* just
den ordningen. Återkommande mönster hittills: käll-/innehållsarbete klart →
blogginlägg (bär det fulla resonemanget) → kod/kompass (blir ett
komprimerat destillat av bloggen).

**7. Källor** — Harvard-format, alfabetisk ordning (aldrig kronologisk),
numera även **annoterat** (en kort parentes per källa om vad den handlar om
eller varför den är med — se `kent-meta-regler-for-code`, Regel 2). Skilj
gärna externa, citerbara källor från interna projektreferenser (filer,
konversationer) som inte är Harvard-citerbara.

**8. Status** — en sammanfattande lägesbild på en handfull meningar.
Uppdateras i *varje* version — det är den sektion som lättast blir
**stale** (engelska, se ovan) eftersom den sammanfattar resten istället
för att själv innehålla ny information (se lärdom).

**Ändringslogg** — en punkt per version: vad ändrades och varför. Det här
är vad som gör det möjligt att läsa om en PRD senare och förstå *hur*
besluten växte fram, inte bara vad slutresultatet blev.

## 3. Lärdomar (från att faktiskt ha byggt fyra PRD:er, inte i förväg tänkta)

- **En rubrik som beskriver ett tillstånd blir missvisande när tillståndet
  ändras men rubriken inte gör det.** `PRD_rag.md` hette avsnitt 4 "Öppna
  frågor" ända tills alla sex delfrågor utom en var beslutade — Kent fick
  själv fråga varför rubriken inte stämde. Bättre: en neutral rubrik
  ("Frågor och beslut") med statustaggar per delfråga, så texten aldrig
  behöver hinna ikapp en rubrik.
- **Sammanfattande sektioner (Status, Källor) blir lättast stale**
  (engelska: inaktuella/föråldrade, utan att någon aktivt gjort dem fel),
  eftersom
  de inte uppdateras av samma redigering som ändrar detaljerna längre upp i
  dokumentet. `PRD_rag.md` hade vid ett tillfälle en Källor-sektion som
  fortfarande sa "inga ännu", trots att källorna varit beslutade i flera
  versioner — Kent upptäckte det, inte Claude.
- **En genomläsning "med nya ögon" — gjord precis innan skriv-/
  kodningsfasen startar, inte under själva framtagandet — hittar den här
  sortens glapp pålitligt.** Det hände konkret i `PRD_rag.md` v8: fem
  separata inkonsekvenser hittades i en enda genomläsning.
- **En PRD som växer fram i flera steg mår bäst av daterade
  "Tillägg"-stycken i Bakgrund**, snarare än att skriva om historien varje
  gång ny information kommer in — annars tappas spåret av vad som var känt
  när.
- **Namnge PRD-filer efter innehåll** (`PRD_<ämne>.md`), inte löpnummer.
  Diskuterat men aldrig formellt avgjort i `PRD_mappkontroll.md` (avsnitt 7
  där) — Kent sa uttryckligen "inget beslut än" — men praktiserat
  konsekvent i alla PRD:er hittills.
- **Generella regeländringar som upptäcks under en PRD-process sprids lätt
  till bara ett ställe först.** Det hände med kravet på annoterad
  källförteckning i `PRD_rag.md` — lades först bara till i en global skill,
  och Kent fick själv be om att det spreds till resten. Numera en sparad,
  stående vana (`feedback_propagate_standing_rules`) att göra det
  proaktivt.
- **En ny stående praktik kan vara en fråga, inte ett nytt obligatoriskt
  dokument.** `PRD_spec.md` undersökte om SPEC.md (agent-orienterad
  specifikation) skulle bli en del av arbetssättet. Svaret blev inte "gör
  det alltid", utan "fråga varje gång" — och tillämpat på sin egen leverans
  blev svaret nej. En lättviktig checkpoint-fråga sprider sig lättare och
  mår bättre än ett tungt nytt artefaktkrav.
- **En genomläsning "med nya ögon" hittar glapp även efter att alla
  delfrågor är beslutade, inte bara under själva framtagandet.**
  `PRD_spec.md` v5 hittade tre separata glapp (en stale rad i
  produktionsordningen, en tvetydig korsreferens, ett moment felaktigt
  skrivet som "out of scope") i en enda genomläsning gjord precis innan
  kodningsfasen — samma mönster som `PRD_rag.md` v8, nu bekräftat en andra
  gång.
- **En genomläsning "med nya ögon" är en återkommande vana, inte en
  engångsgrind precis innan kodningen** (förstärkning av lärdomen ovan,
  tillagd 2026-08-03 ur `PRD_aktivitetsrapport_260803.md`). Den PRD:n
  fortsatte växa långt efter att kodningsfasen börjat — nya avsnitt
  tillkom mitt i byggandet, inte bara innan. Genomläsningen kördes därför
  om flera gånger, varje gång Claude sa "redo att frysa", inte en enda
  gång vid ett fast tillfälle. Blev en egen, numrerad regel i
  `kent-meta-regler-for-code` (Regel 7) snarare än att bara vila på ett
  minne mellan projekt — samma mönster som SPEC.md-frågan i avsnitt 2.
- **Ett "BESLUTAT ✓" är inte permanent — det ska kunna skrivas om med ett
  datumstämplat skäl när verkligheten säger emot det, inte bara läggas
  till en gång.** `PRD_aktivitetsrapport_260803.md` beslutade först att en
  publik sida skulle publiceras via ett eget, nytt repo, med uttrycklig
  motivering. Ett faktiskt misslyckat push-försök visade att beslutet inte
  höll i praktiken — lösningen byttes till att återanvända ett befintligt
  repo/gren, med en egen, ärligt redovisad avvägningssektion (vad som
  vanns, vad det kostade) i stället för att bara byta tyst. En delfråga
  som redan fått en statustagg är alltså inte skyddad från att omprövas —
  den ska omprövas synligt, med skäl, när ny information kräver det.
- **Konkreta kalibreringssiffror i en PRD är hypoteser tills de stämts av
  mot alla kända källor, inte etablerade fakta för att de skrevs ner
  först.** `PRD_aktivitetsrapport_260803.md` angav först ett konkret
  exempel ("6 sökta jobb en given månad") hämtat ur en enda mapp. Efter
  att en andra, parallell datakälla kontrollerades visade sig den verkliga
  poolen vara betydligt större. Ingen av siffrorna var felaktig när den
  skrevs — den första var bara ofullständig. Flagga explicit vilken källa
  ett exempeltal bygger på, särskilt om fler källor rimligen kan finnas.
- **En terminologi-sektion behövs så fort en PRD introducerar två
  liknande begrepp, innan förväxlingen faktiskt sker — inte reaktivt
  efteråt.** `PRD_aktivitetsrapport_260803.md` använde två släktbegrepp
  ("Aktivitetsrapport" och "Aktivitetslogg") om vartannat tills Kent själv
  fick fråga vilket som var vilket. Lösningen — ett eget, tidigt
  "Terminologi"-stycke som låser gränsen mellan de två — borde vara en
  standardåtgärd när två begrepp introduceras som låter lika men betyder
  olika saker, inte något man lägger till först när förvirringen redan
  hänt.

## 4. De fyra riktiga PRD:er den här mallen är destillerad från

- [PRD_mappkontroll.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_mappkontroll.md) — tilläggs-PRD, klar och avslutad.
- [PRD_rag.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_rag.md) — tilläggs-PRD, klar och avslutad.
- [PRD_spec.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_spec.md) — tilläggs-PRD, fryst och avslutad. Tillförde ingen ny
  strukturdel, men väl den stående delfrågan om SPEC.md i avsnitt 2 ovan.
- `PRD_aktivitetsrapport_260803.md` — grund-PRD, fryst och avslutad. Från
  ett separat, privat projekt (ArbetenSokta) utanför det här repot, därför
  ingen länk. Tillförde fyra lärdomar i avsnitt 3 (fresh-eyes som
  återkommande vana, statustaggar som kan omprövas, kalibreringssiffror
  som hypoteser, och terminologi-sektioner i förväg) samt en konkret,
  fungerande tillämpning av SPEC.md-delfrågan (avsnitt 2): den landade i
  "nej" för grundmekanismen men "ja" för en specifik delfunktion
  (schemalagda påminnelser) — ett bevis på att svaret inte alltid behöver
  vara enhetligt för hela PRD:n.

## Ändringslogg

- 2026-08-01 (v1): Skapad, på Kents begäran, som ett metastopp under arbetet
  med `PRD_rag.md`. Struktur och lärdomar destillerade ur `PRD_mappkontroll.md`
  och `PRD_rag.md` — inget i den här filen är påhittat i förväg.
- 2026-08-01 (v2): Kent frågade om "stale" (använt genomgående i denna fil
  och i `PRD_rag.md`) är ett etablerat svenskt ord — nej, det är engelska,
  lånord i svenskt facksammanhang för information som blivit inaktuell/
  föråldrad utan att uppdateras. Förklaring tillagd inom parentes vid varje
  förekomst.
- 2026-08-02 (v3): Ny stående delfråga tillagd i avsnitt 2 ("Behövs ett
  SPEC.md-steg härifrån?"), beslutad i `PRD_spec.md` (4a/4c). Två nya
  lärdomar tillagda i avsnitt 3. Räknarna i rubrikerna uppdaterade från två
  till tre PRD:er.
- 2026-08-02 (v4): På Kents begäran: (1) den utförliga bakgrunden i Status
  om varför filen skapades ("medvetet metastopp ... metaperspektiv") togs
  bort som onödig information, (2) `PRD_mappkontroll.md`, `PRD_rag.md` och
  `PRD_spec.md` länkas nu direkt till GitHub på sina två ställen (intro och
  avsnitt 4) så läsaren lätt hittar konkreta exempel, (3) "Claude-kompassen"
  i avsnitt 1 länkas till den skarpa, publicerade versionen.
- 2026-08-03 (v5): Fyra nya lärdomar tillagda i avsnitt 3, destillerade ur
  det första PRD-projektet utanför det här repot, `PRD_aktivitetsrapport_260803.md`
  (ArbetenSokta, privat, olänkad): fresh-eyes-genomläsning som återkommande
  vana snarare än engångsgrind, statustaggar som kan behöva omprövas synligt
  i stället för att vara permanenta, kalibreringssiffror som hypoteser tills
  fler källor kontrollerats, och terminologi-sektioner tillagda i förväg när
  två liknande begrepp introduceras. Räknarna i rubrikerna uppdaterade från
  tre till fyra PRD:er. Det här är också första gången mallen destilleras ur
  ett projekt utanför AI-teknik-repot — ett konkret bevis på att mönstret
  faktiskt generaliserar mellan projekt, inte bara inom ett. Fräscha-ögon-
  genomläsning (se nya lärdomen ovan) hittade två stale "båda"-referenser i
  avsnitt 2 (syftade på när det bara fanns två PRD:er) — rättade till
  "flera"/"alla".
