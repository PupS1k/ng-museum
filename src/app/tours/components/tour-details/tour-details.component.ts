import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectExhibitsOfTour, selectIsFavouriteTour, selectSelectedTour, selectSelectedTourId} from '../../store/tour.selectors';
import {selectUserVisitorId} from '../../../profile/store/profile.selectors';
import {AddFavouriteTourStart, DeleteFavouriteTourStart} from '../../store/tour.actions';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  visitorId: number;
  tourId: number;
  tour$ = this.store.select(selectSelectedTour);
  exhibits$ = this.store.select(selectExhibitsOfTour);
  isFavouriteTour$ = this.store.select(selectIsFavouriteTour);
  isGuide$ = this.store.select(state => state.auth.isGuide);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(state => state)
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.visitorId = selectUserVisitorId(state);
        this.tourId = selectSelectedTourId(state);
      });
  }

  onDeleteTourFromFavourites() {
    this.store.dispatch(new DeleteFavouriteTourStart({tourId: this.tourId, visitorId: this.visitorId}));
  }

  onAddTourIntoFavourites() {
    this.store.dispatch(new AddFavouriteTourStart({tourId: this.tourId, visitorId: this.visitorId}));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
