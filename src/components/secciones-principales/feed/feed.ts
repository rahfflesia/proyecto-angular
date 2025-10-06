import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { FeedCard } from '../../cards/feed-card/feed-card';
import { ModalComentarios } from '../../modals/modal-comentarios/modal-comentarios';
import { Modals } from '../../../servicios/modals';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';
import { ModalCalificar } from '../../modals/modal-calificar/modal-calificar';
import { RoutinePreview } from '../../preview-components/routine-preview/routine-preview';

@Component({
  selector: 'feed',
  imports: [
    Cabecera,
    FeedCard,
    ModalComentarios,
    FullscreenOverlay,
    ModalCalificar,
    RoutinePreview,
  ],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  modalToggler = inject(Modals);
  isCommentsModalVisible: boolean = false;
  isRatingModalVisible: boolean = false;
  isRoutinePreviewVisible: boolean = false;
}
