import { Component, inject } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { WorkoutCard } from '../workout-card/workout-card';
import { AgregarEjercicios } from '../agregar-ejercicios/agregar-ejercicios';
import { Modals } from '../../servicios/modals';

@Component({
  selector: 'mis-rutinas',
  imports: [Cabecera, WorkoutCard, AgregarEjercicios],
  templateUrl: './mis-rutinas.html',
  styleUrl: './mis-rutinas.css',
})
export class MisRutinas {
  modalToggler = inject(Modals);
  isExerciseComponentVisible: boolean = false;
}
