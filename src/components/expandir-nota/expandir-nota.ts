import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'expandir-nota',
  imports: [],
  templateUrl: './expandir-nota.html',
  styleUrl: './expandir-nota.css',
})
export class ExpandirNota {
  @Output() close = new EventEmitter<void>();

  closeExpandedNote() {
    this.close.emit();
  }
}
