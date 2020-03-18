import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Exhibit} from '../models/exhibit.model';
import {prepareErrorUrlParams} from '../../layout/utils';


@Injectable()
export class ApiExhibitsService {
  constructor(private http: HttpClient) {
  }

  getExhibits() {
    return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }

  getExhibit(exhibitId: number) {
    return this.http.get<Exhibit>(`/exhibit/exhibits/${exhibitId}`);
  }

  updateExhibit(exhibit: Exhibit, updatingExhibit) {
    return this.http.post<Exhibit>(
      `/exhibit/exhibits/update/${exhibit.exhibitId}`,
      {
        ...updatingExhibit,
        exhibitId: exhibit.exhibitId,
        tourEntitySet: exhibit.tourEntitySet
      }
    );
  }

  deleteExhibitFromTour(tourId, exhibitId) {
    const headers: HttpHeaders = prepareErrorUrlParams();
    return this.http.post(
      `/exhibit/exhibits/removeTour`,
      {
        tourId,
        exhibitId
      },
      {headers}
    );
  }
}
