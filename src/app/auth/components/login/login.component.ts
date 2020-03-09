import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginStart} from '../../store/auth.actions';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  error: string;
  isLoading = false;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.select('auth')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authState) => {
        this.isLoading = authState.isLoading;
      });
  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;

    this.store.dispatch(new LoginStart({username: name, password}));
  }

  onCloseAlert() {
    this.error = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
