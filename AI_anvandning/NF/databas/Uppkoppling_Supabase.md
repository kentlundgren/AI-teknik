# Så kopplades rangordningen till Supabase: steg för steg med bilder

**Version:** 1.5 · **Datum:** 2026-11-13 · **Avsändare:** Kent Lundgren
**Status:** berättelse om hur uppkopplingen gick till, med skärmdumpar. **Se också:** [supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md) för tekniken, reglerna och hur projektet återanvänds (avsnitt 7 beskriver hur en ny lista läggs till). Sidan som använder databasen är [AI i proportion](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html).

## Kort version <a id="kort-version"></a>

Rangordningen på sidan AI i proportion sparar läsarnas röster i en Supabase-databas (en molntjänst med en Postgres-databas, se [Ordlista](#ordlista)). Jag använde det Supabase-projekt som redan fanns för Samrådsguiden, `samradsquiden`, i stället för att skapa ett nytt. Det var pausat och väcktes med **Resume project**. Sedan klistrade jag in en SQL-fil i SQL Editor och körde den, sparade adminkommandona som en egen fråga och satte en adminkod. Därefter kontrollerades att databasen svarade och att tabellerna var låsta.

Bilderna är skärmdumpar från min webbläsare. Jag har beskurit bort webbläsarens bokmärkesfält, och adminkoden är övertäckt i Bild 8.

## Förutsättningar <a id="forutsattningar"></a>

- **Projektet:** `samradsquiden` i organisationen `Samradsguiden`, gratisplanen (Free), regionen West EU (Ireland), `eu-west-1`.
- **Varför samma projekt:** varje omröstning är en rad i tabellen `rang_omrostning`, och funktionerna tar omröstningens id, så flera omröstningar kan dela projekt utan att blandas ihop. Resonemanget står i [supabase.md, avsnitt 2b](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md).
- **SQL-filen:** [supabase_rangordning.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) skapar två tabeller, slår på Row Level Security (radskydd, se [Ordlista](#ordlista)) och lägger till fem funktioner. Den lägger också in omröstningen `ai_proportion_hot10` med tio poster. Alla namn börjar på `rang_`, så Samrådsguidens egna tabeller berörs inte.

### Var finns koden för Samrådsguiden i samma projekt? <a id="samradsguiden-koden"></a>

Samrådsguidens egna tabeller och funktioner skapades med en annan SQL-fil, i ett annat repo (Codex). Alla filerna ligger i [Fritid/NF/Samradsguiden](https://github.com/kentlundgren/Codex/tree/main/Fritid/NF/Samradsguiden):

- [supabase_setup.sql](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase_setup.sql): SQL som skapade Samrådsguidens tabeller och funktioner.
- [supabase.md](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md): stegen för kontot och projektet, med bilder.
- [rangordning/](https://github.com/kentlundgren/Codex/tree/main/Fritid/NF/Samradsguiden/rangordning): sidans kod (`rangordning.js`, `rangordning.css`, `rangordning_config.js`).

Tabellerna själva ligger i projektet och syns i dashboarden under **Table Editor** (tabellikonen i vänstermenyn). Där visas både Samrådsguidens tabeller och mina `rang_`-tabeller. Funktionerna syns under **Database > Functions**. De två SQL-filerna blandas inte ihop, eftersom mina namn börjar på `rang_`.

### Samma röstlogik, olika upplägg: jämförelse med Samrådsguiden <a id="jamforelse"></a>

I Supabase-dashboardens Schema Visualizer ser de två upplägg olika ut, trots att röstningen fungerar likadant. Ordet **omröstning** betyder här **en lista som läsare rangordnar**, alltså en fråga med sina egna poster. Det är inte en enskild persons röst. En **röst** är en läsares ordning på en lista.

**Likadant i båda:**
- Läsaren ordnar en lista från viktigast till minst viktigt och sparar sin ordning.
- Webbläsaren har en hemlig nyckel, och databasen sparar bara dess kontrollsumma (`token_hash`). Samma nyckel ger samma rad, så en ny röst från samma webbläsare ersätter den förra. Att rösta igen kräver en annan webbläsare eller rensad webbläsardata, så spärren gäller per webbläsare, inte per dator eller person.
- Två tabeller (inställningar och röster), låsta med radskydd, och funktioner som kontrollerar indatan. Namn högst 40 tecken, adminkod som kontrollsumma.

**Olika:**

| | Samrådsguiden | AI i proportion |
|---|---|---|
| Antal listor att rangordna | **En** (frågorna i Tabell 6) | **Flera** samtidigt, var och en med egna poster |
| Inställningstabell | `rangordning_installning`: en enda rad (`id = 1`) med sista dag, stängd och adminkod | `rang_omrostning`: en rad per lista, med id, titel, postlista, sista dag, stängd, `max_roster` och adminkod |
| Rösttabell | `rangordning_roster`, nyckel `token_hash` | `rang_rost`, nyckel (`omrostning`, `token_hash`) |
| Koppling mellan tabellerna | Ingen, eftersom det bara finns en lista | Främmande nyckel `omrostning` till `rang_omrostning(id)`, `on delete cascade` |
| Giltiga poster | Korta id (bokstäver, siffror, `-` eller `_`) | Exakt de poster som listan har i `poster`, var och en en gång |
| Funktioner | `hamta_roster()`, `hamta_status()`, `spara_rost()`, `radera_min_rost()`, `nollstall_roster()` | `rang_hamta_roster`, `rang_hamta_status`, `rang_spara_rost`, `rang_radera_min_rost`, `rang_nollstall`, alla med listans id som första argument |
| Röstgräns | 500, fast i koden | `max_roster` per lista (1000 som standard) |

**Varför skillnaden:** jag ville kunna använda samma Supabase-projekt för fler rangordningar. Med Samrådsguidens upplägg skulle alla listor dela röster och sista dag. Min version sparar listans id i varje röst, så de hålls isär: en läsare kan rösta en gång på varje lista, och rösterna blandas inte. Samrådsguiden fungerar som förut och är inte ändrad. Källa för jämförelsen: [Samrådsguidens supabase_setup.sql](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase_setup.sql) och [supabase_rangordning.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql).

## Steg 1. Väck projektet <a id="steg1"></a>

Gratisprojekt pausas efter en vecka utan användning. Samrådsguidens omröstning stängdes 2026-11-06, och när jag öppnade projektet var det pausat: dashboarden visade *Project is paused*, och projektets adress gick inte att slå upp. Dialogen erbjöd **Resume project**, som väcker projektet, och **Restore** hör till säkerhetskopior, vilket är en annan sak. Dashboarden visade också att datan, även säkerhetskopior, är säker och att projektet går att väcka till och med 7 december 2027. Jag klickade på Resume project och väntade tills Status blev **Healthy**.

![Bild 1. Projektet samradsquiden är vaket](bilder/bild1_projektet_vaket.jpg)

*<a id="bild1"></a>Bild 1. Projektets översikt efter att det väckts: Status Healthy, regionen West EU (Ireland), gratisplanen och projektets adress.*

## Steg 2. Öppna SQL Editor <a id="steg2"></a>

I vänstermenyn finns **SQL Editor**. Där öppnade jag en ny, tom fråga. SQL Editor är ett fönster i dashboarden där man skriver och kör SQL direkt mot projektets databas.

![Bild 2. Tom SQL Editor](bilder/bild2_tom_sql_editor.jpg)

*<a id="bild2"></a>Bild 2. Ett tomt SQL-fönster, redo att fyllas.*

## Steg 3. Klistra in SQL-filen <a id="steg3"></a>

Jag öppnade [`supabase_rangordning.sql`](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) på min dator, kopierade hela innehållet och klistrade in det i fönstret. De första raderna är kommentarer som säger vad filen gör: ingen inloggning för läsarna, låsta tabeller, funktioner som kontrollerar all indata och frivilliga namn.

![Bild 3. SQL-filen inklistrad](bilder/bild3_sql_inklistrad.jpg)

*<a id="bild3"></a>Bild 3. Hela SQL-filen inklistrad i SQL Editor, med de första tabelldefinitionerna synliga.*

**SQL-filen som skapade tabellerna:** [supabase_rangordning.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) på GitHub. Den skapar tabellerna `rang_omrostning` och `rang_rost`, slår på radskyddet och lägger till de fem funktionerna.

## Steg 4. Kör filen och bekräfta varningen <a id="steg4"></a>

När jag klickade **Run** visade Supabase rutan *Potential issue detected*: frågan innehåller operationer som kan ändra eller ta bort data. Varningen utlöses av ord som `revoke` och `delete` i filen. Jag hade läst igenom var de förekommer. De slår på radskyddet, begränsar vem som får köra funktionerna, och ligger i funktioner som bara körs när någon röstar eller nollställer. Filen har inget `drop` och inget `truncate`. Jag klickade **Run query**.

![Bild 4. Varningen vid Run](bilder/bild4_varning_vid_run.jpg)

*<a id="bild4"></a>Bild 4. Supabases varning "Potential issue detected" innan frågan körs.*

## Steg 5. Kontrollera resultatet <a id="steg5"></a>

Under fönstret, fliken **Results**, stod *Success. No rows returned*. Det betyder att alla satser gick igenom. Filen går att köra om utan att några röster raderas.

![Bild 5. Success](bilder/bild5_success.jpg)

*<a id="bild5"></a>Bild 5. Resultatet: "Success. No rows returned".*

## Steg 6. Kontrollera utifrån <a id="steg6"></a>

Med projektets publika nyckel (den som sidan själv använder, `sb_publishable_…`) anropades funktionerna utifrån, för att se att de svarade och att tabellerna var låsta:

- `rang_hamta_status` för `ai_proportion_hot10` svarade `antal: 0`, `stangd: false` och ingen sista dag.
- `rang_hamta_roster` svarade med en tom lista.
- Ett direkt anrop mot tabellen `rang_rost` nekades med *permission denied* (HTTP 401). Ingen kan alltså läsa eller skriva direkt i tabellerna, bara via funktionerna.

Före steg 5 hade samma anrop svarat att funktionen inte fanns, vilket visade att projektet var vaket men att SQL-filen ännu inte var körd.

## Steg 7. Spara adminkommandona som en egen fråga <a id="steg7"></a>

Filen [supabase_admin.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_admin.sql) samlar kommandon för att se läget, stänga eller öppna omröstningen, sätta sista dag, ta bort röster, sätta adminkod och exportera rösterna. Jag klistrade in den i en ny fråga, sparade med **Save** och döpte frågan till "AI i proportion". Den ligger sedan under **Private** i vänstermenyn. Första raderna har sidans adress, så det går att hitta tillbaka dit.

![Bild 6. Frågan sparad](bilder/bild6_fraga_sparad.jpg)

*<a id="bild6"></a>Bild 6. Adminkommandona sparade som frågan "AI i proportion" (Saved, under Private).*

## Steg 8. Lägg tillbakaadressen i databasen <a id="steg8"></a>

Supabase har inget fält för en klickbar länk, så adressen till sidan lades som en kommentar på tabellerna med `comment on table`. Jag markerade de två raderna och klickade **Run selected**. Bara det markerade körs. Kör man utan att markera körs hela filen, inklusive `delete`.

![Bild 7. Två rader körda med Run selected](bilder/bild7_comment_on_table.jpg)

*<a id="bild7"></a>Bild 7. De två `comment on table`-raderna markerade och körda: "Success. No rows returned".*

## Steg 9. Sätt en adminkod <a id="steg9"></a>

Med adminkoden kan jag nollställa rösterna från sidan. Databasen sparar bara en kontrollsumma (en sha256-hash) av koden, aldrig koden själv. Jag bytte texten `DIN-KOD-HÄR` i fråga 5 mot min kod, markerade de tre raderna och körde dem. Koden visas inte i bilden: den är övertäckt, och själva koden ligger inte i något dokument i repot.

![Bild 8. Adminkoden satt (koden övertäckt)](bilder/bild8_adminkod_satt.jpg)

*<a id="bild8"></a>Bild 8. Rubrik 5 i adminfrågan, där koden sätts. Texten mellan citattecknen är övertäckt.*

## Steg 10. Prov med en röst <a id="steg10"></a>

På sidan flyttade jag raderna i rangordningen och skrev ett provnamn. Därefter svarade `rang_hamta_status` `antal: 1`, och `rang_hamta_roster` gav en röst med alla tio frågorna (f01 till f10) exakt en gång. Det visar att hela vägen fungerar: sidan, funktionen och tabellen. Provrösten ligger kvar tills jag raderar den med raden under rubrik 4 i adminfrågan.

## Lista 2: Hot från agentisk AI, i samma projekt <a id="lista2"></a>

När den första listan fungerade lades en andra till i samma Supabase-projekt (2026-11-13): [Hot från agentisk AI](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/agentisk.html), där läsaren rangordnar tio hot och plats 1 är värsta hotet. Det krävdes ingen ny tabell och ingen ny funktion, eftersom varje lista är en rad i `rang_omrostning`. Så gick det till:

1. **Listan togs fram ur källorna.** Tio hot valdes efter hur ofta de återkommer ur elva källor (säkerhetsrapporter, forskning, utvecklarnas ramverk, en enkät och ett svar av Hawking), och källorna hämtades som originaltext så långt det gick (OWASP-listan kräver åtkomst). Ingen av dem rangordnar hoten efter allvar, så urvalet bygger på hur ofta hoten nämns, och rangordningen lämnas till läsaren. Källorna, vad som är läst och vad som återstår står på sidan och i förbättringsregistret (F-54 till F-57).
2. **Sidan byggdes som AI i proportion**: tabell med rader (`data-id` `h01` till `h10`), en behållare med `data-omrostning="agentisk_ai_hot10"` och samma tre filer (`rangordning.css`, `rangordning_config.js`, `rangordning.js`). Eftersom sidan inte har någon egen bedömning (kolumnen `rg-efter-rost`) visas ingen knapp *Visa min bedömning*.
3. **En SQL-fil med en rad:** [supabase_agentisk_ai.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_agentisk_ai.sql) lägger omröstningen `agentisk_ai_hot10` med postlistan `h01` till `h10`. Du öppnar SQL Editor, klistrar in filen och klickar **Run**, precis som i steg 3 till 5 ovan. Därefter sparas frågan med **Save** och döps om (högerklicka eller klicka på de tre prickarna vid frågan under **Private** och välj **Rename**), till exempel `AI i proportion: ny lista, agentisk AI`. Körningen kommer före namnbytet, och körningen ska ske **före pushen**. Supabase kan visa varningen "Potential issue detected" även här: klicka **Run query** om du har läst filen. Den innehåller en `insert` och en `select`, och den går att köra om utan att röster raderas.
4. **Test.** Sidan testades lokalt med en låtsasdatabas: ett drag i listan skickade `rang_spara_rost` med omröstningen `agentisk_ai_hot10`, tio unika post-id och en nyckel på 36 tecken. Mot den riktiga databasen svarade sidan som väntat med tom lista ("Ingen har röstat än"), eftersom omröstningen inte fanns förrän SQL-filen var körd.
5. **Dokumentationen** delades så här: tekniken och reglerna i [supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md) (avsnitt 7 och tabellen *Vart informationen hör*), den här berättelsen i det här dokumentet, och arbetsgången i skillen `kent-interaktiv-rangordning`.

**Ordningen är databasen först, sedan sidan.** En push publicerar sidan inom några minuter, och läsare kan då öppna en lista som databasen ännu inte känner till. Läget om sidan ändå publiceras först, och varför inget behöver backas, står i [supabase.md, Ordningen vid publicering](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md#ordning): databasen svarar tomt, en röst som inte kan sparas hålls kvar i läsarens webbläsare och skickas när listan finns, och åtgärden är att köra SQL-filen.

**Efter att SQL-filen körts** ska `rang_hamta_status` för `agentisk_ai_hot10` svara `antal: 0`. Prova sedan sidan och radera provrösten med `delete from public.rang_rost where omrostning = 'agentisk_ai_hot10';`. De två listorna blandas inte ihop: en läsare kan rösta en gång på varje, och varje lista har sin egen sista dag, sin egen röstgräns och (om du vill) sin egen adminkod.

## Vad som inte visas på bilderna <a id="inte-pa-bilderna"></a>

- Skapandet av Supabase-kontot, organisationen och projektet `samradsquiden`. De gjordes för Samrådsguiden. Stegen finns i [Samrådsguidens supabase.md](https://github.com/kentlundgren/Codex/blob/main/Fritid/NF/Samradsguiden/supabase.md).
- Dialogen med **Resume project** i steg 1.
- Adminkoden. Den ska inte synas i något dokument.

## Så hittar du koden i Supabase igen <a id="hitta-koden"></a>

Supabase sparar inte den inklistrade SQL-filen som en fil. Tabellerna syns i **Table Editor**, men koden som skapade dem finns på tre ställen, och de ger olika mycket.

1. **Tabellens definition.** Öppna [Table Editor](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc/editor), klicka på tabellen (till exempel `rang_rost`) och klicka på **Definition** längst ned till höger, bredvid **Data**. Rubriken är "SQL Definition of rang_rost (Read only)". Där står ett `create table`-kommando med kolumner, primärnyckel, främmande nyckel mot `rang_omrostning` (`on delete cascade`) och reglerna för namn (högst 40 tecken) och ordning (2 till 50 poster). Knappen **Open in SQL Editor** uppe till höger öppnar den i SQL Editor. Det är Supabases egen genererade version av tabellen, så kommentarerna från filen saknas.
2. **Funktionerna.** Klicka på **Database** i vänstermenyn och sedan på **Functions**, eller öppna [direktlänken](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc/database/functions). Listan visar mina fem funktioner (`rang_hamta_roster`, `rang_hamta_status`, `rang_spara_rost`, `rang_radera_min_rost`, `rang_nollstall`), alla med säkerheten *Definer*, och Samrådsguidens (`hamta_roster`, `hamta_status`, `nollstall_roster`, `radera_min_rost`). Klicka på en funktion för att se dess kod.
3. **Själva filen.** Den ursprungliga koden, med kommentarer, är [supabase_rangordning.sql](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase_rangordning.sql) på GitHub. Den första frågan i SQL Editor ("Untitled query") sparades aldrig under ett namn, och i [SQL Editor](https://supabase.com/dashboard/project/basgvwqqdbkwadfjzaxc/sql/new) står bara frågan "AI i proportion" under **Private**. Vill du ha grundkoden i Supabase, klistra in filen i en ny fråga, klicka **Save** och döp den till `AI i proportion: skapa tabeller (grundkod)`. Du behöver inte köra den.

Koden för Samrådsguidens tabeller ligger i ett annat repo, se [Var finns koden för Samrådsguiden i samma projekt?](#samradsguiden-koden).

## Genvägar mellan sidan och Supabase <a id="genvagar"></a>

Sidan AI i proportion har en liten adminrad med länkar till projektet, SQL Editor och adminkommandona. Länkarna kräver inloggning och ger ingen åtkomst. Mer om det: [supabase.md, avsnitt 5b](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/supabase.md).

## Ordlista <a id="ordlista"></a>

- **Supabase:** en molntjänst som ger varje projekt en egen Postgres-databas och ett API.
- **Postgres:** en databasmotor. SQL är språket man ställer frågor och ger kommandon med.
- **SQL Editor:** fönstret i Supabases dashboard där SQL skrivs och körs.
- **Row Level Security (RLS, radskydd):** en spärr i databasen som avgör vem som får se och ändra vilka rader. Utan den kan en tabell i ett öppet schema läsas och skrivas av vem som helst.
- **Publik nyckel (`sb_publishable_…`):** projektets nyckel för webbsidor. Den är avsedd att ligga öppet i sidan, eftersom skyddet sitter i databasen och inte i nyckeln. En hemlig nyckel (`secret`, `service_role`) får aldrig ligga i en sida eller ett repo.
- **Funktion (RPC):** ett förprogrammerat anrop som sidan får göra, till exempel `rang_spara_rost`. Funktionen kontrollerar indatan i databasen.
- **Hash (kontrollsumma):** ett avtryck av en text som inte går att vända tillbaka. Databasen sparar avtrycket av adminkoden, inte koden.

## Källor <a id="kallor"></a>

- Supabase (u.å.) *Billing FAQ*. Tillgänglig på: <https://supabase.com/docs/guides/platform/billing-faq> (Hämtad: 12 november 2026). *(Pausade gratisprojekt kostar inget och räknas inte mot de två gratisprojekten.)*
- Supabase (u.å.) *Pricing & Fees*. Tillgänglig på: <https://supabase.com/pricing> (Hämtad: 12 november 2026). *(Gratisnivåns gränser och pausen efter en veckas inaktivitet.)*
- Supabase (u.å.) *Row Level Security*. Tillgänglig på: <https://supabase.com/docs/guides/database/postgres/row-level-security> (Hämtad: 12 november 2026). *(Varför radskyddet ska vara på.)*

Skärmdumparna och uppgifterna om projektet är från min egen dashboard 2026-11-12. Avsnittet om lista 2 bygger på filerna i repot och på tester av sidan. Kontrollera mot Supabases dokumentation innan något återges, eftersom tjänstens gränser och knappar kan ändras.

**Tillbaka till sidan:** [AI i proportion](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html#rangordna), där rangordningen och länken till det här dokumentet finns.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF/databas
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_anvandning\NF\databas`
