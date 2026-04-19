import type { Metadata } from "next";
import Link from "next/link";
import { client, MACHINES_QUERY } from "@/sanity/client";
import { PHONE, PHONE_LINK } from "@/data/content";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Used CNC Machines for Sale | AVI Industriel",
  description:
    "Browse our inventory of inspected used CNC machines. Lathes, mills, machining centers from Makino, Mazak, Haas, Fanuc, and more. Greater Montreal.",
};

export const revalidate = 60; // Revalidate every 60 seconds

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
  location: string;
  inspectionAvailable: boolean;
  mainImage: string | null;
  description: string;
}

export default async function InventoryPage() {
  let machines: Machine[] = [];

  if (client) {
    try {
      machines = await client.fetch(MACHINES_QUERY);
    } catch {
      // Sanity query failed, show empty state
    }
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-graphite grid-texture pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-black tracking-[-0.04em] text-bright md:text-6xl">
            Used CNC Machines
          </h1>
          <p className="mt-4 max-w-xl text-lg text-steel-light">
            Inspected, verified, ready to run. Browse available machines or contact us for specific needs.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3 font-semibold text-white transition-colors hover:bg-signal-dark"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <span className="text-sm text-steel-light">Looking for something specific? Call us.</span>
          </div>
        </div>
      </section>

      {/* Machine grid */}
      <section className="bg-workshop py-16">
        <div className="mx-auto max-w-6xl px-6">
          {machines.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-concrete mb-6">
                <svg className="w-8 h-8 text-dust" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-machine-black mb-2">
                No machines listed yet
              </h2>
              <p className="text-shop-grey text-sm max-w-md mx-auto">
                Our inventory is being updated. Contact us directly if you're looking for a specific machine or want to list one for sale.
              </p>
              <a
                href={PHONE_LINK}
                className="mt-6 inline-flex items-center gap-2 text-signal font-semibold hover:text-signal-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm text-dust">
                  {machines.length} machine{machines.length !== 1 ? "s" : ""} available
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {machines.map((machine) => (
                  <Link
                    key={machine._id}
                    href={`/inventory/${machine.slug.current}`}
                    className="group block rounded-lg border border-border-light bg-white overflow-hidden hover:border-signal transition-colors"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] bg-concrete overflow-hidden">
                      {machine.mainImage ? (
                        <img
                          src={machine.mainImage}
                          alt={machine.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-dust/30" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      {/* Status badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-dust uppercase">{machine.brand}</span>
                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                          machine.status === "available"
                            ? "bg-signal/10 text-signal"
                            : "bg-amber-50 text-amber-600"
                        }`}>
                          {machine.status === "available" ? "Available" : "Pending"}
                        </span>
                      </div>

                      <h3 className="font-semibold text-machine-black text-base mb-1 group-hover:text-signal transition-colors">
                        {machine.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-dust mt-2">
                        {machine.year && <span>{machine.year}</span>}
                        {machine.machineType && (
                          <>
                            <span>&middot;</span>
                            <span>{machine.machineType}</span>
                          </>
                        )}
                        {machine.location && (
                          <>
                            <span>&middot;</span>
                            <span>{machine.location}</span>
                          </>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-mono text-lg font-bold text-signal">
                          {machine.price
                            ? `$${machine.price.toLocaleString()}`
                            : "Contact for price"}
                        </span>
                        {machine.inspectionAvailable && (
                          <span className="text-[10px] text-dust border border-border-light rounded px-2 py-0.5">
                            AVI Inspected
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite grid-texture py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-bright md:text-3xl">
            Have a machine to sell?
          </h2>
          <p className="mt-3 text-steel-light text-base">
            We inspect, list, and help sell your CNC equipment. No upfront fees.
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
