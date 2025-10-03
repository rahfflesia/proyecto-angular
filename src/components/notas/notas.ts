import { Component, inject } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { ModalNotas } from '../modal-notas/modal-notas';
import { Modals } from '../../servicios/modals';
import { ExpandirNota } from '../expandir-nota/expandir-nota';

@Component({
  selector: 'notas',
  imports: [Cabecera, ModalNotas, ExpandirNota],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {
  modalToggler = inject(Modals);
  isNotesModalVisible: boolean = false;
  expandNote: boolean = false;
}
