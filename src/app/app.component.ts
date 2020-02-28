import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/services/auth.service';
import {ExhibitsService} from './exhibits-shared/services/exhibits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}



  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
