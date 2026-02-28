import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site.",
};

export default function MentionsLegalesPage() {
  return (
    <EditorialPage title="Mentions légales" chapo="Page à compléter avec les informations légales (éditeur, hébergeur, contact).">
      <section className="card p-7 md:p-9">
        <h2 className="programme-h2">À compléter</h2>
        <p className="programme-p">
          Ajoutez ici : responsable de publication, hébergeur, adresse, email, etc.
        </p>
      </section>
    </EditorialPage>
  );
}
