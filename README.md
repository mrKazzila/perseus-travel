# Perseus (Persik) — Traveling Cat Profile

A bilingual, privacy-friendly static profile for a cat who travels with his owners. Built for hosts and landlords first, with a small travel journal ready to grow over time.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; output is written to `dist/`.

## Editing content

All English and Russian copy, profile facts, health statuses, equipment, trips, FAQ items, and landlord information live in `src/data/site.ts`. The two routes (`/` and `/ru/`) render the same component, so structure and behavior stay consistent.

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

Original photos are kept locally in `data/images/pers/` and excluded from Git along with working notes in `data/images/`. Optimized copies use descriptive, consistent names in `public/images/cat/perseus-*.webp`. All 12 photos were converted with orientation correction, metadata removal and WebP quality 82. The site uses real photos for the hero, portrait, home life, equipment, travel moments and gallery; locations and dates are not inferred from the filenames.

Image paths, translated captions, alt text and crop positions live in `src/data/site.ts`. Unused demo images are excluded from Git; local copies may remain in the workspace. Astro copies all files in `public/` into full-site builds, so remove local demo assets from `public/` before manually publishing a local build.

## Age and details to confirm

`src/data/profile.ts` holds the confirmed age (8 as of September 2026) and an optional `birthDate` in `YYYY-MM-DD` format. Once the actual birthday is supplied, set `birthDate`: age is calculated at build time and refreshed in the browser, including when the page regains visibility. Until then, the dated confirmed age is displayed without inventing a birthday.

Still needed from the owner: the birthday, carrier and portable litter box dimensions (length × width × height), and camera model and purpose. These details are not guessed from the photos.

## Privacy

The site uses no analytics, trackers, external fonts, cookies, APIs, backend, CMS, or authentication. Only general health statuses are shown. Do not publish full veterinary passport pages, document numbers, full microchip numbers, owner IDs, addresses, or real contact details unless you explicitly intend to make them public.

The contact section invites readers to reply in the conversation where this profile was shared; no demo Telegram or email links are shown.
