import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { ModalMetas } from '../../modals/modal-metas/modal-metas';
import { MetaCard } from '../../cards/meta-card/meta-card';
import { Modals } from '../../../servicios/modals';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';

@Component({
  selector: 'metas',
  imports: [Cabecera, MetaCard, ModalMetas, FullscreenOverlay],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas {
  modalToggler = inject(Modals);
  isGoalsModalVisible: boolean = false;
}
