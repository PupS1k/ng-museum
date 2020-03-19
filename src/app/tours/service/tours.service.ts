import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {
  CheckFavouriteTourStart,
  FetchDataTourSuccess,
  FetchExhibitsTourStart,
  FetchGuideTourStart,
  FetchVisitorsTourStart
} from '../store/tour.actions';
import {Tour} from '../models/tour.model';
import {Visitor} from '../../visitors/models/visitor.model';


@Injectable()
export class ToursService {
  constructor(private store: Store<AppState>) {}

  getAdditionalDataTour(tourId: Tour['tourId'], isGuide: boolean, isAdmin: boolean, userVisitorId: Visitor['visitorId']) {
    this.store.dispatch(new FetchExhibitsTourStart(tourId));

    if (isGuide) {
      this.store.dispatch(new FetchGuideTourStart(tourId));
    } else {
      this.store.dispatch(new CheckFavouriteTourStart({
        tourId,
        visitorId: userVisitorId
      }));
    }

    if (isAdmin) {
      this.store.dispatch(new FetchVisitorsTourStart(tourId));
    }

    return new FetchDataTourSuccess();
  }
}
