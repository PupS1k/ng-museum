import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import {LoginStart} from '../../store/auth.actions';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-login',
  template: `
    <app-login-presentation
      [loginForm]="loginForm"
      (submitLoginForm)="onSubmit()"
    ></app-login-presentation>
  `
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;

    this.store.dispatch(new LoginStart({username: name, password}));
  }
}
