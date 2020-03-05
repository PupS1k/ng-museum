import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPresentationComponent } from './navbar-presentation.component';

describe('NavbarPresentationComponent', () => {
  let component: NavbarPresentationComponent;
  let fixture: ComponentFixture<NavbarPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
