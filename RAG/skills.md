# RAG Retrieval Skills – Pedagogiska & Kontrollerbara Skills

**Syfte med denna fil**  
Denna `skills.md` definierar konkreta skills som en agent kan använda för att hämta information. Varje skill är utformad för att vara:

- **Självförklarande** – beskriver vad den gör, hur den fungerar och varför den är utformad på ett visst sätt.
- **Pedagogisk** – hjälper både användaren och andra AI-modeller att förstå Classic RAG vs Advanced RAG.
- **Portabel** – skriven generellt så att den kan användas i Claude Projects, Cursor, LangChain, LlamaIndex, Haystack, Grok custom agents eller liknande ramverk.
- **Kontrollerbar** – agenten kan välja rätt skill baserat på frågans karaktär.

---

## Skill 1: internal_project_retrieval

**Beskrivning**  
Hämtar relevant information från projektets egna filer och dokument (intern kunskapsbas). Detta är den primära och mest pålitliga källan.

**Indata**:
- `query`: Användarens fråga eller informationsbehov
- `mode`: `"classic"` eller `"advanced"` (standard = `"advanced"`)
- `top_k`: Antal chunks som ska hämtas (standard = 8)
- `metadata_filter`: Valbart filter (t.ex. `{"source": "requirements.md", "date_after": "2025-01-01"}`)

**Vad skillen gör**:

### Classic Mode
- Omvandlar frågan till en embedding (Query Embedding).
- Gör similarity search i projektets Vector Database.
- Returnerar de `top_k` mest liknande chunksen.
- Enkel och snabb pipeline: **Query → Embedding → Similarity Search → Top-K**.

**När Classic Mode är lämplig**:
- Enkla faktasökningar.
- Små dokumentmängder.
- När hastighet är viktigare än maximal precision.
- Som baseline för jämförelse.

### Advanced Mode (rekommenderas i de flesta fall)
Utför en utökad retrieval-pipeline:

1. **Hybrid Retrieval**  
   Kombinerar **Dense Retrieval** (semantisk likhet via embeddings) och **Sparse Retrieval** (keyword/BM25).  
   *Varför?* Dense fångar mening, sparse fångar exakta termer och koder som dense ofta missar.

2. **Metadata Filtering** (om metadata finns)  
   Filtrerar resultat baserat på källfil, datum, avdelning, version etc.  
   *Varför?* Ökar precision och relevans kraftigt.

3. **Reranking**  
   Använder en mer avancerad modell (cross-encoder eller LLM-baserad reranker) för att omvärdera de hämtade chunksen.  
   *Varför?* Top-K från första sökningen är inte alltid de bästa. Reranking ger bättre ordning.

4. **Relevance Filtering**  
   Tar bort chunks som bedöms som irrelevanta även om de rankas högt.

**Utdata**:
- Lista med relevanta chunks + metadata (källa, sidnummer, relevansscore).
- Kort förklaring av vilken teknik som användes och varför.

**Pedagogisk notering**:
Advanced Mode är det som skiljer "demo-RAG" från "produktions-RAG". Den högre komplexiteten ger betydligt bättre kvalitet på svaren när datamängden är stor eller domänen är teknisk.

---

## Skill 2: web_external_retrieval

**Beskrivning**  
Hämtar aktuell information från internet/webben. Detta är **inte** klassisk RAG eftersom hela webben inte kan förindexeras i förväg.

**Indata**:
- `query`: Sökfråga
- `max_results`: Antal sökresultat att hämta (standard = 10)
- `include_content`: Om fullständigt sidinnehåll ska hämtas via browse (true/false)

**Vad skillen gör**:
1. Utför webbsökning via tillgängligt sökverktyg.
2. Returnerar top-resultat med titel, länk, snippet/excerpt.
3. Vid behov: Hämtar fullständigt innehåll från utvalda sidor (browse).
4. Kan (valfritt) göra on-the-fly chunking och tillfällig embedding av webbsidor för bättre retrieval.

**Viktiga begränsningar & förklaring**:
- Web-retrieval är **live** – informationen kan ändras.
- Detta kallas ofta **Web RAG** eller **Search-Augmented Generation**.
- Kvaliteten beror på sök-API:ns prestanda och hur bra snippets/excerpts är.
- Alltid ange källor tydligt.

**När denna skill ska användas**:
- När svaret inte finns (eller är otillräckligt) i projektets interna data.
- För aktuell information (nyheter, priser, lagar, teknisk dokumentation som uppdateras ofta).
- Som komplement till intern retrieval.

**Pedagogisk notering**:
Web RAG är ett kraftfullt komplement, men det är inte samma sak som intern RAG. Den stora skillnaden är att intern RAG använder en kontrollerad, förindexerad kunskapsbas medan web RAG använder live-sökning.

---

## Skill 3: hybrid_retrieval_and_fusion (Advanced RAG)

**Beskrivning**  
Den mest avancerade och rekommenderade skillen för komplexa frågor. Kombinerar intern projekt-retrieval med web-retrieval och utför intelligent fusion.

**Indata**:
- `query`: Användarens fråga
- `use_internal`: true/false (standard = true)
- `use_web`: true/false (standard = true)
- `fusion_strategy`: `"simple"`, `"weighted"` eller `"llm_synthesis"` (standard = `"llm_synthesis"`)

**Vad skillen gör** (steg-för-steg):

1. **Intern retrieval** (via `internal_project_retrieval` i Advanced Mode)
2. **Web retrieval** (via `web_external_retrieval`) – om `use_web = true`
3. **Relevance Filtering** på båda källorna
4. **Context Fusion / Answer Synthesis**:
   - Slår ihop information från interna och externa källor.
   - Använder LLM för att syntetisera ett sammanhängande svar.
   - Behåller källhänvisningar.
5. **Transparens**: Returnerar alltid en detaljerad Retrieval Summary.

**Varför fusion är viktigt**:
Enkel sammanfogning av chunks ger ofta dåliga resultat. Bra fusion kräver att modellen förstår vilka delar som är relevanta, hur de kompletterar varandra och hur man undviker motsägelser.

**Pedagogisk notering**:
Detta är kärnan i vad många kallar "Production RAG" eller "Advanced RAG". Formeln är ofta:

**Production RAG = Retrieval + Ranking + Filtering + Fusion**

---

## Skill 4: explain_rag_technique (Rent pedagogisk skill)

**Beskrivning**  
Förklarar RAG-koncept utan att nödvändigtvis hämta ny data. Används när användaren vill förstå eller när agenten vill göra processen transparent.

**Indata**:
- `topic`: Vad som ska förklaras (t.ex. "skillnaden mellan Classic RAG och Advanced RAG", "vad är hybrid retrieval", "varför reranking behövs", "hur fungerar context fusion")

**Utdata**:
- Tydlig, pedagogisk förklaring med exempel.
- Jämförelser mellan tekniker.
- Praktiska konsekvenser (när man ska välja vad).

**Exempel på användning**:
Användaren frågar: "Varför använder du Advanced RAG istället för Classic RAG?"  
→ Agenten anropar denna skill för att ge en bra förklaring + motivering baserat på den aktuella frågan.

---

## Sammanfattning – Hur skills.md och agents.md samverkar

- **agents.md** styr det övergripande beteendet och beslutslogiken (när ska vilken teknik användas).
- **skills.md** innehåller de konkreta verktygen/funktionerna som agenten kan anropa.
- Tillsammans skapar de en **transparent, pedagogisk och högkvalitativ RAG-agent** som både levererar bra svar och hjälper användaren att förstå hur och varför.

Dessa filer är medvetet skrivna generellt så att de kan kopieras och anpassas till de flesta moderna AI-agent-miljöer (Claude, Cursor, LangGraph, LlamaIndex, AutoGen, Grok m.fl.).

---

*Skapad för att fungera både som styrdokument och som läromedel i RAG-teknik.*