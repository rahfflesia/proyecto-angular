import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMovil } from './menu-movil';

describe('MenuMovil', () => {
  let component: MenuMovil;
  let fixture: ComponentFixture<MenuMovil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMovil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMovil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
