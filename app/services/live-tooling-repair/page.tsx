import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Cog, Wrench, AlertTriangle, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import { PHONE, PHONE_LINK, TOOLING_BRANDS } from "@/data/content";

export const metadata: Metadata = {
  title:
    "Live Tooling Repair | Driven Tools Specialist | Alberti, Eppinger, WTO | AVI Industriel",
  description:
    "Specialist live tooling and driven tool repair across Quebec and Ontario. 22 years of field experience on Alberti, Eppinger, WTO, MT Marchetti, Evermore, and Hold Well live tooling units. Mobile service from Saint-Lazare.",
  alternates: {
    canonical: "https://avi-industriel.com/services/live-tooling-repair",
  },
};

const faqs = [
  {
    q: "What live tooling brands do you repair?",
    a: "We work on the major driven tool brands: Alberti, Eppinger, WTO, MT Marchetti, Evermore, and Hold Well. If your tooling brand isn't listed, call us — most live tooling units share the same internal architecture, so we can usually help.",
  },
  {
    q: "How long does a live tooling repair take?",
    a: "Most rebuilds take 3 to 7 working days once the unit is on our bench. We diagnose, replace bearings and seals, recheck runout, test under load, and document the work. Rush turnaround is available for urgent production issues.",
  },
  {
    q: "Do you travel on-site for live tooling repairs?",
    a: "Yes — we travel up to 700 km from our Saint-Lazare base across Quebec and Ontario, with same-day response in greater Montreal. We come to your shop, remove the unit, rebuild it, and reinstall it. For remote jobs that involve moving equipment, call us at (514) 971-1284 and we'll arrange the best logistics for your situation.",
  },
  {
    q: "How much does a live tooling repair cost?",
    a: "It depends on the unit and the failure mode. A bearing rebuild on a standard driven tool typically runs $800–$1,800 CAD. A full rebuild with new gears, shaft, and seals can reach $3,000+. We give you a firm quote after teardown — never an open invoice.",
  },
  {
    q: "What are the most common live tooling failures?",
    a: "Bearing wear from coolant ingress is by far the most common — runout climbs, you start scrapping parts, and the noise gets louder. After that: gear damage from a crash, broken drive shaft, and seal leaks letting coolant into the gear chamber.",
  },
  {
    q: "Why use AVI instead of buying a new live tooling unit?",
    a: "A new Eppinger or WTO unit can run $4,000–$15,000+. A rebuild costs a fraction of that and restores the unit to spec — runout under 5 microns, full torque rating, like-new bearings and seals. New units are still the right call for catastrophic damage, but for the common bearing-and-seal failure, repair pays for itself the first week.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Live tooling and driven tool repair",
  name: "Live Tooling Repair",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://avi-industriel.com/#business",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Quebec" },
    { "@type": "AdministrativeArea", name: "Ontario" },
  ],
  description:
    "Repair, rebuild, and reconditioning of live tooling and driven tool units for CNC lathes. Specialist in Alberti, Eppinger, WTO, MT Marchetti, Evermore, and Hold Well.",
};

const symptoms = [
  "Bearing noise or grinding under load",
  "Runout out of spec — parts going out of tolerance",
  "Coolant inside the gear chamber (visible leak)",
  "Loss of torque or stalling under cut",
  "Broken drive shaft after a crash",
  "Tool slipping in the holder",
];

export default function LiveToolingRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-graphite grid-texture pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="hero-glow-1 absolute w-[500px] h-[500px] rounded-full bg-signal/[0.04] blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-signal">
                Specialist service
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-bright md:text-6xl">
                Live tooling repair, by someone who's done it for 22 years.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-steel-light md:text-xl">
                Driven tools and live tooling units rebuilt to spec. Alberti,
                Eppinger, WTO, MT Marchetti, Evermore, Hold Well. Mobile
                service from Saint-Lazare across Quebec and Ontario.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-4 text-base font-bold text-white transition-colors hover:bg-signal-dark"
                >
                  <Phone className="h-5 w-5" />
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-bright px-6 py-3 text-sm font-medium text-bright transition-colors hover:bg-white/5"
                >
                  Request a quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brands serviced */}
        <section className="bg-workshop py-20">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.1em] text-dust">
                Brands we service
              </p>
              <h2 className="mt-2 text-2xl font-bold text-machine-black md:text-3xl">
                Six tooling brands. One specialist.
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {TOOLING_BRANDS.map((brand, i) => (
                <ScrollReveal key={brand} delay={i * 60}>
                  <div className="border border-border-light bg-white px-6 py-8 text-center hover:border-signal transition-colors">
                    <p className="font-mono text-xl font-bold text-machine-black">
                      {brand}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-shop-grey">
              Tooling brand not listed? Call us. Most driven tools share the
              same internal architecture — we can usually help regardless of
              the badge on the housing.
            </p>
          </div>
        </section>

        {/* Symptoms / when to call */}
        <section className="bg-concrete py-20">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.1em] text-dust">
                When to call us
              </p>
              <h2 className="mt-2 text-2xl font-bold text-machine-black md:text-3xl">
                Recognize the signs early — save the cut, save the part.
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {symptoms.map((symptom, i) => (
                <ScrollReveal key={symptom} delay={i * 50}>
                  <div className="flex items-start gap-3 border border-border-light bg-white px-5 py-4">
                    <AlertTriangle
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-urgent"
                      strokeWidth={2}
                    />
                    <p className="text-sm font-medium text-machine-black">
                      {symptom}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-graphite grid-texture py-20">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.1em] text-steel-light/60">
                What happens after you call
              </p>
              <h2 className="mt-2 text-2xl font-bold text-bright md:text-3xl">
                The repair process
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Diagnostic",
                  description:
                    "Bench inspection of the unit. Bearings, gears, seals, runout. We document the failure.",
                  icon: Wrench,
                },
                {
                  step: "02",
                  title: "Firm quote",
                  description:
                    "You get a quote with parts, labor, and turnaround — before any work starts.",
                  icon: Cog,
                },
                {
                  step: "03",
                  title: "Rebuild",
                  description:
                    "Bearings, seals, and gears replaced. Shaft inspected or replaced. Reassembled to spec.",
                  icon: Shield,
                },
                {
                  step: "04",
                  title: "Test & ship back",
                  description:
                    "Runout verified under 5 microns. Tested under load. Documented and returned ready to run.",
                  icon: Phone,
                },
              ].map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 80}>
                  <div>
                    <p className="font-mono text-xs text-signal">{s.step}</p>
                    <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                      <s.icon
                        className="h-5 w-5 text-signal"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-bright">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-light">
                      {s.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-workshop py-20">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.1em] text-dust">
                FAQ
              </p>
              <h2 className="mt-2 text-2xl font-bold text-machine-black md:text-3xl">
                Common questions
              </h2>
            </ScrollReveal>
            <div className="mt-10 divide-y divide-border-light border-y border-border-light">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 40}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <h3 className="text-base font-semibold text-machine-black">
                        {faq.q}
                      </h3>
                      <span className="mt-1 text-2xl font-light text-signal transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-shop-grey">
                      {faq.a}
                    </p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABand headline="Live tooling making noise? Send it before it scraps a part." />
      </main>
    </>
  );
}
