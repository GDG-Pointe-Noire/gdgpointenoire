# GDG Pointe-Noire

Site officiel du **Google Developer Group Pointe-Noire**, communauté tech de Pointe-Noire, Congo-Brazzaville.

* 🌐 **Site** : [gdg.leloeduk.com](https://gdg.leloeduk.com)
* 💻 **Dépôt** : [GDG-Pointe-Noire/gdgpointenoire](https://github.com/GDG-Pointe-Noire/gdgpointenoire)

## À propos du projet

Ce dépôt contient le site web du GDG Pointe-Noire.

Le projet est **ouvert aux contributions des membres de la communauté**. Le design, les contenus, l’organisation des pages et les informations affichées sont susceptibles d’évoluer au fil du temps.

L’interface actuelle constitue donc une **base de travail**, et non une spécification définitive.

## Stack technique

Le projet utilise actuellement :

* **Next.js** avec App Router
* **JavaScript** (`.js` / `.jsx`)
* **CSS natif**, principalement dans `app/globals.css`
* **Internationalisation FR/EN**, avec détection de la langue du navigateur
* **Cloudflare Workers** pour le déploiement
* **Vinext** pour exécuter Next.js sur Cloudflare Workers
* **[Bun](https://bun.sh/)** comme gestionnaire de paquets (`bun.lock`)

### Migrations prévues

Deux évolutions techniques sont prévues :

1. Migration de **JavaScript vers TypeScript**
2. Migration du CSS actuel vers **Tailwind CSS**

Ces migrations n’ayant pas encore commencé, merci de respecter l’organisation actuelle du projet :

* les nouveaux fichiers restent en `.js` / `.jsx` ;
* les nouveaux styles restent dans `app/globals.css` ;
* ne mélangez pas JavaScript et TypeScript dans une même modification ;
* n’introduisez pas Tailwind avant le début de la migration dédiée.

### Dépendances

Les dépendances doivent rester à jour.

Avant toute contribution modifiant `package.json`, vérifiez les mises à jour disponibles :

```bash
bun outdated
```

Lorsqu’une mise à jour pertinente est disponible, privilégiez la mise à niveau plutôt que l’ajout de versions anciennes.

## Développement local

### Installation

```bash
bun install
```

### Lancer le serveur de développement

```bash
bun run dev
```

Le site sera accessible à l’adresse :

```text
http://localhost:3000
```

## Build et déploiement

Pour générer le build destiné à Cloudflare Workers :

```bash
bun run build:vinext
```

Pour déployer le projet :

```bash
bun run deploy:vinext
```

Le déploiement est destiné au site :

```text
https://gdg.leloeduk.com
```

## Contribuer

Tous les membres du GDG Pointe-Noire peuvent contribuer au projet.

Les modifications ne doivent pas être effectuées directement sur `main`. Chaque contribution doit passer par une **branche dédiée** puis une **Pull Request**.

### 1. Créer une branche

```bash
git checkout -b ma-modification
```

Utilisez de préférence un nom qui décrit clairement votre modification, par exemple :

```bash
git checkout -b update-team
git checkout -b fix-navigation
git checkout -b add-event-section
```

### 2. Effectuer les modifications

Modifiez le projet et vérifiez son fonctionnement localement avant de soumettre votre contribution.

### 3. Envoyer la branche

```bash
git push -u origin ma-modification
```

### 4. Ouvrir une Pull Request

Ouvrez ensuite une Pull Request vers `main`.

Chaque PR doit être revue et validée par l’un des responsables techniques avant d’être fusionnée.

### Responsables techniques

* **Responsable Technique** — [Styve Maba (Kaiser)](https://github.com/ksthecrowned)
* **Adjointe Technique** — [Sara Emmanuelle Moudilou](https://github.com/Emma-17-2002)

## Règles importantes

### 🌍 Français et anglais

Le site est bilingue.

Les traductions sont centralisées dans :

```text
data/i18n.js
```

Toute nouvelle clé ajoutée dans une langue doit également être ajoutée dans l’autre.

### 👥 Équipe

Les informations affichées sur le site sont définies dans :

```text
data/team.js
```

Les fiches sources des membres se trouvent dans :

```text
data/team/*.md
```

Les photos sont stockées dans :

```text
public/assets/team/
```

### 🎨 Design et contenu

Le design et les textes actuels ne sont pas définitifs.

Les contributions visant à améliorer l’interface, l’expérience utilisateur, les contenus ou la présentation sont donc les bienvenues, tout en respectant la cohérence générale du site.

### 🔤 TypeScript

La migration vers TypeScript n’a pas encore commencé.

Jusqu’à son lancement, les nouveaux fichiers doivent rester en :

```text
.js
.jsx
```

### 🎨 Tailwind CSS

La migration vers Tailwind CSS n’a pas encore commencé.

Jusqu’à cette migration, les styles doivent être ajoutés dans :

```text
app/globals.css
```

Évitez donc d’introduire Tailwind ou une seconde approche de styling dans une contribution isolée.

## Structure du projet

```text
.
├── app/
│   ├── [lang]/             # Pages et layouts FR/EN
│   └── globals.css         # Styles globaux
│
├── components/             # Composants React
│
├── data/
│   ├── i18n.js             # Traductions FR/EN
│   ├── team.js             # Données de l'équipe
│   └── team/               # Fiches sources des membres
│
├── public/
│   └── assets/
│       └── team/            # Photos de l'équipe
│
└── middleware.js            # Détection et redirection de langue
```

## Roadmap

* [ ] Migrer le projet de JavaScript vers TypeScript
* [ ] Migrer le CSS actuel vers Tailwind CSS
* [ ] Maintenir les dépendances à jour
* [ ] Faire évoluer progressivement le design et les contenus du site
* [ ] Améliorer l’expérience de contribution pour les membres du GDG

## Contribution

Ce projet appartient à la communauté **GDG Pointe-Noire**.

Si vous êtes membre du groupe et souhaitez améliorer le site, créez une branche, faites vos modifications et ouvrez une Pull Request.

Les contributions peuvent concerner aussi bien le code que le contenu, l’interface, l’accessibilité ou l’expérience utilisateur.
