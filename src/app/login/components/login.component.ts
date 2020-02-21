import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit() {
    const login = this.loginForm.value.login;
    const password = this.loginForm.value.password;

    this.router.navigate(['/exhibits']);
    console.log(login, password);
  }

}
