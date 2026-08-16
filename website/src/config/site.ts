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
  freePlanMonthlyPages: number;
  proPlanMonthlyPages: number;
  maxPagesPerDocument: number;
  legalDocumentRevision: number;
};

const TODO = {
  siteUrl: "TODO_SITE_URL",
} as const;

export const siteConfig = {
  appName: "PocketPages",
  developerDisplayName: "Bartłomiej Czerwiński",
  developerLegalName: "Bartłomiej Czerwiński",
  supportEmail: "pocketpages@hotmail.com",
  siteUrl: TODO.siteUrl,
  googlePlayUrl: null,
  privacyEffectiveDate: "August 16, 2026",
  termsEffectiveDate: "August 16, 2026",
  governingLaw: "Poland",
  accountDeletionResponseTime:
    "without undue delay and within the period required by applicable law",
  minimumAge: "13",
  freePlanMonthlyPages: 5,
  proPlanMonthlyPages: 200,
  maxPagesPerDocument: 20,
  legalDocumentRevision: 3,
} as const satisfies SiteConfig;

export const ownerConfirmationItems = [
  "Public website URL",
  "Google Play listing URL",
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
  const subject = encodeURIComponent("Delete my PocketPages account");
  const body = encodeURIComponent(
    [
      `Hello ${siteConfig.developerDisplayName},`,
      "",
      "I would like to request deletion of my PocketPages account and associated data.",
      "Google email associated with the account:",
      "",
    ].join("\n"),
  );

  return isPlaceholder(siteConfig.supportEmail)
    ? "#support-email-placeholder"
    : `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
};
