import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aviindustriel.com";
  const routes = ["", "/services", "/about", "/contact", "/privacy"];
  const frRoutes = [
    "/fr",
    "/fr/services",
    "/fr/about",
    "/fr/contact",
    "/fr/privacy",
  ];

  return [...routes, ...frRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" || route === "/fr" ? 1 : 0.8,
  }));
}
