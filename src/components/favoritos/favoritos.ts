import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { WorkoutCard } from '../workout-card/workout-card';

@Component({
  selector: 'app-favoritos',
  imports: [Cabecera, WorkoutCard],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {}
