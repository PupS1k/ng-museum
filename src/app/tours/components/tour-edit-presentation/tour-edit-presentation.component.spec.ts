import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEditPresentationComponent } from './tour-edit-presentation.component';

describe('TourEditPresentationComponent', () => {
  let component: TourEditPresentationComponent;
  let fixture: ComponentFixture<TourEditPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourEditPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourEditPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
