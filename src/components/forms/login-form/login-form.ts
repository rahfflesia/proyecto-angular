import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-form',
  imports: [RouterLink],
  templateUrl: './login-form.html',
  // usé la hoja de estilos del formulario de registro porque son prácticamente lo mismo
  styleUrl: '../signup-form/signup-form.css',
})
export class LoginForm implements AfterViewInit {
  isVisible: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 0);
  }
}
