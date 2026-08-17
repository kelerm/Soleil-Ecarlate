import {Component, computed, inject, ViewEncapsulation} from '@angular/core';
import {GameService, SaveService, Scene} from '../../game';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
    selector: 'app-visual-novel',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './visual-novel.html',
    encapsulation: ViewEncapsulation.None
})
export class VisualNovelComponent {
    protected gameService = inject(GameService);
    protected saveService = inject(SaveService);
    // On crée la variable 'scene' qui va piocher en temps réel la scène actuelle de Game.
    public scene = computed<Scene | null>(() => this.gameService.currentScene());

    public sauvegarder(): void {
        const sceneActuelle = this.scene();
        if (sceneActuelle) {
            this.saveService.sauvegarder({
                acte: this.gameService.getCurrentActe(), // Voir note ci-dessous si besoin de l'exposer
                sceneId: sceneActuelle.id
            });
            console.log('Partie enregistrée !');
        }
    }
}