import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicacion } from './editar-publicacion';

describe('EditarPublicacion', () => {
  let component: EditarPublicacion;
  let fixture: ComponentFixture<EditarPublicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPublicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPublicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
