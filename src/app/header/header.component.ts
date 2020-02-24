import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ExhibitsService} from '../exhibits/services/exhibits.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private exhibitsService: ExhibitsService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  fetchExhibits() {
    // this.exhibitsService.fetchExhibits()
    //   .subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
