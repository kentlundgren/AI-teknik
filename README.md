# AI-teknik

Ett växande kunskaps- och experimentprojekt där olika **AI-tekniker** beskrivs, förklaras och byggs upp steg för steg – både teoretiskt och praktiskt.

Syftet är att skapa **pedagogiska och styrande** dokument som gör det möjligt att förstå och kontrollera moderna AI-tekniker på djupet, samtidigt som de är portabla mellan olika AI-verktyg (Claude, Cursor, LangChain, LlamaIndex m.fl.).

## Innehåll

Projektet är under uppbyggnad och kommer att växa över tid med fler tekniker, exempel och implementationer.

### Områden

- **[RAG – Retrieval-Augmented Generation](./RAG/)**
  Classic RAG och Advanced RAG. Här finns styrdokument och skills för en transparent, pedagogisk och kontrollerbar RAG-agent.
  Se [`RAG/README.md`](./RAG/README.md) för en utförlig beskrivning.
  **Live-sidor (GitHub Pages):**
  - RAG-översikt: https://kentlundgren.github.io/AI-teknik/RAG/
  - Frans G. Bengtsson-exemplet: https://kentlundgren.github.io/AI-teknik/RAG/Frans-G-Bengtsson/

- **[Skills – hur AI-skills fungerar](./Skills/)**
  En pedagogisk lärosida om själva skill-systemet.
  **Live-sida (GitHub Pages):**
  - Skills-översikt: https://kentlundgren.github.io/AI-teknik/Skills/

- **[Claude – att förstå och kontrollera Claudes ekosystem](./AI_modeller/Claude/)**
  Bloggtext och interaktivt verktyg om Claudes tre faser.
  Se [`AI_modeller/Claude/README.md`](./AI_modeller/Claude/README.md).
  **Live-sida (GitHub Pages):**
  - Claude-kompassen: https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
  **Bloggtext:**
  - [En bild av Claudes ekosystem](https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/)

- **[AI-tester – vad mäter de egentligen?](./AI_modeller/AI_tester/)**
  Genomgång av de tester som används för att mäta Claude Opus 5.5 och GPT-6 Astra, och av vad som händer när modellen förstår att den testas. Interaktiv sida, blogginlägg och podd-prompt.
  Se [`AI_modeller/AI_tester/README.md`](./AI_modeller/AI_tester/README.md).
  **Live-sida (GitHub Pages):**
  - AI-tester: [https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/](https://kentlundgren.github.io/AI-teknik/AI_modeller/AI_tester/)
  **Bloggtext:**
  - [Vad mäter AI-testerna egentligen?](https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/)

- **[AI-användning – AI i en miljöorganisation](./AI_anvandning/NF/)**
  Analys av generativ AI:s resursanvändning (energi, vatten och övriga miljöfaktorer) för både dem som gillar AI och dem som är skeptiska. Sidor om hur AI-bilder tas emot (Bilder och förtroende), om hur AI förhåller sig till världens största problem (AI i proportion) och om hot från agentisk AI (Hot från agentisk AI). De två sista har en rangordning där läsare kan rösta via en Supabase-databas och om bakgrunden. Förslag på eget initiativ, inte beslutat av någon förening. Siffrorna är hämtade ur källorna och inte kvalitetssäkrade.
  Se [`AI_anvandning/NF/README.md`](./AI_anvandning/NF/README.md). Hur databasen kopplades finns i [Uppkoppling_Supabase.md](https://github.com/kentlundgren/AI-teknik/blob/main/AI_anvandning/NF/databas/Uppkoppling_Supabase.md).
  **Live-sidor (GitHub Pages):**
  - Startsida: [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/)
  - Bilder och förtroende: [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/bilder.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/bilder.html)
  - AI i proportion: [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/proportion.html)
  - Hot från agentisk AI: [https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/agentisk.html](https://kentlundgren.github.io/AI-teknik/AI_anvandning/NF/agentisk.html)

- **[Solutions](./Solutions/)**
  Datumstämplade lösningar och fallbeskrivningar.
  Se [`Solutions/README.md`](./Solutions/README.md).
  **Live-sida (GitHub Pages):**
  - 260912 Navier–Stokes-visualisering: https://kentlundgren.github.io/AI-teknik/Solutions/260912/

- **[Presentationer](./Presentationer/)**
  Självspelande och datadrivna presentationer. Motor och innehåll är alltid separerade (en fil för struktur, en för data) — ett nytt projekt är en redigering i datafilen, inget annat.
  Se [`Presentationer/CLAUDE.md`](./Presentationer/CLAUDE.md) för mönster och regler.

  - **[Nr1 – AI-projekt, en resa](./Presentationer/Nr1/)** — personlig, kronologisk visning av hur Kents arbete med generativ AI utvecklats 2023–2026. Tretton projekt, åtta årskort, fyra läslistor och två referens-slides. Tre delbara hastigheter (rapp/lagom/seriös).
    **Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/](https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/)

  - **[Nr2 – Provbänken](./Presentationer/Nr2/)** — frågeguide för arbetsgivare och konsultkunder: vad Kent kan göra med AI i ekonomi- och controllerarbete. Fem frågor med svar och öppningsbara exempelkort. Varje fråga har en egen delningslänk med bild för LinkedIn och X.
    **Live-sida (GitHub Pages):** [https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/](https://kentlundgren.github.io/AI-teknik/Presentationer/Nr2/)

*Fler AI-tekniker tillkommer efter hand.*

Agentminne för hela repot: [`AGENTS.md`](./AGENTS.md).

---

*Detta projekt är under aktiv uppbyggnad och uppdateras löpande.*

## Repo

- GitHub: https://github.com/kentlundgren/AI-teknik
- Lokal sökväg: `C:\Users\kentl\OneDrive\AI\AI-teknik`
