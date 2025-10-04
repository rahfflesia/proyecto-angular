import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogros } from './modal-logros';

describe('ModalLogros', () => {
  let component: ModalLogros;
  let fixture: ComponentFixture<ModalLogros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLogros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLogros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
