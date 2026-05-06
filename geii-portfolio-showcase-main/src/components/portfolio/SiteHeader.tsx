import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/" as const, label: "Accueil" },
  { to: "/projects" as const, label: "SAE" },
  { to: "/competences" as const, label: "Compétences" },
  { to: "/candidature" as const, label: "Candidature" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navigation principale">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          <span>Portfolio GEII</span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="mobile-controls">
          <ThemeToggle />
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
