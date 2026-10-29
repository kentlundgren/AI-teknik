# Databaser: JSON, SQL, NoSQL, Firebase och Supabase

*Arbetsdokument 2026-10-29. Uppgifter med länk är kontrollerade mot källan. Övriga uppgifter är allmän kunskap som inte är kvalitetssäkrad: kontrollera mot källan innan något beslut bygger på dem, särskilt gränser, priser och årtal.*

Innehåll: [1. JSON eller databas](#json-eller-databas) · [2. SQL och NoSQL](#sql-och-nosql) · [3. Firebase och Supabase](#firebase-och-supabase) · [4. Gemensamma dokument med versioner](#gemensamma-dokument) · [5. Var det finns mer](#mer) · [6. Källor](#kallor)

---

## 1. JSON eller databas <a id="json-eller-databas"></a>

JSON är ett **format**, alltså ett sätt att skriva ned data som text. En databas är ett **system** som lagrar, söker, ändrar och skyddar data.

**Tabell 1. Vad en JSON-fil och en databas gör** <a id="tabell-1"></a>

| | JSON-fil | Databas |
|---|---|---|
| Sökning | hela filen läses och du letar själv | index gör sökning snabb även i miljoner rader |
| Ändra en post | hela filen skrivs om | bara den raden ändras |
| Flera användare samtidigt | den som sparar sist skriver över | låsning och transaktioner hanterar det |
| Krasch mitt i en skrivning | filen kan bli trasig | transaktionen rullas tillbaka |
| Regler för innehållet | inga | typer, obligatoriska fält, kopplingar mellan tabeller |
| Behörigheter | per fil | per tabell, rad och användare |

**Hur stora mängder JSON klarar.** Formatet har ingen gräns i sig. RFC 8259 säger att en implementation får sätta gränser för nästlingsdjup, textens storlek, talens precision och strängarnas längd ([RFC 8259, avsnitt 9](https://www.rfc-editor.org/rfc/rfc8259)). Gränsen sätts alltså av programmet som läser filen. Som tumregel (allmän kunskap, inte kontrollerad): några MB går alltid, tiotals till hundratals MB går om hela filen får plats i minnet, och gigabyte kräver läsning bit för bit eller formatet JSON Lines (en post per rad). Där är en databas oftast bättre.

**JSON har inga kommentarer.** Grammatiken i RFC 8259 tillåter bara blanktecken mellan elementen, så en JSON-text med kommentarer följer inte standarden. Varianter som JSON5 och JSONC lägger till kommentarer men är inte JSON.

**När vad.** JSON-fil passar när datan är liten och sällan ändras, en person eller ett program skriver åt gången, och du vill versionshantera filen i Git (exempel: ett sökindex eller en lista med frågor). Databas passar när flera skriver samtidigt, du behöver söka, sortera eller räkna, datan hänger ihop, eller du behöver säkerhet och historik.

---

## 2. SQL och NoSQL <a id="sql-och-nosql"></a>

- **SQL** är ett *frågespråk*. **Relationsdatabas** är *datamodellen*: tabeller med rader och kolumner som kopplas ihop. De flesta relationsdatabaser använder SQL, så orden används ofta som synonymer.
- **NoSQL** är ett samlingsnamn för "allt annat" och läses oftast som "not only SQL". Det är flera familjer, inte en.

**Tabell 2. Familjer av databaser** <a id="tabell-2"></a>

| Typ | Idé | Exempel |
|---|---|---|
| Relationsdatabas | tabeller, rader, kolumner, kopplingar | PostgreSQL, MySQL, SQLite |
| Dokumentdatabas | JSON-lika dokument i samlingar | Firestore, MongoDB, CouchDB |
| Nyckel–värde | slå upp ett värde med en nyckel | Redis, DynamoDB |
| Kolumnfamilj | stora mängder data över många servrar | Cassandra |
| Graf | noder och kopplingar mellan dem | Neo4j |
| Tidsserie | mätvärden över tid | InfluxDB |
| Vektor | sökning på likhet, vanlig i AI | pgvector, Pinecone |

Gränserna är suddiga. PostgreSQL kan lagra JSON i en kolumn (typen JSONB) och söka i den, och vissa NoSQL-system har ett eget SQL-liknande språk. Firestore har inget SQL.

---

## 3. Firebase och Supabase <a id="firebase-och-supabase"></a>

**Tabell 3. Firebase mot Supabase** <a id="tabell-3"></a>

| | Firebase | Supabase |
|---|---|---|
| Databaser | Firestore (dokument i samlingar) och Realtime Database (ett JSON-träd). Båda är NoSQL. | PostgreSQL (SQL) |
| Frågor | eget API och bibliotek | SQL |
| Kopplingar (joins) | finns inte, data upprepas eller hämtas i flera frågor | ja |
| Struktur | flexibel, inga fasta fält | fasta kolumner och typer |
| Realtid | inbyggt och välutvecklat | finns som tillägg |
| Öppen källkod / flytt | nej, bunden till Google | ja, kan köras själv eller flyttas |

**Kontrollerade uppgifter om Firestore.** Ett dokument får vara högst 1 MiB (1 048 576 byte). Den kostnadsfria nivån har 1 GiB lagring, 50 000 läsningar, 20 000 skrivningar och 20 000 borttagningar per dag ([Firestore quotas](https://firebase.google.com/docs/firestore/quotas), hämtad 2026-10-29). Villkoren ändras, så kontrollera aktuella siffror.

**Kapacitet.** Båda kan lagra mycket stora mängder i betalda nivåer. Skillnaden är vad som begränsar och hur man betalar: Firebase räknar främst läsningar, skrivningar och lagring, medan Supabase räknar projekt, serverstorlek och lagring (allmän kunskap, kontrollera mot respektive prissida).

**Firebase Data Connect** är en nyare tjänst som lägger en PostgreSQL-databas under Firebase. Hur mogen den är har inte kontrollerats.

I Samrådsguiden finns en jämförelse för just röstningen: [supabase.md, avsnitt 5](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md).

---

## 4. Gemensamma dokument med versioner <a id="gemensamma-dokument"></a>

Behovet: en liten förening, omkring tio personer, som ska skriva och ändra gemensamma dokument och ha koll på versioner.

**Börja med färdiga verktyg.** Word i Microsoft 365 (filen i OneDrive eller SharePoint, delad med *Kan redigera*), Google Dokument, HedgeDoc eller Nextcloud med OnlyOffice. De ger gemensam redigering, kommentarer, spårade ändringar och versionshistorik. Bygg eget bara om behovet inte täcks.

**Om det byggs: PostgreSQL (till exempel via Supabase).** Dokument, versioner, användare och kommentarer hänger ihop, och versionshistorik blir enkel: varje sparning lägger till en ny rad som aldrig ändras.

**Tabell 4. Förslag på tabeller** <a id="tabell-4"></a>

| Tabell | Innehåll |
|---|---|
| `dokument` | id, titel, skapad av, status, id på nuvarande version |
| `versioner` | id, dokument-id, versionsnummer, text, författare, tidpunkt, ändringskommentar |
| `anvandare` | hanteras av inloggningen |
| `kommentarer` | version-id, författare, text, tidpunkt |

"Nuvarande version" är en pekare. Att återställa en gammal version betyder att kopiera den som en ny rad.

**Tre nivåer för samtidig redigering.** Databasen löser inte konflikterna, det gör programmet:

1. *Lås:* en redigerar i taget, andra ser dokumentet skrivskyddat. Enklast.
2. *Konfliktvarning:* alla kan redigera, men vid sparning kontrolleras att ingen annan sparat emellan. Annars visas skillnaderna.
3. *Redigering i realtid* som i Google Dokument. Kräver ett särskilt bibliotek (till exempel Yjs) och är sällan motiverat för en liten förening.

---

## 5. Var det finns mer <a id="mer"></a>

- **Supabase (PostgreSQL):** [omröstningen om MAXIMA i Samrådsguiden](https://kentlundgren.github.io/Codex/Fritid/NF/Samradsguiden/Maxima/rangordning.html) lagrar rösterna i en Supabase-databas. Hur den är kopplad, steg för steg, och jämförelsen med Firebase står i [supabase.md](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md).
- **Firebase (Realtime Database):** [inpasseringsstatistiken för Bjerreds Saltsjöbad](https://kentlundgren.github.io/foreningar/BjerredsSaltsjobad/inpasseringar/databas.html) hämtar sina siffror från Firebase, och sidan beskriver upplägget. Resten av projektet finns i [mappen på GitHub](https://github.com/kentlundgren/foreningar/tree/main/BjerredsSaltsjobad).
- **Redis (nyckel–värde):** [vindkraftskalkylen](https://vindkraft-ver2.vercel.app) använder Redis för korta länkar. Hur det sattes upp står i [Vercel-teknik-ver2.md](https://github.com/kentlundgren/Vindkraft/blob/main/vindkraftskalkyl_Vercel_ver2/Vercel-teknik-ver2.md).
- **Varför Firebase inte valdes:** [Claude-kostnad, publik variant](https://kentlundgren.github.io/Ovrigt/Claude_kostnad/dela/index.html) använder ingen databas. Resonemanget och Firebase som framtida möjlighet står i [PRD_publik_variant.md](https://github.com/kentlundgren/Ovrigt/blob/main/Claude_kostnad/PRD/PRD_publik_variant.md).

---

## 6. Källor <a id="kallor"></a>

- Bray, T. (red.) (2017) *RFC 8259: The JavaScript Object Notation (JSON) Data Interchange Format*. Internet Engineering Task Force. Tillgänglig: https://www.rfc-editor.org/rfc/rfc8259 (hämtad 2026-10-29). *Källa för att JSON saknar kommentarer och att implementationer får sätta gränser.*
- Google (u.å.) *Usage and limits* [Firestore quotas]. Firebase. Tillgänglig: https://firebase.google.com/docs/firestore/quotas (hämtad 2026-10-29). *Källa för dokumentstorlek och gratiskvoter.*
- Supabase (u.å.) *Supabase Docs*. Tillgänglig: https://supabase.com/docs. *Kontrollera gränser och priser här.*
