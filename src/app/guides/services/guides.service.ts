import {HttpClient} from '@angular/common/http';
import {Guide} from '../models/guide.model';
import {Injectable} from '@angular/core';

@Injectable()
export class GuidesService {
  constructor(private http: HttpClient) {
  }

  fetchGuides() {
    return this.http.get<Guide[]>('/guide/guides');
  }

  fetchGuide(guideId) {
    return this.http.get<Guide>(`/guide/guides/${guideId}`);
  }

  createGuide(username, password, fio, age, experience, languages) {
    return this.http.post(
      `/guide/guides/add`,
      {guideId: '', username, password, fio, age, experience, languages}
    );
  }

  deleteGuide(guideId) {
    return this.http.get(`/guide/guides/delete/${guideId}`);
  }

  updateGuide(guideId, username, password, fio, age, experience, languages) {
    return this.http.post(
      `/guide/guides/update/${guideId}`,
      {guideId, username, password, fio, age, experience, languages}
    );
  }

}
