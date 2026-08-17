import {Injectable} from '@angular/core';

export interface SaveState {
    acte: string;
    sceneId: string;
}

@Injectable({
    providedIn: 'root'
})
export class SaveService {
    private readonly SAVE_KEY = 'kinetic_novel_save';

    public sauvegarder(state: SaveState): void {
        localStorage.setItem(this.SAVE_KEY, JSON.stringify(state));
    }

    public charger(): SaveState | null {
        const data = localStorage.getItem(this.SAVE_KEY);
        if (!data) return null;

        try {
            return JSON.parse(data) as SaveState;
        } catch (e) {
            console.error("Erreur lors de la lecture de la sauvegarde", e);
            return null;
        }
    }

    // public aUneSauvegarde(): boolean {
    //     return localStorage.getItem(this.SAVE_KEY) !== null;
    // }

    // public effacerSauvegarde(): void {
    //     localStorage.removeItem(this.SAVE_KEY);
    // }
}