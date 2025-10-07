# weboria

Site vitrine professionnel développé avec Next.js 15 (App Router) et TypeScript pour présenter les offres d'une agence spécialisée dans la création de sites web performants.

## Fonctionnalités
- Pages vitrines dédiées : accueil, services, services détaillés, portfolio, à propos, contact
- Contenus structurés dans `src/data` pour faciliter la maintenance
- Components réutilisables (layouts, sections, UI) organisés par dossiers
- Design responsive basé sur Tailwind CSS v4
- Formulaire de contact interactif côté client

## Démarrage
```bash
npm install
npm run dev
```

Accédez ensuite à [http://localhost:3000](http://localhost:3000).

## Scripts utiles
- `npm run dev` : démarrage du serveur de développement (Turbopack)
- `npm run build` : compilation de la version de production
- `npm run start` : exécution du build localement
- `npm run lint` : vérification ESLint

## Structure principale
```
src/
  app/
    (site)/        # Pages publiques (App Router)
    layout.tsx     # Layout racine (fonts, metadata)
    globals.css    # Styles globaux
  components/
    layout/        # Header, footer, container, page header
    sections/      # Sections de pages (hero, services, portfolio...)
    ui/            # Composants UI réutilisables (boutons, cartes)
  data/            # Contenus et metadata (services, projets, témoignages)
  lib/             # Helpers (fonction utilitaire `cn`)
public/
  images/          # Illustrations SVG utilisées dans le site
```

## Personnalisation
- Mettez à jour les données dans `src/data` pour modifier les services, témoignages ou projets.
- Les styles Tailwind peuvent être ajustés via `tailwind.config.ts` et `src/app/globals.css`.
- Ajoutez vos visuels dans `public/images` et mettez à jour les chemins dans les fichiers de données.

## Déploiement
Le projet est prêt pour un déploiement sur Vercel ou toute plateforme compatible Next.js. Pensez à configurer les variables d'environnement nécessaires si vous ajoutez des intégrations (CRM, formulaires, etc.).
