# PocketPages website

This repository contains a static marketing, support, and legal website for `PocketPages`, built with Next.js App Router, TypeScript, and Tailwind CSS in `website/`.

## Local development

```bash
cd website
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Production build

```bash
cd website
npm run build
```

This creates a production Next.js build in `website/.next/`.

## Linting

```bash
cd website
npm run lint
```

## Vercel deployment

The Next.js app lives in `website/`. Commit and push `website/vercel.json` before redeploying.

Vercel’s Next.js preset needs `.next` (it looks for `routes-manifest.json` there). Do not set Output Directory to `out`.

### Required dashboard settings

In Vercel, open **Project Settings → General** and **Build and Deployment**:

1. Set **Root Directory** to `website`.
2. Set **Framework Preset** to `Next.js`.
3. Set **Output Directory** to `.next`, or turn that override off.
4. Turn **off** leftover **Install Command** / **Build Command** overrides such as `cd website && ...`.
5. Save, then redeploy the latest Git commit.

### CLI

```bash
cd website
npx vercel
# or for a production deployment
npx vercel --prod
```

Update the remaining placeholders in `website/src/config/site.ts` and the owner decisions listed in `CONTENT_TODO.md` before publishing.

Canonical Privacy Policy and Terms of Service source files live in `legal/` (currently revision 3).

## Notes

- The repository provided for this task did not include the Android application source code.
- The website is a Next.js App Router project configured for Vercel.
- Do not publish the site until all placeholder legal and business values are replaced with confirmed production values.
