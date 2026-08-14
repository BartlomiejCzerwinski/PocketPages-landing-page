import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  linked?: boolean;
};

export function Logo({ linked = true }: LogoProps) {
  const content = (
    <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-[var(--ink)] uppercase">
      <Image
        src="/images/pocketpages-icon.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-xl"
      />
      <span>{siteConfig.appName}</span>
    </span>
  );

  if (!linked) {
    return content;
  }

  return <Link href="/">{content}</Link>;
}
