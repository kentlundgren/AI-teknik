# kent-agentiska-arbetsfloden – playbook för agentiska arbetsflöden

Läsbar kopia av metaskillen som beskriver hur Kent och Claude tar fram ett nytt
agentiskt arbetsflöde: en återkommande uppgift som Claude utför i flera steg med
connectorer (Gmail, Google Drive, Google Docs, Google Kalender), skills och
schemalagda uppgifter.

## Innehåll

- Coachläge: steg för steg, med alternativen vid varje val.
- Typlära: arbetsflöde eller agent, och fem vanliga typer av arbetsflöden.
- Riskklassning av åtgärder (låg, mellan, hög), möjlighet att ångra, reservplan om ingen agerar, nödstopp och nivåer av mänsklig granskning (in-the-loop, on-the-loop, kontrollpunkter).
- Tre utfall för schemalagda uppgifter: inget att göra, klart och fel.
- Lärt av andra: principer från Anthropic, AWS, OpenAI, DZone och Arize jämförda med Kents egna, med källor i Harvardstil.
- Ordlista: trigger, polling, connector, human-in-the-loop, idempotens, least privilege med flera.
- Tio faser från mål och manuell körning till påminnelser, lärdomar och uppföljning.
- Valpunkter med alternativ, fallgropar och en mall för nya uppgiftsskills.
- Genomarbetat exempel: [langkatekesen-protokoll](../langkatekesen-protokoll/).

## Var skillen finns

| Plats | Roll |
| --- | --- |
| Claude-kontot (sparad från .skill-fil) | Den version som körs i alla konversationer |
| [`.claude/skills/kent-agentiska-arbetsfloden/`](../../.claude/skills/kent-agentiska-arbetsfloden/SKILL.md) | Primär plats i repot, läses av Claude Code och Cursor |
| [`SKILL.md`](./SKILL.md) i den här mappen | Läsbar kopia |

Innehållet bygger på ett arbetsflöde som Kent har gått igenom och godkänt; det är
inte kvalitetssäkrat i övrigt och bör ses som ett arbetsdokument.

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik/tree/main/Skills/kent-agentiska-arbetsfloden
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik\Skills\kent-agentiska-arbetsfloden`
