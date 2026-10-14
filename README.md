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
* **TypeScript** (`.ts` / `.tsx`)
* **CSS natif**, principalement dans `app/globals.css`
* **Internationalisation FR/EN**, avec détection de la langue du navigateur
* **Vercel** pour le déploiement continu
* **[Bun](https://bun.sh/)** comme gestionnaire de paquets (`bun.lock`)

### Migrations prévues

La migration de **JavaScript vers TypeScript** est terminée. La migration du CSS vers **Tailwind CSS** reste en attente.

En attendant la migration vers Tailwind, merci de respecter l’organisation actuelle du projet :

* les nouveaux fichiers restent en `.ts` / `.tsx` ;
* les nouveaux styles restent dans `app/globals.css` ;
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

Vercel déploie automatiquement les changements poussés sur la branche configurée et crée des déploiements de prévisualisation pour les Pull Requests. Pour vérifier le build localement :

```bash
bun run build
```

Le site est accessible à l’adresse :

```text
https://gdg.leloeduk.com
```

## Contribuer

Le site du GDG Pointe-Noire est un projet communautaire. **Tous les membres du GDG Pointe-Noire peuvent contribuer à son développement**, qu’il s’agisse de code, de contenu, de design, d’accessibilité ou d’améliorations de l’expérience utilisateur.

### Processus de contribution

Les contributions suivent le processus suivant :

**1. Créer une branche**

Ne travaillez pas directement sur `main`. Créez une branche dédiée à votre modification :

```bash
git checkout -b ma-modification
```

Exemples :

```bash
git checkout -b fix-navigation
git checkout -b update-team
git checkout -b add-events-section
```

**2. Effectuer et tester vos modifications**

Apportez vos changements puis vérifiez que le projet fonctionne correctement en local :

```bash
npm run dev
```

Avant de soumettre votre contribution, assurez-vous notamment que :

* le projet se lance correctement ;
* les pages concernées fonctionnent ;
* les traductions FR/EN restent synchronisées ;
* aucune fonctionnalité existante n'est involontairement cassée.

**3. Publier votre branche**

```bash
git push -u origin ma-modification
```

**4. Ouvrir une Pull Request**

Depuis GitHub, ouvrez une **Pull Request vers `main`** en décrivant clairement :

* ce que vous avez modifié ;
* pourquoi la modification est nécessaire ;
* les éventuels points nécessitant une attention particulière.

**5. Faire relire la contribution**

Toutes les Pull Requests doivent être examinées avant d’être fusionnées.

La validation est assurée par :

* **Responsable Technique** — [Styve Maba (Kaiser)](https://github.com/ksthecrowned)
* **Adjointe Technique** — [Sara Emmanuelle Moudilou](https://github.com/Emma-17-2002)

Une Pull Request peut être :

* **validée et fusionnée** ;
* **retournée pour modifications** ;
* **discutée avant décision**, lorsqu’elle concerne une évolution importante du site.

La fusion dans `main` ne doit donc être effectuée qu’après validation par l’un des deux responsables techniques.

### Ce qui peut être proposé

Les membres peuvent notamment contribuer à :

* améliorer ou corriger le code ;
* corriger des bugs ;
* améliorer le responsive design ;
* proposer des améliorations UI/UX ;
* améliorer l’accessibilité ;
* corriger ou enrichir les contenus ;
* mettre à jour les informations de l’équipe ;
* améliorer les traductions FR/EN ;
* proposer de nouvelles sections ou fonctionnalités.

Pour les changements importants qui modifient fortement l’architecture, le design ou le fonctionnement du site, il est préférable d’en discuter **avant de commencer le développement**, afin d’éviter de travailler sur une direction qui ne sera finalement pas retenue.

### Règles à respecter

* Ne pas modifier directement `main`.
* Une branche = une modification ou un sujet clairement identifié.
* Garder les Pull Requests aussi ciblées que possible.
* Ne pas mélanger une refonte complète avec une petite correction sans raison particulière.
* Ne pas introduire Tailwind CSS avant le début de la migration prévue.
* Maintenir les traductions françaises et anglaises synchronisées.
* Tester les modifications avant d’ouvrir une Pull Request.
* Ne pas considérer le design ou les contenus actuels comme définitifs : ils peuvent évoluer avec les besoins du GDG.

> **En cas de doute sur une modification importante, ouvrez d’abord une discussion ou contactez l’un des responsables techniques avant de commencer.**

## Règles importantes

### 🌍 Français et anglais

Le site est bilingue.

Les traductions sont centralisées dans :

```text
data/i18n.ts
```

Toute nouvelle clé ajoutée dans une langue doit également être ajoutée dans l’autre.

### 👥 Équipe

Les informations affichées sur le site sont définies dans :

```text
data/team.ts
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

La migration vers TypeScript est terminée. Les nouveaux fichiers doivent rester en :

```text
.ts
.tsx
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
│   ├── i18n.ts             # Traductions FR/EN
│   ├── team.ts             # Données de l'équipe
│   └── team/               # Fiches sources des membres
│
├── public/
│   └── assets/
│       └── team/            # Photos de l'équipe
│
└── middleware.ts            # Détection et redirection de langue
```

## Roadmap

* [x] Migrer le projet de JavaScript vers TypeScript
* [ ] Migrer le CSS actuel vers Tailwind CSS
* [ ] Maintenir les dépendances à jour
* [ ] Faire évoluer progressivement le design et les contenus du site
* [ ] Améliorer l’expérience de contribution pour les membres du GDG

## Contribution

Ce projet appartient à la communauté **GDG Pointe-Noire**.

Si vous êtes membre du groupe et souhaitez améliorer le site, créez une branche, faites vos modifications et ouvrez une Pull Request.

Les contributions peuvent concerner aussi bien le code que le contenu, l’interface, l’accessibilité ou l’expérience utilisateur.
