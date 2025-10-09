import { Component } from '@angular/core';
import { ModalAyudaEjercicio } from '../../modals/modal-ayuda-ejercicio/modal-ayuda-ejercicio';

@Component({
  selector: 'rest-section',
  imports: [ModalAyudaEjercicio],
  templateUrl: './rest-section.html',
  styleUrl: './rest-section.css',
})
export class RestSection {}
