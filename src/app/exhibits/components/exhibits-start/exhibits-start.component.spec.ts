import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitsStartComponent } from './exhibits-start.component';

describe('ExhibitsStartComponent', () => {
  let component: ExhibitsStartComponent;
  let fixture: ComponentFixture<ExhibitsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
