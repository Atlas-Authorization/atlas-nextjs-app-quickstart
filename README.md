# atlas-nextjs-app-quickstart

A minimal Next.js (App Router) app pre-wired with [Atlas](https://atlasauth.net)
auth, using `@atlasauth/nextjs` (edge middleware + server helpers) and
`@atlasauth/react` (provider + components).

## What it shows

- `middleware.ts` — Atlas edge middleware verifying the session JWT and
  protecting every route except `/` and `/sign-in` (`@atlasauth/nextjs`).
- `app/providers.tsx` — the client-side `<AtlasProvider>` (from
  `@atlasauth/react`), mounted in `app/layout.tsx`.
- `app/page.tsx` — a public home page with `<SignedIn>` / `<SignedOut>` and a
  `<UserButton>`.
- `app/sign-in/page.tsx` — the hosted `<SignIn>` flow.
- `app/dashboard/page.tsx` — a protected server component using the pre-bound
  `auth()` / `currentUser()` helpers from `@atlasauth/nextjs/server`.

## Run it

1. `npm install`
2. `cp .env.example .env.local`, then set `NEXT_PUBLIC_ATLAS_PUBLISHABLE_KEY`
   (and `NEXT_PUBLIC_ATLAS_FRONTEND_API` / `ATLAS_JWKS_URL` / `ATLAS_ISSUER` for
   your instance) to the values from [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open http://localhost:3000. Visit `/dashboard` to see route protection in action.
