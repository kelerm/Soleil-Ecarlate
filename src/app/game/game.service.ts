import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AudioPlayer, Histoire, Scene, Typewriter} from '../game';
import {TranslocoService} from "@jsverse/transloco";

@Injectable({
    providedIn: 'root'
})
export class Game {
    private http = inject(HttpClient);
    private translocoService = inject(TranslocoService);

    // Injection services spécialisés
    private audioService = inject(AudioPlayer);
    public typewriterService = inject(Typewriter);

    private histoire = signal<Histoire | null>(null);
    private currentActe = signal<string>('acte1');
    private currentSceneId = signal<string>('scene_1');

    public currentScene = computed<Scene | null>(() => {
        const data = this.histoire() as any; // On cast temporairement en any pour la structure imbriquée
        const acteActuel = this.currentActe(); // ex: 'acte1'
        const sceneActuelle = this.currentSceneId(); // ex: 'scene_1'

        // On vérifie si le JSON est chargé ET si l'acte existe dedans
        if (data && data[acteActuel]) {
            return data[acteActuel][sceneActuelle] || null;
        }

        return null;
    });

    constructor() {
        this.chargerHistoire();
    }

    private chargerHistoire(): void {

        this.http.get<Histoire>(`assets/data/${this.currentActe()}.json`).subscribe({
            next: (data) =>  {
                this.histoire.set(data);
                console.log(this.histoire());
                this.appliquerScene();
            },
            error: (err) => console.error(`Erreur JSON : pour ${this.currentActe()}`, err)
        });
    }

    public demarrerJeu(): void {
        this.currentActe.set('acte1');
        this.currentSceneId.set('scene_1');
        this.chargerHistoire();
    }

    public selectionnerChoix(prochaineSceneId: string): void {

        // 1. CAS PARTICULIER : Si l'ID est vide, c'est le signal de fin d'acte !
        if (!prochaineSceneId) {
            // On extrait le numéro de l'acte actuel (ex: "acte1" -> 1)
            const numeroActeActuel = parseInt(this.currentActe().replace('acte', ''), 10);
            const prochainNumero = numeroActeActuel + 1;
            const nomProchainActe = `acte${prochainNumero}`; // Construit "acte2"

            // On met à jour nos signaux pour le lazy loading
            this.currentActe.set(nomProchainActe);
            this.currentSceneId.set('scene_1'); // On reset à la première scène

            // On recharge le nouveau fichier JSON (ex: assets/data/acte2.json)
            this.chargerHistoire();
            return;
        }

        const data = this.histoire() as any;
        // On vérifie : 1. Si le JSON est chargé, 2. Si l'acte existe, 3. Si la scène demandée existe dans cet acte
        if (data && data[this.currentActe()] && data[this.currentActe()][prochaineSceneId]) {
            this.currentSceneId.set(prochaineSceneId);
            this.appliquerScene();
            return;
        } else {
            console.warn(`La scène [${prochaineSceneId}] est introuvable dans l'acte [${this.currentActe()}].`);
        }
    }

    // Centralisation de la distribution des tâches
    private appliquerScene(): void {
        const scene = this.currentScene();
        console.log(scene);
        if (scene) {
            if (scene.audio) {
                this.audioService.gererMusique(scene.audio);
            }
            // Récupération dynamique via Transloco avec l' ID de scène en clé plate
            const texteTraduit = this.translocoService.translate(scene.texte);
            console.log(texteTraduit);
            this.typewriterService.lancer(texteTraduit);
        }
    }
}