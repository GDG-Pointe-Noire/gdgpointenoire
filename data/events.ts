// Evenements du GDG Pointe-Noire.
// Contenu generique de demarrage : dates, lieux, resultats et visuels sont a
// remplacer par l'equipe (voir SPEC_UI_UX_CONTENU.md, section 12).
// Aucun lien mort n'est affiche : registrationUrl vide -> CTA WhatsApp.

export const events: CommunityEvent[] = [
  {
    slug: "build-with-ai-pointe-noire",
    title: { fr: "Build with AI Pointe-Noire", en: "Build with AI Pointe-Noire" },
    date: "2026-11-14",
    time: { fr: "14h00", en: "2:00 PM" },
    location: { fr: "Pointe-Noire", en: "Pointe-Noire" },
    format: "workshop",
    level: { fr: "Débutant / intermédiaire", en: "Beginner / intermediate" },
    tags: ["AI", "Google AI Studio", "Web"],
    status: "upcoming",
    // FORMULAIRE-D-INSCRIPTION : a fournir par l'equipe.
    registrationUrl: "",
    image: "/assets/events/build-with-ai.jpg",
    imageAlt: {
      fr: "Affiche de l'atelier Build with AI Pointe-Noire",
      en: "Poster for the Build with AI Pointe-Noire workshop",
    },
    summary: {
      fr: "Deux heures pour construire, en main sur le clavier, un premier prototype d'application web assistée par IA.",
      en: "Two hands-on hours to build your first AI-assisted web app prototype.",
    },
  },
  {
    slug: "meetup-premiers-pas-tech",
    title: {
      fr: "Meetup : premiers pas dans la tech",
      en: "Meetup: your first steps in tech",
    },
    date: "2026-09-20",
    time: { fr: "10h00", en: "10:00 AM" },
    location: { fr: "Pointe-Noire", en: "Pointe-Noire" },
    format: "meetup",
    level: { fr: "Tous niveaux", en: "All levels" },
    tags: ["Career", "Community"],
    status: "past",
    registrationUrl: "",
    image: "/assets/events/meetup-premiers-pas.jpg",
    imageAlt: {
      fr: "Illustration du meetup premiers pas dans la tech",
      en: "Illustration for the first steps in tech meetup",
    },
    summary: {
      fr: "Témoignages, orientation et atelier CV ouvert a tous.",
      en: "Talks, guidance and an open CV workshop for everyone.",
    },
    participants: 30,
    result: {
      fr: "30 participants et un atelier CV ouvert à tous.",
      en: "30 attendees and an open CV workshop.",
    },
  },
  {
    slug: "codelab-flutter-premieres-ui",
    title: {
      fr: "Codelab Flutter : premières UI",
      en: "Flutter codelab: your first UIs",
    },
    date: "2026-08-23",
    time: { fr: "14h30", en: "2:30 PM" },
    location: { fr: "Pointe-Noire", en: "Pointe-Noire" },
    format: "workshop",
    level: { fr: "Débutant", en: "Beginner" },
    tags: ["Flutter", "Mobile"],
    status: "past",
    registrationUrl: "",
    image: "/assets/events/codelab-flutter.jpg",
    imageAlt: {
      fr: "Illustration du codelab Flutter premières UI",
      en: "Illustration for the Flutter first UIs codelab",
    },
    summary: {
      fr: "Pas a pas pour poser ses toutes premieres interfaces Flutter.",
      en: "A step-by-step session to lay out your very first Flutter screens.",
    },
    participants: 18,
    result: {
      fr: "18 participants, 6 apps de démonstration publiées.",
      en: "18 attendees, 6 demo apps shipped.",
    },
  },
];

export const featuredEvent =
  events.find((e) => e.status === "upcoming") ?? null;
export const pastEvents = events.filter((e) => e.status === "past");
export const eventTags = [...new Set(events.flatMap((e) => e.tags))];

const MONTHS = {
  fr: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

// Formate une date ISO "YYYY-MM-DD" sans passer par Date() : evite tout
// decalage de fuseau horaire entre le build et l'affichage.
export function formatEventDate(iso: string, lang: Locale = "fr") {
  const [year, month, day] = iso.split("-").map(Number);
  const months = MONTHS[lang];
  return `${day} ${months[month - 1]} ${year}`;
}

// Jour + mois courte pour la pastille de date, ex. "14 nov."
export function formatEventDateShort(iso: string, lang: Locale = "fr") {
  const [year, month, day] = iso.split("-").map(Number);
  const months = MONTHS[lang];
  const short = months[month - 1].slice(0, 3);
  return `${day} ${short}`;
}
import type { Locale, LocalizedText } from "./i18n";

export type EventFormat = "workshop" | "meetup" | "lab";
export type EventStatus = "upcoming" | "past";

export type CommunityEvent = {
  slug: string;
  title: LocalizedText;
  date: string;
  time: LocalizedText;
  location: LocalizedText;
  format: EventFormat;
  level: LocalizedText;
  tags: string[];
  status: EventStatus;
  registrationUrl: string;
  image: string;
  imageAlt: LocalizedText;
  summary: LocalizedText;
  participants?: number;
  result?: LocalizedText;
};
