import { Component } from '@angular/core';
import {selectTourForm} from '../../store/tour.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {UpdateTourStart} from '../../store/tour.actions';
import {TourForm} from '../../models/tour-form.model';

@Component({
  selector: 'app-tour-form',
  template: `
  <app-tour-form-presentation
    [tourForm]="tourForm$ | async"
    (edit)="onSubmit($event)"
  ></app-tour-form-presentation>
  `
})
export class TourFormComponent {
  tourForm$ = this.store.select(selectTourForm);

  constructor(private store: Store<AppState>) {}

  onSubmit(tourFormData: TourForm) {
    this.store.dispatch(new UpdateTourStart(tourFormData));
  }
}
