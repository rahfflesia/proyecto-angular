import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCard } from './feed-card';

describe('FeedCard', () => {
  let component: FeedCard;
  let fixture: ComponentFixture<FeedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
