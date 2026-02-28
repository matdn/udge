import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Nous Contacter",
  description: "Contacter l’équipe : question, suggestion, proposition, avis, demande de rendez-vous.",
};

export default function ContactPage() {
  return (
    <EditorialPage
      title="Nous Contacter"
      chapo="Une question, une suggestion, une proposition, un avis ? Écrivez-nous : on vous répond rapidement."
      actions={null}
    >
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Nous contacter</h2>
        <p className="programme-p">
          Vous pouvez aussi écrire directement à <a className="underline" href="mailto:levesinetpourtous@gmail.com">levesinetpourtous@gmail.com</a>.
        </p>

        <form className="mt-6 grid gap-4" method="post" action="/api/contact">
          <input type="hidden" name="page" value="/contact" />
          <div className="hidden">
            <label>
              Ne pas remplir
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

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
            <span className="text-sm font-semibold text-zinc-950">Message *</span>
            <textarea
              required
              name="message"
              rows={6}
              className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-black/15"
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-zinc-700">
            <input
              required
              name="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-black/20 bg-white"
            />
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
