# Publik process, privat underlag

**Läs när:** flödet har privat underlag eller sparat tillstånd (redan i fas 1), innan något förs från privat till publikt, och före första commit till ett publikt repo.

Kent vill ha så mycket som möjligt publikt, för insynens, tydlighetens, versionshanteringens och säkerhetskopians skull, och samtidigt ha privata uppgifter privata. Det gäller även en grupp eller organisation: processen kan delas, underlaget stannar. Utforma flödet så att de två delarna **samarbetar utan att kopieras in i varandra**.

### Fyra lager

| Lager | Innehåll | Var |
|---|---|---|
| **Metod** | Skillen, skripten, kontrollerna, formaten | Publikt |
| **Inställningar** | Kriterier, profil, urval, mappar och konton | En mall med påhittade värden publikt, den ifyllda filen privat |
| **Data och tillstånd** | Underlag, namn, historik, det som redan hanterats, facit | Privat |
| **Lärande** | Utvecklingslogg och testresultat | Generella iakttagelser och sammanräknade resultat publikt, enskilda fall privat |

### Så samarbetar delarna

- **Gränssnittet är publikt:** skillen beskriver vilka privata filer den läser och skriver, med fält och format, och har en exempelfil med påhittade uppgifter. Då går metoden att förstå och testa utan de riktiga uppgifterna.
- **En källa för varje sak:** den privata delen pekar på skillen och kopierar den inte. Skillen får sökvägen till det privata underlaget som inställning och har inga privata värden inskrivna.
- **Version på gränssnittet:** den privata inställningsfilen anger vilken formatversion den följer. Stämmer den inte med skillens är utfallet FEL, så att delarna inte glider isär obemärkt.
- **Riktningen avgör risken:** att den privata delen läser den publika är låg risk. Att något går från privat till publikt (en lärdom, ett exempel, ett testresultat) är hög risk: skriv om det generellt och låt människan granska innan commit. En schemalagd körning skriver aldrig till det publika.

### Slussen: från privat till publikt *(prövad i ett flöde)*

Det privata arbetet ger lärdomar som andra kan ha nytta av. De går genom en sluss:

1. **Iakttagelsen skrivs privat** först, med alla detaljer.
2. **Förslaget skrivs om generellt:** vad som hände i allmänna ord, vilken publik fil som ska ändras och den exakta nya texten.
3. **Kontroll av texten:** sök efter namn, kontaktuppgifter, arbetsgivare, enskilda ärenden, lokala sökvägar till privata filer och personliga val. Sökningen hittar inte allt, så texten läses också i sin helhet.
4. **Människan säger ja eller nej** till varje förslag. Förslaget lämnas direkt när iakttagelsen görs.
5. **Källan ändras först** (skillen eller metodfilen). Sidor och sammanfattningar uppdateras därefter och bygger på källan.
6. **Före commit** läser människan skillnaden mot förra versionen och kontrollerar att inga oväntade filer följer med.

**En skriven regel räcker inte alltid.** Även den som bara läser eller kör kod från ett publikt repo kan skapa filer där, till exempel cachefiler. Lägg ett tekniskt skydd (ignore-regel, inställning i kommandot eller spärr i skriptet) och titta på repots status efter körningen.

### Namn och märkning *(prövad i ett flöde)*

- **Olika namn på den publika och den privata delen.** Med samma eller nästan samma namn går det inte att se i en länk eller en mening vilken mapp som menas, och en privat fil kan lätt hamna fel.
- **"Privat" syns i det privata namnet**, så att det står i varje sökväg. Den publika delen följer namnmönstret i sitt repo.
- Delar flera flöden samma privata underlag ska det privata namnet inte knytas till ett av dem.
- **En rad överst i båda README-filerna** säger PUBLIKT eller PRIVAT och vad det innebär. Den publika nämner motparten bara allmänt.
- **Märk var arbetet sker** när det rör båda: PUBLIKT eller PRIVAT före arbetssteg, i uppgiftslistan och i filredovisningen (orden, inte bara en symbol). Redovisa läget per repo: vad som är ändrat och vad som får pushas.
- Ett repo kan ha en privat arbetsgren och en publik gren med samma reponamn. Ange då vilken gren "privat" gäller, så att reponamnet inte ger falsk trygghet.

### Tre zoner, inte två

| Zon | Betydelse |
|---|---|
| **Publik** | Vem som helst kan läsa |
| **Privat men behandlad av tjänster** | Publiceras inte, men läses av AI-modellen eller en connector, eller lagras hos en leverantör (molnlagring, privat repo) |
| **Lämnar aldrig datorn** | Får varken läsas av en AI-tjänst i molnet eller synkas |

Bestäm zon för varje slags uppgift. "Ligger bara på min dator" betyder inte "lämnar aldrig datorn" om en modell i molnet läser filen eller mappen synkas. För en organisation avgör dess regler vad som får hamna i mellanzonen. Uppgifter om andra personer hålls till det flödet behöver.

### Säkerhetskopia och versioner för det privata

| Sätt | Ger | Att tänka på |
|---|---|---|
| Lokalt git-repo i en synkad mapp | Versioner lokalt, kopia i synktjänsten | Ingen kopia på GitHub; synkning är inte en säker säkerhetskopia av git-historiken |
| Eget privat repo på GitHub | Versioner, kopia och åtkomst för molnsessioner | Uppgifterna hamnar i mellanzonen; kontrollera att repot är privat före första push |
| Ignorerad mapp i det publika repot | Allt på en plats | Ingen versionshantering, och ett misstag i `.gitignore` publicerar. Välj hellre skilda repon eller mappar |

Före första commit till ett publikt repo: sök efter namn, adresser, kontaktuppgifter, arbetsgivare och personliga val. Det som en gång har pushats kan finnas kvar i historiken.

## Att välja uppdelning

| Alternativ | Att tänka på |
|---|---|
| Publik metod och privat underlag i skilda repon · Allt privat med en publik kopia · Allt i ett privat repo | Skilda repon ger synlig utveckling utan kopior som glider isär |
