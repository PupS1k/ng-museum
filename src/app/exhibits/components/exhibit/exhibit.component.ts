import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {ClearSelectedExhibit} from '../../store/exhibit.actions';

@Component({
  selector: 'app-exhibit',
  template: `<router-outlet></router-outlet>`
})
export class ExhibitComponent implements OnDestroy {
  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedExhibit());
  }
}
