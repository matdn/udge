import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";
import { candidats } from "@/content/equipe";

export const metadata: Metadata = {
  title: "L’équipe",
  description: "Une équipe intergénérationnelle et engagée.",
};

export default function EquipePage() {
  return (
    <EditorialPage
      title="L’équipe"
      chapo="34 candidates et candidats, issus de tous les horizons."
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Les candidates et candidats</h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[520px] border-separate border-spacing-0 text-sm">
            <colgroup>
              <col className="w-[3.25rem]" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th className="border-b border-black/10 px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  N°
                </th>
                <th className="border-b border-black/10 px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Nom
                </th>
                <th className="border-b border-black/10 px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Profession
                </th>
              </tr>
            </thead>
            <tbody>
              {candidats.map((c) => (
                <tr key={c.slug} className="align-top">
                  <td className="border-b border-black/10 px-3 py-3 text-right font-semibold tabular-nums text-zinc-500">
                    {String(c.number).padStart(2, "0")}
                  </td>
                  <td className="border-b border-black/10 px-3 py-3 font-semibold text-zinc-950">
                    {c.name}
                  </td>
                  <td className="border-b border-black/10 px-3 py-3 text-zinc-700">
                    {c.profession}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </EditorialPage>
  );
}
