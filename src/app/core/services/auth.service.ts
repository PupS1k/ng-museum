import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Logout} from '../../auth/store/auth.actions';

@Injectable()
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(
    private store: Store<AppState>
  ) {}

  checkTokenExp(userData) {
    if (!userData.tokenExpirationDate || new Date() > userData.tokenExpirationDate) {
      return null;
    }
    return userData.token;
  }

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

}
