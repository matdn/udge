import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Actualités de campagne : articles, annonces, comptes rendus.",
};

const demo = [
  { slug: "bienvenue", title: "Bienvenue", excerpt: "Première actu (exemple)." },
  { slug: "12-mesures", title: "Nos 12 mesures", excerpt: "Lecture rapide des premières mesures." },
  { slug: "rejoindre", title: "Rejoindre la campagne", excerpt: "Bénévolat, newsletter, mouvements." },
];

export default function ActusPage() {
  return (
    <EditorialPage
      title="Actualités"
      chapo="Articles, annonces et rendez-vous — page prête à être branchée sur un mini CMS fichier."
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Derniers articles</h2>
        <div className="mt-6 grid gap-3">
          {demo.map((a) => (
            <Link
              key={a.slug}
              href={`/actus/${a.slug}`}
              className="block rounded-2xl bg-white p-5 ring-1 ring-black/10 transition hover:bg-zinc-50"
            >
              <p className="text-sm font-semibold text-zinc-950">{a.title}</p>
              <p className="mt-1 text-sm text-zinc-700">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </EditorialPage>
  );
}
