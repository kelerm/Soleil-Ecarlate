import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AudioPlayer, Histoire, Scene, Typewriter} from '../game';

@Injectable({
    providedIn: 'root'
})
export class Game {
    private http = inject(HttpClient);

    // Injection services spécialisés
    private audioService = inject(AudioPlayer);
    public typewriterService = inject(Typewriter);

    private histoire = signal<Histoire | null>(null);
    private currentSceneId = signal<string>('intro');

    public currentScene = computed<Scene | null>(() => {
        const data = this.histoire();
        return data ? data[this.currentSceneId()] : null;
    });

    constructor() {
        this.chargerHistoire();
    }

    private chargerHistoire(): void {
        this.http.get<Histoire>('assets/data/story.json').subscribe({
            next: (data) => this.histoire.set(data),
            error: (err) => console.error("Erreur JSON :", err)
        });
    }

    public demarrerJeu(): void {
        this.currentSceneId.set('intro');
        this.appliquerScene();
    }

    public selectionnerChoix(prochaineSceneId: string): void {
        const data = this.histoire();
        if (data && data[prochaineSceneId]) {
            this.currentSceneId.set(prochaineSceneId);
            this.appliquerScene();
        }
    }

    // Centralisation de la distribution des tâches
    private appliquerScene(): void {
        const scene = this.currentScene();
        if (scene) {
            if (scene.audio) {
                this.audioService.gererMusique(scene.audio);
            }
            this.typewriterService.lancer(scene.texte);
        }
    }
}