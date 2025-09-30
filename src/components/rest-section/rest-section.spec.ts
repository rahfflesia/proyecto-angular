import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSection } from './rest-section';

describe('RestSection', () => {
  let component: RestSection;
  let fixture: ComponentFixture<RestSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
