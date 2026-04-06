import ScrollReveal from "@/components/ScrollReveal";
import { PHONE, PHONE_LINK, EMAIL } from "@/data/content";
import QuoteForm from "./QuoteForm";

export default function ContactPage() {
  return (
    <main>
      {/* ── Phone Hero ── */}
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-5xl">
              Need help now?
            </h1>
            <a
              href={PHONE_LINK}
              className="mt-8 inline-block font-mono text-4xl font-bold text-signal transition-colors hover:text-signal-dark md:text-6xl"
            >
              {PHONE}
            </a>
            <p className="mt-6 text-lg text-steel-light">
              We respond within 2 hours during business hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-machine-black md:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-2 text-base text-shop-grey">
              Tell us about your machine and we&rsquo;ll get back to you with
              next steps.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <QuoteForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alt Contact ── */}
      <section className="bg-concrete py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-base text-shop-grey">
              Prefer email?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-signal underline underline-offset-4 transition-colors hover:text-signal-dark"
              >
                {EMAIL}
              </a>
            </p>
            <p className="mt-3 text-sm text-dust">
              Not urgent? Book a consultation and we&rsquo;ll discuss your
              maintenance needs at your pace.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              Service area
            </p>
            <h2 className="mt-2 text-2xl font-bold text-machine-black">
              Greater Montreal &amp; beyond
            </h2>
            <p className="mt-4 text-base text-shop-grey">
              Same-day response in Greater Montreal. We also travel across
              Quebec for specialized jobs.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
