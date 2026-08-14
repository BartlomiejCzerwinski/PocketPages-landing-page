import Link from "next/link";
import {
  getSupportEmailHref,
  hasGooglePlayUrl,
  siteConfig,
} from "@/config/site";

const footerLinks = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/delete-account/", label: "Delete Account" },
  { href: "/support/", label: "Support" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white/55">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="font-serif text-2xl text-[var(--ink)]">
            Your books. In your pocket.
          </p>
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted-ink)]">
            PocketPages helps readers scan the pages they want, turn them into
            clean text, and keep their personal reading library organized.
          </p>
        </div>
        <div className="flex flex-col gap-4 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted-ink)] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                {item.label}
              </Link>
            ))}
            {hasGooglePlayUrl && siteConfig.googlePlayUrl ? (
              <Link
                href={siteConfig.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                Google Play
              </Link>
            ) : (
              <span>Coming soon on Google Play</span>
            )}
            <a
              href={getSupportEmailHref()}
              className="transition hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
            >
              {siteConfig.supportEmail}
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted-ink)]">
            PocketPages marketing website
          </p>
        </div>
      </div>
    </footer>
  );
}
