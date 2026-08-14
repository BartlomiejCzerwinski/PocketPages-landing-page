import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [{ url: "/images/pocketpages-icon.png", type: "image/png" }],
    apple: [{ url: "/images/pocketpages-icon.png", type: "image/png" }],
    shortcut: ["/images/pocketpages-icon.png"],
  },
};

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support/", label: "Support" },
] as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)]">
        <a
          href="#main-content"
          className="skip-link focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-[var(--ink)] focus-visible:px-4 focus-visible:py-3 focus-visible:text-[var(--paper)]"
        >
          Skip to content
        </a>
        <div className="site-shell">
          <SiteHeader navItems={navItems} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
