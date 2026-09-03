import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
    // Signal pour savoir si le mode est actif (utile pour les boutons UI)
    readonly isActive = signal<boolean>(false);

    constructor() {
        // Initialisation "Java-style" dans le constructeur
        const saved = localStorage.getItem('accessibleMode');
        if (saved === 'true') {
            this.isActive.set(true);
            this.applyStyle(true);
        }
    }

    toggle() {
        const newState = !this.isActive();
        this.isActive.set(newState);
        localStorage.setItem('accessibleMode', String(newState));
        this.applyStyle(newState);
    }

    private applyStyle(active: boolean) {
        if (active) {
            document.body.classList.add('accessible-mode');
        } else {
            document.body.classList.remove('accessible-mode');
        }
    }
}
