import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../../utils/validators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {SignUpStart} from '../../store/auth.actions';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    fio: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      confirmPassword()
    ]),
  });
  destroy$ = new Subject();
  isLoading = false;
  error = '';

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state.auth)
      .pipe(takeUntil(this.destroy$))
      .subscribe((authState) => {
        this.isLoading = authState.isLoading;
      });
  }

  onSubmit() {
    this.isLoading = true;

    const username = this.signUpForm.value.name;
    const password = this.signUpForm.value.password;
    const age = this.signUpForm.value.age;
    const fio = this.signUpForm.value.fio;
    const email = this.signUpForm.value.email;

    this.store.dispatch(new SignUpStart({username, password, age, fio, email}));
  }

  onCloseAlert() {
    this.error = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
