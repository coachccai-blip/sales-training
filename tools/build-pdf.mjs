/**
 * Régénère sales-academy.pdf à partir du site en mode ?print.
 * Usage : node tools/build-pdf.mjs
 * Prérequis : npm i playwright-core + un Chromium (PLAYWRIGHT_BROWSERS_PATH
 * ou CHROME_PATH pointant vers l'exécutable).
 */
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const exe = process.env.CHROME_PATH || (() => {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = fs.readdirSync(base).find((d) => d.startsWith('chromium-'));
  return path.join(base, dir, 'chrome-linux', 'chrome');
})();

const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const page = await (await browser.newContext({ viewport: { width: 900, height: 1200 } })).newPage();
page.on('pageerror', (e) => { console.error('Erreur JS dans la page :', e.message); process.exitCode = 1; });
await page.goto('file://' + path.join(root, 'index.html') + '?print');
await page.waitForTimeout(2500); /* polices Google + rendu */
await page.pdf({
  path: path.join(root, 'sales-academy.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '14mm', bottom: '16mm', left: '13mm', right: '13mm' },
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: '<div style="width:100%;text-align:center;font-size:8px;color:#7791A3;font-family:Arial">Sales Academy · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
});
await browser.close();
console.log('sales-academy.pdf régénéré (' + fs.statSync(path.join(root, 'sales-academy.pdf')).size + ' octets)');
