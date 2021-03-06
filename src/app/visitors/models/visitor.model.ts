import {Tour} from '../../tours/models/tour.model';
import {SubUser} from '../../core/models/sub-user.model';

export interface Visitor extends SubUser {
  visitorId: number;
  email: string;
  tourEntitySet?: Tour[];
}
