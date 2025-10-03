import { Component, inject } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { MetaCard } from '../meta-card/meta-card';
import { ModalMetas } from '../modal-metas/modal-metas';
import { Modals } from '../../servicios/modals';

@Component({
  selector: 'metas',
  imports: [Cabecera, MetaCard, ModalMetas],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas {
  modalToggler = inject(Modals);
  isGoalsModalVisible: boolean = false;
}
