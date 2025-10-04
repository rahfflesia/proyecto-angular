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

  obtenerSaludo(): string {
    const fecha = new Date();
    if (fecha.getHours() >= 0 && fecha.getHours() <= 11) return 'Buenos días';
    else if (fecha.getHours() >= 12 && fecha.getHours() <= 18) return 'Buenas tardes';
    else return 'Buenas noches';
  }
}
