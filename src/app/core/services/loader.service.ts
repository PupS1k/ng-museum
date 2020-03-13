import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {HideSpinner, ShowSpinner} from '../../layout/store/layout.actions';

@Injectable()
export class LoaderService {
  constructor(private store: Store<AppState>) {
  }

  isShow = false;

  showSpinner() {
    this.store.dispatch(new ShowSpinner());
    this.isShow = true;
  }

  hideSpinner() {
    this.store.dispatch(new HideSpinner());
    this.isShow = false;
  }
}
