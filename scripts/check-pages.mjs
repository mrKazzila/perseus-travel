import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteEnabled } from './site-mode.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
// Astro 5 stages output outside the project through .astro/, which can copy
// content cache files into the artifact. Keep verification output in the project.
const output = mkdtempSync(join(root, 'dist-pages-check-'));
const origin = 'https://mrkazzila.github.io';

function build(base, mode, ci = 'true') {
  const env = { ...process.env, SITE_URL: origin, SITE_BASE: base, CI: ci, ASTRO_TELEMETRY_DISABLED: '1' };
  delete env.SITE_ENABLED;
  if (mode !== undefined) env.SITE_ENABLED = mode;
  const result = spawnSync(process.execPath, [
    resolve(root, 'node_modules/astro/astro.js'), 'build', '--outDir', output,
  ], { cwd: root, env, encoding: 'utf8' });
  return result;
}

function successfulBuild(base, mode, ci) {
  const result = build(base, mode, ci);
  assert.equal(result.status, 0, result.stdout + result.stderr);
}

const read = (path) => readFileSync(join(output, path), 'utf8');

try {
  assert.equal(siteEnabled({}), true, 'Local development defaults to the full site');
  assert.equal(siteEnabled({ CI: 'true' }), false, 'CI defaults to the paused site');
  assert.equal(siteEnabled({ SITE_ENABLED: 'true', CI: 'true' }), true);
  assert.equal(siteEnabled({ SITE_ENABLED: 'false' }), false);
  for (const value of ['', 'TRUE', 'yes', '0']) {
    assert.throws(() => siteEnabled({ SITE_ENABLED: value }), /SITE_ENABLED/);
  }

  for (const base of ['/', '/perseus-travel/']) {
    successfulBuild(base, 'true');
    for (const [path, locale] of [['index.html', ''], ['ru/index.html', 'ru/']]) {
      const html = read(path);
      assert.match(html, /class="site-header"/);
      assert.ok(html.includes(`href="${base}"`));
      assert.ok(html.includes(`href="${base}ru/"`));
      assert.ok(html.includes(`rel="canonical" href="${origin}${base}${locale}"`));
      assert.ok(html.includes(`property="og:url" content="${origin}${base}${locale}"`));
      assert.ok(html.includes(`property="og:image" content="${origin}${base}images/cat/perseus-suitcase.webp"`));
      assert.ok(!html.includes('murr.example.com'));
      // Every emitted root-relative resource or page link must resolve inside the deployment.
      for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g)) {
        assert.ok(url.startsWith(base), `${path}: URL outside base: ${url}`);
        const relative = url.slice(base.length).split('#')[0];
        const target = relative.endsWith('/') || !relative ? `${relative}index.html` : relative;
        assert.ok(existsSync(join(output, target)), `${path}: Missing target: ${url}`);
      }
      // Astro's inline gallery data supplies the lightbox's full-size image URLs.
      const galleryData = html.match(/const gallery = (\[[^\n]*?\]);/);
      assert.ok(galleryData, 'Gallery data is serialized');
      for (const photo of JSON.parse(galleryData[1])) {
        assert.ok(photo.src.startsWith(`${base}images/`));
        assert.ok(existsSync(join(output, photo.src.slice(base.length))));
      }
    }
    assert.ok(read('robots.txt').includes(`Sitemap: ${origin}${base}sitemap.xml`));
    const sitemap = read('sitemap.xml');
    assert.ok(sitemap.includes(`<loc>${origin}${base}</loc>`));
    assert.ok(sitemap.includes(`<loc>${origin}${base}ru/</loc>`));
    console.log(`PASS: full site at ${base}`);
  }

  // Reuse the previous output to ensure switching off also removes old assets.
  for (const [base, mode] of [['/', 'false'], ['/perseus-travel/', 'false'], ['/perseus-travel/', undefined]]) {
    successfulBuild(base, mode);
    assert.deepEqual(readdirSync(output).sort(), ['404.html', 'favicon.svg', 'images', 'index.html', 'robots.txt', 'ru']);
    assert.deepEqual(readdirSync(join(output, 'ru')), ['index.html']);
    for (const path of ['index.html', 'ru/index.html', '404.html']) {
      const html = read(path);
      assert.match(html, /<main>/);
      assert.ok(html.includes(path === 'ru/index.html' ? 'Сейчас жильё не ищем' : 'We’re not looking for a home right now'));
      assert.ok(html.includes(`src="${base}images/resting-cat.gif"`));
      assert.ok(html.includes(`srcset="${base}images/resting-cat.webp"`));
      assert.match(html, /prefers-reduced-motion: reduce/);
      assert.match(html, /name="robots" content="noindex, nofollow"/);
      assert.ok(html.includes(`<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">`));
      assert.doesNotMatch(html, /<script|site-header|og:image/);
    }
    assert.deepEqual(readdirSync(join(output, 'images')).sort(), ['resting-cat.gif', 'resting-cat.webp']);
    assert.equal(read('favicon.svg'), readFileSync(join(root, 'public/favicon.svg'), 'utf8'));
    assert.equal(readFileSync(join(output, 'images/resting-cat.gif')).subarray(0, 6).toString(), 'GIF89a');
    assert.equal(read('robots.txt'), 'User-agent: *\nDisallow: /\n');
    console.log(`PASS: paused site at ${base} with SITE_ENABLED=${mode ?? '(unset in CI)'}`);
  }

  successfulBuild('/', undefined, '');
  assert.match(read('index.html'), /class="site-header"/);
  console.log('PASS: local build defaults to full site');
  const invalid = build('/', 'invalid');
  assert.notEqual(invalid.status, 0);
  assert.match(invalid.stdout + invalid.stderr, /SITE_ENABLED must be/);
  console.log('PASS: invalid mode fails the build');
} finally {
  rmSync(output, { recursive: true, force: true });
}
