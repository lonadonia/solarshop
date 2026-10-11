# 01 · Client Brief Analysis — SolarShop

## 1. Project snapshot

| | |
|---|---|
| Client | SolarShop (solar company; name and logo supplied) |
| Project type | New brand-building website, contest-style "page example to build on" |
| Phase delivered | Homepage design implemented as a working, responsive coded page |
| Primary goal | Brand-building: reinforce identity, show solar expertise, build trust |
| Deliverables requested by client | (1) functional site on client hosting, (2) source design files and custom assets, (3) quick-start guide for updating text, images and products |

## 2. Verified sources

| Source | Status | Notes |
|---|---|---|
| Brief text (in chat, 11 Oct 2026) | Read in full | Quoted requirements below |
| `Likley_Logo.png` (1106×362) | Read | Wordmark "solarshop": "solar" green `#558455`, "shop" blue `#477DAB`; the "o" is a sun-over-hills disc (gold `#EBB54A` sun, white curved band, green `#558356` and light green `#8FAE6E` hills) |
| `LOGO_COLURS.png` (254×96) | Read, hex labels illegible at this resolution | Swatches sampled: Forest Green ≈ `#104E25`, spring green ≈ `#81AF3C`, sunlit yellow ≈ `#F6BE21`, light grey ≈ `#E3E3E3`. Values are pixel samples, pending client confirmation |
| Existing website, hosting details | Not supplied | Built as a portable static site |

## 3. What the client actually wants

- **Colour first, layout second.** "COLOUR IS VITAL, LAYOUT IS SECONDARY." Use all brand colours; avoid a monotone result.
- **Natural, not loud.** "NO DARK GRADIENT PICTURES, NO NIGHTTIME PICS, NATURAL DAYLIGHT ONLY ONLY" and "DO NOT WANT OVERLY BRIGHT-LOOKING SITES EITHER."
- **Light colours with darker earthy tones, no greys, plenty of white space.**
- **Design over imagery.** "NOT JUST ENTRIES LOADED WITH PICS I WILL NEVER USE."
- **Professional and trustworthy**, telling visitors who SolarShop is and what it offers.

## 4. Scope boundary

- Built: one complete homepage (all brand sections), responsive, with a working enquiry form flow, editable content file and self-hosted assets.
- Out of scope for this example: additional pages (product detail, blog), CMS, real product data, upload to the client's hosting (no access supplied), live form inbox (needs the client's form provider).

## 5. Requirements matrix

| ID | Class | Source | Requirement | Priority | Implementation | Acceptance |
|---|---|---|---|---|---|---|
| REQ-001 | Brand | Attachments | Use the supplied logo and palette | MUST | Transparent logo files generated from the PNG; tokens in `globals.css` | Logo on light header and dark footer; all palette hues present |
| REQ-002 | Visual | "COLOUR IS VITAL" | Colour-led design using all brand colours, not monotone | MUST | Sections alternate sky, butter, sage, wheat, forest, lake; tiles and icons colour-coded | Every brand hue appears in at least two sections |
| REQ-003 | Visual | "NO GREYS" | No grey neutrals | MUST | Neutrals are green-, sky- or wheat-tinted; borders `#D3DEC5`; text `#17301F` | No grey hex values in tokens |
| REQ-004 | Visual | "MIX OF LIGHT COLOURS AND DARKER EARTHY TONES" | Light fields with dark earthy bands | MUST | Forest shop band, lake stats panel, forest footer | Visible on desktop and mobile screenshots |
| REQ-005 | Imagery | "NATURAL DAYLIGHT ONLY" | No night, no dark gradient pictures | MUST | All illustrations are daylight scenes with light sky gradients | Visual review of all scenes |
| REQ-006 | Visual | "NOT OVERLY BRIGHT" | Natural, softened brightness | MUST | Page ground `#F7F8F1`, pale tints for large areas, saturated colour kept to small accents | Visual review |
| REQ-007 | Layout | "WHITE SPACE" | Generous spacing | MUST | Section rhythm `clamp(4.25rem, 8vw, 7rem)`, 78rem container | Visual review |
| REQ-008 | Imagery | "NOT JUST ENTRIES LOADED WITH PICS" | Design-led, few images | MUST | Custom SVG illustrations, no stock photos | Page contains no photographs |
| REQ-009 | Brand | Objective | Communicate who SolarShop is, what it offers, build trust | MUST | Hero, services, solutions, shop, process, about, FAQ | All sections present |
| REQ-010 | Tech | Scope | Modern, responsive, mobile-friendly | MUST | Tailwind responsive layout | No overflow at 1440/1024/768/390/360 |
| REQ-011 | Tech | Acceptance | Loads quickly, passes basic speed tests | MUST | Static export, inline CSS, self-hosted fonts, SVG art | Lighthouse performance ≥ 90 mobile with compression |
| REQ-012 | Function | Acceptance | Contact or enquiry form works flawlessly | MUST | Validated form, JSON POST to configurable endpoint, success and error states | Automated form tests pass |
| REQ-013 | Deliverable | Deliverable 2 | Source design files and custom assets | MUST | Source repo, SVG components, logo assets, screenshots | Files in delivery zip |
| REQ-014 | Deliverable | Deliverable 3 | Quick-start guide for updating text, images, products | MUST | README "Updating the site"; all content in `src/content/site.ts` | Guide present |
| REQ-015 | Deliverable | Deliverable 1 | Upload to client hosting | MUST (later) | Static `out/` folder ready for any host | BLOCKED_EXTERNAL: no hosting access |
| REQ-016 | Integrity | Skill rule | No fabricated claims presented as real | MUST | Sample figures, listings and example system are labelled on the page | Labels visible |

## 6. Assumptions and missing inputs

- A-01: Palette hex values are sampled from a low-resolution image. Confirm exact codes.
- A-02: "Light Grey" in the palette conflicts with "no greys". Replaced with tinted neutrals (daylight, sage, mist, wheat).
- A-03: Region unknown ("colour" spelling suggests UK/IE/AU/ZA). Copy avoids currency and region-specific schemes; form asks for "Postcode or ZIP".
- A-04: Services assumed from the name and brief (panels, batteries, EV charging, maintenance). Confirm the real offer.
- A-05: Contact details, stats, product range and the hero example system are placeholders.

## 7. Risks

- Form needs a provider endpoint to deliver mail (documented, one environment variable).
- Hosting type unknown; static export avoids server requirements.
