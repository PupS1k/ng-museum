import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthServices} from '../../shared/services/auth.services';

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
    private authService: AuthServices
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;


    // this.router.navigate(['/exhibits']);
    this.authService.login(name, password)
      .subscribe(resData => {
          console.log(resData);

        },
        errorMessage => {
          console.log(errorMessage);
        });
  }

}
