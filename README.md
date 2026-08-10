# MonApp — Angular 20

Application Angular 20 avec header, page d'accueil et footer.

## Structure du projet

```
src/
├── app/                      <-- les composants, services et logique TypeScript
│   ├── game/
│   |   ├── components/
|   |   ├── data
|   |   └── services
│   │       ├── audio.service.ts
│   │       ├── game.service.ts
│   │       └── typewriter.service.ts
│   └── menu/
│
├── assets/                   <-- ressources physiques
│   ├── scenes/   (.gif)
│   └── audio/    (.ogg)
│
├── styles/                   <-- DESIGN TOKENS ET SCSS GLOBALISED
│   ├── tokens/
│   │   ├── _palette.scss
│   │   └── _typography.scss
│   ├── _theme.scss
│   ├── _menu.scss
│   └── _game.scss
│
├── index.html
├── main.ts
└── styles.scss               <-- Ton point d'entrée global qui fait : @use 'styles/theme'; etc.
```

## Installation & démarrage

### Prérequis
- Node.js 20+ (LTS recommandé)
- npm 10+

### Installation

```bash
npm install
```

### Démarrage en développement

```bash
npm start
# ou
ng serve
```

L'application sera disponible sur **http://localhost:4200**

### Build de production

```bash
npm run build
```

Les fichiers seront générés dans `dist/mon-app/`.

## Fonctionnalités

- ✅ **Angular 20** avec composants standalone
- ✅ **Routing** Angular configuré

## Ajouter une nouvelle page

```bash
ng generate component ma-page
```

Puis ajouter la route dans `src/app/app.routes.ts` :

```typescript
{ path: 'ma-page', component: MaPageComponent }
```
