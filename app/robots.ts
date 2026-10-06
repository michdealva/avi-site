import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/login", "/studio", "/api/"],
    },
    sitemap: "https://avi-industriel.com/sitemap.xml",
  };
}
