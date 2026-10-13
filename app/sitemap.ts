import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about", "/contact", "/resume"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}
