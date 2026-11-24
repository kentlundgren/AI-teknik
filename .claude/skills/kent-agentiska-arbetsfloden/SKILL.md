---
name: kent-agentiska-arbetsfloden
description: Kents playbook (metaskill) för att designa och bygga agentiska arbetsflöden tillsammans med Claude – återkommande uppgifter som Claude utför i flera steg med connectorer, skills och schemalagda uppgifter. Aktivera när Kent vill automatisera något som återkommer ("varje gång jag får…", "känna av när…", "gör det här automatiskt", "skapa en rutin", "schemalagd uppgift"), när han vill bygga en ny uppgiftsskill för ett flöde, när han frågar om skillnaden mellan arbetsflöde och agent, riskklassning, human-in-the-loop eller vad som händer om ingen agerar, eller när han frågar om hur man tänker kring agentiska uppgifter på metanivå. Långkatekesen-protokollen är det genomarbetade exemplet.
---

# Agentiska arbetsflöden – Kents playbook (v6.1)

Den här skillen utför inget jobb själv. Den styr **hur** Kent och Claude tar fram ett nytt arbetsflöde, och den är ett stöd för att Kent ska lära sig mönstret.

## Coachläge (gäller alltid när skillen används)

- Gå igenom flödet **steg för steg**. Säg vid varje steg: vad som görs, vad som har gjorts och vad som är nästa steg.
- Säg vad saker heter på metanivå (se typläran och ordlistan) när de dyker upp.
- Vid varje valpunkt: beskriv alternativen, vilket som väljs och varför. Kent vill påminnas om att det alltid finns flera vägar.
- Fråga Kent när ett val är hans att göra (t.ex. vilket konto, vilken mapp, hur utkastet ska se ut). Gissa inte.
- Förklara *varför* en regel finns, inte bara att den finns. En regel med skäl går att tillämpa på nya fall; en regel utan skäl följs bokstavligt eller inte alls.

Skillen kompletterar:
- **kent-meta-regler** – Kents generella arbetsregler (frågor före start, källor, ingen AI-märkning, versionsnummer i skills).
- **skills-meta-guide** – tekniken bakom skills, agenter och CLAUDE.md.

## Typlära: arbetsflöde eller agent

Båda kallas **agentiska system**. Skillnaden är vem som bestämmer stegen.

| | Arbetsflöde (workflow) | Agent |
|---|---|---|
| Vem styr stegen | Bestämda i förväg, i skillen eller koden | Modellen väljer själv steg och verktyg |
| Passar när | Uppgiften går att dela upp i kända steg | Antalet steg går inte att förutse |
| Fördel | Förutsägbart, lätt att kontrollera och felsöka | Flexibelt, klarar oväntade fall |
| Nackdel | Klarar dåligt det som inte är beskrivet | Dyrare, fel kan förstärka varandra, svårare att granska |

**Tumregel:** börja med det enklaste som fungerar. Ofta räcker ett arbetsflöde, ibland en enda välskriven prompt. Välj en agent först när stegen verkligen inte går att bestämma i förväg, och ge den då ett avbrottsvillkor (t.ex. högst ett visst antal försök) och en plats där den stannar och frågar.

### Vanliga typer av arbetsflöden

| Typ | Så fungerar det | Exempel i Kents vardag |
|---|---|---|
| **Kedja med kontrollpunkter** (prompt chaining med gates) | Fasta steg i ordning, med en kontroll mellan stegen som kan stoppa flödet | Kallelse → kopia → embryo → verifiering → delning → mejlutkast |
| **Routing** | Indata klassas och skickas till rätt delflöde | Email triage sorterar mejl i Urgent, Action Needed, FYI |
| **Parallellisering** | Delar körs samtidigt och vägs ihop, eller samma uppgift körs flera gånger och röstas fram | Söka nätkostnader hos flera nätägare samtidigt |
| **Orkestrerare och arbetare** | En styrande del delar upp uppgiften i delar som inte är kända i förväg och lämnar ut dem | Research över ett okänt antal källor, där varje källa får en egen arbetare |
| **Utvärderare och förbättrare** | En del skriver, en annan bedömer, i en loop tills kriteriet är uppfyllt | Text som skrivs om tills den klarar humanizer-reglerna |

Den gemensamma byggstenen är **modellen med verktyg**: modell + connectorer + minne/skills.

### Långkatekesen i typläran

- **Typ:** kedja med kontrollpunkter. Stegen i läge A är bestämda och mellan dem finns kontroller (dubblett, datum, verifiering efter ändring).
- **Trigger:** polling via schemalagd uppgift.
- **Routing:** finns mellan läge A och läge B, men Kent gör den själv ("granska protokollet ÅÅMMDD").
- **Läge B** är en granskningsgrind, inte en förbättringsloop: Claude föreslår, Kent bestämmer.
- **Agentiska steg i ett arbetsflöde:** inom vissa steg agerar Claude friare, t.ex. när det senaste protokollet ska hittas eller kallelsens punkter tolkas. Flödet som helhet är ändå ett arbetsflöde, inte en agent.

## Ordlista

| Begrepp | Betydelse |
|---|---|
| Agentiskt arbetsflöde | En uppgift som Claude utför i flera steg med verktyg, ofta återkommande. Kallas också automation eller rutin. |
| Agent | Ett system där modellen själv bestämmer stegen och verktygen (se typläran). |
| Trigger | Det som startar flödet, t.ex. "nytt mejl med kallelse". |
| Polling | Att titta efter en händelse med jämna mellanrum, eftersom Claude inte kan väckas av ett mejl. |
| Schemalagd uppgift | En uppgift som körs automatiskt på en tid, t.ex. varje dag kl. 07:40. Varje körning startar en ny session. |
| Connector (MCP) | Kopplingen till en app, t.ex. Gmail, Google Drive eller Google Docs. Ser det som det kopplade kontot ser. |
| Skill | Instruktionen för hur jobbet görs. Schemat bestämmer när, skillen bestämmer hur. |
| Human-in-the-loop | Flödet **väntar** på att en människa godkänner innan det går vidare (blockerande). |
| Human-on-the-loop | Flödet går vidare, människan **får besked** och kan ingripa (inte blockerande). |
| Kontrollpunkt (gate) | En bestämd plats i flödet där kontroll eller godkännande sker, helst precis före steget som inte går att ångra. |
| Riskklass | Låg, mellan eller hög, beroende på om åtgärden går att ångra och om den syns för andra. |
| Reservplan (fallback) | Vad som händer om ingen agerar eller om ett steg misslyckas. Ska vara det säkra valet. |
| Nödstopp | Ett sätt att stoppa flödet direkt, t.ex. att stänga av den schemalagda uppgiften. |
| Idempotens | Att flödet inte skapar dubbletter om det körs två gånger. |
| Least privilege | Att ge agenten bara den åtkomst uppgiften kräver. |
| Validering / guardrail | Rimlighetskontroller och skyddsräcken, t.ex. att ett belopp ligger inom ett intervall. |
| Verifiering | Att läsa tillbaka resultatet efter en ändring i stället för att lita på att verktyget sa "ok". |

## Faserna

### Fas 1 – Beskriv målet och startpunkten
- Vad ska komma ut? Var ska det ligga? Vem läser det?
- Vad är startpunkten (ett mejl, en fil, en tidpunkt)? Visa ett riktigt exempel.
- Placera flödet i typläran: arbetsflöde eller agent, och vilken typ. Det avgör hur mycket som ska bestämmas i förväg.

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
7. **En schemalagd uppgift får de connectorer som fanns när den skapades.** Kopplas en ny connector senare kan uppgiften inte använda den; skapa då en ny uppgift och ta bort den gamla (Kents ja). Koppla därför alla connectorer innan uppgiften skapas.

Tumregel: koppla en connector först när ett konkret steg kräver den (Drive för filer, Docs för att redigera dokument, Sheets för att lägga till rader i en logg).

### Fas 4 – Skriv ner konventionerna
- Filnamn, mappar med fasta ID:n, mallar, vilka uppgifter som återanvänds, vilka luckor som lämnas till människan.
- Utgå från det vanligaste fallet (t.ex. alla närvarande) så att människan har så lite som möjligt att ändra.

### Fas 5 – Lägg in kontroller
- **Före ändring:** finns resultatet redan (idempotens)? Stämmer källorna med varandra?
- **Efter ändring:** läs tillbaka och verifiera.
- **Rimlighet:** intervall, normalvärden, avvikelser att flagga. Bestäm *när* kontrollen kan göras: vissa kan göras först när människan har fyllt i (eget granskningsläge).
- Flaggor rapporteras till Kent; de skrivs inte in i dokumentet.

### Fas 5b – Riskklassa åtgärderna
Risken sitter i **åtgärden**, inte i modellen. Gå igenom varje åtgärd flödet gör och ge den en nivå. Det gör att granskningen hamnar där den behövs: lika granskning av allt blir antingen en flaskhals för rutinsteg eller ett för svagt skydd för de farliga.

| Nivå | Kännetecken | Granskning | Exempel |
|---|---|---|---|
| **Låg** | Intern, går lätt att ångra, ingen annan ser den | Claude gör det själv | Läsa, skapa en kopia i rätt mapp, ändra ett utkast, skapa mejlutkast, kalenderhändelse, loggrad |
| **Mellan** | Syns för andra eller ändrar något delat, men går att ångra | Claude gör det och meddelar (on-the-loop) | Länkdela ett dokument, uppdatera en delad fil |
| **Hög** | Går inte att ångra, går ut till andra eller kostar pengar | Bara efter Kents uttryckliga ja (in-the-loop); i en schemalagd körning aldrig | Skicka mejl, radera, ändra tidigare dokument, dela med namngivna personer, betala |

För varje åtgärd, svara på tre frågor och skriv in svaren i uppgiftsskillen:

1. **Hur ångras den?** T.ex. lägga kopian i papperskorgen, ta bort utkastet, ta bort kalenderhändelsen, ta bort loggraden, ändra delningen till begränsad. Därför ska rapporten alltid innehålla länkar till allt som skapats: utan länk är det svårt att ångra.
2. **Vad händer om ingen agerar?** Varje gång flödet lämnar något till Kent (ett utkast att skicka, ett protokoll att granska) behövs en tidsgräns och en reservplan. Reservplanen ska vara det **säkra** valet: ingenting går ut till andra av sig självt. Däremot får flödet påminna igen.
3. **Var sitter kontrollpunkten?** Lägg granskningen precis före det steg som inte går att ångra, efter att underlaget är samlat och kontrollerat. Då har Kent allt framför sig när han bestämmer.

**Nödstopp:** för en schemalagd uppgift är nödstoppet att stänga av den (be Claude sätta den som avstängd, eller gör det på sidan för schemalagda uppgifter). Prova någon gång att stoppet fungerar; ett stopp som aldrig har provats kan svika när det behövs.

**Gradvis mer självständighet:** börja försiktigt och lätta på kontrollen när flödet har visat att det fungerar (t.ex. delning med länk nu, som kan skärpas eller lättas senare). Skriv in varje sådant beslut med datum i uppgiftsskillen.

### Fas 6 – Skriv uppgiftsskillen
Använd mallen nedan. Leverera som .skill-fil (Kents önskemål), med versionsnummer i rubriken.
- Förklara skälen bakom reglerna i skillen, så att Claude kan tillämpa dem på fall som inte är beskrivna.
- Håll SKILL.md under ungefär 500 rader. Blir den längre: flytta detaljer till en referensfil och peka dit.

### Fas 7 – Lägg på triggern
- Först när skillen har körts manuellt och sparats.
- Prompten i en schemalagd uppgift måste vara fristående: varje körning börjar utan minne av konversationen.
- **Håll isär tre utfall** i prompten, så att Kent bara störs när det behövs:
  - **Inget att göra** (ingen ny händelse, redan gjort): avsluta tyst med en enda rad.
  - **Klart:** kort besked med länkar.
  - **Något gick fel** (connector saknas, behörighet nekad, ett steg misslyckades, även delvis): skicka alltid besked som börjar med "FEL:", med vilket steg som misslyckades, vad som redan hann göras (med länkar för att ångra) och vad Kent behöver göra.
  Utan den uppdelningen kan ett fel se ut som "inget att göra", och då märks det inte att flödet har slutat fungera.
- **Provkör** uppgiften en gång efter varje ändring av prompten, helst i ett läge där inget nytt ska hända, så att den tysta vägen och idempotensen prövas utan risk.

### Fas 8 – Ordna besked och påminnelser
- Hur får Kent veta att något är klart, och hur påminns han om det han själv ska göra (t.ex. skicka ett mejlutkast)?
- Anpassa efter hur Kent faktiskt läser sina kanaler: han missar lätt mejl och behöver flera sorters påminnelser. Pushnotis och kalenderhändelse med påminnelser fungerar bättre än mejl till sig själv. SMS går inte att skicka härifrån.
- Koppla påminnelserna till reservplanen i Fas 5b: om Kent inte har agerat när tidsgränsen närmar sig, påminn igen.

### Fas 9 – Lärdomar efter första riktiga körningen
- Titta på resultatet tillsammans (skärmbilder hjälper) och justera detaljer: ämnesrad, signatur, formuleringar, påminnelser.
- Skriv in varje justering i uppgiftsskillen, och de generella lärdomarna här i metaskillen. Höj versionsnumret.
- Uppdatera kopian i GitHub-repot (se Var skillsen finns).

### Fas 10 – Följ upp och förbättra löpande
- Efter några körningar: vad behövde Kent rätta? Lägg in det i skillen och höj versionsnumret.
- Följ hur ofta Kent ändrar i det flödet lämnar till honom. Ändrar han nästan aldrig något kan kontrollen lättas; ändrar han ofta behöver flödet stramas upp.

## Principer

- **Börja enkelt:** ett arbetsflöde före en agent, och en agent bara när stegen inte går att förutse.
- **Datum i namn och ämne:** allt som skapas (filnamn, ämnesrad, kalenderhändelse) bär datumet för det som avses, så att det går att hitta senare.
- **Utgå från det vanligaste fallet**, så att människan har minst möjligt att ändra.
- **Kontrollera före och verifiera efter** varje ändring.
- **Utkast, inte utskick**, när något går till andra människor.
- **Risken sitter i åtgärden:** granska efter riskklass, inte allt lika.
- **Allt ska gå att ångra**, och rapporten ger länkarna som behövs för det.
- **Det säkra är standardvalet** när ingen agerar.
- **Tyst när inget händer, alltid besked när något går fel.**
- **Visa stegen:** berätta vad som görs, så att det går att följa och granska.
- **Fråga om tider och kanaler** i stället för att anta dem, och förklara varför ett förslag ser ut som det gör.

## Var skillsen finns

- **Kontolänkade skills** (sparade från .skill-filer) gäller i alla konversationer men syns bara på skill-sidan i Claude. De är lätta att tappa bort.
- **I GitHub-repot AI-teknik (publikt), på en enda plats:** [`.claude/skills/<namn>/`](https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills), enligt repots AGENTS.md. Där läses skillsen av Claude Code och Cursor, och varje skillmapp har en README för den som läser på GitHub. Git-historiken visar hur skillsen har ändrats version för version.
  - Uppgiftsskillen `langkatekesen-protokoll` ligger bredvid metaskillen. I det publika repot är ledamöternas mejladresser borttagna; de finns bara i kontoversionen.
  - Lärosidan [`Skills/`](https://kentlundgren.github.io/AI-teknik/Skills/) (Del C) beskriver skillsen pedagogiskt och länkar till dem. Den innehåller inga kopior.
- **Vid ny version:** spara .skill-filen på kontot, uppdatera `.claude/skills/<namn>/` i repot, och se efter om lärosidans Del C behöver ändras.
- **Den schemalagda uppgiftens prompt** är en tredje plats. Ändras flödet i skillen, kontrollera om prompten också måste ändras, och visa hela den nya prompten för Kent innan den sparas.

## Valpunkter med alternativ

| Valpunkt | Alternativ | Att tänka på |
|---|---|---|
| Arbetsflöde eller agent | Fasta steg i skillen · Agent som väljer själv · Blandning: fasta steg med agentiska steg inuti | Fasta steg är lättare att granska; agent bara när stegen inte går att förutse |
| Granskningsnivå per åtgärd | Claude gör själv · Claude gör och meddelar (on-the-loop) · Claude väntar på ja (in-the-loop) · Görs aldrig automatiskt | Utgå från riskklassen i Fas 5b |
| Om ingen agerar | Inget händer · Ny påminnelse före tidsgränsen · Eskalera till annan person · Flödet gör det självt | Det säkra valet är påminnelse; att göra det självt bara för låg risk |
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
| Var lärdomar och källor ligger | I SKILL.md · I en referensfil bredvid | En fil är lättast att hålla i synk; referensfil när SKILL.md närmar sig 500 rader |

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
- **Den schemalagda uppgiften saknade Google Sheets**, eftersom Sheets kopplades efter att uppgiften skapats. Uppgiften fick skapas om.
- **Lista connectorerna i uppgiftsskillen** (tabell: connector, vad den används till, vilka steg), så att det syns vilka kopplingar flödet behöver.
- **Gmail visar bara ett utkast per tråd** i trådvyn, även om flera finns; listan visar "Utkast, Utkast…". Därför ska flödet bara skapa ett.
- **Flera utkast i samma tråd** när man provar sig fram: ta bort de gamla (med Kents ja) så att fel utkast inte skickas.
- **Två kopior i repot**: till och med v6 låg skillsen både i `.claude/skills/` och som läsbara kopior i `Skills/`. Regeln "uppdatera båda i samma commit" skulle hålla dem i takt, men två kopior är otydligt och kan glida isär. Från v6.1 finns en enda kopia i repot, och lärosidan länkar dit. En källa är enklare än en regel som håller två källor i synk.
- **"Avsluta tyst" utan felväg**: den första prompten för Långkatekesen sa bara när den skulle avsluta tyst, inte vad den skulle göra om något gick fel. Ett fel hade då kunnat se ut som "ingen kallelse". Rättat i v6 med tre utfall.

## Mall för en ny uppgiftsskill

1. **Trigger** – vad startar flödet (avsändare, ämnesord, bilaga, tid).
2. **Källor** – var underlaget finns.
3. **Mål** – mapp med fast ID, filnamnsmönster, konto.
4. **Steg** – i ordning, inklusive kontroll före och verifiering efter.
5. **Kontroller** – idempotens, rimlighet, avvikelser att flagga.
6. **Connectorer** – tabell över vilka connectorer som används till vad och i vilka steg.
7. **Risk, ångra och reservplan** – tabell per åtgärd: riskklass, granskningsnivå, hur den ångras, och vad som händer om ingen agerar. Ange nödstoppet.
8. **Gränser** – vad som aldrig får göras (radera, dela, skicka, skriva utanför mappen).
9. **Rapport** – hur Kent får besked, med de tre utfallen inget att göra, klart och fel, och vad som ska flaggas.

Lägg gärna till ett granskningsläge om resultatet fylls i av en människa.

## Genomarbetat exempel: Långkatekesen (skillen langkatekesen-protokoll)

| Fas | Vad som gjordes |
|---|---|
| 1 Mål | Kallelse från Anders Eriksson → protokollembryo i lottakent-driven, Protokoll-mappen. Typ: kedja med kontrollpunkter |
| 2 Manuell körning | Mejl och bilaga lästes; tidigare protokoll hittades; namnmönstret ÅÅMMDD_Protokoll_styrelsemöte Långkatekesen upptäcktes |
| 3 Behörigheter | Protokoll-mappen delades med lundgren.kent som Redigerare; Google Docs kopplades med samma konto |
| 4 Konventioner | Alla närvarande, luckor för belopp och nästa mötesdatum, förra mötets laddboxtext repeteras i kursiv under "Från förra mötet" |
| 5 Kontroller | Dubblettkoll, datum i mejl mot kallelse, tid och plats mot normalt (19–20 hos Johan), belopp 100 000–200 000 kr i granskningsläget |
| 5b Risk | v6: skapa, ändra, utkast, kalender och logg är låg risk; länkdelning är mellan (görs och meddelas); skicka, radera och ändra tidigare protokoll är hög och görs aldrig av flödet. Reservplan: körningen dagen före mötet påminner om mejlutkastet fortfarande inte är skickat |
| 6 Skill | langkatekesen-protokoll med två lägen: skapa embryo och granska protokoll. v2 lade till delning (alla med länken kan redigera) och mejlutkast som svar till alla i Anders tråd |
| 7 Trigger | Schemalagd uppgift kl. 17:00 varje dag som söker efter nya kallelser. v6: tre utfall (tyst, klart, FEL) och provkörning efter ändring |
| 8 Besked | Pushnotis när utkasten är klara; kalenderhändelse med påminnelse 1 dag och 1 timme före |
| 9 Lärdomar | v3: datum i ämnesraden, signaturen med bild i samma anrop, ingen egen hälsningsfras, klickbar länk, LinkedIn tas bort manuellt |
| 9b Logg | v4: Styrelselogg (kalkylark) med flikarna Händelser och Ärenden; språkgranskning som förslag i läge B |
| 10 Uppföljning | Justera detaljer i embryot efter de första mötena |

## Lärt av andra

Principerna nedan kommer från de angivna källorna, jämförda med det Kent redan hade. Inget är kopierat från andras skills; det som togs in är skrivet med Kents egna exempel. Källorna bör kontrolleras mot originalen innan de återanvänds.

| Princip | Källa | Fanns redan i v5 | Nytt i v6 |
|---|---|---|---|
| Skillnad mellan arbetsflöde och agent; fem typer av arbetsflöden | Schluntz och Zhang (2024) | Nej | Typläran |
| Börja enkelt, lägg till komplexitet bara när det ger bättre resultat | Schluntz och Zhang (2024); OpenAI (u.å.) | Delvis (manuell körning först) | Tumregel i typläran, princip |
| Visa planeringsstegen (transparens) | Schluntz och Zhang (2024) | Ja, coachläget | – |
| Dokumentera verktygen lika noga som ett användargränssnitt | Schluntz och Zhang (2024) | Ja, tabellen över connectorer | – |
| Hämta "sanningen" från omgivningen i varje steg | Schluntz och Zhang (2024) | Ja, verifiera efter ändring | – |
| Avbrottsvillkor och ställen där agenten stannar och frågar | Schluntz och Zhang (2024) | Nej | Tumregel i typläran |
| Riskklassa verktyg och åtgärder: låg, mellan, hög, efter läs/skriv, om det går att ångra och ekonomisk påverkan | OpenAI (u.å.); Praveen VR (2026) | Delvis (gränser) | Fas 5b |
| Tre nivåer: självständigt, meddela, godkänna | Amazon Web Services (u.å.) | Delvis (utkast, inte utskick) | Granskningskolumnen i Fas 5b |
| Risken sitter i åtgärden, inte i modellen | Praveen VR (2026) | Nej | Fas 5b, princip |
| Lägg kontrollpunkten precis före det steg som inte går att ångra | Praveen VR (2026) | Delvis (mejlutkast) | Fas 5b fråga 3 |
| Bygg åtgärder så att de går att ångra: mjuk radering, versioner, idempotensnycklar | Praveen VR (2026) | Delvis (idempotens) | Fas 5b fråga 1, princip |
| Tidsgräns och reservplan om ingen svarar; säkert standardval | Amazon Web Services (u.å.) | Nej | Fas 5b fråga 2, Fas 8, valpunkt |
| Mänsklig inblandning vid upprepade fel och högriskåtgärder | OpenAI (u.å.) | Nej | FEL-utfallet i Fas 7 |
| In-the-loop blockerar, on-the-loop gör det inte; dela upp efter åtgärd | Arize AI (2026) | Nej (bara human-in-the-loop) | Ordlistan, valpunkt |
| Ha ett nödstopp och prova det | Arize AI (2026) | Nej | Fas 5b |
| Logga vem som beslutade, när och varför | Amazon Web Services (u.å.); Praveen VR (2026) | Delvis (styrelseloggen) | – (räcker för Kents flöden) |
| Följ hur ofta människan ändrar för att strama upp eller lätta på kontrollen | Praveen VR (2026) | Delvis (Fas 10) | Fas 10 |
| Gradvis mer självständighet när förtroendet växer | Amazon Web Services (u.å.) | Delvis (delningen kan skärpas) | Fas 5b |
| Förklara varför i stället för ALLTID och ALDRIG | Anthropic (u.å.), skill-creator | Nej | Coachläget, Fas 6 |
| Håll SKILL.md kort (under cirka 500 rader), detaljer i referensfiler | Anthropic (u.å.), skill-creator | Nej | Fas 6, valpunkt |
| Prova skillen på två–tre realistiska testfall | Anthropic (u.å.), skill-creator | Delvis (manuell körning) | Provkörning i Fas 7 |
| Minsta mall: bara namn och beskrivning krävs | Anthropic (u.å.), template-skill | Kents mall är mer utförlig | Medvetet val: de nio delarna behålls |

### Källor

Amazon Web Services (u.å.) *AGENTREL02-BP05 Establish tiered human oversight and approval workflows*. Agentic AI Lens, AWS Well-Architected Framework. Tillgänglig på: [https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentrel02-bp05.html](https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentrel02-bp05.html) (Hämtad: 24 november 2026). *(Bästa praxis för granskning i nivåer – självständigt, meddela, godkänna – med tidsgränser och säkra standardval; underlag för Fas 5b.)*

Anthropic (u.å.) *anthropics/skills* [GitHub-repo], särskilt [skills/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) och [template](https://github.com/anthropics/skills/tree/main/template). Tillgänglig på: [https://github.com/anthropics/skills](https://github.com/anthropics/skills) (Hämtad: 24 november 2026). *(Anthropics exempelskills, bland annat skill-creator och template; underlag för hur en skill skrivs, hålls kort och testas.)*

Arize AI (2026) *What is human-on-the-loop?* Senast ändrad 14 augusti 2026. Tillgänglig på: [https://arize.com/glossary/human-on-the-loop/](https://arize.com/glossary/human-on-the-loop/) (Hämtad: 24 november 2026). *(Ordlisteartikel om skillnaden mellan blockerande in-the-loop och icke-blockerande on-the-loop, och om nödstopp.)*

OpenAI (u.å.) *A practical guide to building agents* [PDF]. Tillgänglig på: [https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) (Hämtad: 24 november 2026). *(Guide om när en agent behövs, riskklassning av verktyg och när människan ska kopplas in.)*

Praveen VR (2026) 'Designing Human-in-the-Loop Approval Gates for Enterprise AI Agents', *DZone*, 18 september. Tillgänglig på: [https://dzone.com/articles/human-in-the-loop-approval-enterprise-ai-agents](https://dzone.com/articles/human-in-the-loop-approval-enterprise-ai-agents) (Hämtad: 24 november 2026). *(Artikel om godkännandegrindar, risknivåer per åtgärd och hur åtgärder görs möjliga att ångra.)*

Schluntz, E. och Zhang, B. (2024) *Building effective agents*. Anthropic, 19 december. Tillgänglig på: [https://www.anthropic.com/engineering/building-effective-agents](https://www.anthropic.com/engineering/building-effective-agents) (Hämtad: 24 november 2026). *(Grundtexten om skillnaden mellan arbetsflöde och agent och de fem typerna av arbetsflöden; underlag för typläran.)*
