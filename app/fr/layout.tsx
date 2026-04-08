import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVI Industriel Inc. | Diagnostic et r\u00e9paration CNC | Montr\u00e9al",
  description:
    "Diagnostic et r\u00e9paration CNC ind\u00e9pendants dans le Grand Montr\u00e9al. 20 ans d\u2019exp\u00e9rience sur 15 marques majeures dont Fanuc, Siemens et Mitsubishi.",
  alternates: { canonical: "https://aviindustriel.com/fr" },
  openGraph: {
    title: "AVI Industriel Inc. | Diagnostic et r\u00e9paration CNC",
    description:
      "Diagnostic et r\u00e9paration CNC ind\u00e9pendants dans le Grand Montr\u00e9al. 20 ans d\u2019exp\u00e9rience sur 15 marques majeures dont Fanuc, Siemens et Mitsubishi.",
    url: "https://aviindustriel.com/fr",
    siteName: "AVI Industriel Inc.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
