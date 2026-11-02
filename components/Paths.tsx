import { whatsappLink } from "@/data/i18n";
import { Building2, Code2, Mic2, Sprout } from "lucide-react";
import type { Dictionary } from "@/data/i18n";
import { buttonBaseClass } from "@/components/button-styles";
import { toneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

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
    <section id="parcours" className="bg-ink py-[88px] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={p.title} subtitle={p.subtitle} dark />
        <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[981px]:grid-cols-4">
          {p.items.map((item, index) => {
            const target = CTA_TARGETS[item.key] || { href: "#rejoindre" };
            const Icon = PATH_ICONS[item.key] || Sprout;
            return (
              <article
                className={`flex flex-col gap-3 rounded-card border border-white/[0.14] bg-white/[0.06] p-[26px_22px] text-left transition-[transform,background,border-color] duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 ${toneClasses[index % toneClasses.length]}`}
                key={item.key}
              >
                <span className="grid size-[52px] place-items-center rounded-2xl bg-[var(--tone,var(--blue))] text-2xl leading-none text-white" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.8} />
                </span>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="flex-1 text-[0.95rem] text-white/80">{item.text}</p>
                <a
                  className={`${buttonBaseClass} mt-2 self-start border-white bg-white px-5 py-2.5 text-[0.92rem] text-ink hover:border-brand-blue hover:bg-brand-blue hover:text-white`}
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
