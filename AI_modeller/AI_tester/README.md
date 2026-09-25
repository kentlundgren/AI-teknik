# AI-tester: vad mäter de egentligen?

**Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/](https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/)

**Lokal mapp:** `C:\Users\kentl\OneDrive\AI\AI-teknik\AI_modeller\AI_tester`

En genomgång av de tester som används för att mäta dagens mest avancerade AI-modeller, med Claude Opus 5.5 och GPT-6 Astra som utgångspunkt. Utgångspunkten är tabellen i `AI_tester_260925.jpg` (Anthropics lanseringstabell för Opus 5.5). Materialet finns i tre former: en interaktiv sida, ett blogginlägg och en prompt för en poddgenerering.

## Innehåll

- **Interaktiv sida** (`index.html`, `style.css`, `app.js`, `data.js`): tabellen ombyggd, en testutforskare, en jämförelsevy med svårighetsmätare, avsnittet "Kan AI lura testet?" med ett bedömningsspel och en tidslyx-räknare. Två förklaringsnivåer (vuxen och 15 år) och ljust eller mörkt tema.
- **Blogginlägg** (`blogginlagg.md`): tolv tester och fyra säkerhetsbegrepp, med en förklaring för en vuxen och en för en 15-åring, och alfabetisk Harvard-förteckning. Publicerat på klel.wordpress.com: [Vad mäter AI-testerna egentligen?](https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/)
- **Podd-prompt** (`gemini_prompt.md`): färdig prompt för en Audio Overview i Gemini Notebook.
- **Underlag** (`AI_tester_260925.jpg`): skärmdumpen av tabellen.

## Vilka tester

Tabellens nio: Terminal-Bench 4.0, FrontierCode v1.1, CursorBench 4.0, GDPval-AA v2.1, AutomationBench, Humanity's Last Exam, Terminal-Bench-Science 0.1, OSWorld 2.0 och Chartography. Tre till: CoBench 2.1 (AI som forskare), DrivingBench (en språkmodell styr en riktig bil) och ZeroBench (ett bildprov som skulle vara omöjligt).

Säkerhetsdelen handlar om situationsmedvetenhet, att lura rättningssystemet, "don't get caught"-beteenden och tidslyx-problemet, det vill säga att det inte finns tid att testa månadslånga uppgifter när nya modeller släpps var tredje vecka.

## Hur siffrorna kontrollerats

Siffrorna hämtades 2026-09-25 och jämfördes med originalkällorna: Anthropics lanseringssida, Anthropics systemkort för Opus 5.5 (PDF), OpenAI:s systemkort för GPT-6 Astra, DrivingBench och ZeroBenchs ledartavla. Två uppgifter i en första sammanfattning var fel eller felplacerade och rättades mot systemkortets egen text. Astras siffror i tabellen kommer via Anthropics jämförelse, eftersom OpenAI:s systemkort inte innehåller poängen. All data ligger i `data.js`, och sidan renderas därifrån.

## Öppet

- Internt test som CoBench går inte att granska utifrån.
- Opus 5.5 och Fable 5.1 saknas på ZeroBenchs officiella ledartavla vid hämtningen.
- "Tidslyx" är ett eget begrepp. Ingen av källorna använder ordet.
