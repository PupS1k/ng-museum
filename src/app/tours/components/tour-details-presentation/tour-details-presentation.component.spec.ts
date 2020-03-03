import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPresentationComponent } from './tour-details-presentation.component';

describe('TourDetailsPresentationComponent', () => {
  let component: TourDetailsPresentationComponent;
  let fixture: ComponentFixture<TourDetailsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetailsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
