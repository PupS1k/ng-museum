import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Visitor} from '../../visitors/models/visitor.model';
import {UserService} from '../../core/services/user.service';


@Injectable()
export class VisitorDataResolver implements Resolve<Observable<Visitor>> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const username = route.params.username;
    return this.userService.getVisitorByUsername(username);
  }
}
