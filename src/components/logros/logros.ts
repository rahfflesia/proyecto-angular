import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { LogrosCard } from '../logros-card/logros-card';

@Component({
  selector: 'app-logros',
  imports: [Cabecera, LogrosCard],
  templateUrl: './logros.html',
  styleUrl: './logros.css',
})
export class Logros {}
