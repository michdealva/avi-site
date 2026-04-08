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
  Plane,
  Car,
  Droplets,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import {
  PHONE,
  PHONE_LINK,
  BRANDS,
  SERVICES_FR,
  INDUSTRIES_FR,
  DIFFERENTIATORS_FR,
  UI_FR,
} from "@/data/content-fr";

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
  "20 ans": Clock,
  "Indépendant": ShieldCheck,
  "Même jour": Zap,
  "Honnête": MessageSquare,
};

export default function HomeFR() {
  return (
    <main>
      {/* -- Hero -- */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-graphite grid-texture pt-16 overflow-hidden">
        <Blueprint className="absolute inset-0 w-full h-full opacity-100 pointer-events-none pulse-subtle" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(46,204,82,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          {/* AVI Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10"
          >
            <img
              src="/avi-logo.svg"
              alt="AVI Industriel"
              className="mx-auto h-12 md:h-16 w-auto"
              width={200}
              height={100}
              fetchPriority="high"
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
            className="text-5xl font-black leading-[1.05] tracking-[-0.04em] text-bright md:text-7xl"
          >
            {UI_FR.hero.headline1}
            <br />
            {UI_FR.hero.headline2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-xl text-steel-light"
          >
            {UI_FR.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-10 py-5 text-lg font-bold text-white transition-colors hover:bg-signal-dark"
            >
              <Phone className="h-5 w-5" />
              {UI_FR.hero.callBtn} {PHONE}
            </a>
            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-bright px-6 py-3 text-sm font-medium text-bright transition-colors hover:bg-white/5"
            >
              {UI_FR.hero.quoteBtn}
            </Link>
          </motion.div>

          <p className="mt-4 text-sm text-steel-light/80">Réponse le même jour dans le Grand Montréal</p>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
          >
            {[
              { value: "20+", label: UI_FR.hero.years },
              { value: "15", label: UI_FR.hero.brands },
              { value: "5", label: UI_FR.hero.industries },
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

          {/* Trust bar logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 border-t border-white/10 pt-8"
          >
            <p className="mb-4 text-center text-[10px] uppercase tracking-[0.15em] text-steel-light/60">
              {UI_FR.hero.trustedBrands}
            </p>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-graphite to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-graphite to-transparent" />
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
                      width={110}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Section Divider -- */}
      <div className="flex justify-center py-6 bg-workshop">
        <div className="h-0.5 w-16 bg-signal rounded-full" />
      </div>

      {/* -- Services Snapshot -- */}
      <section className="relative bg-workshop py-24 overflow-hidden">
        <CNCMachine className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] opacity-[0.22] pointer-events-none float-slow" />

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.services.label}
            </p>
            <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.02em] text-machine-black md:text-2xl">
              {UI_FR.services.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {/* Featured first service */}
            <ScrollReveal>
              <Link
                href={`/fr/services#${SERVICES_FR[0].id}`}
                className="group block rounded-lg border-l-4 border-l-signal border border-border-light bg-white p-8 md:flex md:gap-8 md:items-start hover:border-signal transition-colors duration-300"
              >
                {(() => {
                  const Icon = SERVICE_ICON_MAP[SERVICES_FR[0].icon];
                  return (
                    <div className="mb-4 md:mb-0 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-signal/10">
                      {Icon && <Icon className="h-6 w-6 text-signal" strokeWidth={2} />}
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-xl font-bold text-machine-black">
                    {SERVICES_FR[0].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-shop-grey">
                    {SERVICES_FR[0].description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-signal transition-colors group-hover:text-signal-dark">
                    {UI_FR.services.learnMore} &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            {/* Remaining 3 services */}
            <div className="grid gap-6 md:grid-cols-3">
              {SERVICES_FR.slice(1, 4).map((service, i) => (
                <ScrollReveal key={service.id} delay={(i + 1) * 80}>
                  <Link
                    href={`/fr/services#${service.id}`}
                    className="group block rounded-lg border-l-4 border-l-signal border border-border-light bg-white p-8 hover:border-signal transition-colors duration-300"
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
                      {UI_FR.services.learnMore} &rarr;
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <Link
                href="/fr/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-dark transition-colors"
              >
                {UI_FR.services.viewAll} &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Social Proof -- */}
      <section className="bg-concrete py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-4xl font-bold text-signal">50+</p>
          <p className="mt-2 text-lg font-semibold text-machine-black">ateliers de fabrication font confiance à AVI</p>
          <p className="mt-1 text-sm text-dust">Grand Montréal et au-delà</p>
        </div>
      </section>

      {/* -- Industries -- */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.02em] text-machine-black md:text-2xl">
            {UI_FR.industries.heading}
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Plane, label: "Aérospatiale" },
              { icon: Car, label: "Automobile" },
              { icon: Package, label: "Biens de consommation" },
              { icon: Droplets, label: "Plastiques" },
              { icon: Shield, label: "Défense et militaire" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border-light bg-white px-6 py-5 text-center hover:border-signal transition-colors last:col-span-2 md:last:col-span-1"
              >
                <item.icon className="h-6 w-6 text-signal mx-auto mb-2" strokeWidth={2} />
                <p className="text-sm font-semibold text-machine-black">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-lg text-base italic text-shop-grey">
            &laquo;&nbsp;{UI_FR.industries.quote}&nbsp;&raquo;
          </p>
        </div>
      </section>

      {/* -- Why AVI -- */}
      <section className="relative bg-graphite grid-texture py-24 overflow-hidden">
        <GearSystem className="absolute -left-10 bottom-0 w-[250px] md:w-[350px] opacity-[0.2] pointer-events-none float float-delay-1" />
        <CrosshairIllustration className="absolute right-10 top-10 w-[150px] md:w-[200px] opacity-20 pointer-events-none float-slow float-delay-2" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-xl font-bold uppercase tracking-[0.02em] text-bright md:text-2xl">
              {UI_FR.whyAvi.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {DIFFERENTIATORS_FR.map((d, i) => (
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

      {/* -- CTA -- */}
      <CTABand
        headline={UI_FR.cta.headline}
        callLabel={UI_FR.cta.callBtn}
        quoteLabel={UI_FR.cta.quoteBtn}
        contactHref="/fr/contact"
      />

      {/* -- Floating phone CTA -- mobile only -- */}
      <a
        href={PHONE_LINK}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal ring-2 ring-signal/30 transition-transform hover:scale-110 md:hidden"
        aria-label="Appeler AVI"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </main>
  );
}
