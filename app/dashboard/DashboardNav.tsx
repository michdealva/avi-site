"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "All Machines", exact: true },
  { href: "/dashboard/new", label: "Add Machine" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
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
      })}
    </nav>
  );
}
