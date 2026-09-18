/**
 * Vercel Function: GET /api/og
 *
 * Genererar en delningsbild (Open Graph / og:image) med @vercel/og, så
 * att en länk delad på X eller LinkedIn visar riktigt innehåll — namnen
 * och rubriken — i stället för en generisk bild.
 *
 * Kräver inte Next.js: @vercel/og fungerar fristående som en Vercel
 * Function (bekräftat i Vercels egen dokumentation, hämtad 18 september
 * 2026), samma "Other"-inställning som resten av den här sidan och som
 * vindkraftskalkylen (vindkraftskalkyl_Vercel_ver2).
 *
 * Skriven utan JSX (rena elementobjekt i stället för <div>-taggar):
 * ett första försök som .jsx byggdes aldrig av Vercel — filen saknades
 * helt i deployen (varken som Function eller statisk fil), trots att
 * Vercels egen dokumentation visar just den kombinationen. Ren .js,
 * samma filändelse som den redan bekräftat fungerande
 * signatureCount.js, undviker att förlita sig på att byggaren
 * JSX-transformerar en fristående "Other"-funktion.
 *
 * Edge runtime, inte Node: lokal testning (node) visade att
 * @vercel/ogs Node-byggda variant kraschar på ett internt
 * WASM-laddningsproblem i strikt ESM ("Dynamic require of fs is not
 * supported") när harfbuzzjs-typsnittsmotorn laddas. Edge-varianten är
 * dessutom det ursprungliga, mest beprövade sättet biblioteket är
 * byggt för att köras på.
 */

export const config = { runtime: 'edge' };

import { ImageResponse } from '@vercel/og';

function el(type, props, ...children) {
  return {
    type,
    props: { ...props, children: children.length === 1 ? children[0] : children }
  };
}

export async function GET() {
  return new ImageResponse(
    el(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#1E2761',
          color: '#FFFFFF',
          fontFamily: 'Georgia, serif'
        }
      },
      el(
        'div',
        { style: { fontSize: 28, color: '#B9C0E8', letterSpacing: 2, textTransform: 'uppercase' } },
        'AI-säkerhet · del 1'
      ),
      el(
        'div',
        { style: { fontSize: 60, marginTop: 20, lineHeight: 1.15 } },
        'Rösterna efter ChatGPT'
      ),
      el(
        'div',
        { style: { display: 'flex', marginTop: 50, fontSize: 30, color: '#E5E7F0' } },
        'Tegmark · Häggström · Bostrom · Sandberg'
      )
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
