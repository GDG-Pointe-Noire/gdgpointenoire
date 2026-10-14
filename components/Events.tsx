import {
  featuredEvent,
  pastEvents,
  formatEventDate,
} from "@/data/events";
import { whatsappLink } from "@/data/i18n";
import type { Dictionary, Locale, LocalizedText } from "@/data/i18n";

export default function Events({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const e = dict.events;
  const t = (obj: LocalizedText | undefined) => obj?.[lang] ?? obj?.fr ?? "";

  return (
    <section id="evenements" className="alt">
      <div className="container">
        <div className="title">
          <h2>{e.title}</h2>
          <p>{e.subtitle}</p>
        </div>

        {featuredEvent ? (
          <article className="event-feature">
            <div className="event-media">
              <img src={featuredEvent.image} alt={t(featuredEvent.imageAlt)} />
            </div>
            <div className="event-body">
              <div className="event-kicker">
                <span className="event-format">
                  {e.formats[featuredEvent.format]}
                </span>
                <span className="event-when">
                  {formatEventDate(featuredEvent.date, lang)} ·{" "}
                  {t(featuredEvent.time)}
                </span>
              </div>
              <h3>{t(featuredEvent.title)}</h3>
              <p className="event-summary">{t(featuredEvent.summary)}</p>
              <ul className="event-meta">
                <li>{t(featuredEvent.location)}</li>
                <li>
                  {e.levelLabel} : {t(featuredEvent.level)}
                </li>
              </ul>
              <ul className="tag-row">
                {featuredEvent.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="btns event-actions">
                {featuredEvent.registrationUrl ? (
                  <a
                    className="btn primary"
                    href={featuredEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.register}
                  </a>
                ) : (
                  <a
                    className="btn primary"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.joinForUpdates}
                  </a>
                )}
              </div>
            </div>
          </article>
        ) : (
          <div className="empty-state">
            <h3>{e.emptyTitle}</h3>
            <p>{e.emptyText}</p>
            <a
              className="btn primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.hero.joinBtn}
            </a>
          </div>
        )}

        {pastEvents.length > 0 ? (
          <>
            <div className="subhead">
              <h3>{e.pastTitle}</h3>
              <p>{e.pastSubtitle}</p>
            </div>
            <div className="event-grid">
              {pastEvents.map((ev, index) => (
                <article
                  className={`event-card tone-${index % 4}`}
                  key={ev.slug}
                >
                  <div className="event-card-media">
                    <img src={ev.image} alt={t(ev.imageAlt)} />
                  </div>
                  <div className="event-card-body">
                    <span className="event-when">
                      {formatEventDate(ev.date, lang)}
                    </span>
                    <h4>{t(ev.title)}</h4>
                    {ev.result && <p className="event-result">{t(ev.result)}</p>}
                    {ev.participants !== undefined && (
                      <span className="event-count">
                        {e.participants.replace("{n}", String(ev.participants))}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h3>{e.soonTitle}</h3>
            <p>{e.soonText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
