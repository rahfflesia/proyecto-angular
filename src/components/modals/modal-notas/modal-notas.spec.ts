import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotas } from './modal-notas';

describe('ModalNotas', () => {
  let component: ModalNotas;
  let fixture: ComponentFixture<ModalNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
