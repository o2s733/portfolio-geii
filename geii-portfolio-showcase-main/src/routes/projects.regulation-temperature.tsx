import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/portfolio/ProjectDetailPage";

export const Route = createFileRoute("/projects/regulation-temperature")({
  head: () => ({
    meta: [
      { title: "Régulation de température — Projet SAE GEII" },
      { name: "description", content: "Projet SAE GEII de régulation de température : capteur, commande, stabilité et analyse de réponse." },
      { property: "og:title", content: "Régulation de température — Projet SAE GEII" },
      { property: "og:description", content: "Étude de projet sur la régulation, l’automatisme et l’analyse d’un système thermique." },
    ],
  }),
  component: () => <ProjectDetailPage slug="regulation-temperature" />,
});
