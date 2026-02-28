import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: "Déclaration d’accessibilité.",
};

export default function AccessibilitePage() {
  return (
    <EditorialPage title="Accessibilité" chapo="Objectif : un site lisible, navigable au clavier et compatible lecteurs d’écran.">
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Déclaration</h2>
        <p className="programme-p">
          Page à compléter (niveau de conformité, contact, voie de recours). Le site inclut déjà un lien d’évitement (skip link) et des composants focusables.
        </p>
      </section>
    </EditorialPage>
  );
}
