// Données de l'équipe organisatrice du GDG Pointe-Noire.
// `role`, `bio`, `profession` et `place` sont bilingues ({ fr, en }).
// Les liens publics viennent des fiches data/team/*.md.

import type { LocalizedText } from "./i18n";

export type TeamLink = {
  type: string;
  href: string;
  label?: string;
};

export type TeamPerson = {
  name: string | LocalizedText;
  initials?: string;
  aka?: string;
  role: string | LocalizedText;
  profession?: string | LocalizedText;
  place?: string | LocalizedText;
  photo?: string;
  color?: "blue" | "red" | "yellow" | "green";
  bio?: string | LocalizedText;
  skills?: string[];
  links?: TeamLink[];
  assist?: string;
  open?: boolean;
  description?: string | LocalizedText;
};

export const bureau: TeamPerson[] = [
  {
    name: "Lelo Maurice",
    initials: "LM",
    role: { fr: "Lead / Responsable du groupe", en: "Lead / Group Organizer" },
    profession: { fr: "Formateur · Lead Dev · DevOps", en: "Trainer · Lead Dev · DevOps" },
    photo: "/assets/team/lelo_maurice.png",
    color: "blue",
    bio: {
      fr: "Formateur, lead developer et DevOps. Il dirige le GDG Pointe-Noire et construit des produits avec Flutter, Django, React et Node.js.",
      en: "Trainer, lead developer and DevOps engineer. He leads GDG Pointe-Noire and builds products with Flutter, Django, React and Node.js.",
    },
    skills: ["Flutter", "Django", "React", "Node.js", "Angular", "Dart", "Python", "JavaScript"],
    links: [
      { type: "web", href: "https://www.leloeduk.com/" },
      { type: "web", href: "https://lelomaurice.onrender.com", label: "Portfolio" },
      { type: "play", href: "https://play.google.com/store/apps/developer?id=Lelo+Eduk" },
      { type: "github", href: "https://github.com/leloeduk" },
      { type: "youtube", href: "https://www.youtube.com/@LeloEduk" },
      { type: "linkedin", href: "https://www.linkedin.com/in/lelo-maurice-714a72322/" },
      { type: "facebook", href: "https://www.facebook.com/maurice.lelo.92/" },
      { type: "whatsapp", href: "https://wa.me/242066826352" },
    ],
  },
  {
    name: { fr: "À pourvoir", en: "Open position" },
    role: { fr: "Co-Lead / Adjoint(e)", en: "Co-Lead / Deputy" },
    open: true,
  },
];

export const poles: TeamPerson[] = [
  {
    name: "Styve Maba",
    aka: "Kaiser",
    initials: "SM",
    role: { fr: "Responsable Technique", en: "Technical Lead" },
    profession: { fr: "Ingénieur logiciel · Full-Stack", en: "Software Engineer · Full-Stack" },
    photo: "/assets/team/kaiser_styve.png",
    color: "blue",
    bio: {
      fr: "Ingénieur logiciel spécialisé dans le développement web et mobile, l'architecture logicielle et les produits numériques. Il porte la technique du groupe et le partage de connaissances entre développeurs.",
      en: "Software engineer focused on web and mobile development, software architecture and digital products. He leads the group's technical work and knowledge sharing among developers.",
    },
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Node.js / NestJS",
      "React Native / Expo",
      "Software Architecture",
      "Cloud & APIs",
    ],
    links: [
      { type: "web", href: "https://kaiserstyve.com", label: "Portfolio" },
      { type: "github", href: "https://github.com/ksthecrowned" },
      { type: "linkedin", href: "https://www.linkedin.com/in/kaiser-styve" },
      { type: "facebook", href: "https://www.facebook.com/kysr.styve" },
      { type: "email", href: "mailto:kaiserstyve2@gmail.com" },
      { type: "whatsapp", href: "https://wa.me/242065152374" },
    ],
  },
  {
    name: "Sara Emmanuelle Moudilou",
    initials: "SE",
    role: { fr: "Assistante Technique", en: "Technical Assistant" },
    profession: { fr: "Full stack · Data analyste", en: "Full stack · Data analyst" },
    place: { fr: "Pointe-Noire, Congo", en: "Pointe-Noire, Congo" },
    photo: "/assets/team/sara_emmanuelle.jpg",
    color: "green",
    bio: {
      fr: "Développeuse full stack et data analyste en fin de licence. Elle assure le support technique, logistique et organisationnel des ateliers, meetups et projets de la communauté.",
      en: "Full-stack developer and data analyst finishing her bachelor's degree. She supports the community's workshops, meetups and projects, from logistics to technical setup.",
    },
    skills: ["Django", "PostgreSQL", "Docker", "Power BI", "BigQuery", "Figma", "WordPress"],
    links: [
      { type: "github", href: "https://github.com/Emma-17-2002" },
      { type: "linkedin", href: "https://www.linkedin.com/in/sara-emmanuelle-moudilou" },
      { type: "email", href: "mailto:moudsara9@gmail.com" },
      { type: "whatsapp", href: "https://wa.me/242069515725" },
    ],
  },
  {
    name: "Ruth Christy",
    initials: "RC",
    role: { fr: "Responsable des Événements", en: "Events Lead" },
    profession: {
      fr: "Développeuse web · SEO · Community manager",
      en: "Web developer · SEO · Community manager",
    },
    photo: "/assets/team/ruth_christy.jpg",
    color: "red",
    bio: {
      fr: "Développeuse web, consultante SEO et community manager. Elle organise les événements du GDG Pointe-Noire.",
      en: "Web developer, SEO consultant and community manager. She organizes events for GDG Pointe-Noire.",
    },
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Python"],
    links: [
      { type: "web", href: "https://ruthmilandou.github.io/Ruth-portofolio/", label: "Portfolio" },
      { type: "github", href: "https://github.com/RuthMilandou/RuthMilandou" },
      { type: "linkedin", href: "https://www.linkedin.com/in/ruth-milandou/" },
      { type: "email", href: "mailto:christymilandou60@gmail.com" },
    ],
  },
  {
    name: "Elfid Donsem NDONGOSSOLO",
    initials: "ED",
    role: { fr: "Communication & Réseaux Sociaux", en: "Communications & Social Media" },
    color: "yellow",
  },
  {
    name: "Nevy Presty",
    initials: "NP",
    role: { fr: "Marketing & Design", en: "Marketing & Design" },
    profession: {
      fr: "Dev mobile · Étudiant · Professeur",
      en: "Mobile dev · Student · Teacher",
    },
    photo: "/assets/team/nevy_presty.jpg",
    color: "green",
    bio: {
      fr: "Étudiant, développeur mobile et professeur de mathématiques et de physique. Il s'occupe du marketing et du design du groupe.",
      en: "Student, mobile developer and maths and physics teacher. He handles the group's marketing and design.",
    },
    skills: ["Flutter", "Dart", "Bootstrap", "JavaScript", "Python", "PHP"],
    links: [
      { type: "web", href: "https://nevy-portfolio.onrender.com/", label: "Portfolio" },
      { type: "github", href: "https://github.com/nevy" },
      { type: "facebook", href: "https://www.facebook.com/photo/?fbid=985550041132604&set=a.117815597906057" },
      { type: "whatsapp", href: "https://wa.me/242067673817" },
    ],
  },
  {
    name: "Breme",
    initials: "B",
    role: { fr: "Partenariats & Sponsors", en: "Partnerships & Sponsors" },
    assist: "Rosty",
    color: "blue",
  },
  {
    name: "Honey Hasby",
    initials: "HH",
    role: { fr: "Communauté & Membres", en: "Community & Members" },
    color: "red",
  },
  {
    name: { fr: "Poste libre", en: "Open position" },
    role: { fr: "Responsable Logistique", en: "Logistics Lead" },
    open: true,
  },
  {
    name: { fr: "Poste libre", en: "Open position" },
    role: { fr: "Responsable Finances", en: "Finance Lead" },
    open: true,
  },
  {
    name: "François Nsengimana",
    initials: "FN",
    role: { fr: "Formation & Ateliers", en: "Training & Workshops" },
    profession: { fr: "Ingénieur logiciel", en: "Software Engineer" },
    place: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
    photo: "/assets/team/nsengimana_francois.jpg",
    color: "yellow",
    bio: {
      fr: "Ingénieur logiciel basé à Brazzaville. Il conçoit les formations et les ateliers du groupe.",
      en: "Software engineer based in Brazzaville. He designs the group's training and workshops.",
    },
    skills: ["Angular", "Vue.js", "FastAPI", "Spring", "AWS", "Figma"],
    links: [
      { type: "github", href: "https://github.com/IMANA47" },
      { type: "linkedin", href: "https://www.linkedin.com/in/francois-nsengimana/en" },
      { type: "youtube", href: "https://www.youtube.com/@IMANA47" },
      { type: "tiktok", href: "https://www.tiktok.com/@imana_47" },
      { type: "whatsapp", href: "https://wa.me/242069485154" },
    ],
  },
  {
    name: "Béni Grâce Mananga",
    initials: "BM",
    role: { fr: "Photo / Vidéo & Contenu", en: "Photo / Video & Content" },
    color: "green",
  },
];
