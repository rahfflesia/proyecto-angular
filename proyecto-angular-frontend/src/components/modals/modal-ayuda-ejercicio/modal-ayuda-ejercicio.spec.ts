import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAyudaEjercicio } from './modal-ayuda-ejercicio';

describe('ModalAyudaEjercicio', () => {
  let component: ModalAyudaEjercicio;
  let fixture: ComponentFixture<ModalAyudaEjercicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAyudaEjercicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAyudaEjercicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
