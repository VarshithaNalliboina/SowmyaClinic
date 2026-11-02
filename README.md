# Dr. Sowmya — Backup site (rose gold)

Next.js 15 (App Router) + React 19 + TypeScript. Same look and behaviour as the original static site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
npm run typecheck
```

## Deploy on Vercel

1. Push this folder to a new GitHub repo.
2. Vercel → Add New → Project → import the repo.
3. Framework is detected as **Next.js** automatically. Keep the default settings → **Deploy**.

No environment variables are needed today.

## Where things are

- `app/layout.tsx` — page title, description, favicon, `noindex,nofollow`, Google Fonts.
- `app/page.tsx` — the page, section by section.
- `components/` — one file per section (same markup and classes as the original).
- `components/SiteScript.tsx` — runs the original site script after the page loads.
- `app/top-e224ac.css, then app/styles-85fca9.css` — the original CSS, global, same order.
- `public/script-85fca9.js` — the original JavaScript (slider, menu, animations, map tabs, WhatsApp booking form).
- `public/img/` — all images.

## Before launch

The site is hidden from Google on purpose (`robots: { index: false, follow: false }` in `app/layout.tsx`).
Remove that line when the doctor's site goes live.

## Adding Supabase later

The booking form logic is in `public/script-85fca9.js`. Search for **FUTURE SUPABASE SPOT** — that comment shows where
the booking would be saved to a Supabase table before WhatsApp opens. Nothing is connected yet
(no Supabase package, no keys, no network calls). Put keys in `.env.local` (already git-ignored)
and add API routes under `app/api/` when needed.
