# Direction produit et design — site GDG Pointe-Noire

Date : 2026-10-06  
Statut : à relire avant le plan d’implémentation  
Remplace, pour l’architecture et le visuel : `SPEC_UI_UX_CONTENU.md`  
Conserve de ce fichier : l’inventaire des contenus à valider par l’équipe (section 12)

## 1. Objectif

Livrer un site **fini** : pages réelles, navigation claire, premier écran mémorable, états vides dessinés. Le contenu manquant est du **travail étiqueté**, pas une page cassée. L’équipe remplacera les exemples plus tard sans refaire le design.

Le visiteur doit, en moins de dix secondes :

- savoir que c’est le GDG de **Pointe-Noire** ;
- voir la **prochaine date** (ou « Bientôt ») ;
- avoir une action principale : s’inscrire ou être prévenu ;
- pouvoir rejoindre, lire, ou trouver quelqu’un.

Ce n’est pas une landing SaaS. Ce n’est pas une page unique trop longue. C’est le site d’une communauté locale.

## 2. Constats sur l’existant

Le site actuel (`app/[lang]/page.jsx`) est une seule page. Les sections prévues existent déjà : hero, événements, à propos, programmes, parcours, projets, équipe, membres, partenaires, rejoindre.

Ce qui empêche l’effet « pro » :

- Le premier écran est un hero centré, titre arc-en-ciel, photo d’un autre DevFest, bannière « postes ouverts » au-dessus de tout.
- Huit ancres dans le menu ; hamburger dès 960 px.
- Trois grilles de cartes d’affilée disent la même chose (à propos, programmes, parcours).
- Toutes les actions mènent au même WhatsApp, avec des libellés différents.
- Membres est vide. Partenaires n’ont pas de logos. Deux projets sur trois n’ont pas de dépôt.
- Les photos « communauté » viennent d’Accra, Tamale, Prayagraj. Elles font croire à une activité qui n’est pas la vôtre.
- L’équipe est un bloc trop long (bios, tags, réseaux sur chaque carte).
- Il n’y a aucune URL partageable hors `/fr` et `/en`.

`SPEC_UI_UX_CONTENU.md` a bien posé le fond éditorial. Cette spec change la **forme** : pages, hiérarchie, traitement visuel, règles de placeholders.

## 3. Principes

1. **Une page, un travail.** L’accueil convainc. Les événements datent. L’équipe présente les organisateurs. L’annuaire présente les membres. Le blog publie. Rejoindre explique le premier pas.
2. **L’événement commande.** Bouton principal = prochaine date. « Rejoindre » est secondaire, sauf sur `/rejoindre`.
3. **Pas de photo d’emprunt.** Tant qu’une image n’est pas du GDG Pointe-Noire, on affiche un panneau typographique (fond encre, date ou initiales). Les JPEG d’autres villes sortent du site.
4. **Placeholder ≠ mensonge.** Un exemple porte le label `Exemple` et le champ `placeholder: true`. Un chiffre non validé ne s’affiche pas comme un résultat réel.
5. **Moins de cartes identiques.** Rythme : plein écran / liste / texte / grille. Pas trois grilles de même poids d’affilée.
6. **Google en signal, pas en décor.** Quatre points du logo, filet sous le hero, tags. Jamais le titre peint aux quatre couleurs. Jamais un fond « mur de logos Google ».
7. **FR et EN naissent ensemble.** Toute clé, tout article, toute fiche a les deux langues dans la même livraison.
8. **Le site reste simple à tenir.** JavaScript / JSX, styles dans `app/globals.css`. Pas de Tailwind, pas de TypeScript, pas de CMS dans cette vague.

## 4. Système visuel

### 4.1 Palette

| Jeton | Hex | Usage |
|---|---|---|
| Ink | `#172033` | Panneau événement, pied, sections immersives |
| Paper | `#FFFFFF` | Fond des pages, colonne gauche du hero |
| Soft | `#F4F7FB` | Bandes alternées, cartes secondaires |
| Blue | `#4285F4` | Bouton principal, liens, focus |
| Red / Yellow / Green | `#EA4335` / `#FBBC04` / `#34A853` | Points du logo, filet, pastille de format |

Contraste texte / fond : encre sur papier, blanc sur encre. Le bouton bleu sur blanc, le bouton papier sur encre.

### 4.2 Typographie

Conserver **Bricolage Grotesque** (titres) et **Source Sans 3** (corps).

- Titre de page (hero) : une seule couleur, encre ou blanc. Très grand, aligné à gauche. Pas d’arc-en-ciel.
- Date dans le panneau : plus grande que le titre de l’événement.
- Paragraphes : 60–75 caractères, `letter-spacing` des titres réduit (pas le `-0.03em` actuel sur tout).
- Pas de labels en capitales systématiques.

### 4.3 Formes et rythme

- Rayon actuel (`18px`) trop « carte produit ». Passer à **8px** pour les cartes, **999px** pour les boutons et pastilles.
- Le hero n’est pas une carte dans un container. C’est un **split plein viewport** : papier à gauche, encre à droite.
- Une seule bande Google sous le hero : 4 px, bleu / rouge / jaune / vert à parts égales.
- Hover : translation 2 px ou changement de bordure. Pas d’ombre lourde.

### 4.4 Composants de base

- `Btn` : `primary` (bleu), `ghost` (lien), `inverse` (papier sur encre).
- `ExampleFlag` : pastille `Exemple` / `Sample`, visible dès que `placeholder: true`.
- `InkPanel` : fond encre, texte blanc, date énorme. Accueille plus tard une photo locale en fond, avec voile.
- `PersonCard` : photo ou initiales, nom, rôle. Bio et réseaux sur la fiche, pas sur la carte.
- `EmptyBlock` : titre, une phrase, un bouton. Jamais une section sans contenu ni explication.
- `PlaceholderSlot` : cadre en pointillés pour logo partenaire ou photo à fournir.

## 5. Architecture des pages

Préfixe langue : `/fr/…` et `/en/…`. Les chemins après la langue sont **identiques** (pas de `/events` vs `/evenements`). Le middleware actuel gère déjà `/${locale}/…`.

### 5.1 Menu

Six liens, plus le switch FR/EN :

| Label FR | Cible |
|---|---|
| Accueil | `/[lang]` |
| Événements | `/[lang]/evenements` |
| Blog | `/[lang]/blog` |
| Membres | `/[lang]/membres` |
| Équipe | `/[lang]/equipe` |
| Rejoindre | `/[lang]/rejoindre` — seul item traité en bouton |

Hamburger sous **880 px**. Au-dessus, les six liens tiennent si le poids typographique du menu est réduit (0.9rem, gap 18px). « Rejoindre » reste visible dans le hamburger.

### 5.2 Pied

Colonnes :

1. Marque + mention d’indépendance GDG.
2. Site : Accueil, À propos, Programmes, Projets, Partenaires, Code de conduite.
3. Communauté : Événements, Blog, Membres, Équipe, Rejoindre.
4. Réseaux : uniquement les liens **non placeholder** (GitHub et WhatsApp aujourd’hui). Les autres apparaissent quand `placeholder: false`.

### 5.3 Carte des routes

| Page | Route | Rôle |
|---|---|---|
| Accueil | `/[lang]` | Convaincre, montrer la date, aiguiller |
| À propos | `/[lang]/a-propos` | Qui, où, pourquoi |
| Programmes | `/[lang]/programmes` | Cinq formats |
| Événements | `/[lang]/evenements` | Liste + prochaine date |
| Fiche événement | `/[lang]/evenements/[slug]` | Une date, une action |
| Blog | `/[lang]/blog` | Liste d’articles |
| Article | `/[lang]/blog/[slug]` | Texte long |
| Projets | `/[lang]/projets` | Ce que la communauté construit |
| Équipe | `/[lang]/equipe` | Organisateurs + postes |
| Fiche organisateur | `/[lang]/equipe/[slug]` | Bio complète (remplace le modal) |
| Annuaire | `/[lang]/membres` | Membres de la communauté |
| Fiche membre | `/[lang]/membres/[slug]` | Profil public |
| Partenaires | `/[lang]/partenaires` | Pourquoi soutenir + emplacements |
| Rejoindre | `/[lang]/rejoindre` | Premier pas, talk, partenariat |
| Code de conduite | `/[lang]/code-de-conduite` | Règles du groupe |

Pas de blog « catégories ». Pas de recherche. Pas de compte utilisateur.

## 6. Pages

### 6.1 Accueil

Split plein écran, **sans bannière** et **sans photo d’emprunt**.

**Gauche (papier)**

- Label : `Google Developer Group · Congo-Brazzaville`
- Titre : `GDG Pointe-Noire` en une couleur
- Phrase : `Apprendre, construire et connecter la communauté tech de Pointe-Noire autour des technologies Google.`
- Lieu : `Pointe-Noire, Congo-Brazzaville`
- Lien texte : `Rejoindre la communauté` → `/[lang]/rejoindre`

Pas de pastilles « meetups, ateliers… ». Pas de second bouton bleu.

**Droite (panneau encre)** — voir §7 pour les états.

Sous le filet Google, **dans cet ordre**, sans bande photo :

1. **Récemment** — les 2 événements passés les plus proches (cartes date + titre + lieu). Lien texte `Tous les événements` et `Le blog`.
2. **Parcours** — les 4 portes actuelles, en une rangée, fond papier. Débutant et builder → `/rejoindre`. Speaker → `/rejoindre` (bloc talk). Organisation → `/partenaires`. Plus de section sombre pleine largeur ici.
3. **Équipe** — portraits des personnes pourvues seulement (pas les postes ouverts). Photo / initiales, nom, rôle. Lien `Toute l’équipe`.
4. **Bande Rejoindre** — une phrase + bouton vers `/rejoindre`.

À propos, programmes et projets **ne sont plus** des sections de l’accueil. Ils ont leurs pages. Un lien « Ce que l’on fait » dans le pied et depuis À propos suffit.

### 6.2 À propos

Titre : `La communauté tech de Pointe-Noire`.  
Texte court (2–3 paragraphes). Les quatre piliers (apprendre, partager, construire, connecter) en **liste**, pas en grille de cartes. Lien vers Programmes, Équipe, Rejoindre.

### 6.3 Programmes

Liste numérotée déjà en place (`01` Meetups … `05` Open source). Une ligne = titre, phrase, exemple, niveau. Pas de cartes.

### 6.4 Événements

Haut de page : le même **panneau encre** que le hero, en plus bas (min-height 420 px, pas tout le viewport).  
Dessous : grille des événements (à venir puis passés). Carte = format, date, titre, lieu. Photo seulement si `localPhoto: true`. Sinon, pastille de date sur fond encre.

Le menu « Événements » arrive ici, pas sur une ancre d’accueil.

### 6.5 Fiche événement

- Panneau encre : format, date énorme, titre, lieu, heure.
- Corps : résumé, niveau, tags.
- Bouton : `S'inscrire` si `registrationUrl`, sinon `Être prévenu` (WhatsApp).
- Si `placeholder: true` : flag `Exemple` sous le titre. Le bouton reste cliquable (WhatsApp ou URL).
- Pas de photo d’emprunt. Slot `PlaceholderSlot` si l’équipe doit encore fournir une image locale.

### 6.6 Blog

Liste chronologique. 3 articles **placeholder** au lancement, pour que la page soit pleine :

| Slug | Sujet | Statut |
|---|---|---|
| `pourquoi-un-gdg-a-pointe-noire` | Pourquoi le groupe existe | `placeholder: true` |
| `comment-se-passe-un-atelier` | Déroulé type d’un atelier | `placeholder: true` |
| `proposer-un-talk` | Comment proposer un talk | `placeholder: true` |

Carte d’article : date, titre, chapô (2 lignes), flag `Exemple` si placeholder.  
Fiche article : titre, date, corps 400–700 mots FR **et** EN, lien retour. Pas de commentaires. Pas d’auteur inventé : auteur = `GDG Pointe-Noire` jusqu’à ce qu’un vrai nom soit posé.

Quand un vrai article arrive : `placeholder: false`, le flag disparaît. On ne vide pas la page pour attendre.

### 6.7 Projets

Trois cartes déjà prévues. Le site a le lien GitHub. Les deux autres : statut `À venir`, pas de lien mort. Layout identique, pour que la page paraisse complète.

### 6.8 Équipe

Plus de modal. Plus de bannière en haut de site.

- Intro + phrase déplacée : `Core Team 2025-2026 — des postes de l'équipe sont encore ouverts.` uniquement si au moins un `open: true`.
- Grille de cartes courtes (photo, nom, rôle) → `/equipe/[slug]`.
- Groupe `Postes ouverts` : cartes « À pourvoir » + CTA `Postuler` → WhatsApp, avec le rôle dans le texte du message si possible, sinon le groupe tel quel.
- Les organisateurs sans bio complète (ex. Béni Grâce) ont quand même une fiche : nom, rôle, `PlaceholderSlot` photo, phrase « Bio à compléter ».

Slug : `lelo-maurice`, `kaiser-styve`, `sara-emmanuelle-moudilou`, `ruth-christy`, `nevy-presty`, `francois-nsengimana`, `beni-grace-mananga`. Les postes ouverts n’ont pas de slug.

### 6.9 Annuaire membres

Page **finie** avec 6 fiches placeholder, pas un état « les profils arrivent » seul.

Chaque fiche placeholder :

- initiales générées ;
- nom du type `Membre 01` … `Membre 06` (FR/EN : `Member 01`) ;
- rôle : `À renseigner` ;
- flag `Exemple` ;
- lien vers `/membres/membre-01` etc.

Une bande sous la grille : `Votre profil peut figurer ici après un atelier ou un meetup.` + bouton Rejoindre.

Fiche membre : avatar / initiales, nom, rôle, 2 lignes de bio placeholder, 2 liens vides non affichés, bouton `Rejoindre pour être référencé`. Quand un vrai membre est saisi : même composant, `placeholder: false`, vrais liens.

L’annuaire et l’équipe sont **deux listes**. Un organisateur peut aussi avoir une fiche membre plus tard ; ce n’est pas requis maintenant. Pas de déduplication automatique.

### 6.10 Partenaires

Texte d’accroche actuel. Cinq formats (lieu, sponsoring, speakers, équipement, mentorat).  
**4 emplacements logo** en `PlaceholderSlot` : `Votre organisation`.  
Bouton `Discuter d'un partenariat` → page Rejoindre, ancre `#partenariat`, ou WhatsApp tant que l’e-mail n’existe pas.

### 6.11 Rejoindre

Trois blocs, un écran :

1. **Rejoindre le groupe** — ce qu’il y a sur WhatsApp (dates, rappels, questions). Bouton `Rejoindre le groupe WhatsApp`.
2. **Proposer un talk** — 4 lignes : sujet, niveau, format, délai. Bouton `Écrire au groupe` (WhatsApp) jusqu’à un formulaire.
3. **Devenir partenaire** — `id="partenariat"`. Renvoie aux formats. Même canal tant que `siteLinks.email.placeholder` est vrai.

Plus de « Prêt à nous rejoindre ? » générique tout seul.

### 6.12 Code de conduite

Page courte (1 écran + un peu). Titre, 6–8 règles : respect, harcèlement zéro, inclusion des débutants, photos (demander), WhatsApp (pas de spam), signalement au Lead. Texte **placeholder éditorial** flaggé en tête : `Texte à relire par l’équipe`. FR et EN. Lien dans le pied.

## 7. États de l’affiche événement

L’affiche (hero et haut de `/evenements`) a **deux états**, jamais un trou.

### Événement à venir

Condition : `status === "upcoming"` **et** `date >=` aujourd’hui (`AAAA-MM-JJ`, sans `Date()` timezone — réutiliser `formatEventDate`).

Contenu du panneau, **dans cet ordre** :

1. Format (`Atelier` / `Meetup` / `Lab`)
2. Date en grand (`14 novembre 2026`)
3. Titre
4. `Pointe-Noire · 14h00`
5. Bouton : `S'inscrire` si URL, sinon `Être prévenu`

Pas de résumé, pas de tags sur l’affiche. Ils sont sur la fiche.

Si plusieurs `upcoming` valides : le plus proche. Les autres restent dans la liste.

### Aucune date

- Label `Prochaine date`
- Mot `Bientôt` à la place de la date
- Phrase : `Aucun événement annoncé pour le moment. Rejoignez le groupe pour recevoir la prochaine date.`
- Bouton `Être prévenu`

Un événement **passé** ne reste pas sur l’affiche. Il redescend dans la liste.

`Build with AI Pointe-Noire` (2026-11-14) reste `upcoming` et `placeholder: true` jusqu’à validation. Le flag `Exemple` est visible sur la fiche et la carte liste, **pas** sur le panneau du hero (le hero doit rester propre). L’équipe retire le flag en passant `placeholder: false`.

## 8. Données

Fichiers à étendre ou créer. Toujours `{ fr, en }` pour le texte affiché.

| Fichier | Rôle |
|---|---|
| `data/events.js` | + `placeholder`, `confirmed`, `localPhoto`, `slug` (déjà là) |
| `data/posts.js` | Articles blog |
| `data/members.js` | Annuaire (séparé de `data/team.js`) |
| `data/team.js` | + `slug` sur chaque personne réelle |
| `data/projects.js` | inchangé dans l’esprit |
| `data/programs.js` | inchangé |
| `data/i18n.js` | nav, pieds, labels d’états, code de conduite |
| `data/conduct.js` | Paragraphes FR/EN du code de conduite |

### 8.1 Événement

```js
{
  slug: "build-with-ai-pointe-noire",
  status: "upcoming",       // upcoming | past
  placeholder: true,
  confirmed: false,         // résultats / chiffres publiables
  localPhoto: false,
  registrationUrl: "",      // vide → Être prévenu
  date: "2026-11-14",       // AAAA-MM-JJ
  // title, time, location, format, level, tags, summary, image, imageAlt
}
```

Règles d’affichage :

- Affiche hero : premier `upcoming` dont la date n’est pas passée.
- Liste : tous, à venir d’abord.
- Photo : seulement `localPhoto: true`.
- Ligne de résultat (`30 participants…`) : seulement `confirmed: true`.
- Flag `Exemple` : `placeholder: true`, hors panneau hero.

Les deux événements passés actuels restent `placeholder: true`, `confirmed: false`, `localPhoto: false`. Ils **s’affichent** (site fini) avec le flag, sans photo, sans chiffre mis en avant comme preuve officielle. Le champ `result` peut servir de chapô d’exemple.

### 8.2 Article

```js
{
  slug: "pourquoi-un-gdg-a-pointe-noire",
  date: "2026-10-01",
  placeholder: true,
  author: { fr: "GDG Pointe-Noire", en: "GDG Pointe-Noire" },
  title: { fr: "…", en: "…" },
  excerpt: { fr: "…", en: "…" },
  body: { fr: ["paragraphe 1", "paragraphe 2"], en: ["…"] },
}
```

### 8.3 Membre d’annuaire

```js
{
  slug: "membre-01",
  placeholder: true,
  name: { fr: "Membre 01", en: "Member 01" },
  initials: "M1",
  role: { fr: "À renseigner", en: "To be added" },
  bio: { fr: "Profil d’exemple. Remplacez-le après participation.", en: "Sample profile. Replace after someone takes part." },
  photo: "",
  links: [],
}
```

## 9. Photos et médias

Retirer de l’UI :

- `hero-devfest-accra.jpg`
- `devfest-crowd.jpg`
- `events/*.jpg` d’autres villes

Les laisser dans `public/` ne suffit pas : **aucun composant ne les référence**. `CREDITS.md` reste pour l’historique.

Quand une vraie photo arrive :

1. Fichier dans `public/assets/…`
2. `localPhoto: true` (événement) ou `photo` rempli (personne)
3. `alt` en FR et EN, descriptif

Le panneau encre accepte la photo en fond : `object-fit: cover`, voile `rgba(23,32,51,0.55)`, texte inchangé.

Composant `PhotoBand` : **supprimé**. Pas de bande « fausse communauté » sous le hero.

## 10. Actions et canaux

| Intention | Cible |
|---|---|
| Voir / s’inscrire à une date | Fiche événement ; URL d’inscription ou WhatsApp |
| Rejoindre | `/rejoindre` puis WhatsApp |
| Proposer un talk | `/rejoindre` puis WhatsApp |
| Partenariat | `/partenaires` ou `/rejoindre#partenariat` ; e-mail dès qu’il existe |
| Lire | `/blog/[slug]` |
| Connaître un organisateur | `/equipe/[slug]` |
| Voir un membre | `/membres/[slug]` |

WhatsApp reste le canal réel. Les libellés disent la vérité : `Être prévenu`, `Rejoindre le groupe WhatsApp`, `Écrire au groupe`. Plus de `Rejoindre pour être informé` ni cinq boutons « Rejoindre » identiques sur l’accueil.

Liens externes : `target="_blank"` + `rel="noopener noreferrer"`. Pas de lien dont `href` est un placeholder (`VOTRE-`, `REMETTRE`, `mailto:contact@VOTRE-DOMAINE.cd`).

## 11. Internationalisation et SEO

- Chaque route existe en `/fr` et `/en`.
- `hreflang` + lien canonique sur chaque page.
- Titre : `Page · GDG Pointe-Noire`. Description unique par type de page.
- Open Graph : titre + description. Image : `public/og.png`, panneau encre avec `GDG Pointe-Noire` (fichier à ajouter, pas une photo d’un autre GDG).
- 404 localisée, lien vers l’accueil.

## 12. Accessibilité et mobile

- Focus visible (anneau bleu déjà en place).
- Menu : `aria-expanded`, piège de focus non requis si le menu n’est pas un dialog ; fermeture au clic d’un lien (déjà).
- Contraste du panneau encre : blanc / `#172033`.
- Hero mobile : colonne unique, texte d’abord, panneau encre ensuite, date toujours grande. La date doit être visible sans scroller sur un écran 390×844, ou au pire après 80 px de scroll — pas après un écran entier.
- `prefers-reduced-motion` : pas de translation.

## 13. Contraintes techniques

Respecter le README :

- Nouveaux fichiers en `.js` / `.jsx`.
- Styles dans `app/globals.css` (et éventuellement un fichier CSS par page **seulement** s’il est importé depuis le layout, pas un second système).
- Pas de Tailwind, pas de TypeScript dans cette vague.
- `formatEventDate` sans objet `Date` (déjà en place).
- Déploiement Cloudflare / Vinext : `generateStaticParams` pour `lang`, slugs d’événements, posts, équipe, membres.
- Bind rien de nouveau : site déjà statique / workers.

Fichiers touchés (orientation, pas le plan pas-à-pas) :

- `app/[lang]/layout.jsx` — header/footer communs
- `app/[lang]/page.jsx` — accueil seul
- `app/[lang]/{a-propos,programmes,evenements,blog,projets,equipe,membres,partenaires,rejoindre,code-de-conduite}/page.jsx`
- `app/[lang]/evenements/[slug]/page.jsx` (idem blog, equipe, membres)
- `components/Header.jsx` — vrais `href`
- `components/Hero.jsx` — split + panneau
- `components/Banner.jsx` et `PhotoBand.jsx` — retirés de l’arbre
- `components/Team.jsx` — plus de modal, cartes liées
- `data/*` comme §8

`SPEC_UI_UX_CONTENU.md` reste la liste « à remplacer par l’équipe ». Cette spec dit **comment** le site se présente en attendant.

## 14. Hors scope

- Compte, login, CMS, formulaire serveur.
- Migration TypeScript ou Tailwind.
- Blog avec catégories, RSS, commentaires.
- Recherche, filtres complexes.
- Carte géographique, billetterie.
- Page dédiée « speaker CFP » au-delà du bloc Rejoindre.
- Contenu réel des articles, vrais membres, vraies photos — l’équipe les pose ensuite en changeant les fichiers `data/` et `public/`.

## 15. Critères d’acceptation

Le travail est bon si :

1. On peut ouvrir Accueil, Événements, une fiche événement, Blog, un article, Membres, une fiche membre, Équipe, une fiche organisateur, Rejoindre, Partenaires, Projets, Programmes, À propos, Code de conduite — en FR et EN.
2. Le premier écran n’a ni bannière, ni photo d’une autre ville, ni titre arc-en-ciel. Panneau encre à droite, date lisible.
3. Sans événement à venir, l’affiche dit `Bientôt` et le bouton `Être prévenu`.
4. Chaque placeholder visible (sauf panneau hero) porte `Exemple` / `Sample`.
5. Aucun lien mort, aucun `VOTRE-` cliquable.
6. Le menu a 6 destinations + langue. Le pied a les pages secondaires.
7. L’équipe n’a plus de modal. La bio est sur `/equipe/[slug]`.
8. `bun run build` (ou `build:vinext`) passe.
9. Mobile 390 px : hero en colonne, menu hamburger, pas de chevauchement.
10. Un contributeur peut remplacer un article ou un membre en éditant un fichier `data/`, sans toucher aux composants.

## 16. Décisions déjà tranchées

| Sujet | Décision |
|---|---|
| Photo locale | Absente ; le site tient sans elle |
| Action principale | L’événement, pas WhatsApp en premier |
| Traitement hero | Split papier / panneau encre, date énorme |
| Titre coloré Google | Non |
| Bannière postes | Dans Équipe, pas au-dessus du hero |
| Photos d’autres GDG | Hors UI |
| Pages | Site multi-pages, y compris blog et annuaire |
| Contenu manquant | Placeholders dessinés + flag `Exemple` |
| Stack de cette vague | JS/JSX + `globals.css` |
