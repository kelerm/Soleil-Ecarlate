import { Component, inject, ViewEncapsulation, computed } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Scene } from '../../data/story.model';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-visual-novel',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './visual-novel.html',
  encapsulation: ViewEncapsulation.None
})
export class VisualNovelComponent {
  protected gameService = inject(GameService);
  // On crée la variable 'scene' qui va piocher en temps réel la scène actuelle de GameService.
  public scene = computed<Scene | null>(() => this.gameService.currentScene());
}