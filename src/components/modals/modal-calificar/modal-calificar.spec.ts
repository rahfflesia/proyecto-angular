import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalificar } from './modal-calificar';

describe('ModalCalificar', () => {
  let component: ModalCalificar;
  let fixture: ComponentFixture<ModalCalificar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCalificar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCalificar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
