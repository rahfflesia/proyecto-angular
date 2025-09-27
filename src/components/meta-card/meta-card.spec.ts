import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCard } from './meta-card';

describe('MetaCard', () => {
  let component: MetaCard;
  let fixture: ComponentFixture<MetaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
