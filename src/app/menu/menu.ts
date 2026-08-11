import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Game} from '../game/services/game';
import {TranslocoModule, TranslocoService} from '@jsverse/transloco';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './menu.html',
    styleUrls: []
})

export class MenuComponent {
    isAccessibleMode: boolean = false;
    private router = inject(Router);
    private gameService = inject(Game); // <-- Injecte le service ici
    private transloco = inject(TranslocoService);

    toggleAccessibility() {
        this.isAccessibleMode = !this.isAccessibleMode;
        console.log('Mode accessible activé:', this.isAccessibleMode);
    }

    public commencerPartie(): void {
        // 1. On déclenche la musique et l'écriture grâce au clic utilisateur (Fin du blocage navigateur !)
        this.gameService.demarrerJeu();

        // 2. On navigue vers l'écran de jeu
        this.router.navigate(['/jeu']);
    }

    // Change la langue
    public setLang(lang: string): void {
        this.transloco.load(lang).subscribe(() => {
            this.transloco.setActiveLang(lang);
        });
    }

    // Langue actuelle (optionnel, pour le fun)
    public get activeLang(): string {
        return this.transloco.getActiveLang();
    }
}