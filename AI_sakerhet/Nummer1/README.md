# Rösterna efter ChatGPT

Interaktiv jämförelsesida: fyra AI-risk-röster — Max Tegmark, Olle Häggström, Nick Bostrom och Anders Sandberg — och hur deras hållning faktiskt utvecklats sedan ChatGPT gjorde debatten konkret, sent 2022.

Ett destillat av blogginlägget [Vem har hållit fast vid AI-varningen efter ChatGPT – och vem har glidit?](https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/) (klel.wordpress.com, 2026-09-18). Fullt resonemang, källförteckning och alla annoteringar finns där — den här sidan är en visuell sammanfattning, inte en ersättning.

Bakgrund, beslut och källkontroll finns i [PRD_rosterna_efter_chatgpt.md](PRD/PRD_rosterna_efter_chatgpt.md).

## 🔗 Live-sidor

Två publicerade versioner, med olika teknisk kapacitet (se avsnittet Teknik nedan för bakgrunden till spår A/Vercel):

**Enkel, statisk — GitHub Pages**
<https://kentlundgren.github.io/AI-teknik/AI_sakerhet/Nummer1/>
Ren HTML/CSS/JS. Signaturräknaren visar fallback-läget (`/api`-routes finns inte på GitHub Pages), OG-delningsbilden fungerar inte. Byggs automatiskt av GitHub vid varje push till `main`.

**Avancerad, med Vercel Functions**
<https://ai-teknik-4-roster.vercel.app/>
Samma sida plus de två Vercel Functions. Signaturräknaren hämtar live-data (`/api/signatureCount`, bekräftat fungerande). OG-delningsbilden (`/api/og`) felsöks — se PRD:ns ändringslogg för status.

**Vercel-dashboard (projektstyrning, inte publik)**
<https://vercel.com/effektiv1/ai-teknik-4-roster>
Deploy-loggar, Functions-status, domäner. Team: `effektiv1`.

## Teknik

Statisk HTML/CSS/JS, ingen build, inget ramverk. Vercel-spår A (se skillen `nextjs-vercel-app-prompting`): Framework-inställning *Other*, samma mönster som `vindkraftskalkyl_Vercel_ver2`. Två Vercel Functions i `api/`:

- `api/signatureCount.js` — proxar/cachar antal underskrifter från Statement on Superintelligence.
- `api/og.js` — genererar en dynamisk delningsbild (`@vercel/og`, Edge Runtime) för X/LinkedIn.

Innan deploy: `npm install` (för `@vercel/og`).

## 🗂️ Lokalt repo

Repo-rot lokalt:

`C:\Users\kentl\OneDrive\AI\AI-teknik`

Den här mappen lokalt:

`C:\Users\kentl\OneDrive\AI\AI-teknik\AI_sakerhet\Nummer1`

På GitHub: <https://github.com/kentlundgren/AI-teknik/tree/main/AI_sakerhet/Nummer1>

Live-sidor: se avsnittet [Live-sidor](#live-sidor) högre upp.
