import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandirNota } from './expandir-nota';

describe('ExpandirNota', () => {
  let component: ExpandirNota;
  let fixture: ComponentFixture<ExpandirNota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandirNota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandirNota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
