---
name: langkatekesen-protokoll
description: Skapa protokollembryo (utkast) för styrelsemöten i Långkatekesen Samfällighetsförening när ordföranden skickar en kallelse, och granska ett ifyllt protokoll före justering. Använd när Kent nämner Långkatekesen, samfälligheten, styrelsemöte, kallelse från ordföranden, protokollembryo, "gör protokollembryo", "granska protokollet", eller när en schemalagd uppgift letar efter nya kallelser.
---

# Långkatekesen – protokollembryo och granskning (v6)

Skillen har två lägen:

- **Läge A – Skapa embryo:** när en kallelse till styrelsemöte har kommit från ordföranden.
- **Läge B – Granska protokoll:** när Kent har fyllt i protokollet efter mötet och vill ha det kontrollerat före justering.

Berätta alltid för Kent vad som görs, vad som har gjorts och vad nästa steg är.

## Publik kopia: platshållare

I den här publika kopian står andra ledamöter än Kent med initialer (AE är ordförande), även i mötesplatsen. ID-nummer, kontonamn och ordförandens förnamn är ersatta med platshållare inom klamrar, till exempel `{målmappens ID}`. De riktiga värdena finns i kontoversionen av skillen. Skriv aldrig initialer i protokoll eller mejl där namn ska stå, och gissa aldrig vilka namn de står för. Behöver ett steg ett namn eller ett värde som bara står som initialer eller platshållare: **gissa aldrig**. Utfallet är då FEL, eller så frågar du Kent om han är med i sessionen. Skriv aldrig in de fullständiga namnen eller riktiga värdena i det här repot.

## Fasta uppgifter

| Uppgift | Värde |
|---|---|
| Förening | Långkatekesen Samfällighetsförening |
| Ordförande, avsändare av kallelser | AE, [e-post] |
| Protokollförare | Kent Lundgren (justeras av AE) |
| Ledamöter (sex) | AE, JC, Kent Lundgren, JLM, VE, DF |
| Ledamöternas e-post | Finns i kontoversionen av skillen (tas inte med i det publika repot) |
| Schemalagd uppgift | Varje dag kl. 17:00 (Stockholm) söker efter nya kallelser och kör läge A. Tre utfall: tyst när inget finns att göra, kort besked när något är klart, FEL-besked när något går fel. Dagen före mötet påminner den om mejlutkastet inte är skickat. |
| Påminnelser | Pushnotis när utkasten är klara + kalenderhändelse med påminnelse 1 dag och 1 timme före. SMS går inte. |
| Styrelselogg | Google-kalkylark "Styrelselogg Långkatekesen" i målmappen, ID `{styrelseloggens ID}`. Flikar: Händelser och Ärenden. Delas inte. |
| Delning av embryot | Alla med länken kan redigera (samma som tidigare protokoll; Kents beslut 2026-11-24, kan skärpas senare) |
| Målmapp | {Drive-konto och sökväg till protokollmappen} |
| Målmappens ID | `{målmappens ID}` |
| Filnamn | `ÅÅMMDD_Protokoll_styrelsemöte Långkatekesen` (mötesdatum, t.ex. 261201) |
| Normal mötestid och plats | kväll kl. 19–20 hos JLM |
| Rimligt investeringskapital | 100 000–200 000 kr |
| Konton | Drive- och Docs-connectorerna är kopplade som {Kents Google-konto}. Mappen är delad med det kontot som Redigerare. |

Ledamotslistan och normalvärdena kan ändras (t.ex. efter årsmöte). Om kallelsen nämner andra namn än listan ovan: använd kallelsens namn och flagga skillnaden.

## Connectorer och verktyg

Alla Google-connectorer är kopplade med kontot {Kents Google-konto}.

| Connector | Används till | Steg |
| --- | --- | --- |
| Gmail | Hitta kallelsen och ladda ned bilagan; skapa mejlutkast (aldrig skicka) | A1, A10 |
| Google Drive | Lista målmappen, kopiera senaste protokollet, dela embryot | A3–A5, A9 |
| Google Docs | Läsa och ändra texten i embryot; språkförslag i läge B | A6–A7, B |
| Google Sheets | Skriva rader i styrelseloggen | A13, B9 |
| Google Kalender | Skapa mötet med påminnelser | A11 |
| Pushnotis | Skickas av den schemalagda uppgiften när den är klar (ingen connector) | A12 |

Den schemalagda uppgiften "Långkatekesen – protokollembryo vid kallelse" körs varje dag kl. 17:00. En schemalagd uppgift får de connectorer som fanns när den skapades; kopplas en ny connector senare måste uppgiften skapas om.

## Gränser

- Skapa och ändra bara filer i målmappen ovan. Ändra aldrig tidigare protokoll.
- Radera aldrig filer. Dela bara det nya embryot, och bara enligt delningsregeln ovan.
- Skicka aldrig mejl. Mejl till styrelsen skapas bara som **utkast** i Kents Gmail; Kent läser och skickar själv.
- Skriv aldrig i protokollet att det är framtaget med AI eller liknande.
- Flaggor och avvikelser rapporteras till Kent, de skrivs inte in i protokollet.

## Risk, ångra och reservplan

Riskklassningen följer metaskillen kent-agentiska-arbetsfloden (Fas 5b). Syftet är att flödet ska få göra det som är ofarligt utan att fråga, och att allt som går ut till andra eller inte går att ångra ligger hos Kent.

| Åtgärd | Steg | Risk | Granskning | Så ångras den |
|---|---|---|---|---|
| Läsa mejl, bilaga, mapp och protokoll | A1–A4 | Låg | Claude gör själv | Behövs inte |
| Kopiera protokollet till embryo | A5 | Låg | Claude gör själv | Lägg kopian i papperskorgen |
| Ändra texten i embryot | A6–A7 | Låg | Claude gör själv, verifierar efteråt | Versionshistoriken i Google Docs |
| Länkdela embryot (alla med länken kan redigera) | A9 | Mellan | Claude gör och meddelar (on-the-loop) | Ändra delningen till Begränsad |
| Skapa mejlutkast | A10 | Låg | Claude gör själv | Ta bort utkastet |
| Skicka mejlet till styrelsen | – | Hög | Bara Kent (in-the-loop) | Går inte att ångra |
| Skapa kalenderhändelse | A11 | Låg | Claude gör själv | Ta bort händelsen |
| Skriva rader i styrelseloggen | A13, B9 | Låg | Claude gör själv | Ta bort raderna |
| Språkförslag i protokollet | B8 | Låg | Kent godkänner varje förslag | Avvisa förslaget |
| Radera, ändra tidigare protokoll, dela med namngivna personer | – | Hög | Görs aldrig av flödet | – |

**Om ingen agerar:**
- *Mejlutkastet skickas inte:* kalenderhändelsen påminner en dag och en timme före. Dessutom kontrollerar körningen kl. 17:00 dagen före mötet om utkastet fortfarande ligger kvar oskickat, och skickar då en påminnelse som pushnotis (se A3). Flödet skickar aldrig mejlet självt; det säkra valet är att inget går ut.
- *Protokollet granskas inte efter mötet:* inget händer automatiskt. Rapporten påminner om "granska protokollet ÅÅMMDD".
- *Kallelsen kommer inte:* inget embryo skapas. Det är rätt, eftersom underlaget saknas.

**Nödstopp:** stäng av den schemalagda uppgiften "Långkatekesen – protokollembryo vid kallelse" (be Claude göra det eller gör det på sidan för schemalagda uppgifter). Skillen fungerar då fortfarande manuellt.

## Läge A – Skapa embryo

1. **Hitta kallelsen.** Sök i Gmail: `from:[e-post] subject:kallelse has:attachment newer_than:14d`. Läs tråden och ladda ned bilagan (Word-fil "Kallelse styrelsemöte ÅÅMMDD.docx") och extrahera texten.
2. **Bestäm mötesdatum.** Ta datumet från mejltexten och filnamnet. Jämför med datumet i kallelsens rubrik; ordföranden återanvänder ofta en gammal kallelse, så rubriken kan vara fel. Vid avvikelse: använd mejl/filnamn och flagga.
3. **Kontrollera dubbletter (idempotens).** Lista målmappen. Finns redan en fil som börjar med mötets ÅÅMMDD: skapa inget nytt. Gör sedan bara reservplanskontrollen:
   - Är det **dagen före mötet** (svensk tid)? Kontrollera i ordförandens kallelsetråd om det finns ett mejlutkast från Kent som inte är skickat, och inget skickat svar från {Kents Google-konto} i tråden efter kallelsen.
   - Om ja: avsluta med påminnelsen "Påminnelse Långkatekesen [datum]: mejlutkastet till styrelsen är inte skickat. Ta bort LinkedIn-raden och skicka det." med länk till utkastet och embryot.
   - Annars: inget att göra, avsluta tyst.
   - Påminnelsen skickar aldrig mejlet, den påminner bara Kent. Kents val 2026-11-24.
4. **Hitta senaste protokollet.** Senaste Google-dokumentet i målmappen med namnet `ÅÅMMDD_Protokoll_styrelsemöte Långkatekesen` (inte PDF-filerna "med underskrift"). Läs det.
5. **Kopiera.** Kopiera senaste protokollet till målmappen med det nya filnamnet. Kontrollera att kopian fick rätt mapp och att innehållet följde med.
6. **Gör om kopian till embryo** med Google Docs-connectorn. Ändra bara det som behövs så att format, typsnitt och sidnumrering behålls (använd helst `replaceAllText`; läs dokumentet igen före varje ändring som bygger på positioner):
   - **Rubrik:** nytt datum i formatet ÅÅ-MM-DD, tid från kallelsen.
   - **Närvarande:** alla ledamöter. **Frånvarande:** tom. Kent flyttar själv de som inte kommer.
   - **Föregående protokoll:** länktexten "från den [datum]" med länk till förra protokollet. Behåll länken till Kents [sammanställning av offerter](https://kentlundgren.github.io/Ovrigt/Hemma/laddboxar/ekonomisk_kalkyl.html) så länge laddboxar är en punkt.
   - **Läget gällande ekonomin:** "Vi har ____________ kr som investeringskapital."
   - **Kallelsens punkter** blir rubriker i fetstil, med kallelsens ordalydelse (t.ex. "Laddboxar / extra stämma:").
   - **Pågående frågor:** behåll förra mötets text under rubriken **Från förra mötet ([datum]):** i kursiv stil, följd av en tom rad **Dagens möte:**. Gäller ämnen som återkommer i kallelsen (just nu laddboxar).
   - **Övrigt:** tömt.
   - **Nästa möte:** "Vi har nästa styrelsemöte den ________ kl. 19-20 hos JLM."
   - **Underskriftsrad:** Vid protokollet Kent Lundgren, Justeras AE. Behålls.
7. **Verifiera.** Läs tillbaka dokumentet och kontrollera varje punkt ovan.
8. **Kontroller och flaggor:**
   - Avviker mötestiden från kväll 19–20? Avviker platsen från "hos JLM" (om kallelsen anger plats)? Flagga.
   - Säger kallelsens rubrik, mejlet och filnamnet olika datum? Flagga.
   - Saknas det ledamöter i kallelsen, eller finns nya namn? Flagga.
9. **Dela embryot.** En kopia ärver inte originalets länkdelning. Sätt "alla med länken kan redigera" på det nya embryot och kontrollera behörigheterna efteråt.
10. **Skapa mejlutkast** som svar till alla i ordförandens kallelsetråd (svar på ordförandens meddelande, så att det hamnar i samma tråd), från {Kents Google-konto}:
    - Till: alla ledamöter utom Kent. Hemlig kopia: {Kents Google-konto}.
    - Ämne: "Re: Kallelse styrelsemöte [d mån ÅÅÅÅ]", t.ex. "Re: Kallelse styrelsemöte 1 dec 2026", så att mötet syns i ämnesraden.
    - Skapa utkastet **i ett enda anrop** med `htmlBody` (klickbar länk) och `includeSignature: true`. Uppdatera inte utkastet i efterhand: Gmail tar då bort bilden i signaturen.
    - Skriv **inte** "Hälsningar" i texten: Kents signatur börjar redan med "Hälsningar", följt av bild, namn (länkat till kentlundgren.se), adress, telefon och LinkedIn-länk.
    - Text (anpassa datum och länk):

      > Tack {ordförandens förnamn}!
      >
      > Jag har lagt in dagordningen i ett utkast till protokoll inför mötet den [dag månad]:
      > [Protokollutkast styrelsemöte d mån ÅÅÅÅ] (länk till embryot)
      >
      > I utkastet finns också länk till föregående protokoll ([datum]).

    - Länka till **det nya embryot**, inte till förra protokollet. Skicka aldrig, bara utkast.
    - Påminn Kent om att **ta bort LinkedIn-raden** i signaturen innan han skickar (han tar bort den i föreningsmejl; länken till kentlundgren.se får vara kvar tills vidare).
11. **Kalenderhändelse** i Kents kalender ({Kents Google-konto}): "Styrelsemöte Långkatekesen", mötets datum och tid, plats "Hos JLM" (eller enligt kallelsen). Påminnelser: popup 1 dag och 1 timme före. I beskrivningen: kallelsens fokus, länk till embryot, länk till förra protokollet, länk till sammanställningen av offerter, samt "Kom ihåg: skicka mejlutkastet till styrelsen". Kontrollera först att händelsen inte redan finns.
12. **Pushnotis** till Kents mobil (den schemalagda uppgiftens sammanfattning blir notisen), kort: "Långkatekesen [datum]: protokollutkast och mejlutkast klara. Ta bort LinkedIn-raden och skicka mejlet."
13. **Logga** i styrelseloggen, fliken Händelser, en rad per händelse: kallelse mottagen, embryo skapat och delat, kalenderhändelse skapad, planerat möte. Kolumner: Datum, Händelse, Möte, Av, Länk, Kommentar. Kräver Google Sheets-connectorn; saknas den, skriv i rapporten vilka rader Kent behöver lägga in.
14. **Rapportera** till Kent: länk till embryot, länk till mejlutkastet, kalenderhändelsen, vad som ändrades, eventuella flaggor och nästa steg (granska embryot, skicka mejlet).

## Läge B – Granska protokoll

Kent säger t.ex. "granska protokollet 261201". Läs dokumentet (ändra ingenting om Kent inte ber om det) och kontrollera:

1. **Ekonomin:** luckan är ifylld och beloppet ligger mellan 100 000 och 200 000 kr. Annars flagga (kan vara rätt, men ska bekräftas).
2. **Närvaro:** Närvarande och Frånvarande innehåller tillsammans exakt alla ledamöter, och ingen står på båda ställena.
3. **Luckor:** inga kvarvarande `____`-luckor och inga tomma rubriker som "Dagens möte:" utan text.
4. **Nästa möte:** datum, tid och plats är ifyllda. Flagga om det avviker från kväll 19–20 hos JLM.
5. **Rubriken:** datumet stämmer med filnamnet.
6. **Länkar:** länken under Föregående protokoll går till rätt protokoll.
7. **Från förra mötet:** påminn om att avgöra om den repeterade texten ska vara kvar i det justerade protokollet.
8. **Språk:** stavning, meningsbyggnad, tydlighet och konsekvent stil (t.ex. "X antal" ska bli ett riktigt antal, förkortningar och belopp skrivs likadant). Lägg ändringarna som **förslag** i dokumentet (Docs-läget SUGGEST) så att Kent godkänner eller avvisar dem; ändra aldrig texten direkt. Går förslagsläget inte, lista ändringarna i rapporten.
9. **Logga** granskningen i styrelseloggen, och uppdatera fliken Ärenden med beslut och öppna frågor från protokollet.

Rapportera resultatet som en kort lista: OK eller flagga per punkt, med förslag på åtgärd.

## Loggning i övrigt

- När Kent har skickat mejlet om utkastet, skickat det justerade protokollet, eller fått svar på ett utskick: lägg in en rad i Händelser (datum, länk till mejlet).
- Fliken **Ärenden** följer frågorna, inte personerna: alternativ, beslut, öppna frågor, vem som gör vad, och länkar till underlag. Logga inte hur enskilda ledamöter uttrycker sig eller vad de tycker.
- Loggen är ett register med länkar, inte en kopia av mejl och protokoll.

## Om något går fel

Håll isär tre utfall, så att Kent bara störs när det behövs och så att ett fel aldrig ser ut som "ingen kallelse":

| Utfall | När | Besked |
|---|---|---|
| Inget att göra | Ingen ny kallelse, mötet har passerat, embryot finns redan (och ingen påminnelse behövs) | En enda rad, t.ex. "Långkatekesen: ingen ny kallelse." Ingen sammanfattning i övrigt. |
| Klart | Embryo, utkast, kalender och logg är klara, eller påminnelsen dagen före | Kort besked enligt A12 eller A3, med länkar |
| Fel | En connector saknas, en behörighet nekas, ett verktyg svarar med fel, verifieringen visar att något blev fel, eller ett steg hoppades över | Börja med "FEL: Långkatekesen [datum]". Säg vilket steg som misslyckades och felet i klartext, vad som redan hann göras (med länkar, så att det går att ångra), och vad Kent behöver göra. Försök inte gå runt felet på annat sätt, och fortsätt bara med steg som inte bygger på det som misslyckades. |

Kända fel och åtgärder:

- **Mappen syns inte eller kan inte skrivas till:** delningen till {Kents Google-konto} kan ha tagits bort. Be Kent dela Protokoll-mappen som Redigerare igen.
- **Flera mejlutkast i samma tråd:** Gmail visar bara ett utkast per tråd i trådvyn. Skapa bara ett, och ta bort gamla (med Kents ja).
- **Docs-connectorn saknas:** be Kent koppla Google Docs (med kontot {Kents Google-konto}). Skapa inte ett nytt dokument som ersättning.
- **Ingen bilaga i mejlet:** använd mejltexten och dagordningen från förra protokollet, och flagga att kallelsen saknas.
