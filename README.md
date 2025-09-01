 # BBnB Barbershop Website (Astro 5 + Tailwind + React islands)

Modern bilingual (EN/JA) marketing site with dark mode, pricing pages, and Google Calendar booking links. Optimized for Azure Static Web Apps deployment.

## ✨ Features

| Capability | Details |
|------------|---------|
| Framework  | Astro ^5 (hybrid / islands) + optional React components |
| Styling    | Tailwind CSS (dark mode via `class`) |
| i18n       | Folder-based routing (`/en/*`, `/ja/*`) + manual content files |
| Pricing    | Data-driven via `src/data/pricing.ts` |
| Booking    | Google Calendar Appointment Schedule links via PUBLIC_ env vars |
| Theming    | Client-side theme toggle persisted in `localStorage` |
| Security   | Opinionated headers in `staticwebapp.config.json` |

## 🚀 Quickstart

Prerequisites:
* Node 18.17+ (Astro 5 recommends Node 18 / 20 LTS)
* npm 9+ (project tested with npm 11)

Install & run dev server:
```bash
npm install
npm run dev
```
Visit: http://localhost:4321 (or the port Astro reports).

## 🔧 Environment Variables (Booking Links)

Define Google Calendar appointment schedule URLs in your deployment environment (Azure Static Web Apps: Portal → Settings → Configuration):

* `PUBLIC_BOOKING_URL_EN` – English booking URL
* `PUBLIC_BOOKING_URL_JA` – Japanese booking URL

Variables prefixed with `PUBLIC_` are exposed to the client bundle by Astro.

## 🏗 Build & Preview

```bash
npm run build   # outputs to dist/
npm run preview # serve production build locally
```

## ☁️ Deploying to Azure Static Web Apps

1. Create a Static Web App (either Portal or `az staticwebapp create`).
2. Use build settings (GitHub Action defaults) similar to:
	 * App location: `/`
	 * Output location: `dist`
3. Ensure the repository includes `staticwebapp.config.json` (already present) which:
	 * Rewrites `/` to `/en/index.html` (English default)
	 * Handles `/en/*` & `/ja/*` routes
4. Add environment variables for booking links (above) and any future secrets.

> If you previously used a static `index.html` landing/maintenance page, it has been renamed to `maintenance.html` to avoid conflicting with Astro's generated root routing.

## 📁 Project Structure

```
src/
	pages/
		en/ ... localized EN pages
		ja/ ... localized JA pages
	components/ ... React & Astro UI pieces
	data/pricing.ts ... pricing data model
	layouts/Base.astro ... shared layout shell
	i18n/ ... translation fragments (simple TS exports)
```

Supporting config:
* `tailwind.config.cjs` – CommonJS export (required because project `type` is `module` but Tailwind scans via CJS loader).
* `postcss.config.cjs` – PostCSS/Tailwind pipeline.
* `staticwebapp.config.json` – Routing & security headers.

## 🧩 React Islands

React components (e.g. `BookingButton.tsx`, `ThemeToggle.tsx`) are imported in Astro pages/layouts and hydrated on the client as needed. Keep islands minimal for performance.

## 🛡 Security Headers

`staticwebapp.config.json` sets sensible defaults (`X-Frame-Options`, `HSTS`, `Referrer-Policy`, etc.). Adjust per compliance needs.

## 🔄 Upgrading Dependencies

Recent update bumped:
* `astro` → ^5.13.5
* `@astrojs/react` → ^4.3.0 (valid stable; previous spec ^3.8.1 did not exist)
* `@astrojs/tailwind` → ^6.0.2

When upgrading Astro major versions:
1. Read the official migration guide.
2. Update integration packages (@astrojs/*) to matching major.
3. Re-run `npx astro sync` if using content collections (not used yet here).

## 📦 Adding New Content / Sections

1. Duplicate an existing localized page under both `en/` and `ja/` folders.
2. Add any new strings to `src/i18n/en.ts` & `src/i18n/ja.ts` (or inline if simpler).
3. For new pricing categories: update `src/data/pricing.ts` and (optionally) create a category page.

## 🧪 Testing Ideas (Not Implemented Yet)

Potential lightweight additions:
* Playwright for smoke tests of `/en/` and `/ja/` nav + theme toggle.
* ESLint + TypeScript strict for code health.

## 🗺 Roadmap / Nice-to-haves

* Add sitemap + robots.txt
* Structured data (LocalBusiness) markup
* Form handling via Azure Functions (`/api/*`)
* Image optimization pipeline (Astro assets / responsive images)

## 🧹 Maintenance Page

`maintenance.html` retained only for historical reference. Safe to delete once no longer needed.

## 📜 License

Private / internal project. Add an OSS license if you intend to open source.

---
Need a new enhancement? Open an issue or describe it in your next chat request.

## 🖼 Image Optimization (Phase 5)

Implemented basic hero image placeholder under `src/assets/images/hero-placeholder.svg` with lazy loading and explicit intrinsic dimensions to prevent layout shift. Replace with a real photograph and (optionally) generate responsive variants (e.g. 640/960/1200 widths) using a build step or Astro's forthcoming assets API once stable for v5.
