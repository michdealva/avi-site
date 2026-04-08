"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Blueprint from "@/components/illustrations/Blueprint";
import CNCMachine from "@/components/illustrations/CNCMachine";
import GearSystem from "@/components/illustrations/GearSystem";
import CrosshairIllustration from "@/components/illustrations/Crosshair";
import {
  Wrench,
  Crosshair,
  Zap,
  Settings,
  Calendar,
  Search,
  Package,
  Shield,
  Clock,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import {
  PHONE,
  PHONE_LINK,
  BRANDS,
  SERVICES,
  INDUSTRIES,
  DIFFERENTIATORS,
} from "@/data/content";

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  wrench: Wrench,
  crosshair: Crosshair,
  zap: Zap,
  cog: Settings,
  calendar: Calendar,
  search: Search,
  package: Package,
  shield: Shield,
};

const DIFF_ICON_MAP: Record<string, LucideIcon> = {
  "20 Years": Clock,
  Independent: ShieldCheck,
  "Same-Day": Zap,
  Honest: MessageSquare,
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center bg-graphite grid-texture pt-16 overflow-hidden">
        <Blueprint className="absolute inset-0 w-full h-full opacity-100 pointer-events-none pulse-subtle" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          {/* AVI Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10"
          >
            <img
              src="/avi-logo.svg"
              alt=""
              className="mx-auto h-20 md:h-28 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-bright md:text-7xl"
          >
            Your CNC is down.
            <br />
            We get it running.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-xl text-steel-light"
          >
            Independent electromechanical diagnostics and repair. 20&nbsp;years.
            9&nbsp;brands. Montreal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-4 font-semibold text-white transition-colors hover:bg-signal-dark"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-bright px-8 py-4 font-semibold text-bright transition-colors hover:bg-white/5"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
          >
            {[
              { value: "20+", label: "Years" },
              { value: "15", label: "Brands" },
              { value: "5", label: "Industries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-3xl font-bold text-signal md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-steel-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Trust bar logos — INSIDE hero on dark bg (Remy push #1) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 border-t border-white/10 pt-8"
          >
            <p className="mb-4 text-center text-[10px] uppercase tracking-[0.15em] text-steel-light/60">
              Trusted across 15 major brands
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-graphite to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-graphite to-transparent" />
              {/* Scrolling track — duplicate for seamless loop */}
              <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12">
                {[...BRANDS, ...BRANDS].map((brand, i) => (
                  <div
                    key={`${brand.name}-${i}`}
                    className="flex h-10 flex-shrink-0 items-center justify-center opacity-40 transition-opacity hover:opacity-80"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-6 max-w-[90px] object-contain invert md:h-8 md:max-w-[110px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Snapshot ── (Remy push #3: green left border on cards) */}
      <section className="relative bg-workshop py-24 overflow-hidden">
        <CNCMachine className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] opacity-[0.12] pointer-events-none float-slow" />

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-machine-black md:text-4xl">
              Full-spectrum CNC service
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.slice(0, 4).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block rounded-lg border-l-4 border-l-signal border border-border-light bg-white p-8 transition-all hover:shadow-lg hover:shadow-signal/5"
                >
                  {(() => {
                    const Icon = SERVICE_ICON_MAP[service.icon];
                    return (
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                        {Icon && <Icon className="h-5 w-5 text-signal" strokeWidth={2} />}
                      </div>
                    );
                  })()}
                  <h3 className="text-lg font-semibold text-machine-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-shop-grey">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-signal transition-colors group-hover:text-signal-dark">
                    Learn more &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-dark transition-colors"
              >
                View all 8 services &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Industries ── (Remy push #4: tighter heading) */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black md:text-4xl">
              Trusted across critical sectors
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {INDUSTRIES.map((industry, i) => (
                <span key={industry} className="flex items-center gap-4">
                  <span className="text-xl font-semibold text-machine-black md:text-2xl">
                    {industry}
                  </span>
                  {i < INDUSTRIES.length - 1 && (
                    <span className="text-xl text-signal">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-10 max-w-lg text-base italic text-shop-grey">
              &ldquo;Whatever the machine, whatever the sector &mdash; if
              it&rsquo;s CNC, we&rsquo;ve worked on it.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why AVI ── (Remy push #2: DARK section to break monotony) */}
      <section className="relative bg-graphite grid-texture py-24 overflow-hidden">
        <GearSystem className="absolute -left-10 bottom-0 w-[250px] md:w-[350px] opacity-[0.15] pointer-events-none float float-delay-1" />
        <CrosshairIllustration className="absolute right-10 top-10 w-[150px] md:w-[200px] opacity-20 pointer-events-none float-slow float-delay-2" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-bright md:text-4xl">
              Why AVI
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <div>
                  {(() => {
                    const DIcon = DIFF_ICON_MAP[d.title];
                    return DIcon ? (
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                        <DIcon className="h-5 w-5 text-signal" strokeWidth={2} />
                      </div>
                    ) : null;
                  })()}
                  <p className="text-2xl font-bold text-signal">{d.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-steel-light/60">
                    {d.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">
                    {d.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABand headline="Machine down? Let's fix it." />

      {/* ── Floating phone CTA — mobile only (Remy push #5) ── */}
      <a
        href={PHONE_LINK}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal shadow-lg shadow-signal/30 transition-transform hover:scale-110 md:hidden"
        aria-label="Call AVI"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </main>
  );
}
