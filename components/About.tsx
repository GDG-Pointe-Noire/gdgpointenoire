import { GraduationCap, Handshake, Rocket, Globe2 } from "lucide-react";
import type { Dictionary } from "@/data/i18n";

const ABOUT_ICONS = {
  learn: GraduationCap,
  share: Handshake,
  build: Rocket,
  connect: Globe2,
};

function isAboutIcon(key: string): key is keyof typeof ABOUT_ICONS {
  return key in ABOUT_ICONS;
}

export default function About({ dict }: { dict: Dictionary }) {
  const a = dict.about;
  return (
    <section id="apropos">
      <div className="container">
        <div className="title">
          <h2>{a.title}</h2>
          <p>{a.subtitle}</p>
        </div>
        <div className="pillars">
          {a.cards.map((card, index) => {
            const Icon = isAboutIcon(card.icon) ? ABOUT_ICONS[card.icon] : null;
            return (
              <article className={`pillar tone-${index}`} key={card.title}>
                <span className="pillar-icon" aria-hidden="true">
                  {Icon && <Icon size={26} strokeWidth={1.8} />}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
