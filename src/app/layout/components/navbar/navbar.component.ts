import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {Logout} from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  isAuthenticated = false;
  username = '';
  profileMode = '';

  isAdmin$: Observable<boolean>;
  isGuide$: Observable<boolean>;
  isVisitor$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select(state => state.auth)
      .pipe(takeUntil(this.destroy$))
      .subscribe(authState => {
        this.isAuthenticated = !!authState.name;

        if (this.isAuthenticated) {
          this.username = authState.name;

          if (authState.isGuide) {
            this.profileMode = 'guide';
          }

          if (authState.isVisitor) {
            this.profileMode = 'visitor';
          }
        }
      });

    this.isAdmin$ = this.store.select(state => state.auth.isAdmin);
    this.isGuide$ = this.store.select(state => state.auth.isGuide);
    this.isVisitor$ = this.store.select(state => state.auth.isVisitor);
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
