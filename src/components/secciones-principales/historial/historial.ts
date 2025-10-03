import { Component } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { MetaCard } from '../../cards/meta-card/meta-card';
import { WorkoutCard } from '../../cards/workout-card/workout-card';

@Component({
  selector: 'app-historial',
  imports: [Cabecera, WorkoutCard, MetaCard],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {}
