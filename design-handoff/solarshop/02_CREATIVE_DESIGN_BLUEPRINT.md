# 02 · Creative Design Blueprint — SolarShop

## 1. Experience thesis

For homeowners, farmers and business owners weighing a solar investment, the site should feel **natural, capable and warm** by building every shape and colour from the SolarShop logo's sun-over-hills mark, leading visitors to book a free assessment with confidence.

## 2. Three territories considered

| Direction | Idea | Verdict |
|---|---|---|
| **A. Sun over hills** (chosen) | The logo "o" opened up into a landscape: circles, arches and horizon curves; daylight fields alternating with deep forest and lake bands; geometric display type that matches the wordmark | Strongest brand fit, uses every colour, natural rather than bright, needs no stock photos |
| B. Precision instrument | Datasheet grid, mono specs, panel-cell motif, engineering tone | Credible but drifts cool and grey; weak on "colour is vital" |
| C. Colour-field bento | Bold blocks in each brand colour, chunky type | Colourful but loud; fails "not overly bright" |

## 3. Signature devices

- **The "o" mark in the headline**: "Grow your own p●wer." The logo's sun-over-hills disc replaces the o.
- **Hero disc**: a large circular daylight landscape (home with roof panels, battery, ground array) framed like the logo mark, with a dotted sun path.
- **Arch frames**: product and scene images sit in arch-topped windows, the sun rising over a horizon.
- **Horizon edges**: the logo's curved band reappears as section edges and as the footer, where the sun rises behind three hills.
- **Process sun path**: the four steps sit under a sun that climbs from morning to midday.

## 4. Design tokens

| Token | Hex | Role |
|---|---|---|
| daylight | `#F7F8F1` | Page ground (faint green-white) |
| paper | `#FCFDF8` | Cards on tinted fields |
| mist | `#E4EEF4` | Sky tint ("Who it's for", chips) |
| butter | `#FBEFCB` | Sun tint (process, solar tile) |
| sage | `#E6EEDA` | Leaf tint (FAQ, battery tile, spec chips) |
| wheat | `#F2EAD6` | Earth tint (enquiry, footer sky) |
| line | `#D3DEC5` | Hairlines, input borders |
| sun | `#F5BC2A` | Primary CTA, stats figures, suns |
| gold | `#E6AE45` | Logo sun, sun-path dots |
| meadow | `#A9C48A` | Light hills, labels on forest |
| spring | `#7FB03D` | Battery, chart, check accents |
| leaf | `#558455` | Logo green, hills |
| sky | `#477DAB` | Logo blue, panels, EV |
| forest | `#12502A` | Dark bands, secondary buttons |
| pine | `#0C3A1E` | Text on yellow |
| lake | `#22496B` | Stats panel, small blue text |
| soil | `#5C4630` | Small earth accents, roofs |
| ink / ink-soft | `#17301F` / `#3F5C47` | Body and secondary text |
| gold-deep / leaf-deep | `#7D5508` / `#3B6A3D` | Small coloured labels (AA) |

All text pairs were checked against WCAG AA (see 04).

## 5. Typography

- Display: **Outfit** (variable 300–800), geometric like the wordmark. H1 `clamp(2.9rem, 5.6vw + 0.6rem, 5.6rem)`, weight 700, tracking −0.038em.
- Body: **Instrument Sans** 17px / 1.65.
- Labels and specs: **DM Mono** uppercase 12.5px, 0.14em tracking; units read like a datasheet (kWp, kWh, W).
- All fonts self-hosted, Latin subset, `font-display: swap`.

## 6. Page structure (homepage)

| # | Section | Field | Content and interaction | REQ |
|---|---|---|---|---|
| 1 | Header | daylight, sticky | Logo, six anchors, phone, yellow CTA; mobile drawer with Escape and focus return | 001, 010 |
| 2 | Hero | daylight | Eyebrow, headline with logo "o", lead, two CTAs, three promises; hero disc with example-system chips; sun rises on load | 001, 002, 005, 009 |
| 3 | What we do | daylight + 4 tiles | Bento: solar (butter, tall), battery (sage), EV (mist), care (forest, with monitoring card) | 002, 004, 009 |
| 4 | Who it's for | mist, horizon edge | Tabs Homes / Business / Farms & land; arch scene, benefits, typical sizes, CTA that preselects property type | 002, 009 |
| 5 | Shop | forest | Filter chips, six example listings, spec chips, "Ask about this" prefills the form | 004, 009, 016 |
| 6 | How it works | butter | Four steps under a climbing sun path; vertical timeline on mobile | 002 |
| 7 | Why SolarShop | daylight + lake panel | Statement with coloured phrases, four values, stats panel labelled as sample | 004, 009, 016 |
| 8 | FAQ | sage | Native accordion, call card | 009 |
| 9 | Enquiry | wheat | Contact list, validated form, preview/success/error states | 012 |
| 10 | Footer | wheat → forest | Sun rising over hills, light logo, links, contact | 001, 004 |

## 7. Responsive behaviour

- 1440: two-column hero, 3-column bento and shop, horizontal process with sun path.
- 1024: same structure; monitoring card stacks inside its tile.
- 768: hero stacks, illustration below text; bento 2 columns; shop 2 columns; process becomes a vertical timeline.
- 390 / 360: single column, menu drawer, chips kept inside gutters, form fields full width.

## 8. Motion

One orchestrated moment: the hero sun rises (1.8s) and its halo breathes slowly; chips settle in from 10px below (never from invisible). Buttons lift 2px on hover, arrows nudge. All motion is disabled under `prefers-reduced-motion`.

## 9. Assets

| Asset | Status |
|---|---|
| Logo (full colour, light, mark, favicons) | Generated from the client PNG |
| Hero, home, business and farm scenes | Custom SVG illustrations, daylight |
| Six product illustrations | Custom SVG, placeholders for real product shots |
| Icons | Custom service icons + Lucide UI icons (ISC licence) |
| Photography | None used; guidelines in README |
