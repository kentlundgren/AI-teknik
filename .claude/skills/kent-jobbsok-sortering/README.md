# kent-jobbsok-sortering – sök och sortera lediga tjänster (under uppbyggnad)

**PUBLIKT:** här finns inga personuppgifter, bara metod och påhittade exempel. Användarens riktiga uppgifter ligger i en privat mapp utanför repot.

En agent som byggs fas för fas med metaskillen
[`kent-agentiska-arbetsfloden`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/SKILL.md).
**Status:** version 0.1. Fas 2 (manuell körning) är avslutad, fas 3 (behörigheter) står på tur. Någon `SKILL.md`
finns inte än; den skrivs i fas 6. Mappen är därför ingen skill som kan köras.

## Vad agenten ska göra

Hitta nya ekonom- och controllertjänster, sortera dem mot en profil i
**Stark match**, **Möjlig** och **Bortvald** med skäl, och lämna listan till en
människa. Agenten söker inga jobb och skickar ingenting. Typ: ett fast
arbetsflöde med ett agentiskt steg (bedömningen).

Ansökan och CV hör till ett eget flöde, som startas när människan har valt ett jobb.

## Publik process, privat underlag

| Del | Var | Innehåll |
|---|---|---|
| Metod | Den här mappen (publik) | Skript, format, exempel, utvecklingslogg, senare `SKILL.md` |
| Inställningar, data och tillstånd | En privat mapp utanför repot | Profil, sökningar, visade jobb, testfall och resultat |

Det privata läser det publika. Inget privat kopieras hit. Lärdomar förs över
bara omskrivna till generella och granskade av en människa.

**Gränssnittet** (formatversion 1) är tre privata filer. Exemplen innehåller
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

Med `--markera-visade` läggs träffarna i tillståndet. Slutkod 0 betyder klart,
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
