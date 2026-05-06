import { createFileRoute } from "@tanstack/react-router";
import { ues } from "@/data/portfolio";
import { ImageIcon } from "lucide-react";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences BUT GEII – Portfolio" },
      {
        name: "description",
        content:
          "Apprentissages critiques du référentiel BUT GEII : Concevoir et Vérifier.",
      },
    ],
  }),
  component: CompetencesPage,
});

const AC_DETAILS: Record<
  string,
  {
    desc: string;
    saes: string[];
  }
> = {
  "AC11.01": {
    desc: "Produire une analyse fonctionnelle d'un système simple.",
    saes: ["Régulation de température"],
  },
  "AC11.02": {
    desc: "Réaliser un prototype pour des solutions techniques matériel et/ou logiciel.",
    saes: ["Shield Nano", "Multimètre", "Régulation de température"],
  },
  "AC11.03": {
    desc: "Rédiger un dossier de fabrication à partir d'un dossier de conception.",
    saes: ["Régulation de température"],
  },
  "AC12.01": {
    desc: "Appliquer une procédure d'essais.",
    saes: ["Shield Nano", "Multimètre", "Régulation de température"],
  },
  "AC12.02": {
    desc: "Identifier un dysfonctionnement.",
    saes: [],
  },
  "AC12.03": {
    desc: "Décrire un dysfonctionnement.",
    saes: [],
  },
};

function CompetencesPage() {
  return (
    <main className="site-shell">
      <section className="page-hero section-reveal">
        <p className="eyebrow">Référentiel BUT GEII</p>
        <h1>Compétences</h1>
        <p>
          Les apprentissages critiques du programme national BUT GEII, validés
          par les projets SAE. Cette page sera complétée avec les captures
          d'écran du programme national.
        </p>
      </section>

      {ues.map((ue) => {
        const Icon = ue.icon;
        return (
          <section
            key={ue.title}
            className="page-section section-reveal"
            id={`bloc-${ue.title.toLowerCase()}`}
          >
            <div className="section-heading">
              <div className="ue-card-header" style={{ marginBottom: "1rem" }}>
                <div className="project-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <p className="eyebrow">Bloc de compétences</p>
                  <h2>{ue.title}</h2>
                </div>
              </div>
            </div>

            <div className="competences-list">
              {ue.items.map((item) => {
                const detail = AC_DETAILS[item.code];
                return (
                  <article
                    key={item.code}
                    className="competence-card"
                    id={`ac-${item.code.toLowerCase().replace(".", "-")}`}
                  >
                    <div className="competence-card-header">
                      <span className="ac-code-large">{item.code}</span>
                      <h3>{item.label}</h3>
                    </div>

                    {detail && (
                      <p className="competence-desc">{detail.desc}</p>
                    )}

                    {detail && detail.saes.length > 0 && (
                      <div className="competence-saes">
                        <span className="eyebrow" style={{ marginBottom: "0.5rem", display: "block" }}>
                          SAE mobilisant cette compétence
                        </span>
                        <div className="skill-row">
                          {detail.saes.map((sae) => (
                            <span key={sae} className="spec-pill">
                              {sae}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Espace pour captures d'écran programme national */}
                    <div className="competence-screenshots">
                      <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                        Programme national BUT GEII
                      </p>
                      <div className="image-placeholder-grid">
                        <div className="image-placeholder competence-placeholder">
                          <ImageIcon aria-hidden="true" />
                          <span>
                            Ajouter une capture du programme national
                          </span>
                        </div>
                        <div className="image-placeholder competence-placeholder">
                          <ImageIcon aria-hidden="true" />
                          <span>
                            Ajouter une capture du programme national
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
