import {Action} from '@ngrx/store';
import {Visitor} from '../models/visitor.model';
import {VisitorForm} from '../models/visitor-form.model';


export const FETCH_VISITORS_SUCCESS = '[Visitor] Fetch Visitors Success';
export const FETCH_VISITORS_START = '[Visitor] Fetch Visitors Start';
export const FETCH_VISITOR_START = '[Visitor] Fetch Visitor Start';
export const CLEAR_SELECTED_VISITOR = '[Visitor] Clear Selected Visitor';
export const FETCH_VISITOR_SUCCESS = '[Visitor] Fetch Visitor Success';
export const UPDATE_VISITOR_START = '[Visitor] Update Visitor Start';
export const UPDATE_VISITOR_SUCCESS = '[Visitor] Update Visitor Success';
export const DELETE_VISITOR_SUCCESS = '[Visitor] Delete Visitor Success';
export const DELETE_VISITOR_START = '[Visitor] Delete Visitor Start';
export const CREATE_VISITOR_SUCCESS = '[Visitor] Create Visitor Success';
export const CREATE_VISITOR_START = '[Visitor] Create Visitor Start';

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
  constructor(public payload: Omit<Visitor, 'visitorId'>) {}
}

export class FetchVisitorSuccess implements Action {
  readonly type = FETCH_VISITOR_SUCCESS;
  constructor(public payload: Visitor) {}
}

export class FetchVisitorStart implements Action {
  readonly type = FETCH_VISITOR_START;
  constructor(public payload: number) {}
}

export class UpdateVisitorStart implements Action {
  readonly type = UPDATE_VISITOR_START;
  constructor(public payload: VisitorForm) {}
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
  | UpdateVisitorStart
  | UpdateVisitorSuccess
  | FetchVisitorsStart
  | FetchVisitorStart;
