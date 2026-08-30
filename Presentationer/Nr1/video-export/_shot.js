const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  await page.goto('https://kentlundgren.se/program/programvaljare.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  await page.addStyleTag({ content: '.loading-indicator{display:none !important}' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'C:\\Users\\kentl\\OneDrive\\AI\\AI-teknik\\Presentationer\\Nr1\\images\\programvaljaren.png' });
  await browser.close();
  console.log('done');
})();
