import {SubUser} from '../../auth/models/sub-user.model';

export interface Guide extends SubUser {
  guideId: number;
  experience: number;
  languages: string;
}
