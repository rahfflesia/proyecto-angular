import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[FullscreenOverlay]',
  host: {
    class: 'fullscreen-overlay',
  },
})
export class FullscreenOverlay {
  @HostBinding('class.isVisible')
  @Input('FullscreenOverlay')
  public isVisible: boolean = false;
  constructor() {}
}
