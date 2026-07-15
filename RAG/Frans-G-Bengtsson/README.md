# Frans G. Bengtsson – ett praktiskt RAG-exempel

Den här mappen är ett **skarpt exempel** i projektet [AI-teknik](https://github.com/kentlundgren/AI-teknik).
Syftet är att visa – både teoretiskt och praktiskt – hur man med **RAG (Retrieval-Augmented
Generation)** kan bygga en **faktakorrekt** sida om författaren Frans G. Bengtsson, istället för
att låta en språkmodell skriva fritt ur minnet.

![Färgglad illustration som sammanfattar exemplet: en vikingaförfattare och en AI-robot som kontrollerar källor.](./FransGBentsson_och_RAG.png)

## Snabblänkar

- **Live-sida (GitHub Pages):** <https://kentlundgren.github.io/AI-teknik/RAG/Frans-G-Bengtsson/>
- **Blogginlägg om projektet:** [*"Kan man lita på det AI:n berättar om Frans G. Bengtsson?"*](https://klel.wordpress.com/2026/07/15/kan-man-lita-pa-det-ain-berattar-om-frans-g-bengtsson/)
- **RAG-översikt (överordnad mapp):** [`../`](../) · live: <https://kentlundgren.github.io/AI-teknik/RAG/>

## Vad exemplet visar

Sidan demonstrerar skillnaden mellan **Classic RAG** och **Advanced RAG** genom att ställa två
versioner av samma text bredvid varandra:

- **Classic RAG-version** – en källa, enkel likhetssökning, inga referenser, ingen källkritik.
  Snabb men grund.
- **Advanced RAG-version** – flera källor, källkritik, sammanvägning (fusion) och
  Harvard-referenser. Fylligare och ärligare – motstridiga uppgifter redovisas öppet i stället
  för att döljas.

## Så gjordes det – i två steg

1. **Steg 1 (teori):** Metoden dokumenterades först i [`RAG-metod.md`](./RAG-metod.md) –
   hur beslutslogiken i [`../agents.md`](../agents.md) och verktygen i [`../skills.md`](../skills.md)
   tillämpas för att säkra faktakorrekthet (val av retrieval-nivå, källkritik som reranking,
   samt en Retrieval Summary).
2. **Steg 2 (praktik):** Verklig web-retrieval utfördes, fakta verifierades mot flera källor och
   fylldes i, och källorna angavs i Harvardformat med **kontrollerade länkar** (varje länk ska
   både fungera och vara relevant, enligt projektets [`../WORKFLOW.md`](../WORKFLOW.md)).

## Filer i mappen

| Fil | Beskrivning |
|-----|-------------|
| [`index.html`](./index.html) | Själva sidan: Classic vs Advanced sida vid sida, full biografi, Retrieval Summary och källor. |
| [`styles.css`](./styles.css) | Utseende (responsivt, semantiskt). |
| [`script.js`](./script.js) | Enkel interaktivitet (mjuk scroll, aktiv sektion i innehållsförteckningen, årtal). |
| [`RAG-metod.md`](./RAG-metod.md) | "Bakom kulisserna": hur RAG-ramverket tillämpades, med ifylld Retrieval Summary. |
| `FransGBentsson_och_RAG.png` | Illustration som sammanfattar exemplet. |

## Källor

Faktan om Frans G. Bengtsson är hämtad och korsverifierad mot fyra källor (svenska och engelska
Wikipedia, Norstedts förlag samt Frans G. Bengtsson-sällskapet). Den fullständiga
källförteckningen i Harvardformat finns på [själva sidan](https://kentlundgren.github.io/AI-teknik/RAG/Frans-G-Bengtsson/#kallor)
och beskrivs i [`RAG-metod.md`](./RAG-metod.md).

---

*Del av [AI-teknik](https://github.com/kentlundgren/AI-teknik) – ett växande projekt om olika AI-tekniker.*
