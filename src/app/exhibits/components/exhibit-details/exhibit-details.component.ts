import {Component} from '@angular/core';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {selectIsGuide, selectIsVisitor} from '../../../auth/store/auth.selectors';
import {selectExhibit} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.scss']
})
export class ExhibitDetailsComponent {
  exhibit$ = this.store.select(selectExhibit);
  isGuide$ = this.store.select(selectIsGuide);
  isVisitor$ = this.store.select(selectIsVisitor);

  constructor(private store: Store<AppState>) {}
}
