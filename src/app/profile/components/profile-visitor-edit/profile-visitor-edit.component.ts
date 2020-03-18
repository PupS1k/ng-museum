import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {UpdateVisitorStart} from '../../../visitors/store/visitor.actions';
import {selectUserForm} from '../../store/profile.selectors';
import {AppState} from '../../../app.reducer';
import {VisitorForm} from '../../../visitors/models/visitor-form.model';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile-visitor-edit',
  template: `
    <app-visitor-edit-presentation
      [userForm]="userForm$ | async"
      [isUpdate]="true"
      (update)="onSubmit($event)"
    ></app-visitor-edit-presentation>
  `,
})
export class ProfileVisitorEditComponent {
  userForm$ = this.store.select(selectUserForm);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(profileFormData: VisitorForm) {
    this.store.dispatch(new UpdateVisitorStart(profileFormData));
    this.authService.updateUserInfo(profileFormData);
    this.router.navigate(['/profile']);
  }
}
