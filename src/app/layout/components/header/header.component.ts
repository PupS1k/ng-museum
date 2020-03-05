import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Observable, Subject} from 'rxjs';
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
  profileMode = '';

  isAdmin$: Observable<boolean>;
  isGuide$: Observable<boolean>;
  isVisitor$: Observable<boolean>;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.userData$.pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        if (this.isAuthenticated) {
          this.username = user.name;

          if (user.roles.length < 3) {
            this.profileMode = user.roles.length === 2 ? 'guide' : 'visitor';
          }
        }
      });

    this.isAdmin$ = this.authService.isAdmin$;
    this.isGuide$ = this.authService.isGuide$;
    this.isVisitor$ = this.authService.isVisitor$;
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
