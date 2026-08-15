import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AudioPlayer {
    private audioPlayer = new Audio();

    public gererMusique(path: string | undefined): void {
       // On coupe le son ou on ignore
        if (!path) {
            this.audioPlayer.pause();
            return;
        }

        const fullUrl = window.location.origin + './' + path;

        // Si c'est la même musique qui tourne déjà, l'IF bloque et le son continue sans hoquet
        if (this.audioPlayer.src !== fullUrl) {
            this.audioPlayer.src = path;
            this.audioPlayer.loop = true; // a voir si je garde en mode loop ou pas faut voir les son que je fais
            this.audioPlayer.volume = 0.2;
            this.audioPlayer.load();
            this.audioPlayer.play().catch(() => console.warn("Audio bloqué par le navigateur."));
        }
    }
}