import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { ModalNotas } from '../modal-notas/modal-notas';

@Component({
  selector: 'notas',
  imports: [Cabecera, ModalNotas],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {
  isNotesModalVisible: boolean = false;

  closeModal() {
    this.isNotesModalVisible = false;
  }

  openModal() {
    this.isNotesModalVisible = true;
  }
}
