import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPresentationComponent } from './create-user-presentation.component';

describe('SignUpPresentationComponent', () => {
  let component: CreateUserPresentationComponent;
  let fixture: ComponentFixture<CreateUserPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
