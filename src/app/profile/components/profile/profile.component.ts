import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectFavouriteTours, selectUserIsGuide, selectUserIsVisitor} from '../../store/profile.selectors';

@Component({
  selector: 'app-profile',
  template: `
    <app-profile-presentation
      [userIsVisitor]="userIsVisitor$ | async"
      [userIsGuide]="userIsGuide$ | async"
      [tours]="tours$ | async"
    ></app-profile-presentation>
  `
})
export class ProfileComponent {
  userIsVisitor$ = this.store.select(selectUserIsVisitor);
  userIsGuide$ = this.store.select(selectUserIsGuide);
  tours$ = this.store.select(selectFavouriteTours);

  constructor(private store: Store<AppState>) {}
}
