"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "All Machines", exact: true, section: "inventory" },
  { href: "/dashboard/new", label: "Add Machine", section: "inventory" },
  { href: "/dashboard/brand-guidelines", label: "Brand Guidelines", section: "resources" },
  { href: "/dashboard/linkedin", label: "LinkedIn Strategy", section: "resources" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  const inventoryLinks = links.filter((l) => l.section === "inventory");
  const resourceLinks = links.filter((l) => l.section === "resources");

  const renderLink = (link: typeof links[0]) => {
    const active = link.exact
      ? pathname === link.href
      : pathname?.startsWith(link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          active
            ? "bg-signal-subtle text-signal"
            : "text-dust hover:text-bright hover:bg-steel"
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="flex flex-col gap-4">
      <div>
        <p className="px-3 mb-2 text-[10px] uppercase tracking-[0.15em] text-dust/50 font-semibold">
          Inventory
        </p>
        <div className="flex flex-col gap-1">
          {inventoryLinks.map(renderLink)}
        </div>
      </div>
      <div>
        <p className="px-3 mb-2 text-[10px] uppercase tracking-[0.15em] text-dust/50 font-semibold">
          Resources
        </p>
        <div className="flex flex-col gap-1">
          {resourceLinks.map(renderLink)}
        </div>
      </div>
    </nav>
  );
}
