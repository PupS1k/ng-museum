import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursListPresentationComponent } from './tours-list-presentation.component';

describe('ToursListPresentationComponent', () => {
  let component: ToursListPresentationComponent;
  let fixture: ComponentFixture<ToursListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
