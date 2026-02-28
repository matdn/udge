import type { Metadata } from "next";
import { EditorialPage } from "@/components/templates/EditorialPage";
import { programmeToc, ProgrammeContent } from "@/content/programme";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Le programme complet : engagements, priorités et mesures phares pour Le Vésinet (municipales 2026).",
};

export default function ProgrammePage() {
  return (
    <EditorialPage
      title="Programme"
      chapo="Le programme complet, structuré par thèmes, avec une lecture simple et des mesures phares."
      toc={programmeToc}
    >
      <ProgrammeContent />
    </EditorialPage>
  );
}
