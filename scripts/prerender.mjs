// Vloží staticky vyrenderovaný obsah stránky do dist/index.html.
// Díky tomu vidí text i vyhledávače a roboti, kteří nespouštějí JavaScript
// (Seznam, AI crawlery, náhledy odkazů), a text se zobrazí dřív než načte JS.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrDir = path.join(root, 'dist-ssr');
const indexPath = path.join(root, 'dist', 'index.html');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const html = await readFile(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error(`V ${indexPath} chybí ${placeholder}`);
}

const appHtml = render();
await writeFile(indexPath, html.replace(placeholder, `<div id="root">${appHtml}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log(`Předrenderováno: ${(appHtml.length / 1024).toFixed(1)} kB HTML do dist/index.html`);
