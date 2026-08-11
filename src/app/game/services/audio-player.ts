import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AudioPlayer {
    private audioPlayer = new Audio();

    public gererMusique(path: string): void {
        const fullUrl = window.location.origin + '/' + path;
        if (this.audioPlayer.src !== fullUrl) {
            this.audioPlayer.src = path;
            this.audioPlayer.loop = false; // a voir si je garde en mode loop ou pas faut voir les son que je fais
            this.audioPlayer.volume = 0.2;
            this.audioPlayer.load();
            this.audioPlayer.play().catch(() => console.warn("Audio bloqué par le navigateur."));
        }
    }
}