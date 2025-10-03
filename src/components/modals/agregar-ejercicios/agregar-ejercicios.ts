import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'agregar-ejercicios',
  imports: [],
  templateUrl: './agregar-ejercicios.html',
  styleUrl: './agregar-ejercicios.css',
})
export class AgregarEjercicios {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
