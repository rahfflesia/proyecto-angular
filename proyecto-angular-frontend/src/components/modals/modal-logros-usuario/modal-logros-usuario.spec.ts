import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogrosUsuario } from './modal-logros-usuario';

describe('ModalLogrosUsuario', () => {
  let component: ModalLogrosUsuario;
  let fixture: ComponentFixture<ModalLogrosUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLogrosUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLogrosUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
