import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {ChangeUsername, FetchRole, LoginSuccess, Logout, SignUpSuccess, UpdateTokenExpDate} from '../../auth/store/auth.actions';
import {UserData} from '../models/user-data.model';
import {LoginResponseData, Role} from './api-auth.service';
import {ClearUserInfo, FetchGuideInfoStart, FetchVisitorInfoStart, SetProfileMode} from '../../profile/store/profile.actions';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  handleLogin(responseData: LoginResponseData, username: string) {
    this.setLogoutTimer(Number(responseData.expires_in * 1000));
    const expirationDate = new Date(new Date().getTime() + Number(responseData.expires_in) * 1000);

    this.setItemLocalStorage({
      username,
      token: responseData.access_token,
      tokenExpirationDate: expirationDate
    });

    return new LoginSuccess({username, token: responseData.access_token, tokenExpirationDate: expirationDate});
  }

  setItemLocalStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  handleSignUp(signUpFormData) {
    return new SignUpSuccess(signUpFormData);
  }

  setRoles(responseData: Role[], {username, token, tokenExpirationDate}) {
    const roles = responseData.map((role: Role) => role.authority);

    this.setProfileMode(roles, username);

    this.setItemLocalStorage({username, token, tokenExpirationDate, roles});

    return new FetchRole(roles);
  }

  updateLogoutTimer(authState) {
    if (!authState) {
      return {type: '[Auth] Auto Login Fail'};
    }

    const updatedUserData: UserData = {...authState, tokenExpirationDate: new Date(authState.tokenExpirationDate)};

    if (!!this.checkTokenExp(updatedUserData)) {
      const expirationDuration = new Date(updatedUserData.tokenExpirationDate).getTime() - new Date().getTime();
      this.setLogoutTimer(expirationDuration);

      this.setProfileMode(updatedUserData.roles, updatedUserData.username);

      return new UpdateTokenExpDate();
    }

    return {type: '[Auth] Auto Login Fail'};
  }

  logout() {
    this.clearLogoutTimer();
    this.router.navigate(['/']);
    this.store.dispatch(new ClearUserInfo());
    localStorage.removeItem('userData');
  }

  setProfileMode(roles, username) {
    if (!roles.includes('ROLE_ADMIN')) {
      const profileMode = roles.includes('ROLE_GUIDE') ? 'guide' : 'visitor';
      this.store.dispatch(new SetProfileMode(profileMode));

      if (profileMode === 'guide') {
        this.store.dispatch(new FetchGuideInfoStart(username));
      } else {
        this.store.dispatch(new FetchVisitorInfoStart(username));
      }
    }
  }

  updateUserInfo(userInfo) {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));
    if (userData.username !== userInfo.username) {
      localStorage.setItem('userData', JSON.stringify({...userData, username: userInfo.username}));
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
