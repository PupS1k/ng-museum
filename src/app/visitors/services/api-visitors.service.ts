import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Visitor} from '../models/visitor.model';
import {VisitorForm} from '../models/visitor-form.model';
import {Tour} from '../../tours/models/tour.model';


@Injectable()
export class ApiVisitorsService {
  constructor(private http: HttpClient) {}

  getVisitors() {
    return  this.http.get<Visitor[]>('/visitor/visitors');
  }

  getVisitor(visitorId: Visitor['visitorId']) {
    return this.http.get<Visitor>(`/visitor/visitors/${visitorId}`);
  }

  updateVisitor(updatingVisitor: VisitorForm, visitorId: Visitor['visitorId'], favouriteToursUser: Tour[]) {
    return this.http.post<Visitor>(
      `/visitor/visitors/update/${visitorId}`,
      {
        ...updatingVisitor,
        visitorId,
        tourEntitySet: favouriteToursUser
      }
    );
  }

  deleteVisitor(visitor: Visitor) {
    return this.http.post(`/visitor/visitors/delete/${visitor.visitorId}`, visitor);
  }

  createVisitor(newVisitor: VisitorForm) {
    return this.http.post<Visitor>('/visitor/visitors/add', {...newVisitor, visitorId: ''})
  }
}
