import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {SignUpStart} from '../../store/auth.actions';
import {createFormVisitor} from '../../../visitors/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm = createFormVisitor(null);

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    const username = this.signUpForm.value.name;
    const password = this.signUpForm.value.password;
    const age = this.signUpForm.value.age;
    const fio = this.signUpForm.value.fio;
    const email = this.signUpForm.value.email;

    this.store.dispatch(new SignUpStart({username, password, age, fio, email}));
  }
}
