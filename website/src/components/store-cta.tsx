import Link from "next/link";
import {
  googlePlayLabel,
  hasGooglePlayUrl,
  siteConfig,
} from "@/config/site";

type StoreCtaProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClassNames: Record<NonNullable<StoreCtaProps["variant"]>, string> =
  {
    primary:
      "bg-[var(--gold)] text-[var(--ink)] shadow-[0_14px_40px_rgba(188,150,90,0.22)] hover:bg-[var(--gold-strong)]",
    secondary:
      "border border-[color:var(--line)] bg-white/80 text-[var(--ink)] hover:bg-white",
    ghost:
      "border border-[color:var(--line)] bg-transparent text-[var(--ink)] hover:bg-white/60",
  };

export function StoreCta({
  variant = "primary",
  className = "",
}: StoreCtaProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]",
    variantClassNames[variant],
    className,
  ].join(" ");

  if (!hasGooglePlayUrl || !siteConfig.googlePlayUrl) {
    return (
      <span aria-disabled="true" className={`${classes} cursor-default opacity-90`}>
        {googlePlayLabel}
      </span>
    );
  }

  return (
    <Link
      href={siteConfig.googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {googlePlayLabel}
    </Link>
  );
}
