"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  const isDashboard = pathname?.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  if (isStudio || isDashboard || isLogin) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="noise" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
