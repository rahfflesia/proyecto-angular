import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'feed-card',
  imports: [],
  templateUrl: './feed-card.html',
  styleUrl: './feed-card.css',
})
export class FeedCard {
  @Output() clickComment = new EventEmitter<void>();

  onCommentClick() {
    this.clickComment.emit();
  }
}
