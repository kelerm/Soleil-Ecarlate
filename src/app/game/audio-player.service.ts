import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AudioPlayer {
    private audioPlayer = new Audio();

    // On garde en mémoire le chemin textuel exact envoyé par la scène
    private currentTrackPath: string | undefined = undefined;

    public gererMusique(path: string | undefined): void {
        // Nettoyage rapide pour harmoniser si jamais il y a un "./" qui traîne
        const cleanPath = path ? path.replace(/^\.\//, '').trim() : undefined;

        // Si aucun son n'est demandé, on coupe tout et on reset le tracking
        if (!cleanPath) {
            this.audioPlayer.pause();
            this.currentTrackPath = undefined;
            return;
        }

        // COMPARAISON TEXTUELLE STRICTE : On ne regarde PLUS DU TOUT le 'this.audioPlayer.src' du navigateur
        if (this.currentTrackPath === cleanPath) {
            console.log(`[Audio] Même musique (${cleanPath}), on ne coupe pas.`);
            return; // On stoppe la fonction ici, la musique continue sans hoquet
        }

        // Si on arrive ici, c'est que c'est une NOUVELLE musique
        console.log(`[Audio] Changement de piste : ${this.currentTrackPath} -> ${cleanPath}`);

        this.currentTrackPath = cleanPath;
        this.audioPlayer.src = cleanPath;
        this.audioPlayer.loop = true;
        this.audioPlayer.volume = 0.2;
        this.audioPlayer.load();
        this.audioPlayer.play().catch((err) =>
            console.warn("Audio bloqué par les restrictions du navigateur :", err)
        );
    }
}