import Link from "next/link";
import { VerificationNotice } from "@/components/verification-notice";
import { PLAY_SUBSCRIPTIONS_URL, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Terms of Service | ${siteConfig.appName}`,
  description:
    "Review the Terms of Service for PocketPages, including subscriptions, acceptable use, account deletion, and AI extraction disclaimers.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title mt-5 font-sans font-bold">
          Terms of Service
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          These Terms of Service govern your use of PocketPages. Effective date
          placeholder:{" "}
          <strong className="text-[var(--ink)]">
            {siteConfig.termsEffectiveDate}
          </strong>
          .
        </p>
      </section>

      <VerificationNotice />

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <div className="prose-legal max-w-none">
          <h2>1. Acceptance of the terms</h2>
          <p>
            By accessing or using PocketPages, you agree to these Terms of
            Service and any additional policies that apply to the service,
            including the Privacy Policy.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least <strong>{siteConfig.minimumAge}</strong> years
            old, or the age of digital consent or contractual capacity in your
            jurisdiction if higher, to use PocketPages. The final minimum-age
            requirement still needs owner confirmation.
          </p>

          <h2>3. Description of the service</h2>
          <p>
            PocketPages is an Android application that lets users scan selected
            pages from physical books or import page images, convert those pages
            into readable text using AI-assisted extraction, and read the
            resulting content in a focused mobile interface.
          </p>
          <p>
            PocketPages does not sell books, provide a book catalogue, or grant
            users any ownership rights in the underlying books or source
            material they choose to scan.
          </p>

          <h2>4. Google account requirements</h2>
          <p>
            PocketPages may require a Google account sign-in to create and
            manage an account. You are responsible for maintaining accurate
            account information and for securing access to your Google account
            and device.
          </p>

          <h2>5. Free and paid functionality</h2>
          <p>
            PocketPages may offer both free and paid functionality, including
            subscriptions, usage limits, or feature restrictions. The exact
            plans, limits, and pricing should be confirmed in the app and the
            Google Play listing.
          </p>

          <h2>6. Google Play subscriptions and RevenueCat</h2>
          <p>
            Paid subscriptions are processed through Google Play Billing.
            RevenueCat may be used to manage subscription status and entitlement
            synchronization.
          </p>
          <p>
            Subscriptions may renew automatically unless cancelled through
            Google Play before the renewal date. Cancellation and refund rules
            are governed by Google Play&apos;s policies and your local law where
            applicable.
          </p>
          <p>
            Manage subscriptions here:{" "}
            <Link
              href={PLAY_SUBSCRIPTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google Play subscriptions
            </Link>
            .
          </p>

          <h2>7. User-provided content and permissions</h2>
          <p>
            You retain your rights in the page images, text, and other content
            you submit, subject to any third-party rights that may apply to the
            underlying material.
          </p>
          <p>
            You grant PocketPages and its service providers a limited,
            non-exclusive, revocable license to host, transmit, analyze,
            process, transform, and store submitted content solely as needed to
            operate, secure, maintain, and improve the service features you
            request.
          </p>

          <h2>8. Lawful use and copyright responsibility</h2>
          <p>
            You are responsible for scanning only pages and materials that you
            own, lawfully possess, or are otherwise legally authorized to use.
            You must not use PocketPages to infringe copyright, violate license
            terms, or reproduce or distribute material unlawfully.
          </p>
          <p>
            PocketPages does not acquire ownership of the books, page images, or
            extracted content that you submit.
          </p>

          <h2>9. Prohibited uses</h2>
          <ul>
            <li>Unlawful copying, redistribution, or infringement.</li>
            <li>Abuse, fraud, automated misuse, or security interference.</li>
            <li>Uploading malicious code or content intended to harm others.</li>
            <li>Attempting to gain unauthorized access to the service.</li>
            <li>
              Using PocketPages in a way that violates applicable laws or third
              party rights.
            </li>
          </ul>

          <h2>10. AI and OCR accuracy disclaimer</h2>
          <p>
            PocketPages uses AI-assisted extraction and formatting. Extracted
            text may contain errors, omissions, formatting changes, or
            misreadings. PocketPages does not guarantee that extracted text is
            complete, error-free, or suitable for legal, academic, medical, or
            other high-stakes use without review against the original source.
          </p>

          <h2>11. Service availability and modifications</h2>
          <p>
            PocketPages may change, suspend, or discontinue features from time
            to time, including usage limits, subscription offerings, or backend
            services. PocketPages does not guarantee uninterrupted availability.
          </p>

          <h2>12. Suspension and termination</h2>
          <p>
            PocketPages may suspend or terminate accounts that violate these
            terms, pose security or legal risks, or abuse the service. Where
            reasonable, PocketPages may provide notice before taking action.
          </p>

          <h2>13. Account deletion</h2>
          <p>
            You can request deletion of your account through the in-app flow or
            by using the instructions on the{" "}
            <Link href="/delete-account/" className="underline underline-offset-4">
              Delete Account
            </Link>{" "}
            page. Deleting your PocketPages account does not automatically
            cancel an active Google Play subscription.
          </p>

          <h2>14. PocketPages intellectual property</h2>
          <p>
            PocketPages, including its app design, branding, website content,
            and software components owned by the operator, remains the
            intellectual property of PocketPages and its licensors.
          </p>

          <h2>15. Warranty disclaimer</h2>
          <p>
            PocketPages is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis to the maximum extent permitted by applicable
            law. No guarantee is made that the service will be uninterrupted,
            secure, or error-free.
          </p>

          <h2>16. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, PocketPages and
            its operator will not be liable for indirect, incidental, special,
            consequential, or punitive damages, or for loss of data, profits,
            or business opportunities arising from your use of the service.
          </p>
          <p>
            Nothing in these Terms excludes liability that cannot lawfully be
            excluded.
          </p>

          <h2>17. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the laws of{" "}
            <strong>{siteConfig.governingLaw}</strong>. The final governing-law
            and jurisdiction language still requires owner confirmation and
            review by counsel where needed.
          </p>

          <h2>18. Changes to the terms</h2>
          <p>
            PocketPages may update these Terms of Service from time to time. If
            the terms change materially, the revised version should be published
            with an updated effective date.
          </p>

          <h2>19. Contact details</h2>
          <p>
            For support or legal questions, contact{" "}
            <strong>{siteConfig.supportEmail}</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
