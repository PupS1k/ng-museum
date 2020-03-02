import {Exhibit} from '../models/exhibit.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Tour} from '../../tours/models/tour.model';
import {of} from 'rxjs';

@Injectable()
export class ExhibitsSharedService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }


  exhibits: Exhibit[] = [
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
    }
  ];

  fetchExhibits() {
    this.isLoading = true;
    return of(this.exhibits);
    // return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }
}
