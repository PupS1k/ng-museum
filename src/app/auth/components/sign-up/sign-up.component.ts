import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../../validators';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
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

  constructor(private authServices: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;

    const name = this.signUpForm.value.name;
    const password = this.signUpForm.value.password;
    const age = this.signUpForm.value.age;
    const email = this.signUpForm.value.email;

    this.authServices.signUp(name, password, age, email)
      .subscribe(() => {
          this.isLoading = false;
        },
        errorMessage => {
          console.log(errorMessage);
        });
  }

}
