# 03 · Claude Code Master Prompt — SolarShop

Paste this into a new Claude Code session opened in the `solarshop-website` repository.

---

You are continuing development of the **SolarShop** website: a Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 site, exported as static files (`output: "export"`). The homepage is complete. Your job is to extend it without breaking its design system, then build, test, commit, push and keep it Vercel-ready. Do not stop at documentation.

## Read first

1. `README.md` — commands, editing guide, deployment.
2. `design-handoff/solarshop/01_CLIENT_BRIEF_ANALYSIS.md` — requirements REQ-001 to REQ-016.
3. `design-handoff/solarshop/02_CREATIVE_DESIGN_BLUEPRINT.md` — tokens, type, signature devices.
4. `src/app/globals.css` (`@theme` tokens), `src/content/site.ts` (all copy), `src/lib/enhance.ts` (behaviour).
5. Run `git status`, `git remote -v`, `npm install`, `npm run build` before changing anything.

## Immovable client requirements

- Colour is vital: use all brand colours (forest, spring, leaf, meadow, sun, gold, sky, lake) and the tinted light fields. Never drift into a monotone page.
- **No greys.** Neutrals must lean green, sky or wheat. Do not use Tailwind's default `gray/slate/zinc/neutral/stone` palettes.
- **Natural daylight only.** No night or dusk imagery, no dark gradient overlays on pictures.
- Not overly bright: large areas use pale tints; saturated colour stays in accents.
- Generous white space; design-led, not photo-heavy.
- Professional, trustworthy brand presence; the enquiry form must work flawlessly.
- Never present invented figures, testimonials, certifications or products as real. Label sample content on the page.

## Design system rules

- Fonts: Outfit (display), Instrument Sans (body), DM Mono (labels/specs). Self-hosted in `public/fonts`.
- Shapes: circles, arch-topped frames (`.arch`), horizon curves. Pill buttons (`.btn-sun`, `.btn-forest`, `.btn-line`).
- Small coloured text uses the deep tokens (`gold-deep`, `leaf-deep`, `lake`, `soil`, `forest`) to keep WCAG AA.
- Copy lives in `src/content/site.ts`; components only read from it.
- Behaviour stays framework-free in `src/lib/enhance.ts` so `npm run preview:artifact` keeps working.

## Likely next tasks

1. Replace SAMPLE content with real company details, products and stats once supplied.
2. Connect the form: set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` (any JSON POST form backend). Keep honest preview/success/error states.
3. Add pages if requested (Products, Product detail, About, Contact, Privacy) reusing the header, footer, tokens and section patterns. Keep static export compatible (no server-only features).
4. Swap illustrations for real daylight project photos only when the client supplies them; keep arch frames.

## Acceptance for every change

- `npm run lint`, `npm run typecheck`, `npm run build` all exit 0.
- Browser check at 1440, 1024, 768, 390 and 360 px: no horizontal overflow, no console errors, menu/tabs/filter/form work by mouse and keyboard.
- Lighthouse (compressed static serve): mobile performance ≥ 90, accessibility 100.
- Commit with a descriptive message, push to the authorised repository (private by default, never force-push), and report repo URL, branch and commit SHA. Report a Vercel preview URL only if you actually deployed and opened it.
