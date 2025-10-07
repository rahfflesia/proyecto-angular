import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasena } from './cambiar-contrasena';

describe('CambiarContrasena', () => {
  let component: CambiarContrasena;
  let fixture: ComponentFixture<CambiarContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
