# kent-agentiska-arbetsfloden – playbook för agentiska arbetsflöden

Metaskill som beskriver hur Kent och Claude tar fram ett nytt agentiskt arbetsflöde:
en återkommande uppgift som Claude utför i flera steg med connectorer (Gmail, Google
Drive, Google Docs, Google Sheets, Google Kalender), skills och schemalagda uppgifter.
Skillen gör inget jobb själv; den styr hur ett nytt flöde byggs och görs säkert.

Beskrivs pedagogiskt på live-sidan, Del C:
[https://kentlundgren.github.io/AI-teknik/Skills/](https://kentlundgren.github.io/AI-teknik/Skills/)

## Innehåll

- Coachläge: steg för steg, med alternativen vid varje val och skälen bakom reglerna.
- Typlära: arbetsflöde eller agent, och fem vanliga typer av arbetsflöden.
- Ordlista: trigger, polling, connector, human-in-the-loop, human-on-the-loop, kontrollpunkt, riskklass, reservplan, nödstopp, idempotens med flera.
- Tio faser från mål och manuell körning till påminnelser, lärdomar och uppföljning, med Fas 5b om riskklassning, ångra och reservplan.
- Tre utfall för schemalagda uppgifter: inget att göra, klart och fel.
- Valpunkter med alternativ, upplevda fallgropar och en mall i nio delar för nya uppgiftsskills.
- Lärt av andra: principer från Anthropic, AWS, OpenAI, DZone och Arize jämförda med Kents egna, med källor i Harvardstil.
- Genomarbetat exempel: [langkatekesen-protokoll](../langkatekesen-protokoll/).

## Var skillen finns

| Plats | Roll |
| --- | --- |
| Claude-kontot (sparad från .skill-fil) | Den version som körs i alla konversationer i Claude |
| [`SKILL.md`](./SKILL.md) i den här mappen | Den enda kopian i repot; läses av Claude Code och Cursor |

Versionen står i rubriken i `SKILL.md`. Git-historiken visar ändringarna version för version.

Innehållet bygger på arbetsflöden som Kent har gått igenom och godkänt. Uppgifterna
från externa källor är inte kvalitetssäkrade och bör kontrolleras mot källan.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-agentiska-arbetsfloden
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\.claude\skills\kent-agentiska-arbetsfloden`
