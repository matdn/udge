import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Le Vésinet pour tous — Municipales 2026",
    template: "%s — Le Vésinet pour tous",
  },
  description:
    "Liste citoyenne d’Union de la gauche et des écologistes — Municipales 2026 au Vésinet.",
  openGraph: {
    title: "Le Vésinet pour tous — Municipales 2026",
    description:
      "Programme, 12 mesures, équipe, actualités, documents et formulaires pour agir.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-zinc-950 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
