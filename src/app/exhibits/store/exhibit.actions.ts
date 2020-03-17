import {Action} from '@ngrx/store';
import {Exhibit} from '../models/exhibit.model';
import {ExhibitForm} from '../models/exhibit-form.model';

export const FETCH_EXHIBITS_SUCCESS = '[Exhibit] Fetch Exhibits Success';
export const FETCH_EXHIBITS_START = '[Exhibit] Fetch Exhibits Start';
export const FETCH_EXHIBIT_START = '[Exhibit] Fetch Exhibit Start';
export const FETCH_EXHIBIT_SUCCESS = '[Exhibit] Fetch Exhibit Success';
export const UPDATE_EXHIBIT_START = '[Exhibit] Update Exhibit Start';
export const DELETE_EXHIBIT_FROM_TOUR_START = '[Exhibit] Delete Exhibit From Tour Start';
export const UPDATE_EXHIBIT_SUCCESS = '[Exhibit] Update Exhibit Success';
export const DELETE_EXHIBIT_FROM_TOUR_SUCCESS = '[Exhibit] Delete Exhibit From Tour Success';

export class FetchExhibitsSuccess implements Action {
  readonly type = FETCH_EXHIBITS_SUCCESS;
  constructor(public payload: Exhibit[]) {}
}

export class FetchExhibitsStart implements Action {
  readonly type = FETCH_EXHIBITS_START;
}

export class DeleteExhibitFromTourStart implements Action {
  readonly type = DELETE_EXHIBIT_FROM_TOUR_START;
  constructor(public payload: number) {}
}

export class DeleteExhibitFromTourSuccess implements Action {
  readonly type = DELETE_EXHIBIT_FROM_TOUR_SUCCESS;
  constructor(public payload: number) {}
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
  constructor(public payload: ExhibitForm) {}
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
  | FetchExhibitStart
  | DeleteExhibitFromTourSuccess;
