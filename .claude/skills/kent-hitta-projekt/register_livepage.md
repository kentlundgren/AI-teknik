# Register: Kents GitHub-repon med Live Page

> **KOPIA.** Det här är en kopia för synlighet på GitHub. Originalet ligger i `C:\Users\kentl\.claude\skills\kent-hitta-projekt\` (utanför Git) och är det som ändras först. Ändra här bara om kopian synkas om. Kopierat 2026-10-09.

**Skapat:** 2026-10-09 (hämtat med `gh api repos/kentlundgren/<repo>/pages`, bara läsning)
**Används av:** skillen `kent-hitta-projekt`, Steg 2B och Steg 3.
**Syfte:** snabbt hitta rätt repo, Live Page och lokal mapp, så att en träff alltid kan
redovisas som ett par (lokal mapp + Live Page).

## Hur registret hålls aktuellt

Hämta om det vid behov (bara läsning):

```bash
gh repo list kentlundgren --limit 100 --json name,isPrivate -q '.[]|.name'
gh api repos/kentlundgren/<repo>/pages -q '.html_url + " | " + .source.branch'
```

- Live Page för en undermapp är `https://kentlundgren.github.io/<repo>/<mapp>/`, men bara om
  mappen har en `index.html`. En mapp utan `index.html` ger 404 (kontrollera med `curl -s -o /dev/null -w "%{http_code}"`).
- Lokal mapp: gissa aldrig. Kontrollera med `git remote -v` i mappen, eller läs raden
  "Lokal mapp" i repots README (Regel 9 i `kent-meta-regler-for-code`).
- Kolumnen "Lokal mapp" är ifylld bara där det är känt (källa: minnesposterna
  `reference_kent_projektkartor` och `project_git_github_koppling`). Resten är **ej verifierad**.

## Repon med Live Page (GitHub Pages påslaget)

Gren `main` och rotmapp om inget annat anges. Alla adresser har formen `https://kentlundgren.github.io/<repo>/`.

| Repo | Live Page | Lokal mapp |
|---|---|---|
| AI-teknik | https://kentlundgren.github.io/AI-teknik/ | `C:\Users\kentl\OneDrive\AI\AI-teknik` |
| ArbetenSokta (gren `public`, bara vitlistade filer) | https://kentlundgren.github.io/ArbetenSokta/ | `C:\Users\kentl\OneDrive\AI\Claude\ArbetenSokta` |
| Ekonomi | https://kentlundgren.github.io/Ekonomi/ | `C:\Users\kentl\OneDrive\AI\Claude\Ekonomi` (ej verifierad) |
| Ovrigt | https://kentlundgren.github.io/Ovrigt/ | `C:\Users\kentl\OneDrive\AI\Claude\Ovrigt` (ej verifierad) |
| Codex | https://kentlundgren.github.io/Codex/ | `C:\Users\kentl\OneDrive\AI\Codex` (ej verifierad) |
| Grok | https://kentlundgren.github.io/Grok/ | `C:\Users\kentl\OneDrive\AI\Grok` (ej verifierad) |
| Vindkraft | https://kentlundgren.github.io/Vindkraft/ | `C:\Users\kentl\OneDrive\AI\Cursor\Intressen\Vindkraft` |
| AI | https://kentlundgren.github.io/AI/ | ej kartlagd |
| Bjerred-el | https://kentlundgren.github.io/Bjerred-el/ | ej kartlagd |
| Bjerred-medlemmar | https://kentlundgren.github.io/Bjerred-medlemmar/ | ej kartlagd |
| Bjerred-skylt | https://kentlundgren.github.io/Bjerred-skylt/ | ej kartlagd |
| foreningar | https://kentlundgren.github.io/foreningar/ | ej kartlagd (kan ligga i `ClaudeCowork`) |
| Studier | https://kentlundgren.github.io/Studier/ | ej kartlagd |
| 1a_Claude_code | https://kentlundgren.github.io/1a_Claude_code/ | ej kartlagd |
| quiz | https://kentlundgren.github.io/quiz/ | ej kartlagd |
| Bokslutstider | https://kentlundgren.github.io/Bokslutstider/ | ej kartlagd |
| presentation1 | https://kentlundgren.github.io/presentation1/ | ej kartlagd |
| Gemini_Claude_CLI | https://kentlundgren.github.io/Gemini_Claude_CLI/ | ej kartlagd |
| Langkatekesen | https://kentlundgren.github.io/Langkatekesen/ | ej kartlagd |
| program (gren `master`) | https://kentlundgren.github.io/program/ | ej kartlagd |
| generativai-reacct | https://kentlundgren.github.io/generativai-reacct/ | ej kartlagd |
| mitt-skogsvarde-projekt | https://kentlundgren.github.io/mitt-skogsvarde-projekt/ | ej kartlagd |
| ekonomivisualisering | https://kentlundgren.github.io/ekonomivisualisering/ | ej kartlagd |

## Repon utan Live Page

kentlundgren (profil-repo), generativai-react, VindkraftensLonsamhet, aktieutveckling, transkribering, temperatur.
Privata och utan Pages: cursor-skills, Test_BS, test1, PyCharmLearningProject.

## Kända undermappar med egen Live Page (i AI-teknik)

| Ämne | Live Page | Lokal mapp |
|---|---|---|
| AI-modeller (samlingssida) | https://kentlundgren.github.io/AI-teknik/AI_modeller/ | `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_modeller` |
| AI-tester: vad mäter de egentligen? | https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/ | `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_modeller\AI_tester` |
| Claude-modeller och användning | https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/ | `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_modeller\Claude` |
| GPT6 (utkast om modellval och pris) | **saknar Live Page** (404, ingen `index.html`) | `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_modeller\GPT6` |

Undermapparna är en ofullständig lista. Fyll på när en sökning hittar fler.

## Ändringslogg

- 2026-10-09: Skapat efter att Kent bad om träffar som par (lokal mapp + Live Page).
