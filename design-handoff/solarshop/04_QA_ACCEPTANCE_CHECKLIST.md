# 04 · QA Acceptance Checklist — SolarShop

Tested 11 Oct 2026 against the production static build (`out/`) and the single-file preview, using Playwright (Chromium 141) and Lighthouse 13.5.

## Build and code

| Test | Result | Evidence |
|---|---|---|
| `npm run build` (Next.js 16.3.6, static export) | VERIFIED_PASS | Exit 0, routes `/` and `/_not-found` prerendered |
| `npm run typecheck` | VERIFIED_PASS | `tsc --noEmit` exit 0 |
| `npm run lint` | VERIFIED_PASS | ESLint (next core-web-vitals + typescript) 0 problems |
| Console errors / failed requests | VERIFIED_PASS | None at any tested width, both builds |
| Secrets in repo | VERIFIED_PASS | Only `.env.example` with an empty variable name |

## Requirements

| REQ | Check | Result |
|---|---|---|
| REQ-001 | Logo on header (colour) and footer (light variant); palette tokens present | VERIFIED_PASS |
| REQ-002 | All brand hues visible across sections (screens/desktop-full.jpg) | VERIFIED_PASS |
| REQ-003 | No grey tokens; neutrals tinted; custom checkbox replaces the grey native one | VERIFIED_PASS |
| REQ-004 | Forest shop band, lake stats panel, forest footer | VERIFIED_PASS |
| REQ-005 | All illustrations daylight, light sky gradients only | VERIFIED_PASS (visual review) |
| REQ-006 | Pale page ground and tints; saturation limited to accents | VERIFIED_PASS (visual review) |
| REQ-007 | Section spacing 68–112px, 78rem container | VERIFIED_PASS |
| REQ-008 | No photographs; custom SVG art only | VERIFIED_PASS |
| REQ-009 | Hero, services, solutions, shop, process, about, FAQ, enquiry all present | VERIFIED_PASS |
| REQ-010 | Horizontal overflow at 1440 / 1024 / 768 / 390 / 360 = 0 px | VERIFIED_PASS |
| REQ-011 | Lighthouse with compression: mobile 92 (FCP 1.4s, LCP 3.1s, TBT 120ms, CLS 0); desktop 100 (LCP 0.7s) | VERIFIED_PASS |
| REQ-012 | Form tests below | VERIFIED_PASS (delivery to a real inbox: BLOCKED_EXTERNAL, needs client endpoint) |
| REQ-013 | Source, SVG components, logo assets, screenshots included | VERIFIED_PASS |
| REQ-014 | README quick-start guide; all copy in one file | VERIFIED_PASS |
| REQ-015 | Upload to client hosting | BLOCKED_EXTERNAL (no hosting access) |
| REQ-016 | "Example system", "Example listings", "Sample figures", "Sample data" labels visible | VERIFIED_PASS |

## Functional journeys (automated, 26/26 passed on both builds)

| Journey | Result |
|---|---|
| Mobile menu opens, Escape closes and returns focus to the toggle, links close it and scroll to the section | VERIFIED_PASS |
| Tabs switch by click; ArrowRight/Left move focus and wrap | VERIFIED_PASS |
| Shop filter: Batteries → 1, Panels → 2, All → 6, live count text updates | VERIFIED_PASS |
| "Ask about this" prefills the message and ticks the matching interest; solution CTA preselects property type | VERIFIED_PASS |
| Empty submit: 7 fields flagged, focus moves to Full name, summary message shown | VERIFIED_PASS |
| Invalid email message on blur | VERIFIED_PASS |
| No endpoint: valid submit shows "Preview mode... nothing was sent" | VERIFIED_PASS |
| Endpoint returns 200 (mocked, CORS): success panel, payload shape correct | VERIFIED_PASS |
| Endpoint returns 500: error message, button re-enabled, form kept | VERIFIED_PASS |
| "Send another enquiry" restores the form | VERIFIED_PASS |
| Header gains scrolled state; FAQ items toggle; skip link is the first Tab stop | VERIFIED_PASS |

## Accessibility

| Check | Result |
|---|---|
| Lighthouse accessibility | 100 mobile, 100 desktop |
| Text contrast, all colour pairs in use (computed) | All ≥ 4.5:1 (lowest: meadow on forest 4.96) |
| Landmarks, single h1, labelled form controls, errors linked by `aria-describedby` | VERIFIED_PASS |
| Headline logo "o" hidden from screen readers; full word provided as text | VERIFIED_PASS |
| `prefers-reduced-motion` disables animation | VERIFIED_PASS (emulated: hero animation 1.8s → 0.01ms, smooth scroll → auto) |

## Screens reviewed

`screens/desktop-full.jpg` (1440), `screens/mobile-full.jpg` (390 @2x), `screens/desktop-hero.png`, `screens/mobile-hero.png`; additional QA captures at 1024, 768 and 360 reviewed during build.

## Open items

- Replace SAMPLE content (contacts, products, stats, hero example system).
- Connect a form endpoint and send one real test enquiry.
- Confirm exact palette hex codes.
