import { defineConfig } from 'astro/config';
import { siteEnabled } from './scripts/site-mode.mjs';

export default defineConfig({
  site: process.env.SITE_URL || 'https://mrkazzila.github.io',
  base: process.env.SITE_BASE || '/',
  output: 'static',
  ...(siteEnabled() ? {} : {
    srcDir: './maintenance',
    publicDir: './maintenance/public',
  }),
});
