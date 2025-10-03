import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { WorkoutCard } from '../workout-card/workout-card';
import { AgregarEjercicios } from '../agregar-ejercicios/agregar-ejercicios';

@Component({
  selector: 'mis-rutinas',
  imports: [Cabecera, WorkoutCard, AgregarEjercicios],
  templateUrl: './mis-rutinas.html',
  styleUrl: './mis-rutinas.css',
})
export class MisRutinas {
  isExerciseComponentVisible: boolean = false;

  showExerciseComponent() {
    this.isExerciseComponentVisible = true;
  }

  closeExerciseComponent() {
    this.isExerciseComponentVisible = false;
  }
}
