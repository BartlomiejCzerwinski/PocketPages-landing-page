import Link from "next/link";
import { VerificationNotice } from "@/components/verification-notice";
import { PLAY_SUBSCRIPTIONS_URL, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Privacy Policy | ${siteConfig.appName}`,
  description:
    "Read how PocketPages handles account data, scanned page images, extracted text, subscriptions, and service providers.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title mt-5 font-sans font-bold">
          Privacy Policy
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
          This Privacy Policy explains how PocketPages processes information
          when you use the Android app and related support channels. Effective
          date placeholder:{" "}
          <strong className="text-[var(--ink)]">
            {siteConfig.privacyEffectiveDate}
          </strong>
          .
        </p>
      </section>

      <VerificationNotice />

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <div className="prose-legal max-w-none">
          <h2>1. Who operates PocketPages</h2>
          <p>
            PocketPages is operated by{" "}
            <strong>{siteConfig.developerLegalName}</strong>, doing business as{" "}
            <strong>{siteConfig.developerDisplayName}</strong> if applicable.
            The exact operator name still needs owner confirmation before this
            policy is published.
          </p>

          <h2>2. Contact details</h2>
          <p>
            For privacy questions, support requests, or account deletion
            requests, contact <strong>{siteConfig.supportEmail}</strong>. The
            production support email still requires confirmation.
          </p>

          <h2>3. Data PocketPages may collect</h2>
          <p>
            Depending on how you use the service, PocketPages may collect and
            process the following categories of information:
          </p>
          <ul>
            <li>Google account display name.</li>
            <li>Email address.</li>
            <li>Firebase user identifier.</li>
            <li>Document titles.</li>
            <li>Extracted text and document content.</li>
            <li>Document language and reading progress.</li>
            <li>Monthly usage and plan information.</li>
            <li>Scanned page images submitted for processing.</li>
            <li>
              Subscription status and purchase history processed through Google
              Play and RevenueCat.
            </li>
          </ul>
          <p>
            The repository supplied for this website does not include the
            Android application source or SDK configuration, so this draft does
            not confirm whether the production app also collects optional IP
            addresses, device metadata, installation identifiers, diagnostics,
            or crash information beyond what the listed providers process as
            part of normal service operation. If such data is collected in
            production, this policy should be updated before publication.
          </p>

          <h2>4. How PocketPages uses data</h2>
          <ul>
            <li>Authentication and account management.</li>
            <li>Text extraction and document processing.</li>
            <li>Library synchronization across devices.</li>
            <li>Subscription and usage-limit management.</li>
            <li>
              Security, abuse prevention, troubleshooting, and legal
              compliance.
            </li>
          </ul>

          <h2>5. Service providers</h2>
          <p>
            PocketPages relies on third-party providers to deliver the service,
            including:
          </p>
          <ul>
            <li>
              <strong>Google / Firebase</strong> for authentication, Firestore,
              Cloud Functions, and potentially temporary Cloud Storage.
            </li>
            <li>
              <strong>Google Play Billing</strong> for Android subscription
              purchases and subscription management.
            </li>
            <li>
              <strong>RevenueCat</strong> for subscription status management.
            </li>
            <li>
              <strong>OpenAI API</strong> for text extraction and formatting.
            </li>
          </ul>
          <p>
            If additional providers are used in the production Android app or
            backend, they should be added here before publication.
          </p>

          <h2>6. OpenAI API processing</h2>
          <p>
            Page images and related extracted content submitted for text
            extraction may be sent to the OpenAI API. OpenAI states that API
            inputs and outputs are not used to train OpenAI models by default,
            while standard API monitoring and abuse-prevention logs may retain
            content for up to 30 days unless different retention controls apply.
          </p>

          <h2>7. Retention</h2>
          <p>
            PocketPages may keep account and document data until deletion or as
            otherwise needed to provide the service. Extracted documents remain
            associated with your account so you can keep reading across devices.
          </p>
          <p>
            PocketPages does not keep source page images in your library after
            processing. This website draft does not confirm the exact lifecycle
            of any temporary processing copies in production infrastructure, so
            that workflow still needs owner confirmation.
          </p>
          <p>
            Provider processing logs may remain for their documented retention
            periods. Limited billing, fraud-prevention, security, or legal
            records may also be retained where required or reasonably necessary.
          </p>

          <h2>8. Account and data deletion</h2>
          <p>
            You can review deletion options on the{" "}
            <Link href="/delete-account/" className="underline underline-offset-4">
              Delete Account
            </Link>{" "}
            page. PocketPages intends to delete account profile data, stored
            documents, extracted text, titles, language, reading progress, and
            related usage information when an account deletion request is
            completed, subject to any required retention.
          </p>
          <p>
            This website draft does not confirm whether account deletion also
            removes linked RevenueCat customer data or any temporary
            provider-side processing copies. Those implementation details should
            be verified before publication.
          </p>

          <h2>9. Security</h2>
          <p>
            PocketPages uses service providers that support encryption in
            transit. No website or app can guarantee absolute security, and this
            policy does not claim end-to-end encryption, zero retention, or
            anonymous use.
          </p>

          <h2>10. International processing</h2>
          <p>
            PocketPages and its service providers may process data in countries
            other than your own. The specific safeguards that apply depend on
            the providers actually configured in production and the laws that
            apply to the operator. This draft does not claim any particular
            certification or transfer mechanism that has not been confirmed.
          </p>

          <h2>11. Your rights</h2>
          <p>
            Depending on where you live, you may have rights to request access
            to, correction of, deletion of, restriction of, objection to, or
            portability of your personal information. To make a request, contact{" "}
            <strong>{siteConfig.supportEmail}</strong>.
          </p>

          <h2>12. Children&apos;s privacy</h2>
          <p>
            PocketPages is not directed to children below the minimum age
            required by the final Terms of Service and applicable law. The exact
            minimum age still needs owner confirmation.
          </p>

          <h2>13. Changes to this policy</h2>
          <p>
            PocketPages may update this Privacy Policy when the service, legal
            requirements, or provider relationships change. The updated version
            should include a revised effective date.
          </p>

          <h2>14. Additional points</h2>
          <ul>
            <li>PocketPages does not sell personal data.</li>
            <li>PocketPages does not use advertising trackers or ad pixels.</li>
            <li>
              PocketPages does not sell books or provide a catalogue of reading
              content.
            </li>
          </ul>

          <h2>15. Contact information</h2>
          <p>
            Email: <strong>{siteConfig.supportEmail}</strong>
          </p>
          <p>
            Subscription management:{" "}
            <Link
              href={PLAY_SUBSCRIPTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google Play subscriptions
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
