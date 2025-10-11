import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-info-personal',
  imports: [],
  templateUrl: './modal-info-personal.html',
  styleUrl: './modal-info-personal.css',
})
export class ModalInfoPersonal {
  @Output() closeButtonClick = new EventEmitter<void>();

  onCloseButtonClick() {
    this.closeButtonClick.emit();
  }
}
