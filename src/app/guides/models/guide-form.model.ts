import {SubUser} from '../../auth/models/sub-user.model';

export interface GuideForm extends SubUser {
  guideId?: number;
  experience: number;
  languages: string;
}
