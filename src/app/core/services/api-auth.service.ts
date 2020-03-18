import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Visitor} from '../../visitors/models/visitor.model';
import {VisitorForm} from '../../visitors/models/visitor-form.model';

export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export interface Role {
  authority: string;
}

@Injectable()
export class ApiAuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    body = body.set('grant_type', 'password');

    return this.http.post<LoginResponseData>(
      'oauth/token',
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa('Client' + ':' + 'Secret'),
        })
      });
  }

  signUp(body: VisitorForm) {
    return this.http.post<Visitor>(
      '/visitor/visitors/add',
      {
        ...body,
        visitorId: ''
      }
    );
  }

  fetchRoles() {
    return this.http.get<Role[]>('/abo/whoiam');
  }
}
