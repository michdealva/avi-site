import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVI Industriel Inc. | Diagnostic et r\u00e9paration CNC | Qu\u00e9bec et Ontario",
  description:
    "Diagnostic et r\u00e9paration CNC ind\u00e9pendants au Qu\u00e9bec et en Ontario. 22 ans d\u2019exp\u00e9rience sur 15 marques majeures dont Fanuc, Siemens et Mitsubishi.",
  alternates: {
    canonical: "https://avi-industriel.com/fr",
    languages: { "en-CA": "https://avi-industriel.com", "fr-CA": "https://avi-industriel.com/fr", "x-default": "https://avi-industriel.com" },
  },
  openGraph: {
    title: "AVI Industriel Inc. | Diagnostic et r\u00e9paration CNC",
    description:
      "Diagnostic et r\u00e9paration CNC ind\u00e9pendants au Qu\u00e9bec et en Ontario. 22 ans d\u2019exp\u00e9rience sur 15 marques majeures dont Fanuc, Siemens et Mitsubishi.",
    url: "https://avi-industriel.com/fr",
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
