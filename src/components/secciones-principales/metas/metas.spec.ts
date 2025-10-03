import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metas } from './metas';

describe('Metas', () => {
  let component: Metas;
  let fixture: ComponentFixture<Metas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
