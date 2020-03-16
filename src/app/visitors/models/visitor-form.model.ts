import {SubUser} from '../../auth/models/sub-user.model';

export interface VisitorForm extends SubUser {
  email: string;
}
