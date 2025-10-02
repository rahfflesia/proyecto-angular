import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEjercicios } from './agregar-ejercicios';

describe('AgregarEjercicios', () => {
  let component: AgregarEjercicios;
  let fixture: ComponentFixture<AgregarEjercicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEjercicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEjercicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
