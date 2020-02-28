import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitItemComponent } from './exhibit-item.component';

describe('ExhibitItemComponent', () => {
  let component: ExhibitItemComponent;
  let fixture: ComponentFixture<ExhibitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
