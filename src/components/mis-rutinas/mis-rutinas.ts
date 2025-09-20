import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { WorkoutCard } from '../workout-card/workout-card';

@Component({
  selector: 'mis-rutinas',
  imports: [Cabecera, WorkoutCard],
  templateUrl: './mis-rutinas.html',
  styleUrl: './mis-rutinas.css',
})
export class MisRutinas {}
