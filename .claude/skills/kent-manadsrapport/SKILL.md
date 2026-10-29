---
name: kent-manadsrapport
description: Skapar eller uppdaterar Kents månadsrapport, en rangordning av de 10 projekt han lagt mest arbete på under en månad (aktiva dagar, commits, filändringar), oavsett vilket repo projektet ligger i, med placering förra månaden. Använd när Kent skriver nyckelordet "månadsrapport" (gärna med månad, till exempel "månadsrapport oktober"), frågar "vad har jag gjort den här månaden?" eller vill ha en topplista över sina projekt. Skriptet läser Git-historiken i hans repon och är oberoende av AI-verktyg.
metadata:
  version: "1.4 (2026-10-29: privat arbete utanför rapporten, ingen privat karta)"
---

# Månadsrapport

**Nyckelord:** `månadsrapport`. När Kent skriver det (eventuellt med månad) ska rapporten skapas eller uppdateras enligt arbetsgången nedan.

Rapporten rangordnar **projekt**, inte repon. Ett projekt kan ligga i flera repon, och ett repo kan innehålla flera projekt. Projekt med flest aktiva dagar hamnar överst, därefter flest commits, därefter flest filändringar. Bara de 10 största visas. Varje projekt visas med sin plats förra månaden och en rörelse (▲ ▼ = ny), som i en topplista.

## Snabbstart: vem gör vad

**Kent:** skriv `månadsrapport` (eller `månadsrapport oktober`) till ett AI-verktyg som kan köra kommandon på hans dator. Verktyget kör skriptet, sparar rapporten i `Manadsrapport/` och berättar vilka sidor som inte svarade på sin live-adress. Kent granskar filen och committar och pushar själv. Senaste rapporten finns under *Var skillen ligger* nedan.

**En annan AI-modell (Cursor, Grok Build, andra):**
1. Läs den här filen. Länken räcker för att läsa instruktionen, men skriptet måste köras på Kents dator, så verktyget måste kunna köra Python och Git där. Ett chattverktyg i webbläsaren (Grok, ChatGPT) når inte hans lokala Git-historik och kan inte skapa rapporten. Det kan däremot läsa och förklara en färdig rapport via länken.
2. Kör: `python -X utf8 <skillens mapp>\manadsrapport.py <ÅÅÅÅ-MM> --skriv`. Skillens mapp lokalt: `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-manadsrapport`. Skriptet är också på GitHub, men fungerar bara där de andra repona ligger som syskonmappar till AI-teknik (se nedan).
3. Följ *Arbetsgång* längre ned. Det gäller även om uppmaningen bara är "ge mig en månadsrapport" med en länk hit: du ska läsa filen som instruktioner och utföra dem, inte bara sammanfatta den. Committa och pusha inte, och säg i slutet att du inte gjort det.
4. Rapporten ska stå på svenska med gemener i rubriker, utan personnamn och utan påstående att texten är AI-genererad.

**Claude, som minnesstöd** (det här är vad som är bestämt):
- Rangordningen gäller **projekt**, inte repon. Max 10 rader, sorterade på aktiva dagar, commits, filändringar, med plats förra månaden och rörelse.
- Projekten är mjuka och definieras i `projekt_karta.json`. Ändra kartan när ett projekt vidgas eller byter namn, och fråga Kent vid ny mapp.
- **Tabell 1** är insatsen. **Tabell 2, nya färdiga produkter**, är sidor som blev publicerade första gången under månaden, sorterade på datum.
- LNF-projekt markeras 🟩. Projektnamn är länkar med hovertext, och beskrivningarna står också som text.
- Bara repon som ligger på GitHub ingår. Privat arbete är utanför rapporten och finns varken i kartan eller i någon fil.
- Skriptet håller listan, "senaste rapporten" och förra/nästa-länkarna aktuella. README i `Manadsrapport/` följer regeln: live-länk överst (finns ingen live-sida står ingen), avsnittet `## Repo` sist.
- Kent committar och pusha själv, om han inte uttryckligen ber om det.

## Varför skriptet läser lokala kloner

Alla projekt i rapporten ligger på GitHub, så samma historik finns där. Skriptet läser ändå lokala kloner av följande skäl:
- **Fullständig historik per fil och månad.** `git log` lokalt ger datum, commits och ändrade filer, och följer filer över namnbyten (`--follow`), utan gränser. GitHubs API har en gräns på antal anrop och ger sämre filstatistik.
- **Det som inte är pushat räknas också.** Kent pushar själv, så en rapport mitt i månaden skulle annars ligga efter.
- **Ett kommando räcker.** Skriptet förutsätter att alla repon som listas i `projekt_karta.json` (`repon`) ligger som syskonmappar i samma överliggande mapp som AI-teknik (`C:\Users\kentl\OneDrive\AI`). Saknas en klon hoppas repot över, och rapporten blir ofullständig utan fel. Kontrollera därför att alla klonerna finns innan du litar på siffrorna.

Privat arbete som bara finns lokalt ingår inte i rapporten. Lägg aldrig till ett privat repo i `projekt_karta.json`.

## Var skillen ligger

- **GitHub:** https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-manadsrapport
- **Lokalt:** `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-manadsrapport`
<!-- senaste:start -->
- **Senaste rapporten:** [oktober 2026](https://github.com/kentlundgren/AI-teknik/blob/main/Manadsrapport/2026-10.md) (alla rapporter: [Manadsrapport/](https://github.com/kentlundgren/AI-teknik/blob/main/Manadsrapport/README.md))
<!-- senaste:slut -->
- **Färdiga rapporter:** mappen `Manadsrapport/` i AI-teknik, en fil per månad (`2026-10.md`). Skriptet håller listan i mappens README, länken till den senaste rapporten ovan och förra/nästa-länkarna i varje rapport aktuella när det körs med `--skriv`. Därför ändras navigeringsraden överst i äldre rapporter när en ny månad läggs till. Övrigt innehåll i äldre rapporter ändras inte.
- **Pekare** för Claude Code: `C:\Users\kentl\.claude\skills\kent-manadsrapport\SKILL.md`.

Filer i skillens mapp: `SKILL.md` (den här), `manadsrapport.py` (räknar och skriver rapporten), `projekt_karta.json` (vilka mappar som hör till vilket projekt).

## Arbetsgång

1. **Kör skriptet** (alla verktyg som kan köra Python): `python -X utf8 manadsrapport.py 2026-10`. Utan månad används innevarande månad. Lägg till `--skriv` för att också spara `AI-teknik/Manadsrapport/<år>-<månad>.md`.
2. **Granska projektlistan** innan du skriver filen. Finns ett projekt som heter "repo: mapp" eller "repo (rotfiler)" är det en mapp som saknas i kartan. Föreslå för Kent vilket projekt den hör till, eller om den är ett nytt projekt, och uppdatera `projekt_karta.json` när han svarat.
3. **Kör med `--skriv`**, läs rapporten och kontrollera att den inte innehåller personnamn.
4. **Berätta för Kent i chatten** om sidor som skriptet skriver ut under "Nya sidor som inte svarar på sin live-adress". De ingår inte i Tabell 2.
5. **Committa och pusha aldrig**, även om uppmaningen inte säger det. Kent gör det själv, om han inte uttryckligen ber om det i den aktuella konversationen. Kör `git status` i `AI-teknik`.
6. **Avsluta alltid svaret** med en egen rad: "Inget är committat eller pushat. Nya och ändrade filer: <lista från git status>." Den raden ska stå med även när allt gått bra.

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
- Sidor som inte svarar på live-adressen listas bara i terminalen.

## Måtten och begränsningarna

- **Aktiva dagar:** dagar med minst en commit som rör projektet.
- **Commits:** commits som rör projektet. En commit som rör flera projekt räknas i varje projekt.
- **Filändringar:** antal filer som ändrats, summerat över alla commits.
- Bara det som committats räknas. Osparat arbete och tid vid datorn syns inte.
- Pågår månaden är rapporten en delrapport, och jämförelsen med förra månaden gäller då en del av en månad mot en hel.

## Form

Rapporten ska ha rubrik med månad, en inledning som säger att det är en månadsrapport, nyckelordet, länk till skillen på GitHub och den lokala sökvägen, tabellen med "Tabell 1." och ankare, samt avsnittet *Så räknas det*. Rubriker skrivs med gemener utom första ordet. Skriv inget om att texten är AI-genererad och inga personnamn.
