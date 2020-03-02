import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ExhibitsSharedService} from './exhibits-shared.service';
import {Exhibit} from '../models/exhibit.model';


@Injectable({ providedIn: 'root' })
export class ExhibitsResolverService implements Resolve<Observable<Exhibit[]>> {
  constructor(private exhibitsSharedService: ExhibitsSharedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    this.exhibitsSharedService.isLoading = true;
    return this.exhibitsSharedService.fetchExhibits();
  }
}
