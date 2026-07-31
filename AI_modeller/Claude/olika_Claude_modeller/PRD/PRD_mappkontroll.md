# PRD – Mappkontroll (styrning av Claude: rätt mapp, rätt repo, rätt nivå)

**Namn:** PRD_mappkontroll
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_mappkontroll.md`
**Skapad:** 2026-07-31
**Version:** 2 (breddad omfattning, 2026-07-31 — se Ändringslogg)
**Status:** Utkast — två öppna frågor kvar innan frysning (se avsnitt 4)
**Typ:** Tilläggs-PRD (bygger på befintlig struktur i Claude-kompassen och
klel.wordpress.com), inte en grund-PRD för ett nytt projekt.

## 1. Bakgrund

En Claude Code-session öppnad i `Ovrigt/Fritid/ol_Tyskland` (Ölkalkylen)
fick i uppdrag att lägga till Fas 0 i Claude-kompassen — ett uppdrag som i
själva verket hörde hemma i det här repot (`AI-teknik`). Ingen mekanism
flaggade mismatchen; Claude sökte brett i filsystemet i stället för att
stanna och fråga.

Utredningen visade två luckor:
- Ingen global `CLAUDE.md` för Claude Code (`C:\Users\kentl\.claude\CLAUDE.md`
  saknades helt — den enda nivån som läses vid *varje* session, oavsett
  öppen mapp).
- Skillen `kent-meta-regler` (Kents fem grundregler, inklusive
  "mappkontroll vid sessionsstart") fanns bara på kontonivå
  (claude.ai/Cowork), inte som lokal kopia för Claude Code.

Båda åtgärdades i samma session: en ny global `CLAUDE.md` med en kort,
garanterat aktiv mappkontroll-regel, plus en Claude Code-kopia av skillen
(`kent-meta-regler-for-code`) med det fylligare resonemanget.

**Poäng 1 (grunden till hela ämnet):** normalt brukar det räcka med
*antingen* en CLAUDE.md-ändring *eller* en skill-ändring. Det här var ett
konkret fall där **båda** behövdes samtidigt — inte som en kompromiss, utan
för att de svarar på olika frågor (se avsnitt 2).

**Poäng 2 (tillkom under fortsatt diskussion 31/7):** när `AI-teknik`-repot
väl hittades visade det sig att mappen inte ens var tillgänglig för Claude
förrän Kent gav explicit åtkomst (`request_directory`). Det avslöjade att
"rätt mapp" i praktiken är flera lager, inte ett:
1. **Åtkomst** — har Claude tillgång till mappen alls?
2. **Innehållsmatchning** — matchar uppdraget den öppna mappens deklarerade
   scope (mappkontrollen som redan finns i global `CLAUDE.md`)?
3. **Repo-identitet** — är mappen ett Git-repo, och i så fall kopplat till
   rätt GitHub-remote? (se modellen i avsnitt 3b)

**Poäng 3 (Kents fråga, 31/7):** kan man dra nytta av att detta uppdrag
självt är ett levande exempel på Fas 0 (PRD-först)? Den här filen skrevs
och diskuterades innan något kodades eller publicerades — precis den
process Fas 0 föreskriver.

## 2. Syfte

Dokumentera och generalisera lärdomarna ovan — både som blogginlägg
(reflektion) och som konkreta, avgränsade tillägg i Claude-kompassen.
Tre kärnbudskap att förmedla:

> **A. CLAUDE.md och skill är inte två alternativ på samma skala.**
> CLAUDE.md svarar på "vad måste alltid vara sant, garanterat, i varje
> session?". Skill svarar på "vilken kunskap/förmåga ska finnas
> kontextuellt tillgänglig, delbar mellan ytor?". Ibland kräver en regel
> båda: en kort, garanterat aktiv rad i CLAUDE.md som pekar vidare till en
> fylligare skill.

> **B. "Rätt mapp" är inte en binär fråga.** Det är tre lager (åtkomst,
> innehållsmatchning, repo-identitet), och repo-identiteten i sin tur har
> tre möjliga lägen — inte "kopplat rätt / kopplat fel" (se modell i
> avsnitt 3b).

> **C. Den här sessionen är själv ett exempel på Fas 0 i praktiken** — en
> PRD skriven, diskuterad och breddad innan blogg eller kod producerades.

## 3. Omfattning

**Ingår — fyra beröringspunkter, ingen ny sektion i `index.html`:**

1. **Fas 1 (Styrfiler)** — avgränsad exempel-box om "både CLAUDE.md och
   skill" (budskap A ovan)
2. **Fas 3 (Cursor/Git/GitHub)** — fördjupat exempel: inte bara *att* lokalt
   och globalt repo ska vara kopplade, utan tre-lägesmodellen (budskap B,
   se 3b)
3. **Fas 0 och/eller Sammanfattning** — kort tillägg som pekar på den här
   sessionen som ett andra, pågående exempel på "PRD-först i praktiken"
   (budskap C), i linje med hur Sammanfattning redan beskriver hur sidan
   själv byggdes
4. Blogginlägg på klel.wordpress.com/category/ai/ som väver ihop alla tre
   budskapen
5. Ny källpost i `sourcesData` (alfabetisk plats, enligt redan etablerad
   regel)

**Ingår inte:**
- Ändring av grundstrukturen i Fas 0–3 (sex sektioner, id:n, färgschema) —
  dessa är enligt `claude-kompassen-konventioner` ett "publikt kontrakt"
  och ändras inte utan uttrycklig fråga. De tre/fyra tilläggen ovan är
  *innehåll i befintliga kort*, inte nya sektioner.
- Ändringar i Ölkalkylen-projektet (`ol_Tyskland`) — det var bara
  ursprungsplatsen för incidenten

### 3b. Modell: tre lägen för mapp- och repo-kontroll

Utöver mappkontroll (lager 1–2 i avsnitt 1) tillkommer repo-identitet
(lager 3) med tre möjliga utfall, inte två:

| Läge | Beskrivning | Åtgärd |
|---|---|---|
| **Känt-gott** | Git-repo finns lokalt, `git remote -v` pekar på rätt GitHub-repo, lokalt och globalt i synk | Fortsätt, inget att flagga |
| **Känt-nytt** | Inget Git-repo än — men det är förväntat, projektet är genuint nytt | Fortsätt, men säg det uttryckligen ("inget repo än, `git init`/`gh repo create` är ett kommande steg") i stället för att tyst anta |
| **Okänt/avvikande** | Repo saknas fast mappen redan har innehåll/historik som antyder att ett borde finnas, eller repo finns men pekar fel, eller har divergerat från det publicerade | Stanna, flagga, fråga Kent |

Den centrala poängen: frånvaro av Git/GitHub-koppling är bara ett problem
om det är *oväntat*. Skillnaden mellan "känt-nytt" och "okänt/avvikande"
måste göras explicit, inte antas tyst.

## 4. Öppna beslut (två kvarvarande frysningspunkter)

**4a. Hur ska "både–och"-exemplet (budskap A) visas konkret i Fas 1?**

Rekommendation, ännu ej uttryckligen bekräftad: en avgränsad exempel-box i
Fas 1-kortet, inte en ny sektion. Bloggen bär det fylliga resonemanget
(tabell/diagram); kompassen visar det konkreta, avgränsade exemplet.

**4b. Ska uppdatering av de faktiska styrfilerna (global `CLAUDE.md` och
`kent-meta-regler-for-code`) med tre-lägesmodellen (avsnitt 3b) ingå som
en leverans i den här PRD:n, eller tas som ett separat, mindre uppdrag
efteråt?**

Det här är en skarpare regel än vad de filerna innehåller idag (de pratar
bara om mappmatchning, inte om att skilja "nytt projekt" från "trasig
koppling"). Hör tekniskt till ett annat repo (`C:\Users\kentl\.claude\`)
än det här (`AI-teknik`), vilket talar för att hålla det separat — men det
är samma upptäckt, samma dag, vilket talar för att ta det här. Väntar på
Kents beslut.

Väntar på svar på 4a och 4b innan frysning och första ändring av
`index.html`.

## 5. Leveranser

- [ ] Blogginlägg, publicerat på klel.wordpress.com
- [ ] Exempel-box i Fas 1-kortet i `index.html` (budskap A)
- [ ] Fördjupat exempel i Fas 3-kortet: tre-lägesmodellen (budskap B)
- [ ] Kort tillägg i Fas 0 och/eller Sammanfattning: denna session som
      andra exempel på PRD-först i praktiken (budskap C)
- [ ] Ny post i `sourcesData`
- [ ] (ev., beroende på svar på 4b) Uppdatering av
      `C:\Users\kentl\.claude\CLAUDE.md` och
      `C:\Users\kentl\.claude\skills\kent-meta-regler-for-code\SKILL.md`
      med tre-lägesmodellen
- [ ] (ev.) `README.md`-uppdatering i den här mappen, enligt repots
      README-konvention, om nya filer/länkar tillkommer

## 6. Namnkonvention för PRD:er (öppen fråga, inget beslut ännu)

Diskuterad men inte avgjord: content-baserat namn utan nummer (som denna
fil och `PRD_slap.md`) rekommenderas framför sekventiell numrering
(PRD1/PRD2/PRD3), eftersom nummer blir missvisande om arbete inte är
linjärt. Ett eventuellt PRD-index (tabell i README) kan ge kronologin utan
att hårdkoda nummer i filnamnen. Kent har uttryckligen sagt "inget beslut
än" — återkom när fler PRD:er finns att jämföra.

## 7. Källor

- Denna konversation (mappkontroll-incidenten och dess vidareutveckling,
  2026-07-31)
- `Ovrigt/Fritid/ol_Tyskland/PRD_slap.md` — stilmall för tilläggs-PRD:er
- `AI_modeller/Claude/olika_Claude_modeller/.claude/skills/claude-kompassen-konventioner/SKILL.md`
  — redan existerande dokumentation av tre skill-nivåer i samma projekt

## 8. Status

Utkast, sparat. Två öppna frågor kvar (avsnitt 4a, 4b) innan frysning.
Ingen kod eller blogg-text ska skrivas förrän den frysts. Git-commit/push
av den här filen görs av Kent själv via Cursor, enligt projektets
`CLAUDE.md`.

## Ändringslogg

- 2026-07-31 (v1): Skapad. Omfattning: ett exempel (CLAUDE.md-och-skill) i
  Fas 1.
- 2026-07-31 (v2): Breddad efter fortsatt diskussion. Tillagt: tre-lägers
  modell för repo-identitet (Fas 3), koppling till Fas 0/Sammanfattning
  som levande exempel, öppen fråga 4b om att uppdatera de faktiska
  styrfilerna.
