import { Component, inject } from '@angular/core';
import { MenuMovil } from '../menu-movil/menu-movil';
import { NavigationService } from '../../servicios/navigation';

@Component({
  selector: 'navbar',
  imports: [MenuMovil],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navigation = inject(NavigationService);
  isMenuVisible: boolean = false;
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }
}
