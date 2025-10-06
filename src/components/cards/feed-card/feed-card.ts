import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'feed-card',
  imports: [],
  templateUrl: './feed-card.html',
  styleUrl: './feed-card.css',
})
export class FeedCard {
  @Output() clickComment = new EventEmitter<void>();
  @Output() clickRoutine = new EventEmitter<void>();
  @Output() clickView = new EventEmitter<void>();

  onCommentClick() {
    this.clickComment.emit();
  }

  onRatingClick() {
    this.clickRoutine.emit();
  }

  onViewClick() {
    this.clickView.emit();
  }
}
