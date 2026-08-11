import {Component, computed, inject, ViewEncapsulation} from '@angular/core';
import {Game} from '../../services/game';
import {Scene} from '../../models/story';
import {TranslocoModule} from '@jsverse/transloco';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-visual-novel',
    standalone: true,
    imports: [TranslocoModule, NgOptimizedImage],
    templateUrl: './visual-novel.html',
    encapsulation: ViewEncapsulation.None
})
export class VisualNovelComponent {
    protected gameService = inject(Game);
    // On crée la variable 'scene' qui va piocher en temps réel la scène actuelle de Game.
    public scene = computed<Scene | null>(() => this.gameService.currentScene());
}