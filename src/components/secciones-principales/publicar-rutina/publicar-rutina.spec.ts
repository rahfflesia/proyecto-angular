import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRutina } from './publicar-rutina';

describe('PublicarRutina', () => {
  let component: PublicarRutina;
  let fixture: ComponentFixture<PublicarRutina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicarRutina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicarRutina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
