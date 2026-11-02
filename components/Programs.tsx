import { programs } from "@/data/programs";
import type { Dictionary, Locale, LocalizedText } from "@/data/i18n";
import { toneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

// Layout en lignes numerotees (pas une grille de cartes) pour varier le rythme
// avec les sections About / Paths / Projects.
export default function Programs({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const p = dict.programs;
  const t = (obj: LocalizedText) => obj[lang] ?? obj.fr;

  return (
    <section id="programmes" className="bg-page-muted py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={p.title} subtitle={p.subtitle} />
        <div className="border-t border-line">
          {programs.map((prog, index) => (
            <article
              className={`grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-[22px] gap-y-2 border-b border-l-4 border-l-transparent px-2 py-[18px] text-left transition-[background,border-left-color] duration-200 hover:border-l-[color:var(--tone,var(--blue))] hover:bg-surface min-[761px]:grid-cols-[72px_minmax(0,1.3fr)_minmax(0,1fr)] min-[761px]:px-[14px] min-[761px]:py-[22px] ${toneClasses[index % toneClasses.length]}`}
              key={prog.slug}
            >
              <span className="font-heading text-[1.8rem] font-bold tracking-[-0.04em] text-[var(--tone,var(--blue))]" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="mb-1 text-[1.3rem]">{t(prog.title)}</h3>
                <p className="text-[0.98rem] text-muted">{t(prog.text)}</p>
              </div>
              <div className="col-start-2 flex flex-col items-start gap-2 min-[761px]:col-auto">
                <span className="rounded-xl border border-line bg-surface px-[14px] py-2 text-[0.9rem] text-text">
                  <b className="text-[var(--tone,var(--blue))]">{p.exampleLabel}</b> {t(prog.example)}
                </span>
                <span className="rounded-full border border-dashed border-line px-3 py-1 text-[0.78rem] font-bold text-muted">
                  {p.levelLabel} : {t(prog.level)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
