import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectVisitors} from '../../store/visitor.selectors';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.scss']
})
export class VisitorsListComponent {
  visitors$ = this.store.select(selectVisitors);

  constructor(private store: Store<AppState>) {}

}
