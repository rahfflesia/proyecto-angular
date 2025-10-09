import { Component } from '@angular/core';
import { NoteCard } from '../../cards/note-card/note-card';

@Component({
  selector: 'modal-notas-vinculadas',
  imports: [NoteCard],
  templateUrl: './modal-notas-vinculadas.html',
  styleUrl: './modal-notas-vinculadas.css',
})
export class ModalNotasVinculadas {}
