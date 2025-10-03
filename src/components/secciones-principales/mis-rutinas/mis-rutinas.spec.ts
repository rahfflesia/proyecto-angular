import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRutinas } from './mis-rutinas';

describe('MisRutinas', () => {
  let component: MisRutinas;
  let fixture: ComponentFixture<MisRutinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisRutinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRutinas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
