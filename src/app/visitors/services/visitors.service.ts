import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Visitor} from '../models/visitor.model';

@Injectable()
export class VisitorsService {

  constructor(private http: HttpClient) {
  }

  fetchVisitors() {
    return this.http.get<Visitor[]>('visitor/visitors');
  }

  fetchVisitor(visitorId) {
    return this.http.get<Visitor>(`visitor/visitors/${visitorId}`);
  }

  deleteVisitor(visitor) {
    return this.http.post<Visitor>(`visitor/visitors/delete/${visitor.visitorId}`, visitor);
  }

  updateVisitor(visitorId, username, password, fio, email, age) {
    return this.http.post(
      `visitor/visitors/update/${visitorId}`,
      {visitorId, username, password, fio, email, age}
      );
  }

  createVisitor(username, password, fio, email, age) {
    return this.http.post(
      `visitor/visitors/add`,
      {visitorId: '', username, password, fio, email, age}
    );
  }

}
