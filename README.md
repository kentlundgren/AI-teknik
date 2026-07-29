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
  En pedagogisk lärosida om själva skill-systemet: var skills bor på olika nivåer (globalt vs. projekt) och hur de nås, samt vad en `SKILL.md` är och hur man skapar en.
  **Live-sida (GitHub Pages):**
  - Skills-översikt: https://kentlundgren.github.io/AI-teknik/Skills/

- **[Claude – att förstå och kontrollera Claudes ekosystem](./AI_modeller/Claude/)**
  Bloggtext och interaktivt verktyg om Claudes tre faser: filerna som styr samarbetet (CLAUDE.md/AGENTS.md/SKILL.md), ytorna man väljer att jobba i, och vägen vidare via Cursor och Git till GitHub.
  Se [`AI_modeller/Claude/README.md`](./AI_modeller/Claude/README.md) för en utförlig beskrivning.
  **Live-sida (GitHub Pages):**
  - Claude-kompassen: https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/
  **Bloggtext:**
  - [En bild av Claudes ekosystem](https://klel.wordpress.com/2026/07/29/en-bild-av-claudes-ekosystem/)

*Fler AI-tekniker tillkommer efter hand.*

## Struktur

```
AI-teknik/
├── README.md          # Denna fil – översikt över hela projektet
├── RAG/               # Retrieval-Augmented Generation
│   ├── README.md      # Utförlig beskrivning av RAG-delen
│   ├── agents.md      # Styrdokument: RAG-agentens beteende och beslutslogik
│   ├── skills.md      # Konkreta skills som agenten kan använda
│   ├── WORKFLOW.md    # Arbetsregler för AI-agenten (Git, frågor m.m.)
│   ├── index.html     # Live-sida (GitHub Pages) som förklarar RAG-mappen
│   ├── styles.css     # Utseende för live-sidan
│   └── script.js      # Interaktivitet för live-sidan
├── Skills/            # Lärosida om hur AI-skills fungerar
│   ├── index.html     # Live-sida: Del A (var skills bor) + Del B (skapa en skill)
│   ├── styles.css     # Utseende för live-sidan
│   └── script.js      # Interaktivitet (växlare mellan Del A och Del B)
└── AI_modeller/
    └── Claude/                    # Claudes ekosystem, Cursor och GitHub
        ├── README.md              # Översikt över Claude-delen
        └── olika_Claude_modeller/
            ├── README.md          # Utförlig beskrivning av projektet
            ├── index.html         # Live-sida: Claude-kompassen (tre faser)
            ├── CLAUDE.md          # Projektkontext för Claude Code
            └── bloggtext-utkast-surface-harness.md  # Bloggtextens källa
```

---

*Detta projekt är under aktiv uppbyggnad och uppdateras löpande.*
