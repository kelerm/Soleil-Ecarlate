import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/services/game.service';
import { TranslocoModule } from '@jsverse/transloco';

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

  public commencerPartie(): void {
     // 1. On déclenche la musique et l'écriture grâce au clic utilisateur (Fin du blocage navigateur !)
    this.gameService.demarrerJeu(); 
    
    // 2. On navigue vers l'écran de jeu
    this.router.navigate(['/jeu']);
  }
}