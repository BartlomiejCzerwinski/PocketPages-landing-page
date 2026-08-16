import Link from "next/link";
import { siteConfig } from "@/config/site";
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
          Privacy Policy for PocketPages
        </h1>
        <p className="mt-5 text-base leading-8 text-[color:var(--muted-ink)]">
          <strong className="text-[var(--ink)]">Effective date:</strong>{" "}
          {siteConfig.privacyEffectiveDate}
          <br />
          <strong className="text-[var(--ink)]">Last updated:</strong>{" "}
          {siteConfig.privacyEffectiveDate}
          <br />
          <strong className="text-[var(--ink)]">Document revision:</strong>{" "}
          {siteConfig.legalDocumentRevision}
        </p>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-ink)]">
          PocketPages (the <strong className="text-[var(--ink)]">“App”</strong>)
          helps users turn photographs or scans of printed pages into readable
          digital text. This Privacy Policy explains what personal data
          PocketPages collects, why it is processed, who receives it, how long
          it is retained, and what rights users have.
        </p>
      </section>

      <section className="editorial-card rounded-[2rem] p-8 sm:p-10">
        <div className="prose-legal max-w-none">
          <h2>1. Data controller</h2>
          <p>
            PocketPages is operated by{" "}
            <strong>{siteConfig.developerLegalName}</strong>, an individual
            based in Poland (referred to as{" "}
            <strong>“PocketPages,” “we,” “us,”</strong> or{" "}
            <strong>“our”</strong>).
          </p>
          <p>For privacy questions or requests, contact:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>
          </p>

          <h2>2. Scope</h2>
          <p>
            This Privacy Policy applies to the PocketPages Android application
            and to PocketPages web pages that link to this Policy. It does not
            apply to third-party websites, applications, or services that have
            their own privacy policies.
          </p>

          <h2>3. Personal data we collect</h2>

          <h3>3.1 Account and authentication data</h3>
          <p>
            PocketPages uses Google Sign-In and Firebase Authentication. When
            you create or use an account, we may receive and process:
          </p>
          <ul>
            <li>your name or Google display name;</li>
            <li>your email address;</li>
            <li>your Google/Firebase user identifier;</li>
            <li>
              your profile image, if it is made available through your Google
              account; and
            </li>
            <li>
              authentication-related technical data, such as IP address and
              user-agent information, used by Firebase to authenticate users and
              prevent abuse.
            </li>
          </ul>
          <p>PocketPages does not receive your Google password.</p>

          <h3>3.2 Page images and document content</h3>
          <p>When you use the App, we process:</p>
          <ul>
            <li>
              photographs or scans of pages captured with the camera or selected
              by you;
            </li>
            <li>text extracted from those images;</li>
            <li>document titles and language information;</li>
            <li>document status and creation or modification timestamps; and</li>
            <li>other content that you intentionally add to a document.</li>
          </ul>
          <p>
            Page images may contain personal data if such information appears on
            a page you upload. Please do not upload sensitive personal data or
            content that you are not authorized to process.
          </p>
          <p>
            PocketPages uses page images only to perform text extraction. The
            images are not kept as part of your permanent PocketPages library.
            Temporary copies are deleted from PocketPages storage after
            processing is completed, fails, or the processing job expires.
            Extracted text and document metadata remain in your library until
            you delete the relevant document or your account.
          </p>

          <h3>3.3 Subscription and purchase data</h3>
          <p>
            Subscriptions are purchased through Google Play and managed with
            RevenueCat. We may process:
          </p>
          <ul>
            <li>the product or subscription purchased;</li>
            <li>purchase and renewal status;</li>
            <li>subscription start and expiry dates;</li>
            <li>purchase tokens and transaction identifiers;</li>
            <li>entitlement information;</li>
            <li>
              the PocketPages user identifier connected with the subscription;
              and
            </li>
            <li>
              limited device, app, and technical information required to
              validate purchases and prevent fraud.
            </li>
          </ul>
          <p>
            PocketPages does not receive or store your full payment card number.
            Payments are processed by Google Play under Google’s own terms and
            privacy policy.
          </p>

          <h3>3.4 Communications</h3>
          <p>
            If you contact us, we process your email address, the content of
            your message, and any information you choose to provide so that we
            can respond and resolve your request.
          </p>

          <h2>4. Why we process personal data and our legal bases</h2>
          <p>
            For users in the European Economic Area, the United Kingdom, or
            other locations where a legal basis is required, we rely on the
            following grounds:
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Categories of data</th>
                  <th>Legal basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Create and secure your account</td>
                  <td>Account and authentication data</td>
                  <td>
                    Performance of a contract; our legitimate interest in
                    preventing abuse and protecting the App
                  </td>
                </tr>
                <tr>
                  <td>
                    Capture pages, extract text, and maintain your document
                    library
                  </td>
                  <td>Page images, extracted text, and document metadata</td>
                  <td>
                    Performance of a contract and steps taken at your request
                  </td>
                </tr>
                <tr>
                  <td>Provide paid features and manage subscriptions</td>
                  <td>Account identifiers and subscription data</td>
                  <td>
                    Performance of a contract; compliance with legal
                    obligations; fraud prevention
                  </td>
                </tr>
                <tr>
                  <td>Respond to support and privacy requests</td>
                  <td>Contact and request information</td>
                  <td>
                    Performance of a contract, compliance with legal
                    obligations, and our legitimate interest in providing
                    support
                  </td>
                </tr>
                <tr>
                  <td>Protect PocketPages, users, and service providers</td>
                  <td>Account, technical, security, and transaction data</td>
                  <td>
                    Our legitimate interests in security, fraud prevention, and
                    establishing or defending legal claims
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Where processing is based on legitimate interests, you may object to
            that processing in the circumstances provided by applicable law.
          </p>

          <h2>5. AI-assisted text extraction</h2>
          <p>
            PocketPages sends page images and the instructions necessary to
            extract text to the OpenAI API. OpenAI processes this content on our
            behalf to return the extracted text. PocketPages does not use
            OpenAI’s consumer ChatGPT service for this process.
          </p>
          <p>
            OpenAI states that data submitted through its API is not used to
            train its models by default. Under OpenAI’s standard API data
            controls, inputs and outputs may be retained in abuse-monitoring
            logs for up to 30 days, unless a longer period is required by law or
            reasonably necessary to protect the service or third parties.
          </p>
          <p>
            The extracted text returned by OpenAI is stored by PocketPages in
            your document library until you delete the document or your account.
          </p>
          <p>
            More information is available in{" "}
            <a
              href="https://developers.openai.com/api/docs/guides/your-data"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              OpenAI’s API data controls
            </a>{" "}
            and{" "}
            <a
              href="https://openai.com/enterprise-privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              OpenAI’s business data privacy information
            </a>
            .
          </p>

          <h2>6. Service providers and recipients</h2>
          <p>
            We disclose data only as necessary to operate PocketPages, comply
            with law, or protect users and the App. The principal recipients
            are:
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Data involved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Google LLC — Firebase</strong>
                  </td>
                  <td>
                    Authentication, database, cloud functions, temporary file
                    storage, hosting, and security
                  </td>
                  <td>
                    Account data, document data, temporary page images,
                    authentication-related technical data, and IP addresses
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>OpenAI, L.L.C.</strong>
                  </td>
                  <td>AI-assisted extraction of text from page images</td>
                  <td>
                    Uploaded page images, processing instructions, extracted
                    text, and related technical metadata
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>RevenueCat, Inc.</strong>
                  </td>
                  <td>
                    Subscription status, purchase validation, entitlements,
                    analytics relating to subscriptions, and fraud prevention
                  </td>
                  <td>
                    App user identifier, purchase history, entitlement data,
                    purchase tokens, and limited technical data
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Play</strong>
                  </td>
                  <td>
                    Subscription checkout, payment processing, purchase records,
                    and subscription management
                  </td>
                  <td>
                    Payment and purchase data handled by Google, plus
                    information required to confirm the purchase to PocketPages
                    and RevenueCat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These providers process data according to their agreements with us
            and their applicable privacy terms. Additional information is
            available from{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Firebase
            </a>
            ,{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google
            </a>
            ,{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              RevenueCat
            </a>
            , and{" "}
            <a
              href="https://openai.com/enterprise-privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              OpenAI
            </a>
            .
          </p>
          <p>
            We may also disclose information when reasonably necessary to comply
            with law, respond to lawful requests, protect the rights and safety
            of users or others, investigate fraud or security incidents, or
            establish or defend legal claims.
          </p>
          <p>
            PocketPages does <strong>not</strong> sell personal data.
            PocketPages does <strong>not</strong> share personal data for
            cross-context behavioral advertising and does not display
            third-party advertising.
          </p>

          <h2>7. International data transfers</h2>
          <p>
            PocketPages is operated from Poland, but some service providers
            process data in the United States or other countries outside the
            European Economic Area. In particular, Firebase Authentication is
            operated from United States data centers, and OpenAI and RevenueCat
            may process data in the United States.
          </p>
          <p>
            Where the GDPR applies and data is transferred outside the EEA, we
            rely on appropriate safeguards provided by our service providers,
            which may include an applicable adequacy decision, the EU-U.S. Data
            Privacy Framework, and/or the European Commission’s Standard
            Contractual Clauses.
          </p>
          <p>
            You may contact us to request more information about the safeguards
            applicable to your data.
          </p>

          <h2>8. Data retention</h2>
          <p>
            We retain personal data only for as long as needed for the purposes
            described in this Policy:
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account and profile data</td>
                  <td>
                    Until you delete your account, subject to short periods
                    needed to complete deletion from active systems and backups.
                    Firebase states that authentication data is removed from
                    live and backup systems within up to 180 days after the
                    developer initiates deletion.
                  </td>
                </tr>
                <tr>
                  <td>Page images</td>
                  <td>
                    Only for the time necessary to complete the text-extraction
                    job. PocketPages deletes temporary copies after processing
                    completes, fails, or expires. OpenAI API abuse-monitoring
                    logs may contain submitted content for up to 30 days under
                    standard retention.
                  </td>
                </tr>
                <tr>
                  <td>Extracted text and document metadata</td>
                  <td>
                    Until you delete the document or your PocketPages account.
                  </td>
                </tr>
                <tr>
                  <td>Subscription and transaction data</td>
                  <td>
                    For as long as needed to provide entitlements, manage
                    subscriptions, prevent fraud, resolve disputes, and meet
                    accounting, tax, or other legal obligations. Some purchase
                    records are also independently retained by Google Play and
                    RevenueCat under their policies.
                  </td>
                </tr>
                <tr>
                  <td>Support correspondence</td>
                  <td>
                    For as long as needed to resolve the request and, where
                    appropriate, establish a record of the resolution or comply
                    with legal obligations.
                  </td>
                </tr>
                <tr>
                  <td>Security and operational logs</td>
                  <td>
                    For a limited period determined by security,
                    fraud-prevention, troubleshooting, and legal needs, after
                    which they are deleted or de-identified.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We may retain limited information for longer where required by law,
            necessary to resolve disputes or enforce agreements, or needed to
            protect PocketPages and its users. Where possible, retained data
            will be restricted or de-identified.
          </p>

          <h2>9. Account and data deletion</h2>
          <p>You may delete individual documents from within the App.</p>
          <p>
            You may request deletion of your PocketPages account and associated
            data in either of these ways:
          </p>
          <ol>
            <li>
              Open PocketPages and use the <strong>Delete account</strong>{" "}
              option in the App settings; or
            </li>
            <li>
              Email{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="underline underline-offset-4"
              >
                {siteConfig.supportEmail}
              </a>{" "}
              from the address associated with your account, using the subject{" "}
              <strong>“Delete my PocketPages account.”</strong>
            </li>
          </ol>
          <p>
            Deleting the App from your device does not by itself delete your
            account.
          </p>
          <p>
            Deleting your account deletes or de-identifies your PocketPages
            profile, stored documents, extracted text, usage quota, and other
            data linked only to your account. Limited transaction, security, or
            request records may be retained where required by law or necessary
            for fraud prevention, dispute resolution, or legal claims. Purchase
            history may also remain with Google Play and RevenueCat according to
            their independent retention obligations. Deleting a PocketPages
            account does not automatically cancel an active Google Play
            subscription; subscriptions can be cancelled in Google Play.
          </p>
          <p>
            We may ask you to verify that you control the email address or
            account before completing a deletion request. We will respond without
            undue delay and within the period required by applicable law.
          </p>
          <p>
            For a dedicated account-deletion pathway, see the{" "}
            <Link href="/delete-account/" className="underline underline-offset-4">
              Delete Account
            </Link>{" "}
            page.
          </p>

          <h2>10. Your privacy rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>
              obtain information about how your personal data is processed;
            </li>
            <li>request access to and a copy of your personal data;</li>
            <li>correct inaccurate or incomplete data;</li>
            <li>request deletion of your personal data;</li>
            <li>request restriction of processing;</li>
            <li>
              receive data you provided in a structured, commonly used,
              machine-readable format and request its transfer where applicable;
            </li>
            <li>object to processing based on legitimate interests;</li>
            <li>
              lodge a complaint with a competent data-protection authority.
            </li>
          </ul>
          <p>
            To exercise a right, email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>
            . We may request information reasonably necessary to verify your
            identity. We normally respond within one month where the GDPR
            applies, subject to lawful extensions or exceptions.
          </p>

          <h2>11. Automated processing</h2>
          <p>
            PocketPages uses automated AI processing to extract text from page
            images. This processing does not make decisions that produce legal
            or similarly significant effects concerning you, and PocketPages
            does not use your content for profiling or advertising.
          </p>

          <h2>12. Security</h2>
          <p>
            We use reasonable technical and organizational measures intended to
            protect personal data, including encrypted connections,
            authentication, access controls, provider security controls, and
            limiting access to data to what is necessary to operate the App.
            Firebase services used by PocketPages encrypt data in transit, and
            relevant Firebase services also encrypt data at rest.
          </p>
          <p>
            No method of electronic transmission or storage is completely
            secure, so we cannot guarantee absolute security.
          </p>

          <h2>13. Children</h2>
          <p>
            PocketPages is not directed to children under{" "}
            {siteConfig.minimumAge}, or a higher minimum age where required by
            local law. We do not knowingly collect personal data from children
            below the applicable minimum age. If you believe that a child has
            provided personal data to PocketPages in violation of this section,
            contact us so that we can investigate and delete it where
            appropriate.
          </p>

          <h2>14. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy when PocketPages, our providers,
            or applicable legal requirements change. We will publish the updated
            Policy and revise the “Last updated” date. If a change materially
            affects how we use personal data, we will provide additional notice
            or request consent where required by law.
          </p>

          <h2>15. Contact</h2>
          <p>
            For questions, complaints, or requests concerning privacy or this
            Policy, contact:
          </p>
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
