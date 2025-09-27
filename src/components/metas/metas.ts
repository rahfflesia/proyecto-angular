import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { MetaCard } from '../meta-card/meta-card';

@Component({
  selector: 'metas',
  imports: [Cabecera, MetaCard],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas {}
