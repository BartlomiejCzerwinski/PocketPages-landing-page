import Image from "next/image";
import Link from "next/link";
import { StoreCta } from "@/components/store-cta";
import { PLAY_SUBSCRIPTIONS_URL, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "PocketPages | Turn any book into your pocket reader.",
  description:
    "Scan the pages you want, convert them into clean readable text, and enjoy a comfortable reading experience anywhere with PocketPages for Android.",
  path: "/",
});

const steps = [
  {
    title: "Scan the pages you want.",
    body: "Use your camera or import existing images when you already have the page saved on your device.",
    image: "/images/screenshot-scan.png",
    alt: "PocketPages scan screen showing a book page framed for capture.",
  },
  {
    title: "Let PocketPages turn them into clean text.",
    body: "PocketPages sends the page images you choose for AI-assisted extraction and formatting so the result is easier to read on a phone.",
    image: "/images/screenshot-processing.png",
    alt: "PocketPages processing screen showing extraction progress after a page upload.",
  },
  {
    title: "Read comfortably and keep everything organized.",
    body: "Continue reading in a distraction-free view and return to saved documents from your personal library.",
    image: "/images/screenshot-reader.png",
    alt: "PocketPages reading view with a clean text layout on a phone.",
  },
] as const;

const features = [
  "Clean, distraction-free reading designed for long-form text.",
  "A personal library for scanned documents and extracted text.",
  "Adjustable text size to fit different reading preferences.",
  "Light and dark themes for different environments.",
  "Reading progress so it is easy to pick up where you left off.",
  "Camera capture and gallery import for flexible scanning.",
  "AI-assisted text extraction and formatting with a reminder to compare important passages against the original source.",
] as const;

type FaqItem = {
  question: string;
  answer: string;
  href?: string;
  hrefLabel?: string;
};

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is PocketPages?",
    answer:
      "PocketPages is an Android app for scanning selected pages from physical books or imported page images, converting them into readable text, and presenting them in a focused mobile reading experience.",
  },
  {
    question: "Does PocketPages provide or sell books?",
    answer:
      "No. PocketPages does not sell books, host a book catalogue, or provide licensed reading content. It is designed for content that you already lawfully possess or are otherwise permitted to use.",
  },
  {
    question: "Can text extraction contain errors?",
    answer:
      "Yes. AI-assisted extraction can make mistakes, especially with unusual layouts, lighting issues, damaged pages, handwriting, or decorative typography. Compare important passages with the original source before relying on them.",
  },
  {
    question: "What happens to scanned page images?",
    answer:
      "Page images are used to process your request and are not kept in your PocketPages library after processing. Temporary provider logs or short-lived processing copies may still exist for limited periods depending on production implementation and provider retention policies.",
  },
  {
    question: "How do subscriptions work?",
    answer:
      "PocketPages subscriptions are handled through Google Play Billing, with subscription status managed through RevenueCat. As of the current Terms, the Free plan includes up to 5 processed pages per monthly usage period and the Pro plan includes up to 200 processed pages per monthly usage period. Exact prices are shown in Google Play at purchase.",
  },
  {
    question: "How do I cancel a Google Play subscription?",
    answer:
      "You can manage or cancel your subscription from Google Play’s subscription page.",
    href: PLAY_SUBSCRIPTIONS_URL,
    hrefLabel: "Open Google Play subscriptions",
  },
  {
    question: "How do I delete my PocketPages account?",
    answer:
      "Use the dedicated Delete Account page for the email-based deletion request and related guidance.",
    href: "/delete-account/",
    hrefLabel: "Go to Delete Account",
  },
  {
    question: "How can I contact support?",
    answer:
      "Email PocketPages support at pocketpages@hotmail.com. More help topics are available on the Support page.",
    href: "/support/",
    hrefLabel: "Open Support",
  },
];

export default function Home() {
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.appName,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    description:
      "PocketPages lets readers scan selected book pages, convert them into clean text, and read comfortably on mobile.",
    image: "/images/pocketpages-icon.png",
    screenshot: [
      "/images/screenshot-hero-reader.png",
      "/images/screenshot-scan.png",
      "/images/screenshot-reader.png",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.88fr)] lg:gap-16">
          <div className="max-w-3xl">
            <span className="eyebrow">PocketPages for Android</span>
            <h1 className="section-title mt-6 max-w-3xl text-balance font-sans font-extrabold text-[var(--ink)]">
              Turn any book into your pocket reader.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted-ink)] sm:text-xl">
              Scan the pages you want, convert them into clean, readable text,
              and enjoy a comfortable reading experience anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <StoreCta className="sm:min-w-56" />
              <Link
                href="/#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] sm:min-w-44"
              >
                How it works
              </Link>
            </div>
          </div>
          <div className="editorial-card overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.5rem] bg-[color:rgba(255,255,255,0.54)] p-4">
              <Image
                src="/images/screenshot-hero-reader.png"
                alt="PocketPages promotional screenshot showing the reading experience on an angled phone."
                width={576}
                height={1024}
                priority
                className="mx-auto rounded-[1.5rem]"
              />
            </div>
          </div>
        </section>

        <section className="editorial-card overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <Image
            src="/images/pocketpages-feature-graphic.png"
            alt="PocketPages feature graphic showing scan and reader screens with the tagline Your books. In your pocket."
            width={1024}
            height={500}
            className="w-full rounded-[1.5rem]"
          />
        </section>

        <section id="how-it-works" className="space-y-8 scroll-mt-28">
          <div className="max-w-3xl">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title mt-5 max-w-2xl font-sans font-bold">
              From printed pages to calm mobile reading.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="editorial-card flex h-full flex-col overflow-hidden rounded-[2rem]"
              >
                <div className="border-b border-[color:var(--line)] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted-ink)]">
                    {step.body}
                  </p>
                </div>
                <div className="bg-white/55 p-4">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={576}
                    height={1024}
                    className="mx-auto rounded-[1.5rem]"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="grid gap-8 scroll-mt-28 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="editorial-card rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Features</span>
            <h2 className="section-title mt-5 max-w-2xl font-sans font-bold">
              Reading tools that stay out of the way.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted-ink)]">
              PocketPages focuses on the flow from capture to reading, with
              flexible display controls and an organized library for the pages
              you choose to keep.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/60 p-5 text-sm leading-7 text-[color:var(--muted-ink)]"
                >
                  <span className="block text-base font-semibold text-[var(--ink)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-[1.5rem] border border-dashed border-[color:var(--gold)] bg-[color:rgba(188,150,90,0.08)] p-5 text-sm leading-7 text-[color:var(--muted-ink)]">
              Important note: AI-assisted extraction can contain errors. Compare
              important passages, quotations, legal text, and academic material
              with the original source before relying on the extracted version.
            </p>
          </div>
          <div className="grid gap-6">
            <article className="editorial-card rounded-[2rem] p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
                Personal library
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">
                Keep scanned documents organized.
              </h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted-ink)]">
                Return to saved titles, continue where you left off, and keep
                your extracted reading material in one account-connected
                library.
              </p>
              <Image
                src="/images/screenshot-library.png"
                alt="PocketPages library screen with recent documents and reading progress."
                width={576}
                height={1024}
                className="mt-6 mx-auto rounded-[1.5rem]"
              />
            </article>
            <article className="editorial-card rounded-[2rem] p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
                Personalization
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">
                Adjust text size and choose your theme.
              </h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted-ink)]">
                PocketPages includes adjustable text sizing and both light and
                dark reading themes so the reading experience can feel right in
                different environments.
              </p>
              <Image
                src="/images/screenshot-themes.png"
                alt="PocketPages theme and text size settings shown in light and dark modes."
                width={576}
                height={1024}
                className="mt-6 mx-auto rounded-[1.5rem]"
              />
            </article>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="editorial-card rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Privacy-focused</span>
            <h2 className="section-title mt-5 max-w-xl font-sans font-bold">
              Process what you scan, then keep the reading copy tied to your
              account.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted-ink)]">
              Your scans are used to process your request and are not kept in
              your PocketPages library. Extracted documents remain connected to
              your account so you can continue reading across devices.
            </p>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted-ink)]">
              PocketPages uses Firebase-based backend services for account and
              library features, Google Play Billing and RevenueCat for
              subscriptions, and the OpenAI API for extraction. The Privacy
              Policy explains those providers in more detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/privacy/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                Read the Privacy Policy
              </Link>
              <Link
                href="/delete-account/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                Delete account options
              </Link>
            </div>
          </article>
          <article className="editorial-card rounded-[2rem] p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
              Comfortable reading
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink)]">
              Read in a clean, distraction-free view.
            </h3>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted-ink)]">
              PocketPages is designed for focused reading once the extraction is
              complete, with layout choices that give the text room to breathe.
            </p>
            <Image
              src="/images/screenshot-reader-clean.png"
              alt="PocketPages reader view showing an uncluttered page layout with reading progress."
              width={576}
              height={1024}
              className="mt-6 mx-auto rounded-[1.5rem]"
            />
          </article>
        </section>

        <section id="faq" className="scroll-mt-28">
          <div className="max-w-3xl">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title mt-5 max-w-2xl font-sans font-bold">
              Questions readers usually ask first.
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="editorial-card rounded-[1.75rem] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--ink)] focus-visible:outline-none">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted-ink)]">
                  {item.answer}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-4 inline-flex text-sm font-semibold text-[var(--gold-strong)] underline underline-offset-4"
                  >
                    {item.hrefLabel}
                  </Link>
                ) : null}
              </details>
            ))}
          </div>
        </section>

        <section className="editorial-card rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-16">
          <span className="eyebrow justify-center">PocketPages</span>
          <h2 className="section-title mx-auto mt-5 max-w-3xl font-sans font-bold">
            Your books. In your pocket.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted-ink)]">
            Scan, convert, and read anywhere with a mobile experience built for
            selected pages you already have the right to use.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreCta className="sm:min-w-56" />
          </div>
        </section>
      </div>
    </>
  );
}
