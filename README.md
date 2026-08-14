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

The static export is generated in `website/out/`.

## Linting

```bash
cd website
npm run lint
```

## Vercel deployment

The Next.js app lives in `website/`. Commit and push the `vercel.json` files in this repository before redeploying. Vercel keeps old dashboard commands until they are cleared or overridden by a committed `vercel.json`.

### Required dashboard settings

In Vercel, open **Project Settings → General** and **Build and Deployment**:

1. Set **Root Directory** to `website`.
2. Set **Framework Preset** to `Next.js`.
3. Turn **off** the overrides for **Install Command**, **Build Command**, and **Output Directory**.
4. Save, then redeploy the latest Git commit.

The command `cd website && npm install` must not appear anywhere in the dashboard. It fails because Vercel is already inside `website/`.

### CLI

```bash
cd website
npx vercel
# or for a production deployment
npx vercel --prod
```

Update the placeholders in `website/src/config/site.ts` and the owner decisions listed in `CONTENT_TODO.md` before publishing.

## Notes

- The repository provided for this task did not include the Android application source code.
- The website is configured as a static Next.js export and can be deployed on Vercel.
- Do not publish the site until all placeholder legal and business values are replaced with confirmed production values.
