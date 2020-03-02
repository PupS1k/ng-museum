import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Tour} from '../models/tour.model';
import {ToursService} from './tours.service';



@Injectable({ providedIn: 'root' })
export class TourResolverService implements Resolve<Observable<Tour>> {
  constructor(private toursService: ToursService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const id = +route.params.id;

    return this.toursService.fetchTour(id);
  }
}
