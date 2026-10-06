import type { MetadataRoute } from "next";
import { client, ALL_POST_SLUGS_QUERY } from "@/sanity/client";

const BASE = "https://avi-industriel.com";

// Approved posts appear without a redeploy
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: { path: string; priority: number; freq: "monthly" | "weekly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/services/live-tooling-repair", priority: 0.9, freq: "monthly" },
    { path: "/inventory", priority: 0.8, freq: "weekly" },
    { path: "/blog", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "monthly" },
    { path: "/fr", priority: 1, freq: "weekly" },
    { path: "/fr/services", priority: 0.9, freq: "monthly" },
    { path: "/fr/about", priority: 0.7, freq: "monthly" },
    { path: "/fr/contact", priority: 0.7, freq: "monthly" },
    { path: "/fr/privacy", priority: 0.3, freq: "monthly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Dynamic blog post entries
  let blogEntries: MetadataRoute.Sitemap = [];
  if (client) {
    try {
      const slugs: { slug: string }[] = await client.fetch(ALL_POST_SLUGS_QUERY);
      blogEntries = slugs.map((s) => ({
        url: `${BASE}/blog/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    } catch {
      // Sanity unreachable, ship static-only sitemap
    }
  }

  return [...staticEntries, ...blogEntries];
}
