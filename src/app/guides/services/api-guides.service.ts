import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Guide} from '../models/guide.model';
import {selectGuideId} from '../store/guide.selectors';
import {selectUserId} from '../../profile/store/profile.selectors';


@Injectable()
export class ApiGuidesService {
  constructor(private http: HttpClient) {}

  getGuides() {
    return this.http.get<Guide[]>('/guide/guides');
  }

  getGuide(guideId: number) {
    return this.http.get<Guide>(`/guide/guides/${guideId}`);
  }

  updateGuide(updatingGuide, guideId) {
    return this.http.post<Guide>(
      `/guide/guides/update/${guideId}`,
      {
        ...updatingGuide,
        guideId
      }
    );
  }

  deleteGuide(guideId) {
    return this.http.get<Guide>(`/guide/guides/delete/${guideId}`)
  }

  createGuide(guide) {
    return this.http.post<Guide>('/guide/guides/add', {...guide, guideId: ''});
  }
}
