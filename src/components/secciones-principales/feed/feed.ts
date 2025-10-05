import { Component, inject } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { FeedCard } from '../../cards/feed-card/feed-card';
import { ModalComentarios } from '../../modals/modal-comentarios/modal-comentarios';
import { Modals } from '../../../servicios/modals';
import { FullscreenOverlay } from '../../../directivas/fullscreen-overlay';

@Component({
  selector: 'feed',
  imports: [Cabecera, FeedCard, ModalComentarios, FullscreenOverlay],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  modalToggler = inject(Modals);
  isCommentsModalVisible: boolean = false;
}
