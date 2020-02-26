import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoading = false;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;

    this.isLoading = true;

    this.authService.login(name, password)
      .subscribe(resData => {
          this.isLoading = false;
          this.router.navigate(['/']);
        },
        errorMessage => {
          console.log(errorMessage);
        });
  }

}
