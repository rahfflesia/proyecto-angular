import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Modals {
  showModal(): boolean {
    return true;
  }

  closeModal(): boolean {
    return false;
  }

  toggleModal(visibilty: boolean): boolean {
    return !visibilty;
  }
}
