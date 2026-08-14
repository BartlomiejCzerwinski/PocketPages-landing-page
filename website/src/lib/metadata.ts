import type { Metadata } from "next";
import {
  APP_DESCRIPTION,
  getCanonicalUrl,
  getSiteOrigin,
  siteConfig,
} from "@/config/site";

const socialImage = "/images/pocketpages-feature-graphic.png";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export const buildMetadata = ({
  title,
  description,
  path,
}: MetadataInput): Metadata => {
  const canonical = getCanonicalUrl(path);
  const siteOrigin = getSiteOrigin();
  const socialImageUrl = siteOrigin
    ? new URL(socialImage, siteOrigin).toString()
    : undefined;

  return {
    metadataBase: siteOrigin,
    title,
    description,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      title,
      description,
      siteName: siteConfig.appName,
      images: socialImageUrl
        ? [
            {
              url: socialImageUrl,
              width: 1024,
              height: 500,
              alt: `${siteConfig.appName} feature graphic`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImageUrl ? [socialImageUrl] : undefined,
    },
  };
};

export const defaultMetadata = buildMetadata({
  title: `${siteConfig.appName} | Your books. In your pocket.`,
  description: APP_DESCRIPTION,
  path: "/",
});
