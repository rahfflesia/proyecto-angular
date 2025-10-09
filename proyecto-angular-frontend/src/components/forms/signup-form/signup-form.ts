import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'signup-form',
  imports: [RouterLink],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm implements AfterViewInit {
  isVisible: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 0);
  }
}
