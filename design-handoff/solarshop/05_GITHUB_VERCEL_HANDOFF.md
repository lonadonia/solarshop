# 05 · GitHub / Vercel Handoff — SolarShop

| Item | Status |
|---|---|
| Project slug | `solarshop-website` |
| Code | Next.js 16.3.6, React 19.2.8, TypeScript 5.9.3, Tailwind CSS 4.3.3, static export |
| CODE_BUILT | VERIFIED_PASS — `npm run build` exit 0, lint and typecheck clean |
| Local repository | Git, branch `main`, first commit `9f3fa85b435a983592d23af1bc94ed7765faee32` |
| GITHUB_PUSHED | VERIFIED_PASS — pushed to https://github.com/lonadonia/solarshop, branch `main` (repository is **public**; switch to private in GitHub settings if the client work should not be visible) |
| VERCEL_READY | VERIFIED_PASS — standard Next.js build, static export, no server features, no `vercel.json` needed, no hard-coded localhost URLs |
| PREVIEW_DEPLOYED | **PREVIEW_NOT_DEPLOYED** — the Vercel connector returned 403 for the account's team scope; import the repo manually (steps below) |
| PRODUCTION_UNCHANGED | Yes — no hosting, DNS or production systems were touched |

## Commands

```bash
npm install
npm run dev
npm run build            # -> out/
npm run lint && npm run typecheck
npm run preview:artifact # single-file preview in preview/
```

## Environment variables (names only)

- `NEXT_PUBLIC_ENQUIRY_ENDPOINT` — form backend URL. Optional; without it the form runs in preview mode.


## To deploy a Vercel preview

1. In Vercel, **Add New → Project** and import the `lonadonia/solarshop` repository.
2. Keep the detected Next.js settings. Add `NEXT_PUBLIC_ENQUIRY_ENDPOINT` if the form provider is ready.
3. Deploy. Every push to a branch other than `main` creates a preview URL.

## To upload to the client's own hosting

Run `npm run build` and upload the contents of `out/` to the web root (a ready-built copy is supplied as `solarshop-site-upload.zip`).
