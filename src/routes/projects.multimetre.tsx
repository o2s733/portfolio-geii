import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/portfolio/ProjectDetailPage";

export const Route = createFileRoute("/projects/multimetre")({
  head: () => ({
    meta: [
      { title: "Conception du multimètre — Projet SAE GEII" },
      { name: "description", content: "Projet SAE GEII de conception d’un multimètre : chaîne de mesure, conditionnement, acquisition et validation." },
      { property: "og:title", content: "Conception du multimètre — Projet SAE GEII" },
      { property: "og:description", content: "Étude de projet orientée instrumentation, précision, incertitudes et méthode de mesure." },
    ],
  }),
  component: () => <ProjectDetailPage slug="multimetre" />,
});
