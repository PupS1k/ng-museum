import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  username = '';

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (user) {
        this.username = user.name;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.username = '';
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
