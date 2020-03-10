import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Guide} from '../../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['./guides-list.component.scss']
})
export class GuidesListComponent implements OnInit {
  guides$: Observable<Guide[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.guides$ = this.store.select(state => state.guides.guides);
  }
}
