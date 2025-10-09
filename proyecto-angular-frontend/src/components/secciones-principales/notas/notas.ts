import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { ExpandirNota } from '../../modals/expandir-nota/expandir-nota';
import { ModalNotas } from '../../modals/modal-notas/modal-notas';
import { Modals } from '../../../servicios/modals';
import { NoteCard } from '../../cards/note-card/note-card';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';

@Component({
  selector: 'notas',
  imports: [Cabecera, ModalNotas, ExpandirNota, NoteCard, FullscreenOverlay],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {
  modalToggler = inject(Modals);
  isNotesModalVisible: boolean = false;
  expandNote: boolean = false;
}
