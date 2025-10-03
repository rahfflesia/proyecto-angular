import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-notas',
  imports: [],
  templateUrl: './modal-notas.html',
  styleUrl: './modal-notas.css',
})
export class ModalNotas {
  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }
}
