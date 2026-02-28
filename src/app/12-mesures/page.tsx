import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";
import { mesures } from "@/content/mesures";

export const metadata: Metadata = {
  title: "12 mesures dès 2026",
  description:
    "Lecture rapide : 12 premières mesures applicables dès 2026, avec détails au clic.",
};

export default function MesuresPage() {
  return (
    <EditorialPage
      title="12 mesures dès 2026"
      chapo="Lecture rapide : 12 décisions utiles, réalistes et applicables dès le début du mandat."
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Les 12 mesures</h2>
        <p className="programme-p">
          Cliquez sur une mesure pour voir le détail.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {mesures.map((m) => (
            <details
              key={m.slug}
              className="rounded-2xl bg-white p-5 ring-1 ring-black/10 open:bg-zinc-50"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffd84a] text-sm font-semibold text-zinc-950 ring-1 ring-black/10">
                    {m.number}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">{m.title}</p>
                    <p className="mt-1 text-sm text-zinc-600">{m.summary}</p>
                  </div>
                </div>
              </summary>

              <div className="mt-4">
                <p className="text-sm font-semibold text-zinc-950">Ce qu’on fait dès 2026</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">{m.des2026}</p>

                {m.details.length ? (
                  <ul className="programme-ul">
                    {m.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}

                {m.avecQui && m.avecQui.length ? (
                  <p className="mt-4 text-sm text-zinc-600">
                    <span className="font-semibold text-zinc-950">Avec qui :</span> {m.avecQui.join(", ")}
                  </p>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>
    </EditorialPage>
  );
}
