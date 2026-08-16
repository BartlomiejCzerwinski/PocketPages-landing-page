import Link from "next/link";
import {
  getDeleteAccountMailto,
  getSupportEmailHref,
  PLAY_SUBSCRIPTIONS_URL,
  siteConfig,
} from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Delete your ${siteConfig.appName} account`,
  description:
    "Request deletion of your PocketPages account and associated data by email.",
  path: "/delete-account/",
});

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Account deletion</span>
        <h1 className="section-title mt-5 font-sans font-bold">
          Delete your PocketPages account
        </h1>
      </section>

      <div className="rounded-[2rem] border border-[color:var(--gold)] bg-[color:rgba(188,150,90,0.12)] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]">
          Important subscription warning
        </p>
        <p className="mt-3 text-base leading-7 text-[color:var(--muted-ink)]">
          Deleting your PocketPages account does not automatically cancel an
          active Google Play subscription. Cancel it separately in Google Play
          before deleting your account.
        </p>
        <Link
          href={PLAY_SUBSCRIPTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
        >
          Manage Google Play subscriptions
        </Link>
      </div>

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <p className="text-lg leading-8 text-[color:var(--muted-ink)]">
          To request deletion of your PocketPages account and associated data,
          email{" "}
          <a
            href={getSupportEmailHref()}
            className="font-semibold text-[var(--gold-strong)] underline underline-offset-4"
          >
            {siteConfig.supportEmail}
          </a>{" "}
          from the email address connected to your account.
        </p>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          Use the subject:{" "}
          <strong className="text-[var(--ink)]">
            Delete my PocketPages account
          </strong>
          .
        </p>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          We may contact you to verify ownership of the account.
        </p>
        <a
          href={getDeleteAccountMailto()}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_14px_40px_rgba(188,150,90,0.22)] transition hover:bg-[var(--gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
        >
          Request account deletion
        </a>
      </section>
    </div>
  );
}
