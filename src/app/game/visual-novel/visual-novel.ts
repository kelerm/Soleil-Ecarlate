import {Component, computed, inject, ViewEncapsulation} from '@angular/core';
import {Game} from '../game.service';
import {Scene} from '../game.model';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
    selector: 'app-visual-novel',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './visual-novel.html',
    encapsulation: ViewEncapsulation.None
})
export class VisualNovelComponent {
    protected gameService = inject(Game);
    // On crée la variable 'scene' qui va piocher en temps réel la scène actuelle de Game.
    public scene = computed<Scene | null>(() => this.gameService.currentScene());
}