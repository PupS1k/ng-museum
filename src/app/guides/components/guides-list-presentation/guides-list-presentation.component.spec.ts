import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesListPresentationComponent } from './guides-list-presentation.component';

describe('GuidesListPresentationComponent', () => {
  let component: GuidesListPresentationComponent;
  let fixture: ComponentFixture<GuidesListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
