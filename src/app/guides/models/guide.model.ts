import {SubUser} from '../../core/models/sub-user.model';

export interface Guide extends SubUser {
  guideId: number;
  experience: number;
  languages: string;
}
