import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Guide} from '../models/guide.model';
import {GuidesService} from './guides.service';



@Injectable()
export class GuidesResolverService implements Resolve<Observable<Guide[]>> {
  constructor(private guidesServices: GuidesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.guidesServices.fetchGuides();
  }

}
