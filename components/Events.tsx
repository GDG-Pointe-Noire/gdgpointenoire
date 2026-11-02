import {
  featuredEvent,
  pastEvents,
  formatEventDate,
} from "@/data/events";
import { whatsappLink } from "@/data/i18n";
import type { Dictionary, Locale, LocalizedText } from "@/data/i18n";
import { primaryButton } from "@/components/button-styles";
import { toneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

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
    <section id="evenements" className="bg-page-muted py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={e.title} subtitle={e.subtitle} />

        {featuredEvent ? (
          <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-surface min-[881px]:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)]">
            <div className="min-h-full">
              <img className="block min-h-[220px] w-full object-cover object-left min-[881px]:h-full min-[881px]:min-h-[280px]" src={featuredEvent.image} alt={t(featuredEvent.imageAlt)} />
            </div>
            <div className="flex flex-col items-start gap-3 p-[30px] pb-8 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-brand-blue px-3 py-1 text-[0.8rem] font-bold text-white">
                  {e.formats[featuredEvent.format]}
                </span>
                <span className="text-[0.92rem] font-semibold text-muted">
                  {formatEventDate(featuredEvent.date, lang)} ·{" "}
                  {t(featuredEvent.time)}
                </span>
              </div>
              <h3 className="text-[clamp(1.5rem,3.4vw,2.1rem)]">{t(featuredEvent.title)}</h3>
              <p className="text-muted">{t(featuredEvent.summary)}</p>
              <ul className="flex list-none flex-wrap gap-x-[18px] gap-y-2 text-[0.94rem] font-semibold">
                <li className="relative pl-[14px] before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-brand-blue before:content-['']">{t(featuredEvent.location)}</li>
                <li className="relative pl-[14px] before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-brand-blue before:content-['']">
                  {e.levelLabel} : {t(featuredEvent.level)}
                </li>
              </ul>
              <ul className="flex list-none flex-wrap gap-2">
                {featuredEvent.tags.map((tag) => (
                  <li className="rounded-full border border-line bg-page-muted px-3 py-1 text-[0.8rem] font-bold text-text" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-1 flex flex-wrap justify-start gap-3 max-[560px]:flex-col max-[560px]:items-stretch">
                {featuredEvent.registrationUrl ? (
                  <a
                    className={primaryButton}
                    href={featuredEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.register}
                  </a>
                ) : (
                  <a
                    className={primaryButton}
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
          <div className="mx-auto max-w-[680px] rounded-3xl border border-dashed border-line bg-surface px-[26px] py-11 text-center">
            <h3 className="mb-2 text-[1.35rem]">{e.emptyTitle}</h3>
            <p className="mb-[18px] text-muted">{e.emptyText}</p>
            <a
              className={primaryButton}
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
            <div className="mt-[56px] mb-[26px] text-center">
              <h3 className="text-[clamp(1.3rem,3vw,1.7rem)]">{e.pastTitle}</h3>
              <p className="mt-1.5 text-muted">{e.pastSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3">
              {pastEvents.map((ev, index) => (
                <article
                  className={`flex flex-col overflow-hidden rounded-[18px] border border-line border-t-4 border-t-[var(--tone,var(--blue))] bg-surface ${toneClasses[index % toneClasses.length]}`}
                  key={ev.slug}
                >
                  <div className="bg-page-muted">
                    <img className="block aspect-video w-full bg-page-muted object-cover" src={ev.image} alt={t(ev.imageAlt)} />
                  </div>
                  <div className="flex flex-col gap-1.5 p-4 px-[18px] pb-[18px]">
                    <span className="text-[0.92rem] font-semibold text-muted">
                      {formatEventDate(ev.date, lang)}
                    </span>
                    <h4 className="text-lg leading-tight">{t(ev.title)}</h4>
                    {ev.result && <p className="text-[0.92rem] text-muted">{t(ev.result)}</p>}
                    {ev.participants !== undefined && (
                      <span className="mt-1 self-start rounded-full bg-page-muted px-2.5 py-[3px] text-[0.78rem] font-bold text-text">
                        {e.participants.replace("{n}", String(ev.participants))}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-[680px] rounded-3xl border border-dashed border-line bg-surface px-[26px] py-11 text-center">
            <h3 className="mb-2 text-[1.35rem]">{e.soonTitle}</h3>
            <p className="mb-[18px] text-muted">{e.soonText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
