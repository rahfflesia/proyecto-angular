import { Component, inject, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../../../servicios/navigation';

@Component({
  selector: 'menu-movil',
  imports: [],
  templateUrl: './menu-movil.html',
  styleUrl: './menu-movil.css',
})
export class MenuMovil {
  navigation = inject(NavigationService);
  @Output() linkClicked = new EventEmitter<void>();

  onLinkClicked(): void {
    this.linkClicked.emit();
  }
}
