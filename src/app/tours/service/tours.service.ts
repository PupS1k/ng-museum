import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';

@Injectable()
export class ToursService {
  constructor(private http: HttpClient) {}

  fetchTours() {
    return this.http.get<Tour[]>('tour/tours');
  }

  fetchTour(tourId) {
    return this.http.get<Tour>(`tour/tours/${tourId}`);
  }

  fetchTourExhibits(tourId) {
    return this.http.get<Exhibit[]>(`tour/exhibits/${tourId}`);
  }

  checkFavouriteTour(tourId, visitorId) {
    return this.http.post<boolean>(`visitor/toursCheck`, {tourId, visitorId});
  }

  deleteFavouriteTour(tourId, visitorId) {
    return this.http.post(`visitor/visitors/removeTour`, {tourId, visitorId});
  }

  addFavouriteTour(tourId, visitorId) {
    return this.http.post(`visitor/visitors/addTour`, {tourId, visitorId});
  }

  updateTour(tourId, theme, duration, typeOfExhibits, cost, imageUrl) {
    return this.http.put(`tour/tours/${tourId}/update`,
      {
        tourId, theme, duration, typeOfExhibits, cost, imageUrl
      });
  }

}
