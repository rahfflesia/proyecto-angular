import { Component, inject } from '@angular/core';
import { AgregarEjercicios } from '../agregar-ejercicios/agregar-ejercicios';
import { Modals } from '../../servicios/modals';

@Component({
  selector: 'home-page',
  imports: [AgregarEjercicios],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  modalToggler = inject(Modals);
  isExerciseComponentVisible: boolean = false;
}
