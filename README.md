# Friends of Nampa Airport

Independent volunteer group for Nampa Municipal Airport (KMAN) in Nampa, Idaho. This site keeps people informed, posts meeting details, and points to official airport sources.

This group is not affiliated with the City of Nampa or with AOPA.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npx tsc --noEmit
npm test
```

## Production build

```bash
npm run build
npm run start
```

## Deployment

Deploy on Vercel from the `main` branch of `51Magnum/friends-of-nampa-airport`. Framework preset: Next.js. No environment variables. Custom domain: [friendsofnampaairport.org](https://www.friendsofnampaairport.org) (www is canonical). Pushes to `main` should auto-deploy. Do not deploy from a local working directory.

The site domain and origin live in `lib/site-config.ts` (`SITE_DOMAIN` / `SITE_ORIGIN`). Change them there if the hostname changes.

## Project structure

- `app/page.tsx` — single-page site (mission, announcements, meetings, official links, volunteer roles, signup, contact)
- `app/layout.tsx` — root layout with shared header/footer
- `app/opengraph-image.tsx` — dynamic social share image
- `lib/site-config.ts` — group name, domain, official links, and visible placeholders for email, first meeting, and signup embed (edit copy here)

## Placeholders

The group domain is `friendsofnampaairport.org`. Until the remaining details are confirmed, `lib/site-config.ts` holds TODO values such as `[info@friendsofnampaairport.org]`, `[FIRST MEETING DATE]`, `[VENUE]`, `[TIME]`, and `[MAILERLITE SIGNUP FORM EMBED]`. The site renders these as clearly marked placeholders.
