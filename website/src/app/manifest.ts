import type { MetadataRoute } from "next";
import { APP_DESCRIPTION, siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.appName,
    short_name: siteConfig.appName,
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f2e9",
    theme_color: "#bc965a",
    icons: [
      {
        src: "/images/pocketpages-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
