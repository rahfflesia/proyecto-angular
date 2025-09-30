import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuMovil } from '../menu-movil/menu-movil';

@Component({
  selector: 'navbar',
  imports: [MenuMovil],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  isMenuVisibile: boolean = false;
  toggleMenu() {
    this.isMenuVisibile = !this.isMenuVisibile;
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

  logout() {
    this.router.navigate(['/login']);
  }
}
