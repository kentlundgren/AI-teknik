# Fallgropar och Googles connectorer

**Läs när:** före fas 2 (manuell körning) och fas 3 (behörigheter), innan ett flöde rör Google Drive, Docs eller Gmail, och när något går fel.

## Koppla en ny connector – steg för steg

Så gick det till med Google Docs och Google Sheets:

1. Claude letar i connector-registret och lägger fram ett kopplingskort i chatten.
2. Kent klickar på **Koppla** på kortet.
3. Kent väljer **samma Google-konto** som de andra connectorerna (lundgren.kent@gmail.com). Annat konto ger andra filer och bredare åtkomst än nödvändigt.
4. Kent godkänner behörigheterna på Googles sida.
5. Sidan "Slutför i skrivbordsappen" kan dyka upp. Knappen "Öppna skrivbordsapp" verkar ibland inte göra något, men kopplingen kan ändå vara klar.
6. Kent skriver "klart". Claude kontrollerar att connectorn är kopplad och att de nya verktygen syns, och provar med en läsning innan något skrivs.
7. **En schemalagd uppgift får de connectorer som fanns när den skapades.** Kopplas en ny connector senare kan uppgiften inte använda den; skapa då en ny uppgift och ta bort den gamla (Kents ja). Koppla därför alla connectorer innan uppgiften skapas. Upplevt: uppgiften saknade Google Sheets, eftersom Sheets kopplades efter att uppgiften skapats.

## Fallgropar (upplevda)

### Google Drive, Docs och Sheets

- **Mappen var inte delad**, bara enskilda filer: connectorn såg filerna men kunde inte skapa i mappen. En kopia som görs innan mappen är delad hamnar i fel mapp (Drive lägger den då i kontots rot). Lösning: dela mappen som Redigerare, och kontrollera skrivrätten innan något kopieras.
- **Drive-connectorn kan inte redigera innehåll** i ett Google-dokument. Det kräver Google Docs-connectorn. Samma sak för kalkylark: Drive kan skapa ett genom uppladdning, men att lägga till rader kräver Google Sheets-connectorn.
- **Källor kan motsäga varandra**: kallelsens rubrik hade ett gammalt datum medan mejl och filnamn var rätt. Bestäm vilken källa som gäller och flagga avvikelsen.
- **Ägare kontra plats**: en fil som kopieras via Kents konto ägs av Kent även om den ligger i Lottas mapp.
- **En kopia ärver inte länkdelningen**: förra protokollet var delat med "alla med länken", men kopian var bara delad med Kent och Lotta. Ett mejl med länken hade gett mottagarna "Behörighet krävs". Kontrollera alltid delningen innan en länk skickas till andra.

### Gmail och mejlutkast

- **Exempeltexter kan innehålla gamla länkar**: Kents exempelmejl länkade till förra protokollet. Fråga vad länken ska peka på.
- **Dubbel hälsningsfras**: Kents signatur börjar med "Hälsningar". Skriv inte en egen.
- **Bilden i signaturen försvann** när utkastet uppdaterades i efterhand (Gmail rensar externa bilder). Skapa utkastet rätt i ett enda anrop.
- **Länk i ren text blev en lång omdirigeringsadress.** Använd HTML med en klickbar länktext.
- **Ändrad ämnesrad** kan göra att svaret hamnar i en egen tråd hos mottagarna.
- **Gmail visar bara ett utkast per tråd** i trådvyn, även om flera finns; listan visar "Utkast, Utkast…". Därför ska flödet bara skapa ett. Blir det flera medan man provar sig fram: ta bort de gamla (med Kents ja), så att fel utkast inte skickas.

### Yta och koppling till datorn

- **Fel yta för uppgiften**: en konversation som började med skills och schemalagda uppgifter i Cowork gled över i arbete i ett repo. Cowork arbetar i molnet i en kopia av repot, så ändringarna nådde inte Kents mapp förrän de fördes över, och mappar som heter `.claude` gick inte att skriva via kopplingen. Välj yta efter uppgiften innan du börjar: arbete i filer och repon på datorn görs i Claude Code lokalt (Code-fliken med mappen öppen, eller Cursor); mejl, kalender, dokument och research i Cowork. Byter uppgiften karaktär under arbetet, säg det och föreslå att fortsätta i rätt yta.
- **Kopplingen till datorn bröts utan att det märktes**: en Cowork-session når datorn bara genom en koppling via skrivbordsappen. Ikonen för datorn bredvid konversationens rubrik har en prick: grön när Cowork är anslutet till datorn, orange när kopplingen är bruten, trots att internet fungerar (viloläge, omstart av appen). Arbetet kan se klart ut i molnkopian medan inget har nått mappen. Titta på pricken innan du räknar med att ändringar finns i mappen. Claude säger till direkt när kopplingen bryts, inte först när en skrivning misslyckas.
