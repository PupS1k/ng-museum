import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../utils/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    password: this.password,
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      confirmPassword(this.password.value)
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
