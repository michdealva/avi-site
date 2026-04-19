import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
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
  title: "AVI Industriel Inc. | CNC Diagnostics & Repair | Montreal",
  description:
    "Independent CNC diagnostics and repair in Greater Montreal. 20 years of hands-on experience across 15 major brands including Fanuc, Siemens, and Mitsubishi.",
  metadataBase: new URL("https://aviindustriel.com"),
  alternates: {
    canonical: "https://aviindustriel.com",
  },
  openGraph: {
    title: "AVI Industriel Inc. | CNC Diagnostics & Repair",
    description:
      "Independent CNC diagnostics and repair in Greater Montreal. 20 years of hands-on experience across 15 major brands including Fanuc, Siemens, and Mitsubishi.",
    url: "https://aviindustriel.com",
    siteName: "AVI Industriel Inc.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AVI Industriel Inc. | CNC Diagnostics & Repair",
    description:
      "Independent CNC diagnostics and repair in Greater Montreal. 20 years of experience across 15 major brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
