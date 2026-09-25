# Perseus — Traveling Cat Profile

A bilingual static cat profile for hosts and landlords, with a travel journal.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; output is written to `dist/`.

## Editing content

English and Russian content lives in `src/data/site.ts`; age calculation uses `src/data/profile.ts`. Both routes (`/` and `/ru/`) share the same component.

## GitHub Pages

The `GitHub Pages` workflow checks both site modes on pull requests. Pushes to
`main` and manual runs from `main` also publish the selected mode. It uses Node.js
22 and `npm ci`; keep `package-lock.json` in the repository.

### First deployment

1. Push the project files and `.github/workflows/pages.yml` to GitHub.
2. Open **Settings → Pages → Build and deployment → Source** and select
   **GitHub Actions**.
3. Open **Actions → GitHub Pages → Run workflow**, select `main`, and run it.
   The workflow's deployment environment shows the resulting site URL.

The initial deployment is a blank page. To show the full site, open
**Settings → Secrets and variables → Actions → Variables**, add a **repository
variable** named `SITE_ENABLED`, and set its value to `true`. Then run the workflow
again from `main`.

| `SITE_ENABLED` repository variable | Published content |
| --- | --- |
| `true` | Full English and Russian site |
| `false` or missing | Empty neutral background, with no text or photographs |
| Any other value | Build fails; the previous deployment stays published |

Changing the variable does not trigger a workflow. Run it manually or push to
`main` to apply the new setting. The mode persists across subsequent deployments.
Leave GitHub Pages itself enabled so it can serve the blank page.

The blank build contains only `/`, `/ru/`, a blank `404.html`, and `robots.txt`.
It excludes the full site's photos, scripts, and metadata and requests no indexing.
Edit `maintenance/Blank.astro` when the replacement content is ready.

The workflow takes the origin and base path from GitHub Pages, including the
repository subpath. Canonical URLs, social images, `robots.txt`, and the sitemap
are generated from those settings.

### Local checks

Local development and builds show the full site by default. To preview a blank
build, use the same environment setting for both commands:

```bash
SITE_ENABLED=false npm run build
SITE_ENABLED=false npm run preview
```

To preview a build under the repository path:

```bash
SITE_ENABLED=true SITE_URL=https://mrkazzila.github.io SITE_BASE=/perseus-travel/ npm run build
SITE_ENABLED=true SITE_BASE=/perseus-travel/ npm run preview
```

Open `/perseus-travel/` on the preview server. `SITE_URL` defaults to
`https://mrkazzila.github.io` and `SITE_BASE` to `/` outside the workflow.
In CI, an unset `SITE_ENABLED` defaults to `false`.

Run `npm run test:pages` to check both bases, both modes, local/CI defaults,
generated links and metadata, gallery URLs, artifact contents, and invalid values.
Checks use temporary build output and do not replace `dist/`.

## Replacing photos

Original photos in `data/images/pers/` are excluded from Git. Optimized copies live in `public/images/cat/perseus-*.webp`: correct orientation, strip metadata, use WebP quality 82, and cap the longest edge at 1600 pixels without upscaling.

Update image paths, captions, alt text, dimensions, and crop positions in `src/data/site.ts`. Astro copies all files in `public/` into full-site builds, so remove any local demo assets before publishing a local build.

## Privacy

The site uses no analytics, trackers, external fonts, or cookies. Keep private documents, identifiers, addresses, and contact details out of published content.
