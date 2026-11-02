import { siteLinks, whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  const labels = dict.footerLinks;

  // Seuls les liens non-placeholder sont affiches : pas de lien mort sur le
  // site. L'equipe remplace les placeholders dans data/i18n.js (section 12).
  const links = [
    { key: "github", label: labels.github, href: siteLinks.github.href },
    { key: "whatsapp", label: labels.whatsapp, href: whatsappLink },
    ...(["email", "facebook", "linkedin", "youtube"] as const)
      .filter((key) => !siteLinks[key].placeholder)
      .map((key) => ({ key, label: labels[key], href: siteLinks[key].href })),
  ];

  return (
    <footer className="border-t border-line pt-7 pb-9">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-3 px-5 text-center text-[0.92rem] text-muted max-[640px]:flex-col">
        <span className="flex gap-1" aria-hidden="true">
          <i className="block size-2.5 rounded-full bg-brand-blue" />
          <i className="block size-2.5 rounded-full bg-brand-red" />
          <i className="block size-2.5 rounded-full bg-brand-yellow" />
          <i className="block size-2.5 rounded-full bg-brand-green" />
        </span>
        <p>{dict.footer}</p>
      </div>
      <div className="mx-auto mt-[14px] flex w-full max-w-[1440px] flex-col items-center gap-2 px-5">
        <ul className="flex list-none flex-wrap justify-center gap-x-[18px] gap-y-2">
          {links.map((link) => (
            <li key={link.key}>
              <a className="text-[0.92rem] font-bold text-muted hover:text-brand-blue" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="max-w-[640px] text-center text-[0.85rem] text-muted">{dict.footerMention}</p>
      </div>
    </footer>
  );
}
