import { Eye, MessageCircle, DollarSign, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import GearSystem from "@/components/illustrations/GearSystem";

const PHILOSOPHY_ICON_MAP: Record<string, LucideIcon> = {
  Honesty: Eye,
  "Clear Communication": MessageCircle,
  "Fair Pricing": DollarSign,
  "Rapid Response": Zap,
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Page Header ── */}
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">
              About AVI Industriel
            </h1>
            <p className="mt-4 max-w-xl text-lg text-steel-light">
              Independent CNC diagnostics and repair, founded on honesty and
              20&nbsp;years of hands-on experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alexandre's Story ── */}
      <section className="relative bg-workshop py-24 overflow-hidden">
        <GearSystem className="absolute -right-10 top-10 w-[300px] opacity-[0.1] pointer-events-none float float-delay-2" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <blockquote className="border-l-4 border-signal pl-6 md:pl-8">
              <p className="text-xl leading-relaxed text-machine-black md:text-2xl">
                &ldquo;I started AVI because I saw too many shops getting burned
                &mdash; overcharged for parts they didn&rsquo;t need, told a
                machine was dead when it just needed a drive replaced. I wanted
                to be the person I&rsquo;d want to call if my own machine went
                down: honest, fast, and fair.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-signal/10" />
              <div>
                <p className="font-semibold text-machine-black">
                  Alexandre Bherer
                </p>
                <p className="text-sm text-shop-grey">
                  Founder &amp; Lead Technician
                </p>
                <p className="mt-0.5 text-xs text-dust">
                  20 years experience
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Our philosophy
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              How we work
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Honesty",
                description:
                  "We diagnose first and recommend second. If a machine can be repaired instead of replaced, we tell you. If a part is failing but not critical yet, we give you a timeline so you can plan. No surprises, no inflated quotes.",
              },
              {
                title: "Clear Communication",
                description:
                  "You get a call when we arrive, a clear explanation of what we find, and a written report before we leave. We speak in plain language, not manufacturer jargon. You always know what we did and why.",
              },
              {
                title: "Fair Pricing",
                description:
                  "We charge for what we do, not for what we could upsell. Our rates are competitive because we work efficiently and we only bill for time spent solving your problem. No travel markup games, no mystery charges.",
              },
              {
                title: "Rapid Response",
                description:
                  "A machine down means production stopped and money lost. We respond same-day in Greater Montreal. For emergencies, we drop what we can to get to your shop. We understand urgency because we come from the shop floor ourselves.",
              },
            ].map((item, i) => (
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
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Credentials
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              Certified expertise
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
                  Certified Electro-Mechanic
                </p>
                <p className="text-sm text-shop-grey">
                  Provincially certified with 20 years of field experience
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="bg-concrete py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Coverage
            </p>
            <h2 className="mt-2 text-3xl font-bold text-machine-black md:text-4xl">
              Based in Greater Montreal. Ready to travel.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-shop-grey">
              Our home base is the Greater Montreal area, where we offer
              same-day response for emergencies. We regularly service shops
              across the South Shore, North Shore, Laval, and the Eastern
              Townships. For specialized jobs, we travel throughout Quebec and
              beyond &mdash; wherever the machine needs us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABand headline="Ready to work with us?" />
    </main>
  );
}
