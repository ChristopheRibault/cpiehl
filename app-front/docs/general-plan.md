# Plan général – Refonte site association avec Next.js, Sanity et Tailwind

## Objectif
Refonte du site en Next.js avec Sanity (CMS SaaS) pour la gestion flexible du contenu et Tailwind pour un design accessible et moderne. Permettre à l’association de gérer pages, menus, sous-menus et pages custom via des blocs prédéfinis, tout en garantissant simplicité et accessibilité.

---

## 1. Structure idéale du projet
- **Arborescence recommandée :**
  - `app/` : pages Next.js (app router)
  - `components/` : composants UI réutilisables
  - `lib/` : utilitaires, hooks, intégration Sanity (fetch, queries)
  - `sanity/` : schémas, configuration, gestion des droits
  - `styles/` : configuration Tailwind, styles globaux
  - `public/` : assets statiques (images, icônes)
  - `types/` : définitions TypeScript pour le contenu Sanity
- **Gestion flexible du contenu :**
  - Utiliser des schémas Sanity pour : pages, menus, sous-menus, blocs custom (ex : Hero, CTA, galerie)
  - Prévoir un schéma "Page" avec un champ "content" de type array (pour composer la page avec des blocs prédéfinis)
  - Menus et sous-menus gérés via des documents Sanity liés aux pages

---

## 2. Organisation des composants
- **Réutilisabilité et simplicité :**
  - Composants atomiques (Button, Input, Card) dans `components/atoms/`
  - Composants moléculaires (Navbar, Footer, Menu) dans `components/molecules/`
  - Composants de page (Hero, Section, Gallery) dans `components/sections/`
  - Utiliser Tailwind pour la stylisation, éviter les styles custom sauf nécessité
  - Prévoir des composants "SanityBlock" pour chaque type de bloc éditable dans Sanity

---

## 3. Gestion des droits et accès dans Sanity
- **Pour utilisateurs non techniques :**
  - Définir des rôles personnalisés dans Sanity (ex : "Éditeur", "Administrateur")
  - Restreindre l’accès aux schémas sensibles (ex : configuration, utilisateurs)
  - Utiliser des "Fieldsets" et "Previews" pour simplifier l’interface d’édition
  - Documenter les workflows d’édition (guides, vidéos)
  - Activer la validation des champs pour éviter les erreurs de saisie

---

## 4. Patterns d’intégration Sanity ↔ Next.js
- **Performance, accessibilité, responsivité :**
  - Utiliser GROQ pour des requêtes ciblées et optimisées
  - Préférer la génération statique (SSG) via `getStaticProps` ou `app router` pour les pages publiques
  - Mettre en cache les requêtes Sanity côté serveur
  - Utiliser des composants accessibles (ARIA, focus management)
  - Adapter les images via Sanity Image URL builder et Next.js Image
  - Tester le site avec Lighthouse et axe pour l’accessibilité
  - Utiliser Tailwind pour le responsive (breakpoints, utilities)

---

## 5. Fichiers critiques et conventions à respecter
- `sanity/schema.js|ts` : schémas de contenu
- `lib/sanity.js|ts` : configuration client, requêtes GROQ
- `app/layout.tsx` : structure globale, providers
- `app/page.tsx` : pages dynamiques, mapping des blocs Sanity
- `components/` : organisation atomique/moléculaire/sections
- `tailwind.config.js` : configuration Tailwind
- `types/sanity.ts` : types du contenu
- `styles/globals.css` : styles globaux
- Convention de nommage : PascalCase pour composants, camelCase pour utilitaires, kebab-case pour fichiers

---

## Résumé
Adoptez une structure modulaire, des schémas Sanity flexibles, une organisation claire des composants, des droits adaptés pour les éditeurs, et des patterns d’intégration performants et accessibles. Respectez les conventions pour garantir la maintenabilité et la simplicité du projet.
