import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { WorkoutCard } from '../workout-card/workout-card';
import { MetaCard } from '../meta-card/meta-card';

@Component({
  selector: 'app-historial',
  imports: [Cabecera, WorkoutCard, MetaCard],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {}
