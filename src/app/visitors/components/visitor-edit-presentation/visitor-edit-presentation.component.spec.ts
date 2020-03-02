import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEditPresentationComponent } from './visitor-edit-presentation.component';

describe('VisitorEditPresentationComponent', () => {
  let component: VisitorEditPresentationComponent;
  let fixture: ComponentFixture<VisitorEditPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorEditPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorEditPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
