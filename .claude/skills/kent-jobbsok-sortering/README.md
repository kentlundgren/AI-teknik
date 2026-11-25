# kent-jobbsok-sortering – dagens jobb (version 0.3)

**PUBLIKT:** här finns inga personuppgifter, bara metod och påhittade exempel. Användarens riktiga uppgifter ligger i en privat mapp utanför repot.

En agent som byggs fas för fas med metaskillen
[`kent-agentiska-arbetsfloden`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/SKILL.md).

**Status:** version 0.3. [`SKILL.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/SKILL.md)
beskriver flödet. Det startas av en schemalagd uppgift på användarens dator eller för hand.
En tidsstartad körning har inte prövats än. Behörigheter, risk och kontroller är bara delvis prövade.

## Vad agenten gör

Söker lediga ekonom- och controllertjänster, presenterar varje gång de **tre lämpligaste** öppna
jobben med kort motivering (målet är att söka ett per arbetsdag), och skriver efter användarens val underlag till ansökan och CV enligt en
privat ansökningsinstruktion. Människan granskar och skickar in. Agenten skickar
ingenting. Typ: fast arbetsflöde med agentiska steg och människans val som grind.

## Agentens tre delar

| Del | Frågan den svarar på | Här |
|---|---|---|
| **Start** | När och hur börjar jobbet? | Uppgiften i användarens app. Publik mall: [`uppgift_mall.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/exempel/uppgift_mall.md) |
| **Metod** | Hur ska jobbet göras? | [`SKILL.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/SKILL.md) och [`hamta.py`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/skript/hamta.py) |
| **Underlag** | Vad arbetar den med och behöver minnas? | Privat. Påhittade exempel finns nedan |

Förklaring med källor:
[Agentens tre delar](https://kentlundgren.github.io/AI-teknik/Skills/#c-delar-rubrik).

## Publik process, privat underlag

| Del | Var | Innehåll |
|---|---|---|
| Metod | Den här mappen (publik) | Skript, format, exempel, utvecklingslogg, `SKILL.md` |
| Inställningar, data och tillstånd | En privat mapp utanför repot | Profil, sökningar, visade jobb, testfall och resultat |

Det privata läser det publika. Inget privat kopieras hit. Lärdomar förs över
bara omskrivna till generella och granskade av en människa.

**Gränssnittet** är privata filer: `profil.md` (formatversion 2), de två JSON-filerna
(formatversion 1) och en kandidatlista, `kandidater.md`, utan fast format. Exemplen innehåller
bara påhittade uppgifter:

| Privat fil | Läses av | Exempel |
|---|---|---|
| `profil.md` | Modellen, vid bedömningen | [`profil_exempel.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/exempel/profil_exempel.md) |
| `sokningar.json` | Skriptet | [`sokningar_exempel.json`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/exempel/sokningar_exempel.json) |
| `visade_jobb.json` | Skriptet, som också kan skriva i den | [`visade_jobb_exempel.json`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/exempel/visade_jobb_exempel.json) |

## Skriptet

[`skript/hamta.py`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/skript/hamta.py)
är en prototyp. Det gör de regelstyrda stegen och lämnar bedömningen till
modellen. Det kräver Python 3.9 eller senare och inga extra paket.

```powershell
python skript\hamta.py --installningar <privat>\sokningar.json --tillstand <privat>\visade_jobb.json --ut <privat>\resultat\<datum>
```

Med `--markera-visade` läggs träffarna i tillståndet. Med `--kontrollera <adress>` hämtas
annonssidan på nytt och märks ÖPPEN, STÄNGD eller KUNDE INTE KONTROLLERAS. Slutkod 0 betyder klart,
2 betyder FEL. Avvikelser, till exempel en källa utan rader, skrivs ut och
sparas även när körningen är klar. Skriptet vägrar att skriva inuti repot.

## Utvecklingen

[`UTVECKLING.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-jobbsok-sortering/UTVECKLING.md)
visar iakttagelse, ändring och effekt, testresultat och kända brister.
[Historiken för mappen](https://github.com/kentlundgren/AI-teknik/commits/main/.claude/skills/kent-jobbsok-sortering)
visar varje ändring. Mer om upplägget finns på lärosidan:
[Publik process, privat underlag](https://kentlundgren.github.io/AI-teknik/Skills/#c-publik-rubrik).

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-jobbsok-sortering
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-jobbsok-sortering`
