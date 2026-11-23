import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title ?? `${siteConfig.name} — ${siteConfig.tagline}`;
  const description = (overrides.description as string) ?? siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical: siteConfig.url },
    openGraph: {
      title: title as string,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
      locale: "id_ID"
    },
    twitter: {
      card: "summary_large_image",
      title: title as string,
      description
    },
    ...overrides
  };
}
