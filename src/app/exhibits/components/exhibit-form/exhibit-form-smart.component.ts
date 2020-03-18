import {Component} from '@angular/core';

import {ExhibitForm} from '../../models/exhibit-form.model';
import {UpdateExhibitStart} from '../../store/exhibit.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectExhibitForm} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-form',
  template: `
    <app-exhibit-form-presentation
      [exhibitForm]="exhibitForm$ | async"
      (edit)="onSubmit($event)"
    ></app-exhibit-form-presentation>
  `
})
export class ExhibitFormSmartComponent {
  exhibitForm$ = this.store.select(selectExhibitForm);

  constructor(private store: Store<AppState>) {}

  onSubmit(exhibitFormData: ExhibitForm) {
    this.store.dispatch(new UpdateExhibitStart(exhibitFormData));
  }
}
