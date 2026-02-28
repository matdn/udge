import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/templates/EditorialPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug, description: "Article" };
}

export default async function ActuPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) return notFound();

  return (
    <EditorialPage title="Actualité" chapo="Page article (exemple).">
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">{slug}</h2>
        <p className="programme-p">
          À brancher sur le contenu (MD/MDX) + tags + pagination.
        </p>
      </section>
    </EditorialPage>
  );
}
