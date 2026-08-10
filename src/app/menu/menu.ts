import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/services/game.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './menu.html',
  styleUrls: []
})

export class MenuComponent {
  private router = inject(Router);
  private gameService = inject(GameService); // <-- Injecte le service ici
  private transloco = inject(TranslocoService);

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

  // Langue actuelle (optionnel, pour le style)
  public get activeLang(): string {
    return this.transloco.getActiveLang();
  }
}