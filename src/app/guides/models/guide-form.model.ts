import {SubUser} from '../../core/models/sub-user.model';

export interface GuideForm extends SubUser {
  guideId?: number;
  experience: number;
  languages: string;
}
