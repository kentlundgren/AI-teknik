---
name: kent-projektstruktur
description: >
  Hur Claude strukturerar nytt arbete i Kents projekt: mappar, filer och repon. Använd ALLTID innan du
  skapar en ny fil, mapp, analys, datapipeline, skill eller ett nytt repo, och när Kent frågar hur ett
  AI-projekt bör struktureras. Claude ska då analysera var det nya hör hemma, redovisa om det läggs i
  befintliga filer eller i nya, förklara var nya filer placeras (och om en ny mapp skapas), visa de
  alternativ som finns med för- och nackdelar, och säga vilket alternativ Claude föredrar och varför.
  Innehåller också ett bibliotek av strukturmönster (en repo eller flera, efter typ eller efter fall,
  datalager, var regler, skills och minne hör hemma) som växer för varje projekt.
metadata:
  type: process
---

# Kents regler för att strukturera projekt (version 1.0, 2026-11-23)

Kent är ständigt på jakt efter kunskap om hur man strukturerar AI-projekt i mappar, filer och repon. Han vill inte bara ha en fungerande placering, han vill förstå **hur jag tänker** och se **vilka alternativ som fanns**. Den här skillen gör det till en vana: varje gång något nytt skapas redovisas placeringen och resonemanget.

**Fullständig fil:** `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-projektstruktur\SKILL.md` (den här filen). En tunn pekare finns i `C:\Users\kentl\.claude\skills\kent-projektstruktur\SKILL.md`. Skillen synkas inte till Cowork eller kontot (claude.ai).
**Beslutslogg:** [LOGG.md](LOGG.md) i samma mapp. En rad per beslut, så att mönstren går att jämföra mellan projekt.

## Regeln i en mening

Innan jag skapar något nytt: titta på den befintliga strukturen, avgör om det nya hör hemma i en befintlig fil, en ny fil eller en ny mapp, och redovisa för Kent **var, varför och vilka alternativ som fanns**, med min favorit utpekad.

## Arbetsgång

1. **Inventera.** Läs mappträdet, README, projektets `CLAUDE.md`/`AGENTS.md` och de index som finns (filtabeller, `dokument.json`, tester). Notera vad som är publicerat (en publicerad adress är ett löfte), vad som är ignorerat av git och vilka namnregler som gäller.
2. **Klassa det nya.** Vilken sorts sak är det?
   - *App eller sida* (publiceras, har delad adress)
   - *Underlag eller verktyg för ett enskilt fall*
   - *Analys över flera fall* (till exempel en kandidatlista)
   - *Datapipeline* (hämta, rensa, härleda)
   - *Dokumentation eller anteckning*
   - *Regel, procedur eller kunskap* (CLAUDE.md, skill, minne)
3. **Välj nivå: befintlig fil, ny fil, ny mapp eller nytt repo.** Använd testerna nedan.
4. **Ta fram 2–4 alternativ** när valet inte är självklart, och peka ut ett favoritalternativ med skälet. Är valet självklart räcker en mening om varför.
5. **Uppdatera indexen** (README-tabell, projektets `CLAUDE.md`, tester som kontrollerar länkar eller ordning) i samma ändring.
6. **Redovisa** enligt mallen nedan, och lägg en rad i [LOGG.md](LOGG.md) när ett nytt mönster eller ett nytt val har gjorts.

## Beslutstester: befintlig fil, ny fil, ny mapp, nytt repo

| Fråga | Svaret pekar mot |
|---|---|
| Hör innehållet till samma sak som en befintlig fil, och ändras de tillsammans? | Lägg det i den befintliga filen |
| Har det ett eget syfte, en egen ändringstakt eller en egen läsare? | Ny fil |
| Blir det tre eller fler filer som hör ihop (skript, data, resultat, README)? | Ny mapp med README |
| Är det publicerat eller delat via en adress? | Flytta aldrig. Bygg nytt bredvid, och länka |
| Är rådatan stor eller kan den hämtas om? | Rådata utanför git, med ett skript som hämtar den |
| Återanvänds det av minst två repon, har det egen versionering eller annan publik, eller är det stort eller känsligt? | Överväg ett eget repo |
| Gäller regeln alla projekt, en projekttyp eller bara det här projektet? | Global `CLAUDE.md`, en skill, eller projektets `CLAUDE.md` |

## Strukturmönster (biblioteket)

**A. Ett repo eller flera.**
- *Ett repo per projekt* (Kents vanliga val). En historik, en `CLAUDE.md`, enkla länkar. Passar tills något återanvänds utanför repot.
- *Monorepo med flera delprojekt.* Passar när delprojekten delar kod (kalkylkärnan i Vindkraft). Kräver tydliga undermappar och README per delprojekt.
- *Eget repo för data eller bibliotek.* Passar när det återanvänds av flera repon, har egen utgivning eller blir stort. Kostar synk, ytterligare en `CLAUDE.md` och regel 12 (samma namn lokalt och på GitHub).

**B. Indelning inuti ett repo.**
- *Efter typ* (`src/`, `data/`, `docs/`). Tydligt för teknisk läsare, men sammanhang som hör ihop sprids ut.
- *Efter fall eller funktion* (`langhult/`, `onnerup/`). Allt om ett fall på ett ställe. Kents val när fallen har eget underlag.
- *Efter livscykel eller datalager* (`data_raw/` ignorerad, `skript/`, utdata som committas, `rapporter/`). Passar datapipelines och växer väl.
- *Hybrid:* en mapp per fråga eller analys, och i den en enkel indelning. Börja platt och inför lager först när det finns minst tre analyser.

**C. Publicerat och opublicerat.** En publicerad sida, dess skript, stilar och delningsbild flyttas inte (adressen är delad). Underlag och verktyg läggs i en mapp bredvid. Behövs en flytt: lämna en omdirigeringssida.

**D. Var regler, kunskap och minne hör hemma.**
- *Global `CLAUDE.md`:* korta regler som alltid gäller.
- *Projektets `CLAUDE.md`:* projektets mappar, kommandon och checklistor.
- *Skill:* en procedur eller kunskap som laddas när den behövs (den här filen).
- *Minne:* Kents preferenser och bakgrunden till beslut, sådant som inte syns i koden.
- *README:* för människor som läser repot.
- *`AGENTS.md`:* bara om ett annat verktyg (Cursor, Grok) ska läsa samma regler. Duplicera inte innehållet, peka på det.

**E. Namn.** Gemener och inga å, ä, ö i mapp- och filnamn. Namnge efter syfte när syftet är stabilt, efter källa när källan är poängen. En README i varje mapp med mer än två filer.

**F. Stora eller hämtade data.** Rådata ligger i en ignorerad mapp (`data_raw/`) och skapas av ett skript som är versionerat. Små, härledda resultat (CSV, Markdown) committas, med hämtdatum och källa. Testa logiken mot påhittad data utan nätverk.

## Mall för redovisningen (varje gång något nytt skapas)

Svaret innehåller, kort:

1. **Så placerar jag det:** en tabell med fil, plats (befintlig eller ny) och skälet. Säg uttryckligen om jag **ändrar en befintlig fil** eller **skapar en ny**, och om en **ny mapp** skapas samtidigt.
2. **Alternativ:** 2–4 sätt att göra det på, med för- och nackdelar, och **min favorit** med skälet. Säg också vad som skulle få mig att byta.
3. **Utanför versionshanteringen:** vad som ignoreras och hur det återskapas.
4. **Uppdaterade index:** README, `CLAUDE.md`, tester.
5. **Hur strukturen kan växa:** vad som händer när det kommer en andra eller tredje analys av samma slag.

## Min grundregel och mina favoriter

- **Små, ändamålsstyrda mappar framför en stor.** En mapp per fråga eller analys, med README, är lättare att hitta, flytta och radera än ett växande bibliotek av lösa filer.
- **Det som är publicerat står still. Det som är nytt läggs bredvid.**
- **Rådata utanför git, skript och små resultat i git.** Det som går att återskapa behöver inte versionshanteras.
- **Börja platt, inför lager när det behövs.** Tre analyser av samma slag är ett bra tecken för att dela upp i skript, data och rapporter.
- **Ett ställe för varje sak.** Skriv ned regeln en gång (CLAUDE.md eller skill) och peka dit från övriga ställen.
- **Eget repo först när något verkligen återanvänds** av flera repon eller får egen utgivning.

Favoriten är ett förslag och inte ett beslut. Kent bestämmer, och säger han annat följer jag det och loggar valet.

## Kontroll före jag säger att något är klart

- Finns det en README i varje ny mapp, med `## Repo` sist, och är den länkad från filtabellen?
- Är rådata ignorerad och går den att återskapa?
- Har jag redovisat om filer ändrats eller skapats, och var de nya ligger?
- Har jag angett alternativ och favorit när valet inte var självklart?
- Är en rad tillagd i [LOGG.md](LOGG.md)?

## Uppdateringslogg

- 2026-11-23 (v1.0): skapad efter Kents önskan att få redovisat hur ny utveckling struktureras, med alternativ och favorit. Första tillämpningen: `projektkandidater/` i Vindkraft.
