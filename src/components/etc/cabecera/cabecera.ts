import { Component, Input } from '@angular/core';

@Component({
  selector: 'cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})
export class Cabecera {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
