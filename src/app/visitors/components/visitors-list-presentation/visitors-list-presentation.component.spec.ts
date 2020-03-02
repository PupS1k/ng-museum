import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsListPresentationComponent } from './visitors-list-presentation.component';

describe('VisitorsListPresentationComponent', () => {
  let component: VisitorsListPresentationComponent;
  let fixture: ComponentFixture<VisitorsListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
