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

The Next.js app lives in `website/`. Vercel must use that folder as the project root. Do not keep an install command such as `cd website && npm install`; that fails when Vercel is already inside `website/`.

### Dashboard (recommended)

1. Import this Git repository in Vercel.
2. Set **Root Directory** to `website`.
3. Set **Framework Preset** to `Next.js`.
4. Leave **Install Command**, **Build Command**, and **Output Directory** on their defaults. Do not override them.
5. Deploy.

If a previous deployment already used custom commands, open **Project Settings → General** and **Build and Deployment**, set the Root Directory to `website`, clear the overridden install/build/output fields, then redeploy.

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
