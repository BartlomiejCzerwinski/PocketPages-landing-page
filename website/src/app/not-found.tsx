import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <span className="eyebrow">404</span>
      <h1 className="section-title max-w-2xl font-sans font-bold">
        This page could not be found.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-ink)]">
        The page you were looking for may have moved, or the address may be
        incorrect.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_14px_40px_rgba(188,150,90,0.22)] transition hover:bg-[var(--gold-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
      >
        Back to PocketPages
      </Link>
    </div>
  );
}
