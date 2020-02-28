import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitEditComponent } from './exhibit-edit.component';

describe('ExhibitEditComponent', () => {
  let component: ExhibitEditComponent;
  let fixture: ComponentFixture<ExhibitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
