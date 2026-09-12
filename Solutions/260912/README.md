# 260912 — vad som hände, och hur filerna kommer hem till Cursor

**Datum:** 2026-09-12  
**Mapp:** `Solutions/260912/`  
**Relaterad fil:** [`three_biggest.md`](./three_biggest.md)

Den här README:n har två uppgifter:

1. Dokumentera *hur* mappen och markdown-filen kom till — ett annat arbetssätt än det vanliga i det här repot.
2. Förklara hur lokala filer, Git och GitHub hänger ihop, och hur du hämtar hem det som redan ligger på GitHub.

Projektets vanliga Git-regel står kvar: du committar och pushar själv. Se [`RAG/WORKFLOW.md`](../../RAG/WORKFLOW.md). Det som skedde 12 september var ett **uttryckligt undantag**.

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
                                                         din lokala kopia är ännu inte här
```

Grok skapade inte mappar på din Windows-dator. Grok skapade filer *direkt i fjärrrepot* `kentlundgren/AI-teknik` på GitHub. En mapp i Git är inte en tom katalog — den uppstår när minst en fil committas på den sökvägen. Därför finns `Solutions/260912/` på GitHub så fort `three_biggest.md` lades in.

Det är därför Cursor *lokalt* fortfarande visar trädet utan `Solutions`, samtidigt som Source Control kan visa committen `Lägg till Solutions/260912/three_biggest.md`. GitHub har gått före den lokala arbetskopian.

Första commiten:

- sökväg: `Solutions/260912/three_biggest.md`
- innehåll: de tre AI-matematikresultaten (Navier–Stokes / strömningar, Erdős enhetsavstånd, Jacobian-förmodan)

Den här filen (`README.md`) och [`../README.md`](../README.md) lades till i nästa commit, på samma sätt: remote-first.

---

## 2. Tre lager — metaperspektivet

Det är lättare att välja rätt kommando om man håller isär tre saker som ofta slås ihop i vardagsspråk.

| Lager | Var det finns | Vad det är | Vad Cursor visar |
| --- | --- | --- | --- |
| **Arbetskopia** | filer på disken, t.ex. under `AI-teknik\` | det du öppnar, redigerar och läser | Explorer-trädet till vänster |
| **Lokalt Git** | mappen `.git` i samma projekt | historik, grenar, commits som *din dator* känner till | Source Control, `git log` |
| **GitHub** | `github.com/kentlundgren/AI-teknik` | den delade fjärrkopian (`origin`) | webben, och i Cursor först *efter* fetch/pull |

Git är versionsdatabasen. GitHub är en server som håller *en* kopia av den databasen plus webbgränssnitt, Issues och Pages. Cursor är editorn som tittar på arbetskopian och pratar med det lokala Git.

En fil “finns” alltså inte på ett ställe. Den kan finnas:

- bara lokalt (osparad eller untracked),
- lokalt committad men inte pushad,
- på GitHub men inte i din arbetskopia (precis som nu),
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

### B. Remote-first (det som hände 12 september)

1. Du ber en agent som har GitHub-connector att skapa eller ändra filer *i repot på GitHub*.
2. Agenten gör en commit på `main`.
3. GitHub är då före din arbetskopia.
4. Du hämtar hem ändringen med `git pull` (eller Sync i Cursor).
5. Därefter kan du fortsätta local-first som vanligt.

**Styrka:** snabbt när texten redan är färdig i chatten och ska arkiveras. Fungerar även om agenten inte sitter i din Cursor-session.  
**Sväghet:** Explorer-trädet ljuger tills du pullar. Om du samtidigt har lokala osparade ändringar kan pull ge konflikt. Du granskar texten *efter* att den redan ligger på GitHub.

Remote-first är ett undantag. Använd det när du medvetet vill att agenten ska skriva till GitHub. Gå sedan tillbaka till local-first så fort filerna finns på disken.

---

## 4. Bästa sättet att få hem `Solutions/260912` nu

Målet är inte att ladda ner zip från GitHub. Målet är att *uppdatera den git-klon du redan har*, så att Cursor, Git och GitHub pekar på samma commit.

Du kör PowerShell på Windows. Dela kommandona — använd inte `&&`.

### Steg 1 — stå i rätt mapp

I Cursor: Terminal → öppna en terminal i projektroten `AI-teknik`.

```powershell
Get-Location
git status
```

`Get-Location` ska visa projektroten. `git status` talar om två saker: om du har osparade ändringar, och om din `main` ligger efter `origin/main`.

### Steg 2 — om arbetskopian är ren

Om `git status` säger `working tree clean`:

```powershell
git fetch origin
git pull origin main
```

Därefter ska Explorer visa `Solutions` under rotnivån, med `260912\README.md` och `260912\three_biggest.md`.

Samma sak går att göra i Cursor utan terminal: Source Control → **Sync** / **Pull**. Det är samma Git-operation, bara med knapp.

### Steg 3 — om du har lokala ändringar som inte är committade

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

Förväntat: senaste commits nämner `Solutions`, och `status` är `Your branch is up to date with 'origin/main'` (om du inte själv lagt nya lokala commits).

---

## 5. Hur du bör arbeta framåt

En praktisk regel som passar det här projektet:

1. **Skriv och tänk lokalt** när texten ska formas. Det är standardläget.
2. **Låt en agent skriva direkt till GitHub** bara när du uttryckligen ber om det, och när du är beredd att pulla hem resultatet samma dag.
3. **Pulla innan du börjar en ny arbetspass** om någon annan — eller en agent — kan ha ändrat `main`. Annars bygger du på en gammal bild av repot.
4. **En sanning per fil.** Undvik att ha en version öppen i chatten, en på GitHub och en halvfärdig lokalt utan att veta vilken som gäller.
5. **Commit är en avsikt, inte en backup.** Små, läsbara commits slår en stor “allt på en gång”-commit när du senare ska förstå *varför* något ändrades.

Det pedagogiska värdet i just den här händelsen är inte mappen `Solutions`. Det är att du nu har sett båda riktningarna:

- utåt: arbetskopia → Git → GitHub (det du redan kan),
- inåt: GitHub → Git → arbetskopia (det Cursor-trädet väntade på).

När båda riktningarna är begripliga är Git inte längre “ett verktyg i Cursor” utan tre lager du kan peka på.

---

## 6. Filer i den här mappen

| Fil | Roll |
| --- | --- |
| `README.md` | den här filen — tillkomst, metaperspektiv, hur man pullar |
| `three_biggest.md` | de tre AI-matematikresultaten 2026, med källor |

Överordnad översikt: [`../README.md`](../README.md). Projektöversikt: [`../../README.md`](../../README.md).

---

*Denna README skapades av Grok på begäran, direkt på GitHub, 2026-09-12. Nästa steg på den lokala datorn är `git pull`.*
