import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Visitor} from '../../visitors/models/visitor.model';
import {Guide} from '../../guides/models/guide.model';
import {prepareErrorUrlParams} from '../../layout/utils';


@Injectable()
export class ApiProfileService {
  constructor(private http: HttpClient) {
  }

  getUserVisitorInfo(username: string) {
    return this.http.post<Visitor>(
      'visitor/visitors/getByUsername',
      JSON.stringify(username),
      {headers: {'Content-Type': 'application/json'}}
    );
  }

  getUserGuideInfo(username: string) {
    return this.http.post<Guide>(
      'guide/guides/getByUsername',
      JSON.stringify(username),
      {headers: {'Content-Type': 'application/json'}}
    );
  }

  deleteFavouriteTour(body) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `visitor/visitors/removeTour`,
      body,
      {headers}
    );
  }
}
