# 📜☀️ La compagnie : Soleil ÉCARLATE

Application Angular 20 pour une App dont vous êtes le héro.

## Structure du projet

```
src/
├── app/                        <-- les composants, services et logique TypeScript
│   ├── game/
│   │   ├── visual-novel/       <-- le "moteur visuel"
│   │   ├── audio-player.service.ts
│   │   ├── game.model.ts
│   │   ├── game.service.ts
│   │   ├── index.ts            <-- barrel
│   │   └── typewriter.service.ts
│   └── menu/
│
├── assets/                     <-- ressources physiques
│   ├── audio/    (.ogg)
│   ├── data/                   <-- contient les histoires découpées par scènes/act
│   ├── i18n/
│   └── scenes/   (.gif)
│
├── styles/                     <-- DESIGN TOKENS ET SCSS GLOBALISED
│   ├── tokens/
│   │   ├── _palette.scss
│   │   └── _typography.scss
│   ├── _game.scss
│   ├── _menu.scss
│   ├── _theme.scss
│   └── _transitions.scss
│
├── index.html
├── main.ts
└── styles.scss                 <-- point d'entrée global.
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

Puis ajouter la route dans `src/app/app.routes.ts`

