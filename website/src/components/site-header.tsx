import Link from "next/link";
import { Logo } from "@/components/logo";
import { StoreCta } from "@/components/store-cta";

type SiteHeaderProps = {
  navItems?: ReadonlyArray<{ href: string; label: string }>;
};

export function SiteHeader({ navItems = [] }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:rgba(248,242,233,0.9)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <StoreCta className="hidden sm:inline-flex" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--muted-ink)] transition hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <StoreCta className="sm:hidden" />
        </div>
      </div>
    </header>
  );
}
