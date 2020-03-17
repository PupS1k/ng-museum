import {Component, Input} from '@angular/core';
import {Tour} from '../../models/tour.model';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {selectIsGuide} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-tour-item',
  template: `
    <app-tour-item-presentation
      [isGuide]="isGuide$ | async"
      [tour]="tour"
    ></app-tour-item-presentation>
  `
})
export class TourItemComponent {
  @Input() tour: Tour;
  isGuide$ = this.store.select(selectIsGuide);

  constructor(private store: Store<AppState>) {}
}
