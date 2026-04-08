import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE, PHONE_LINK, EMAIL, UI_FR } from "@/data/content-fr";
import QuoteFormFR from "./QuoteForm";

export const metadata: Metadata = {
  title: "Contactez-nous | AVI Industriel",
  description:
    "Appelez le (514) 971-1284 pour un diagnostic CNC le m\u00eame jour dans le Grand Montr\u00e9al, ou demandez une soumission en ligne. R\u00e9ponse en 2 heures.",
  alternates: { canonical: "https://aviindustriel.com/fr/contact" },
};

export default function ContactPageFR() {
  return (
    <main>
      {/* -- Phone Hero -- */}
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-5xl">
              {UI_FR.contact.phoneHero}
            </h1>
            <a
              href={PHONE_LINK}
              className="mt-8 inline-block font-mono text-4xl font-bold text-signal transition-colors hover:text-signal-dark md:text-6xl"
            >
              {PHONE}
            </a>
            <p className="mt-6 text-lg text-steel-light">
              {UI_FR.contact.phoneResponse}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Quote Form -- */}
      <section className="bg-workshop py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-machine-black md:text-4xl">
              {UI_FR.contact.formTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <QuoteFormFR />
          </ScrollReveal>
        </div>
      </section>

      {/* -- Alt Contact -- */}
      <section className="bg-concrete py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-base text-shop-grey">
              {UI_FR.contact.altContact}{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-signal underline underline-offset-4 transition-colors hover:text-signal-dark"
              >
                {EMAIL}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Service Area -- */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.1em] text-dust">
              {UI_FR.contact.areaTitle}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-machine-black">
              {UI_FR.contact.areaDesc}
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
