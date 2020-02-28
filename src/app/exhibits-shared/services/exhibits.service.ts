import {Exhibit} from '../../exhibits/models/exhibit.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ExhibitsService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }

  fetchExhibits() {
    this.isLoading = true;
    return this.http.get<Exhibit[]>('/exhibit/exhibits');
  }

  fetchExhibit(id) {
    return this.http.get<Exhibit[]>(`/exhibit/exhibits/${id}`);
  }

}
