import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cambiar-contrasena',
  imports: [],
  templateUrl: './cambiar-contrasena.html',
  styleUrl: './cambiar-contrasena.css',
})
export class CambiarContrasena {
  @Output() closeButtonClick = new EventEmitter<void>();

  onCloseButtonClick() {
    this.closeButtonClick.emit();
  }
}
