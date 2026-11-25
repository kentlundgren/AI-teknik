# Genomarbetat exempel: Långkatekesen (skillen langkatekesen-protokoll)

**Läs när:** Kent vill se ett exempel, eller ett flöde byggs och det behövs en förlaga för hur en fas kan se ut.

Uppgiftsskillen: [langkatekesen-protokoll](../../langkatekesen-protokoll/SKILL.md). I repot är mejladresserna borttagna och andra ledamöters namn ersatta med initialer. ID-nummer och kontonamn är borttagna eller ersatta med platshållare. De riktiga värdena finns bara i kontoversionen.

## Långkatekesen i typläran

- **Typ:** kedja med kontrollpunkter. Stegen i läge A är bestämda och mellan dem finns kontroller (dubblett, datum, verifiering efter ändring).
- **Trigger:** polling via schemalagd uppgift.
- **Routing:** finns mellan läge A och läge B, men Kent gör den själv ("granska protokollet ÅÅMMDD").
- **Läge B** är en granskningsgrind, inte en förbättringsloop: Claude föreslår, Kent bestämmer.
- **Agentiska steg i ett arbetsflöde:** inom vissa steg agerar Claude friare, t.ex. när det senaste protokollet ska hittas eller kallelsens punkter tolkas. Flödet som helhet är ändå ett arbetsflöde, inte en agent.

## Fas för fas

| Fas | Vad som gjordes |
|---|---|
| 1 Mål | Kallelse från AE → protokollembryo i föreningens protokollmapp. Typ: kedja med kontrollpunkter |
| 2 Manuell körning | Mejl och bilaga lästes; tidigare protokoll hittades; namnmönstret ÅÅMMDD_Protokoll_styrelsemöte Långkatekesen upptäcktes |
| 3 Behörigheter | Protokoll-mappen delades med protokollförarens konto som Redigerare; Google Docs kopplades med samma konto |
| 4 Konventioner | Alla närvarande, luckor för belopp och nästa mötesdatum, förra mötets laddboxtext repeteras i kursiv under "Från förra mötet" |
| 5 Kontroller | Dubblettkoll, datum i mejl mot kallelse, tid och plats mot normalt (19–20 hos JLM), belopp 100 000–200 000 kr i granskningsläget |
| 5b Risk | Skapa, ändra, utkast, kalender och logg är låg risk; länkdelning är mellan (görs och meddelas); skicka, radera och ändra tidigare protokoll är hög och görs aldrig av flödet. Reservplan: körningen dagen före mötet påminner om mejlutkastet fortfarande inte är skickat |
| 6 Skill | langkatekesen-protokoll med två lägen: skapa embryo och granska protokoll. Flödet har delning (alla med länken kan redigera) och mejlutkast som svar till alla i ordförandens tråd |
| 7 Trigger | Schemalagd uppgift kl. 17:00 varje dag som söker efter nya kallelser. Tre utfall (tyst, klart, FEL) och provkörning efter ändring |
| 8 Besked | Pushnotis när utkasten är klara; kalenderhändelse med påminnelse 1 dag och 1 timme före |
| 9 Lärdomar | Datum i ämnesraden, signaturen med bild i samma anrop, ingen egen hälsningsfras, klickbar länk, LinkedIn tas bort manuellt |
| 9b Logg | Styrelselogg (kalkylark) med flikarna Händelser och Ärenden; språkgranskning som förslag i läge B |
| 10 Uppföljning | Justera detaljer i embryot efter de första mötena |
