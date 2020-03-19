import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tour} from '../models/tour.model';
import {prepareErrorUrlParams} from '../../layout/utils';
import {TourForm} from '../models/tour-form.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';

export interface ProfileReqBody {
visitorId: Visitor['visitorId'];
tourId: Tour['tourId'];
}

@Injectable()
export class ApiToursService {
  constructor(private http: HttpClient) {}

  getTours() {
    return this.http.get<Tour[]>('/tour/tours');
  }

  getTour(tourId: Tour['tourId']) {
    return this.http.get<Tour>(`/tour/tours/${tourId}`);
  }

  deleteExhibitFromTour(body: {exhibitId: Exhibit['exhibitId'], tourId: Tour['tourId']}) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `/exhibit/exhibits/removeTour`,
      body,
      {headers}
    );
  }

  deleteGuideFromTour(body: {guideId: Guide['guideId'], tourId: Tour['tourId']}) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `/guide/guides/removeTour`,
      body,
      {headers}
    );
  }

  deleteVisitorFromTour(body: {visitorId: Visitor['visitorId'], tourId: Tour['tourId']}) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `/visitor/visitors/removeTour`,
      body,
      {headers}
    );
  }

  updateTour(updatedTour: TourForm, tourId: Tour['tourId']) {
    return this.http.post<Tour>(
      `/tour/tours/update/${tourId}`,
      {...updatedTour, tourId}
    );
  }

  getExhibitsTour(tourId: Tour['tourId']) {
    return this.http.get<Exhibit[]>(
      `tour/exhibits/${tourId}`
    );
  }

  getGuideTour(tourId: Tour['tourId']) {
    return this.http.get<Guide>(`tour/tours/guide/${tourId}`);
  }

  getVisitorsTour(tourId: Tour['tourId']) {
    return  this.http.get<Visitor[]>(`tour/tours/visitors/${tourId}`);
  }

  checkFavouriteTour(body: ProfileReqBody) {
    return this.http.post<boolean>(
      `visitor/toursCheck`,
      body
    );
  }

  deleteFavouriteTour(body: ProfileReqBody) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `visitor/visitors/removeTour`,
      body,
      {headers}
    );
  }

  addFavouriteTour(body: ProfileReqBody) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `visitor/visitors/addTour`,
      body,
      {headers}
    );
  }
}
