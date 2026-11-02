"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, MapPin, X } from "lucide-react";
import { bureau, poles, type TeamLink, type TeamPerson } from "@/data/team";
import type { Dictionary, Locale, LocalizedText } from "@/data/i18n";
import { colorToneClasses } from "@/components/tone-classes";
import SectionTitle from "@/components/SectionTitle";

function localize(
  field: string | LocalizedText | undefined,
  lang: Locale
): string | undefined {
  if (field && typeof field === "object") return field[lang] || field.fr;
  return field;
}

function hasContent(value: unknown): boolean {
  return typeof value === "string"
    ? value.trim().length > 0
    : Boolean(
        value &&
          typeof value === "object" &&
          Object.values(value).some(
            (localized: unknown) =>
              typeof localized === "string" && localized.trim()
          )
      );
}

function hasProfile(person: TeamPerson): boolean {
  return (
    hasContent(person.name) &&
    hasContent(person.role) &&
    (hasContent(person.bio) ||
      Boolean(person.skills?.length) ||
      Boolean(person.links?.length))
  );
}

function hasOpenRoleDetails(person: TeamPerson): boolean {
  return Boolean(
    person.open &&
    hasContent(person.name) &&
    hasContent(person.role) &&
    hasContent(person.description)
  );
}

function toneClass(person: TeamPerson): string {
  return person.color ? ` ${colorToneClasses[person.color]}` : "";
}

function Avatar({
  person,
  className = "",
}: {
  person: TeamPerson;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-[14px] grid size-[92px] aspect-square shrink-0 place-items-center overflow-hidden rounded-full bg-[var(--tone,#d5dbe6)] font-heading text-[1.45rem] font-bold text-white ${person.photo ? "p-[3px]" : person.color === "yellow" ? "text-[#3b2f00]" : ""}${toneClass(person)} ${className}`.trim()}>
      {person.photo ? <img className="size-full min-h-0 min-w-0 max-h-full max-w-full rounded-full object-cover [object-position:center_18%]" src={person.photo} alt="" /> : person.open ? "?" : person.initials}
    </div>
  );
}

function Icon({ type }: { type: string }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true, className: "block size-4" };
  switch (type) {
    case "github":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.39.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12.01 12.01 0 0 0 24 12.3C24 5.67 18.63.3 12 .3Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M6.5 9H4V20h2.5V9ZM5.25 3.5A1.75 1.75 0 1 0 5.26 7a1.75 1.75 0 0 0 0-3.5ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.7.72-1.98 1.42-.1.25-.12.6-.12.95V20H11V9h2.4v1.51c.36-.55 1.12-1.76 3.3-1.76 2.41 0 4.22 1.58 4.22 4.98V20Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.5v-6.6l6.2 3.3-6.2 3.3Z"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9V11h2v10h3.5V11H17l.5-2.5h-3Z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14.5 3c.4 2.4 1.8 4 4.2 4.3v2.4c-1.4 0-2.8-.4-4-1.2v6.4c0 3.4-2.6 6.1-6.2 6.1S2.3 18.3 2.3 14.9c0-3.3 2.5-6 5.8-6.1v2.6c-1.7.2-3 1.6-3 3.5 0 2 1.6 3.5 3.6 3.5s3.5-1.6 3.5-3.6V3h2.3Z"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12.1 3.2A8.7 8.7 0 0 0 4.6 15.6L3.4 20.4l4.9-1.2a8.7 8.7 0 0 0 12.4-7.9 8.7 8.7 0 0 0-8.6-8.1Zm4.9 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.3-.5-2.3-1-3.8-3.3-3.9-3.5-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.6.7 2 .7 2.1.1.1 0 .3-.1.5l-.3.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1.2.1 1.6.8 1.9.9.3.2.4.2.5.3.1.2 0 .7-.2 1.3Z"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.8.8 7.2 4.6 7.2-4.6H4.8Zm14.4 1.4-6.6 4.2a1 1 0 0 1-1.1 0L5 8.7V17.2h14.2V8.7Z"
          />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M4.5 3.8c-.5-.3-1.1.1-1.1.7v15c0 .6.6 1 1.1.7l13-7.5c.5-.3.5-1.1 0-1.4l-13-7.5Z"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.7 8.2h-2.2a14 14 0 0 0-1.2-4.6 7.2 7.2 0 0 1 3.4 4.6ZM12 5.2c.7 1 1.5 2.8 1.8 5H10.2c.3-2.2 1.1-4 1.8-5ZM9.7 6.6a14 14 0 0 0-1.2 4.6H6.3a7.2 7.2 0 0 1 3.4-4.6ZM6.3 13.2h2.2c.2 1.7.7 3.3 1.2 4.6a7.2 7.2 0 0 1-3.4-4.6Zm5.7 5.6c-.7-1-1.5-2.8-1.8-5h3.6c-.3 2.2-1.1 4-1.8 5Zm2.3-.8c.5-1.3 1-2.9 1.2-4.8h2.2a7.2 7.2 0 0 1-3.4 4.8Z"
          />
        </svg>
      );
  }
}

function linkLabel(
  link: TeamLink,
  labels: Dictionary["team"]["links"]
): string {
  return (
    link.label ||
    (link.type in labels
      ? labels[link.type as keyof typeof labels]
      : link.type)
  );
}

function LinkRow({
  links,
  labels,
  withText = false,
  yellowTone = false,
}: {
  links: TeamLink[];
  labels: Dictionary["team"]["links"];
  withText?: boolean;
  yellowTone?: boolean;
}) {
  return (
    <ul className={`mt-[14px] flex list-none flex-wrap justify-center gap-2 ${withText ? "mt-0 justify-start" : ""}`}>
      {links.map((link) => {
        const label = linkLabel(link, labels);
        const external = link.type !== "email";
        return (
          <li key={link.href}>
            <a
              className={`grid size-9 place-items-center rounded-full bg-page-muted text-text hover:bg-[var(--tone,var(--blue))] hover:text-white ${yellowTone ? "hover:text-[#3b2f00]" : ""} ${withText ? "inline-flex h-auto w-full max-w-full items-center justify-start gap-2 rounded-full border border-line bg-surface px-3 py-2 text-[0.9rem] font-bold hover:border-[var(--tone,var(--blue))] hover:bg-surface-hover hover:text-[var(--tone,var(--blue))]" : ""}`}
              href={link.href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon type={link.type} />
              {withText && <span>{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function SkillList({
  skills,
  limit,
  compact = false,
  profile = false,
}: {
  skills: string[];
  limit?: number;
  compact?: boolean;
  profile?: boolean;
}) {
  const shown = limit ? skills.slice(0, limit) : skills;
  const extra = skills.length - shown.length;
  return (
    <ul className={`mt-[14px] flex list-none flex-wrap justify-center gap-1.5 ${compact ? "mt-[10px] min-h-14 max-h-14 content-start overflow-hidden" : ""} ${profile ? "mt-0 justify-start" : ""}`}>
      {shown.map((skill) => (
        <li className={`rounded-full bg-page-muted px-2.5 py-[3px] text-[0.78rem] font-semibold text-text ${profile ? "border border-line px-[11px] py-[5px]" : ""}`} key={skill}>{skill}</li>
      ))}
      {extra > 0 && <li className={`rounded-full bg-page-muted px-2.5 py-[3px] text-[0.78rem] font-semibold text-muted ${profile ? "border border-line px-[11px] py-[5px]" : ""}`}>+{extra}</li>}
    </ul>
  );
}

function MemberCard({
  person,
  lang,
  t,
  onOpen,
  featured = false,
}: {
  person: TeamPerson;
  lang: Locale;
  t: Dictionary["team"];
  onOpen: (person: TeamPerson) => void;
  featured?: boolean;
}) {
  const name = localize(person.name, lang);
  const role = localize(person.role, lang);
  const bio = localize(person.bio, lang);
  const profession = localize(person.profession, lang);
  const profile = hasProfile(person);

  return (
    <article className={`relative flex h-[540px] flex-col items-center rounded-card border border-line border-t-[3px] border-t-[var(--tone,var(--blue))] bg-surface px-[22px] pt-6 pb-5 text-center shadow-[0_1px_0_rgba(23,32,51,0.03)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(23,32,51,0.1)]${featured ? " lead" : ""}${toneClass(person)}`}>
      <div className="mb-[14px] flex h-28 flex-none items-center justify-center">
        <Avatar person={person} className={`!m-0 !size-[104px] ${person.photo ? "shadow-[0_0_0_3px_var(--tone,var(--blue))]" : ""}`} />
      </div>
      <div className="flex min-h-0 w-full flex-1 flex-col items-center">
        <h3 className="line-clamp-2 min-h-[2.4em] max-w-full text-[1.2rem] leading-[1.2] [text-wrap:balance]">
          {name}
          {person.aka && <span className="ml-2 inline-block align-[2px] font-body-ui text-[0.78rem] font-semibold tracking-[0.04em] text-muted uppercase">{person.aka}</span>}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-[2.4em] max-w-full text-[0.92rem] font-bold text-[var(--tone,var(--blue))]">{role}</p>
        <p className="mt-0.5 line-clamp-2 min-h-[2.4em] max-w-full text-[0.9rem] text-muted" aria-hidden={!profession}>
          {profession || "\u00a0"}
        </p>
        {bio && <p className="mt-2.5 line-clamp-3 min-h-[4.5em] overflow-hidden text-[0.98rem] text-text">{bio}</p>}
        {person.skills && person.skills.length > 0 && (
          <SkillList skills={person.skills} limit={4} compact />
        )}
        {person.links && person.links.length > 0 && (
          <LinkRow links={person.links.slice(0, 4)} labels={t.links} yellowTone={person.color === "yellow"} />
        )}
        {person.assist && (
          <p className="mt-2.5 text-[0.88rem] text-muted">
            {t.assistLabel} : {person.assist}
          </p>
        )}
        {profile && (
          <button
            type="button"
            className="mt-auto inline-flex cursor-pointer items-center justify-center gap-2 self-center rounded-full border border-line bg-surface px-[14px] py-[9px] text-[0.92rem] font-bold text-[var(--tone,var(--blue))] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-[var(--tone,var(--blue))] hover:bg-surface-hover"
            aria-haspopup="dialog"
            onClick={() => onOpen(person)}
          >
            <span>{t.profile}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}

function Seat({ person, lang }: { person: TeamPerson; lang: Locale }) {
  const description = localize(person.description, lang);

  return (
    <article className="flex h-[540px] flex-col items-center justify-center rounded-card border border-dashed border-line bg-transparent px-[22px] pt-6 pb-5 text-center shadow-[0_1px_0_rgba(23,32,51,0.03)]">
      <Avatar person={{ ...person, open: true }} className="!bg-page-muted !text-muted" />
      <h3 className="text-[1.2rem] leading-[1.2] font-semibold text-muted">{localize(person.name, lang)}</h3>
      <p className="mt-1 text-[0.92rem] font-bold text-brand-blue">{localize(person.role, lang)}</p>
      {description && <p className="mt-1.5 text-[0.9rem] text-muted">{description}</p>}
    </article>
  );
}

function ProfileDialog({
  person,
  lang,
  t,
  onClose,
}: {
  person: TeamPerson | null;
  lang: Locale;
  t: Dictionary["team"];
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (person && !dialog.open) dialog.showModal();
  }, [person]);

  if (!person) return null;

  const name = localize(person.name, lang);
  const role = localize(person.role, lang);
  const bio = localize(person.bio, lang);
  const profession = localize(person.profession, lang);
  const place = localize(person.place, lang);

  return (
    <dialog
      ref={ref}
      className="fixed left-1/2 top-1/2 m-0 max-h-[min(88vh,900px)] w-[min(760px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-0 bg-transparent p-0 backdrop:bg-[rgba(12,18,29,0.68)] backdrop:backdrop-blur-[5px] max-[640px]:max-h-[92dvh] max-[640px]:w-[min(480px,calc(100%-28px))]"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current?.close();
      }}
    >
      <article className={`relative max-h-[min(88vh,900px)] overflow-auto rounded-3xl bg-surface text-left text-text max-[640px]:rounded-[22px] max-[640px]:pb-[max(26px,env(safe-area-inset-bottom))]${toneClass(person)}`}>
        <div className="h-[120px] bg-[linear-gradient(120deg,color-mix(in_srgb,var(--tone,var(--blue))_84%,#172033),var(--tone,var(--blue)))] max-[640px]:h-24" aria-hidden="true" />
        <button
          type="button"
          className="absolute top-4 right-4 grid size-[42px] cursor-pointer place-items-center rounded-full border border-white/50 bg-ink/35 text-white transition-[background-color,transform] duration-200 hover:rotate-1 hover:bg-ink/70"
          aria-label={t.close}
          title={t.close}
          onClick={() => ref.current?.close()}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div className="mt-[-48px] flex items-end gap-[22px] px-[34px] pb-[26px] max-[640px]:mt-[-42px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[14px] max-[640px]:px-[22px] max-[640px]:pb-[22px]">
          <Avatar person={person} className="!m-0 !size-[124px] !border-[5px] !border-surface shadow-[0_8px_22px_rgba(23,32,51,0.16)] max-[640px]:!size-[100px]" />
          <div className="min-w-0 pb-[3px]">
            <h3 className="text-[clamp(1.45rem,4vw,2rem)] leading-[1.1]" id={titleId}>
              {name}
              {person.aka && <span className="ml-2 inline-block align-[2px] font-body-ui text-[0.78rem] font-semibold tracking-[0.04em] text-muted uppercase">{person.aka}</span>}
            </h3>
            <p className="mt-[7px] text-base font-bold text-[var(--tone,var(--blue))]">{role}</p>
            {profession && (
              <p className="mt-2 mr-[14px] inline-flex items-center gap-[7px] text-[0.88rem] text-muted">
                <BriefcaseBusiness className="shrink-0 text-[var(--tone,var(--blue))]" size={16} aria-hidden="true" />
                <span>{profession}</span>
              </p>
            )}
            {place && (
              <p className="mt-2 mr-[14px] inline-flex items-center gap-[7px] text-[0.88rem] text-muted">
                <MapPin className="shrink-0 text-[var(--tone,var(--blue))]" size={16} aria-hidden="true" />
                <span>{place}</span>
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-[18px] px-[22px] pb-[26px] min-[641px]:grid-cols-[minmax(0,1fr)_minmax(210px,0.72fr)] min-[641px]:gap-6 min-[641px]:px-[34px] min-[641px]:pb-[34px]">
          <div className="min-w-0">
            {bio && (
              <section className="mt-3 p-0 first:mt-0">
                <h4 className="mb-[7px] font-heading text-[0.78rem] tracking-[0.1em] text-muted uppercase">{t.aboutLabel}</h4>
                <p className="max-w-[62ch] text-base leading-[1.7] text-text">{bio}</p>
              </section>
            )}
            {person.skills && person.skills.length > 0 && (
              <section className="mt-3 p-0 first:mt-0">
                <h4 className="mb-[7px] font-heading text-[0.78rem] tracking-[0.1em] text-muted uppercase">{t.skillsLabel}</h4>
                <SkillList skills={person.skills} profile />
              </section>
            )}
          </div>
          {person.links && person.links.length > 0 && (
            <aside className="min-w-0 rounded-2xl border border-line bg-page-muted p-[14px]">
              <h4 className="mb-[7px] font-heading text-[0.78rem] tracking-[0.1em] text-muted uppercase">{t.linksLabel}</h4>
              <LinkRow links={person.links} labels={t.links} withText yellowTone={person.color === "yellow"} />
            </aside>
          )}
        </div>
      </article>
    </dialog>
  );
}

export default function Team({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const t = dict.team;
  const [active, setActive] = useState<TeamPerson | null>(null);
  const lead = bureau.find((person) => !person.open && hasProfile(person));
  const bureauOpen = bureau.filter(hasOpenRoleDetails);
  // N'affiche que les membres avec assez d'infos (bio, competences ou liens).
  const filled = poles.filter(
    (person) => !person.open && hasProfile(person)
  );
  const openRoles = poles.filter(hasOpenRoleDetails);

  return (
    <section id="equipe" className="bg-page-muted py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <p className="mb-[14px] mt-[42px] font-heading text-xs font-bold tracking-[0.12em] text-muted uppercase first-of-type:mt-0">{t.bureauLabel}</p>
        <div className={`grid grid-cols-1 items-stretch gap-4 min-[641px]:grid-cols-2 min-[901px]:grid-cols-3 ${bureauOpen.length ? "" : "min-[981px]:[&_.lead]:col-start-2"}`}>
          {lead && (
            <MemberCard person={lead} lang={lang} t={t} onOpen={setActive} featured />
          )}
          {bureauOpen.map((person) => (
            <Seat key={localize(person.role, "fr")} person={person} lang={lang} />
          ))}
        </div>

        <p className="mb-[14px] mt-[42px] font-heading text-xs font-bold tracking-[0.12em] text-muted uppercase">{t.polesLabel}</p>
        <div className="grid grid-cols-1 items-stretch gap-4 min-[641px]:grid-cols-2 min-[901px]:grid-cols-3">
          {filled.map((person) => (
            <MemberCard
              key={
                typeof person.name === "string"
                  ? person.name
                  : typeof person.role === "string"
                    ? person.role
                    : person.role.fr
              }
              person={person}
              lang={lang}
              t={t}
              onOpen={setActive}
            />
          ))}
        </div>

        {openRoles.length > 0 && (
          <>
            <p className="mb-[14px] mt-[42px] font-heading text-xs font-bold tracking-[0.12em] text-muted uppercase">{t.openLabel}</p>
            <div className="grid grid-cols-1 items-stretch gap-4 min-[641px]:grid-cols-[repeat(2,minmax(0,280px))]">
              {openRoles.map((person) => (
                <Seat key={localize(person.role, "fr")} person={person} lang={lang} />
              ))}
            </div>
          </>
        )}
      </div>

      <ProfileDialog person={active} lang={lang} t={t} onClose={() => setActive(null)} />
    </section>
  );
}
