import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  isAuthenticated = false;
  username = '';

  isAdmin: boolean;
  isGuide: boolean;
  isVisitor: boolean;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.userData.pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        if (this.isAuthenticated) {
          this.username = user.name;
        }

        this.isAdmin = this.authService.isAdmin;
        this.isGuide = this.authService.isGuide;
        this.isVisitor = this.authService.isVisitor;
      });
  }

  onLogout() {
    this.authService.logout();
    this.username = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
