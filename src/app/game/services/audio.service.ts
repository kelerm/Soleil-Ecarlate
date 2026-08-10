import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioPlayer = new Audio();

  public gererMusique(path: string): void {
    const fullUrl = window.location.origin + '/' + path;
    if (this.audioPlayer.src !== fullUrl) {
      this.audioPlayer.src = path;
      this.audioPlayer.loop = true;
      this.audioPlayer.volume = 0.2; 
      this.audioPlayer.load();
      this.audioPlayer.play().catch(() => console.warn("Audio bloqué par le navigateur."));
    }
  }
}