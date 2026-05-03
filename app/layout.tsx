import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import {
  ADDRESS,
  EMAIL,
  FOUNDED_YEAR,
  PHONE,
  SERVICE_AREA,
} from "@/data/content";
import "./globals.css";

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://avi-industriel.com/#business",
  name: "AVI Industriel Inc.",
  alternateName: "AVI Industriel",
  url: "https://avi-industriel.com",
  telephone: PHONE,
  email: EMAIL,
  foundingDate: String(FOUNDED_YEAR),
  description:
    "Independent CNC repair and live tooling specialist serving Quebec and Ontario. 22 years of field experience across 15+ machine brands and 6 tooling brands (Alberti, Eppinger, WTO, MT Marchetti, Evermore, Hold Well).",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
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
  knowsAbout: [
    "CNC repair",
    "Live tooling repair",
    "Driven tools rebuild",
    "CNC geometry and alignment",
    "Electrical troubleshooting",
    "Preventive maintenance",
    "Pre-purchase machine inspection",
    "Alberti live tooling",
    "Eppinger driven tools",
    "WTO tooling",
    "MT Marchetti tooling",
    "Fanuc",
    "Siemens",
    "Mazak",
    "Haas",
    "Makino",
  ],
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
    value: "1178404100",
  },
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
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
