import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/config/site";

export const dynamic = "force-static";

const routes = ["/", "/privacy/", "/terms/", "/delete-account/", "/support/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    const url = getCanonicalUrl(route);

    if (!url) {
      return;
    }

    entries.push({
      url,
      lastModified: new Date(),
    });
  });

  return entries;
}
