import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRutina } from './nueva-rutina';

describe('NuevaRutina', () => {
  let component: NuevaRutina;
  let fixture: ComponentFixture<NuevaRutina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaRutina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaRutina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
