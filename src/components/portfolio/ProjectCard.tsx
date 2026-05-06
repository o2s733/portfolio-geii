import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <div className="project-icon" aria-hidden="true">
          <Icon />
        </div>
        <span>{project.label}</span>
      </div>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <div className="skill-row" aria-label="Compétences mobilisées">
        {project.skills.map((skill) => (
          <span key={skill} className="spec-pill">
            {skill}
          </span>
        ))}
      </div>
      <Link to={project.route} className="cta-link">
        Ouvrir <ArrowRight aria-hidden="true" />
      </Link>
    </article>
  );
}
