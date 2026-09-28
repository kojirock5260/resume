#!/usr/bin/env node
// Markdown → PDF。設定は pdf-configs/config.js（md-to-pdf 互換の項目）を使う。
// md-to-pdf は networkidle 待ちの競合で不定期に固まるため、puppeteer を直接使う。
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

const config = require(path.resolve(__dirname, '..', 'pdf-configs', 'config.js'));
const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('usage: node scripts/build-pdf.js <file.md> [...]');
  process.exit(1);
}

const watchdog = setTimeout(() => {
  console.error('build-pdf: timed out after 120s');
  process.exit(2);
}, 120000);
watchdog.unref();

marked.setOptions({ gfm: true, ...(config.marked_options || {}) });

(async () => {
  const browser = await puppeteer.launch();
  try {
    const css = fs.readFileSync(path.resolve(config.stylesheet), config.stylesheet_encoding || 'utf-8');
    for (const md of files) {
      const body = marked(fs.readFileSync(md, 'utf-8'));
      const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${path.basename(md, '.md')}</title><style>${css}</style></head>
<body class="${config.body_class || ''}">${body}</body></html>`;
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
      await page.emulateMediaType('screen');
      const out = md.replace(/\.md$/, '.pdf');
      const pdfOptions = { ...config.pdf_options, path: out };
      if (typeof pdfOptions.margin === 'string') {
        // CSS ショートハンド（"30mm 20mm" など）を puppeteer 用のオブジェクトに変換
        const [t, r = t, b = t, l = r] = pdfOptions.margin.trim().split(/\s+/);
        pdfOptions.margin = { top: t, right: r, bottom: b, left: l };
      }
      if ((pdfOptions.headerTemplate || pdfOptions.footerTemplate) && pdfOptions.displayHeaderFooter === undefined) {
        pdfOptions.displayHeaderFooter = true;
      }
      await page.pdf(pdfOptions);
      await page.close();
      console.log(`generated ${out}`);
    }
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
