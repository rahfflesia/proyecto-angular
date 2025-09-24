import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mostrarMenu() {
    alert('Al hacer clic aquí debería mostrarse el menú');
  }
}
