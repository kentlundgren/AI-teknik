# Höjdpunkter — Kents arbete med generativ AI

*Vad det här är: en färdig, återanvändbar beskrivning av några av de projekt
Kent byggt tillsammans med generativ AI, formulerad som "höjdpunkter". Tänkt
att plockas från när Kent vill beskriva sitt AI-arbete kort — på LinkedIn
(profilroll, "Höjdpunkter"-fält, inlägg), i en presentationstext, i ett
mejl. Bakgrund och fullständig beslutshistorik finns i
[Kents_work_with_AI.md](Kents_work_with_AI.md) och
[PRD_presentation_ai_projekt.md](PRD_presentation_ai_projekt.md); källor per
projekt i [projects.js](projects.js).*

*Skapad 2026-08-27, första användningen: LinkedIn-profilroll "Projektutvecklare".*

---

## Ramverk / förhållningssätt (används som ingress)

- **Motiv:** inte jobbsökning eller karriär — Kent bygger och delar för att
  han tycker det är roligt och viktigt att testa, leka och lära med
  generativ AI. (Se minnet `user_kent_ai_motivation`.)
- **Metod:** "Claude-kompassen" — tre faser från idé till färdig kod, där en
  stor del av jobbet är att styra vilka källor AI:n ska utgå från, inte bara
  att skriva bra prompter. Verktygstriangeln Claude Code + Cursor + GitHub.
- **KL+GA-framing:** samarbetet beskrivs som Kent Lundgren + Generativ AI —
  "AI tar det tekniska, jag står för frågan, källorna och ansvaret."
- **Aldrig "facit":** verktyg och kartläggningar ramas in som "en bild av
  hur det ser ut just nu", inte det definitiva svaret.

## Kurerat projekturval (4–5, spänner 2024–2026)

Visar både ekonomspåret (controller-rollen) och metodspåret:

1. **Fullkostnadskalkyl för forskning** (okt 2024) — SUHF-modellen, byggd
   med Claude 3.5, jämförd mot gamla Excel-ark i egen video. "Här började
   jag på allvar lita på metoden."
2. **Fredagsquiz** (aug 2025) — 23 quiz om Simrishamns kommun, frågor av
   Claude, kod i Cursor, flyttat till GitHub Pages, skrev två egna
   Git/GitHub-guider på vägen.
3. **Vindkraftskalkyl** (jul 2026) — lönsamhet synlig och interaktiv;
   senaste i en rad kalkyler sedan 2012, Excel → webbapp.
4. **Statsskuld: Sverige & USA** (jul 2026) — beslutsträd som visar
   beslutsvägen, inte bara slutsiffran; "vibe-kodning" med ansvar.
5. **Claude-kompassen** (jul 2026) — interaktiv kartläggning av Claudes
   ekosystem och de tre faserna i arbetssättet.

*Utbytbara: Kalmar Nation-revisionen (dec 2025, controller-cirkeln
1990→2025) eller Ölkalkylen (jul 2026, 3 000+ klick på LinkedIn — bra
spridningssiffra, mindre "seriös").*

---

## Version A — LinkedIn "Höjdpunkter"-fält (~1 900 tecken, styckesindelad)

**OBS för kopiering:** varje stycke nedan är EN rad (ingen radbrytning mitt i
meningen), och styckena skiljs av en TOM rad. Kopiera texten som den står —
inte via en renderad markdown-förhandsvisning, som slår ihop styckena. Klistra
in direkt i LinkedIn-fältet; tomraden mellan styckena följer med.

Det började 2023 med att jag bad ChatGPT skriva pythonkod som hämtade temperaturen från SMHI:s öppna API. Koden fungerade. Sedan dess har jag byggt kalkyler och små webbverktyg tillsammans med generativ AI – mest Claude, i kombinationen Claude Code, Cursor och GitHub. Inte för att jag måste, utan för att jag tycker det är roligt att testa, leka och lära.

Arbetssättet har jag samlat i "Claude-kompassen": tre faser från idé till färdig kod, där en stor del av jobbet är att styra vilka källor AI:n ska utgå från – inte bara att skriva bra prompter.

Fullkostnadskalkyl för forskning (2024)
En kalkyl för forskningsprojekt enligt SUHF-modellen – lön, LKP-pålägg, lokal- och indirekta kostnader över flera år. Byggd med Claude 3.5 och jämförd rakt av mot mina gamla Excel-ark i en egen video. Det var här jag på allvar började lita på metoden.

Fredagsquiz (2025)
23 quiz om Simrishamns kommun, ett i veckan under ett halvår. Frågorna skrivna av Claude, koden i Cursor. På vägen flyttade jag projektet till GitHub Pages och skrev två egna guider om hur Git och GitHub faktiskt fungerar.

Vindkraftskalkyl (2026)
Vindkraftens lönsamhet, gjord synlig och interaktiv. Den senaste i en lång rad kalkyler jag byggt sedan 2012 – samma resa från Excel-ark till webbapplikation, den här gången på några kvällar.

Statsskuld: Sverige & USA (2026)
En interaktiv jämförelse av två länders statsskulder, byggd som ett beslutsträd. Poängen var att visa själva beslutsvägen, inte bara slutsiffran – vad "vibe-kodning" innebär när man tar ansvar för resultatet.

Claude-kompassen (2026)
Ett interaktivt verktyg som kartlägger Claudes ekosystem – ytor, styrfiler och de tre faserna i mitt eget arbetssätt. En bild av hur det ser ut just nu, inte ett facit.

Den gemensamma nämnaren: AI tar det tekniska, jag står för frågan, källorna och ansvaret.

---

## Version B — kort (~600 tecken, för en ingress eller "Om"-stycke)

Sedan 2023 bygger jag kalkyler och små webbverktyg tillsammans med generativ AI – mest Claude, i kombinationen Claude Code, Cursor och GitHub. Inte för att jag måste, utan för att jag tycker det är roligt att testa, leka och lära. Bland projekten: en fullkostnadskalkyl för forskning enligt SUHF-modellen (2024), 23 fredagsquiz om Simrishamns kommun (2025), en interaktiv vindkraftskalkyl och ett beslutsträd om Sveriges och USA:s statsskulder (2026). Arbetssättet har jag samlat i "Claude-kompassen": tre faser från idé till färdig kod. AI tar det tekniska, jag står för frågan, källorna och ansvaret.

---

## Underhåll

Lägg till en rad i det kurerade urvalet när ett nytt projekt är värt att
lyfta, och uppdatera årsintervallet i rubrikerna. Håll versionerna A och B i
synk med varandra. Om presentationen (`Nr1/`) får nya slides, stäm av att
urvalet här fortfarande är representativt.
