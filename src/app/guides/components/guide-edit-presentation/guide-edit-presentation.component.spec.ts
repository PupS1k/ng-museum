import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEditPresentationComponent } from './guide-edit-presentation.component';

describe('GuideEditPresentationComponent', () => {
  let component: GuideEditPresentationComponent;
  let fixture: ComponentFixture<GuideEditPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideEditPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEditPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
