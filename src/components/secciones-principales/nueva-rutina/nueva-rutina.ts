import { Component } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { ExercisePreview } from '../../preview-components/exercise-preview/exercise-preview';

@Component({
  selector: 'app-nueva-rutina',
  imports: [Cabecera, ExercisePreview],
  templateUrl: './nueva-rutina.html',
  styleUrl: './nueva-rutina.css',
})
export class NuevaRutina {}
