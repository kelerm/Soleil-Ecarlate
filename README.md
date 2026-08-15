# 📜☀️ La compagnie : Soleil ÉCARLATE

Application Angular 20 pour une App dont vous êtes le héro.

[🎮 Jouer à la version Bêta sur itch.io](https://kelerm.itch.io/soleil-ecarlate?secret=Uaer8CHVC36EvIUvVslgOYgEKc)

## Structure du projet

```
src/
├── app/                        <-- les composants, services et logique TypeScript
│   ├── game/
│   │   ├── visual-novel/       <-- le "moteur visuel"
│   │   ├── accessibility.service.ts
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
│   ├── fonts/
│   ├── i18n/
│   └── images/
│       ├── pixel-art-gnrl/
│       └── scenes/   (.gif)
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

Les fichiers optimisés seront générés dans `dist/soleil-ecarlate/browser/`.


## 🚀 Build pour itch.io

Pour tester ou publier le jeu sur itch.io et de générer directement l'archive prête à l'envoi.

Pour lancer le build et créer le ZIP :
```bash
npm run build:itch
```

Cela compresse automatiquement le contenu du dossier `dist/soleil-ecarlate/browser` dans un fichier `soleil-ecarlate.zip` à la racine du projet.



## ⚖️ Licence

* **Code source :** Open source (Faites-vous plaisir ! - License MIT).
* **Graphismes (Pixel art) & Musiques (8-bits) :** Pas libres de droits. Ca m'a pris trop de temps.
