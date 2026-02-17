import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programme — Le Vésinet pour tous",
  description:
    "Programme : Le Vésinet pour tous — liste citoyenne d’Union de la gauche et des écologistes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
