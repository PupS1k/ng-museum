import {Tour} from '../../tours/models/tour.model';

export interface Visitor {
  visitorId: number;
  username: string;
  password: string;
  fio: string;
  age: number;
  email: string;
  tourEntitySet?: Tour[];
}
