import { notFound } from "next/navigation";
import Link from "next/link";
import { client, MACHINE_BY_SLUG_QUERY } from "@/sanity/client";
import { PHONE, PHONE_LINK, EMAIL } from "@/data/content";
import { Phone, ArrowLeft, MapPin, Clock, Gauge, Ruler, Weight, CheckCircle } from "lucide-react";

export const revalidate = 60;

interface Machine {
  _id: string;
  title: string;
  slug: { current: string };
  brand: string;
  model: string;
  year: number;
  price: number | null;
  status: string;
  machineType: string;
  controlType: string;
  axes: number;
  spindleRPM: number;
  tableSize: string;
  travels: string;
  hours: number;
  weight: string;
  location: string;
  inspectionAvailable: boolean;
  description: string;
  photos: string[];
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let machine: Machine | null = null;
  if (client) {
    try {
      machine = await client.fetch(MACHINE_BY_SLUG_QUERY, { slug });
    } catch {
      // Sanity query failed
    }
  }

  if (!machine) {
    notFound();
  }

  const specs = [
    { label: "Brand", value: machine.brand, icon: null },
    { label: "Model", value: machine.model, icon: null },
    { label: "Year", value: machine.year?.toString(), icon: Clock },
    { label: "Type", value: machine.machineType, icon: null },
    { label: "Control", value: machine.controlType, icon: null },
    { label: "Axes", value: machine.axes?.toString(), icon: null },
    { label: "Max RPM", value: machine.spindleRPM?.toLocaleString(), icon: Gauge },
    { label: "Table/Chuck", value: machine.tableSize, icon: Ruler },
    { label: "Travels (X/Y/Z)", value: machine.travels, icon: null },
    { label: "Spindle Hours", value: machine.hours?.toLocaleString(), icon: Clock },
    { label: "Weight", value: machine.weight, icon: Weight },
    { label: "Location", value: machine.location, icon: MapPin },
  ].filter((s) => s.value);

  return (
    <main>
      {/* Back link */}
      <section className="bg-graphite pt-24 pb-4">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 text-sm text-steel-light hover:text-bright transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to inventory
          </Link>
        </div>
      </section>

      <section className="bg-graphite grid-texture pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Photos */}
            <div>
              {machine.photos && machine.photos.length > 0 ? (
                <div className="space-y-3">
                  {/* Main photo */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-steel">
                    <img
                      src={machine.photos[0]}
                      alt={machine.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  {machine.photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {machine.photos.slice(1, 5).map((photo, i) => (
                        <div key={i} className="aspect-square rounded-lg overflow-hidden bg-steel">
                          <img
                            src={photo}
                            alt={`${machine.title} photo ${i + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-lg bg-steel flex items-center justify-center">
                  <svg className="w-16 h-16 text-dust/20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Status + brand */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm text-steel-light uppercase tracking-wider">
                  {machine.brand}
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                  machine.status === "available"
                    ? "bg-signal/20 text-signal"
                    : machine.status === "pending"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-red-500/20 text-red-400"
                }`}>
                  {machine.status}
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-[-0.03em] text-bright md:text-4xl">
                {machine.title}
              </h1>

              {/* Price */}
              <div className="mt-4">
                <span className="font-mono text-3xl font-bold text-signal">
                  {machine.price
                    ? `$${machine.price.toLocaleString()} CAD`
                    : "Contact for price"}
                </span>
              </div>

              {/* AVI Inspection badge */}
              {machine.inspectionAvailable && (
                <div className="mt-4 inline-flex items-center gap-2 bg-signal/10 border border-signal/20 rounded-lg px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-signal" />
                  <span className="text-sm text-signal font-medium">AVI Inspection Available</span>
                </div>
              )}

              {/* Description */}
              {machine.description && (
                <div className="mt-6">
                  <p className="text-sm text-steel-light leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              )}

              {/* Contact CTAs */}
              <div className="mt-8 space-y-3">
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-4 font-semibold text-white transition-colors hover:bg-signal-dark w-full"
                >
                  <Phone className="h-5 w-5" />
                  Call {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Inquiry: ${machine.title}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-bright/20 px-8 py-4 font-medium text-bright transition-colors hover:bg-white/5 w-full"
                >
                  Email about this machine
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs table */}
      {specs.length > 0 && (
        <section className="bg-workshop py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-xl font-bold uppercase tracking-[0.02em] text-machine-black md:text-2xl mb-8">
              Technical Specifications
            </h2>
            <div className="grid gap-px bg-border-light rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-white p-5 flex items-start gap-3"
                >
                  {spec.icon && <spec.icon className="h-4 w-4 text-signal mt-0.5 flex-shrink-0" />}
                  <div>
                    <p className="text-[11px] font-medium tracking-[2px] uppercase text-dust">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-machine-black mt-1">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-graphite grid-texture py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-bright">Interested in this machine?</h2>
          <p className="mt-3 text-steel-light">
            We can arrange a viewing, provide a full inspection report, and coordinate shipping.
          </p>
          <a
            href={PHONE_LINK}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-signal px-8 py-4 font-semibold text-white transition-colors hover:bg-signal-dark"
          >
            <Phone className="h-4 w-4" />
            Call {PHONE}
          </a>
        </div>
      </section>
    </main>
  );
}
