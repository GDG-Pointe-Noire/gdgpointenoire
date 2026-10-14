// Projets et labs de la communaute GDG Pointe-Noire.
// Contenu generique de demarrage : un repo vide = aucun lien affiche (pas de
// lien mort). L'equipe remplit `repo` quand le depot existe.
// Voir SPEC_UI_UX_CONTENU.md, section 12.

export const projects = [
  {
    slug: "site-gdg-pointe-noire",
    name: { fr: "Site GDG Pointe-Noire", en: "GDG Pointe-Noire website" },
    description: {
      fr: "Le site officiel de la communauté, ouvert aux contributions.",
      en: "The community's official website, open to contributions.",
    },
    repo: "https://github.com/GDG-Pointe-Noire/gdgpointenoire",
    tags: ["Next.js", "Open source"],
    status: "active",
  },
  {
    slug: "starter-portfolio",
    name: { fr: "Starter portfolio", en: "Portfolio starter" },
    description: {
      fr: "Un gabarit pour publier votre profil membre en quelques minutes.",
      en: "A template to publish your member profile in minutes.",
    },
    // REMETTRE : URL du depot des que le starter existe.
    repo: "",
    tags: ["Starter"],
    status: "planned",
  },
  {
    slug: "demo-atelier-firebase",
    name: { fr: "Demo atelier Firebase", en: "Firebase workshop demo" },
    description: {
      fr: "Code de démonstration des ateliers Firebase/Flutter/IA.",
      en: "Demo code from the Firebase/Flutter/AI workshops.",
    },
    // REMETTRE : URL du depot des que les demos existent.
    repo: "",
    tags: ["Firebase", "Flutter", "AI"],
    status: "planned",
  },
];
