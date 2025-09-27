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
}
