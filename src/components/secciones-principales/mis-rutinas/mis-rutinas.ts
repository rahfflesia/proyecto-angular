import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { WorkoutCard } from '../../cards/workout-card/workout-card';
import { AgregarEjercicios } from '../../modals/agregar-ejercicios/agregar-ejercicios';
import { Modals } from '../../../servicios/modals';

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
