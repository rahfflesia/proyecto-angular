import { TestBed } from '@angular/core/testing';

import { Modals } from './modals';

describe('Modals', () => {
  let service: Modals;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modals);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
