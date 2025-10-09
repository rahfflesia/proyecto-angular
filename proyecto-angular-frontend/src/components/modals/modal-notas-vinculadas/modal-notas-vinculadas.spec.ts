import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotasVinculadas } from './modal-notas-vinculadas';

describe('ModalNotasVinculadas', () => {
  let component: ModalNotasVinculadas;
  let fixture: ComponentFixture<ModalNotasVinculadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNotasVinculadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotasVinculadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
