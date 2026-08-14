import Link from "next/link";
import { VerificationNotice } from "@/components/verification-notice";
import {
  getSupportEmailHref,
  PLAY_SUBSCRIPTIONS_URL,
  siteConfig,
} from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Support | ${siteConfig.appName}`,
  description:
    "PocketPages support help for scanning, imports, extraction issues, subscriptions, and account deletion.",
  path: "/support/",
});

type SupportTopic = {
  title: string;
  body: string;
  href?: string;
  hrefLabel?: string;
};

const supportTopics: ReadonlyArray<SupportTopic> = [
  {
    title: "How to scan a page",
    body: "Open the scan flow in PocketPages, align the page within the frame, and capture the specific pages you want to read. Keep the page well lit and steady for better extraction results.",
  },
  {
    title: "How to import an image",
    body: "If you already have a page image on your device, use the import option in the scan flow to choose it from your gallery instead of capturing it live.",
  },
  {
    title: "What to do when text extraction fails",
    body: "Check whether the page is sharply focused, fully visible, and evenly lit. Dense layouts, decorative typography, damaged pages, or unusual page curvature can reduce accuracy.",
  },
  {
    title: "How to retry a failed scan",
    body: "Return to the scan flow, recapture the page or import a clearer image, and submit the page again. If the problem continues, contact support with a description of the issue rather than sending sensitive account data.",
  },
  {
    title: "How to restore purchases",
    body: "Use the restore or account refresh flow provided inside the app so PocketPages can re-check your Google Play subscription status through RevenueCat.",
  },
  {
    title: "How to manage or cancel a subscription",
    body: "Subscriptions are handled by Google Play. Use the Google Play subscriptions page to review, change, or cancel your plan.",
    href: PLAY_SUBSCRIPTIONS_URL,
    hrefLabel: "Manage subscriptions in Google Play",
  },
  {
    title: "How to delete an account",
    body: "Use the dedicated delete-account page for both in-app deletion guidance and the email request option that works without the app.",
    href: "/delete-account/",
    hrefLabel: "Open Delete Account",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Support</span>
        <h1 className="section-title mt-5 font-sans font-bold">Support hub</h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          Need help with scanning, extraction, subscriptions, or account
          deletion? Start here.
        </p>
      </section>

      <VerificationNotice />

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          Contact support
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted-ink)]">
          Support email:{" "}
          <a
            href={getSupportEmailHref()}
            className="font-semibold text-[var(--gold-strong)] underline underline-offset-4"
          >
            {siteConfig.supportEmail}
          </a>
        </p>
        <p className="mt-2 text-sm leading-7 text-[color:var(--muted-ink)]">
          When contacting support, include your PocketPages account email where
          relevant and describe the issue clearly. Do not send passwords,
          payment-card data, or Google authentication codes.
        </p>
      </section>

      <section className="grid gap-6">
        {supportTopics.map((topic) => (
          <article key={topic.title} className="editorial-card rounded-[2rem] p-8">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
              {topic.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted-ink)]">
              {topic.body}
            </p>
            {topic.href ? (
              <Link
                href={topic.href}
                target={topic.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  topic.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-4 inline-flex text-sm font-semibold text-[var(--gold-strong)] underline underline-offset-4"
              >
                {topic.hrefLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          Legal links
        </h2>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            href="/privacy/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            Terms of Service
          </Link>
          <Link
            href="/delete-account/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            Delete Account
          </Link>
        </div>
      </section>
    </div>
  );
}
