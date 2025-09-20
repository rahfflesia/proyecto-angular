import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCard } from './workout-card';

describe('WorkoutCard', () => {
  let component: WorkoutCard;
  let fixture: ComponentFixture<WorkoutCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
