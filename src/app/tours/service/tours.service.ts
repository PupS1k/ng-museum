import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

import {Tour} from '../../core/models/tour.model';

@Injectable()
export class ToursService {
  constructor(private http: HttpClient) {}

  tours: Tour[] = [{
    tourId: 1,
    theme: 'as',
    typeOfExhibits: 'as',
    duration: 213,
    cost: 213,
    imageUrl: 'as'
  }];

  fetchTours() {
    return of(this.tours);
    // return this.http.get<Tour[]>('tour/tours');
  }

  fetchTour(tourId) {
    return of({
      tourId: 1,
      theme: 'as',
      typeOfExhibits: 'as',
      duration: 213,
      cost: 213,
      imageUrl: 'as'
    });
    // return this.http.get<Tour>(`tour/tours/${tourId}`);
  }

}
