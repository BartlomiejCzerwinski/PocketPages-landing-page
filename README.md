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

Update the placeholders in `website/src/config/site.ts` and the owner decisions listed in `CONTENT_TODO.md` before deploying.

```bash
cd website
npm run build
# then deploy with Vercel from the repo root
cd ..
vercel
# or for a production deployment
vercel --prod
```

You can also import the repository into Vercel through the dashboard and let Vercel detect the `Next.js` project automatically.
The root `vercel.json` points Vercel at the exported site in `website/out`.

## Notes

- The repository provided for this task did not include the Android application source code.
- The website is configured as a static Next.js export and can be deployed on Vercel.
- Do not publish the site until all placeholder legal and business values are replaced with confirmed production values.
