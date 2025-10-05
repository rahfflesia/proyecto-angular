import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComentarios } from './modal-comentarios';

describe('ModalComentarios', () => {
  let component: ModalComentarios;
  let fixture: ComponentFixture<ModalComentarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComentarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComentarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
