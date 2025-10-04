import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePreview } from './exercise-preview';

describe('ExercisePreview', () => {
  let component: ExercisePreview;
  let fixture: ComponentFixture<ExercisePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
