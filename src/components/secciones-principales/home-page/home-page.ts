import { Component, inject } from '@angular/core';
import { Modals } from '../../../servicios/modals';
import { AgregarEjercicios } from '../../modals/agregar-ejercicios/agregar-ejercicios';

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
