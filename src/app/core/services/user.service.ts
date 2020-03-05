import {Injectable} from '@angular/core';
import {Visitor} from '../../visitors/models/visitor.model';
import {Guide} from '../../guides/models/guide.model';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getVisitorByUsername(username) {
    return this.http.post<Visitor>(
      'visitor/visitors/getByUsername',
      JSON.stringify(username),
      {
        headers: {'Content-Type': 'application/json'}
      }
    );
  }

  getGuideByUsername(username) {
    return this.http.post<Guide>(
       'guide/guides/getByUsername',
      JSON.stringify(username),
      {
        headers: {'Content-Type': 'application/json'}
      }
    );
  }
}
