import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../../secciones-principales/navbar/navbar';

@Component({
  selector: 'main-layout-component',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {}
