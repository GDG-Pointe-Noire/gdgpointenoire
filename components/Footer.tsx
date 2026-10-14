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
    <footer>
      <div className="container footer-inner">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <p>{dict.footer}</p>
      </div>
      <div className="container footer-extra">
        <ul className="footer-links">
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-mention">{dict.footerMention}</p>
      </div>
    </footer>
  );
}
