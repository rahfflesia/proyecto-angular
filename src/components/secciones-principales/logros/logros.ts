import { Component } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { LogrosCard } from '../../cards/logros-card/logros-card';

@Component({
  selector: 'app-logros',
  imports: [Cabecera, LogrosCard],
  templateUrl: './logros.html',
  styleUrl: './logros.css',
})
export class Logros {}
