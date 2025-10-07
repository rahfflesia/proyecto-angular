import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogroPreview } from './logro-preview';

describe('LogroPreview', () => {
  let component: LogroPreview;
  let fixture: ComponentFixture<LogroPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogroPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogroPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
