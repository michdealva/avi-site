"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_LINK, EMAIL } from "@/data/content";

const NAV_LINKS_EN = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NAV_LINKS_FR = [
  { label: "Accueil", href: "/fr" },
  { label: "Services", href: "/fr/services" },
  { label: "\u00C0 propos", href: "/fr/about" },
  { label: "Contact", href: "/fr/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isFr = pathname.startsWith("/fr");
  const navLinks = isFr ? NAV_LINKS_FR : NAV_LINKS_EN;

  return (
    <footer className="bg-graphite border-t border-border-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/avi-logo.svg"
              alt="AVI Industriel"
              className="h-8 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)",
              }}
            />
            <p className="mt-4 max-w-xs font-heading text-sm leading-relaxed text-dust">
              {isFr
                ? "Diagnostic et réparation CNC indépendants. 20 ans d'expérience sur 15 marques majeures."
                : "Independent CNC diagnostics and repair. 20 years of experience across 15 major brands."}
            </p>
            <p className="mt-6 font-heading text-sm text-dust">
              {isFr
                ? "Basé dans le Grand Montréal. Prêt à voyager."
                : "Based in Greater Montreal. Ready to travel."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-dust">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-heading text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-dust">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={PHONE_LINK}
                className="font-mono text-sm text-white/70 transition-colors hover:text-signal"
              >
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-sm text-white/70 transition-colors hover:text-signal break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-border-dark pt-8">
          <p className="font-heading text-xs text-dust">
            {isFr
              ? "\u00A9 2026 AVI Industriel Inc. Tous droits réservés."
              : "\u00A9 2026 AVI Industriel Inc. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
