import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinePreview } from './routine-preview';

describe('RoutinePreview', () => {
  let component: RoutinePreview;
  let fixture: ComponentFixture<RoutinePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutinePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
