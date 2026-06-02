# PI Physical Therapy

Bilingual marketing site for **piphysicaltherapy.com** — a physical therapy &
rehabilitation clinic in Salt Lake City, Utah. Two SEO pillars, kept distinct:

- **Pillar A — general rehab** (orthopedic, post-surgical, sports). Accent: `field` (green).
- **Pillar B — after an accident** (auto / personal injury, whiplash). Accent: `ember`.

## Stack

- **Astro 5** + TypeScript (`astro/tsconfigs/strict`)
- **Tailwind CSS v4** (`@tailwindcss/vite`); theme + tokens in `src/styles/global.css`
- **Native Astro i18n**, English + US Spanish (`es-US`), routes `/en/` and `/es/` with **translated slugs**
- **Astro Actions + Zod** lead form (`src/actions/`, delivery in `src/lib/leads.ts`)
- **@astrojs/sitemap** with correct hreflang for translated slugs + `public/robots.txt`
- Visual direction: "Kinetic recovery" (Archivo display + Hanken Grotesk body)
- Deploy target: **Vercel** (`@astrojs/vercel`)

## Architecture

i18n is the spine. The **translated-slug route map** (`src/i18n/routes.ts`) maps each
logical page to its per-locale slug so canonical, hreflang, the language switcher and
the sitemap all resolve to the correct counterpart (e.g. `/en/services/physical-therapy/`
↔ `/es/servicios/terapia-fisica/`), never a crude prefix swap.

- `src/i18n/` — config, route map, utils, dictionaries (`locales/en.ts` is the source-of-truth shape; `es.ts` is typed `typeof en`).
- `src/data/` — `business.ts` (single NAP source), `content.ts` (pillars / conditions / team), `images.ts` (verified Unsplash manifest).
- `src/components/` — `Seo`, `JsonLd`, `Header`, `Footer`, `LeadForm`, section blocks, `views/` (one shared view per page, rendered by both locales).
- `src/lib/` — `schema.ts` / `pageSchema.ts` (JSON-LD), `leads.ts`, `conditionMeta.ts`.
- `src/pages/{en,es}/` — thin per-locale wrappers (the language is read from the URL).

## SEO

Per-page unique title + description per language, canonical, hreflang (en-US / es-US /
x-default), Open Graph + Twitter Card, JSON-LD: global `PhysicalTherapy` (NAP, geo,
areaServed, hours) plus per-page `MedicalTherapy`, `FAQPage`, `BreadcrumbList`, `Person`
(team E-E-A-T). The Utah direct-access and no-fault PIP claims are sourced and hedged.

## Commands

```bash
npm install
npm run dev      # local dev server (test the lead form here)
npm run build    # static build + sitemap into dist/
npm run preview  # preview the build
```

## Before launch (replace placeholders)

- `src/data/business.ts` — real NAP (address, phone, geo), hours, insurers. Must match the Google Business Profile exactly.
- `src/data/content.ts` — real team names, credentials and bios (`src/i18n/locales/*.ts` `team.members`).
- `src/data/images.ts` — swap verified stock for real clinic/team photos; update alt text.
- Add `public/og-default.png` (1200×630) and a real favicon.
- `src/i18n/locales/*.ts` `stories.items` — replace placeholder testimonials with real, consented reviews.
- Legal pages — have `privacy` / `terms` reviewed by counsel.
- Lead delivery env vars — see `.env.example`.
