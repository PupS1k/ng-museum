import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ExhibitsService} from './exhibits.service';
import {Exhibit} from '../../exhibits/models/exhibit.model';


@Injectable({ providedIn: 'root' })
export class ExhibitsResolverService implements Resolve<Observable<Exhibit[]>> {
  constructor(private exhibitsService: ExhibitsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    this.exhibitsService.isLoading = true;
    return this.exhibitsService.fetchExhibits();
  }
}
