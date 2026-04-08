import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    "Your CNC is down. We get it running. Independent electromechanical diagnostics and repair. 20 years experience, 15 major brands. Greater Montreal.",
  metadataBase: new URL("https://aviindustriel.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <div className="noise" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
