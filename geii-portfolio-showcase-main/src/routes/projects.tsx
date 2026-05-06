import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projets SAE GEII – Portfolio" },
      {
        name: "description",
        content:
          "Trois projets SAE détaillés : shield NANO, multimètre et régulation de température.",
      },
      { property: "og:title", content: "Projets SAE GEII – Portfolio" },
      {
        property: "og:description",
        content:
          "Études de projets GEII avec contexte, méthode, outils et valeur recruteur.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/projects") {
    return <Outlet />;
  }

  return (
    <main className="site-shell">
      <section className="page-hero section-reveal">
        <p className="eyebrow">SAE</p>
        <h1>Projets SAE</h1>
        <p>
          Trois projets menés pendant la formation BUT GEII à l'IUT de Troyes.
          Chaque SAE mobilise des apprentissages critiques du référentiel — cliquez
          sur une carte pour en voir le détail.
        </p>
      </section>
      <section
        className="project-grid section-reveal"
        aria-label="Liste des projets SAE"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
