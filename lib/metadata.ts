import type { Metadata } from "next";
import { siteConfig } from "./data";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: path === "/" ? { absolute: siteConfig.title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      title: path === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Shrey Patel — Software Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
