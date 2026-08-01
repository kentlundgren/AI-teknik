---
name: kent-advanced-rag
description: >
  KOPIA (ej auktoritativ, se banner i texten) av den globala skillen
  kent-advanced-rag. Tillämpar Kents Advanced RAG-policy (från
  AI-teknik/RAG/agents.md och skills.md) manuellt: verifiera sakpåståenden
  mot minst två oberoende källor, rangordna dem efter tillförlitlighet, och
  redovisa en Retrieval Summary. Skapad synlig här, i Claude-kompassen, så
  att den går att se och länka till på GitHub (den globala .claude-mappen
  ingår inte i något repo).
metadata:
  type: process
---

> ⚠️ **DETTA ÄR EN KOPIA, INTE DEN AUKTORITATIVA VERSIONEN.**
> Den riktiga, levande skillen ligger på **nivå 2 (global på datorn)**:
> `C:\Users\kentl\.claude\skills\kent-advanced-rag\SKILL.md`. Ändringar görs
> där — den här kopian finns bara för att den globala `.claude`-mappen inte
> ingår i något Git-repo och därför inte går att se eller länka till på
> GitHub. Samma mönster som `index copy.html` i det här projektet: en kopia
> för synlighet/säkerhet, inte en källa att redigera. Om de två filerna
> någon gång skiljer sig åt är det bara ett tecken på att kopian inte
> synkats än (jfr. `kent-skrivstil`-exemplet i projektets `CLAUDE.md`) —
> dra aldrig slutsatsen att kopian är den korrekta.

# Kents Advanced RAG (kopia — se varningsruta ovan)

> **Ursprung:** Baserat på Kents portabla RAG-ramverk i
> [`AI-teknik/RAG/agents.md`](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/agents.md)
> och [`AI-teknik/RAG/skills.md`](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/skills.md).
> Skapad 2026-08-01 under planeringen av RAG-tillägget till **Claude-kompassen**
> (https://kentlundgren.github.io/AI-teknik/AI_modeller/Claude/olika_Claude_modeller/,
> se `PRD/PRD_rag.md` i den här mappen för hela sammanhanget/processen bakom
> skillen — inklusive varför Kent ville ha den skapad, och diskussionen om
> att tillämpa Advanced RAG på arbetet med kompassen själv).

## Vad detta är

Kents `agents.md`/`skills.md` beskriver en RAG-agents beslutslogik: Classic
RAG för enkla frågor, Advanced RAG (hybrid retrieval + reranking + fusion +
transparens) för komplexa eller faktakänsliga frågor. Den här skillen
översätter samma princip till något Claude Code kan följa manuellt — utan
embeddings eller vektordatabas — genom att använda sina egna verktyg
(WebSearch, WebFetch, filsökning) som retrieval, och samma krav på
källkritik och transparens som originalet.

**Viktig ärlighetsdetalj:** detta är INTE teknisk RAG. Ingen chunking, inga
embeddings, ingen vektorsökning. Det är samma beslutspolicy och
transparenskrav, tillämpade av Claude som agent med sina egna sökverktyg —
en manuell/agentisk motsvarighet, inte en implementation av tekniken.

## När denna skill triggas

- Kent skriver explicit "Använd Advanced RAG" (eller motsvarande, se
  promptexempel nedan).
- Proaktivt vid research, faktakontroll eller källarbete där ett påstående
  är viktigt, kontroversiellt, eller där en enda källa känns otillräcklig.

## Policyn (från `agents.md`, beslutslogik)

1. **Förstå frågan** — enkel/faktabaserad eller komplex/analytisk?
2. **Välj nivå:**
   - Enkel fråga, liten datamängd → Classic (en tillförlitlig källa räcker)
   - Komplex/faktakänslig fråga → **Advanced**: minst två oberoende källor
3. **Prioritera källor** (rangordning, från `RAG-metod.md`):
   1. Uppslagsverk/akademiska referensverk
   2. Etablerade experter/förlag/institutioner
   3. Väletablerade allmänna uppslagssidor
   4. Bloggar/forum — aldrig som enda källa
4. **Reranking/källkritik** — jämför källor, flagga motsägelser öppet
   istället för att tyst välja en.
5. **Transparens — alltid en Retrieval Summary:**
   - Teknik (Classic/Advanced)
   - Källor (vilka, hur många)
   - Reranking/källkritik gjord? Hur?
   - Varför denna teknik valdes

## Promptexempel — även tänkt som ett publikt exempel i Claude-kompassen/blogginlägget

> "Använd Advanced RAG enligt
> [AI-teknik/RAG/agents.md](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/agents.md)
> och [skills.md](https://github.com/kentlundgren/AI-teknik/blob/main/RAG/skills.md)
> på det här: verifiera varje sakpåstående mot minst två oberoende källor,
> rangordna källorna efter tillförlitlighet, och avsluta med en Retrieval
> Summary (teknik, källor, reranking, varför)."
>
> *(Brasklapp: detta är inte "riktig" teknisk RAG — ingen vektordatabas,
> inga embeddings — utan samma beslutslogik och transparenskrav, tillämpade
> manuellt av en AI-agent med vanliga sökverktyg.)*

Länkarna verifierade (fungerar, rätt innehåll) 2026-08-01 — se `PRD/PRD_rag.md`,
avsnitt om "Advanced RAG-metaarbete".

## Relaterat

- `AI-teknik/RAG/agents.md`, `AI-teknik/RAG/skills.md` — originalen, portabla
  över Claude Projects/Cursor/LangChain m.fl.
- `AI-teknik/RAG/Frans-G-Bengtsson/RAG-metod.md` — praktiskt tillämpat
  exempel med en ifylld Retrieval Summary.
- Global skill `kent-meta-regler-for-code` (Regel 2/3) — grundnivån
  (verifierade länkar, inget fabricerat) som redan alltid gäller; den här
  skillen lägger till kravet på minst två oberoende källor plus en skriven
  Retrieval Summary.
- `PRD/PRD_rag.md` (den här mappen) — hela planeringsprocessen och
  beslutsläget för RAG-tillägget till Claude-kompassen.

## Uppdateringslogg

- 2026-08-01 (v1): Skapad som kopia av den globala skillen, för synlighet
  och länkbarhet i det här repot.
