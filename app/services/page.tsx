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
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import {
  SERVICES,
  BRANDS,
  COMMON_ISSUES,
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

export default function ServicesPage() {
  return (
    <main>
      {/* ── Page Header ── */}
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">
              Services
            </h1>
            <p className="mt-4 max-w-xl text-lg text-steel-light">
              Full-spectrum CNC diagnostics and repair. From emergency
              breakdowns to scheduled maintenance &mdash; we keep your machines
              running.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {SERVICES.map((service, i) => (
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
                  Common scenarios
                </h3>
                <p className="mt-2 text-base text-machine-black">
                  {service.scenarios}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-dust">
                  Brands
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {BRANDS.map((brand) => (
                    <span
                      key={brand}
                      className="rounded bg-concrete px-3 py-1 font-mono text-xs text-shop-grey"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── Common Issues ── */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-machine-black md:text-4xl">
              Problems We Solve Every Week
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {COMMON_ISSUES.map((issue, i) => (
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

      {/* ── Brands Grid ── */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Trusted across
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              9 Major CNC Brands
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {BRANDS.map((brand, i) => (
              <ScrollReveal key={brand} delay={i * 60}>
                <div className="rounded-lg border border-border-light bg-white px-6 py-8 text-center">
                  <span className="font-mono text-xl font-medium text-machine-black md:text-2xl">
                    {brand}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABand headline="Need a repair? Let's talk." />
    </main>
  );
}
