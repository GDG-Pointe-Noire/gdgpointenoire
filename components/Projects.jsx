import { projects } from "@/data/projects";

// Liste legere (lignes séparees par des filets) plutot qu'une grille de cartes :
// le rythme change avec les autres sections.
export default function Projects({ dict, lang }) {
  const p = dict.projects;
  const t = (obj) => obj[lang] ?? obj.fr;

  return (
    <section id="projets">
      <div className="container">
        <div className="title">
          <h2>{p.title}</h2>
          <p>{p.subtitle}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.slug}>
              <div className="project-info">
                <div className="project-head">
                  <h3>{t(project.name)}</h3>
                  {project.status === "planned" && (
                    <span className="chip-status">{p.planned}</span>
                  )}
                </div>
                <p>{t(project.description)}</p>
                <ul className="tag-row">
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {project.repo && (
                <a
                  className="project-link"
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
