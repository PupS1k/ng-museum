import {Exhibit} from '../models/exhibit.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ExhibitsSharedService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }

  fetchExhibits() {
    this.isLoading = true;
    return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }
}
