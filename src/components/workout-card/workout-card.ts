import { Component, Input } from '@angular/core';

@Component({
  selector: 'workout-card',
  imports: [],
  templateUrl: './workout-card.html',
  styleUrl: './workout-card.css',
})
export class WorkoutCard {
  @Input() title: string = '';
  @Input() numberOfExercises: string = '';
  @Input() difficulty: string = '';

  getRandomHex(): string {
    let randomColor: string = '#';
    const hexadecimalAlphabet: string = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexadecimalAlphabet.length);
      randomColor += hexadecimalAlphabet[randomIndex];
    }

    return randomColor;
  }
}
