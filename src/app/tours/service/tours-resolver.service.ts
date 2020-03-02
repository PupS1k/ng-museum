import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Tour} from '../../core/models/tour.model';
import {ToursService} from './tours.service';



@Injectable({ providedIn: 'root' })
export class ToursResolverService implements Resolve<Observable<Tour[]>> {
  constructor(private toursService: ToursService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.toursService.fetchTours();
  }
}
