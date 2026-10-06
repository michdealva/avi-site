import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteChrome from "@/components/SiteChrome";
import {
  ADDRESS,
  BRANDS,
  EMAIL,
  FOUNDED_YEAR,
  NEQ,
  PHONE,
  SERVICE_AREA,
  SERVICES,
  TOOLING_BRANDS,
} from "@/data/content";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-25NQHL61CY";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AVI Industriel Inc. | CNC Repair & Live Tooling Specialist | Quebec + Ontario",
  description:
    "Independent CNC repair and live tooling specialist serving Quebec and Ontario. 22 years of field experience across 15+ machine brands and 6 tooling brands (Alberti, Eppinger, WTO, MT Marchetti, Evermore, Hold Well).",
  metadataBase: new URL("https://avi-industriel.com"),
  alternates: {
    canonical: "https://avi-industriel.com",
    languages: { "en-CA": "https://avi-industriel.com", "fr-CA": "https://avi-industriel.com/fr", "x-default": "https://avi-industriel.com" },
  },
  openGraph: {
    title: "AVI Industriel Inc. | CNC Repair & Live Tooling Specialist",
    description:
      "Independent CNC repair and live tooling specialist serving Quebec and Ontario. 22 years of field experience across 15+ machine brands and 6 tooling brands.",
    url: "https://avi-industriel.com",
    siteName: "AVI Industriel Inc.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVI Industriel Inc. | CNC Repair & Live Tooling Specialist",
    description:
      "Independent CNC repair and live tooling specialist serving Quebec and Ontario. 22 years field experience.",
  },
};

const BUSINESS_DESCRIPTION =
  "Independent CNC repair and live tooling specialist serving Quebec and Ontario. 22 years of field experience across 15+ machine brands and 6 tooling brands (Alberti, Eppinger, WTO, MT Marchetti, Evermore, Hold Well).";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://avi-industriel.com/#business",
      name: "AVI Industriel Inc.",
      alternateName: "AVI Industriel",
      url: "https://avi-industriel.com",
      logo: "https://avi-industriel.com/avi-logo.svg",
      telephone: PHONE,
      email: EMAIL,
      foundingDate: String(FOUNDED_YEAR),
      founder: { "@id": "https://avi-industriel.com/#founder" },
      description: BUSINESS_DESCRIPTION,
      // Mobile service: the base is residential, so only the town is published
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        addressCountry: ADDRESS.country,
      },
      areaServed: SERVICE_AREA.regions.map((r) => ({
        "@type": "AdministrativeArea",
        name: r,
      })),
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          address: {
            "@type": "PostalAddress",
            addressLocality: ADDRESS.locality,
            addressRegion: ADDRESS.region,
            addressCountry: ADDRESS.country,
          },
        },
        geoRadius: SERVICE_AREA.radiusKm * 1000,
      },
      availableLanguage: ["English", "French"],
      knowsAbout: [
        "CNC repair",
        "Live tooling repair",
        "Driven tools rebuild",
        "CNC geometry and alignment",
        "Electrical troubleshooting",
        "Preventive maintenance",
        "Pre-purchase machine inspection",
        ...TOOLING_BRANDS.map((b) => `${b} live tooling`),
        ...BRANDS.map((b) => b.name),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CNC repair services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
          },
        })),
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          description: "By appointment",
        },
      ],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "NEQ",
        value: NEQ,
      },
    },
    {
      "@type": "Person",
      "@id": "https://avi-industriel.com/#founder",
      name: "Alexandre Vachon",
      jobTitle: "CNC repair technician and live tooling specialist",
      worksFor: { "@id": "https://avi-industriel.com/#business" },
      url: "https://avi-industriel.com/about",
    },
    {
      "@type": "WebSite",
      "@id": "https://avi-industriel.com/#website",
      url: "https://avi-industriel.com",
      name: "AVI Industriel Inc.",
      publisher: { "@id": "https://avi-industriel.com/#business" },
      inLanguage: ["en-CA", "fr-CA"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema),
          }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
