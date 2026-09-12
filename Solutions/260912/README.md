# 260912 — vad som hände, och hur filerna kommer hem till Cursor

**Datum:** 2026-09-12  
**Mapp:** `Solutions/260912/`  
**Relaterad fil:** [`three_biggest.md`](./three_biggest.md)  
**Arbetskopia på den här datorn:** `C:\\Users\\kentl\\OneDrive\\AI-teknik`  
**Live-sida:** https://kentlundgren.github.io/AI-teknik/Solutions/260912/

Den här README:n har tre uppgifter:

1. Dokumentera *hur* mappen och markdown-filen kom till — ett annat arbetssätt än det vanliga i det här repot.
2. Förklara hur lokala filer, Git och GitHub hänger ihop, och hur du hämtar hem det som redan ligger på GitHub.
3. Dokumentera övningen samma dag: pull, därefter fetch+status som visade *en commit efter*, och vad *working tree clean* betyder.

Projektets vanliga Git-regel står kvar: du committar och pushar själv. Se [`RAG/WORKFLOW.md`](../../RAG/WORKFLOW.md). Den 12 september är ett medvetet undantag: **först GitHub, sedan Git och arbetskopian** (“bakvänt” mot local-first).

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
                         git fetch / git pull  →  lokalt Git  →  arbetskopian i Cursor
```

Grok skapade inte mappar på din Windows-dator. Grok skapade filer *direkt i fjärrrepot* `kentlundgren/AI-teknik` på GitHub. En mapp i Git är inte en tom katalog — den uppstår när minst en fil committas på den sökvägen. Därför fanns `Solutions/260912/` på GitHub så fort `three_biggest.md` lades in — men inte i Cursor-trädet förrän arbetskopian uppdaterades.

Första commiten:

- sökväg: `Solutions/260912/three_biggest.md`
- innehåll: de tre AI-matematikresultaten (Navier–Stokes / strömningar, Erdős enhetsavstånd, Jacobian-förmodan)

Den här filen (`README.md`) och [`../README.md`](../README.md) lades till i nästa commit, på samma sätt: remote-first. Därefter har README uppdaterats flera gånger på GitHub, vilket är själva övningen: varje remote-commit gör arbetskopian *ren men efter* tills du fetch:ar och pullar.

---

## 2. Tre lager — metaperspektivet

Det är lättare att välja rätt kommando om man håller isär tre saker som ofta slås ihop i vardagsspråk.

| Lager | Var det finns | Vad det är | Vad Cursor visar |
| --- | --- | --- | --- |
| **Arbetskopia** (*working tree*) | filer på disken, här `C:\\Users\\kentl\\OneDrive\\AI-teknik` | det du öppnar, redigerar och läser | Explorer-trädet till vänster |
| **Lokalt Git** | mappen `.git` i samma projekt | historik, grenar, commits som *din dator* känner till | Source Control, `git log` |
| **GitHub** | `github.com/kentlundgren/AI-teknik` | den delade fjärrkopian (`origin`) | webben, och i Cursor först *efter* fetch/pull |

Git är versionsdatabasen. GitHub är en server som håller *en* kopia av den databasen plus webbgränssnitt, Issues och Pages. Cursor är editorn som tittar på arbetskopian och pratar med det lokala Git.

`origin/main` på din dator är *inte* live-GitHub. Det är en lokal kopia av GitHub, uppdaterad bara vid `git fetch` eller `git pull`.

En fil “finns” alltså inte på ett ställe. Den kan finnas:

- bara lokalt (osparad eller untracked),
- lokalt committad men inte pushad,
- på GitHub men inte i din arbetskopia,
- på båda, men i olika versioner (divergerande historik).

När något “inte syns i Cursor” är den första frågan: *vilket lager tittar jag på?*

```text
  [din redigering]          [din commit]              [andras / Grok]
 arbetskopia  ↔— add/commit —→  lokalt Git  ↔— push/pull —→  GitHub (origin)
```

---

## 3. Två arbetsprocesser — och övningen “bakvänt”

### A. Local-first (standard i det här repot)

1. Skriv eller ändra filer i Cursor.
2. Granska diffen i Source Control.
3. Committa själv, med ett begripligt meddelande.
4. Pusha själv när du vill att GitHub ska spegla läget.

**Styrka:** du ser texten innan den blir offentlig. Du tränar Git-flödet. Du behåller kontrollen över *när* något lämnar datorn.  
**Sväghet:** en agent som bara har GitHub-access kan inte hjälpa till att lägga in filen åt dig.

Detta är medvetet. `RAG/WORKFLOW.md` Regel 1 skrevs just för att commit och push inte ska ske “av misstag” av en agent.

### B. Remote-first / bakvänt (det vi övar 12 september)

1. Texten eller ändringen landar *först* på GitHub (här: Grok via GitHub-connector).
2. GitHub är då före både lokalt Git och arbetskopian.
3. Du kör `git fetch origin` så att den lokala bilden av GitHub uppdateras.
4. `git status` visar då om du ligger efter.
5. `git pull origin main` flyttar in commiten i lokalt Git *och* skriver filerna till disken.
6. Därefter är de tre lagren i fas — tills nästa remote-commit.

Det är bakvänt mot det du är van vid, men samma tre lager. Bara ordningen ändras.

**Styrka:** du ser konkret vad fetch gör (uppdaterar kunskapen om GitHub) och vad pull gör (hämtar in kunskapen till gren och disk).  
**Sväghet:** Explorer-trädet och en `git status` *utan* färsk fetch kan se ut som att allt är ikapp, fast GitHub redan har gått vidare.

Skärmbilder och andra filer som *uppstår hos dig* läggs ändå in local-first: de finns på disken först.

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

`git status` talar om två *olika* saker: om arbetskopian är ren, och om den lokala grenen ligger före eller efter den `origin/main` din dator senast hämtade. Se avsnitt 7.

### Steg 2 — jämför mot live-GitHub

```powershell
git fetch origin
git status
```

- `up to date` + `working tree clean` → i fas mot GitHub *just nu*.
- `behind 'origin/main' by N commits` + `working tree clean` → tryggt att pulla.
- `ahead of 'origin/main'` → du har lokala commits som inte är pushade.

### Steg 3 — om arbetskopian är ren och du ligger efter

```powershell
git pull origin main
```

Samma sak går i Cursor: Source Control → **Sync** / **Pull**.

### Steg 4 — om arbetskopian inte är ren

**A.** Committa först, därefter pull.  
**B.** `git stash` → pull → `git stash pop`.  
**C.** Släng ändringarna — bara om du är säker.

Ladda inte ner en ZIP från GitHub och packa upp den ovanpå klonen.

### Steg 5 — kontroll

```powershell
git fetch origin
git status
```

Förväntat viloläge: `up to date with 'origin/main'` och `working tree clean`.

---

## 5. Första pullen — mappen blev synlig

Först visade `git status` att grenen låg efter med 2 commits, working tree clean. Sedan:

```powershell
git fetch origin
git pull origin main
```

Git svarade med *fast-forward* från `71b7ae4` till `55de1e5` och skapade tre filer i arbetskopian. Explorer visade därefter `Solutions`.

![Cursor efter första git pull: mappen Solutions syns, terminalen visar fast-forward 71b7ae4..55de1e5.](./Bilder/git_pull_origin_main.jpg)

---

## 6. Andra varvet — fetch visade att status kan vara inaktuell

Lite senare kördes först `git status` (fortfarande `up to date`). Sedan, efter en ny remote-commit på GitHub:

```powershell
git fetch origin
git status
```

Då blev svaret: bakom `origin/main` med 1 commit, working tree clean.

Det är lektionen i en bild:

- arbetskopian var fortfarande **ren**,
- men den lokala grenen var **en commit efter** GitHub,
- och det syntes **först efter** `git fetch origin`.

![Efter ny git fetch: bakom origin/main med 1 commit, working tree fortfarande clean.](./Bilder/use_git_pull.jpg)

Nästa kommando i det läget:

```powershell
git pull origin main
```

---

## 7. Vad “working tree clean” betyder

**Arbetskopian** är filerna på disken. `working tree clean` betyder att disken och HEAD är lika. Det säger **inte** att du är ikapp GitHub.

Båda raderna förekom tillsammans två gånger den 12 september: ren arbetskopia, men efter `origin/main`.

Tumregel:

- **Ren** = inget ogjort arbete på disken. Tryggt att pulla.
- **Smutsig** = ett pågående utkast. Committa, stash:a eller släng — sedan pull.

---

## 8. Hur du bör arbeta framåt

1. **Local-first är standard** när du själv formar text och bilder.
2. **Remote-first / bakvänt** när en agent skriver till GitHub. Loop: fetch → status → pull → fetch+status igen.
3. **Lita inte på `git status` mot GitHub utan en färsk fetch.**
4. **En sanning per fil.**
5. **Commit är en avsikt, inte en backup.**

---

## 9. Filer i den här mappen

| Fil | Roll |
| --- | --- |
| `README.md` | den här filen — tillkomst, bakvänt flöde, fetch/pull, working tree |
| `index.html` + `style.css` + `script.js` | [live-sida](https://kentlundgren.github.io/AI-teknik/Solutions/260912/) |
| `three_biggest.md` | de tre AI-matematikresultaten 2026, med källor |
| `Bilder/git_pull_origin_main.jpg` | första pullen |
| `Bilder/use_git_pull.jpg` | andra varvet: fetch visar 1 commit efter |
| `Bilder/try_running_pull_first.jpg` | Cursor: pull före push |
| `Bilder/commit_message.jpg` | merge-commit i Cursor |

Överordnad översikt: [`../README.md`](../README.md). Projektöversikt: [`../../README.md`](../../README.md).

---

*Första versionen skapades av Grok på GitHub 2026-09-12 (remote-first). Avsnitt 1–9 återställda samma kväll efter en avhuggen mellanversion. Bildlänken i avsnitt 6 pekar på `Bilder/use_git_pull.jpg`.*
