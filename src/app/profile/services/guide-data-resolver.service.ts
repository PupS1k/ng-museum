import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {UserService} from '../../core/services/user.service';
import {Guide} from '../../guides/models/guide.model';


@Injectable()
export class GuideDataResolver implements Resolve<Observable<Guide>> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const username = route.params.username;
    return this.userService.getGuideByUsername(username);
  }
}
