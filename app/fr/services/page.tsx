import type { Metadata } from "next";
import {
  Wrench,
  Crosshair,
  Zap,
  Settings,
  Calendar,
  Search,
  Package,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de r\u00e9paration CNC | AVI Industriel",
  description:
    "Diagnostic et r\u00e9paration CNC de A \u00e0 Z : g\u00e9om\u00e9trie, d\u00e9pannage \u00e9lectrique, maintenance pr\u00e9ventive, inspection pr\u00e9-achat. 15 marques, Grand Montr\u00e9al.",
  alternates: { canonical: "https://aviindustriel.com/fr/services" },
};
import CrosshairIllustration from "@/components/illustrations/Crosshair";
import CircuitBoard from "@/components/illustrations/CircuitBoard";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import {
  SERVICES_FR,
  BRANDS,
  COMMON_ISSUES_FR,
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

export default function ServicesPageFR() {
  return (
    <main>
      {/* -- Page Header -- */}
      <section className="relative bg-graphite grid-texture py-24 md:py-32 overflow-hidden">
        <CrosshairIllustration className="absolute right-10 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] opacity-30 pointer-events-none float-slow" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">
              {UI_FR.services.label}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-steel-light">
              {UI_FR.services.pageSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Service Sections -- */}
      {SERVICES_FR.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-24 ${
            i % 2 === 0 ? "bg-workshop" : "bg-concrete"
          }`}
        >
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              {(() => {
                const Icon = SERVICE_ICON_MAP[service.icon];
                return (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                    {Icon && <Icon className="h-5 w-5 text-signal" strokeWidth={2} />}
                  </div>
                );
              })()}
              <h2 className="text-2xl font-bold text-machine-black md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-shop-grey">
                {service.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="mt-8 rounded-lg border border-border-light bg-white p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-dust">
                  {UI_FR.services.commonScenarios}
                </h3>
                <p className="mt-2 text-base text-machine-black">
                  {service.scenarios}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-dust">
                  {UI_FR.services.brandsLabel}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {BRANDS.map((brand) => (
                    <span
                      key={brand.name}
                      className="rounded bg-concrete px-3 py-1 font-mono text-xs text-shop-grey"
                    >
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* -- Common Issues -- */}
      <section className="relative bg-workshop py-24 overflow-hidden">
        <CircuitBoard className="absolute right-0 top-0 w-[400px] opacity-[0.4] pointer-events-none pulse-subtle float-delay-2" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.services.commonIssues}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {COMMON_ISSUES_FR.map((issue, i) => (
              <ScrollReveal key={issue} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-signal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base text-machine-black">{issue}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Brands Grid -- */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.services.trustedAcross}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.services.majorBrands}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {BRANDS.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 60}>
                <div className="flex flex-col items-center justify-center rounded-lg border border-border-light bg-white px-6 py-8">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 max-w-[140px] object-contain md:h-12"
                  />
                  <span className="mt-3 font-mono text-xs text-dust">
                    {brand.name}
                  </span>
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
    </main>
  );
}
