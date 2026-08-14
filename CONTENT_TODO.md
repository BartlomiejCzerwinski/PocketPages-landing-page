# PocketPages content and launch TODOs

Replace every placeholder below before publishing or deploying the production site.

## Required production values

- `TODO_DEVELOPER_DISPLAY_NAME` in `website/src/config/site.ts`
- `TODO_DEVELOPER_LEGAL_NAME` in `website/src/config/site.ts`
- `TODO_SUPPORT_EMAIL` in `website/src/config/site.ts`
- `TODO_SITE_URL` in `website/src/config/site.ts`
- `googlePlayUrl` in `website/src/config/site.ts` or intentionally keep `null` until the Play listing is live
- `TODO_PRIVACY_EFFECTIVE_DATE` in `website/src/config/site.ts`
- `TODO_TERMS_EFFECTIVE_DATE` in `website/src/config/site.ts`
- `TODO_GOVERNING_LAW` in `website/src/config/site.ts`
- `TODO_ACCOUNT_DELETION_RESPONSE_TIME` in `website/src/config/site.ts`
- `TODO_MINIMUM_AGE` in `website/src/config/site.ts`

## Owner confirmation required

- Confirm the exact in-app account deletion path and update `/delete-account/`
- Confirm whether the production app or backend collects optional diagnostics, crash reports, installation identifiers, IP addresses, or device metadata beyond normal provider processing
- Confirm whether PocketPages-managed temporary processing images are deleted immediately after processing in all production flows
- Confirm whether account deletion removes linked RevenueCat customer data
- Confirm any final subscription/usage-limit wording shown in the FAQ and support pages
- Confirm the public website domain before enabling canonical URLs, sitemap URLs, and final social metadata

## Do not deploy yet

The site is intentionally configured with placeholders and “Coming soon on Google Play” fallback behavior. Do not publish it until the missing legal and business information is confirmed.
