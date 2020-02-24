import {Exhibit} from '../models/exhibit.model';
import {Tour} from '../models/tour.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class ExhibitsService {

  constructor(private http: HttpClient) {
  }

  getExhibits() {
    return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }

}
