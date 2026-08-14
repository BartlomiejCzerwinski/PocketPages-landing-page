import Link from "next/link";
import { VerificationNotice } from "@/components/verification-notice";
import {
  getDeleteAccountMailto,
  PLAY_SUBSCRIPTIONS_URL,
  siteConfig,
} from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Delete your ${siteConfig.appName} account`,
  description:
    "Review in-app and email-based PocketPages account deletion options, plus important subscription and retention information.",
  path: "/delete-account/",
});

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Account deletion</span>
        <h1 className="section-title mt-5 font-sans font-bold">
          Delete your PocketPages account
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          This page is intended to be usable directly from the Play Console
          deletion URL. It includes both an in-app deletion path and an
          email-based request option that works without JavaScript.
        </p>
      </section>

      <div className="rounded-[2rem] border border-[color:var(--gold)] bg-[color:rgba(188,150,90,0.12)] p-6">
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

      <VerificationNotice />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="editorial-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
            Option 1
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">
            Delete inside the app
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted-ink)]">
            Open PocketPages and go to{" "}
            <strong className="text-[var(--ink)]">
              Settings → Account → Delete account
            </strong>
            . Review the information shown and confirm deletion.
          </p>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted-ink)]">
            This exact in-app path is still a placeholder because the Android
            source code was not present in the repository provided for this
            website. Confirm the live in-app wording before submitting this URL
            to Google Play.
          </p>
        </article>

        <article className="editorial-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
            Option 2
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">
            Request deletion without the app
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted-ink)]">
            If you cannot access the app, you can request deletion by email.
          </p>
          <a
            href={getDeleteAccountMailto()}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_14px_40px_rgba(188,150,90,0.22)] transition hover:bg-[var(--gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            Request account deletion
          </a>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted-ink)]">
            Subject: <strong>PocketPages account deletion request</strong>
          </p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted-ink)]">
            Please provide the Google email associated with your PocketPages
            account. Send the request from that email address where possible.
          </p>
        </article>
      </section>

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          What to include, and what not to send
        </h2>
        <ul className="mt-6 space-y-3 text-base leading-7 text-[color:var(--muted-ink)]">
          <li>
            Include the Google email associated with your PocketPages account.
          </li>
          <li>Do not send your password.</li>
          <li>Do not send book scans or page images by email.</li>
          <li>Do not send payment-card information.</li>
          <li>Do not send Google authentication codes.</li>
          <li>
            Additional verification may be requested to protect the account.
          </li>
          <li>
            Requests will be handled within{" "}
            <strong className="text-[var(--ink)]">
              {siteConfig.accountDeletionResponseTime}
            </strong>
            .
          </li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="editorial-card rounded-[2rem] p-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
            Data intended to be deleted
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-[color:var(--muted-ink)]">
            <li>PocketPages account and profile data.</li>
            <li>Stored documents and extracted text.</li>
            <li>Document titles, language, and reading progress.</li>
            <li>Usage and plan data.</li>
            <li>
              PocketPages-managed temporary source images, where still present.
            </li>
            <li>
              Associated RevenueCat customer data if the production deletion
              implementation removes it.
            </li>
          </ul>
        </article>
        <article className="editorial-card rounded-[2rem] p-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
            Data that may still be retained
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-[color:var(--muted-ink)]">
            <li>
              Records required for legal, tax, fraud-prevention, billing,
              dispute, or security purposes.
            </li>
            <li>Data independently retained by Google Play.</li>
            <li>
              Temporary provider safety logs that expire under provider
              retention policies.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
