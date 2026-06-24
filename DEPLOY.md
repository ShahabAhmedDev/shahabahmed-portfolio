# Deploying to Cloudflare Pages with shahabahmed.site

This site is a static Vite + React SPA, so **Cloudflare Pages is a great free host**:
global CDN, free SSL, unlimited bandwidth/requests, auto-build on every git push.

You'll do three things: (1) push to GitHub, (2) connect the repo to Cloudflare Pages,
(3) point your Namecheap domain at it.

---

## Step 1 — Push the cleaned project to GitHub

If it's not already a GitHub repo:

```sh
cd shahabahmedportfolio
git init                       # skip if already a git repo
git add .
git commit -m "Remove Lovable, prep for Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/<your-username>/shahabahmed-portfolio.git
git push -u origin main
```

> `.env` is now gitignored, so your Supabase keys won't be pushed. You'll add them
> in Cloudflare in Step 2. (Note: `VITE_` vars are bundled into the public JS at build
> time anyway — they're the Supabase *anon* key, which is safe to expose. Just make sure
> Row Level Security is enabled on your Supabase tables.)

---

## Step 2 — Create the Cloudflare Pages project

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** tab →
   **Connect to Git**. (Free Cloudflare account; no credit card needed.)
2. Authorize GitHub and select your repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Environment variables** (expand "Environment variables" → add for **Production**):
   ```
   VITE_SUPABASE_PROJECT_ID    = <your value>
   VITE_SUPABASE_PUBLISHABLE_KEY = <your value>
   VITE_SUPABASE_URL           = <your value>
   ```
   (Copy these from your local `.env`.)
5. Click **Save and Deploy**. First build takes ~1–2 min. You'll get a free
   `*.pages.dev` URL — open it to confirm the site works.

Every future `git push` to `main` auto-rebuilds and redeploys.

---

## Step 3 — Connect shahabahmed.site (bought on Namecheap)

You have two options. **Option A is recommended** — moving DNS to Cloudflare unlocks
their full CDN/caching and makes domain setup one-click.

### Option A (recommended): Move DNS to Cloudflare

1. In the Cloudflare dashboard → **Add a site** → enter `shahabahmed.site` → pick the
   **Free** plan. Cloudflare scans existing DNS records.
2. Cloudflare gives you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).
3. In **Namecheap** → Domain List → **Manage** next to shahabahmed.site → **Nameservers**
   section → choose **Custom DNS** → paste the two Cloudflare nameservers → save (the
   green checkmark). Propagation takes anywhere from minutes to a few hours.
4. Back in Cloudflare → your **Pages project** → **Custom domains** → **Set up a custom
   domain** → add `shahabahmed.site` and also `www.shahabahmed.site`. Cloudflare auto-creates
   the DNS records and provisions SSL.

### Option B: Keep DNS at Namecheap

1. In Cloudflare → **Pages project** → **Custom domains** → add `shahabahmed.site`.
   Cloudflare shows you a target like `your-project.pages.dev`.
2. In **Namecheap** → Manage → **Advanced DNS**, add:
   - **CNAME** | Host `www` | Value `your-project.pages.dev`
   - For the root/apex `shahabahmed.site`, Namecheap doesn't support CNAME on `@`.
     Use an **ALIAS** record if offered, or Namecheap's **URL Redirect** to forward
     apex → `www`. (This is exactly the friction Option A removes.)
3. Wait for DNS propagation; Cloudflare issues SSL automatically.

---

## Notes

- **SPA routing**: `public/_redirects` (`/* /index.html 200`) is already in the repo so
  deep links / refreshes don't 404. Cloudflare Pages reads this automatically.
- **Social preview image**: `index.html` now references `https://shahabahmed.site/og-image.png`.
  Drop a real `og-image.png` (1200×630) into the `public/` folder, or update that path,
  otherwise link previews show no image.
- **Performance tip (optional)**: `public/shahab-portrait.png` is ~1.3 MB and is the
  largest asset. Compressing it (TinyPNG, or convert to WebP) will noticeably speed up
  first load.

---

## Cost

$0/month. Cloudflare Pages free tier covers unlimited static requests and bandwidth,
500 builds/month. You only ever paid for the domain itself.
