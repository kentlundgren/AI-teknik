/**
 * Vercel Function: GET /api/signatureCount
 *
 * Proxar Future of Life Institutes eget, interna API för Statement on
 * Superintelligence (upptäckt via nätverksinspektion i webbläsaren,
 * inte en officiell, dokumenterad integration):
 *
 *   https://superintelligence-statement.org/api/signatureCount?letterName=asi-statement
 *
 * Siffran som kommer tillbaka är FLI:s egen räkning — den inkluderar INTE
 * det separata tillägget från Ekō-petitionen som visas på källsidan.
 *
 * Eftersom källan är intern och odokumenterad kan den ändras eller sluta
 * svara utan förvarning. Om anropet misslyckas faller funktionen tillbaka
 * på senast kända värde (bevarat i modulminnet så länge samma serverless-
 * instans hålls varm — inget garanterat över tid, bara bästa möjliga
 * insats) och flaggar svaret som stale, hellre än att visa ett fel.
 */

const KALLA =
  'https://superintelligence-statement.org/api/signatureCount?letterName=asi-statement';

let senastKanda = null; // { count, updated } — bevaras bara medan instansen är varm

export async function GET() {
  try {
    const res = await fetch(KALLA, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);

    const text = await res.text();
    const count = Number(text);
    if (!Number.isFinite(count) || count <= 0) throw new Error('oväntat svar: ' + text);

    senastKanda = { count, updated: new Date().toISOString() };
    return Response.json({ count, updated: senastKanda.updated, stale: false });
  } catch (err) {
    console.error('signatureCount:', err);

    if (senastKanda) {
      return Response.json({ ...senastKanda, stale: true });
    }

    return Response.json(
      { fel: 'Kunde inte hämta signaturräkningen och inget tidigare värde finns ännu.' },
      { status: 502 }
    );
  }
}
