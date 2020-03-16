import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectExhibitTours, selectIsExhibit} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-edit',
  template: `
    <app-exhibit-edit-presentation
      [isEdit]="isEdit$ | async"
      [tours]="tours$ | async"
      (deleteExhibit)="deleteFromTour()"
    ></app-exhibit-edit-presentation>
  `
})
export class ExhibitEditComponent {
  tours$ = this.store.select(selectExhibitTours);
  isEdit$ = this.store.select(selectIsExhibit);

  constructor(private store: Store<AppState>) {}

  deleteFromTour() {
    console.log('tut');
    // this.store.dispatch(new DeleteExhibitFromTour())
  }
}
