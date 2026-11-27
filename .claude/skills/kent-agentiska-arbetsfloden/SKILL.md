---
name: kent-agentiska-arbetsfloden
description: Kents playbook (metaskill) för att designa och bygga agentiska arbetsflöden tillsammans med Claude – återkommande uppgifter som Claude utför i flera steg med connectorer, skills och schemalagda uppgifter. Aktivera när Kent vill automatisera något som återkommer ("varje gång jag får…", "känna av när…", "gör det här automatiskt", "skapa en rutin", "schemalagd uppgift"), när han vill bygga en ny uppgiftsskill för ett flöde, när han frågar om skillnaden mellan arbetsflöde och agent, riskklassning, human-in-the-loop eller vad som händer om ingen agerar, eller när han frågar om hur man tänker kring agentiska uppgifter på metanivå. Långkatekesen-protokollen är det genomarbetade exemplet.
---

# Agentiska arbetsflöden – Kents playbook (v7.3)

Den här skillen utför inget jobb själv. Den styr **hur** Kent och Claude tar fram ett nytt arbetsflöde, och den är ett stöd för att Kent ska lära sig mönstret. Den kompletterar **kent-meta-regler** (Kents generella arbetsregler: frågor före start, källor, ingen AI-märkning, versionsnummer i skills) och **skills-meta-guide** (tekniken bakom skills, agenter och CLAUDE.md).

## Läsguide: referensfilerna

Läs filen när dess tillfälle kommer. Kan den inte läsas, säg det i stället för att gissa innehållet.

| Fil | Läs när |
|---|---|
| [ordlista.md](references/ordlista.md) | Ett begrepp dyker upp första gången, eller Kent frågar vad något heter eller betyder |
| [valpunkter.md](references/valpunkter.md) | Ett val ska göras i fas 1, 3, 5b, 7 eller 8 |
| [fallgropar.md](references/fallgropar.md) | Före fas 2 och 3, innan flödet rör Google Drive, Docs eller Gmail, vid ny connector och när något går fel |
| [publik-privat.md](references/publik-privat.md) | Flödet har privat underlag eller sparat tillstånd (fas 1), innan något förs från privat till publikt och före första publika commit |
| [exempel-langkatekesen.md](references/exempel-langkatekesen.md) | Kent vill se ett exempel, eller en förlaga behövs för en fas |
| [lart-av-andra.md](references/lart-av-andra.md) | Kent frågar vad en regel bygger på, eller en källbaserad regel eller källa ska ändras eller återanvändas |
| [behorighetsprov.md](references/behorighetsprov.md) | I fas 3, före en ny obevakad uppgift eller när dess åtkomst ändras |
| [kandidater.md](references/kandidater.md) | Vid varje fasavstämning |

## Coachläge (gäller alltid när skillen används)

- Gå igenom flödet **steg för steg**. Säg vid varje steg: vad som görs, vad som har gjorts och vad som är nästa steg, så att det går att följa och granska.
- Säg vad saker heter på metanivå (se typläran och ordlistan) när de dyker upp.
- Vid varje valpunkt: beskriv alternativen, vilket som väljs och varför. Kent vill påminnas om att det alltid finns flera vägar.
- Fråga Kent när ett val är hans att göra (t.ex. vilket konto, vilken mapp, hur utkastet ska se ut). Gissa inte. Det gäller även tider och kanaler: fråga i stället för att anta dem, och förklara varför ett förslag ser ut som det gör.
- **Sök i underlagen före frågan:** gå igenom de filer och källor flödet har tillgång till innan en uppgift behandlas som okänd och innan något bedöms utifrån att den saknas. Visa vad underlaget säger, och fråga sedan om det som saknas, är gammalt eller oklart. Människan slipper upprepa sig, och bedömningen byggs inte på en lucka som inte finns. *(prövad i ett flöde)*
- Förklara *varför* en regel finns, inte bara att den finns, både för Kent och i uppgiftsskillen. En regel med skäl går att tillämpa på nya fall; en regel utan skäl följs bokstavligt eller inte alls.
- **Visa fasläget** (se Faserna), så att den som bygger flödet påminns om var arbetet står.
- **Fasavstämning** efter varje fas: *Vad överraskade? Gäller det fler flöden? Bekräftar flödet någon kandidat? Var hör lärdomen hemma?* En lärdom om det här flödet skrivs i uppgiftsskillen. En generell lärdom följer tillväxtregeln.

### Tillväxtregeln

1. En ny generell lärdom från ett flöde skrivs i [kandidater.md](references/kandidater.md).
2. Den flyttas hit eller till en referensfil först när ett andra flöde har bekräftat den och Kent säger ja.
3. En säkerhetsregel (skydd mot något oåterkalleligt eller mot att privata uppgifter sprids) får skrivas in direkt efter Kents ja.
4. Regler märkta *(prövad i ett flöde)* står kvar med märkningen tills ett andra flöde bekräftar dem, så att enstaka erfarenheter inte läses som allmänna regler.
5. **Den här filen är högst 22 000 tecken.** Blir den längre ska något slås ihop eller flyttas till en referensfil i samma ändring.

## Typlära: arbetsflöde eller agent

Båda kallas **agentiska system**. Skillnaden är vem som bestämmer stegen.

| | Arbetsflöde (workflow) | Agent |
|---|---|---|
| Vem styr stegen | Bestämda i förväg, i skillen eller koden | Modellen väljer själv steg och verktyg |
| Passar när | Uppgiften går att dela upp i kända steg | Antalet steg går inte att förutse |
| Fördel | Förutsägbart, lätt att kontrollera och felsöka | Flexibelt, klarar oväntade fall |
| Nackdel | Klarar dåligt det som inte är beskrivet | Dyrare, fel kan förstärka varandra, svårare att granska |

**Tumregel:** börja med det enklaste som fungerar. Ofta räcker ett arbetsflöde, ibland en enda välskriven prompt. Välj en agent först när stegen verkligen inte går att bestämma i förväg, och ge den då ett avbrottsvillkor (t.ex. högst ett visst antal försök) och en plats där den stannar och frågar. Blandningen går också: fasta steg med agentiska steg inuti.

### Vanliga typer av arbetsflöden

| Typ | Så fungerar det | Exempel i Kents vardag |
|---|---|---|
| **Kedja med kontrollpunkter** (prompt chaining med gates) | Fasta steg i ordning, med en kontroll mellan stegen som kan stoppa flödet | Kallelse → kopia → embryo → verifiering → delning → mejlutkast |
| **Routing** | Indata klassas och skickas till rätt delflöde | Email triage sorterar mejl i Urgent, Action Needed, FYI |
| **Parallellisering** | Delar körs samtidigt och vägs ihop, eller samma uppgift körs flera gånger och röstas fram | Söka nätkostnader hos flera nätägare samtidigt |
| **Orkestrerare och arbetare** | En styrande del delar upp uppgiften i delar som inte är kända i förväg och lämnar ut dem | Research över ett okänt antal källor, där varje källa får en egen arbetare |
| **Utvärderare och förbättrare** | En del skriver, en annan bedömer, i en loop tills kriteriet är uppfyllt | Text som skrivs om tills den klarar humanizer-reglerna |

Den gemensamma byggstenen är **modellen med verktyg**: modell + connectorer + minne/skills.

### Ett eller flera flöden *(prövad i ett flöde)*

Växer målet under arbetet ("hitta jobb" blir "hitta jobb och skriv ansökan"), pröva om det är flera flöden. Dela när delarna har olika startpunkt, olika riskklass eller olika takt, och lägg människans val som grind mellan dem. Varje flöde går då att bygga, prova och stänga av för sig. Se också efter om ett av flödena redan finns som skill.

## Faserna

### Fasläget – visa var arbetet står

**När:** när ett arbete återupptas, när en fas avslutas, när målet ändras, efter ett längre sidospår och när Kent frågar. Inte i varje svar, för då slutar den att läsas.

**Så:** säg vilket flöde tabellen gäller, ta med alla faser (även 5b) och märk tydligt var arbetet står. Läget skrivs alltid med ord, symbolen är bara ett stöd (✅ klar, 🟡 här är vi, ⬜ kvar). "Gjort och kvar" fylls med det som gäller just det här flödet. Förarbete till en senare fas får synas utan att fasen räknas som påbörjad. Avsluta med nästa steg.

| Fas | Vad den handlar om | Läge | Gjort och kvar |
|---|---|---|---|
| 1 | Mål och startpunkt | ✅ Klar | Vad som bestämts |
| 2 | Kör flödet manuellt en gång | 🟡 **Här är vi** | Vad som är provat, vad som återstår |
| 3, 4, 5, 5b, 6–10 | En rad per fas | ⬜ Inte börjad, förarbete finns eller delvis bestämt | Viktigaste kvarstående |

### Fas 1 – Beskriv målet och startpunkten
- Vad ska komma ut? Var ska det ligga? Vem läser det?
- Vad är startpunkten (ett mejl, en fil, en tidpunkt)? Visa ett riktigt exempel.
- Placera flödet i typläran: arbetsflöde eller agent, och vilken typ. Det avgör hur mycket som ska bestämmas i förväg.
- **Finns redan en automation eller ett manuellt arbetssätt?** Läs dess prompt och körloggar, inte bara rapporterna, och jämför resultatet med underlag som visar hur det borde ha blivit. Det är baslinjen, och avvikelserna blir krav på det nya flödet. En rapport kan se rimlig ut medan loggen visar att ett underlag aldrig lästes. *(prövad i ett flöde)*
- **Dela upp underlaget i publikt och privat redan här.** Det styr var filerna läggs och var flödet kan köras. Så mycket av metoden som går får vara publik, uppgifter om personer och val hålls utanför (se [publik-privat.md](references/publik-privat.md)).
  - **Från privat till publikt är hög risk** (en lärdom, ett exempel, ett testresultat): skriv om det generellt och låt människan granska innan commit. En schemalagd körning skriver aldrig till det publika.
  - **Före första commit till ett publikt repo:** sök efter namn, adresser, kontaktuppgifter, arbetsgivare och personliga val. Det som en gång har pushats kan finnas kvar i historiken.

### Fas 2 – Kör flödet manuellt en gång
- Gör uppgiften tillsammans, steg för steg, på ett riktigt fall.
- Det är här konventioner, behörighetsproblem och fallgropar upptäcks. Skriv inte skillen före det här steget.
- Pröva källorna tekniskt innan du bygger på dem: hur de är sorterade, hur de är indelade i sidor och vad de svarar på en felaktig sökning.
- **Avsluta med ett facit:** människan bedömer resultatet och säger varför det som är fel är fel. Skälen blir regler, och bedömningarna sparas som testfall. *(prövad i ett flöde)*
- **Spara testfallens indata, inte bara länkar till dem.** Källor ändras och försvinner (en annons tas ned, ett dokument skrivs om), och då går testet inte att köra om. Spara det som bedömdes tillsammans med bedömningen, och anteckna för varje fall hur mycket av underlaget som lästes. Indata kan innehålla personuppgifter: lägg dem i den privata delen. *(prövad i ett flöde)*
- Spara hjälpskript som ska återanvändas på en varaktig plats. En sessions tillfälliga mapp kan tömmas.
- Starta en **utvecklingslogg** för flödet, med en rad per ändring: *iakttagelse → ändring → effekt*. *(prövad i ett flöde)*

### Fas 3 – Ordna behörigheter
- Vilka connectorer behövs (läsa, skapa, redigera)? Vilket konto ska de vara kopplade som?
- Välj den smalaste åtkomsten som räcker (least privilege). Det gäller en befintlig automation också: jämför dess connectorer med vad stegen faktiskt använder.
- Koppla en connector först när ett konkret steg kräver den (Drive för filer, Docs för att redigera dokument, Sheets för att lägga till rader i en logg). Stegen står i [fallgropar.md](references/fallgropar.md).
- **En schemalagd uppgift får de connectorer som fanns när den skapades.** Koppla därför alla connectorer innan uppgiften skapas.
- Skilj på **plats** (var en fil ligger) och **ägare** (vem som skapade den) i Google Drive.
- **Vad når körmiljön?** Internet nås både lokalt och i molnet. Det som skiljer är vilka filer och skills sessionen kommer åt och om datorn behöver vara på. Tre sätt: **allt lokalt** (datorn måste vara på), **delat med överlämning** (molnet gör det publika och lämnar ett resultat med fast namn och format, datorn läser det och gör det privata) och **allt i molnet** (det privata underlaget måste då finnas på kontot eller i ett privat repo).
- **Behörighetsprov före en ny obevakad uppgift** *(säkerhetsregel, inte prövad än)*: bygg först en tillfällig provuppgift utan schema som inte gör det riktiga jobbet. Den visar vad en körning **kan** göra (mapp, startregler, läsning utanför projektet med en ofarlig testfil, connectorer, besked). Städa bort provet efteråt. Mall: [behorighetsprov.md](references/behorighetsprov.md).

### Fas 4 – Skriv ner konventionerna
- Filnamn, mappar med fasta ID:n, mallar, vilka uppgifter som återanvänds, vilka luckor som lämnas till människan.
- **Datum i namn och ämne:** allt som skapas (filnamn, ämnesrad, kalenderhändelse) bär datumet för det som avses, så att det går att hitta senare.
- Utgå från det vanligaste fallet (t.ex. alla närvarande), så att människan har så lite som möjligt att ändra.
- **Tillstånd mellan körningar:** en körning börjar utan minne. Ska flödet bara rapportera nytt behövs en sparad lista över vad som redan har hanterats, med fast plats och format. "Nytt sedan förra körningen" i en prompt räcker inte. *(prövad i ett flöde)*
- **Skript eller modell:** lägg regelstyrda steg (hämta, sortera, jämföra datum, slå upp i listan) i skript och omdömet (läsa och bedöma) hos modellen. Skript går att testa och ger samma svar varje gång. *(prövad i ett flöde)*

### Fas 5 – Lägg in kontroller
- **Före ändring:** finns resultatet redan (idempotens)? Stämmer källorna med varandra? Bestäm vilken källa som gäller och flagga avvikelsen.
- **Efter ändring:** läs tillbaka och verifiera.
- **Rimlighet:** intervall, normalvärden, avvikelser att flagga. Bestäm *när* kontrollen kan göras: vissa kan göras först när människan har fyllt i (eget granskningsläge).
- Flaggor rapporteras till Kent; de skrivs inte in i dokumentet.
- **Tysta fel:** ett lyckat tekniskt svar (till exempel HTTP 200) säger inte att innehållet är rätt. Kontrollera att en källa gav det väntade innehållet. Noll träffar från en källa är en avvikelse att kontrollera innan flödet säger "inget att göra". *(prövad i ett flöde)*
- **Dubbletter på innehåll:** samma sak kan komma tillbaka med ny länk, ligga ute två gånger eller förmedlas av flera. Jämför innehållet, inte bara id eller adress. *(prövad i ett flöde)*
- **Läs källan innan något väljs bort:** rubriker och listfält kan vara ofullständiga eller missvisande (en ort i listan, flera orter i texten). Säg vad som bara har bedömts på utdrag eller rubrik. *(prövad i ett flöde)*
- **Bygg spärren i koden när det går.** En regel i en instruktion följs oftast, men en kontroll i ett skript eller en hook stoppar även när instruktionen missas eller missförstås. Exempel: ett publikt skript vägrar skriva resultat inuti sitt eget repo och avslutar med FEL om formatversionen inte stämmer. Prova att spärren verkligen stoppar, och säg vad den inte täcker. *(prövad i ett flöde)*

### Fas 5b – Riskklassa åtgärderna
Risken sitter i **åtgärden**, inte i modellen. Gå igenom varje åtgärd flödet gör och ge den en nivå. Det gör att granskningen hamnar där den behövs: lika granskning av allt blir antingen en flaskhals för rutinsteg eller ett för svagt skydd för de farliga.

| Nivå | Kännetecken | Granskning | Exempel |
|---|---|---|---|
| **Låg** | Intern, går lätt att ångra, ingen annan ser den | Claude gör det själv | Läsa, skapa en kopia i rätt mapp, ändra ett utkast, skapa mejlutkast, kalenderhändelse, loggrad |
| **Mellan** | Syns för andra eller ändrar något delat, men går att ångra | Claude gör det och meddelar (on-the-loop) | Länkdela ett dokument, uppdatera en delad fil |
| **Hög** | Går inte att ångra, går ut till andra eller kostar pengar | Bara efter Kents uttryckliga ja (in-the-loop); i en schemalagd körning aldrig | Skicka mejl, radera, ändra tidigare dokument, dela med namngivna personer, betala |

- Vissa åtgärder ska aldrig göras automatiskt. Skriv in dem som gränser i uppgiftsskillen.
- **Utkast, inte utskick,** när något går till andra människor. Claude skickar aldrig i Kents namn utan uttryckligt ja varje gång, och en schemalagd körning har ingen som kan säga ja.
- **Delning kräver alltid Kents uttryckliga ja första gången;** beslutet skrivs sedan in i uppgiftsskillen.

För varje åtgärd, svara på tre frågor och skriv in svaren i uppgiftsskillen:

1. **Hur ångras den?** Allt ska gå att ångra, t.ex. lägga kopian i papperskorgen, ta bort utkastet, kalenderhändelsen eller loggraden, eller ändra delningen till begränsad. Därför ska rapporten alltid innehålla länkar till allt som skapats: utan länk är det svårt att ångra.
2. **Vad händer om ingen agerar?** Varje gång flödet lämnar något till Kent (ett utkast att skicka, ett protokoll att granska) behövs en tidsgräns och en reservplan. Reservplanen ska vara det **säkra** valet: ingenting går ut till andra av sig självt. Däremot får flödet påminna igen.
3. **Var sitter kontrollpunkten?** Lägg granskningen precis före det steg som inte går att ångra, efter att underlaget är samlat och kontrollerat. Då har Kent allt framför sig när han bestämmer.

**Nödstopp:** för en schemalagd uppgift är nödstoppet att stänga av den (be Claude sätta den som avstängd, eller gör det på sidan för schemalagda uppgifter). Prova någon gång att stoppet fungerar; ett stopp som aldrig har provats kan svika när det behövs.

**Gradvis mer självständighet:** börja försiktigt och lätta på kontrollen när flödet har visat att det fungerar (t.ex. delning med länk nu, som kan skärpas eller lättas senare). Skriv in varje sådant beslut med datum i uppgiftsskillen.

### Fas 6 – Skriv uppgiftsskillen
- Använd mallen nedan. Leverera som .skill-fil (Kents önskemål), med versionsnummer i rubriken. Har skillen referensfiler ska hela mappen ingå.
- Håll SKILL.md under ungefär 500 rader. Blir den längre: flytta detaljer till en referensfil och peka dit.

### Fas 7 – Lägg på triggern
- Först när skillen har körts manuellt och sparats.
- Prompten i en schemalagd uppgift måste vara fristående: varje körning börjar utan minne av konversationen.
- **Håll isär tre utfall** i prompten, så att Kent bara störs när det behövs:
  - **Inget att göra** (ingen ny händelse, redan gjort): avsluta tyst med en enda rad.
  - **Klart:** kort besked med länkar.
  - **Något gick fel** (connector saknas, behörighet nekad, ett steg misslyckades, även delvis): skicka alltid besked som börjar med "FEL:", med vilket steg som misslyckades, vad som redan hann göras (med länkar för att ångra) och vad Kent behöver göra.

  Utan den uppdelningen kan ett fel se ut som "inget att göra", och då märks det inte att flödet har slutat fungera.
- Prova skillen på två–tre realistiska testfall.
- **Provkör** uppgiften en gång efter varje ändring av prompten, helst i ett läge där inget nytt ska hända, så att den tysta vägen och idempotensen prövas utan risk.

### Fas 8 – Ordna besked och påminnelser
- Hur får Kent veta att något är klart, och hur påminns han om det han själv ska göra (t.ex. skicka ett mejlutkast)?
- Anpassa efter hur Kent faktiskt läser sina kanaler: han missar lätt mejl och behöver flera sorters påminnelser. Pushnotis och kalenderhändelse med påminnelser fungerar bättre än mejl till sig själv. SMS går inte att skicka härifrån.
- Koppla påminnelserna till reservplanen i Fas 5b: om Kent inte har agerat när tidsgränsen närmar sig, påminn igen.

### Fas 9 – Lärdomar efter första riktiga körningen
- Titta på resultatet tillsammans (skärmbilder hjälper) och justera detaljer: ämnesrad, signatur, formuleringar, påminnelser.
- Skriv in varje justering i uppgiftsskillen och höj versionsnumret. Generella lärdomar följer tillväxtregeln.
- Uppdatera kopian i GitHub-repot (se Var skillsen finns).

### Fas 10 – Följ upp och förbättra löpande
- Efter några körningar: vad behövde Kent rätta? Lägg in det i skillen och höj versionsnumret.
- **Förändring är inte samma sak som förbättring.** Versionshistoriken visar vad som ändrats. Kör om facit efter större ändringar och skriv resultatet i utvecklingsloggen, till exempel antal rätt av antal testfall. *(prövad i ett flöde)*
- Följ hur ofta Kent ändrar i det flödet lämnar till honom. Ändrar han nästan aldrig något kan kontrollen lättas; ändrar han ofta behöver flödet stramas upp.

## Mall för en ny uppgiftsskill

1. **Trigger** – vad startar flödet (avsändare, ämnesord, bilaga, tid).
2. **Källor** – var underlaget finns.
3. **Mål** – mapp med fast ID, filnamnsmönster, konto.
4. **Steg** – i ordning, inklusive kontroll före och verifiering efter.
5. **Kontroller** – idempotens, rimlighet, avvikelser att flagga.
6. **Connectorer** – tabell över vilka connectorer som används till vad och i vilka steg, så att det syns vilka kopplingar flödet behöver.
7. **Risk, ångra och reservplan** – tabell per åtgärd: riskklass, granskningsnivå, hur den ångras, och vad som händer om ingen agerar. Ange nödstoppet.
8. **Gränser** – vad som aldrig får göras (radera, dela, skicka, skriva utanför mappen).
9. **Rapport** – hur Kent får besked, med de tre utfallen inget att göra, klart och fel, och vad som ska flaggas.

Har flödet privat underlag eller tillstånd, ange under Källor och Mål vilka filer som är publika respektive privata, deras format och formatversion.

Lägg gärna till ett granskningsläge om resultatet fylls i av en människa.

## Var skillsen finns

- **Kontolänkade skills** (sparade från .skill-filer) gäller i alla konversationer men syns bara på skill-sidan i Claude. De är lätta att tappa bort.
- **I GitHub-repot AI-teknik (publikt), på en enda plats:** [`.claude/skills/<namn>/`](https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills), enligt repots AGENTS.md. Där läses skillsen av Claude Code och Cursor, och varje skillmapp har en README för den som läser på GitHub. Git-historiken visar hur skillsen har ändrats version för version. Lärosidan [`Skills/`](https://kentlundgren.github.io/AI-teknik/Skills/) (Del C) beskriver skillsen pedagogiskt och länkar till dem, utan kopior.
- **Vid ny version:** spara .skill-filen (hela skillmappen) på kontot, uppdatera `.claude/skills/<namn>/` i repot, och se efter om lärosidans Del C behöver ändras.
- **Den schemalagda uppgiftens prompt** är en tredje plats. Ändras flödet i skillen, kontrollera om prompten också måste ändras, och visa hela den nya prompten för Kent innan den sparas.
