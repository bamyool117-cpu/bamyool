import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to square to match intended output, though page.pdf handles the output size
    await page.setViewport({ width: 1080, height: 1080 });

    const htmlPath = path.join(__dirname, 'logo_preview.html');
    const pdfPath = path.join(__dirname, 'bamyool_logo.pdf');

    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: pdfPath,
        width: '1080px',
        height: '1080px',
        printBackground: true,
        pageRanges: '1'
    });

    await browser.close();
    console.log(`PDF created at: ${pdfPath}`);
})();
