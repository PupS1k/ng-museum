import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Tour} from '../models/tour.model';

@Injectable({providedIn: 'root'})
export class ToursService {
  constructor(private http: HttpClient) {}

  fetchTours() {
    return this.http.get<Tour[]>('tour/tours');
  }

  fetchTour(tourId) {
    return this.http.get<Tour>(`tour/tours/${tourId}`);
  }

  updateTour(tourId, theme, duration, typeOfExhibits, cost, imageUrl) {
    return this.http.put(`tour/tours/${tourId}/update`,
      {
        tourId, theme, duration, typeOfExhibits, cost, imageUrl
      });
  }

}
