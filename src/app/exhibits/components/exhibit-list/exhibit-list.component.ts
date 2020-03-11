import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {Exhibit} from '../../models/exhibit.model';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.scss']
})
export class ExhibitListComponent implements OnInit {
  exhibits$: Observable<Exhibit[]>;
  isGuide$: Observable<boolean>;
  isLoading = false;

  @Input() showMode: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.exhibits$ = this.store.select(state => state.exhibits)
      .pipe(map(exhibitState => {
      // this.isLoading = exhibitState.loading;
      return exhibitState.exhibits;
    }));

    this.isGuide$ = this.store.select(state => state.auth).pipe(map(authState => authState.isGuide));
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }
}
