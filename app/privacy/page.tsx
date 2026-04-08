import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { EMAIL } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy | AVI Industriel",
  description:
    "AVI Industriel privacy policy. Learn how we handle data collected through our quote request form. No cookies, no tracking, no third-party sharing.",
  alternates: { canonical: "https://aviindustriel.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-steel-light">
              Last updated: April 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Data We Collect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              When you submit a quote request through our contact form, we
              collect the following information: your name, company name, email
              address, phone number, and details about your CNC machine
              (brand, model, controller type, and a description of the issue).
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              How We Use Your Data
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              We use the information you provide solely to respond to your
              service request, prepare a quote, and coordinate repair or
              diagnostic work. We do not use your data for marketing purposes
              unless you explicitly ask to be contacted about future services.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Cookies and Tracking
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              This website does not use cookies, analytics trackers, or any
              third-party tracking scripts. We do not collect browsing data,
              IP addresses, or device information beyond what is strictly
              necessary for the web server to deliver this site.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Third-Party Sharing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              We do not sell, rent, or share your personal information with
              any third parties. Your data stays with AVI Industriel Inc. and
              is used only for the purpose described above.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Data Retention
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              We retain quote request data for as long as necessary to provide
              our services and maintain records for potential follow-up work.
              You may request deletion of your data at any time by contacting
              us.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Contact Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              If you have questions about this privacy policy or want to
              request deletion of your data, contact us at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-signal underline underline-offset-4 transition-colors hover:text-signal-dark"
              >
                {EMAIL}
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
