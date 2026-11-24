---
name: kent-agentiska-arbetsfloden
description: Kents playbook (metaskill) för att designa och bygga agentiska arbetsflöden tillsammans med Claude – återkommande uppgifter som Claude utför i flera steg med connectorer, skills och schemalagda uppgifter. Aktivera när Kent vill automatisera något som återkommer ("varje gång jag får…", "känna av när…", "gör det här automatiskt", "skapa en rutin", "schemalagd uppgift"), när han vill bygga en ny uppgiftsskill för ett flöde, eller när han frågar om hur man tänker kring agentiska uppgifter på metanivå. Långkatekesen-protokollen är det genomarbetade exemplet.
---

# Agentiska arbetsflöden – Kents playbook (v4)

Den här skillen utför inget jobb själv. Den styr **hur** Kent och Claude tar fram ett nytt arbetsflöde, och den är ett stöd för att Kent ska lära sig mönstret.

## Coachläge (gäller alltid när skillen används)

- Gå igenom flödet **steg för steg**. Säg vid varje steg: vad som görs, vad som har gjorts och vad som är nästa steg.
- Säg vad saker heter på metanivå (se ordlistan) när de dyker upp.
- Vid varje valpunkt: beskriv alternativen, vilket som väljs och varför. Kent vill påminnas om att det alltid finns flera vägar.
- Fråga Kent när ett val är hans att göra (t.ex. vilket konto, vilken mapp, hur utkastet ska se ut). Gissa inte.

Skillen kompletterar:
- **kent-meta-regler** – Kents generella arbetsregler (frågor före start, källor, ingen AI-märkning, versionsnummer i skills).
- **skills-meta-guide** – tekniken bakom skills, agenter och CLAUDE.md.

## Ordlista

| Begrepp | Betydelse |
|---|---|
| Agentiskt arbetsflöde | En uppgift som Claude utför i flera steg med verktyg, ofta återkommande. Kallas också automation eller rutin. |
| Trigger | Det som startar flödet, t.ex. "nytt mejl med kallelse". |
| Polling | Att titta efter en händelse med jämna mellanrum, eftersom Claude inte kan väckas av ett mejl. |
| Schemalagd uppgift | En uppgift som körs automatiskt på en tid, t.ex. varje dag kl. 07:40. Varje körning startar en ny session. |
| Connector (MCP) | Kopplingen till en app, t.ex. Gmail, Google Drive eller Google Docs. Ser det som det kopplade kontot ser. |
| Skill | Instruktionen för hur jobbet görs. Schemat bestämmer när, skillen bestämmer hur. |
| Human-in-the-loop | Att en människa granskar eller godkänner innan resultatet används. |
| Idempotens | Att flödet inte skapar dubbletter om det körs två gånger. |
| Least privilege | Att ge agenten bara den åtkomst uppgiften kräver. |
| Validering / guardrail | Rimlighetskontroller och skyddsräcken, t.ex. att ett belopp ligger inom ett intervall. |
| Verifiering | Att läsa tillbaka resultatet efter en ändring i stället för att lita på att verktyget sa "ok". |

## Faserna

### Fas 1 – Beskriv målet och startpunkten
- Vad ska komma ut? Var ska det ligga? Vem läser det?
- Vad är startpunkten (ett mejl, en fil, en tidpunkt)? Visa ett riktigt exempel.

### Fas 2 – Kör flödet manuellt en gång
- Gör uppgiften tillsammans, steg för steg, på ett riktigt fall.
- Det är här konventioner, behörighetsproblem och fallgropar upptäcks. Skriv inte skillen före det här steget.

### Fas 3 – Ordna behörigheter
- Vilka connectorer behövs (läsa, skapa, redigera)? Vilket konto ska de vara kopplade som?
- Välj den smalaste åtkomsten som räcker (least privilege).
- Skilj på **plats** (var en fil ligger) och **ägare** (vem som skapade den) i Google Drive.

#### Koppla en ny connector – steg för steg
Så gick det till med Google Docs och Google Sheets:
1. Claude letar i connector-registret och lägger fram ett kopplingskort i chatten.
2. Kent klickar på **Koppla** på kortet.
3. Kent väljer **samma Google-konto** som de andra connectorerna (lundgren.kent@gmail.com). Annat konto ger andra filer och bredare åtkomst än nödvändigt.
4. Kent godkänner behörigheterna på Googles sida.
5. Sidan "Slutför i skrivbordsappen" kan dyka upp. Knappen "Öppna skrivbordsapp" verkar ibland inte göra något, men kopplingen kan ändå vara klar.
6. Kent skriver "klart". Claude kontrollerar att connectorn är kopplad och att de nya verktygen syns, och provar med en läsning innan något skrivs.
7. Schemalagda uppgifter får tillgång till nya connectorer; kontrollera ändå i uppgiftens inställningar.

Tumregel: koppla en connector först när ett konkret steg kräver den (Drive för filer, Docs för att redigera dokument, Sheets för att lägga till rader i en logg).

### Fas 4 – Skriv ner konventionerna
- Filnamn, mappar med fasta ID:n, mallar, vilka uppgifter som återanvänds, vilka luckor som lämnas till människan.
- Utgå från det vanligaste fallet (t.ex. alla närvarande) så att människan har så lite som möjligt att ändra.

### Fas 5 – Lägg in kontroller
- **Före ändring:** finns resultatet redan (idempotens)? Stämmer källorna med varandra?
- **Efter ändring:** läs tillbaka och verifiera.
- **Rimlighet:** intervall, normalvärden, avvikelser att flagga. Bestäm *när* kontrollen kan göras: vissa kan göras först när människan har fyllt i (eget granskningsläge).
- Flaggor rapporteras till Kent; de skrivs inte in i dokumentet.

### Fas 6 – Skriv uppgiftsskillen
Använd mallen nedan. Leverera som .skill-fil (Kents önskemål), med versionsnummer i rubriken.

### Fas 7 – Lägg på triggern
- Först när skillen har körts manuellt och sparats.
- Prompten i en schemalagd uppgift måste vara fristående: varje körning börjar utan minne av konversationen.

### Fas 8 – Ordna besked och påminnelser
- Hur får Kent veta att något är klart, och hur påminns han om det han själv ska göra (t.ex. skicka ett mejlutkast)?
- Anpassa efter hur Kent faktiskt läser sina kanaler: han missar lätt mejl och behöver flera sorters påminnelser. Pushnotis och kalenderhändelse med påminnelser fungerar bättre än mejl till sig själv. SMS går inte att skicka härifrån.

### Fas 9 – Lärdomar efter första riktiga körningen
- Titta på resultatet tillsammans (skärmbilder hjälper) och justera detaljer: ämnesrad, signatur, formuleringar, påminnelser.
- Skriv in varje justering i uppgiftsskillen, och de generella lärdomarna här i metaskillen. Höj versionsnumret.
- Uppdatera kopian i GitHub-repot (se Var skillsen finns).

### Fas 10 – Följ upp och förbättra löpande
- Efter några körningar: vad behövde Kent rätta? Lägg in det i skillen och höj versionsnumret.

## Principer

- **Datum i namn och ämne:** allt som skapas (filnamn, ämnesrad, kalenderhändelse) bär datumet för det som avses, så att det går att hitta senare.
- **Utgå från det vanligaste fallet**, så att människan har minst möjligt att ändra.
- **Kontrollera före och verifiera efter** varje ändring.
- **Utkast, inte utskick**, när något går till andra människor.
- **Fråga om tider och kanaler** i stället för att anta dem, och förklara varför ett förslag ser ut som det gör.

## Var skillsen finns

- **Kontolänkade skills** (sparade från .skill-filer) gäller i alla konversationer men syns bara på skill-sidan i Claude. De är lätta att tappa bort.
- **I GitHub-repot AI-teknik (publikt):**
  - Primärt i [`.claude/skills/`](https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills), enligt repots AGENTS.md. Där läses de av Claude Code och Cursor när Kent arbetar i repot.
  - Läsbara kopior i [`Skills/`](https://github.com/kentlundgren/AI-teknik/tree/main/Skills), med en README per skill. Git-historiken visar hur skillsen har ändrats version för version.
  - Uppgiftsskillen `langkatekesen-protokoll` ligger bredvid metaskillen på båda ställena. I det publika repot är ledamöternas mejladresser borttagna; de finns bara i kontoversionen.
- **Vid ny version:** spara .skill-filen på kontot och uppdatera båda platserna i repot i samma commit, så att de inte glider isär.

## Valpunkter med alternativ

| Valpunkt | Alternativ | Att tänka på |
|---|---|---|
| Trigger | Schemalagd uppgift som söker (polling) · Kent startar själv · Gmail-filter med etikett + schemalagd sökning efter etiketten | Schema är automatiskt; manuell start är enklast; etikett tål att ämnesraden ändras |
| Åtkomst till delad Drive | Dela en mapp med det kopplade kontot · Koppla connectorn som det andra kontot · Webbläsaren | Delad mapp ger smalast åtkomst |
| Redigera ett Google-dokument | Google Docs-connectorn · Skapa ett nytt dokument via Drive · Webbläsaren | Docs-connectorn behåller samma fil och länk |
| Skapa underlaget | Kopiera förra dokumentet och ändra · Skapa nytt från mall · Skapa från grunden | Kopiering behåller format och typsnitt |
| Ändra text | `replaceAllText` (inga positioner) · Positionsbaserad insättning | Ersätt bara det som ändras; läs om dokumentet före varje positionsändring |
| När kontroller görs | När utkastet skapas · I ett granskningsläge efter ifyllnad | Belopp och närvaro kan bara kontrolleras efter ifyllnad |
| Besked till Kent | Meddelande i chatten · Pushnotis · Mejl · Kalenderhändelse | Mejl bara om Kent har bett om det |
| Delning av resultatet | Alla med länken (läsa eller redigera) · Namngivna personer via e-post · Kent delar själv | Länkdelning är enklast och fungerar för alla mottagare, men vem som helst med länken kommer åt filen. Namngiven delning är säkrare men har krånglat tidigare och skickar delningsmejl från Google. Delning kräver alltid Kents uttryckliga ja första gången; beslutet skrivs sedan in i uppgiftsskillen. Påminn Kent om att valet kan skärpas senare. |
| Besked och påminnelser | Pushnotis · Kalenderhändelse med påminnelser · Mejl till sig själv · Bara i chatten | Välj efter hur personen läser sina kanaler. Kent: push + kalender. SMS finns inte som kanal. |
| Signatur i mejlutkast | Gmail-signaturen (`includeSignature`) i samma anrop · Egenbyggd signatur i HTML | Gmail-signaturen behåller bilden; en egenbyggd eller i efterhand ändrad signatur tappar externa bilder. Rader som ska bort (t.ex. LinkedIn) tar Kent bort själv. |
| Tidpunkt för schemalagd uppgift | Jämn tid (t.ex. 17:00) · "Ojämn" tid (t.ex. 16:47) | Många uppgifter startar på hel timme, så en ojämn minut kan gå snabbare. Det är en teknisk optimering; följ Kents val och förklara skälet. |
| Loggning | Kalkylark med flikar för händelser och ärenden · Claudes minne · Logg i ett repo · Ingen logg (sök i Gmail) | Ett register med länkar räcker. Följ frågorna, inte personerna. Publika repon passar inte för föreningens interna diskussioner. Automatisk loggning i ett Google-kalkylark kräver Google Sheets-connectorn. |
| Språkgranskning | Förslag i dokumentet (suggestion mode) · Lista i chatten · Direkta ändringar | Förslag låter Kent godkänna varje ändring; direkta ändringar bara om han ber om det |
| Utskick till andra | Utkast som Kent skickar själv · Claude skickar direkt · Inget utskick | Utkast är standard: Claude skickar aldrig i Kents namn utan uttryckligt ja varje gång, och en schemalagd körning har ingen som kan säga ja |

## Fallgropar (upplevda)

- **Mappen var inte delad**, bara enskilda filer: connectorn såg filerna men kunde inte skapa i mappen. Lösning: dela mappen som Redigerare.
- **Kopian hade hamnat i fel mapp** om den gjorts innan mappen var delad (Drive lägger den då i kontots rot). Kontrollera skrivrätt först.
- **Drive-connectorn kan inte redigera innehåll** i ett Google-dokument. Det kräver Google Docs-connectorn. Samma sak för kalkylark: Drive kan skapa ett genom uppladdning, men att lägga till rader kräver Google Sheets-connectorn.
- **Källor kan motsäga varandra**: kallelsens rubrik hade ett gammalt datum medan mejl och filnamn var rätt. Bestäm vilken källa som gäller och flagga avvikelsen.
- **Ägare kontra plats**: en fil som kopieras via Kents konto ägs av Kent även om den ligger i Lottas mapp.
- **En kopia ärver inte länkdelningen**: förra protokollet var delat med "alla med länken", men kopian var bara delad med Kent och Lotta. Ett mejl med länken hade gett mottagarna "Behörighet krävs". Kontrollera alltid delningen innan en länk skickas till andra.
- **Exempeltexter kan innehålla gamla länkar**: Kents exempelmejl länkade till förra protokollet. Fråga vad länken ska peka på.
- **Dubbel hälsningsfras**: Kents signatur börjar med "Hälsningar". Skriv inte en egen.
- **Bilden i signaturen försvann** när utkastet uppdaterades i efterhand (Gmail rensar externa bilder). Skapa utkastet rätt i ett enda anrop.
- **Länk i ren text blev en lång omdirigeringsadress.** Använd HTML med en klickbar länktext.
- **Ändrad ämnesrad** kan göra att svaret hamnar i en egen tråd hos mottagarna.
- **Gmail visar bara ett utkast per tråd** i trådvyn, även om flera finns; listan visar "Utkast, Utkast…". Därför ska flödet bara skapa ett.
- **Flera utkast i samma tråd** när man provar sig fram: ta bort de gamla (med Kents ja) så att fel utkast inte skickas.

## Mall för en ny uppgiftsskill

1. **Trigger** – vad startar flödet (avsändare, ämnesord, bilaga, tid).
2. **Källor** – var underlaget finns.
3. **Mål** – mapp med fast ID, filnamnsmönster, konto.
4. **Steg** – i ordning, inklusive kontroll före och verifiering efter.
5. **Kontroller** – idempotens, rimlighet, avvikelser att flagga.
6. **Gränser** – vad som aldrig får göras (radera, dela, skicka, skriva utanför mappen).
7. **Rapport** – hur Kent får besked och vad som ska flaggas.

Lägg gärna till ett granskningsläge om resultatet fylls i av en människa.

## Genomarbetat exempel: Långkatekesen (skillen langkatekesen-protokoll)

| Fas | Vad som gjordes |
|---|---|
| 1 Mål | Kallelse från Anders Eriksson → protokollembryo i lottakent-driven, Protokoll-mappen |
| 2 Manuell körning | Mejl och bilaga lästes; tidigare protokoll hittades; namnmönstret ÅÅMMDD_Protokoll_styrelsemöte Långkatekesen upptäcktes |
| 3 Behörigheter | Protokoll-mappen delades med lundgren.kent som Redigerare; Google Docs kopplades med samma konto |
| 4 Konventioner | Alla närvarande, luckor för belopp och nästa mötesdatum, förra mötets laddboxtext repeteras i kursiv under "Från förra mötet" |
| 5 Kontroller | Dubblettkoll, datum i mejl mot kallelse, tid och plats mot normalt (19–20 hos Johan), belopp 100 000–200 000 kr i granskningsläget |
| 6 Skill | langkatekesen-protokoll med två lägen: skapa embryo och granska protokoll. v2 lade till delning (alla med länken kan redigera) och mejlutkast som svar till alla i Anders tråd |
| 7 Trigger | Schemalagd uppgift kl. 17:00 varje dag som söker efter nya kallelser |
| 8 Besked | Pushnotis när utkasten är klara; kalenderhändelse med påminnelse 1 dag och 1 timme före |
| 9 Lärdomar | v3: datum i ämnesraden, signaturen med bild i samma anrop, ingen egen hälsningsfras, klickbar länk, LinkedIn tas bort manuellt |
| 9b Logg | v4: Styrelselogg (kalkylark) med flikarna Händelser och Ärenden; språkgranskning som förslag i läge B |
| 10 Uppföljning | Justera detaljer i embryot efter de första mötena |
