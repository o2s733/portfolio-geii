import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/portfolio/ProjectDetailPage";

export const Route = createFileRoute("/projects/shield-nano")({
  head: () => ({
    meta: [
      { title: "Conception du shield NANO — Projet SAE GEII" },
      { name: "description", content: "Projet SAE GEII de conception d’un shield Arduino Nano : schéma, routage, tests et validation." },
      { property: "og:title", content: "Conception du shield NANO — Projet SAE GEII" },
      { property: "og:description", content: "Étude de projet centrée sur la conception électronique embarquée et la fiabilisation d’un prototype." },
    ],
  }),
  component: () => <ProjectDetailPage slug="shield-nano" />,
});
