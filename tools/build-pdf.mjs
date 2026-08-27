/**
 * Régénère sales-academy-fr.pdf et sales-academy-en.pdf à partir du site
 * en mode ?print&lang=xx.
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
for (const lang of ['fr', 'en']) {
  const page = await (await browser.newContext({ viewport: { width: 900, height: 1200 } })).newPage();
  page.on('pageerror', (e) => { console.error(`[${lang}] Erreur JS dans la page :`, e.message); process.exitCode = 1; });
  await page.goto('file://' + path.join(root, 'index.html') + '?print&lang=' + lang);
  await page.emulateMedia({ media: 'screen' }); /* le PDF garde le thème du site, pas les styles d'impression */
  await page.waitForTimeout(2500); /* polices Google + rendu */
  const out = path.join(root, `sales-academy-${lang}.pdf`);
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    /* plein fond : le PDF reprend le thème sombre du site, sans marges blanches */
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });
  console.log(`${path.basename(out)} régénéré (${fs.statSync(out).size} octets)`);
  await page.context().close();
}
await browser.close();
