import Link from "next/link";
import Image from "next/image";
import { freshClient as client } from "@/sanity/client";
import DeleteMachineButton from "./DeleteMachineButton";

export const dynamic = "force-dynamic";

type MachineRow = {
  _id: string;
  title: string;
  brand?: string;
  model?: string;
  year?: number;
  price?: number;
  status?: "available" | "pending" | "sold";
  mainImage?: string;
  slug?: string;
};

const DASHBOARD_QUERY = `*[_type == "machine"] | order(_createdAt desc) {
  _id,
  title,
  brand,
  model,
  year,
  price,
  status,
  "mainImage": photos[0].asset->url,
  "slug": slug.current
}`;

function formatPrice(price?: number) {
  if (!price) return "Contact";
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function StatusBadge({ status }: { status?: string }) {
  const map: Record<string, { bg: string; text: string; label: string }> = {
    available: {
      bg: "bg-signal-subtle",
      text: "text-signal",
      label: "Available",
    },
    pending: {
      bg: "bg-[rgba(245,158,11,0.12)]",
      text: "text-urgent",
      label: "Pending",
    },
    sold: {
      bg: "bg-concrete",
      text: "text-shop-grey",
      label: "Sold",
    },
  };
  const s = map[status || "available"] || map.available;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${s.bg} ${s.text}`}
    >
      {s.label}
    </span>
  );
}

export default async function DashboardPage() {
  if (!client) {
    return (
      <div className="p-10">
        <p className="text-danger">
          Sanity client not configured. Check environment variables.
        </p>
      </div>
    );
  }

  const machines = await client.fetch<MachineRow[]>(DASHBOARD_QUERY);

  return (
    <div className="p-10 max-w-7xl">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-machine-black mb-1">
            Machine Inventory
          </h1>
          <p className="text-sm text-shop-grey">
            {machines.length} {machines.length === 1 ? "machine" : "machines"}{" "}
            total
          </p>
        </div>
        <Link
          href="/dashboard/new"
          className="bg-signal hover:bg-signal-dark text-machine-black font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          + Add Machine
        </Link>
      </div>

      {machines.length === 0 ? (
        <div className="bg-white border border-border-light rounded-xl p-12 text-center">
          <p className="text-shop-grey mb-4">No machines in the inventory.</p>
          <Link
            href="/dashboard/new"
            className="text-signal hover:text-signal-dark font-medium"
          >
            Add your first machine
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-border-light rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-concrete border-b border-border-light">
              <tr className="text-left text-xs font-medium text-shop-grey uppercase tracking-wider">
                <th className="px-6 py-3">Photo</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Brand</th>
                <th className="px-6 py-3">Year</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {machines.map((m) => (
                <tr key={m._id} className="hover:bg-workshop transition-colors">
                  <td className="px-6 py-4">
                    {m.mainImage ? (
                      <div className="relative w-20 h-[60px] bg-concrete rounded overflow-hidden">
                        <Image
                          src={m.mainImage}
                          alt={m.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-[60px] bg-concrete rounded flex items-center justify-center text-xs text-dust">
                        No photo
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-machine-black">
                      {m.title}
                    </div>
                    {m.model && (
                      <div className="text-xs text-shop-grey">{m.model}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-machine-black">
                    {m.brand || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-machine-black">
                    {m.year || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-machine-black">
                    {formatPrice(m.price)}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={m.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        href={`/dashboard/edit/${m._id}`}
                        className="text-sm text-machine-black hover:text-signal transition-colors"
                      >
                        Edit
                      </Link>
                      <DeleteMachineButton id={m._id} title={m.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
