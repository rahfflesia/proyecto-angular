import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-metas',
  imports: [],
  templateUrl: './modal-metas.html',
  styleUrl: './modal-metas.css',
})
export class ModalMetas {
  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }
}
