import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  mostrarMenu() {
    alert('Al hacer clic aquí debería mostrarse el menú');
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
