# Kandidatprojekt — idébank för framtida slides

En löpande lista över projekt, verktyg eller ögonblick som skulle kunna
bli en ny slide i presentationen, men som inte är inlagda i `projects.js`
än. Skiljer sig från `Claude_familjen.md`/`Kents_work_with_AI.md`/
`AI_branschen_brett.md` (som är bakgrundsresearch till årskorten) — den
här listan gäller konkreta **kandidat-projektslides**, samma sorts post
som `temperatur`, `Fredagsquiz` eller `Ölkalkylen`.

**Regeln, tillagd 2026-08-05 på Kents begäran:** så fort ett tänkbart
projekt nämns i en konversation — även i förbigående — loggas det här
direkt, samma stund. Inte bara ihågkommet i chatten, som annars glöms
bort mellan sessioner.

**Regel 2, tillagd 2026-08-05:** Claude ska proaktivt, utan att bli
ombedd, leta efter fler kandidater att lägga till här — se
[`kent-presentationer`-skillen](../.claude/skills/kent-presentationer/SKILL.md)
för sökkällorna och rutinen.

## Lista

Ett block per kandidat, i den ordning de identifierades. Blankrad mellan
varje för läsbarhet.

**Stickfigur Spel**
Beskrivning: Samma engelska prompt till Perplexity och OpenAI:s GPT-4-playground (mars 2024) — ett tidigt jämförelsetest, se `Kents_work_with_AI.md`.
Länk: https://kentlundgren.se/AI/AIspel/AI_test_240314F.html
Bild: Ja — `Bilder/KulSpel_Sticky_spel.gif`
Status: **Infört**
Noterat: 2026-08-05 (i samband med `Kents_work_with_AI.md`)
Beslut: Infört i `projects.js` samma dag som det loggades — se PRD Ändringslogg v30.

**Frans G. Bengtsson-research (RAG)**
Beskrivning: Ett faktiskt RAG-projekt, till skillnad från de flesta andra kandidaterna. "Sluta gissa, RAG:ga i stället" — en sida om Frans G. Bengtsson byggd med två tekniker för att hämta och verifiera information.
Länk: https://klel.wordpress.com/2026/08/01/sluta-gissa-ragga-i-stallet/
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-04 (flyttad till denna fil 2026-08-05 vid PRD-städning, ursprungligen i PRD delfråga 4h)
Beslut: —

**VM 2026-tips (familjens tips vs odds)**
Beskrivning: "När du har tippat!" — en samlad vy som jämför familjemedlemmarnas VM-tips mot faktiska odds, i stället för utspritt över flera källor. Socialt/personligt, bryter av mot ekonomi-tunga projekt.
Länk: https://controllerutangranser.wordpress.com/2026/06/10/nar-du-har-tippat/
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-04 (flyttad hit 2026-08-05)
Beslut: —

**Kassarapport-automatisering (3 badanläggningar)**
Beskrivning: "Från manuell hantering till automatisering" — automatiserar import av kassarapporter från kassasystemet BRP för tre badanläggningar (Korsavad, Tobisvik, Hammenhög) till bokföringen. Business-automation, stark för en controller-/ekonom-målgrupp.
Länk: https://controllerutangranser.wordpress.com/2026/06/17/fran-manuell-hantering-till-automatisering/
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-04 (flyttad hit 2026-08-05)
Beslut: —

**"Ett vindkraftverk, fem sanningar" (multi-perspektiv)**
Beskrivning: "Ett vindkraftverk, fem sanningar – vems kalkyl räknar vi egentligen?" — bygger om en vindkraftskalkyl för att visa fem olika intressenters perspektiv på samma anläggnings ekonomi samtidigt.
Länk: https://controllerutangranser.wordpress.com/2026/07/03/ett-vindkraftverk-fem-sanningar-vems-kalkyl-raknar-vi-egentligen/
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-04 (flyttad hit 2026-08-05)
Beslut: Avgör mot befintliga `vindkraftskalkyl`-posten innan den läggs till, för att undvika dubblett — se även "Tidig vindkraftskalkyl" nedan, en annan vinkel på samma ämnesområde.

**Claude-kostnad (usage-tracker för eget abonnemang)**
Beskrivning: "Ligger jag i fas med Claude?" — ett verktyg som håller koll på Kents eget Claude Pro-abonnemang mot veckokvoten. Meta-exempel: AI som håller koll på sig själv.
Länk: https://klel.wordpress.com/2026/08/04/ligger-jag-i-fas-med-claude/
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-04 (flyttad hit 2026-08-05)
Beslut: Finns som eget projekt i `Ovrigt/Claude_kostnad` (annat repo, inte AI-teknik) — bekräfta vilken skärmdump som skulle representera det innan det läggs till.

**Tidig vindkraftskalkyl (pre-generativ-AI)**
Beskrivning: Den nuvarande `vindkraftskalkyl`-sliden visar den senaste (2026) versionen. Kent har byggt vindkraftskalkyler sedan minst 2012 — långt innan "riktig generativ AI", som Kent daterar till ChatGPT:s lansering i november 2022. En tidig, pre-AI-version skulle kunna visa kontrasten: hur skiljer sig arbetssättet före och efter generativ AI, för exakt samma sorts kalkyl?
Länk: (ingen bekräftad ännu — se `SPEAKER_NOTES.md` under `vindkraftskalkyl` för en 2022-länk som redan är känd: https://kentlundgren.se/miljo/energi/vindkraftsekonomi.html)
Bild: Okänt
Status: Övervägs
Noterat: 2026-08-05 (Kent, i samband med formatändringen av den här filen — "vi kan tänka framåt om det kan vara lämpligt")
Beslut: —

## Hur en rad flyttas till "Infört"

Ändra Status-fältet till **Infört**, komplettera Beslut-fältet med datum
och en referens till PRD:ns ändringslogg. Ta inte bort blocket — det
fungerar som en logg över vad som faktiskt lagts till över tid, inte bara
en att-göra-lista.
