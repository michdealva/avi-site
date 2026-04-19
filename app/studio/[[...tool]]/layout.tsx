/**
 * Studio layout - isolated from the main site layout (no header/footer).
 */

export const metadata = {
  title: "AVI Industriel Studio",
  description: "Content management for AVI Industriel",
  robots: "noindex, nofollow",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
