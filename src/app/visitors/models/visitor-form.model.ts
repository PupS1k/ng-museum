import {SubUser} from '../../core/models/sub-user.model';

export interface VisitorForm extends SubUser {
  email: string;
}
