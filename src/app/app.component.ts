import {Component, OnInit} from '@angular/core';
import {AppState} from './app.reducer';
import {Store} from '@ngrx/store';
import {AutoLogin} from './auth/store/auth.actions';
import {selectIsLoading, selectMessage} from './layout/store/layout.selectors';
import {HideMessage} from './layout/store/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message$ = this.store.select(selectMessage);
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new AutoLogin());
  }

  onCloseAlert() {
    this.store.dispatch(new HideMessage());
  }
}
