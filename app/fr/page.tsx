"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
// Iconscout illustrations used as <img> tags with CSS filters
import ServiceCarousel from "@/components/ServiceCarousel";
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
        {/* Ambient moving glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hero-glow-1 absolute w-[500px] h-[500px] rounded-full bg-signal/[0.03] blur-[120px]" />
          <div className="hero-glow-2 absolute w-[400px] h-[400px] rounded-full bg-signal/[0.025] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          {/* AVI Logo with hover glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 group/logo inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[40px] bg-signal/0 group-hover/logo:bg-signal/20 transition-all duration-700 scale-150" />
              <img
                src="/avi-logo.svg"
                alt="AVI Industriel"
                className="relative mx-auto h-12 md:h-16 w-auto transition-all duration-500 group-hover/logo:scale-105"
                width={200}
                height={100}
                fetchPriority="high"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)",
                }}
              />
            </div>
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

          {/* Trust bar moved to green banner below hero */}
        </div>
      </section>

      {/* -- Brand Logo Banner (Green) -- */}
      <section className="bg-signal py-5 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-signal to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-signal to-transparent" />
          <div className="flex w-max animate-[marquee_45s_linear_infinite] items-center gap-20">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex h-8 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 max-w-[130px] object-contain md:h-10 md:max-w-[150px]"
                      style={{ filter: "brightness(0) invert(1)" }}
                  width={110}
                  height={24}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Services Snapshot -- */}
      <section className="relative bg-workshop py-24 overflow-x-clip">

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.services.label}
            </p>
            <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.02em] text-machine-black md:text-2xl">
              {UI_FR.services.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-12">
            <ServiceCarousel
              services={SERVICES_FR}
              iconMap={SERVICE_ICON_MAP}
              linkPrefix="/fr"
              learnMore={UI_FR.services.learnMore}
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/fr/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-dark transition-colors"
            >
              {UI_FR.services.viewAll} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* -- Industries + Social Proof (merged) -- */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-6xl font-bold text-signal md:text-7xl">50+</p>
          <p className="mt-3 text-xl font-bold text-machine-black md:text-2xl">Ateliers de fabrication font confiance à AVI</p>
          <p className="mt-2 text-sm text-dust">Grand Montréal et au-delà</p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Plane, label: "Aérospatiale" },
              { icon: Car, label: "Automobile" },
              { icon: Package, label: "Biens de consommation" },
              { icon: Droplets, label: "Plastiques" },
              { icon: Shield, label: "Défense et militaire" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border-light bg-white px-6 py-6 text-center hover:border-signal transition-colors last:col-span-2 md:last:col-span-1"
              >
                <item.icon className="h-7 w-7 text-signal mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-machine-black">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-lg text-base italic text-shop-grey">
            &laquo;&nbsp;{UI_FR.industries.quote}&nbsp;&raquo;
          </p>
        </div>
      </section>

      {/* -- Why AVI -- */}
      <section className="relative bg-graphite grid-texture py-24 overflow-hidden">
        <img src="/icons/gear.svg" alt="" className="absolute -left-10 bottom-0 w-[250px] md:w-[350px] opacity-[0.18] pointer-events-none float float-delay-1" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
        <img src="/icons/crosshair.svg" alt="" className="absolute right-10 top-10 w-[150px] md:w-[200px] opacity-[0.15] pointer-events-none float-slow float-delay-2" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
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
