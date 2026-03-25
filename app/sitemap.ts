import { MetadataRoute } from "next";
import siteConfig from "../site.config";

const BASE = siteConfig.seo.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE,            priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/buy`,   priority: 0.9,  changeFrequency: "daily"   as const },
    { url: `${BASE}/sell`,  priority: 0.8,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/rent`,  priority: 0.8,  changeFrequency: "daily"   as const },
    { url: `${BASE}/agents`,priority: 0.8,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/about`, priority: 0.6,  changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`,priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const agentSlugs = ["sarah-mitchell","james-carter","priya-nair","marcus-webb","diana-reyes","tom-nakamura"];
  const agentPages = agentSlugs.map((slug) => ({
    url: `${BASE}/agents/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const listingSlugs = ["the-harrington","park-west-penthouse","tribeca-loft","brooklyn-heights-classic","upper-east-townhouse","chelsea-studio"];
  const listingPages = listingSlugs.map((slug) => ({
    url: `${BASE}/listings/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...agentPages, ...listingPages].map((p) => ({
    ...p,
    lastModified: new Date(),
  }));
}
