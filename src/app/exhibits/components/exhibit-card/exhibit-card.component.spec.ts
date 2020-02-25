import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitCardComponent } from './exhibit-card.component';

describe('ExhibitCardComponent', () => {
  let component: ExhibitCardComponent;
  let fixture: ComponentFixture<ExhibitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
