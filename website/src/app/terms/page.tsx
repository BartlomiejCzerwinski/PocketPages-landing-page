import Link from "next/link";
import { PLAY_SUBSCRIPTIONS_URL, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `Terms of Service | ${siteConfig.appName}`,
  description:
    "Review the Terms of Service for PocketPages, including subscriptions, usage limits, acceptable use, account deletion, and AI extraction disclaimers.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title mt-5 font-sans font-bold">
          Terms of Service for PocketPages
        </h1>
        <p className="mt-5 text-base leading-8 text-[color:var(--muted-ink)]">
          <strong className="text-[var(--ink)]">Effective date:</strong>{" "}
          {siteConfig.termsEffectiveDate}
          <br />
          <strong className="text-[var(--ink)]">Last updated:</strong>{" "}
          {siteConfig.termsEffectiveDate}
          <br />
          <strong className="text-[var(--ink)]">Document revision:</strong>{" "}
          {siteConfig.legalDocumentRevision}
        </p>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-ink)]">
          These Terms of Service (the{" "}
          <strong className="text-[var(--ink)]">“Terms”</strong>) govern your
          access to and use of the PocketPages Android application and related
          services (collectively, the{" "}
          <strong className="text-[var(--ink)]">“Service”</strong>).
        </p>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-ink)]">
          PocketPages is operated by{" "}
          <strong className="text-[var(--ink)]">
            {siteConfig.developerLegalName}
          </strong>
          , an individual based in Poland (referred to as{" "}
          <strong className="text-[var(--ink)]">
            “PocketPages,” “we,” “us,”
          </strong>{" "}
          or <strong className="text-[var(--ink)]">“our”</strong>).
        </p>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-ink)]">
          Contact:{" "}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-[var(--gold-strong)] underline underline-offset-4"
          >
            {siteConfig.supportEmail}
          </a>
        </p>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-ink)]">
          Please read these Terms carefully before using the Service.
        </p>
      </section>

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <div className="prose-legal max-w-none">
          <h2>1. Acceptance of these Terms</h2>
          <p>
            By creating a PocketPages account, accessing or using the Service,
            or otherwise indicating your acceptance, you agree to these Terms
            and acknowledge the{" "}
            <Link href="/privacy/" className="underline underline-offset-4">
              PocketPages Privacy Policy
            </Link>
            .
          </p>
          <p>
            If you do not agree to these Terms, do not create an account or use
            the Service.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least {siteConfig.minimumAge} years old, or meet any
            higher minimum age required in your country, to use PocketPages.
          </p>
          <p>
            If you have not reached the age at which you may enter into a
            binding agreement in your country, you may use PocketPages only with
            the involvement and permission of a parent or legal guardian. The
            parent or guardian is responsible for supervising the minor’s use of
            the Service.
          </p>
          <p>
            You may not use the Service if applicable law prohibits you from
            doing so.
          </p>

          <h2>3. The PocketPages Service</h2>
          <p>
            PocketPages allows users to photograph or select images of printed
            pages, process those images using automated text-extraction
            technology, store the extracted text in a private document library,
            and read it in the App.
          </p>
          <p>
            PocketPages is a technical tool. It does not provide books,
            publications, or other source material, and it does not grant you
            any rights to third-party content that you scan or process.
          </p>
          <p>
            Features may vary by device, operating system, country, App version,
            subscription plan, or technical availability.
          </p>

          <h2>4. Your account</h2>
          <p>
            PocketPages currently uses Google Sign-In to create and authenticate
            accounts. You are responsible for:
          </p>
          <ul>
            <li>maintaining the security of your Google account and device;</li>
            <li>
              ensuring that the information associated with your account is
              accurate;
            </li>
            <li>
              all activity performed through your PocketPages account; and
            </li>
            <li>
              notifying us promptly if you believe your account has been
              accessed without authorization.
            </li>
          </ul>
          <p>
            You may not sell, transfer, lend, or share your PocketPages account
            with another person.
          </p>
          <p>
            You may not create multiple accounts, repeatedly delete and recreate
            accounts, manipulate purchase restoration, or use any other method
            to circumvent free usage quotas, subscription limits, eligibility
            requirements, or technical restrictions.
          </p>

          <h2>5. Usage limits</h2>
          <p>
            PocketPages may offer free and paid usage tiers. The limits
            displayed in the App or on the applicable purchase screen form part
            of these Terms.
          </p>
          <p>As of the effective date:</p>
          <ul>
            <li>
              the Free plan includes up to{" "}
              <strong>{siteConfig.freePlanMonthlyPages} processed pages</strong>{" "}
              per monthly usage period;
            </li>
            <li>
              the Pro plan includes up to{" "}
              <strong>{siteConfig.proPlanMonthlyPages} processed pages</strong>{" "}
              per monthly usage period; and
            </li>
            <li>
              a single document may contain no more than{" "}
              <strong>{siteConfig.maxPagesPerDocument} page images</strong>.
            </li>
          </ul>
          <p>
            For an annual Pro subscription, the{" "}
            {siteConfig.proPlanMonthlyPages}-page allowance resets monthly. An
            annual subscription does not provide the entire annual total in
            advance. Unused pages do not roll over into a later period unless
            PocketPages expressly states otherwise.
          </p>
          <p>
            Processing attempts that fail and do not return usable extracted
            text are not intended to count against your usage allowance. We may
            correct usage records where a technical error, fraud, or abuse is
            detected.
          </p>
          <p>
            We may change future usage limits for legitimate operational,
            security, cost, or product reasons. Material reductions affecting an
            active paid subscription will be communicated in advance where
            required by law. Changes will not affect rights already acquired
            under mandatory consumer law.
          </p>

          <h2>6. Subscriptions and purchases</h2>
          <p>
            Paid features are offered through auto-renewing subscriptions
            purchased through Google Play and managed technically with
            RevenueCat.
          </p>
          <p>
            Before purchase, the App and Google Play purchase interface display
            the applicable price, currency, billing period, trial or promotional
            conditions, renewal terms, and included benefits. The price shown in
            the Google Play purchase interface at the time you confirm the
            transaction is the price that applies to that purchase, subject to
            applicable taxes and Google Play terms.
          </p>
          <p>
            Depending on availability, PocketPages may offer monthly or annual
            subscriptions. Unless cancelled, an auto-renewing subscription
            renews automatically at the end of each billing period and Google
            Play charges the payment method connected with your Google account.
          </p>
          <p>
            Promotions, introductory prices, and free trials may be limited to
            eligible users and may be subject to additional conditions shown
            before purchase. When a trial or introductory period ends, the
            subscription may automatically renew at the then-disclosed regular
            price unless cancelled before renewal.
          </p>

          <h2>7. Managing and cancelling subscriptions</h2>
          <p>
            You can manage or cancel your subscription through the subscription
            settings in Google Play. Cancellation takes effect according to the
            terms displayed by Google Play, and you normally retain access to
            paid features until the end of the already-paid billing period.
          </p>
          <p>
            Deleting the PocketPages App or deleting your PocketPages account
            does <strong>not</strong> automatically cancel an active Google Play
            subscription. You should cancel the subscription separately through
            Google Play before deleting your account.
          </p>
          <p>
            PocketPages may provide a link from the App to the relevant Google
            Play subscription-management screen for convenience. You can also
            manage subscriptions here:{" "}
            <a
              href={PLAY_SUBSCRIPTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google Play subscriptions
            </a>
            .
          </p>

          <h2>8. Refunds and consumer withdrawal rights</h2>
          <p>
            Payments and purchase processing are handled by Google Play. Refund
            eligibility and procedures may be governed by Google Play’s
            policies, these Terms, and mandatory law applicable to you.
          </p>
          <p>
            Except where required by applicable law or expressly approved by
            Google Play or PocketPages, cancelling a subscription does not
            retroactively refund charges already paid.
          </p>
          <p>
            If you are a consumer, you may have statutory rights concerning
            refunds, conformity of digital services, withdrawal from a distance
            contract, or remedies for defective performance. Nothing in these
            Terms excludes or limits rights that cannot lawfully be excluded. To
            request assistance, contact Google Play or email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>

          <h2>9. User Content</h2>
          <p>
            <strong>“User Content”</strong> means page images, extracted text,
            document titles, and other material that you upload, create, store,
            or process through PocketPages.
          </p>
          <p>
            As between you and PocketPages, you retain any rights you hold in
            your User Content. PocketPages does not claim ownership of your User
            Content. Processing content through PocketPages does not transfer
            copyright or any other intellectual-property right in the source
            material to you.
          </p>
          <p>
            You are solely responsible for your User Content and for ensuring
            that you are legally permitted to capture, upload, process, store,
            and use it.
          </p>

          <h2>10. Copyright and lawful scanning</h2>
          <p>
            You may use PocketPages to scan or process content only where:
          </p>
          <ul>
            <li>you own the necessary rights;</li>
            <li>
              you have received permission from the relevant rights holder; or
            </li>
            <li>
              your use is otherwise permitted by applicable law, including an
              applicable private-use, quotation, accessibility, educational,
              public-domain, or other copyright exception.
            </li>
          </ul>
          <p>
            Where you rely on a copyright exception, you are responsible for
            ensuring that your use remains within its legal scope. The
            availability and scope of exceptions differ between countries.
          </p>
          <p>You may not use PocketPages to:</p>
          <ul>
            <li>
              reproduce, publish, distribute, sell, license, publicly display,
              or share copyrighted content without authorization or another
              valid legal basis;
            </li>
            <li>
              create or operate a library of unlawfully copied books or other
              publications;
            </li>
            <li>
              process content obtained from a pirated or otherwise unlawful
              source;
            </li>
            <li>
              remove copyright notices or rights-management information for an
              unlawful purpose;
            </li>
            <li>
              bypass digital rights management, access controls, or other
              technological protection measures; or
            </li>
            <li>
              assist another person in infringing intellectual-property rights.
            </li>
          </ul>
          <p>
            PocketPages is designed for private text extraction and reading. It
            does not provide public sharing, public search, or a marketplace for
            User Content.
          </p>

          <h2>11. Limited license to process User Content</h2>
          <p>
            To provide the Service, you grant PocketPages a limited,
            non-exclusive, worldwide, royalty-free license to host, copy,
            transmit, reproduce, format, transform, and otherwise technically
            process your User Content solely as necessary to:
          </p>
          <ul>
            <li>perform text extraction and return the result to you;</li>
            <li>store and synchronize your private document library;</li>
            <li>maintain, secure, troubleshoot, and support the Service;</li>
            <li>enforce these Terms and prevent fraud or abuse; and</li>
            <li>comply with applicable law.</li>
          </ul>
          <p>
            This license includes the right to allow our contracted service
            providers, including Firebase and OpenAI, to process User Content on
            our behalf solely for these purposes.
          </p>
          <p>
            The license ends when the relevant User Content is deleted or your
            account is deleted, except to the limited extent that temporary
            copies remain in technical backups, provider security logs, or
            records we are legally required or permitted to retain. Retention
            and deletion are described in the{" "}
            <Link href="/privacy/" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>

          <h2>12. Prohibited conduct</h2>
          <p>You must not:</p>
          <ul>
            <li>
              use the Service for an illegal, fraudulent, deceptive, harmful, or
              abusive purpose;
            </li>
            <li>
              upload material that infringes intellectual-property, privacy,
              confidentiality, publicity, or other rights;
            </li>
            <li>
              upload another person’s sensitive personal information without an
              appropriate legal basis;
            </li>
            <li>
              attempt to gain unauthorized access to accounts, systems, APIs,
              quotas, or data;
            </li>
            <li>
              reverse engineer, decompile, modify, or create derivative works
              from the App except where applicable law expressly permits it;
            </li>
            <li>
              interfere with the Service, introduce malicious code, overload
              infrastructure, automate abusive requests, or bypass security
              controls;
            </li>
            <li>
              resell, sublicense, rent, or commercially exploit access to the
              Service without our written permission;
            </li>
            <li>
              use automated means to scrape or extract data from PocketPages
              outside the features we provide;
            </li>
            <li>misrepresent your identity or affiliation; or</li>
            <li>
              use PocketPages in a way that violates the acceptable-use
              requirements of our service providers.
            </li>
          </ul>

          <h2>13. Privacy</h2>
          <p>
            Our collection and use of personal data are described in the{" "}
            <Link href="/privacy/" className="underline underline-offset-4">
              PocketPages Privacy Policy
            </Link>
            .
          </p>

          <h2>14. Automated and AI-assisted processing</h2>
          <p>
            PocketPages uses automated systems, including the OpenAI API, to
            extract text from page images. Automated output may contain errors,
            omissions, formatting problems, invented characters, or other
            inaccuracies.
          </p>
          <p>
            You should compare important extracted text with the original
            source. Do not rely on PocketPages as the sole source for medical,
            legal, financial, safety-critical, academic-integrity, or other
            high-impact decisions.
          </p>
          <p>
            PocketPages does not guarantee that every image will be processed
            successfully or that extracted text will be complete, accurate, or
            suitable for a particular purpose.
          </p>
          <p>
            PocketPages does not use automated processing to make decisions that
            produce legal or similarly significant effects concerning you.
          </p>

          <h2>15. Third-party services</h2>
          <p>
            The Service depends on third-party services, including Google
            Sign-In, Firebase, Google Play, RevenueCat, and OpenAI. Those
            services may be subject to separate terms and privacy policies
            between you and the relevant provider.
          </p>
          <p>
            We are not responsible for third-party services outside our
            reasonable control. Changes, outages, restrictions, or termination
            of a third-party service may affect PocketPages features.
          </p>
          <p>
            Your use of Google Play, including purchases, payment methods,
            subscription management, and certain refund requests, is also
            governed by Google Play’s applicable terms.
          </p>

          <h2>16. PocketPages intellectual property</h2>
          <p>
            PocketPages and its licensors retain all rights in the App and
            Service, including the software, design, branding, logos, interface,
            documentation, and original content provided by PocketPages.
          </p>
          <p>
            Subject to these Terms, we grant you a limited, personal, revocable,
            non-exclusive, non-transferable, and non-sublicensable license to
            install and use the App on compatible devices for your personal use.
          </p>
          <p>
            No rights are granted except those expressly stated in these Terms.
          </p>

          <h2>17. Copyright complaints</h2>
          <p>
            If you believe that content processed through PocketPages or conduct
            involving the Service infringes your copyright or other
            intellectual-property rights, contact{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>{" "}
            and provide:
          </p>
          <ul>
            <li>your name and contact details;</li>
            <li>identification of the protected work or right;</li>
            <li>a description of the alleged infringement;</li>
            <li>
              information reasonably sufficient for us to investigate; and
            </li>
            <li>
              a statement that the information supplied is accurate and that you
              are the rights holder or authorized to act for the rights holder.
            </li>
          </ul>
          <p>
            We may request additional information, restrict access, remove
            relevant content, or suspend an account while investigating a
            credible complaint.
          </p>

          <h2>18. Service availability and changes</h2>
          <p>
            We aim to keep PocketPages available and reliable, but the Service
            may occasionally be unavailable because of maintenance, failures,
            security incidents, capacity limits, provider outages, or
            circumstances outside our reasonable control.
          </p>
          <p>
            We may add, modify, suspend, or discontinue features for legitimate
            product, security, legal, technical, or operational reasons. Where a
            change materially and negatively affects an active paid
            subscription, we will provide notice and any remedy required by
            applicable law.
          </p>
          <p>
            PocketPages is not intended to be your only archival copy of
            important information. You are responsible for keeping the original
            source material or another backup of information that you cannot
            afford to lose.
          </p>

          <h2>19. Suspension and termination</h2>
          <p>
            You may stop using PocketPages at any time. You may delete your
            account using the in-App account-deletion option or the procedure
            described at{" "}
            <Link
              href="/delete-account/"
              className="underline underline-offset-4"
            >
              Delete your PocketPages account
            </Link>
            .
          </p>
          <p>
            We may restrict, suspend, or terminate access where reasonably
            necessary because:
          </p>
          <ul>
            <li>you materially or repeatedly violate these Terms;</li>
            <li>
              your account or activity creates a security, fraud, legal, or
              operational risk;
            </li>
            <li>
              you infringe or repeatedly appear to infringe third-party rights;
            </li>
            <li>payment is reversed, fraudulent, or cannot be validated;</li>
            <li>we are required to do so by law or a service provider; or</li>
            <li>
              continuing to provide the Service is no longer reasonably
              possible.
            </li>
          </ul>
          <p>
            Where appropriate and legally required, we will provide notice and
            an opportunity to correct the issue before termination. Immediate
            action may be taken where necessary to prevent harm, fraud, security
            incidents, legal violations, or misuse.
          </p>
          <p>
            Termination of your PocketPages account does not automatically
            cancel a Google Play subscription. Sections that by their nature
            should survive termination, including provisions concerning
            intellectual property, payment obligations, disclaimers, liability,
            disputes, and lawful retention, will continue to apply.
          </p>

          <h2>20. No professional advice</h2>
          <p>
            PocketPages provides text-extraction and reading tools only. It does
            not provide legal, medical, financial, educational, or other
            professional advice. Extracted text should not be treated as
            verified professional guidance.
          </p>

          <h2>21. Warranties and statutory rights</h2>
          <p>
            We provide the Service using reasonable care and skill. However,
            except for warranties or rights that cannot be excluded under
            applicable law, PocketPages is provided on an{" "}
            <strong>“as available”</strong> basis, and we do not promise
            uninterrupted operation, compatibility with every device, successful
            processing of every page, or error-free extracted text.
          </p>
          <p>
            Nothing in these Terms limits mandatory warranties, conformity
            rights, or remedies available to consumers under applicable law.
          </p>

          <h2>22. Limitation of liability</h2>
          <p>
            Nothing in these Terms excludes or limits liability where doing so
            would be unlawful, including liability for intentional misconduct,
            fraud, gross negligence, death or personal injury caused by
            negligence where applicable, or mandatory consumer-protection
            obligations.
          </p>
          <p>
            To the maximum extent permitted by law, PocketPages is not liable
            for indirect or consequential losses that were not reasonably
            foreseeable when you accepted these Terms, or for losses caused by:
          </p>
          <ul>
            <li>your unlawful or unauthorized use of source material;</li>
            <li>
              inaccurate extracted text that you failed to verify against the
              original where verification was reasonably possible;
            </li>
            <li>
              loss of access caused by your device, Google account, network, or
              a third-party service outside our reasonable control;
            </li>
            <li>
              your failure to keep an appropriate backup of important
              information; or
            </li>
            <li>your violation of these Terms.</li>
          </ul>
          <p>
            For users acting for business purposes, and only to the extent
            permitted by law, PocketPages’ aggregate liability arising from the
            Service during any 12-month period will not exceed the amount that
            the business user paid to PocketPages for the Service during that
            period.
          </p>
          <p>
            The limitations in this section do not reduce rights that consumers
            cannot waive.
          </p>

          <h2>23. Your responsibility for claims</h2>
          <p>
            To the extent permitted by applicable law, you are responsible for
            losses, claims, or reasonable costs resulting from your unlawful
            User Content, intentional misuse of the Service, or material
            violation of another person’s rights.
          </p>
          <p>
            This section does not impose liability on a consumer beyond what is
            permitted by applicable law.
          </p>

          <h2>24. Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of{" "}
            {siteConfig.governingLaw}, without regard to conflict-of-law rules.
          </p>
          <p>
            If you are a consumer, this choice of law does not deprive you of
            mandatory protections provided by the law of the country in which
            you habitually reside. You may bring a claim in any court that has
            jurisdiction under applicable consumer law.
          </p>
          <p>
            Before starting formal proceedings, we encourage you to contact{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>{" "}
            so that we can try to resolve the issue informally. This does not
            restrict your right to contact a consumer-protection authority, use
            an available alternative dispute-resolution procedure, or bring
            legal proceedings.
          </p>

          <h2>25. Changes to these Terms</h2>
          <p>
            We may update these Terms for legitimate reasons, including changes
            to the Service, law, security requirements, provider terms, pricing
            structure, or business operations.
          </p>
          <p>
            We will publish the updated Terms and change the “Last updated”
            date. Where required by law, we will notify you in advance of
            material changes and request renewed acceptance. Changes will not
            retroactively remove rights you have already acquired.
          </p>
          <p>
            If you do not agree to an updated version, you should stop using the
            Service and cancel any active subscription before the updated Terms
            take effect. Your statutory rights remain unaffected.
          </p>

          <h2>26. General provisions</h2>
          <p>
            If any provision of these Terms is found unenforceable, the
            remaining provisions will continue to apply, and the affected
            provision will be interpreted or limited only to the extent
            necessary to make it enforceable where legally possible.
          </p>
          <p>
            Our failure to enforce a provision does not waive our right to
            enforce it later.
          </p>
          <p>
            You may not assign your rights or obligations under these Terms
            without our prior written consent. We may transfer our rights and
            obligations as part of a reorganization, sale, or transfer of the
            Service, subject to applicable law and without reducing mandatory
            consumer rights.
          </p>
          <p>
            These Terms, together with the Privacy Policy and any purchase terms
            displayed before a transaction, constitute the agreement between you
            and PocketPages concerning the Service.
          </p>

          <h2>27. Contact</h2>
          <p>Questions about these Terms may be sent to:</p>
          <p>
            <strong>{siteConfig.developerLegalName}</strong>
            <br />
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
