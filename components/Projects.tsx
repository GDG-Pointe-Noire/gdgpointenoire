import { projects } from "@/data/projects";
import type { Dictionary, Locale, LocalizedText } from "@/data/i18n";
import SectionTitle from "@/components/SectionTitle";

// Liste legere (lignes séparees par des filets) plutot qu'une grille de cartes :
// le rythme change avec les autres sections.
export default function Projects({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const p = dict.projects;
  const t = (obj: LocalizedText) => obj[lang] ?? obj.fr;

  return (
    <section id="projets" className="py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={p.title} subtitle={p.subtitle} />
        <div className="border-t border-line">
          {projects.map((project) => (
            <article className="flex flex-col items-start justify-between gap-[18px] border-b border-line px-1.5 py-6 text-left transition-[background,padding] duration-200 hover:bg-page-muted hover:px-[14px] min-[701px]:flex-row min-[701px]:items-center" key={project.slug}>
              <div className="flex min-w-0 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl">{t(project.name)}</h3>
                  {project.status === "planned" && (
                    <span className="rounded-full border border-dashed border-muted bg-page-muted px-2.5 py-[3px] text-[0.72rem] font-bold whitespace-nowrap text-muted">{p.planned}</span>
                  )}
                </div>
                <p className="max-w-[62ch] text-[0.97rem] text-muted">{t(project.description)}</p>
                <ul className="flex list-none flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li className="rounded-full border border-line bg-page-muted px-3 py-1 text-[0.8rem] font-bold text-text" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {project.repo && (
                <a
                  className="shrink-0 text-[0.95rem] font-bold text-brand-blue hover:underline"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.viewRepo} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
