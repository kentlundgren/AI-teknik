# Lärt av andra

**Läs när:** Kent frågar vad en regel bygger på, innan en regel som vilar på en källa ändras, och innan en källa återanvänds.

Principerna nedan kommer från de angivna källorna. Inget är kopierat från andras skills; det som togs in är skrivet med Kents egna exempel. Källorna bör kontrolleras mot originalen innan de återanvänds.

| Princip | Källa | Var i skillen |
|---|---|---|
| Skillnad mellan arbetsflöde och agent; fem typer av arbetsflöden | Schluntz och Zhang (2024) | Typläran |
| Börja enkelt, lägg till komplexitet bara när det ger bättre resultat | Schluntz och Zhang (2024); OpenAI (u.å.) | Typläran |
| Visa planeringsstegen (transparens) | Schluntz och Zhang (2024) | Coachläget |
| Dokumentera verktygen lika noga som ett användargränssnitt | Schluntz och Zhang (2024) | Mallen (tabellen över connectorer) |
| Hämta "sanningen" från omgivningen i varje steg | Schluntz och Zhang (2024) | Fas 5 (verifiera efter ändring) |
| Avbrottsvillkor och ställen där agenten stannar och frågar | Schluntz och Zhang (2024) | Typläran |
| Riskklassa verktyg och åtgärder: låg, mellan, hög, efter läs/skriv, om det går att ångra och ekonomisk påverkan | OpenAI (u.å.); Praveen VR (2026) | Fas 5b |
| Tre nivåer: självständigt, meddela, godkänna | Amazon Web Services (u.å.) | Fas 5b (granskningskolumnen) |
| Risken sitter i åtgärden, inte i modellen | Praveen VR (2026) | Fas 5b |
| Lägg kontrollpunkten precis före det steg som inte går att ångra | Praveen VR (2026) | Fas 5b fråga 3 |
| Bygg åtgärder så att de går att ångra: mjuk radering, versioner, idempotensnycklar | Praveen VR (2026) | Fas 5b fråga 1 |
| Tidsgräns och reservplan om ingen svarar; säkert standardval | Amazon Web Services (u.å.) | Fas 5b fråga 2, Fas 8, valpunkter |
| Mänsklig inblandning vid upprepade fel och högriskåtgärder | OpenAI (u.å.) | Fas 7 (utfallet FEL) |
| In-the-loop blockerar, on-the-loop gör det inte; dela upp efter åtgärd | Arize AI (2026) | Ordlistan, Fas 5b |
| Ha ett nödstopp och prova det | Arize AI (2026) | Fas 5b (nödstopp) |
| Logga vem som beslutade, när och varför | Amazon Web Services (u.å.); Praveen VR (2026) | Inte infört: styrelseloggen räcker för Kents flöden |
| Följ hur ofta människan ändrar för att strama upp eller lätta på kontrollen | Praveen VR (2026) | Fas 10 |
| Gradvis mer självständighet när förtroendet växer | Amazon Web Services (u.å.) | Fas 5b |
| Förklara varför i stället för ALLTID och ALDRIG | Anthropic (u.å.), skill-creator | Coachläget, Fas 6 |
| Håll SKILL.md kort (under cirka 500 rader), detaljer i referensfiler | Anthropic (u.å.), skill-creator | Fas 6 |
| Prova skillen på två–tre realistiska testfall | Anthropic (u.å.), skill-creator | Fas 7 (provkörning) |
| Minsta mall: bara namn och beskrivning krävs | Anthropic (u.å.), template-skill | Medvetet val: mallens nio delar behålls, fast Kents mall är mer utförlig |

## Källor

Amazon Web Services (u.å.) *AGENTREL02-BP05 Establish tiered human oversight and approval workflows*. Agentic AI Lens, AWS Well-Architected Framework. Tillgänglig på: [https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentrel02-bp05.html](https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentrel02-bp05.html) (Hämtad: 24 november 2026). *(Bästa praxis för granskning i nivåer – självständigt, meddela, godkänna – med tidsgränser och säkra standardval; underlag för Fas 5b.)*

Anthropic (u.å.) *anthropics/skills* [GitHub-repo], särskilt [skills/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) och [template](https://github.com/anthropics/skills/tree/main/template). Tillgänglig på: [https://github.com/anthropics/skills](https://github.com/anthropics/skills) (Hämtad: 24 november 2026). *(Anthropics exempelskills, bland annat skill-creator och template; underlag för hur en skill skrivs, hålls kort och testas.)*

Arize AI (2026) *What is human-on-the-loop?* Senast ändrad 14 augusti 2026. Tillgänglig på: [https://arize.com/glossary/human-on-the-loop/](https://arize.com/glossary/human-on-the-loop/) (Hämtad: 24 november 2026). *(Ordlisteartikel om skillnaden mellan blockerande in-the-loop och icke-blockerande on-the-loop, och om nödstopp.)*

OpenAI (u.å.) *A practical guide to building agents* [PDF]. Tillgänglig på: [https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) (Hämtad: 24 november 2026). *(Guide om när en agent behövs, riskklassning av verktyg och när människan ska kopplas in.)*

Praveen VR (2026) 'Designing Human-in-the-Loop Approval Gates for Enterprise AI Agents', *DZone*, 18 september. Tillgänglig på: [https://dzone.com/articles/human-in-the-loop-approval-enterprise-ai-agents](https://dzone.com/articles/human-in-the-loop-approval-enterprise-ai-agents) (Hämtad: 24 november 2026). *(Artikel om godkännandegrindar, risknivåer per åtgärd och hur åtgärder görs möjliga att ångra.)*

Schluntz, E. och Zhang, B. (2024) *Building effective agents*. Anthropic, 19 december. Tillgänglig på: [https://www.anthropic.com/engineering/building-effective-agents](https://www.anthropic.com/engineering/building-effective-agents) (Hämtad: 24 november 2026). *(Grundtexten om skillnaden mellan arbetsflöde och agent och de fem typerna av arbetsflöden; underlag för typläran.)*
