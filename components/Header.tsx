"use client";

import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/data/i18n";

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
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
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5 text-[1.15rem] font-bold" onClick={close}>
          <span className="flex gap-1">
            <i className="block size-2.5 rounded-full bg-brand-blue" />
            <i className="block size-2.5 rounded-full bg-brand-red" />
            <i className="block size-2.5 rounded-full bg-brand-yellow" />
            <i className="block size-2.5 rounded-full bg-brand-green" />
          </span>
          <span className="text-base min-[721px]:text-[1.15rem]">{dict.brand}</span>
        </a>
        <button
          type="button"
          className={`relative z-[41] hidden size-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl border border-line bg-surface hover:border-brand-blue max-[960px]:flex ${open ? "border-brand-blue bg-page-muted" : ""}`}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={dict.nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-[18px] rounded-sm bg-text transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-[18px] rounded-sm bg-text transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-[18px] rounded-sm bg-text transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
        <nav id="site-nav" className="max-[960px]:absolute max-[960px]:inset-x-0 max-[960px]:top-[calc(100%+1px)] max-[960px]:z-40">
          <ul className={`flex list-none items-center gap-[22px] max-[960px]:max-h-[calc(100dvh-70px)] max-[960px]:flex-col max-[960px]:items-stretch max-[960px]:gap-1 max-[960px]:overflow-y-auto max-[960px]:border-b max-[960px]:border-line max-[960px]:bg-surface max-[960px]:px-5 max-[960px]:pt-3 max-[960px]:pb-[18px] max-[960px]:shadow-[0_16px_28px_rgba(23,32,51,0.12)] ${open ? "max-[960px]:flex" : "max-[960px]:hidden"}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-[10px] px-0 py-0 text-[0.98rem] font-semibold text-muted hover:text-brand-blue max-[960px]:px-3 max-[960px]:py-[11px] max-[960px]:text-base max-[960px]:hover:bg-page-muted ${link.cta ? "rounded-full bg-brand-blue px-4 py-2 text-white hover:bg-[#2f6fd8] hover:text-white max-[960px]:mt-1 max-[960px]:px-4 max-[960px]:py-3" : ""}`}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5 max-[960px]:mt-2 max-[960px]:justify-between max-[960px]:border-t max-[960px]:border-line max-[960px]:px-[6px] max-[960px]:pt-3" aria-label={dict.nav.language}>
              <button
                type="button"
                className="grid size-[38px] cursor-pointer place-items-center rounded-full border border-line bg-surface text-text transition-colors hover:border-brand-blue hover:bg-surface-hover hover:text-brand-blue max-[960px]:size-10"
                aria-label={theme === "dark" ? dict.nav.themeLight : dict.nav.themeDark}
                aria-pressed={theme === "dark"}
                title={theme === "dark" ? dict.nav.themeLight : dict.nav.themeDark}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <svg className="size-[19px] fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </svg>
                ) : (
                  <svg className="size-[19px] fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
                  </svg>
                )}
              </button>
              <span className="inline-flex items-center gap-0.5 rounded-full border border-line bg-page-muted p-[3px]">
                {["fr", "en"].map((locale) =>
                  locale === lang ? (
                    <span key={locale} className="inline-grid min-h-[30px] min-w-9 place-items-center rounded-full bg-surface text-[0.75rem] font-bold tracking-[0.04em] text-text shadow-[0_1px_3px_rgba(23,32,51,0.12)]" aria-current="page">
                      {locale.toUpperCase()}
                    </span>
                  ) : (
                    <a
                      key={locale}
                      href={`/${locale}`}
                      className="inline-grid min-h-[30px] min-w-9 place-items-center rounded-full text-[0.75rem] font-bold tracking-[0.04em] text-muted transition-colors hover:bg-surface hover:text-brand-blue"
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
