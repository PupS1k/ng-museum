import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectExhibitTours, selectIsExhibit} from '../../store/exhibits.selectors';
import {DeleteExhibitFromTourStart} from '../../store/exhibit.actions';

@Component({
  selector: 'app-exhibit-edit',
  template: `
    <app-exhibit-edit-presentation
      [isEdit]="isEdit$ | async"
      [tours]="tours$ | async"
      (deleteExhibit)="deleteFromTour($event)"
    ></app-exhibit-edit-presentation>
  `
})
export class ExhibitEditComponent {
  tours$ = this.store.select(selectExhibitTours);
  isEdit$ = this.store.select(selectIsExhibit);

  constructor(private store: Store<AppState>) {}

  deleteFromTour(tourId: number) {
    this.store.dispatch(new DeleteExhibitFromTourStart(tourId));
  }
}
