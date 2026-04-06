"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_LINK } from "@/data/content";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-graphite/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/avi-logo.svg"
            alt="AVI Industriel"
            className="h-10 w-auto"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone + lang + hamburger */}
        <div className="flex items-center gap-4">
          {/* Phone - desktop full, mobile icon */}
          <a
            href={PHONE_LINK}
            className="hidden items-center gap-2 font-mono text-sm text-white/80 transition-colors hover:text-signal md:flex"
          >
            <PhoneIcon />
            {PHONE}
          </a>
          <a
            href={PHONE_LINK}
            className="flex items-center text-white/80 transition-colors hover:text-signal md:hidden"
            aria-label="Call AVI"
          >
            <PhoneIcon />
          </a>

          {/* Language toggle */}
          <div className="hidden items-center gap-1 font-heading text-xs font-medium md:flex">
            <span className="text-white">EN</span>
            <span className="text-white/30">|</span>
            <span className="cursor-not-allowed text-white/30">FR</span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-graphite/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 pt-16">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-semibold text-white transition-colors hover:text-signal"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_LINK}
            className="mt-4 inline-flex h-12 items-center justify-center rounded-lg bg-signal px-8 font-heading text-sm font-semibold text-white transition-colors hover:bg-signal-dark"
          >
            Call {PHONE}
          </a>
          <div className="flex items-center gap-2 font-heading text-sm font-medium">
            <span className="text-white">EN</span>
            <span className="text-white/30">|</span>
            <span className="cursor-not-allowed text-white/30">FR</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
