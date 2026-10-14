import { whatsappLink } from "@/data/i18n";
import { featuredEvent, formatEventDate } from "@/data/events";
import type { Dictionary, Locale } from "@/data/i18n";

export default function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const h = dict.hero;
  const event = featuredEvent;
  const eventTitle = event ? event.title[lang] ?? event.title.fr : dict.events.emptyTitle;
  const eventAction = event?.registrationUrl || whatsappLink;
  const eventActionLabel = event?.registrationUrl
    ? dict.events.register
    : dict.events.joinForUpdates;

  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="badge">{h.badge}</span>
          <h1>
            {h.titleBefore}
            <b>{h.titleHighlight}</b>
            {h.titleAfter}
          </h1>
          <p>{h.text}</p>
          <p className="hero-location">{h.location}</p>
          <div className="btns hero-actions">
            <a className="btn primary" href="#evenements">
              {h.primaryCta}
            </a>
            <a
              className="btn ghost"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.secondaryCta}
            </a>
          </div>
        </div>

        <article className="hero-event" aria-labelledby="hero-event-title">
          <div className="hero-event-topline">
            <span className="hero-next-label">{h.nextLabel}</span>
            {event && (
              <span className="event-format">
                {dict.events.formats[event.format as keyof typeof dict.events.formats]}
              </span>
            )}
          </div>
          {event && (
            <p className="hero-event-date">{formatEventDate(event.date, lang)}</p>
          )}
          <h2 id="hero-event-title">{eventTitle}</h2>
          {event ? (
            <>
              <p className="hero-event-summary">
                {event.summary[lang] ?? event.summary.fr}
              </p>
              <p className="hero-event-meta">
                {event.location[lang] ?? event.location.fr} ·{" "}
                {event.time[lang] ?? event.time.fr}
              </p>
            </>
          ) : (
            <p className="hero-event-summary">{dict.events.emptyText}</p>
          )}
          <a
            className="btn hero-event-action"
            href={eventAction}
            target="_blank"
            rel="noopener noreferrer"
          >
            {eventActionLabel}
          </a>
        </article>
      </div>
      <span className="hero-stripe" aria-hidden="true" />
    </section>
  );
}
