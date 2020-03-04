import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideItemComponent } from './guide-item.component';

describe('GuideItemComponent', () => {
  let component: GuideItemComponent;
  let fixture: ComponentFixture<GuideItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
