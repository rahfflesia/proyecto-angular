import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../../navbar/navbar';

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {}
