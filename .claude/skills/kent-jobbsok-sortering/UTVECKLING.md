# Utvecklingslogg för jobbsökaragenten (kent-jobbsok-sortering)

Nyast överst. Varje rad säger vad som iakttogs, vad som ändrades och vilken
effekt det fick. Loggen är publik och innehåller bara generella iakttagelser och
sammanräknade resultat. Enskilda annonser och bedömningar ligger privat.

## Logg

| Datum | Version | Fas | Iakttagelse | Ändring | Effekt |
|---|---|---|---|---|---|
| 2026-11-25 | 0.3 | 7 | Reglerna i 0.2 kunde ge en dag utan förslag, men människans mål är att söka ett jobb per arbetsdag och välja bland tre | Varje körning visar de tre lämpligaste öppna jobben, nya och tidigare visade på lika villkor, med rangordning, märkta reserver, antal visningar, lägestabell och svarskommandon. Utfallet INGET NYTT ersatt av KLART MED FÄRRE. Urvalsreglerna står bara i skillen, och uppgiftens instruktion är kortare | Inte provkört |
| 2026-11-25 | 0.2 | 7 | En körning utan nya annonser visade samma tre jobb som förslag och försökte skicka notis | Nytt och visat tidigare hålls isär. KLART kräver något nytt eller en första påminnelse inom tre dagar. Ej presenterade bra jobb förs till kandidatlistan innan de markeras sedda | Reglerna inte provkörda |
| 2026-11-25 | 0.2 | 7 | Förslag byggde på sparade annonstexter utan att annonsen öppnades på nytt | Skriptet fick `--kontrollera` (ÖPPEN, STÄNGD, KUNDE INTE KONTROLLERAS) och skillen kräver kontroll före förslag | Se testraden |
| 2026-11-25 | 0.1 | 7 | Den obevakade körningen valde själv att inte följa en startregel | Skriftligt, snävt undantag i samma fil som regeln, beslutat av människan. Andra regler som kräver svar ger FEL. Exempel i mallen | Inte provkört än |
| 2026-11-25 | 0.1 | 7 | Uppgiften skapades utan schema och kördes för hand i en ny session | Publik mall för uppgiften tillagd | Tre förslag levererades. Notis och startregel återstår |
| 2026-11-25 | 0.1 | 7 | Skriptet måste köras en andra gång för att markera visade träffar, och allt hämtat markeras, även det som inte visats | Inte ändrat än | Att rätta i nästa version |
| 2026-11-25 | 0.1 | 6 | Första rundan för hand: förslag, val och ansökan | `SKILL.md` skriven, startas för hand. Profilen får formatversion 2 (ansökningsinstruktion och ansökningslogg) | Inte testad som skill än |
| 2026-11-25 | 0.1 | 2 | Målet ändrades: en sorterad lista räckte inte, och att välja ett enda jobb åt människan var för snävt | Tre förslag, människan väljer, sedan ansökan och CV | Ett val gjort i första rundan |
| 2026-11-25 | 0.1 | 2 | Ett kort tidsfönster och minnet över visade jobb dolde öppna jobb, och ett förslag bröt mot en gräns som inte var nedskriven | Längre tidsfönster, privat kandidatlista och begränsningar som går före all bedömning | Inte omtestat |
| 2026-11-25 | 0.1 | 2 | Ansökningssättet var ett annat än väntat (inget brev, frågor i formulär) | Ansökningssättet kontrolleras innan något skrivs | Gäller från nästa runda |
| 2026-11-25 | 0.1 | 2 | En andra källa fann en del av samma annonser och några egna. Ett ortsfilter i källan dolde en tjänst med flera placeringsorter, och samma uppdrag kunde ligga ute på två språk med olika titlar | Fler källor och dubblettkontroll på innehåll blir krav. Fas 2 avslutad | Inte byggt än |
| 2026-11-25 | 0.1 | 2 | Den publika och den privata mappen hade nästan samma namn, så det gick inte att se vilken som menades. Namnet följde inte heller repots vanligaste mönster, och ordet "agent" passade inte ett fast arbetsflöde | Skilda namn: den publika mappen heter `kent-jobbsok-sortering` och den privata har "privat" i namnet. Båda README-filerna anger överst vilken del det är | Hämtningen testkörd från de nya platserna, se testresultat |
| 2026-11-25 | 0.1 | 2 | En fråga till människan hade delvis svar i det befintliga underlaget, och sorteringen gjordes utan det | Underlagen söks igenom innan en uppgift behandlas som okänd | Gäller bedömningen; inte omtestat |
| 2026-11-25 | 0.1 | 2 | Provskripten låg i en tillfällig mapp och hade sökningarna inskrivna i koden | `skript/hamta.py` byggt: sökningar och tillstånd i privata filer, felutfall med slutkod 2, spärr mot att skriva i det publika repot | Se testraderna nedan |
| 2026-11-25 | 0.1 | 2 | En söksida utan träffar svarade som om allt gick bra | Noll rader redovisas som avvikelse per källa | Se testraderna nedan |
| 2026-11-25 | 0.1 | 2 | Samma tjänst kan ligga ute två gånger eller återpubliceras med ny länk | Jämförelse på arbetsgivare och titel utöver länken | Fångar bara samma arbetsgivare och titel, inte samma uppdrag via olika förmedlare |
| 2026-11-25 | 0.1 | 2 | Sista ansökningsdag försvann när taggarna rensades, och vissa datum låg orimligt långt fram | Datumet läses ur källkoden; mer än 150 dagar märks osäkert | Gränsen 150 dagar är ett antagande |
| 2026-11-25 | 0.1 | 1 | Den tidigare sökrutinen visade en redan hanterad annons, saknade minne och läste ingen profil | Mål: sortera mot en profil och minnas vad som visats | Baslinje att jämföra mot |

## Testresultat

| Datum | Version | Test | Resultat |
|---|---|---|---|
| 2026-11-25 | prov före 0.1 | Manuell sortering av en tvåveckorsperiod, bedömd av människan | Sorteringen godkändes i sin helhet. En del annonser var bedömda på utdrag eller bara på titeln |
| 2026-11-25 | 0.1 | Skriptet mot tomt minne, jämfört med provets träffar (samma dag) | 27 av 27 annonser, inga saknade och inga extra |
| 2026-11-25 | 0.1 | Skriptet mot minnet efter provet | 0 annonser rapporterade som nya |
| 2026-11-25 | 0.1 | Dubbletter och passerad sista dag | 2 möjliga dubbletter och flera passerade datum märktes |
| 2026-11-25 | 0.1 | Felvägar: fel formatversion, resultat i publikt repo, enbart felaktig sökväg | Alla tre gav FEL och slutkod 2 |
| 2026-11-25 | 0.1 | Enstaka sökvägar utan rader bland fungerande | Redovisades som avvikelse, körningen blev klar |
| 2026-11-25 | 0.1 | Efter namnbytet: körning från de nya platserna | Hämtningen blev klar, 0 annonser rapporterade som nya |
| 2026-11-25 | prov | Engelska sökord för finansiell planering på den första källan, alla sidor i perioden | Få träffar i området, en av dem relevant att läsa |
| 2026-11-25 | prov | Platsbankens öppna API (fritext och yrkesgrupp) jämfört på rubrik med facit | 10 av 27 hittades. Fritext gav få träffar för vanliga yrkesord och många orelaterade för engelska uttryck |
| 2026-11-25 | 0.1 | Uppgift utan schema, startad för hand i ny session | Klar på några minuter med tre förslag. Mobilnotisen skickades inte. En startregel i projektet följdes inte, vilket körningen redovisade |
| 2026-11-25 | 0.2 | `--kontrollera` mot öppen, passerad, borttagen och ej stödd adress, samt samma öppna annons med ett senare datum | Alla gav väntat utfall. Hämtningen fungerade oförändrat efteråt |

Bedömningen (modellens steg) har ännu inte körts om mot testfallen.

## Kända brister

- Skriptet hämtar bara från en källa (vakanser.se). Platsbanken är prövad för hand men inte byggd in.
- Företagens och kommunernas egna rekryteringssidor är inte prövade.
- Orten i listan kan vara fel eller ofullständig. Skriptet filtrerar därför inte på ort.
- Samma uppdrag via flera förmedlare upptäcks inte av skriptet.
