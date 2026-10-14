import { programs } from "@/data/programs";

// Layout en lignes numerotees (pas une grille de cartes) pour varier le rythme
// avec les sections About / Paths / Projects.
export default function Programs({ dict, lang }) {
  const p = dict.programs;
  const t = (obj) => obj[lang] ?? obj.fr;

  return (
    <section id="programmes" className="alt">
      <div className="container">
        <div className="title">
          <h2>{p.title}</h2>
          <p>{p.subtitle}</p>
        </div>
        <div className="program-rows">
          {programs.map((prog, index) => (
            <article
              className={`program-row tone-${index % 4}`}
              key={prog.slug}
            >
              <span className="program-num" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="program-main">
                <h3>{t(prog.title)}</h3>
                <p>{t(prog.text)}</p>
              </div>
              <div className="program-aside">
                <span className="program-example">
                  <b>{p.exampleLabel}</b> {t(prog.example)}
                </span>
                <span className="chip-level">
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
