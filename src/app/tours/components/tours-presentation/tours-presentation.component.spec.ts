import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursPresentationComponent } from './tours-presentation.component';

describe('ToursPresentationComponent', () => {
  let component: ToursPresentationComponent;
  let fixture: ComponentFixture<ToursPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
