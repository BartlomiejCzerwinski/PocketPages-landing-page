import type { MetadataRoute } from "next";
import { getCanonicalUrl, getSiteOrigin } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemap = getCanonicalUrl("/sitemap.xml");
  const origin = getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemap ? [sitemap] : undefined,
    host: origin?.toString(),
  };
}
