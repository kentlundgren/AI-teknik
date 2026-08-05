const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: './videos' }
  });
  const page = await context.newPage();

  // Öppna presentationen med "rapp" (snabb) hastighet
  const url = 'https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/?hastighet=rapp';
  console.log(`Öppnar: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle' });

  // Vänta på att presentationen spelar (rapp = ca 50sec för 7 projekt + intro + outro)
  // Lägg till lite buffer för säkerhet
  console.log('Presentationen spelar... väntar ca 90 sekunder');
  await page.waitForTimeout(90000); // 90 sekunder

  await context.close();
  await browser.close();

  console.log('✓ Video sparad i ./videos/');
})();
