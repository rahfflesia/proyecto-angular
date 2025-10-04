import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-logros',
  imports: [],
  templateUrl: './modal-logros.html',
  styleUrl: './modal-logros.css',
})
export class ModalLogros {
  @Output() close = new EventEmitter<void>();

  emitCloseEvent() {
    this.close.emit();
  }
}
