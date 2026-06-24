# Shahab Ahmed — Portfolio

Personal portfolio site. Live at [shahabahmed.site](https://shahabahmed.site).

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Supabase (client)

## Local development

Requires Node.js & npm.

```sh
# Install dependencies
npm i

# Copy env template and fill in your values
cp .env.example .env

# Start the dev server (http://localhost:8080)
npm run dev
```

## Build

```sh
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Environment variables

Set these in `.env` for local dev, and in the Cloudflare Pages dashboard
(Settings → Environment variables) for production builds:

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project ID |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |
| `VITE_SUPABASE_URL` | Supabase project URL |

## Deployment

Hosted on Cloudflare Pages, auto-deployed from the `main` branch.

- Build command: `npm run build`
- Build output directory: `dist`
- SPA routing handled by `public/_redirects`
