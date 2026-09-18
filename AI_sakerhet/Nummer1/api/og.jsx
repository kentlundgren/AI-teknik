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
 */

import { ImageResponse } from '@vercel/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#1E2761',
          color: '#FFFFFF',
          fontFamily: 'Georgia, serif'
        }}
      >
        <div style={{ fontSize: 28, color: '#B9C0E8', letterSpacing: 2, textTransform: 'uppercase' }}>
          AI-säkerhet · del 1
        </div>
        <div style={{ fontSize: 60, marginTop: 20, lineHeight: 1.15 }}>
          Rösterna efter ChatGPT
        </div>
        <div style={{ display: 'flex', marginTop: 50, fontSize: 30, color: '#E5E7F0' }}>
          Tegmark · Häggström · Bostrom · Sandberg
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
