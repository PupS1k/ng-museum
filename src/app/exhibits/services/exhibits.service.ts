import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Exhibit} from '../../core/models/exhibit.model';
import {Tour} from '../../core/models/tour.model';
import {of} from 'rxjs';

@Injectable()
export class ExhibitsService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }

  exhibit: Exhibit =
    {
      exhibitId: 1,
      title: 'as',
      dated: 123,
      material: 'as',
      archiveNum: 'as',
      description: 'as',
      imageUrl: 'as',
      tourEntitySet: [{
        tourId: 1,
        theme: 'as',
        typeOfExhibits: 'as',
        duration: 213,
        cost: 213,
        imageUrl: 'as'
      }]
    };

  fetchExhibit(id) {
    return of(this.exhibit);
    // return this.http.get<Exhibit[]>(`/exhibit/exhibits/${id}`);
  }

  updateExhibit(exhibitId, title, dated, material, archiveNum, description, imageUrl, tourEntitySet) {
    return this.http.put(
      `/exhibit/exhibits/update/${exhibitId}`,
      {
        exhibitId, title, dated, material, archiveNum, description, imageUrl, tourEntitySet
      });
  }
}
