import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../../utils/validators';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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

  isLoading = false;
  error = '';

  constructor(
    private authServices: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;

    const username = this.signUpForm.value.name;
    const password = this.signUpForm.value.password;
    const age = this.signUpForm.value.age;
    const fio = this.signUpForm.value.fio;
    const email = this.signUpForm.value.email;

    this.authServices.signUp(username, password, age, fio, email)
      .subscribe(() => {
        this.authServices.login(username, password).subscribe(() => {
          this.router.navigate(['/']);
          this.isLoading = false;
        },
          errorMessage => {
            this.isLoading = false;
            this.error = errorMessage;
          });
        },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        });
  }

  onCloseAlert() {
    this.error = '';
  }

}
