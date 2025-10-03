import { Component } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { WorkoutCard } from '../../cards/workout-card/workout-card';

@Component({
  selector: 'app-favoritos',
  imports: [Cabecera, WorkoutCard],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {}
