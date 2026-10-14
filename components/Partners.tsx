import { whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";

export default function Partners({ dict }: { dict: Dictionary }) {
  const p = dict.partners;

  return (
    <section id="partenaires" className="alt">
      <div className="container">
        <div className="title">
          <h2>{p.title}</h2>
          <p>{p.text}</p>
        </div>
        <ul className="partner-formats">
          {p.formats.map((format, index) => (
            <li className={`tone-${index % 4}`} key={format}>
              {format}
            </li>
          ))}
        </ul>
        <div className="btns">
          {/* CTA vers le canal reel du groupe ; l'equipe le remplacera par
              l'email de contact des que celui-ci existe. */}
          <a
            className="btn primary"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
