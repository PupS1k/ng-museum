import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {Logout} from '../../../auth/store/auth.actions';
import {selectProfileMode} from '../../../profile/store/profile.selectors';
import {selectIsAdmin, selectIsAuthenticated, selectIsGuide, selectIsVisitor, selectUsername} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-navbar',
  template: `
    <app-navbar-presentation
      [isGuide]="isGuide$ | async"
      [isAdmin]="isAdmin$ | async"
      [isVisitor]="isVisitor$ | async"
      [isAuthenticated]="isAuthenticated$ | async"
      [username]="username$ | async"
      [profileMode]="profileMode$ | async"
      (logout)="onLogout()"
    ></app-navbar-presentation>
  `
})
export class NavbarSmartComponent {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  username$ = this.store.select(selectUsername);
  profileMode$ = this.store.select(selectProfileMode);

  isAdmin$ = this.store.select(selectIsAdmin);
  isGuide$ = this.store.select(selectIsGuide);
  isVisitor$ = this.store.select(selectIsVisitor);

  constructor(private store: Store<AppState>) {}

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
