import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSession } from "@/lib/getSession";
import DashboardNav from "./DashboardNav";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-workshop">
      <aside className="fixed top-0 left-0 h-screen w-64 bg-graphite grid-texture border-r border-border-dark flex flex-col">
        <div className="p-6 border-b border-border-dark">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/avi-logo.svg"
              alt="AVI Industriel"
              width={100}
              height={32}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(60%) sepia(85%) saturate(475%) hue-rotate(79deg) brightness(95%) contrast(90%)",
              }}
            />
          </Link>
          <p className="text-xs text-dust mt-2 uppercase tracking-wider">
            Inventory Dashboard
          </p>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <DashboardNav />
        </div>

        <div className="p-4 border-t border-border-dark space-y-1">
          <Link
            href="/"
            className="block text-sm text-dust hover:text-bright transition-colors py-2"
          >
            View Site
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <main className="ml-64 min-h-screen bg-workshop">{children}</main>
    </div>
  );
}
