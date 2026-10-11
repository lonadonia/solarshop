# SolarShop website

Homepage design and build for **SolarShop**, a solar panel, battery and EV-charging company. Built with Next.js, React, TypeScript and Tailwind CSS, and exported as a plain static site, so it can be uploaded to any web host or deployed on Vercel.

Design direction: **"Sun over hills"**. Every shape comes from the logo mark: the sun disc, the curved band and the two hills. Light daylight fields (sky, butter, sage, wheat) alternate with deep earthy bands (forest green, deep lake blue). No greys, no night scenes, no dark gradients.

## Quick start

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000, live reload while you edit
npm run build      # production build -> ./out (static HTML, CSS, JS)
npm run start      # serve ./out locally to check the production build
```

Quality checks:

```bash
npm run lint
npm run typecheck
```

## Updating the site (quick-start guide)

| To change | Edit | Notes |
|---|---|---|
| Any text, headings, buttons | `src/content/site.ts` | Every word on the page lives in this one file. Change the text between the quotes. |
| Phone, email, opening hours, area | `src/content/site.ts` → `company` | Used in the header, FAQ card, enquiry section and footer. |
| Products in the shop | `src/content/site.ts` → `products` | Each product has a name, category, three short specs and a one-line description. Copy an entry to add one. |
| FAQ questions | `src/content/site.ts` → `faqs` | |
| Stats ("in numbers") | `src/content/site.ts` → `about.stats` | Currently **sample figures**. Replace before launch. |
| Logo | `public/brand/logo.webp` (light backgrounds), `public/brand/logo-light.webp` (dark footer) | `scripts/logo_assets.py` regenerates all logo files from a new logo PNG. |
| Colours | `src/app/globals.css` → `@theme` | Named brand tokens (`--color-forest`, `--color-sun`...). Change a value once and it updates everywhere. |
| Fonts | `public/fonts/` + `@font-face` in `globals.css` | Self-hosted Outfit (headings), Instrument Sans (body), DM Mono (labels). |

After editing, run `npm run build` and upload the new `out/` folder.

### Content marked SAMPLE

These are placeholders written for the design. Replace them with SolarShop's real details before going live:

- Contact details in `company` (phone, email, hours, service area)
- The example system shown on the hero (`hero.example`)
- Shop products (`products`) and the "Example listings" tag in `src/components/Shop.tsx`
- Stats in `about.stats` and the "Sample figures" tag in `src/components/About.tsx`
- The monitoring chart value (18.6 kWh) in `src/components/Services.tsx`

### Photography

The hero uses the client-supplied photo in `public/photos/` (WebP at 1000, 1600 and 2000 px). The "Who it's for" tabs and the shop cards use real daylight photos, free under the [Unsplash License](https://unsplash.com/license), listed with credits in `src/content/photos.ts`. They load from Unsplash's image CDN in the right size for each screen.

To use SolarShop's own photos (recommended before launch): put the files in `public/photos/` and change each `src` in `src/content/photos.ts` to the file path, for example `"/photos/hero.jpg"`. Keep to natural daylight shots, no night or dusk, no dark overlays. The hero text sits on the left, so pick a hero photo with open sky or calm ground on that side.

## Enquiry form

The form validates every field in the browser and shows clear error messages. To make it deliver enquiries, point it at any form backend that accepts a JSON `POST` (Formspree, Basin, Getform, or your own endpoint):

1. Create a form with your provider and copy its endpoint URL.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_ENQUIRY_ENDPOINT=<your URL>`. On Vercel, add the same variable under Project Settings → Environment Variables.
3. Rebuild. The form now posts `{ name, email, phone, postcode, property, interests, message, consent, source }` and shows a success panel when the endpoint returns 2xx, or an error with a retry if it fails.

Without the variable, the form runs in **preview mode**: it validates and then says plainly that nothing was sent.

## Deploying

**Any web host (cPanel, Plesk, Netlify, S3):** run `npm run build` and upload the contents of `out/` to the web root (for cPanel, `public_html`).

**Vercel:** import the repository. Vercel detects Next.js automatically; the default build command (`npm run build`) works as is, and the static export in `out/` is served. Add `NEXT_PUBLIC_ENQUIRY_ENDPOINT` as an environment variable. `vercel.json` pins the Next.js framework preset.

## Single-file preview

`npm run preview:artifact` (after `npm run build`) writes `preview/solarshop-preview.html`: the whole homepage in one self-contained file with fonts, images and the interaction script inlined. Useful for sharing the design without hosting.

## Project structure

```
src/
  app/            layout, page, global styles and design tokens
  components/     one component per homepage section
  components/art/ daylight SVG illustrations (hero, scenes, product art, logo mark)
  content/site.ts all copy, products and contact details
  lib/enhance.ts  menu, tabs, shop filter and form behaviour (framework-free)
public/brand/     logo files and favicons generated from the client logo
public/fonts/     self-hosted font files (Latin subset)
scripts/          preview builder and logo asset generator
design-handoff/   brief analysis, design blueprint, QA results, screenshots
```

## Performance and accessibility

Measured with Lighthouse 13.5 against the production build served with compression (11 Oct 2026): mobile 92 performance, desktop 100; accessibility, best practices and SEO 100 on both. No layout shift (CLS 0). All colour pairs for text meet WCAG AA. The page works without JavaScript apart from the menu, tabs, shop filter and form sending.
