import { whatsappLink } from "@/data/i18n";
import { Building2, Code2, Mic2, Sprout } from "lucide-react";
import type { Dictionary } from "@/data/i18n";

// Cible de chaque CTA selon le parcours. "speaker" part vers le groupe
// WhatsApp (canal de contact reel du groupe) ; les autres restent internes.
const CTA_TARGETS: Record<string, { href: string; external?: boolean }> = {
  beginner: { href: "#rejoindre" },
  builder: { href: "#rejoindre" },
  speaker: { href: whatsappLink, external: true },
  organization: { href: "#partenaires" },
};

const PATH_ICONS: Record<string, typeof Sprout> = {
  beginner: Sprout,
  builder: Code2,
  speaker: Mic2,
  organization: Building2,
};

// Section immersive sombre : elle casse le rythme des sections claires.
export default function Paths({ dict }: { dict: Dictionary }) {
  const p = dict.paths;

  return (
    <section id="parcours" className="section-dark">
      <div className="container">
        <div className="title">
          <h2>{p.title}</h2>
          <p>{p.subtitle}</p>
        </div>
        <div className="path-grid">
          {p.items.map((item, index) => {
            const target = CTA_TARGETS[item.key] || { href: "#rejoindre" };
            const Icon = PATH_ICONS[item.key] || Sprout;
            return (
              <article
                className={`path-card tone-${index % 4}`}
                key={item.key}
              >
                <span className="path-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.8} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a
                  className="btn path-cta"
                  href={target.href}
                  {...(target.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
