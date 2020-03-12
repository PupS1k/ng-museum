import {Action} from '@ngrx/store';
import {Exhibit} from '../models/exhibit.model';

export const FETCH_EXHIBITS_SUCCESS = '[Exhibit] Fetch Exhibits Success';
export const FETCH_EXHIBITS_START = '[Exhibit] Fetch Exhibits Start';
export const FETCH_EXHIBIT_START = '[Exhibit] Fetch Exhibit Start';
export const FETCH_EXHIBIT_SUCCESS = '[Exhibit] Fetch Exhibit Success';
export const UPDATE_EXHIBIT_START = '[Exhibit] Update Exhibit Start';
export const UPDATE_EXHIBIT_SUCCESS = '[Exhibit] Update Exhibit Success';

export class FetchExhibitsSuccess implements Action {
  readonly type = FETCH_EXHIBITS_SUCCESS;
  constructor(public payload: Exhibit[]) {}
}

export class FetchExhibitsStart implements Action {
  readonly type = FETCH_EXHIBITS_START;
}

export class FetchExhibitSuccess implements Action {
  readonly type = FETCH_EXHIBIT_SUCCESS;
  constructor(public payload: Exhibit) {}
}

export class FetchExhibitStart implements Action {
  readonly type = FETCH_EXHIBIT_START;
  constructor(public payload: number) {}
}

export class UpdateExhibitStart implements Action {
  readonly type = UPDATE_EXHIBIT_START;
  constructor(public payload: Exhibit) {}
}

export class UpdateExhibitSuccess implements Action {
  readonly type = UPDATE_EXHIBIT_SUCCESS;
  constructor(public payload: Exhibit) {}
}

export type ExhibitActions =
  | FetchExhibitsSuccess
  | FetchExhibitSuccess
  | UpdateExhibitStart
  | UpdateExhibitSuccess
  | FetchExhibitsStart
  | FetchExhibitStart;
