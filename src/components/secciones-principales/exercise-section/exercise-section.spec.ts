import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSection } from './exercise-section';

describe('ExerciseSection', () => {
  let component: ExerciseSection;
  let fixture: ComponentFixture<ExerciseSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
