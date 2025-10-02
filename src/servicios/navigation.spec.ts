import { TestBed } from '@angular/core/testing';

import { Navigation } from './navigation';

describe('Navigation', () => {
  let service: Navigation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Navigation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
