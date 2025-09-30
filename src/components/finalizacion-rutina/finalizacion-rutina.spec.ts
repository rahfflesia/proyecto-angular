import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizacionRutina } from './finalizacion-rutina';

describe('FinalizacionRutina', () => {
  let component: FinalizacionRutina;
  let fixture: ComponentFixture<FinalizacionRutina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizacionRutina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizacionRutina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
