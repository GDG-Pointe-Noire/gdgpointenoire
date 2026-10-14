"use client";

import { useEffect, useState } from "react";

export default function Header({ lang, dict }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const links = [
    { href: "#top", label: dict.nav.home },
    { href: "#evenements", label: dict.nav.events },
    { href: "#programmes", label: dict.nav.programs },
    { href: "#equipe", label: dict.nav.team },
    { href: "#membres", label: dict.nav.members },
    { href: "#partenaires", label: dict.nav.partners },
    { href: "#rejoindre", label: dict.nav.join, cta: true },
  ];
  const otherLang = lang === "fr" ? "en" : "fr";
  const close = () => setOpen(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("gdg-theme");
    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("gdg-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header>
      <div className="container nav">
        <a href="#top" className="logo" onClick={close}>
          <span className="dots">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="t">{dict.brand}</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={dict.nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={open ? "open" : ""}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.cta ? "nav-cta" : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-tools" aria-label={dict.nav.language}>
              <button
                type="button"
                className="theme-toggle"
                aria-label={theme === "dark" ? dict.nav.themeLight : dict.nav.themeDark}
                aria-pressed={theme === "dark"}
                title={theme === "dark" ? dict.nav.themeLight : dict.nav.themeDark}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
                  </svg>
                )}
              </button>
              <span className="language-switcher">
                {["fr", "en"].map((locale) =>
                  locale === lang ? (
                    <span key={locale} className="language-current" aria-current="page">
                      {locale.toUpperCase()}
                    </span>
                  ) : (
                    <a
                      key={locale}
                      href={`/${locale}`}
                      className="language-option"
                      hrefLang={locale}
                      onClick={close}
                    >
                      {locale.toUpperCase()}
                    </a>
                  )
                )}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
