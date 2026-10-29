---
name: kent-manadsrapport
description: Skapar eller uppdaterar Kents månadsrapport, en rangordning av de 10 projekt han lagt mest arbete på under en månad (aktiva dagar, commits, filändringar), oavsett vilket repo projektet ligger i, med placering förra månaden. Använd när Kent skriver nyckelordet "månadsrapport" (gärna med månad, till exempel "månadsrapport oktober"), frågar "vad har jag gjort den här månaden?" eller vill ha en topplista över sina projekt. Skriptet läser Git-historiken i hans repon och är oberoende av AI-verktyg.
metadata:
  version: "1.2 (2026-10-29: Tabell 2, nya färdiga produkter; länk, beskrivning och LNF-markering per projekt)"
---

# Månadsrapport

**Nyckelord:** `månadsrapport`. När Kent skriver det (eventuellt med månad) ska rapporten skapas eller uppdateras enligt arbetsgången nedan.

Rapporten rangordnar **projekt**, inte repon. Ett projekt kan ligga i flera repon, och ett repo kan innehålla flera projekt. Projekt med flest aktiva dagar hamnar överst, därefter flest commits, därefter flest filändringar. Bara de 10 största visas. Varje projekt visas med sin plats förra månaden och en rörelse (▲ ▼ = ny), som i en topplista.

## Var skillen ligger

- **GitHub:** https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-manadsrapport
- **Lokalt:** `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-manadsrapport`
- **Färdiga rapporter:** mappen `Manadsrapport/` i AI-teknik, en fil per månad (`2026-10.md`).
- **Pekare** för Claude Code: `C:\Users\kentl\.claude\skills\kent-manadsrapport\SKILL.md`.

Filer i skillens mapp: `SKILL.md` (den här), `manadsrapport.py` (räknar och skriver rapporten), `projekt_karta.json` (vilka mappar som hör till vilket projekt).

## Arbetsgång

1. **Kör skriptet** (alla verktyg som kan köra Python): `python -X utf8 manadsrapport.py 2026-10`. Utan månad används innevarande månad. Lägg till `--skriv` för att också spara `AI-teknik/Manadsrapport/<år>-<månad>.md`.
2. **Granska projektlistan** innan du skriver filen. Finns ett projekt som heter "repo: mapp" eller "repo (rotfiler)" är det en mapp som saknas i kartan. Föreslå för Kent vilket projekt den hör till, eller om den är ett nytt projekt, och uppdatera `projekt_karta.json` när han svarat.
3. **Kör med `--skriv`**, läs rapporten och kontrollera att den inte innehåller personnamn eller privata projekt.
4. **Berätta för Kent i chatten** om det som skriptet skriver ut under "Utanför tabellen". Det är projekt som är dolda i rapporten (se nedan) och som bara ska nämnas i samtalet.
5. **Committa inte på eget initiativ.** Kent committar och pushar själv, om han inte uttryckligen ber om det.

## Projekten är mjuka

Ett projekt definieras av en eller flera mappar i `projekt_karta.json`, och projektets namn är dess identitet från månad till månad. Det betyder:

- **Vidgas ett projekt** (samma uppgift får fler mappar eller flyttar): lägg till mappen på samma projekt. Namn och placering följer med.
- **Byter ett projekt namn:** ändra namnet på alla regler som hör till det. Förra månaden räknas om med den nuvarande kartan, så jämförelsen blir konsekvent. Rapporter som redan skrivits ändras inte, och man kan skriva om dem genom att köra om skriptet för den månaden.
- **Nya projekt** får en ny regel. Håll antalet projekt lågt: slå hellre ihop närliggande mappar än att skapa ett projekt för varje mapp.
- **Reglerna läses uppifrån.** Första regeln som matchar gäller, och en regel med tom `prefix` fångar allt i repot, så den ska stå sist för sitt repo. `endast_rot: true` begränsar en regel till filer direkt i repots rot.

## Länk, beskrivning och LNF-markering

Varje projekt i tabellen kan ha en post i `projekt_info` i `projekt_karta.json`, med tre fält:

- `lank`: projektets huvudsida. Välj live-sidan om det finns en. Finns ingen, välj texten på GitHub (blob-vy för `.md`). Kontrollera att adressen svarar innan den läggs in.
- `beskrivning`: en eller två meningar, hämtade ur projektets README eller sidtitel. Inga personnamn och inga citattecken (`"`) i texten, eftersom den används som hovertext.
- `lnf`: `true` för projekt som hör till arbete inom Lunds Naturskyddsförening. De får markeringen i `lnf_markering` (🟩) före namnet, med en förklaring under tabellen.

Projektnamnet blir en länk med beskrivningen som hovertext (`title`), och beskrivningarna står också som text i avsnittet *Projekten i korthet*, eftersom hovertext inte fungerar på pekskärmar. Ett projekt utan post visas som vanlig text. Färg går inte att visa i en markdown-fil på GitHub, därför används en emoji som markering.

## Nya färdiga produkter (Tabell 2)

Tabell 1 mäter insats. För kort och intensivt arbete som ger en tydlig produkt finns **Tabell 2, nya färdiga produkter**, som inte är rangordnad utan sorterad på datum.

- **Definition:** en `index.html` som sparades för första gången under månaden (följd över namnbyten med `git log --follow`), och som svarar 200 på sin live-adress. Pågående projekt som Samrådsguiden är inte produkter i den meningen, utan räknas i Tabell 1.
- **Bara första månaden:** en produkt visas den månad den först publicerades. Ett nytt avsnitt i ett befintligt verktyg, till exempel en ny period i en befintlig sida, är inte en ny produkt.
- **Kolumner:** publicerad, produkt (länk med hovertext), vad den är, projekt, aktiva dagar, commits och dagar från första commit till publicering. Dagar och commits räknas för mappen produkten ligger i och blir för låga om mappen flyttats.
- **Namn och beskrivning** hämtas ur sidans `<title>` och `<meta name="description">`. Ersätt dem genom att lägga en post i `produkt_info` med mappen som nyckel (till exempel `"Scampi"`), med fälten `namn`, `beskrivning` och `stjarna` (`true` för en produkt Kent vill lyfta, markeras ★).
- **Utelämna** sidor som är delar av ett större projekt genom att lägga mappen i `produkter_exkludera`. Just nu är det Samrådsguidens rangordning, Struktursidorna för MAXIMA och delningslänkar (`/k/`).
- **Projekt som är dolda** i den privata kartan ingår inte. Sidor som inte svarar på live-adressen listas bara i terminalen.

## Privata projekt

Vissa projekt ska räknas men inte skrivas i en publik fil, till exempel jobbsökandet. De ligger i en privat karta utanför repot: `C:\Users\kentl\.claude\manadsrapport_privat.json` (med `repon`, `regler` och `dolda`). Skriptet läser den om den finns. Dolda projekt räknas inte med i tabellen och nämns inte i rapportfilen, utan skrivs bara ut i terminalen.

- Skriv aldrig ett dolt projekts namn, eller namnet på dess repo, i `projekt_karta.json`, i rapporterna eller i den här filen.
- Finns inte den privata kartan (till exempel på en annan dator) ignoreras de dolda repona helt.

## Måtten och begränsningarna

- **Aktiva dagar:** dagar med minst en commit som rör projektet.
- **Commits:** commits som rör projektet. En commit som rör flera projekt räknas i varje projekt.
- **Filändringar:** antal filer som ändrats, summerat över alla commits.
- Bara det som committats räknas. Osparat arbete och tid vid datorn syns inte.
- Pågår månaden är rapporten en delrapport, och jämförelsen med förra månaden gäller då en del av en månad mot en hel.

## Form

Rapporten ska ha rubrik med månad, en inledning som säger att det är en månadsrapport, nyckelordet, länk till skillen på GitHub och den lokala sökvägen, tabellen med "Tabell 1." och ankare, samt avsnittet *Så räknas det*. Rubriker skrivs med gemener utom första ordet. Skriv inget om att texten är AI-genererad och inga personnamn.
