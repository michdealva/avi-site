"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
      <section className="relative flex min-h-screen items-center justify-center bg-graphite grid-texture pt-16">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          {/* AVI Logo as visual anchor */}
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
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-bright md:text-7xl"
          >
            Your CNC is down.
            <br />
            We get it running.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 max-w-xl text-xl text-steel-light"
          >
            Independent electromechanical diagnostics and repair. 20&nbsp;years.
            9&nbsp;brands. Montreal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-lg bg-signal px-8 py-4 font-semibold text-white transition-colors hover:bg-signal-dark"
            >
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
              { value: "9", label: "Brands" },
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
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-concrete py-8">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-4 text-center text-xs uppercase tracking-[0.1em] text-dust">
              Experienced with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="font-mono text-sm text-shop-grey md:text-base"
                >
                  {brand}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Snapshot ── */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              What we do
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.slice(0, 4).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block rounded-lg border border-border-light bg-white p-8 transition-colors hover:border-signal"
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
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Industries
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              Sectors we serve
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

      {/* ── Why AVI ── */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Why AVI
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              Why manufacturers trust us
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
                  <p className="mt-1 text-xs uppercase tracking-wide text-dust">
                    {d.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-shop-grey">
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
    </main>
  );
}
