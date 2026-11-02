import { whatsappLink } from "@/data/i18n";
import { featuredEvent, formatEventDate } from "@/data/events";
import type { Dictionary, Locale } from "@/data/i18n";
import {
  buttonBaseClass,
  heroPrimaryButton,
  heroGhostButton,
} from "@/components/button-styles";

export default function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const h = dict.hero;
  const event = featuredEvent;
  const eventTitle = event ? event.title[lang] ?? event.title.fr : dict.events.emptyTitle;
  const eventAction = event?.registrationUrl || whatsappLink;
  const eventActionLabel = event?.registrationUrl
    ? dict.events.register
    : dict.events.joinForUpdates;

  return (
    <section className="relative overflow-hidden bg-page pb-[110px] pt-[104px] text-text max-[720px]:py-[76px] max-[720px]:pb-[84px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1.05fr)_minmax(360px,0.85fr)] items-center gap-[clamp(36px,7vw,88px)] px-5 max-[900px]:grid-cols-[1fr_0.9fr] max-[900px]:gap-7 max-[720px]:grid-cols-1 max-[720px]:gap-8">
        <div className="py-3">
          <span className="mb-[14px] inline-block py-[5px] text-[0.82rem] font-bold tracking-[0.02em] text-brand-blue">{h.badge}</span>
          <h1 className="mb-[22px] max-w-[11ch] text-[clamp(3.1rem,6.5vw,5.5rem)] leading-[0.98] text-text max-[720px]:text-[clamp(3rem,13vw,4.6rem)]">
            {h.titleBefore}
            <b className="text-brand-blue">{h.titleHighlight}</b>
            {h.titleAfter}
          </h1>
          <p className="mb-5 max-w-[54ch] text-[1.16rem] text-muted max-[560px]:text-[1.06rem]">{h.text}</p>
          <p className="mb-5 text-[0.92rem] font-bold text-text before:mr-[9px] before:text-brand-red before:content-['•']">{h.location}</p>
          <div className="hero-actions flex flex-wrap justify-start gap-3 items-start mt-[26px] max-[560px]:flex-col max-[560px]:items-start">
            <a className={heroPrimaryButton} href="#evenements">
              {h.primaryCta}
            </a>
            <a
              className={heroGhostButton}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.secondaryCta}
            </a>
          </div>
        </div>

        <article className="flex min-h-[340px] flex-col items-start rounded-3xl bg-ink p-[clamp(26px,4vw,42px)] text-white shadow-[0_24px_60px_rgba(23,32,51,0.16)] max-[900px]:min-h-[320px] max-[900px]:p-[26px] max-[720px]:min-h-[300px]" aria-labelledby="hero-event-title">
          <div className="flex w-full items-center justify-between gap-[14px]">
            <span className="font-heading text-[0.75rem] font-bold tracking-[0.12em] text-white/75 uppercase">{h.nextLabel}</span>
            {event && (
              <span className="rounded-full bg-brand-blue px-3 py-1 text-[0.8rem] font-bold text-white">
                {dict.events.formats[event.format as keyof typeof dict.events.formats]}
              </span>
            )}
          </div>
          {event && (
            <p className="mt-[34px] text-[clamp(1.25rem,2.5vw,1.7rem)] font-bold text-brand-yellow">{formatEventDate(event.date, lang)}</p>
          )}
          <h2 className="mt-2 max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.7rem)] leading-[1.08]" id="hero-event-title">{eventTitle}</h2>
          {event ? (
            <>
              <p className="mt-[14px] max-w-[45ch] text-white/80">
                {event.summary[lang] ?? event.summary.fr}
              </p>
              <p className="mt-[18px] text-[0.9rem] font-semibold text-white/70">
                {event.location[lang] ?? event.location.fr} ·{" "}
                {event.time[lang] ?? event.time.fr}
              </p>
            </>
          ) : (
            <p className="mt-[14px] max-w-[45ch] text-white/80">{dict.events.emptyText}</p>
          )}
          <a
            className={`${buttonBaseClass} mt-auto border-white bg-white px-5 py-2.5 text-ink hover:border-[#e8f0fe] hover:bg-[#e8f0fe]`}
            href={eventAction}
            target="_blank"
            rel="noopener noreferrer"
          >
            {eventActionLabel}
          </a>
        </article>
      </div>
      <span className="absolute inset-x-0 bottom-0 z-[3] h-1.5 bg-[linear-gradient(90deg,var(--blue)_25%,var(--red)_25%_50%,var(--yellow)_50%_75%,var(--green)_75%)]" aria-hidden="true" />
    </section>
  );
}
