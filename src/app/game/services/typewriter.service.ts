import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {
  public texteAffiche = signal<string>('');
  public enCoursDecriture = signal<boolean>(false);

  private vitesseFrappe = 65;
  private intervalId: any;
  private texteCompletActuel = '';

  public lancer(texte: string): void {
    this.nettoyer();
    this.texteCompletActuel = texte;
    this.texteAffiche.set('');
    this.enCoursDecriture.set(true);
    let index = 0;

    this.intervalId = setInterval(() => {
      if (index < texte.length) {
        this.texteAffiche.update(actuel => actuel + texte.charAt(index));
        index++;
      } else {
        this.terminer();
      }
    }, this.vitesseFrappe);
  }

  public passer(): void {
    if (this.enCoursDecriture()) {
      this.texteAffiche.set(this.texteCompletActuel);
      this.terminer();
    }
  }

  private terminer(): void {
    this.nettoyer();
    this.enCoursDecriture.set(false);
  }

  private nettoyer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}