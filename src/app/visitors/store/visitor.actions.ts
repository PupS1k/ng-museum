import {Action} from '@ngrx/store';
import {Visitor} from '../models/visitor.model';


export const FETCH_VISITORS_SUCCESS = '[Guide] Fetch Visitors Success';
export const FETCH_VISITORS_START = '[Guide] Fetch Visitors Start';
export const FETCH_VISITOR_START = '[Guide] Fetch Visitor Start';
export const CLEAR_SELECTED_VISITOR = '[Guide] Clear Selected Visitor';
export const FETCH_VISITOR_SUCCESS = '[Guide] Fetch Visitor Success';
export const UPDATE_VISITOR_START = '[Guide] Update Visitor Start';
export const UPDATE_VISITOR_SUCCESS = '[Guide] Update Visitor Success';
export const UPDATE_VISITOR_FAIL = '[Guide] Update Visitor Fail';
export const DELETE_VISITOR_SUCCESS = '[Guide] Delete Visitor Success';
export const DELETE_VISITOR_START = '[Guide] Delete Visitor Start';
export const CREATE_VISITOR_SUCCESS = '[Guide] Create Visitor Success';
export const CREATE_VISITOR_START = '[Guide] Create Visitor Start';

export class FetchVisitorsSuccess implements Action {
  readonly type = FETCH_VISITORS_SUCCESS;
  constructor(public payload: Visitor[]) {}
}

export class FetchVisitorsStart implements Action {
  readonly type = FETCH_VISITORS_START;
}

export class ClearSelectedVisitor implements Action {
  readonly type = CLEAR_SELECTED_VISITOR;
}

export class DeleteVisitorSuccess implements Action {
  readonly type = DELETE_VISITOR_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteVisitorStart implements Action {
  readonly type = DELETE_VISITOR_START;
  constructor(public payload: Visitor) {}
}

export class CreateVisitorSuccess implements Action {
  readonly type = CREATE_VISITOR_SUCCESS;
  constructor(public payload: Visitor) {}
}

export class CreateVisitorStart implements Action {
  readonly type = CREATE_VISITOR_START;
  constructor(public payload: Visitor) {}
}

export class FetchVisitorSuccess implements Action {
  readonly type = FETCH_VISITOR_SUCCESS;
  constructor(public payload: Visitor) {}
}

export class FetchVisitorStart implements Action {
  readonly type = FETCH_VISITOR_START;
  constructor(public payload: number) {}
}

export class UpdateVisitorFail implements Action {
  readonly type = UPDATE_VISITOR_FAIL;
  constructor(public payload: string) {}
}

export class UpdateVisitorStart implements Action {
  readonly type = UPDATE_VISITOR_START;
  constructor(public payload: Visitor) {}
}

export class UpdateVisitorSuccess implements Action {
  readonly type = UPDATE_VISITOR_SUCCESS;
  constructor(public payload: Visitor) {}
}

export type VisitorActions =
  | ClearSelectedVisitor
  | CreateVisitorSuccess
  | DeleteVisitorSuccess
  | FetchVisitorsSuccess
  | FetchVisitorSuccess
  | UpdateVisitorFail
  | UpdateVisitorStart
  | UpdateVisitorSuccess
  | FetchVisitorsStart
  | FetchVisitorStart;
