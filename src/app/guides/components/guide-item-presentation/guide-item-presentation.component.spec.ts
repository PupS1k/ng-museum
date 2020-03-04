import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideItemPresentationComponent } from './guide-item-presentation.component';

describe('GuideItemPresentationComponent', () => {
  let component: GuideItemPresentationComponent;
  let fixture: ComponentFixture<GuideItemPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideItemPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideItemPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
