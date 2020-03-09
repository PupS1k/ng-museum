import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {
  tours: Tour[];
  isGuide$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        this.tours = data.tours;
        // this.isLoading = false;
      });

    this.isGuide$ = this.store.select(state => state.auth.isGuide);
  }
}
