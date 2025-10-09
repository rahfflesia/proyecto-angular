import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-calificar',
  imports: [],
  templateUrl: './modal-calificar.html',
  styleUrl: './modal-calificar.css',
})
export class ModalCalificar {
  @Output() close = new EventEmitter<void>();

  closeClick() {
    this.close.emit();
  }
}
