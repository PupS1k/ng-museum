import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {UpdateGuideStart} from '../../../guides/store/guide.actions';
import {selectUserForm} from '../../store/profile.selectors';
import {AppState} from '../../../app.reducer';
import {GuideForm} from '../../../guides/models/guide-form.model';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile-guide-edit',
  template: `
    <app-guide-edit-presentation
      [guideForm]="userForm$ | async"
      [isUpdate]="true"
      (update)="onSubmit($event)"
    ></app-guide-edit-presentation>
  `,
})
export class ProfileGuideEditComponent {
  userForm$ = this.store.select(selectUserForm);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(profileFormData: GuideForm) {
    this.store.dispatch(new UpdateGuideStart(profileFormData));
    this.authService.updateUserInfo(profileFormData);
    this.router.navigate(['/profile']);
  }
}
