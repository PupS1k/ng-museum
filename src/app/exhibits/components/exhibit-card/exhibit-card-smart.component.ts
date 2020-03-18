import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectIsTour} from '../../../tours/store/tour.selectors';
import {DeleteExhibitTourStart} from '../../../tours/store/tour.actions';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-card',
  template: `
    <app-exhibit-card-presentation
      [exhibit]="exhibit"
      [isGuide]="isGuide$ | async"
      [isTour]="isTour$ | async"
      (deleteExhibit)="deleteFromTour($event)"
    ></app-exhibit-card-presentation>
  `
})
export class ExhibitCardSmartComponent {
  @Input() exhibit: Exhibit;
  isGuide$ = this.store.select(selectIsGuide);
  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) {}

  deleteFromTour(exhibitId: number) {
    this.store.dispatch(new DeleteExhibitTourStart(exhibitId));
  }
}
