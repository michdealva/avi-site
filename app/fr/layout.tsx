import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVI Industriel Inc. | Diagnostic et réparation CNC | Montréal",
  description:
    "Votre CNC est en panne. On la remet en marche. Diagnostic et réparation électromécanique indépendant. 20 ans d'expérience, 15 marques majeures. Grand Montréal.",
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
