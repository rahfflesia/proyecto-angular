import { Component, EventEmitter, Output } from '@angular/core';
import { ExercisePreview } from '../exercise-preview/exercise-preview';

@Component({
  selector: 'routine-preview',
  imports: [ExercisePreview],
  templateUrl: './routine-preview.html',
  styleUrl: './routine-preview.css',
})
export class RoutinePreview {
  @Output() close = new EventEmitter<void>();

  onCloseButtonClick() {
    this.close.emit();
  }
}
