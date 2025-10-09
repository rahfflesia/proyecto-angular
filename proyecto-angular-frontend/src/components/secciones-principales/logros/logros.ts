import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { LogrosCard } from '../../cards/logros-card/logros-card';
import { ModalLogros } from '../../modals/modal-logros/modal-logros';
import { Modals } from '../../../servicios/modals';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';

@Component({
  selector: 'app-logros',
  imports: [Cabecera, LogrosCard, ModalLogros, FullscreenOverlay],
  templateUrl: './logros.html',
  styleUrl: './logros.css',
})
export class Logros {
  modalToggler = inject(Modals);
  isAchievementsModalVisible: boolean = false;
}
