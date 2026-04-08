import type { Metadata } from "next";
import { Eye, MessageCircle, DollarSign, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "\u00c0 propos | AVI Industriel Inc.",
  description:
    "Alexandre Vachon, \u00e9lectrom\u00e9canicien certifi\u00e9 avec 20 ans d\u2019exp\u00e9rience en diagnostic et r\u00e9paration CNC. 15 marques, Grand Montr\u00e9al. Ind\u00e9pendant et honn\u00eate.",
  alternates: { canonical: "https://aviindustriel.com/fr/about" },
};
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import GearSystem from "@/components/illustrations/GearSystem";
import { UI_FR } from "@/data/content-fr";

const PHILOSOPHY_ICON_MAP: Record<string, LucideIcon> = {
  "Honnêteté": Eye,
  "Communication claire": MessageCircle,
  "Prix justes": DollarSign,
  "Réponse rapide": Zap,
};

export default function AboutPageFR() {
  return (
    <main>
      {/* -- Page Header -- */}
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">
              {UI_FR.about.pageTitle}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Alexandre's Story -- */}
      <section className="relative bg-workshop py-24 overflow-hidden">
        <GearSystem className="absolute -right-10 top-10 w-[300px] opacity-[0.1] pointer-events-none float float-delay-2" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust mb-4">
              {UI_FR.about.storyLabel}
            </p>
            <blockquote className="border-l-4 border-signal pl-6 md:pl-8">
              <p className="text-xl leading-relaxed text-machine-black md:text-2xl">
                &laquo;&nbsp;{UI_FR.about.storyQuote}&nbsp;&raquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-signal/10" />
              <div>
                <p className="font-semibold text-machine-black">
                  {UI_FR.about.storyName}
                </p>
                <p className="text-sm text-shop-grey">
                  {UI_FR.about.storyTitle}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Philosophy -- */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.about.philosophyLabel}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.about.philosophyLabel}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {UI_FR.about.philosophyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="rounded-lg border border-border-light bg-white p-8">
                  {(() => {
                    const Icon = PHILOSOPHY_ICON_MAP[item.title];
                    return Icon ? (
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                        <Icon className="h-5 w-5 text-signal" strokeWidth={2} />
                      </div>
                    ) : null;
                  })()}
                  <h3 className="text-lg font-semibold text-machine-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-shop-grey">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Certifications -- */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.about.certLabel}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.about.certTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 inline-flex items-center gap-4 rounded-lg border border-signal/30 bg-signal/5 px-8 py-6">
              <svg
                className="h-10 w-10 text-signal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <div>
                <p className="text-lg font-semibold text-machine-black">
                  {UI_FR.about.certTitle}
                </p>
                <p className="text-sm text-shop-grey">
                  {UI_FR.about.certDesc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Service Area -- */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.about.areaLabel}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.about.areaTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-shop-grey">
              {UI_FR.about.areaDesc}
            </p>
          </ScrollReveal>
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
