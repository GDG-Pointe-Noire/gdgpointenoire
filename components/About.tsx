import { GraduationCap, Handshake, Rocket, Globe2 } from "lucide-react";
import type { Dictionary } from "@/data/i18n";
import { toneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

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
    <section id="apropos" className="py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={a.title} subtitle={a.subtitle} />
        <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[901px]:grid-cols-4">
          {a.cards.map((card, index) => {
            const Icon = isAboutIcon(card.icon) ? ABOUT_ICONS[card.icon] : null;
            return (
              <article
                className={`rounded-card border border-line border-t-4 border-t-[var(--tone)] bg-surface px-[22px] pt-6 pb-[26px] ${toneClasses[index % toneClasses.length]}`}
                key={card.title}
              >
                <span
                  className="mb-[18px] grid size-12 place-items-center rounded-[14px] bg-[color-mix(in_srgb,var(--tone)_12%,var(--surface))] text-[var(--tone)]"
                  aria-hidden="true"
                >
                  {Icon && <Icon size={26} strokeWidth={1.8} />}
                </span>
                <h3 className="mb-2 text-xl">{card.title}</h3>
                <p className="text-[0.98rem] text-muted">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
