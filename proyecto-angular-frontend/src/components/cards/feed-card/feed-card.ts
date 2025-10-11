import { Component, inject } from '@angular/core';
import { RoutinePreview } from '../../preview-components/routine-preview/routine-preview';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';
import { Modals } from '../../../servicios/modals';
import { NavigationService } from '../../../servicios/navigation';
import { ModalComentarios } from '../../modals/modal-comentarios/modal-comentarios';
import { ModalCalificar } from '../../modals/modal-calificar/modal-calificar';

@Component({
  selector: 'feed-card',
  imports: [RoutinePreview, FullscreenOverlay, ModalComentarios, ModalCalificar],
  templateUrl: './feed-card.html',
  styleUrl: './feed-card.css',
})
export class FeedCard {
  modalToggler = inject(Modals);
  navigation = inject(NavigationService);

  isRoutinePreviewModalVisible: boolean = false;
  isCommentsModalVisible: boolean = false;
  isCalificationModalVisible: boolean = false;
}
