import { Component, inject } from '@angular/core';
import { MenuMovil } from '../menu-movil/menu-movil';
import { NavigationService } from '../../servicios/navigation';
import { Modals } from '../../servicios/modals';

@Component({
  selector: 'navbar',
  imports: [MenuMovil],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navigation = inject(NavigationService);
  modalToggler = inject(Modals);
  isMenuVisible: boolean = false;
}
