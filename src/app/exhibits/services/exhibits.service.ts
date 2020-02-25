import {Exhibit} from '../models/exhibit.model';
import {Tour} from '../models/tour.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class ExhibitsService {

  private exhibits$: Observable<Exhibit[]>;

  constructor(private http: HttpClient) {
  }

  fetchExhibits() {
    this.exhibits$ = this.http.get<Exhibit[]>('/exhibit/exhibits');
  }

  getExhibits() {
    return this.exhibits$;
  }

}
