"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, MapPin, X } from "lucide-react";
import { bureau, poles } from "@/data/team";

function localize(field, lang) {
  if (field && typeof field === "object") return field[lang] || field.fr;
  return field;
}

function hasContent(value) {
  return typeof value === "string"
    ? value.trim().length > 0
    : Boolean(
        value &&
          typeof value === "object" &&
          Object.values(value).some(
            (localized) => typeof localized === "string" && localized.trim()
          )
      );
}

function hasProfile(person) {
  return (
    hasContent(person.name) &&
    hasContent(person.role) &&
    (hasContent(person.bio) || person.skills?.length > 0 || person.links?.length > 0)
  );
}

function hasOpenRoleDetails(person) {
  return (
    person.open &&
    hasContent(person.name) &&
    hasContent(person.role) &&
    hasContent(person.description)
  );
}

function toneClass(person) {
  return person.color ? ` c-${person.color}` : "";
}

function Avatar({ person, className = "" }) {
  return (
    <div className={`avatar${person.photo ? " has-photo" : ""}${toneClass(person)} ${className}`.trim()}>
      {person.photo ? <img src={person.photo} alt="" /> : person.open ? "?" : person.initials}
    </div>
  );
}

function Icon({ type }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true, className: "link-icon" };
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

function linkLabel(link, labels) {
  return link.label || labels[link.type] || link.type;
}

function LinkRow({ links, labels, withText = false }) {
  return (
    <ul className={`link-row${withText ? " labelled" : ""}`}>
      {links.map((link) => {
        const label = linkLabel(link, labels);
        const external = link.type !== "email";
        return (
          <li key={link.href}>
            <a
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

function SkillList({ skills, limit }) {
  const shown = limit ? skills.slice(0, limit) : skills;
  const extra = skills.length - shown.length;
  return (
    <ul className="skills">
      {shown.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
      {extra > 0 && <li className="more">+{extra}</li>}
    </ul>
  );
}

function MemberCard({ person, lang, t, onOpen, featured = false }) {
  const name = localize(person.name, lang);
  const role = localize(person.role, lang);
  const bio = localize(person.bio, lang);
  const profession = localize(person.profession, lang);
  const profile = hasProfile(person);

  return (
    <article className={`member${featured ? " lead" : ""}${toneClass(person)}`}>
      <div className="member-portrait">
        <Avatar person={person} />
      </div>
      <div className="member-body">
        <h3>
          {name}
          {person.aka && <span className="aka">{person.aka}</span>}
        </h3>
        <p className="role">{role}</p>
        <p className="profession" aria-hidden={!profession}>
          {profession || "\u00a0"}
        </p>
        {bio && <p className="bio">{bio}</p>}
        {person.skills?.length > 0 && (
          <SkillList skills={person.skills} limit={4} />
        )}
        {person.links?.length > 0 && (
          <LinkRow links={person.links.slice(0, 4)} labels={t.links} />
        )}
        {person.assist && (
          <p className="assist">
            {t.assistLabel} : {person.assist}
          </p>
        )}
        {profile && (
          <button
            type="button"
            className="profile-btn"
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

function Seat({ person, lang }) {
  const description = localize(person.description, lang);

  return (
    <article className="seat">
      <Avatar person={{ ...person, open: true }} />
      <h3>{localize(person.name, lang)}</h3>
      <p className="role">{localize(person.role, lang)}</p>
      {description && <p className="seat-description">{description}</p>}
    </article>
  );
}

function ProfileDialog({ person, lang, t, onClose }) {
  const ref = useRef(null);
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
      className="profile-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current.close();
      }}
    >
      <article className={`profile-sheet${toneClass(person)}`}>
        <div className="profile-banner" aria-hidden="true" />
        <button
          type="button"
          className="profile-close"
          aria-label={t.close}
          title={t.close}
          onClick={() => ref.current?.close()}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div className="profile-intro">
          <Avatar person={person} className="profile-avatar" />
          <div className="profile-identity">
            <h3 id={titleId}>
              {name}
              {person.aka && <span className="aka">{person.aka}</span>}
            </h3>
            <p className="role">{role}</p>
            {profession && (
              <p className="profile-detail">
                <BriefcaseBusiness size={16} aria-hidden="true" />
                <span>{profession}</span>
              </p>
            )}
            {place && (
              <p className="profile-detail">
                <MapPin size={16} aria-hidden="true" />
                <span>{place}</span>
              </p>
            )}
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-main">
            {bio && (
              <section className="profile-block">
                <h4>{t.aboutLabel}</h4>
                <p className="profile-bio">{bio}</p>
              </section>
            )}
            {person.skills?.length > 0 && (
              <section className="profile-block">
                <h4>{t.skillsLabel}</h4>
                <SkillList skills={person.skills} />
              </section>
            )}
          </div>
          {person.links?.length > 0 && (
            <aside className="profile-links">
              <h4>{t.linksLabel}</h4>
              <LinkRow links={person.links} labels={t.links} withText />
            </aside>
          )}
        </div>
      </article>
    </dialog>
  );
}

export default function Team({ dict, lang }) {
  const t = dict.team;
  const [active, setActive] = useState(null);
  const lead = bureau.find((person) => !person.open && hasProfile(person));
  const bureauOpen = bureau.filter(hasOpenRoleDetails);
  // N'affiche que les membres avec assez d'infos (bio, competences ou liens).
  const filled = poles.filter(
    (person) => !person.open && hasProfile(person)
  );
  const openRoles = poles.filter(hasOpenRoleDetails);

  return (
    <section id="equipe" className="alt">
      <div className="container">
        <div className="title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <p className="group-label">{t.bureauLabel}</p>
        <div className={`bureau-grid${bureauOpen.length ? " has-open" : ""}`}>
          {lead && (
            <MemberCard person={lead} lang={lang} t={t} onOpen={setActive} featured />
          )}
          {bureauOpen.map((person) => (
            <Seat key={localize(person.role, "fr")} person={person} lang={lang} />
          ))}
        </div>

        <p className="group-label">{t.polesLabel}</p>
        <div className="team-grid">
          {filled.map((person) => (
            <MemberCard
              key={typeof person.name === "string" ? person.name : person.role.fr}
              person={person}
              lang={lang}
              t={t}
              onOpen={setActive}
            />
          ))}
        </div>

        {openRoles.length > 0 && (
          <>
            <p className="group-label">{t.openLabel}</p>
            <div className="team-grid seats">
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
