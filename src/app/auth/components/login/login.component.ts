import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;

    this.isLoading = true;

    this.authService.login(name, password)
      .subscribe(() => {
          this.router.navigate(['/']);
          this.isLoading = false;
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
