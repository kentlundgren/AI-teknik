const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: './videos' }
  });
  const page = await context.newPage();

  // Öppna presentationen med "lagom" hastighet
  const url = 'https://kentlundgren.github.io/AI-teknik/Presentationer/Nr1/?hastighet=lagom';
  console.log(`Öppnar: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle' });

  // Vänta på att presentationen spelar (lagom = ca 2min 20sec för 7 projekt + intro + outro)
  // Lägg till lite buffer för säkerhet
  console.log('Presentationen spelar... väntar ca 3 minuter');
  await page.waitForTimeout(180000); // 3 minuter

  await context.close();
  await browser.close();

  console.log('✓ Video sparad i ./videos/');
})();
