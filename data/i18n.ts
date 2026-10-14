// Dictionnaires de traduction du site. Ajoutez une clé des deux côtés (fr et en)
// pour garder les deux langues synchronisées.

export type Locale = "fr" | "en";
export type LocalizedText = Record<Locale, string>;

export const locales = ["fr", "en"] as const;
export const defaultLocale: Locale = "fr";

export const whatsappLink = "https://chat.whatsapp.com/BgX9MAKCB4DFr2entEsVrb";

// Liens officiels du GDG Pointe-Noire. Les entrees marquees placeholder: true
// ne sont pas affichees tant que l'equipe n'a pas fourni les vraies URLs
// (voir SPEC_UI_UX_CONTENU.md, section 12). Recherche : rg "VOTRE-|REMETTRE" data/
export const siteLinks = {
  github: {
    href: "https://github.com/GDG-Pointe-Noire/gdgpointenoire",
    placeholder: false,
  },
  email: { href: "mailto:contact@VOTRE-DOMAINE.cd", placeholder: true },
  facebook: { href: "https://www.facebook.com/VOTRE-PAGE", placeholder: true },
  linkedin: {
    href: "https://www.linkedin.com/company/VOTRE-PAGE",
    placeholder: true,
  },
  youtube: { href: "https://www.youtube.com/@VOTRE-CHAINE", placeholder: true },
};

const dictionaries = {
  fr: {
    brand: "GDG Pointe-Noire",
    nav: {
      home: "Accueil",
      menu: "Ouvrir ou fermer le menu",
      about: "À propos",
      events: "Événements",
      programs: "Programmes",
      team: "Équipe",
      members: "Membres",
      partners: "Partenaires",
      join: "Rejoindre",
      language: "Choisir la langue",
      themeDark: "Activer le thème sombre",
      themeLight: "Activer le thème clair",
    },
    banner:
      "Core Team 2025-2026 — des postes de l'équipe sont encore ouverts.",
    hero: {
      badge: "Google Developer Group · Pointe-Noire",
      titleBefore: "GDG ",
      titleHighlight: "Pointe-Noire",
      titleAfter: "",
      text: "Apprendre, construire et connecter la communauté tech de Pointe-Noire autour des technologies Google.",
      location: "Pointe-Noire",
      signals: [
        "Meetups, ateliers, labs, mentoring",
        "Ouvert aux débutants comme aux profils confirmés",
      ],
      primaryCta: "Voir le prochain événement",
      secondaryCta: "Rejoindre la communauté",
      nextLabel: "Prochain rendez-vous",
      joinBtn: "Rejoindre la communauté",
      teamBtn: "Rencontrer l'équipe",
    },
    band: {
      caption: "Meetups, ateliers, labs — la communauté tech de Pointe-Noire en action.",
      alt: "Visuel de la communauté GDG Pointe-Noire : membres réunis pendant un atelier",
    },
    events: {
      title: "Prochain événement",
      subtitle: "Ateliers, meetups et labs à Pointe-Noire — venez comme vous êtes.",
      emptyTitle: "Aucun événement annoncé",
      emptyText:
        "Aucun événement annoncé pour le moment. Rejoignez le groupe pour recevoir la prochaine date.",
      register: "S'inscrire",
      joinForUpdates: "Rejoindre pour être informé",
      levelLabel: "Niveau",
      formats: { workshop: "Atelier", meetup: "Meetup", lab: "Lab" },
      pastTitle: "Événements récents",
      pastSubtitle: "Un aperçu de ce qu'on a déjà construit ensemble.",
      soonTitle: "Ce qui arrive bientôt",
      soonText:
        "L'historique des événements apparaîtra ici dès notre première rencontre.",
      participants: "{n} participants",
    },
    programs: {
      title: "Ce que l'on fait",
      subtitle:
        "Cinq formats concrets, du premier talk à la contribution open source.",
      exampleLabel: "Exemple",
      levelLabel: "Niveau",
    },
    paths: {
      title: "Trouvez votre place",
      subtitle: "Quatre portes d'entrée, quel que soit votre profil.",
      items: [
        {
          key: "beginner",
          title: "Je débute",
          text: "Apprendre les bases, poser des questions et rencontrer d'autres apprenants.",
          cta: "Rejoindre",
        },
        {
          key: "builder",
          title: "Je construis déjà",
          text: "Partager un projet, trouver des pairs et contribuer aux labs.",
          cta: "Rejoindre",
        },
        {
          key: "speaker",
          title: "Je veux parler",
          text: "Proposer un talk, animer un atelier ou documenter une expérience.",
          cta: "Proposer un talk",
        },
        {
          key: "organization",
          title: "Je représente une organisation",
          text: "Sponsoriser, accueillir un meetup ou soutenir une cohorte.",
          cta: "Devenir partenaire",
        },
      ],
    },
    projects: {
      title: "Projets et labs",
      subtitle: "Ce que la communauté construit, en open source.",
      planned: "À venir",
      viewRepo: "Voir sur GitHub",
    },
    partners: {
      title: "Soutenez le GDG Pointe-Noire",
      text: "Vous êtes une école, une entreprise ou un collectif de Pointe-Noire ? Soutenez le GDG Pointe-Noire : nous formons la prochaine génération de talents locaux, en concret, avec vos sujets et vos besoins.",
      formats: ["Lieu", "Sponsoring", "Speakers", "Équipement", "Mentorat"],
      cta: "Discuter d'un partenariat",
    },
    about: {
      title: "À propos",
      subtitle: "Un espace ouvert à tous ceux qui veulent grandir dans la technologie.",
      cards: [
        {
          icon: "learn",
          bg: "#e8f0fe",
          title: "Apprendre",
          text: "Ateliers et formations pratiques pour monter en compétences, du débutant au confirmé.",
        },
        {
          icon: "share",
          bg: "#fce8e6",
          title: "Partager",
          text: "Rencontres, conférences et talks pour échanger expériences et bonnes pratiques.",
        },
        {
          icon: "build",
          bg: "#fef7e0",
          title: "Construire",
          text: "Projets collaboratifs et événements pour transformer les idées en réalisations concrètes.",
        },
        {
          icon: "connect",
          bg: "#e6f4ea",
          title: "Connecter",
          text: "Un réseau local relié à la communauté mondiale des Google Developer Groups.",
        },
      ],
    },
    team: {
      title: "L'équipe organisatrice",
      subtitle: "Les personnes qui portent les ateliers, les événements et la vie du GDG Pointe-Noire.",
      bureauLabel: "Bureau",
      polesLabel: "Pôles",
      openLabel: "Postes ouverts",
      assistLabel: "Assistant(e)",
      profile: "Voir le profil",
      close: "Fermer",
      aboutLabel: "À propos",
      skillsLabel: "Compétences",
      linksLabel: "Liens",
      links: {
        web: "Site",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "YouTube",
        facebook: "Facebook",
        tiktok: "TikTok",
        whatsapp: "WhatsApp",
        email: "E-mail",
        play: "Google Play",
      },
    },
    members: {
      title: "Membres actifs",
      subtitle: "Ceux qui font vivre la communauté au quotidien.",
      emptyTitle: "Les premiers profils membres arrivent.",
      note: "Rejoignez la communauté pour être référencé ici après participation à nos ateliers et meetups.",
    },
    join: {
      eyebrow: "Votre communauté tech à Pointe-Noire",
      title: "La suite se construit ensemble.",
      text: "Rejoignez le groupe WhatsApp pour échanger avec la communauté, poser vos questions et être informé des prochains rendez-vous.",
      btn: "Rejoindre le groupe WhatsApp",
      location: "Pointe-Noire",
      asideTitle: "Un premier pas, simplement.",
      asideText: "Pas besoin d’être expert : la communauté est ouverte aux curieux, aux personnes qui apprennent et à celles qui construisent déjà.",
      asideNote: "Échanges · Ateliers · Rencontres",
    },
    footer: "© 2025-2026 GDG Pointe-Noire · Google Developer Group Pointe-Noire",
    footerMention:
      "GDG Pointe-Noire est une communauté indépendante de développeurs, rattachée au programme Google Developer Groups.",
    footerLinks: {
      github: "GitHub",
      whatsapp: "WhatsApp",
      email: "Contact",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      youtube: "YouTube",
    },
  },
  en: {
    brand: "GDG Pointe-Noire",
    nav: {
      home: "Home",
      menu: "Open or close menu",
      about: "About",
      events: "Events",
      programs: "Programs",
      team: "Team",
      members: "Members",
      partners: "Partners",
      join: "Join",
      language: "Choose language",
      themeDark: "Switch to dark theme",
      themeLight: "Switch to light theme",
    },
    banner:
      "Core Team 2025-2026 — a few organizing roles are still open.",
    hero: {
      badge: "Google Developer Group · Pointe-Noire",
      titleBefore: "GDG ",
      titleHighlight: "Pointe-Noire",
      titleAfter: "",
      text: "Learn, build and connect Pointe-Noire's tech community around Google technologies.",
      location: "Pointe-Noire",
      signals: [
        "Meetups, workshops, labs, mentoring",
        "Open to beginners and experienced profiles alike",
      ],
      primaryCta: "See the next event",
      secondaryCta: "Join the community",
      nextLabel: "Next up",
      joinBtn: "Join the community",
      teamBtn: "Meet the team",
    },
    band: {
      caption: "Meetups, workshops, labs — Pointe-Noire's tech community in action.",
      alt: "GDG Pointe-Noire community visual: members gathered during a workshop",
    },
    events: {
      title: "Next event",
      subtitle: "Workshops, meetups and labs in Pointe-Noire — come as you are.",
      emptyTitle: "No event announced yet",
      emptyText:
        "No event announced yet. Join the group to get the next date.",
      register: "Register",
      joinForUpdates: "Join to stay posted",
      levelLabel: "Level",
      formats: { workshop: "Workshop", meetup: "Meetup", lab: "Lab" },
      pastTitle: "Recent events",
      pastSubtitle: "A glimpse of what we have already built together.",
      soonTitle: "Coming up soon",
      soonText:
        "Past events will appear here after our first gathering.",
      participants: "{n} attendees",
    },
    programs: {
      title: "What we do",
      subtitle:
        "Five concrete formats, from your first talk to open-source contribution.",
      exampleLabel: "Example",
      levelLabel: "Level",
    },
    paths: {
      title: "Find your place",
      subtitle: "Four entry points, whatever your profile.",
      items: [
        {
          key: "beginner",
          title: "I'm starting out",
          text: "Learn the basics, ask questions and meet other learners.",
          cta: "Join",
        },
        {
          key: "builder",
          title: "I'm already building",
          text: "Share a project, find peers and contribute to labs.",
          cta: "Join",
        },
        {
          key: "speaker",
          title: "I want to speak",
          text: "Submit a talk, run a workshop or document an experience.",
          cta: "Submit a talk",
        },
        {
          key: "organization",
          title: "I represent an organization",
          text: "Sponsor, host a meetup or support a cohort.",
          cta: "Become a partner",
        },
      ],
    },
    projects: {
      title: "Projects and labs",
      subtitle: "What the community builds, in the open.",
      planned: "Planned",
      viewRepo: "View on GitHub",
    },
    partners: {
      title: "Support GDG Pointe-Noire",
      text: "Are you a school, a company or a collective in Pointe-Noire? Support GDG Pointe-Noire: we train the next generation of local tech talent, hands-on, with your topics and your needs.",
      formats: ["Venue", "Sponsorship", "Speakers", "Equipment", "Mentoring"],
      cta: "Discuss a partnership",
    },
    about: {
      title: "About",
      subtitle: "A space open to everyone who wants to grow in technology.",
      cards: [
        {
          icon: "learn",
          bg: "#e8f0fe",
          title: "Learn",
          text: "Hands-on workshops and training to build your skills, from beginner to advanced.",
        },
        {
          icon: "share",
          bg: "#fce8e6",
          title: "Share",
          text: "Meetups, conferences and talks to exchange experience and best practices.",
        },
        {
          icon: "build",
          bg: "#fef7e0",
          title: "Build",
          text: "Collaborative projects and events to turn ideas into real achievements.",
        },
        {
          icon: "connect",
          bg: "#e6f4ea",
          title: "Connect",
          text: "A local network connected to the worldwide Google Developer Groups community.",
        },
      ],
    },
    team: {
      title: "Organizing team",
      subtitle: "The people who run the workshops, events and day-to-day life of GDG Pointe-Noire.",
      bureauLabel: "Board",
      polesLabel: "Areas",
      openLabel: "Open roles",
      assistLabel: "Assistant",
      profile: "View profile",
      close: "Close",
      aboutLabel: "About",
      skillsLabel: "Skills",
      linksLabel: "Links",
      links: {
        web: "Website",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "YouTube",
        facebook: "Facebook",
        tiktok: "TikTok",
        whatsapp: "WhatsApp",
        email: "Email",
        play: "Google Play",
      },
    },
    members: {
      title: "Active members",
      subtitle: "The people who keep the community alive every day.",
      emptyTitle: "First member profiles are on their way.",
      note: "Join the community to be featured here after taking part in our workshops and meetups.",
    },
    join: {
      eyebrow: "Your tech community in Pointe-Noire",
      title: "Let's build what comes next.",
      text: "Join the WhatsApp group to meet the community, ask questions and hear about upcoming meetups.",
      btn: "Join the WhatsApp group",
      location: "Pointe-Noire",
      asideTitle: "Getting started is simple.",
      asideText: "You don't need to be an expert: our community is open to the curious, people who are learning and those already building.",
      asideNote: "Conversations · Workshops · Meetups",
    },
    footer: "© 2025-2026 GDG Pointe-Noire · Google Developer Group Pointe-Noire",
    footerMention:
      "GDG Pointe-Noire is an independent community of developers, part of the Google Developer Groups program.",
    footerLinks: {
      github: "GitHub",
      whatsapp: "WhatsApp",
      email: "Contact",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      youtube: "YouTube",
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];

export function isLocale(locale: string): locale is Locale {
  return locale === "fr" || locale === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
