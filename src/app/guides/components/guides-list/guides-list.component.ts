import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectGuides} from '../../store/guide.selectors';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['./guides-list.component.scss']
})
export class GuidesListComponent {
  guides$ = this.store.select(selectGuides);

  constructor(private store: Store<AppState>) {}
}
