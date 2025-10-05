import { Component, EventEmitter, Output } from '@angular/core';
import { CommentComponent } from '../../comments-section-components/comment-component/comment-component';

@Component({
  selector: 'modal-comentarios',
  imports: [CommentComponent],
  templateUrl: './modal-comentarios.html',
  styleUrl: './modal-comentarios.css',
})
export class ModalComentarios {
  @Output() closeButtonClick = new EventEmitter<void>();

  onCloseButtonClick() {
    this.closeButtonClick.emit();
  }
}
