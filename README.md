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

The `GitHub Pages` workflow checks both site modes on pull requests and pushes to
`main`. Publication happens only through a manual run from `main`, after the
checks pass. It uses Node.js 22 and `npm ci`; keep `package-lock.json` in the
repository.

### First deployment

1. Push the project files and `.github/workflows/pages.yml` to GitHub.
2. Open **Settings → Pages → Build and deployment → Source** and select
   **GitHub Actions**.
3. Open **Actions → GitHub Pages → Run workflow**, select `main`, choose the
   checkbox state described below, and run it.
   The workflow's deployment environment shows the resulting site URL.

### Switch between the full site and the paused page

Open **Actions → GitHub Pages → Run workflow** and select `main`. Use the
**Показать основной сайт (выключено — поиск жилья на паузе)** checkbox:

| Checkbox | Published content |
| --- | --- |
| Checked | Full English and Russian site |
| Unchecked (default) | Centered cat animation and a message that housing is not currently needed |

Click **Run workflow** to publish the chosen mode. The checkbox defaults to off
each time; it does not display the currently published mode. Pushes only run
checks and leave the published site unchanged. To publish new code or change
modes, run the workflow manually again. A failed build leaves the previous
deployment published.

The `SITE_ENABLED` repository variable is no longer used and may be deleted.
Leave GitHub Pages itself enabled so it can serve the paused page. The workflow
passes the checkbox value to the build as the `SITE_ENABLED` environment variable;
local build commands below continue to work as before.

The paused build contains `/`, `/ru/`, `404.html`, `robots.txt`, and the cat animation assets.
It excludes the full site's photos, scripts, and metadata and requests no indexing.
Edit `maintenance/Blank.astro` to update the bilingual pause message and layout.
The animation in `maintenance/public/images/resting-cat.gif` uses the four source
frames in `data/gif/`, at 0.8 seconds per frame. A static WebP is used when the
visitor prefers reduced motion.

The workflow takes the origin and base path from GitHub Pages, including the
repository subpath. Canonical URLs, social images, `robots.txt`, and the sitemap
are generated from those settings.

### Local checks

Local development and builds show the full site by default. To preview a paused
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
