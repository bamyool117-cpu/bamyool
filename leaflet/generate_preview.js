import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const fileUrl = `file://${path.join(__dirname, 'index.html')}`;
        console.log(`Loading: ${fileUrl}`);

        await page.setViewport({ width: 1123, height: 794, deviceScaleFactor: 2 }); // A4 landscape approx pixel size at 96dpi
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });

        const outputPath = path.join(__dirname, 'BAMYOOL_Leaflet_Preview.png');

        await page.screenshot({ path: outputPath, fullPage: true });

        await browser.close();
        console.log(`Preview Generated successfully: ${outputPath}`);
    } catch (error) {
        console.error('Error generating preview:', error);
        process.exit(1);
    }
})();
