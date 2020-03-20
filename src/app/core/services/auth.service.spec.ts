import {AuthService} from './auth.service';
import {TestBed} from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {LoginResponseData, Role} from './api-auth.service';
import {SET_ROLE, LOGIN_SUCCESS, SIGN_UP_SUCCESS, ChangeUsername, UpdateTokenExpDate} from '../../auth/store/auth.actions';
import {VisitorForm} from '../../visitors/models/visitor-form.model';
import {Store} from '@ngrx/store';
import {
  CLEAR_USER_INFO,
  ClearUserInfo,
  FetchGuideInfoStart,
  FetchVisitorInfoStart,
  SetProfileMode
} from '../../profile/store/profile.actions';
import {UserData} from '../models/user-data.model';

describe('AuthService', () => {
  let service: AuthService;
  const router = jasmine.createSpyObj('Router', ['navigate']);
  const store = jasmine.createSpyObj('Store', ['dispatch']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore(),
        {provide: Store, useValue: store},
        {provide: Router, useValue: router}
      ]
    });

    service = TestBed.inject(AuthService);
  });

  describe('#handleLogin', () => {
    const mockUserData: LoginResponseData = {
      access_token: 'token',
      token_type: '',
      refresh_token: '',
      expires_in: 1,
      scope: '',
      jti: ''
    };
    const username = 'username';

    it('should call #setLogoutTimer', () => {
      spyOn(service, 'setLogoutTimer');
      service.handleLogin(mockUserData, username);
      expect(service.setLogoutTimer).toHaveBeenCalled();
    });

    it('should call #setItemLocalStorage', () => {
      spyOn(service, 'setItemLocalStorage');
      service.handleLogin(mockUserData, username);
      expect(service.setItemLocalStorage).toHaveBeenCalled();
    });

    it('should return action LoginSuccess', () => {
      const action = service.handleLogin(mockUserData, username);
      expect(action.type).toEqual(LOGIN_SUCCESS);
    });

  });

  describe('#setRoles', () => {
    const mockRoles: Role[] = [
      {authority: 'authority'}
    ];
    const mockUserData = {
      username: 'username',
      token: 'token',
      tokenExpirationDate: new Date()
    };

    it('should call #setProfileMode', () => {
      spyOn(service, 'setProfileMode');
      service.setRoles(mockRoles, mockUserData);
      expect(service.setProfileMode).toHaveBeenCalled();
    });

    it('should call #setItemLocalStorage', () => {
      spyOn(service, 'setItemLocalStorage');
      service.setRoles(mockRoles, mockUserData);
      expect(service.setItemLocalStorage).toHaveBeenCalled();
    });

    it('should return action SetRole', () => {
      const action =  service.setRoles(mockRoles, mockUserData);
      expect(action.type).toEqual(SET_ROLE);
    });
  });

  it('#handleSignUp should return  action SignUpSuccess', () => {
    const mockData: VisitorForm = {
      username: '',
      password: '',
      age: 1,
      email: '',
      fio: ''
    };
    const action = service.handleSignUp(mockData);
    expect(action.type).toEqual(SIGN_UP_SUCCESS);
  });

  describe('#logout', () => {
    it('should call #clearLogoutTimer', () => {
      spyOn(service, 'clearLogoutTimer');
      service.logout();
      expect(service.clearLogoutTimer).toHaveBeenCalled();
    });

    it(`should call navigate to '/'`, () => {
      service.logout();
      expect(router.navigate).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    it(`should call create action ClearUserInfo`, () => {
      service.logout();
      expect(store.dispatch).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith(new ClearUserInfo());
    });

    it(`should delete userData from LocalStorage`, () => {
      service.logout();
      expect(JSON.parse(localStorage.getItem('userData'))).toBeNull();
    });
  });


  describe('#setProfileMode', () => {
    const roles = ['', ''];
    const username = '';

    // it(`should't call dispatch`, () => {
    //   service.setProfileMode(['ROLE_ADMIN', ...roles], username);
    //   expect(store.dispatch).not.toHaveBeenCalled();
    // });

    it(`should call create action SetProfileMode with payload 'visitor'
    and create action FetchVisitorInfoStart`, () => {
      service.setProfileMode(roles, username);
      expect(store.dispatch).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith(new SetProfileMode('visitor'));
      expect(store.dispatch).toHaveBeenCalledWith(new FetchVisitorInfoStart(username));
    });

    it(`should call create action SetProfileMode with payload 'guide'
    and create action FetchGuideInfoStart`, () => {
      service.setProfileMode(['ROLE_GUIDE', ...roles], username);
      expect(store.dispatch).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith(new SetProfileMode('guide'));
      expect(store.dispatch).toHaveBeenCalledWith(new FetchGuideInfoStart(username));
    });

  });

  describe('#updateLogoutTimer', () => {
    const mockData: UserData = {
      username: 'username',
      token: 'token',
      tokenExpirationDate: moment().add(5, 'd').toDate(),
      roles: []
    };

    it('should call #checkTokenExp', () => {
      spyOn(service, 'checkTokenExp');
      service.updateLogoutTimer(mockData);
      expect(service.checkTokenExp).toHaveBeenCalled();
    });

    it('should call #setLogoutTimer', () => {
      spyOn(service, 'setLogoutTimer');
      service.updateLogoutTimer(mockData);
      expect(service.setLogoutTimer).toHaveBeenCalled();
    });

    it('should call #setProfileMode', () => {
      spyOn(service, 'setProfileMode');
      service.updateLogoutTimer(mockData);
      expect(service.setProfileMode).toHaveBeenCalled();
    });

    it('should return action AutoLoginFail', () => {
      const action = service.updateLogoutTimer(null);
      expect(action).toEqual({type: '[Auth] Auto Login Fail'});
    });

    it('should return action UpdateTokenExpDate', () => {
      const action = service.updateLogoutTimer(mockData);
      expect(action).toEqual(new UpdateTokenExpDate());
    });

  });

  describe('#updateUserInfo', () => {
    const userData: UserData = {
      username: 'username',
      token: 'token',
      tokenExpirationDate: new Date(),
      roles: []
    };
    localStorage.setItem('userData', JSON.stringify({...userData, username: 'sss'}));

    it('should call #setItemLocalStorage', () => {
      spyOn(service, 'setItemLocalStorage');
      service.updateUserInfo(userData);
      expect(service.setItemLocalStorage).toHaveBeenCalled();
    });

    it('should call create action ChangeUsername', () => {
      spyOn(service, 'setItemLocalStorage');
      service.updateUserInfo(userData);
      expect(store.dispatch).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledWith(new ChangeUsername(userData.username));
    });
  });

  it('#checkTokenExp should return token', () => {
    const userData = {
      token: 'token',
      tokenExpirationDate: moment().add(1, 'milliseconds').toDate()
    };

    expect(service.checkTokenExp(userData)).toEqual(userData.token);
  });

  it('#checkTokenExp should return null', () => {
    const userData = {
      token: 'token',
      tokenExpirationDate: moment().subtract(1, 'milliseconds').toDate()
    };

    expect(service.checkTokenExp(userData)).toBeNull();
  });

  it('#setItemLocalStorage should save data in LocalStorage', () => {
    const mockData = {
      value: 'value'
    };

    service.setItemLocalStorage(mockData);
    expect(JSON.parse(localStorage.getItem('userData'))).toEqual(mockData);

    localStorage.removeItem('userData');
  });

  it('#clearLogoutTimer should assign value NULL for tokenExpirationTimer', () => {
    service.tokenExpirationTimer = setTimeout(() => {
    }, 3000);
    service.clearLogoutTimer();
    expect(service.tokenExpirationTimer).toBeNull();
  });

  it('#setLogoutTimer should assign value expiration duration for tokenExpirationTimer', () => {
    service.setLogoutTimer(100000);
    expect(service.tokenExpirationTimer).not.toBeNull();
  });

});
