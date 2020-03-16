import {Component} from '@angular/core';
import {FetchVisitorInfoStart} from '../../store/profile.actions';
import {UpdateVisitorStart} from '../../../visitors/store/visitor.actions';
import {selectUserForm} from '../../store/profile.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {VisitorForm} from '../../../visitors/models/visitor-form.model';

@Component({
  selector: 'app-profile-visitor-edit',
  template: `
    <app-create-user-presentation
      [userForm]="userForm$ | async"
      (submitForm)="onSubmit($event)"
      [isUpdate]="true"
    ></app-create-user-presentation>
  `,
})
export class ProfileVisitorEditComponent {
  userForm$ = this.store.select(selectUserForm);

  constructor(private store: Store<AppState>) {}

  onSubmit(profileFormData: VisitorForm) {
    this.store.dispatch(new UpdateVisitorStart(profileFormData));
    this.store.dispatch(new FetchVisitorInfoStart(profileFormData.username));
  }
}
