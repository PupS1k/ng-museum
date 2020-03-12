import {Action} from '@ngrx/store';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';


export const FETCH_TOURS_SUCCESS = '[Tour] Fetch Tours Success';
export const FETCH_TOURS_START = '[Tour] Fetch Tours Start';
export const FETCH_EXHIBITS_TOUR_SUCCESS = '[Tour] Fetch Exhibits Tour Success';
export const CLEAR_SELECTED_TOUR = '[Tour] Clear Selected Tour';
export const FETCH_TOUR_START = '[Tour] Fetch Tour Start';
export const FETCH_TOUR_SUCCESS = '[Tour] Fetch Tour Success';
export const UPDATE_TOUR_START = '[Tour] Update Tour Start';
export const UPDATE_TOUR_SUCCESS = '[Tour] Update Tour Success';
export const UPDATE_TOUR_FAIL = '[Tour] Update Tour Fail';
export const CHECK_FAVOURITE_TOUR_SUCCESS = '[Tour] Check Favourite Tour Success';
export const DELETE_FAVOURITE_TOUR_SUCCESS = '[Tour] Delete Favourite Tour Success';
export const DELETE_FAVOURITE_TOUR_START = '[Tour]  Delete Favourite Tour Start';
export const ADD_FAVOURITE_TOUR_SUCCESS = '[Tour] Add Favourite Tour Success';
export const ADD_FAVOURITE_TOUR_START = '[Tour]  Add Favourite Tour Start';

export class DeleteFavouriteTourSuccess implements Action {
  readonly type = DELETE_FAVOURITE_TOUR_SUCCESS;
}

export class ClearSelectedTour implements Action {
  readonly type = CLEAR_SELECTED_TOUR;
}

export class DeleteFavouriteTourStart implements Action {
  readonly type = DELETE_FAVOURITE_TOUR_START;
}

export class AddFavouriteTourSuccess implements Action {
  readonly type = ADD_FAVOURITE_TOUR_SUCCESS;
}

export class AddFavouriteTourStart implements Action {
  readonly type = ADD_FAVOURITE_TOUR_START;
}

export class CheckFavouriteTourSuccess implements Action {
  readonly type = CHECK_FAVOURITE_TOUR_SUCCESS;
  constructor(public payload: boolean) {}
}

export class FetchExhibitsTourSuccess implements Action {
  readonly type = FETCH_EXHIBITS_TOUR_SUCCESS;
  constructor(public payload: Exhibit[]) {}
}

export class FetchToursSuccess implements Action {
  readonly type = FETCH_TOURS_SUCCESS;
  constructor(public payload: Tour[]) {}
}

export class FetchToursStart implements Action {
  readonly type = FETCH_TOURS_START;
}

export class FetchTourSuccess implements Action {
  readonly type = FETCH_TOUR_SUCCESS;
  constructor(public payload: Tour) {}
}

export class FetchTourStart implements Action {
  readonly type = FETCH_TOUR_START;
  constructor(public payload: number) {}
}

export class UpdateTourFail implements Action {
  readonly type = UPDATE_TOUR_FAIL;
  constructor(public payload: string) {}
}

export class UpdateTourStart implements Action {
  readonly type = UPDATE_TOUR_START;
  constructor(public payload: Omit<Tour, 'tourId'>) {}
}

export class UpdateTourSuccess implements Action {
  readonly type = UPDATE_TOUR_SUCCESS;
  constructor(public payload: Tour) {}
}

export type TourActions =
  | ClearSelectedTour
  | DeleteFavouriteTourSuccess
  | AddFavouriteTourSuccess
  | FetchToursSuccess
  | FetchTourSuccess
  | UpdateTourFail
  | UpdateTourStart
  | UpdateTourSuccess
  | CheckFavouriteTourSuccess
  | FetchExhibitsTourSuccess
  | FetchToursStart
  | FetchTourStart;
