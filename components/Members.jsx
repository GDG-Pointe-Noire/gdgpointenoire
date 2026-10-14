import { whatsappLink } from "@/data/i18n";

export default function Members({ dict }) {
  const m = dict.members;
  return (
    <section id="membres">
      <div className="container">
        <div className="title">
          <h2>{m.title}</h2>
          <p>{m.subtitle}</p>
        </div>
        <div className="empty-state">
          <h3>{m.emptyTitle}</h3>
          <p>{m.note}</p>
          <a
            className="btn primary"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.hero.joinBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
