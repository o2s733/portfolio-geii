import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ExternalLink } from "lucide-react";
import { projectDetails } from "@/data/portfolio";

type ProjectSlug = keyof typeof projectDetails;

const AC_LABELS: Record<string, string> = {
  "AC11.01": "Analyse fonctionnelle",
  "AC11.02": "Prototype matériel/logiciel",
  "AC11.03": "Dossier de fabrication",
  "AC12.01": "Procédure d'essais",
  "AC12.02": "Identifier un dysfonctionnement",
  "AC12.03": "Décrire un dysfonctionnement",
};

export function ProjectDetailPage({ slug }: { slug: ProjectSlug }) {
  const project = projectDetails[slug];
  const Icon = project.icon;

  return (
    <main className="site-shell">
      {/* Hero */}
      <section className="detail-hero section-reveal">
        <Link to="/projects" className="back-link">
          <ArrowLeft aria-hidden="true" /> Retour aux SAE
        </Link>
        <div className="detail-icon" aria-hidden="true">
          <Icon />
        </div>
        <p className="eyebrow">SAE</p>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        {project.highlights.length > 0 && (
          <div className="skill-row">
            {project.highlights.map((highlight) => (
              <span key={highlight} className="spec-pill">
                {highlight}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Compétences AC */}
      <section className="page-section section-reveal">
        <div className="section-heading">
          <p className="eyebrow">Référentiel BUT GEII</p>
          <h2>Apprentissages critiques mobilisés</h2>
        </div>
        <div className="ac-chips-row">
          {project.skills.map((ac) => (
            <Link
              key={ac}
              to="/competences"
              className="ac-chip-link"
              title={`Voir la compétence ${ac}`}
            >
              <span className="ac-chip-code">{ac}</span>
              <span className="ac-chip-label">{AC_LABELS[ac] ?? ac}</span>
              <ExternalLink aria-hidden="true" className="ac-chip-arrow" />
            </Link>
          ))}
        </div>
      </section>

      {/* Contexte + Enjeu */}
      <section
        className="content-grid section-reveal"
        aria-label="Analyse du projet"
      >
        <article className="glass-panel span-7">
          <p className="eyebrow">Contexte</p>
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </article>
        <article className="glass-panel span-5">
          <p className="eyebrow">Enjeu</p>
          <h2>Enjeu</h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      {/* Méthode */}
      <section className="page-section section-reveal">
        <div className="section-heading">
          <p className="eyebrow">Méthode</p>
          <h2>Méthode</h2>
        </div>
        <div className="timeline-list">
          {project.method.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie photos */}
      {project.images && project.images.length > 0 && (
        <section className="page-section section-reveal">
          <div className="section-heading">
            <p className="eyebrow">Réalisation</p>
            <h2>Photos du projet</h2>
          </div>
          <div className="sae-gallery">
            {project.images.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item"
              >
                <img
                  src={src}
                  alt={`${project.title} — vue ${i + 1}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Espace images personnelles */}
      <section className="page-section section-reveal">
        <div className="section-heading">
          <p className="eyebrow">À compléter</p>
          <h2>Vos photos</h2>
        </div>
        <div className="image-placeholder-grid">
          <div className="image-placeholder">
            <span>📷 Ajouter une photo</span>
          </div>
          <div className="image-placeholder">
            <span>📷 Ajouter une photo</span>
          </div>
          <div className="image-placeholder">
            <span>📷 Ajouter une photo</span>
          </div>
        </div>
      </section>

      {/* Outils + Bilan */}
      {(project.tools.length > 0 || project.recruiterValue || project.pdfReport) && (
        <section
          className="content-grid section-reveal"
          aria-label="Outils et bilan"
        >
          {project.tools.length > 0 && (
            <article className="glass-panel span-5">
              <p className="eyebrow">Outils</p>
              <h2>Outils</h2>
              <div className="tool-list">
                {project.tools.map((tool) => (
                  <span key={tool}>
                    <CheckCircle2 aria-hidden="true" /> {tool}
                  </span>
                ))}
              </div>
            </article>
          )}
          {project.recruiterValue && (
            <article className="glass-panel span-7 emphasis-panel">
              <p className="eyebrow">Bilan</p>
              <h2>Bilan</h2>
              <p>{project.recruiterValue}</p>
            </article>
          )}
        </section>
      )}

      {/* Rapport PDF — uniquement pour régulation de température */}
      {project.pdfReport && (
        <section className="page-section section-reveal">
          <div className="section-heading">
            <p className="eyebrow">Documentation</p>
            <h2>Rapport PDF</h2>
          </div>
          <div className="pdf-block">
            <div className="pdf-icon-wrap" aria-hidden="true">
              <FileText />
            </div>
            <div>
              <p className="pdf-title">Rapport — Régulation de température</p>
              <p className="pdf-desc">
                Compte rendu complet : analyse fonctionnelle, schémas, réalisation
                et procédures d'essais.
              </p>
            </div>
            <div className="pdf-actions">
              <a
                href="/rapport_regulation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta"
              >
                Ouvrir le PDF
              </a>
              <a
                href="/rapport_regulation.pdf"
                download
                className="secondary-cta"
              >
                Télécharger
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
