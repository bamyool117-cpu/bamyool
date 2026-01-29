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

        await page.goto(fileUrl, { waitUntil: 'networkidle0' });

        const outputPath = path.join(__dirname, 'BAMYOOL_Leaflet.pdf');

        await page.pdf({
            path: outputPath,
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });

        await browser.close();
        console.log(`PDF Generated successfully: ${outputPath}`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
