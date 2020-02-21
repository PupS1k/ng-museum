import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPresentationComponent } from './sign-up-presentation.component';

describe('SignUpPresentationComponent', () => {
  let component: SignUpPresentationComponent;
  let fixture: ComponentFixture<SignUpPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
