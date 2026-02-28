import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/templates/EditorialPage";
import { candidats } from "@/content/equipe";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return candidats.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const candidate = candidats.find((c) => c.slug === slug);
  if (!candidate) return { title: "Équipe" };

  return {
    title: `${candidate.name} — Équipe`,
    description: `${candidate.name}, ${candidate.profession}.`,
  };
}

export default async function EquipeSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) return notFound();

  const candidate = candidats.find((c) => c.slug === slug);
  if (!candidate) return notFound();

  return (
    <EditorialPage title={candidate.name} chapo={candidate.profession}>
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Fiche</h2>
        <div className="mt-4 grid gap-2 text-sm text-zinc-700">
          <p>
            <span className="font-semibold text-zinc-950">N° :</span> {candidate.number}
          </p>
          <p>
            <span className="font-semibold text-zinc-950">Nom :</span> {candidate.name}
          </p>
          <p>
            <span className="font-semibold text-zinc-950">Profession :</span> {candidate.profession}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/equipe"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 ring-1 ring-black/15 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40"
          >
            Retour à la liste
          </Link>
        </div>
      </section>
    </EditorialPage>
  );
}
