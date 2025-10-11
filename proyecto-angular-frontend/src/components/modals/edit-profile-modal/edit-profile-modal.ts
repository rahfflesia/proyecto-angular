import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'edit-profile-modal',
  imports: [],
  templateUrl: './edit-profile-modal.html',
  styleUrl: './edit-profile-modal.css',
})
export class EditProfileModal {
  @Output() onCloseButtonClick = new EventEmitter<void>();

  closeEditProfileModal() {
    this.onCloseButtonClick.emit();
  }
}
