import type { Metadata } from "next";
import Image from "next/image";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Télécharger la circulaire, le bulletin de vote, l’affiche A1 et les informations pratiques.",
};

type DocLink = {
  title: string;
  description: string;
  openHref: string;
  downloadHref?: string;
  downloadName?: string;
};

const docs: DocLink[] = [
  {
    title: "Circulaire (PDF)",
    description: "Circulaire officielle de campagne.",
    openHref: "/documents/circulaire.pdf",
    downloadHref: "/documents/circulaire.pdf",
    downloadName: "circulaire-le-vesinet-pour-tous.pdf",
  },
  {
    title: "Affiche A1 (Google Drive)",
    description: "Affiche grand format — ouverture et téléchargement via Google Drive.",
    openHref:
      "https://drive.google.com/file/d/1m_jvDe1EHmi5XyYAQRBdJdqMJV4u2Wp9/view",
    downloadHref:
      "https://drive.google.com/uc?export=download&id=1m_jvDe1EHmi5XyYAQRBdJdqMJV4u2Wp9",
  },
  {
    title: "Bulletin de vote (PDF)",
    description: "Bulletin de vote — version numérique.",
    openHref: "/documents/bulletin.pdf",
    downloadHref: "/documents/bulletin.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <EditorialPage
      title="Documents"
      chapo="Télécharger les documents utiles (PDF)."
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Téléchargements</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {docs.map((d) => (
            <div key={d.openHref} className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
              <p className="text-sm font-semibold text-zinc-950">{d.title}</p>
              <p className="mt-2 text-sm text-zinc-700">{d.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {(() => {
                  const downloadHref = d.downloadHref ?? d.openHref;
                  const isLocalDownload = downloadHref.startsWith("/");
                  const downloadAttr = isLocalDownload ? (d.downloadName ?? true) : undefined;

                  return (
                <a
                  href={downloadHref}
                  download={downloadAttr}
                  className="rounded-full bg-[#ffd84a] px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-[#ffcf2e]"
                >
                  Télécharger
                </a>
                  );
                })()}
                <a
                  href={d.openHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 ring-1 ring-black/15 shadow-sm transition hover:bg-zinc-50"
                >
                  Ouvrir
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Informations pratiques</h2>
        <p className="programme-p">
          🗳 Élections municipales : 15 et 22 mars 2026.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
            <p className="text-sm font-semibold text-zinc-950">Affichage web</p>
            <p className="mt-2 text-sm text-zinc-700">Visuels et documents adaptés au partage.</p>
            <div className="mt-4 card overflow-hidden">
              <Image
                src="/imageListe.jpeg"
                alt="Visuel de campagne"
                width={1200}
                height={800}
                className="h-[220px] w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/10">
            <p className="text-sm font-semibold text-zinc-950">Besoin de documents spécifiques ?</p>
            <p className="mt-2 text-sm text-zinc-700">
              Écrivez-nous, on vous envoie la bonne version.
            </p>
            <div className="mt-4">
              <a className="underline" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
