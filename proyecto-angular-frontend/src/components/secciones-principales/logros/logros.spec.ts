import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logros } from './logros';

describe('Logros', () => {
  let component: Logros;
  let fixture: ComponentFixture<Logros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
