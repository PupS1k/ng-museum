import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {VisitorsService} from './visitors.service';
import {Visitor} from '../models/visitor.model';


@Injectable({ providedIn: 'root' })
export class VisitorResolverService implements Resolve<Observable<Visitor>> {
  constructor(private visitorsService: VisitorsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    return this.visitorsService.fetchVisitor(id);
  }
}
