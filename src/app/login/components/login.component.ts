import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sub: Subscription;
  error: string;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;


    // this.router.navigate(['/exhibits']);
    this.loginService.login(name, password)
      .subscribe(resData => {
          console.log(resData);

        },
        errorMessage => {
          console.log(errorMessage);
        });
  }

}
