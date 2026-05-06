import { createFileRoute } from "@tanstack/react-router";
import { profile, ues, skillBlocks } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio GEII — Oussama El Messaoudi" },
      {
        name: "description",
        content:
          "Portfolio d’Oussama El Messaoudi, étudiant en BUT GEII à l’IUT de Troyes. Compétences et projets.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="site-shell">
      <section className="intro-section section-reveal" aria-labelledby="intro-title">
        <p className="eyebrow">BUT GEII — IUT de Troyes</p>
        <h1 id="intro-title">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="hero-lede">{profile.intro}</p>
      </section>

      <section className="page-section section-reveal" aria-labelledby="ue-title">
        <div className="section-heading">
          <p className="eyebrow">Référentiel</p>
          <h2 id="ue-title">Les compétences du BUT GEII</h2>
        </div>
        <div className="ue-grid">
          {ues.map((ue) => {
            const Icon = ue.icon;
            return (
              <article className="ue-card" key={ue.title}>
                <header className="ue-card-header">
                  <div className="project-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div>
                    {ue.code && <span className="ue-code">{ue.code}</span>}
                    <h3>{ue.title}</h3>
                  </div>
                </header>
                <ul className="ac-list">
                  {ue.items.map((item) => (
                    <li key={item.code} className="ac-item">
                      <span className="ac-code">{item.code}</span>
                      <span className="ac-label">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section section-reveal" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">Domaines</p>
          <h2 id="skills-title">Compétences techniques</h2>
        </div>
        <div className="ue-grid">
          {skillBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <article className="ue-card" key={block.title}>
                <header className="ue-card-header">
                  <div className="project-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div>
                    <h3>{block.title}</h3>
                  </div>
                </header>
                <ul className="skill-chips">
                  {block.items.map((item) => (
                    <li key={item} className="skill-chip">{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
