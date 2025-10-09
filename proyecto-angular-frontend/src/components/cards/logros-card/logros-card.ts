import { Component, Input } from '@angular/core';

@Component({
  selector: 'logros-card',
  imports: [],
  templateUrl: './logros-card.html',
  styleUrl: './logros-card.css',
})
export class LogrosCard {
  @Input() tituloLogro: string = '';
  @Input() descripcionLogro: string = '';
  @Input() estadoLogro: string = '';
  @Input() imagenLogroUrl: string = '';
}
