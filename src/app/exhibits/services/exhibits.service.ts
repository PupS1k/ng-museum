import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Exhibit} from '../models/exhibit.model';

@Injectable()
export class ExhibitsService {

  isLoading = false;

  constructor(private http: HttpClient) {
  }

  fetchExhibit(id) {
    return this.http.get<Exhibit[]>(`/exhibit/exhibits/${id}`);
  }

  updateExhibit(exhibitId, title, dated, material, archiveNum, description, imageUrl, tourEntitySet) {
    return this.http.post(
      `/exhibit/exhibits/update/${exhibitId}`,
      {
        exhibitId, title, dated, material, archiveNum, description, imageUrl, tourEntitySet
      });
  }
}
