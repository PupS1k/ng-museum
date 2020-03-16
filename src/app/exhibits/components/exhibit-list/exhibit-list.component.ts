import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectExhibits} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-list',
  template: `
    <app-exhibit-list-presentation
      [exhibits]="exhibits$ | async"
      [showMode]="showMode"
      [isGuide]="isGuide$ | async"
      (moveExhibits)="onNavigateExhibits()"
    ></app-exhibit-list-presentation>

  `
})
export class ExhibitListComponent {
  exhibits$ = this.store.select(selectExhibits);
  isGuide$ = this.store.select(selectIsGuide);

  @Input() showMode: string;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }
}
