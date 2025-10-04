import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { LogrosCard } from '../../cards/logros-card/logros-card';
import { ModalLogros } from '../../modals/modal-logros/modal-logros';
import { Modals } from '../../../servicios/modals';

@Component({
  selector: 'app-logros',
  imports: [Cabecera, LogrosCard, ModalLogros],
  templateUrl: './logros.html',
  styleUrl: './logros.css',
})
export class Logros {
  modalToggler = inject(Modals);
  isAchievementsModalVisible: boolean = false;
}
