import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {ChangeUsername, Logout} from '../../auth/store/auth.actions';
import {UserData} from '../../auth/models/user-data.model';

@Injectable()
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(
    private store: Store<AppState>
  ) {}

  updateUserInfo(userInfo) {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));
    if (userData.name !== userInfo.username) {
      localStorage.setItem('userData', JSON.stringify({...userData, name: userInfo.username}));
      this.store.dispatch(new ChangeUsername(userInfo.username));
    }
  }

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
