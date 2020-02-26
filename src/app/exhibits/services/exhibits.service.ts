import {Exhibit} from '../models/exhibit.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
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
