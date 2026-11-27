# kent-agentiska-arbetsfloden – playbook för agentiska arbetsflöden

Metaskill som beskriver hur Kent och Claude tar fram ett nytt agentiskt arbetsflöde:
en återkommande uppgift som Claude utför i flera steg med connectorer (Gmail, Google
Drive, Google Docs, Google Sheets, Google Kalender), skills och schemalagda uppgifter.
Skillen gör inget jobb själv; den styr hur ett nytt flöde byggs och görs säkert.

Beskrivs pedagogiskt på live-sidan, Del C:
[https://kentlundgren.github.io/AI-teknik/Skills/](https://kentlundgren.github.io/AI-teknik/Skills/)

## Innehåll

`SKILL.md` är kärnan och läses varje gång skillen aktiveras:

- Läsguide: när varje referensfil ska läsas.
- Coachläge: steg för steg, med alternativen vid varje val och skälen bakom reglerna.
- Tillväxtregel: en ny lärdom flyttas in först när ett andra flöde har bekräftat den, säkerhetsregler får gå in direkt, och kärnan är högst 22 000 tecken.
- Typlära: arbetsflöde eller agent, och fem vanliga typer av arbetsflöden.
- Tio faser från mål och manuell körning till uppföljning, med fasläget som tabell och Fas 5b om riskklassning, ångra och reservplan.
- Mall i nio delar för nya uppgiftsskills, och var skillsen finns.

Referensfilerna läses vid behov:

| Fil | Innehåll |
| --- | --- |
| [`ordlista.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/ordlista.md) | Begreppen: trigger, polling, human-in-the-loop, idempotens med flera |
| [`valpunkter.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/valpunkter.md) | Alternativ vid val, och vad man ska tänka på |
| [`fallgropar.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/fallgropar.md) | Koppla en connector steg för steg, och upplevda fallgropar |
| [`publik-privat.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/publik-privat.md) | Fyra lager, gränssnitt, slussen från privat till publikt, namn och märkning, tre zoner och säkerhetskopia |
| [`exempel-langkatekesen.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/exempel-langkatekesen.md) | Det genomarbetade exemplet, fas för fas |
| [`lart-av-andra.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/lart-av-andra.md) | Principer från Anthropic, AWS, OpenAI, DZone och Arize, med källor i Harvardstil |
| [`behorighetsprov.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/behorighetsprov.md) | Pröva vad en ny obevakad uppgift får göra: testfil, sju prov, mall och städning (inte prövad än) |
| [`kandidater.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/references/kandidater.md) | Lärdomar från ett enda flöde som väntar på ett andra |

Uppgiftsskillen som exemplet bygger på: [langkatekesen-protokoll](https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/langkatekesen-protokoll).

## Var skillen finns

| Plats | Roll |
| --- | --- |
| Claude-kontot (sparad från .skill-fil) | Den version som körs i alla konversationer i Claude |
| [`SKILL.md`](https://github.com/kentlundgren/AI-teknik/blob/main/.claude/skills/kent-agentiska-arbetsfloden/SKILL.md) och `references/` i den här mappen | Den enda kopian i repot; läses av Claude Code och Cursor |

Versionen står i rubriken i `SKILL.md`. Git-historiken visar ändringarna version för version.
När den sparas på kontot ska `.skill`-filen innehålla hela mappen, även `references/`.

Innehållet bygger på arbetsflöden som Kent har gått igenom och godkänt. Uppgifterna
från externa källor är inte kvalitetssäkrade och bör kontrolleras mot källan.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-agentiska-arbetsfloden
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-agentiska-arbetsfloden`
