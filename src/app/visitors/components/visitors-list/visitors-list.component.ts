import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectVisitors} from '../../store/visitor.selectors';

@Component({
  selector: 'app-visitors-list',
  template: `
    <app-visitors-list-presentation
      [visitors]="visitors$ | async"
    ></app-visitors-list-presentation>
  `
})
export class VisitorsListComponent {
  visitors$ = this.store.select(selectVisitors);

  constructor(private store: Store<AppState>) {}
}
