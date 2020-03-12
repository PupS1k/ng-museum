import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginStart} from '../../store/auth.actions';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;

    this.store.dispatch(new LoginStart({username: name, password}));
  }
}
