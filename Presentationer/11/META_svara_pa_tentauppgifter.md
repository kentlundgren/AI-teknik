# Metanivå: vad som är svårt när en AI läser av och löser tentauppgifter

**Namn:** META_svara_pa_tentauppgifter
**Plats:** `AI-teknik/Presentationer/11/META_svara_pa_tentauppgifter.md`
**Skapad:** 2026-11-01
**Version:** 1
**Författare:** Claude (språkmodell), på Kent Lundgrens begäran. Arbetsdokument: texten är min egen reflektion, inte Kents, och är inte avsedd att publiceras i hans namn utan att han läst och bestämt det.
**Gäller:** tentan [endimensionell_analys_LTH_261030.pdf](endimensionell_analys_LTH_261030.pdf), guiden [prototyp_alla_uppgifter.html](prototyp_alla_uppgifter.html) och kontrollerna [kontroll_oberoende.py](kontroll_oberoende.py) och [kontroll_med_sympy.py](kontroll_med_sympy.py).

Kent bad mig vara ärlig och transparent om vad som är svårt, vad som kan gå fel och var jag kan ha fel. Här är mitt försök. Jag skriver "jag" om mig själv, språkmodellen.

## 1. Det första momentet är att läsa av PDF:en, och det har en egen felrisk

Tentan är en skannad bild utan textlager. Jag får alltså sidorna som bilder och tolkar dem; ingen separat teckenigenkänning kontrollerar mig. Det jag gjorde: jag renderade sidorna först i 110 punkter per tum och sedan i 220, beskar ut varje uppgift och läste om den. Tentan och guiden har jag jämfört på några enkla sätt: antalet delfrågor stämmer med tentans text ("sex" i uppgift 1), måtten i figurerna stämmer med måtten i texten (6 × 9 dm, 20 × 30 cm), och poängreglerna går ihop.

**Det jag inte kan utesluta:**
- **Små tecken och index.** Skillnaden mellan `³ˣ` och `3x`, mellan ett minustecken och ett tankstreck, och mellan `x²` och `x₂` avgörs av några få bildpunkter. I 5a läser jag `3^x`. Om det i själva verket vore `3x` blir gränsvärdet oändligt.
- **Skrivsätt.** I 1c står `²log` (tvålogaritmen). Jag tolkar det som logaritm med bas 2, vilket är svensk skolnotation. Läser man det som något annat blir svaret ett annat.
- **Figurer.** Uppgift 6 och 9 beror på figurerna. Jag har läst av att längs sidan 9 ligger `h, b, h, b, h` och längs sidan 6 ligger `h, ℓ, h`, och att `A′` hamnar på `BC` med `P` på `AD` och `Q` på `AB`. Det är min tolkning av en ritning; en annan läsare kan se något annat.
- **Gemensam felläsning.** Min avläsning och mina senare kontroller bygger på samma tolkning. Om jag läst något fel kommer alla kontroller att bekräfta det felet. Den enda riktigt oberoende kontrollen av avläsningen är Kents egen jämförelse mot PDF:en. Han har bekräftat uppgift 1 och 2; uppgift 3–9 är ännu inte bekräftade av honom.

Kent frågade om avläsningen är det svåraste momentet. Delvis: det är det moment där jag har minst möjlighet att kontrollera mig själv, och där ett litet fel får störst följder. Själva matematiken är ofta lättare att kontrollera än bilden.

## 2. Vad som är svårt i själva lösningen

Per uppgift, med det jag bedömer som mest riskfyllt:

| Uppgift | Vad som kan gå fel |
|---|---|
| 1d | Att multiplicera med `x + 1` utan att tänka på tecknet. Ger svaret `x < 1/3` i stället för `−1 < x < 1/3`. |
| 1f | Glömd inre derivata, eller fel värde på `arctan √3` (det är `π/3`). |
| 2 | Att ta med falska rötter från andragradsekvationerna. Rötterna 0, 9 och −1 hör inte till sina fall. |
| 3a | Vilken definition kursboken använder. Jag har inte kontrollerat kursbokens formulering. |
| 3b | Att skriva `5x⁴` utan härledning; tentan säger "härled". |
| 4 | Att glömma `x > 0`, att räkna `f(4)` fel, och att påstå en sned asymptot utan att pröva den. |
| 5a | Jämförelsen `e^x` mot `3^x` och hur mycket som måste motiveras ("exponentialfunktioner växer snabbare än potenser" är en standardsats som jag hänvisar till, inte bevisar). |
| 6 | Att läsa av sambanden ur figuren, och att motivera att det är ett maximum och inte bara ett stationärt värde. |
| 7 | Ingen figur följer med. Uppgiften kräver bisektrissatsen och cosinussatsen utan formelsamling. |
| 8 | Att derivera formellt och missa att derivatan inte finns i `kπ/2`. Det räcker inte att derivatan är odefinierad; man måste visa att vänster- och högerlutningen skiljer sig. |
| 9 | Att välja en bra variabel (vinkeln `θ`), att inse att vikningen bevarar längder, och att kontrollera att optimum är genomförbart. |

**Allmänt riskfyllt för mig:** långa kedjor där ett tecken kan slinka fel, och uppgifter som bygger på en figur. Rutinräkning (derivata, gränsvärde, olikhet) är sällan problemet; det är val av metod, definitionsområden och fallgropar.

## 3. Vad "att jag kontrollerat svaret" betyder och inte betyder

Jag har kontrollerat varje slutsvar med minst en metod som skiljer sig från handräkningen: insättning i den ursprungliga frågan, genomsökning av tusentals punkter, konstruktion av triangeln i uppgift 7, och sympy. Se Tabell 2 i guiden och [kontroll_oberoende.py](kontroll_oberoende.py) (21 av 21 kontroller OK).

**Gränser:**
1. **Numerik är inte bevis.** En genomsökning av punkter visar att ett svar stämmer i de punkter jag prövat, inte att det stämmer överallt. Den ger mig förtroende, inte ett bevis.
2. **Samma författare, samma tolkning.** Metoderna är olika, men det är jag som valt dem och jag som tolkat uppgiften. Det gör kontrollen svagare än om en annan person räknat.
3. **Ett test kan vara felkonstruerat.** Ett gränsvärde prövat i en enda punkt säger lite. I 5a är kvoten vid `x = 60` ännu 0,0135, eftersom `(e/3)^x` inte hunnit bli liten, och ett test som kräver ett värde nära 0 där ger falskt larm. Kontrollen måste pröva flera punkter, långt ut, och jämföras med ett svar som härletts på annat sätt. Det gäller åt båda hållen: ett test kan också godkänna ett felaktigt svar.
4. **Verktygets utdata måste granskas.** I test 1 i `10` gav sympy ett komplext uttryck som var matematiskt rätt men inte i den form man väntar sig.
5. **Inget facit.** I test 1 i `10` fanns en officiell lösningsskiss. För den här tentan har jag inte hittat något lösningsförslag från LTH. Mina svar är därför inte jämförda med någon rättare.
6. **Motiveringar och poäng är okontrollerade.** Tentan kräver "ordentliga motiveringar". Jag har kontrollerat slutsvar. Hur mycket poäng en skriven lösning ger avgör en rättare, och det har ingen gjort.

## 4. Skillnader mellan mig och en student

Jag har ingen tidspress, kan köra kod och pröva tusentals fall, och kan förklara flytande. Studenten har fem timmar, inga hjälpmedel och tentanervositet. Därför är mina svårighetsbetyg för "student" gissningar. De bygger på min bedömning av hur många steg och val en uppgift kräver, inte på uppgifter om hur studenter faktiskt klarat uppgifterna.

## 5. Det jag skrivit i guiden som är min åsikt, inte en kontrollerad fakta

- **"Vanligt fel"-rutorna** beskriver vad jag tror är typiska fel. De bygger på allmän kunskap om hur sådana uppgifter brukar misslyckas, inte på data från LTH. Före publicering bör rubriken ändras till något som "typiska fallgropar", eller så ska de styrkas.
- **Svårighetsbetygen** (1–5) är min bedömning.
- **Ledtrådarna och delstegen** har jag formulerat själv. Slutsvaren är kontrollerade, men om en ledtråd är pedagogiskt bra har jag inte prövat på någon läsare.
- **Påståendet att en uppgift är "överbetygsuppgift"** kommer ur tentans egen indelning, inte från mig.

## 6. Flytande text är inte samma sak som rätt text

En förklaring från mig kan låta självsäker och vara fel. Det är en av de viktigaste sakerna att veta om att läsa en AI:s lösning. Skyddet är det som guiden försöker bygga in: läsaren ska kunna pröva sitt svar själv, se en kontroll på ett andra sätt, och jämföra mot kursboken. Sidan säger därför öppet att svaren är kontrollerade mot angivna metoder men inte granskade av någon utomstående, och att läsaren ska kontrollera mot källan.

## 7. Vad jag bett Kent göra, och vad som återstår

1. **Bekräfta avläsningen** av uppgift 3–9 mot PDF:en (uppgift 1 och 2 är bekräftade).
2. **Klargöra om frågorna får återges publikt.** Tentan kommer från Kents son, vilket visar att den finns hos Kent, inte att LTH tillåter publicering.
3. **Låta en person med kunskap om kursen läsa guidens lösningar**, helst en lärare eller en student som läst kursen, för att pröva ledtrådarna och motiveringarna.
4. **Kontrollera 3a mot kursboken** (Månsson och Nordbeck, *Endimensionell analys*, 2011, enligt kursplanen för 2019/20).
5. **Om LTH publicerar ett lösningsförslag:** jämför mina svar med det och notera eventuella skillnader öppet.

## Ändringslogg

- **v1 (2026-11-01):** första version.
