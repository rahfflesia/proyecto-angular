import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMetas } from './modal-metas';

describe('ModalMetas', () => {
  let component: ModalMetas;
  let fixture: ComponentFixture<ModalMetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
