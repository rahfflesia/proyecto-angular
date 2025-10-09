import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrosCard } from './logros-card';

describe('LogrosCard', () => {
  let component: LogrosCard;
  let fixture: ComponentFixture<LogrosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogrosCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogrosCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
