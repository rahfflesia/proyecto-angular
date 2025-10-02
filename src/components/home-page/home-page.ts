import { Component } from '@angular/core';
import { AgregarEjercicios } from '../agregar-ejercicios/agregar-ejercicios';

@Component({
  selector: 'home-page',
  imports: [AgregarEjercicios],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  isExerciseComponentVisible: boolean = false;

  toggleExerciseComponent() {
    this.isExerciseComponentVisible = !this.isExerciseComponentVisible;
  }

  closeMenu() {
    this.isExerciseComponentVisible = false;
  }
}
