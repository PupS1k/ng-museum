import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitEditPresentationComponent } from './exhibit-edit-presentation.component';

describe('ExhibitEditPresentationComponent', () => {
  let component: ExhibitEditPresentationComponent;
  let fixture: ComponentFixture<ExhibitEditPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitEditPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitEditPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
