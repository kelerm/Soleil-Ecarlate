import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./menu/menu').then(m => m.MenuComponent),
        title: 'Soleil Ecarlate - Accueil'
    },
    {
        path: 'jeu',
        loadComponent: () => import('./game/visual-novel/visual-novel').then(m => m.VisualNovelComponent),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
