import {Action} from '@ngrx/store';
import {Guide} from '../models/guide.model';


export const FETCH_GUIDES_SUCCESS = '[Guide] Fetch Guides Success';
export const FETCH_GUIDES_START = '[Guide] Fetch Guides Start';
export const FETCH_GUIDE_START = '[Guide] Fetch Guide Start';
export const CLEAR_SELECTED_GUIDE = '[Guide] Clear Selected Guide';
export const FETCH_GUIDE_SUCCESS = '[Guide] Fetch Guide Success';
export const UPDATE_GUIDE_START = '[Guide] Update Guide Start';
export const UPDATE_GUIDE_SUCCESS = '[Guide] Update Guide Success';
export const DELETE_GUIDE_SUCCESS = '[Guide] Delete Guide Success';
export const DELETE_GUIDE_START = '[Guide] Delete Guide Start';
export const CREATE_GUIDE_SUCCESS = '[Guide] Create Guide Success';
export const CREATE_GUIDE_START = '[Guide] Create Guide Start';

export class FetchGuidesSuccess implements Action {
  readonly type = FETCH_GUIDES_SUCCESS;
  constructor(public payload: Guide[]) {}
}

export class FetchGuidesStart implements Action {
  readonly type = FETCH_GUIDES_START;
}

export class ClearSelectedGuide implements Action {
  readonly type = CLEAR_SELECTED_GUIDE;
}

export class DeleteGuideSuccess implements Action {
  readonly type = DELETE_GUIDE_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteGuideStart implements Action {
  readonly type = DELETE_GUIDE_START;
  constructor(public payload: number) {}
}

export class CreateGuideSuccess implements Action {
  readonly type = CREATE_GUIDE_SUCCESS;
  constructor(public payload: Guide) {}
}

export class CreateGuideStart implements Action {
  readonly type = CREATE_GUIDE_START;
  constructor(public payload: Omit<Guide, 'guideId'>) {}
}

export class FetchGuideSuccess implements Action {
  readonly type = FETCH_GUIDE_SUCCESS;
  constructor(public payload: Guide) {}
}

export class FetchGuideStart implements Action {
  readonly type = FETCH_GUIDE_START;
  constructor(public payload: number) {}
}
export class UpdateGuideStart implements Action {
  readonly type = UPDATE_GUIDE_START;
  constructor(public payload: Guide) {}
}

export class UpdateGuideSuccess implements Action {
  readonly type = UPDATE_GUIDE_SUCCESS;
  constructor(public payload: Guide) {}
}

export type GuideActions =
  | ClearSelectedGuide
  | CreateGuideSuccess
  | DeleteGuideSuccess
  | FetchGuidesSuccess
  | FetchGuideSuccess
  | UpdateGuideStart
  | UpdateGuideSuccess
  | FetchGuidesStart
  | FetchGuideStart;
