"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE, PHONE_LINK } from "@/data/content";

interface CTABandProps {
  headline: string;
}

export default function CTABand({ headline }: CTABandProps) {
  return (
    <section className="bg-graphite grid-texture py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_LINK}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-signal px-8 font-heading text-sm font-semibold text-white transition-colors hover:bg-signal-dark"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-8 font-heading text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Request a Quote
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
