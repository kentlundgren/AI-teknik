# PRD – Mappkontroll (styrning av Claude: rätt mapp, rätt nivå)

**Namn:** PRD_mappkontroll
**Plats:** `AI_modeller/Claude/olika_Claude_modeller/PRD/PRD_mappkontroll.md`
**Skapad:** 2026-07-31
**Status:** Utkast — en öppen fråga kvar innan frysning (se avsnitt 4)
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

**Den centrala poängen, enligt Kent:** normalt brukar det räcka med
*antingen* en CLAUDE.md-ändring *eller* en skill-ändring. Det här var ett
konkret fall där **båda** behövdes samtidigt — inte som en kompromiss, utan
för att de svarar på olika frågor (se avsnitt 2).

## 2. Syfte

Dokumentera och generalisera lärdomen — både som blogginlägg (reflektion)
och som ett konkret tillägg i Claude-kompassen. Kärnbudskapet att förmedla:

> CLAUDE.md och skill är inte två alternativ på samma skala. CLAUDE.md
> svarar på "vad måste alltid vara sant, garanterat, i varje session?".
> Skill svarar på "vilken kunskap/förmåga ska finnas kontextuellt
> tillgänglig, delbar mellan ytor?". Ibland kräver en regel båda: en kort,
> garanterat aktiv rad i CLAUDE.md som pekar vidare till en fylligare skill.

## 3. Omfattning

**Ingår:**
- Blogginlägg på klel.wordpress.com/category/ai/
- Ett konkret, avgränsat tillägg i Claude-kompassen (`index.html`) som
  illustrerar "både–och"-exemplet
- Ny källpost i `sourcesData` (alfabetisk plats, enligt redan etablerad regel)

**Ingår inte:**
- Ändring av grundstrukturen i Fas 0–3 (sex sektioner, id:n, färgschema) —
  dessa är enligt `claude-kompassen-konventioner` ett "publikt kontrakt"
  och ändras inte utan uttrycklig fråga
- Ändringar i Ölkalkylen-projektet (`ol_Tyskland`) — det var bara
  ursprungsplatsen för incidenten

## 4. Öppet beslut (enda kvarvarande frysningspunkt)

**Hur ska "både–och"-exemplet visas konkret i `index.html`?**

Rekommendation: en avgränsad exempel-box/callout i **Fas 1**-kortet
(Styrfiler), inte en helt ny sektion/modul — eftersom Fas 1 redan handlar
om just CLAUDE.md och skills, och en ny sektion skulle bryta det etablerade
sex-sektions-kontraktet utan stark anledning. Bloggen bär det fylliga
resonemanget (tabell/diagram över när CLAUDE.md, när skill, när båda);
kompassen visar det konkreta, avgränsade exemplet.

Väntar på Kents bekräftelse innan detta fryses och `index.html` ändras.

## 5. Leveranser

- [ ] Blogginlägg, publicerat på klel.wordpress.com
- [ ] Exempel-box i Fas 1-kortet i `index.html`
- [ ] Ny post i `sourcesData`
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

- Denna konversation (mappkontroll-incidenten, 2026-07-31)
- `Ovrigt/Fritid/ol_Tyskland/PRD_slap.md` — stilmall för tilläggs-PRD:er
- `AI_modeller/Claude/olika_Claude_modeller/.claude/skills/claude-kompassen-konventioner/SKILL.md`
  — redan existerande dokumentation av tre skill-nivåer i samma projekt

## 8. Status

Utkast, sparat. En öppen fråga kvar (avsnitt 4) innan frysning. Ingen kod
eller blogg-text ska skrivas förrän den frysts. Git-commit/push av den här
filen görs av Kent själv via Cursor, enligt projektets `CLAUDE.md`.
