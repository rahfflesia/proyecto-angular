import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private router = inject(Router);

  toHome() {
    this.router.navigate(['/home']);
  }

  toStats() {
    this.router.navigate(['/estadisticas']);
  }

  toGoals() {
    this.router.navigate(['/metas']);
  }

  toProfile() {
    this.router.navigate(['/perfil']);
  }

  toAchievements() {
    this.router.navigate(['/logros']);
  }

  toFavorites() {
    this.router.navigate(['/favoritos']);
  }

  toNotes() {
    this.router.navigate(['/notas']);
  }

  toMyRoutines() {
    this.router.navigate(['/misrutinas']);
  }

  toHistory() {
    this.router.navigate(['/historial']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
