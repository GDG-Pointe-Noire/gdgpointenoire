import { ArrowUpRight, MapPin, MessageCircle, UsersRound } from "lucide-react";
import { whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";

export default function Join({ dict }: { dict: Dictionary }) {
  const j = dict.join;

  return (
    <section id="rejoindre" className="join-section">
      <div className="container">
        <div className="join">
          <div className="join-main">
            <p className="join-eyebrow">
              <UsersRound size={17} aria-hidden="true" />
              <span>{j.eyebrow}</span>
            </p>
            <h2>{j.title}</h2>
            <p className="join-copy">{j.text}</p>
            <a
              className="btn join-cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>{j.btn}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="join-location">
              <MapPin size={16} aria-hidden="true" />
              <span>{j.location}</span>
            </p>
          </div>
          <aside className="join-aside">
            <span className="join-aside-mark" aria-hidden="true">
              <MessageCircle size={30} strokeWidth={1.7} />
            </span>
            <h3>{j.asideTitle}</h3>
            <p>{j.asideText}</p>
            <span className="join-aside-note">{j.asideNote}</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
