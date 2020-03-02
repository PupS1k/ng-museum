import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ExhibitsService} from './exhibits.service';
import {Exhibit} from '../models/exhibit.model';


@Injectable({ providedIn: 'root' })
export class ExhibitResolverService implements Resolve<Observable<Exhibit>> {
  constructor(private exhibitsService: ExhibitsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    return this.exhibitsService.fetchExhibit(id);
  }
}
