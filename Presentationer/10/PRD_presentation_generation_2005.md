# PRD – Presentation 10: Generation 2005 och generativ AI

**Namn:** PRD_presentation_generation_2005
**Plats:** `AI-teknik/Presentationer/10/PRD_presentation_generation_2005.md`
**Skapad:** 2026-10-21
**Version:** 1 (utkast för diskussion)
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

**a. Persona eller verklig person — FÖRSLAG: persona.** Kent har nämnt att tanken väcktes av sonen Erik (född 2005-07-25), men texten ska gälla vem som helst född 2005. Förslag: Erik nämns inte vid namn och födelsedatum anges inte. Åldern räcker ("född 2005"). Om Kent vill nämna Erik krävs hans uttryckliga samtycke (han är vuxen). **Öppen: Kent bekräftar.**

**b. Läsare — UTKAST (Kents beskrivning 2026-10-21).** Någon som vill se och reflektera över om 2005-kullen kan vara första generationen med full nytta av generativ AI, och om 2026 är året då undervisningen inte kan bortse från den. Troliga läsare: studenter, föräldrar, lärare, studievägledare, högskolepersonal. Enbart svenska. **Öppen: vilka av dessa är huvudläsare?**

**c. Tesen och dess svaga punkter.** Tesen bör presenteras som en *hypotes som prövas*. Motargument som sidan måste bemöta eller åtminstone nämna:
- Varför 2005 och inte 2004 eller 2006? Kullgränser är godtyckliga; det är nyttan vid ett givet år som räknas, inte födelseåret.
- "Kraftfull nog 2026" är ett påstående om verktygens kapacitet som måste styrkas med källa (modellers prestanda, studier), inte bara upplevas.
- Nytta är inte detsamma som lärande: AI kan hjälpa till att klara uppgifter utan att man lär sig (se forskningsläget, 4g).
- Tillgång och kostnad: full nytta kräver tillgång till bra verktyg.
**Öppen: vill Kent att motargumenten får ett eget avsnitt (förslag) eller vävs in?**

**d. Form — ÖPPEN, spånas.** Alternativ:
- **A. Tidslinje i fyra skeden** (som Nr1:s årskort): vad AI kunde då, hur personan kunde använda det, vad undervisningen sa.
- **B. Före/efter-jämförelse:** samma uppgift (t.ex. en inlämning eller en tentafråga) löst med verktygen 2022 respektive 2026, med belägg.
- **C. Tesen som fråga med röstning/reflektion:** besökaren tar ställning (instämmer/tvekar/invänder) och får se argument för och emot.
- **D. Kombination:** A som ryggrad, B som fördjupning i ett skede, C som avslutning.
Förslag att börja diskutera från: **D**, men börja enklast (A + avsnittet "Håller tesen?").

**e. Vad ska visas per skede (gymnasiet / arbete / högskolestart).** Fyra delar per skede: (1) vilka generativa verktyg fanns, (2) vad en person födda 2005 realistiskt kunde göra med dem, (3) vad skolan/högskolan sa eller gjorde (policy, riktlinjer), (4) vad som var begränsningen. **Öppen: vilka verktyg och modeller ska nämnas vid namn?** Varje modellpåstående ("kunde skriva kod", "klarade tentor") måste ha belägg.

**f. "Nya AI" — BESLUTAT ✓ (2026-10-21):** avser kraftfull generativ AI (text, kod, bild m.m.) som den är från 2026. Definieras i sidan vid första användning, i enlighet med regeln att förklara uttryck.

**g. Källor — UTKAST.** Kent vill ha bra källor om generativ AI och undervisning. Områden att söka, **alla ska läsas i originaltext och länkkontrolleras innan de används** (inga referenser är verifierade än):
- Myndigheter och internationella organ: Skolverket, Universitetskanslersämbetet (UKÄ), UNESCO, OECD, EU-kommissionen.
- Lärosätenas egna riktlinjer: LTH/Lunds universitet (policy för AI i undervisning och examination), samt gärna ett par jämförbara tekniska högskolor.
- Forskning: översiktsartiklar och studier om generativ AI och lärande (nytta, risker, fusk, lärandeeffekter), svenska och internationella.
- Primärkällor om verktygens kapacitet: leverantörernas egna tekniska rapporter och oberoende utvärderingar.
- Rapporter om hur studenter faktiskt använder verktygen (enkäter).
Krav: Harvardstil, alfabetisk ordning, hämtdatum för webbkällor, kursiv relevansförklaring. Vad som inte hittas eller inte går att läsa i original redovisas som sådant.

**h. Röst och ton.** Kent är avsändare. Ramtexten skrivs i Kents röst (granskad mot `kent-skrivstil` och `humanizer_ton`). Berättandet om personan skrivs i tredje person och märks som exempel. Ingen AI-märkning. Inget skrivs som att Kent själv gjort något han inte gjort.

**i. Mappnamn — ÖPPEN.** `10` följer inte `NrX`-mönstret. Alternativ: behåll `10`, byt till `Nr4` (eller `Nr3`, som är tom). Påverkar adressen på Pages och README.

**j. Behövs ett SPEC.md-steg härifrån?** **Förslag: ja, kort, när form (d) och källurval (g) är beslutade.** Då finns acceptanskriterier värda att skriva: datastruktur per skede, källkrav, vad som aldrig får med (personuppgifter), mobilbredder, tillgänglighet.

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
