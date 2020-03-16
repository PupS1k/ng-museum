import {Action} from '@ngrx/store';
import {Visitor} from '../../visitors/models/visitor.model';
import {Guide} from '../../guides/models/guide.model';
import {GuideForm} from '../../guides/models/guide-form.model';


export const SET_PROFILE_MODE = '[Profile] Set Profile Mode';
export const CLEAR_USER_INFO = '[Profile] Clear User Info';
export const FETCH_VISITOR_INFO_START = '[Profile] Fetch Visitor Info Start';
export const FETCH_VISITOR_INFO_SUCCESS = '[Profile] Fetch Visitor Info Success';
export const FETCH_GUIDE_INFO_START = '[Profile] Fetch Guide Info Start';
export const FETCH_GUIDE_INFO_SUCCESS = '[Profile] Fetch Guide Info Success';

export class SetProfileMode implements Action {
  readonly type = SET_PROFILE_MODE;
  constructor(public payload: string) {}
}

export class ClearUserInfo implements Action {
  readonly type = CLEAR_USER_INFO;
}

export class FetchVisitorInfoStart implements Action {
  readonly type = FETCH_VISITOR_INFO_START;
  constructor(public payload?: string) {}
}

export class FetchVisitorInfoSuccess implements Action {
  readonly type = FETCH_VISITOR_INFO_SUCCESS;
  constructor(public payload: Visitor) {}
}

export class FetchGuideInfoStart implements Action {
  readonly type = FETCH_GUIDE_INFO_START;
  constructor(public payload?: string) {}
}

export class FetchGuideInfoSuccess implements Action {
  readonly type = FETCH_GUIDE_INFO_SUCCESS;
  constructor(public payload: Guide) {}
}



export type ProfileActions =
  | ClearUserInfo
  | FetchVisitorInfoSuccess
  | FetchGuideInfoSuccess
  | SetProfileMode;
