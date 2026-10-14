// Formats d'activite du GDG Pointe-Noire.
// Contenu generique de demarrage : intitules et exemples a confirmer par
// l'equipe selon l'activite reelle du groupe (SPEC_UI_UX_CONTENU.md, section 7).

export const programs = [
  {
    slug: "meetups",
    title: { fr: "Meetups", en: "Meetups" },
    text: {
      fr: "Talks courts, retours d'expérience et networking.",
      en: "Short talks, experience reports and networking.",
    },
    example: {
      fr: "Soirée lightning talks",
      en: "Lightning talks evening",
    },
    level: { fr: "Tous niveaux", en: "All levels" },
    tags: ["Community"],
  },
  {
    slug: "ateliers",
    title: { fr: "Ateliers", en: "Workshops" },
    text: {
      fr: "Sessions pratiques sur Flutter, Firebase, Android, Web, Cloud et IA.",
      en: "Hands-on sessions on Flutter, Firebase, Android, Web, Cloud and AI.",
    },
    example: {
      fr: "Atelier Build with AI de 2 h",
      en: "2-hour Build with AI workshop",
    },
    level: { fr: "Débutant / intermédiaire", en: "Beginner / intermediate" },
    tags: ["Flutter", "Firebase", "AI"],
  },
  {
    slug: "labs",
    title: { fr: "Labs", en: "Labs" },
    text: {
      fr: "Petits groupes qui construisent un prototype ou une démo.",
      en: "Small groups building a prototype or a demo.",
    },
    example: {
      fr: "Lab Firebase Auth pour un formulaire d'inscription",
      en: "Firebase Auth lab for a signup form",
    },
    level: { fr: "Intermédiaire / avancé", en: "Intermediate / advanced" },
    tags: ["Firebase", "Build"],
  },
  {
    slug: "mentoring",
    title: { fr: "Mentoring", en: "Mentoring" },
    text: {
      fr: "Accompagnement CV, portfolio, GitHub, projets et prise de parole.",
      en: "Help with CVs, portfolios, GitHub, projects and public speaking.",
    },
    example: {
      fr: "Revue de CV avant recrutement",
      en: "CV review before job hunting",
    },
    level: { fr: "Tous niveaux", en: "All levels" },
    tags: ["Career"],
  },
  {
    slug: "open-source",
    title: { fr: "Open source", en: "Open source" },
    text: {
      fr: "Contributions au site et aux outils de la communauté.",
      en: "Contributions to the community site and tooling.",
    },
    example: {
      fr: "Première PR sur le site du GDG",
      en: "First PR on the GDG website",
    },
    level: { fr: "Tous niveaux", en: "All levels" },
    tags: ["Git", "Web"],
  },
];
