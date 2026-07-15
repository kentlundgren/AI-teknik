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
└── Skills/            # Lärosida om hur AI-skills fungerar
    ├── index.html     # Live-sida: Del A (var skills bor) + Del B (skapa en skill)
    ├── styles.css     # Utseende för live-sidan
    └── script.js      # Interaktivitet (växlare mellan Del A och Del B)
```

---

*Detta projekt är under aktiv uppbyggnad och uppdateras löpande.*
