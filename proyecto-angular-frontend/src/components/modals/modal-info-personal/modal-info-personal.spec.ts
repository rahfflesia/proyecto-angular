import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoPersonal } from './modal-info-personal';

describe('ModalInfoPersonal', () => {
  let component: ModalInfoPersonal;
  let fixture: ComponentFixture<ModalInfoPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInfoPersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfoPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
