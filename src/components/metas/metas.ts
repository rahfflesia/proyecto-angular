import { Component } from '@angular/core';
import { Cabecera } from '../cabecera/cabecera';
import { MetaCard } from '../meta-card/meta-card';
import { ModalMetas } from '../modal-metas/modal-metas';

@Component({
  selector: 'metas',
  imports: [Cabecera, MetaCard, ModalMetas],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas {
  isGoalsModalVisible: boolean = false;

  showGoalsModal() {
    this.isGoalsModalVisible = true;
  }

  closeGoalsModal() {
    this.isGoalsModalVisible = false;
  }
}
