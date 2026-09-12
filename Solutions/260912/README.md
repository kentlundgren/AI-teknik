# 260912 — vad som hände, och hur filerna kommer hem till Cursor

**Datum:** 2026-09-12  
**Mapp:** `Solutions/260912/`  
**Relaterad fil:** [`three_biggest.md`](./three_biggest.md)  
**Arbetskopia på den här datorn:** `C:\Users\kentl\OneDrive\AI-teknik`

Den här README:n har tre uppgifter:

1. Dokumentera *hur* mappen och markdown-filen kom till — ett annat arbetssätt än det vanliga i det här repot.
2. Förklara hur lokala filer, Git och GitHub hänger ihop, och hur du hämtar hem det som redan ligger på GitHub.
3. Dokumentera att pullen lyckades samma dag, och vad Git menar med *working tree clean*.

Projektets vanliga Git-regel står kvar: du committar och pushar själv. Se [`RAG/WORKFLOW.md`](../../RAG/WORKFLOW.md). Det som skedde på förmiddagen 12 september var ett **uttryckligt undantag** (remote-first). Eftermiddagens pull är den vanliga riktningen tillbaka.

---

## 1. Vad vi gjorde den här gången

Normalt i `AI-teknik` är flödet:

```text
lokal dator (Cursor)  →  git add / commit  →  git push  →  GitHub
```

Du skriver eller redigerar texten lokalt. Först när *du* är nöjd committar och pushar du. Cursor visar då samma träd som GitHub, plus eventuella osparade ändringar.

Den 12 september vände vi på det:

```text
Grok (via ansluten GitHub-connector)  →  commit på branch main  →  GitHub
                                                                      ↓
                                              arbetskopian var efter, tills du körde git pull
```

Grok skapade inte mappar på din Windows-dator. Grok skapade filer *direkt i fjärrrepot* `kentlundgren/AI-teknik` på GitHub. En mapp i Git är inte en tom katalog — den uppstår när minst en fil committas på den sökvägen. Därför fanns `Solutions/260912/` på GitHub så fort `three_biggest.md` lades in — men inte i Cursor-trädet förrän arbetskopian uppdaterades.

Första commiten:

- sökväg: `Solutions/260912/three_biggest.md`
- innehåll: de tre AI-matematikresultaten (Navier–Stokes / strömningar, Erdős enhetsavstånd, Jacobian-förmodan)

Den här filen (`README.md`) och [`../README.md`](../README.md) lades till i nästa commit, på samma sätt: remote-first.

---

## 2. Tre lager — metaperspektivet

Det är lättare att välja rätt kommando om man håller isär tre saker som ofta slås ihop i vardagsspråk.

| Lager | Var det finns | Vad det är | Vad Cursor visar |
| --- | --- | --- | --- |
| **Arbetskopia** (*working tree*) | filer på disken, här `C:\Users\kentl\OneDrive\AI-teknik` | det du öppnar, redigerar och läser | Explorer-trädet till vänster |
| **Lokalt Git** | mappen `.git` i samma projekt | historik, grenar, commits som *din dator* känner till | Source Control, `git log` |
| **GitHub** | `github.com/kentlundgren/AI-teknik` | den delade fjärrkopian (`origin`) | webben, och i Cursor först *efter* fetch/pull |

Git är versionsdatabasen. GitHub är en server som håller *en* kopia av den databasen plus webbgränssnitt, Issues och Pages. Cursor är editorn som tittar på arbetskopian och pratar med det lokala Git.

En fil “finns” alltså inte på ett ställe. Den kan finnas:

- bara lokalt (osparad eller untracked),
- lokalt committad men inte pushad,
- på GitHub men inte i din arbetskopia (så var `Solutions` före pullen),
- på båda, men i olika versioner (divergerande historik).

När något “inte syns i Cursor” är den första frågan: *vilket lager tittar jag på?*

```text
  [din redigering]          [din commit]              [andras / Grok]
 arbetskopia  ↔— add/commit —→  lokalt Git  ↔— push/pull —→  GitHub (origin)
```

---

## 3. Två arbetsprocesser

### A. Local-first (standard i det här repot)

1. Skriv eller ändra filer i Cursor.
2. Granska diffen i Source Control.
3. Committa själv, med ett begripligt meddelande.
4. Pusha själv när du vill att GitHub ska spegla läget.

**Styrka:** du ser texten innan den blir offentlig. Du tränar Git-flödet. Du behåller kontrollen över *när* något lämnar datorn.  
**Sväghet:** en agent som bara har GitHub-access kan inte hjälpa till att lägga in filen åt dig.

Detta är medvetet. `RAG/WORKFLOW.md` Regel 1 skrevs just för att commit och push inte ska ske “av misstag” av en agent.

### B. Remote-first (förmiddagen 12 september)

1. Du ber en agent som har GitHub-connector att skapa eller ändra filer *i repot på GitHub*.
2. Agenten gör en commit på `main`.
3. GitHub är då före din arbetskopia.
4. Du hämtar hem ändringen med `git pull` (eller Sync i Cursor).
5. Därefter kan du fortsätta local-first som vanligt.

**Styrka:** snabbt när texten redan är färdig i chatten och ska arkiveras. Fungerar även om agenten inte sitter i din Cursor-session.  
**Sväghet:** Explorer-trädet ljuger tills du pullar. Om du samtidigt har lokala osparade ändringar kan pull ge konflikt. Du granskar texten *efter* att den redan ligger på GitHub.

Remote-first är ett undantag. Använd det när du medvetet vill att agenten ska skriva till GitHub. Gå sedan tillbaka till local-first så fort filerna finns på disken.

---

## 4. Receptet: hämta hem en remote-first-ändring

Målet är inte att ladda ner zip från GitHub. Målet är att *uppdatera den git-klon du redan har*, så att Cursor, Git och GitHub pekar på samma commit.

Du kör PowerShell på Windows. Dela kommandona — använd inte `&&`.

### Steg 1 — stå i rätt mapp

I Cursor: Terminal → öppna en terminal i projektroten `AI-teknik`.

```powershell
Get-Location
git status
```

`Get-Location` ska visa projektroten. `git status` talar om två *olika* saker:

1. Om arbetskopian är ren eller smutsig (har du ändringar som inte är committade?).
2. Om den lokala grenen ligger före, efter eller jämsides med `origin/main`.

De två kan förekomma i alla kombinationer. Se avsnitt 6.

### Steg 2 — om arbetskopian är ren

Om `git status` säger `nothing to commit, working tree clean`:

```powershell
git fetch origin
git pull origin main
```

Därefter ska Explorer visa `Solutions` under rotnivån.

Samma sak går att göra i Cursor utan terminal: Source Control → **Sync** / **Pull**. Det är samma Git-operation, bara med knapp.

### Steg 3 — om arbetskopian inte är ren

Pull kan då vägra, eller ge konflikt. Välj *en* linje:

**A. Ändringarna ska behållas och committas först (oftast rätt i det här projektet)**

1. Granska diffen i Source Control.
2. Committa själv.
3. Därefter `git pull origin main`.

**B. Ändringarna är tillfälliga och ska inte committas än**

```powershell
git stash push -m "innan pull av Solutions"
git pull origin main
git stash pop
```

Om `stash pop` klagar på konflikt: lös filen, `git add` den, fortsätt.

**C. Ändringarna ska slängas** — bara om du är säker.

Ladda inte ner en ZIP från GitHub och packa upp den ovanpå klonen. Då får du filer på disken utan att det lokala Git förstår att de kommer från `origin`. Det skapar just den oreda de tre lagren är till för att undvika.

### Steg 4 — kontroll

```powershell
git log -3 --oneline
git status
```

Förväntat efter en lyckad pull: senaste commits nämner `Solutions`, och `status` är `Your branch is up to date with 'origin/main'` — så länge du inte själv lagt nya lokala commits därefter.

---

## 5. Vad som faktiskt hände när du pullade

Samma dag, i Cursor-terminalen i `C:\Users\kentl\OneDrive\AI-teknik`, kördes just receptet ovan. Först visade `git status`:

```text
On branch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
nothing to commit, working tree clean
```

Sedan:

```powershell
git fetch origin
git pull origin main
```

Git svarade med en *fast-forward* från `71b7ae4` till `55de1e5` och skapade tre filer i arbetskopian:

- `Solutions/260912/README.md`
- `Solutions/260912/three_biggest.md`
- `Solutions/README.md`

Explorer-trädet visade därefter mappen `Solutions` mellan `Skills` och `Vindkraft`. Det är inte Cursor som “skapade” katalogen ur tomma intet. Pullen skrev filerna till disken utifrån commits som redan fanns på GitHub. Då blev mappen synlig.

*Fast-forward* betyder här: din lokala `main` pekade på en äldre commit på samma linje som `origin/main`. Git behövde inte fläta ihop två historiker. Den flyttade bara din grenpekare framåt. Det är det enklaste utfallet av en pull — och det är därför det stod `can be fast-forwarded`.

Skärmbilden från det läget:

![Cursor efter lyckad git pull: mappen Solutions syns i Explorer, terminalen visar fast-forward.](./Bilder/cursor_efter_pull_solutions_260912.png)

Om den lokala bildfilen heter något annat: lägg den i `Solutions/260912/Bilder/` under namnet ovan, eller ändra sökvägen i länken. Bilden fanns i chatten och lokalt; den låg inte på GitHub när den här meningen skrevs. Att lägga in `Bilder/` är därför ett naturligt *local-first*-steg: du addar, committar och pushar själv.

---

## 6. Vad “working tree clean” betyder

**Arbetskopian** (*working tree*) är själva filerna på disken i projektmappen — det Explorer visar. Den jämförs med den commit som din nuvarande gren pekar på (*HEAD*).

### När den är ren

`nothing to commit, working tree clean` betyder:

- inga *spårade* filer är ändrade jämfört med HEAD,
- ingenting ligger i *staging* (`git add` har inte köat något),
- det finns inga ospårade nya filer som Git skulle nämna som `Untracked files`.

Kort: disken och den senaste lokala commiten är lika.

Det säger **inte** att du är ikapp GitHub. Det är en annan rad. I just det här fallet stod båda sakerna samtidigt:

| Rad i `git status` | Vad den betydde 12 september |
| --- | --- |
| `working tree clean` | du hade inte redigerat några lokala filer sedan din senaste commit |
| `behind 'origin/main' by 2 commits` | GitHub hade två commits som din dator ännu inte hade hämtat (Grok:s två remote-first-commits) |

Därför var arbetskopian *ren men efter*. Renhet handlar om *osparade ändringar*. Efter/före handlar om *vilken commit grenen pekar på*.

Det var också därför pullen kunde köras rakt av, utan stash och utan konflikt: det fanns inget lokalt arbete som kunde krocka med de inkommande filerna.

### När den inte är ren

Arbetskopian slutar vara ren så fort disken skiljer sig från HEAD. Vanliga orsaker:

| Situation | Vad Git typiskt visar | Exempel i det här projektet |
| --- | --- | --- |
| Du har ändrat en fil som redan versionshanteras | `modified: ...` | du rättar en mening i `three_biggest.md` |
| Du har skapat en ny fil som Git inte känner till | `Untracked files` | du lägger en skärmbild i `Bilder/` innan första `git add` |
| Du har tagit bort en spårad fil | `deleted: ...` | du tar bort en gammal README |
| Du har köat ändringar med `git add` men inte committat | `Changes to be committed` | filen är “klar för commit” men inte historik än |
| En editor eller OneDrive har rört filen | ibland `modified` utan att du medvetet redigerat | radslut, tidsstämpel, tillfällig `.tmp` |

Då är arbetskopian *smutsig* (*dirty*). Det är inte ett fel. Det är normal arbetsgång: du skriver, sedan väljer du om ändringen ska bli en commit.

Tumregel:

- **Ren** = inget ogjort arbete på disken. Tryggt att pulla eller byta gren.
- **Smutsig** = du har ett pågående utkast. Bestäm först: committa, stash:a eller släng — sedan pull.

En arbetskopia kan alltså vara:

- ren och ikapp GitHub (vanligt viloläge),
- ren men efter GitHub (precis före din pull),
- smutsig och ikapp GitHub (du skriver just nu, local-first),
- smutsig och efter GitHub (risk för konflikt — stash eller committa först).

---

## 7. Hur du bör arbeta framåt

En praktisk regel som passar det här projektet:

1. **Skriv och tänk lokalt** när texten ska formas. Det är standardläget.
2. **Låt en agent skriva direkt till GitHub** bara när du uttryckligen ber om det, och när du är beredd att pulla hem resultatet samma dag.
3. **Pulla innan du börjar ett nytt arbetspass** om någon annan — eller en agent — kan ha ändrat `main`. Annars bygger du på en gammal bild av repot.
4. **En sanning per fil.** Undvik att ha en version öppen i chatten, en på GitHub och en halvfärdig lokalt utan att veta vilken som gäller.
5. **Commit är en avsikt, inte en backup.** Små, läsbara commits slår en stor “allt på en gång”-commit när du senare ska förstå *varför* något ändrades.
6. **Skärmbilder och andra nya filer** läggs in local-first: de uppstår på disken hos dig, därför är det du som addar, committar och pushar dem.

Det pedagogiska värdet i just den här händelsen är inte mappen `Solutions`. Det är att du nu har sett båda riktningarna:

- utåt: arbetskopia → Git → GitHub (det du redan kan),
- inåt: GitHub → Git → arbetskopia (det som gjorde att `Solutions` dök upp i Cursor).

När båda riktningarna är begripliga är Git inte längre “ett verktyg i Cursor” utan tre lager du kan peka på.

---

## 8. Filer i den här mappen

| Fil | Roll |
| --- | --- |
| `README.md` | den här filen — tillkomst, pull, working tree, metaperspektiv |
| `three_biggest.md` | de tre AI-matematikresultaten 2026, med källor |
| `Bilder/` | skärmbilder från Cursor, bland annat efter den lyckade pullen |

Överordnad översikt: [`../README.md`](../README.md). Projektöversikt: [`../../README.md`](../../README.md).

---

*Första versionen skapades av Grok på GitHub 2026-09-12 (remote-first). Uppdaterad samma dag efter att `git pull` fast-forward:at arbetskopian och `Solutions` blivit synlig i Cursor.*
