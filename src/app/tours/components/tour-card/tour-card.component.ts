import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {Tour} from '../../models/tour.model';
import {AppState} from '../../../app.reducer';
import {DeleteExhibitFromTourStart} from '../../../exhibits/store/exhibit.actions';

@Component({
  selector: 'app-tour-card',
  template: `
    <app-tour-card-presentation
      [tour]="tour"
      (deleteExhibitFormTour)="deleteFromTour($event)"
    ></app-tour-card-presentation>
  `
})
export class TourCardComponent {
  @Input() tour: Tour;

  constructor(private store: Store<AppState>) {}

  deleteFromTour(tourId: number) {
    this.store.dispatch(new DeleteExhibitFromTourStart(tourId));
  }
}
