import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { FileText, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Route = createFileRoute("/candidature")({
  head: () => ({
    meta: [
      { title: "Candidature – Portfolio GEII" },
      {
        name: "description",
        content:
          "CV et coordonnées d'Oussama El Messaoudi — étudiant BUT GEII à l'IUT de Troyes.",
      },
    ],
  }),
  component: CandidaturePage,
});

function CandidaturePage() {
  return (
    <main className="site-shell">
      <section className="page-hero section-reveal">
        <p className="eyebrow">Candidature</p>
        <h1>Travaillons ensemble</h1>
        <p>
          Stage à partir de janvier 2027, ou simple échange — n'hésitez pas à
          me contacter.
        </p>
      </section>

      <section
        className="content-grid section-reveal"
        aria-label="CV et contact"
      >
        {/* Bloc CV */}
        <article className="glass-panel span-5">
          <p className="eyebrow">Curriculum Vitae</p>
          <h2>Mon CV</h2>
          <p>
            CV consultable en ligne ou téléchargeable au format PDF.
          </p>
          <div className="pdf-block pdf-block--compact">
            <div className="pdf-icon-wrap" aria-hidden="true">
              <FileText />
            </div>
            <div>
              <p className="pdf-title">
                Oussama El Messaoudi — CV BUT GEII
              </p>
              <p className="pdf-desc">Format PDF — mis à jour 2025</p>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta"
            >
              Ouvrir le PDF
            </a>
            <a href="/cv.pdf" download className="secondary-cta">
              Télécharger
            </a>
          </div>
        </article>

        {/* Bloc contact */}
        <article className="glass-panel span-7 emphasis-panel">
          <p className="eyebrow">Contact</p>
          <h2>Me contacter</h2>
          <p>
            Disponible pour toute opportunité de stage ou alternance en
            électronique, systèmes embarqués ou automatisme.
          </p>

          <div className="contact-list">
            {profile.contact.email && (
              <a
                href={`mailto:${profile.contact.email}`}
                className="contact-item"
              >
                <span className="contact-icon">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profile.contact.email}</span>
                </div>
              </a>
            )}

            {profile.contact.phone && (
              <a
                href={`tel:${profile.contact.phone}`}
                className="contact-item"
              >
                <span className="contact-icon">
                  <Phone aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-label">Téléphone</span>
                  <span className="contact-value">{profile.contact.phone}</span>
                </div>
              </a>
            )}

            {profile.contact.location && (
              <div className="contact-item contact-item--static">
                <span className="contact-icon">
                  <MapPin aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">
                    {profile.contact.location}
                  </span>
                </div>
              </div>
            )}

            {profile.contact.linkedin && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">
                  <Linkedin aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">
                    Voir le profil LinkedIn
                  </span>
                </div>
              </a>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
