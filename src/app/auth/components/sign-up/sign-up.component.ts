import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {SignUpStart} from '../../store/auth.actions';
import {createFormVisitor} from '../../../visitors/utils';
import {VisitorForm} from '../../../visitors/models/visitor-form.model';

@Component({
  selector: 'app-sign-up',
  template: `
    <app-visitor-edit-presentation
      [userForm]="signUpForm"
      (create)="onSubmit($event)"
      [isUpdate]="false"
    ></app-visitor-edit-presentation>
  `
})
export class SignUpComponent {
  signUpForm = createFormVisitor(null);

  constructor(private store: Store<AppState>) {}

  onSubmit(visitorFormData: VisitorForm) {
    this.store.dispatch(new SignUpStart(visitorFormData));
  }
}
