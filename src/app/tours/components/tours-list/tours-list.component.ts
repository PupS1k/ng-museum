import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectTours} from '../../store/tour.selectors';
import {selectIsGuide} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent {
  tours$ = this.store.select(selectTours);
  isGuide$ = this.store.select(selectIsGuide);

  constructor(private store: Store<AppState>) {}
}
