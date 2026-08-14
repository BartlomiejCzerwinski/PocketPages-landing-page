export type SiteConfig = {
  appName: string;
  developerDisplayName: string;
  developerLegalName: string;
  supportEmail: string;
  siteUrl: string;
  googlePlayUrl: string | null;
  privacyEffectiveDate: string;
  termsEffectiveDate: string;
  governingLaw: string;
  accountDeletionResponseTime: string;
  minimumAge: string;
};

const TODO = {
  developerDisplayName: "TODO_DEVELOPER_DISPLAY_NAME",
  developerLegalName: "TODO_DEVELOPER_LEGAL_NAME",
  supportEmail: "TODO_SUPPORT_EMAIL",
  siteUrl: "TODO_SITE_URL",
  privacyEffectiveDate: "TODO_PRIVACY_EFFECTIVE_DATE",
  termsEffectiveDate: "TODO_TERMS_EFFECTIVE_DATE",
  governingLaw: "TODO_GOVERNING_LAW",
  accountDeletionResponseTime: "TODO_ACCOUNT_DELETION_RESPONSE_TIME",
  minimumAge: "TODO_MINIMUM_AGE",
} as const;

export const siteConfig = {
  appName: "PocketPages",
  developerDisplayName: TODO.developerDisplayName,
  developerLegalName: TODO.developerLegalName,
  supportEmail: TODO.supportEmail,
  siteUrl: TODO.siteUrl,
  googlePlayUrl: null,
  privacyEffectiveDate: TODO.privacyEffectiveDate,
  termsEffectiveDate: TODO.termsEffectiveDate,
  governingLaw: TODO.governingLaw,
  accountDeletionResponseTime: TODO.accountDeletionResponseTime,
  minimumAge: TODO.minimumAge,
} as const satisfies SiteConfig;

export const ownerConfirmationItems = [
  "Developer display name",
  "Developer legal name",
  "Support email",
  "Public website URL",
  "Google Play listing URL",
  "Privacy Policy effective date",
  "Terms of Service effective date",
  "Governing law and jurisdiction",
  "Account deletion response time",
  "Minimum age requirement",
  "Exact in-app account deletion path",
  "Whether optional diagnostics, crash reports, or installation identifiers are collected in production",
  "Whether account deletion also removes linked RevenueCat customer data",
  "Whether PocketPages-managed temporary processing images are deleted immediately after processing in all production flows",
] as const;

export const APP_DESCRIPTION =
  "Scan selected book pages, convert them into clean readable text with AI-assisted extraction, and enjoy a focused mobile reading experience.";

export const PLAY_SUBSCRIPTIONS_URL =
  "https://play.google.com/store/account/subscriptions";

export const isPlaceholder = (value: string | null | undefined): boolean =>
  !value || value.startsWith("TODO_");

export const hasGooglePlayUrl = Boolean(siteConfig.googlePlayUrl);

export const googlePlayLabel = hasGooglePlayUrl
  ? "Get it on Google Play"
  : "Coming soon on Google Play";

export const getSiteOrigin = (): URL | undefined => {
  if (isPlaceholder(siteConfig.siteUrl)) {
    return undefined;
  }

  try {
    return new URL(siteConfig.siteUrl);
  } catch {
    return undefined;
  }
};

export const getCanonicalUrl = (path: string): string | undefined => {
  const origin = getSiteOrigin();

  if (!origin) {
    return undefined;
  }

  return new URL(path, origin).toString();
};

export const getSupportEmailHref = (): string =>
  isPlaceholder(siteConfig.supportEmail)
    ? "#support-email-placeholder"
    : `mailto:${siteConfig.supportEmail}`;

export const getDeleteAccountMailto = (): string => {
  const subject = encodeURIComponent(
    `${siteConfig.appName} account deletion request`,
  );
  const body = encodeURIComponent(
    [
      `Hello ${siteConfig.developerDisplayName},`,
      "",
      "I would like to request deletion of my PocketPages account.",
      "Google email associated with the account:",
      "",
      "Please let me know if you need any additional verification to complete this request.",
    ].join("\n"),
  );

  return isPlaceholder(siteConfig.supportEmail)
    ? "#support-email-placeholder"
    : `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
};
