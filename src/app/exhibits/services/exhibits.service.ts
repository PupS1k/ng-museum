import {Exhibit} from '../models/exhibit.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ExhibitsService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }

  fetchExhibits() {
    return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }

  fetchExhibit(id) {
    return this.http.get<Exhibit[]>(`/exhibit/exhibits/${id}`);
  }

}
