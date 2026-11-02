import { whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";
import { primaryButton } from "@/components/button-styles";
import { toneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

export default function Partners({ dict }: { dict: Dictionary }) {
  const p = dict.partners;

  return (
    <section id="partenaires" className="bg-page-muted py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={p.title} subtitle={p.text} />
        <ul className="mb-[30px] flex flex-wrap list-none justify-center gap-2.5">
          {p.formats.map((format, index) => (
            <li className={`rounded-full border border-line border-t-[3px] border-t-[var(--tone,var(--blue))] bg-surface px-[18px] py-2 text-[0.95rem] font-bold ${toneClasses[index % toneClasses.length]}`} key={format}>
              {format}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-3 max-[560px]:flex-col max-[560px]:items-stretch">
          {/* CTA vers le canal reel du groupe ; l'equipe le remplacera par
              l'email de contact des que celui-ci existe. */}
          <a
            className={primaryButton}
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
