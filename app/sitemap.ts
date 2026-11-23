import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/layanan",
    "/portfolio",
    "/harga",
    "/tentang",
    "/testimoni",
    "/cara-pemesanan",
    "/faq",
    "/kontak"
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7
  }));
}
