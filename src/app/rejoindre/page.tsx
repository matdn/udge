import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Nous rejoindre",
  description: "Aider pendant la campagne, être informé(e) sur Victoires Populaires, ou rejoindre le groupe local du Vésinet.",
};

export default function RejoindrePage() {
  return (
    <EditorialPage
      title="Nous rejoindre"
      chapo="Aider pendant la campagne, être informé(e) sur le mouvement Victoires Populaires, rejoindre le groupe local Victoires Populaires du Vésinet : choisissez votre parcours."
      actions={null}
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">3 parcours</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="programme-panel">
            <p className="programme-panel-title">1) Aider pendant la campagne</p>
            <p className="programme-p">
              Actions de terrain (tractage, porte-à-porte, réunions citoyennes, etc.) et/ou actions d’appels téléphoniques.
            </p>
          </div>
          <div className="programme-panel">
            <p className="programme-panel-title">2) Être informé(e) sur Victoires Populaires</p>
            <p className="programme-p">Recevoir les informations sur le mouvement Victoires Populaires.</p>
          </div>
          <div className="programme-panel">
            <p className="programme-panel-title">3) Rejoindre le groupe local</p>
            <p className="programme-p">
              Rejoindre le groupe local Victoires Populaires du Vésinet.
            </p>
          </div>
        </div>

        <h3 className="programme-h3">Formulaire</h3>
        <form className="mt-4 grid gap-4" method="post" action="/api/rejoindre">
          <input type="hidden" name="page" value="/rejoindre" />
          <div className="hidden">
            <label>
              Ne pas remplir
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <fieldset className="grid gap-2">
            <legend className="text-sm font-semibold text-zinc-950">Je choisis *</legend>
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input required type="radio" name="parcours" value="benevole" />
              Je veux aider pendant la campagne (bénévole)
            </label>
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input required type="radio" name="parcours" value="newsletter" />
              Je veux être informé(e) sur Victoires Populaires
            </label>
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input required type="radio" name="parcours" value="vp-groupe-local" />
              Je veux rejoindre le groupe local Victoires Populaires du Vésinet
            </label>
          </fieldset>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm font-semibold text-zinc-950">Prénom</span>
              <input
                name="firstName"
                className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
                autoComplete="given-name"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-semibold text-zinc-950">Nom</span>
              <input
                name="lastName"
                className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
                autoComplete="family-name"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm font-semibold text-zinc-950">Email *</span>
              <input
                required
                type="email"
                name="email"
                className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-semibold text-zinc-950">Téléphone (optionnel)</span>
              <input
                name="phone"
                className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
                autoComplete="tel"
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm font-semibold text-zinc-950">Message (optionnel)</span>
            <textarea
              name="message"
              rows={5}
              className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
              placeholder="Dites-nous comment vous souhaitez aider, ou vos disponibilités."
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-zinc-700">
            <input required name="consent" type="checkbox" className="mt-1 h-4 w-4" />
            <span>
              J’accepte que mes informations soient utilisées uniquement pour répondre à ma demande.
            </span>
          </label>

          <button
            type="submit"
            className="w-fit rounded-full bg-[#ffd84a] px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-[#ffcf2e]"
          >
            Envoyer
          </button>

          <p className="text-xs text-zinc-600">
            Anti-spam : honeypot + limitation de débit côté serveur.
          </p>
        </form>
      </section>
    </EditorialPage>
  );
}
