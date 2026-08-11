export interface Choix {
    texte: string;
    prochaineSceneId: string;
}

export interface Scene {
    id: string;
    image: string;
    texte: string;
    audio?: string;
    choix: Choix[];
}

export interface Histoire {
    [key: string]: Scene;
}