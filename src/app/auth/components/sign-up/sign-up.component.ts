import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {SignUpStart} from '../../store/auth.actions';
import {VisitorForm} from '../../../visitors/models/visitor-form.model';
import {selectVisitorForm} from '../../../visitors/store/visitor.selectors';

@Component({
  selector: 'app-sign-up',
  template: `
    <app-visitor-edit-presentation
      [userForm]="signUpForm$ | async"
      (create)="onSubmit($event)"
      [isUpdate]="false"
    ></app-visitor-edit-presentation>
  `
})
export class SignUpComponent {
  signUpForm$ = this.store.select(selectVisitorForm);

  constructor(private store: Store<AppState>) {}

  onSubmit(visitorFormData: VisitorForm) {
    this.store.dispatch(new SignUpStart(visitorFormData));
  }
}
