import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <EditorialPage title="Politique de confidentialité" chapo="Transparence : à quoi servent les données collectées via les formulaires.">
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">Données collectées</h2>
        <p className="programme-p">
          Les formulaires collectent uniquement les informations nécessaires pour répondre à votre demande. Page à personnaliser.
        </p>
      </section>
    </EditorialPage>
  );
}
