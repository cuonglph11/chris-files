const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage();
  const srcPath = path.join(__dirname, 'huong-dan-vercel.html');
  await page.goto('file://' + srcPath, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(__dirname, '..', 'huong-dan-deploy-vercel.pdf'),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });
  await browser.close();
  console.log('PDF written');
})();
