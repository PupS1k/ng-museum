import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitListPresentationComponent } from './exhibit-list-presentation.component';

describe('ExhibitListPresentationComponent', () => {
  let component: ExhibitListPresentationComponent;
  let fixture: ComponentFixture<ExhibitListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
