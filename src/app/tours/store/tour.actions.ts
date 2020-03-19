import {Action} from '@ngrx/store';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';
import {TourForm} from '../models/tour-form.model';


export const FETCH_TOURS_SUCCESS = '[Tour] Fetch Tours Success';
export const FETCH_TOURS_START = '[Tour] Fetch Tours Start';
export const DELETE_EXHIBIT_TOUR_SUCCESS = '[Tour] Delete Exhibit Tour Success';
export const DELETE_EXHIBIT_TOUR_START = '[Tour] Delete Exhibit Tour Start';
export const DELETE_GUIDE_TOUR_SUCCESS = '[Tour] Delete Guide Tour Success';
export const DELETE_GUIDE_TOUR_START = '[Tour] Delete Guide Tour Start';
export const DELETE_VISITOR_TOUR_SUCCESS = '[Tour] Delete Visitor Tour Success';
export const DELETE_VISITOR_TOUR_START = '[Tour] Delete Visitor Tour Start';
export const FETCH_EXHIBITS_TOUR_SUCCESS = '[Tour] Fetch Exhibits Tour Success';
export const FETCH_EXHIBITS_TOUR_START = '[Tour] Fetch Exhibits Tour Start';
export const FETCH_GUIDE_TOUR_SUCCESS = '[Tour] Fetch Guide Tour Success';
export const FETCH_GUIDE_TOUR_START = '[Tour] Fetch Guide Tour Start';
export const FETCH_VISITORS_TOUR_SUCCESS = '[Tour] Fetch Visitors Tour Success';
export const FETCH_VISITORS_TOUR_START = '[Tour] Fetch Visitors Tour Start';
export const CLEAR_SELECTED_TOUR = '[Tour] Clear Selected Tour';
export const FETCH_TOUR_START = '[Tour] Fetch Tour Start';
export const FETCH_TOUR_SUCCESS = '[Tour] Fetch Tour Success';
export const FETCH_DATA_TOUR_START = '[Tour] Fetch Data Tour Start';
export const FETCH_DATA_TOUR_SUCCESS = '[Tour] Fetch Data Tour Success';
export const UPDATE_TOUR_START = '[Tour] Update Tour Start';
export const UPDATE_TOUR_SUCCESS = '[Tour] Update Tour Success';
export const CHECK_FAVOURITE_TOUR_SUCCESS = '[Tour] Check Favourite Tour Success';
export const CHECK_FAVOURITE_TOUR_START = '[Tour] Check Favourite Tour Start';
export const TOGGLE_FAVOURITE_TOUR = '[Tour] Toggle Favourite Tour';
export const DELETE_FAVOURITE_TOUR_START = '[Tour]  Delete Favourite Tour Start';
export const ADD_FAVOURITE_TOUR_START = '[Tour]  Add Favourite Tour Start';

export class ToggleFavouriteTour implements Action {
  readonly type = TOGGLE_FAVOURITE_TOUR;
}

export class ClearSelectedTour implements Action {
  readonly type = CLEAR_SELECTED_TOUR;
}

export class DeleteExhibitTourStart implements Action {
  readonly type = DELETE_EXHIBIT_TOUR_START;
  constructor(public payload: Exhibit['exhibitId']) {}
}

export class DeleteExhibitTourSuccess implements Action {
  readonly type = DELETE_EXHIBIT_TOUR_SUCCESS;
  constructor(public payload: Exhibit['exhibitId']) {}
}

export class DeleteGuideTourStart implements Action {
  readonly type = DELETE_GUIDE_TOUR_START;
  constructor(public payload: Guide['guideId']) {}
}

export class DeleteGuideTourSuccess implements Action {
  readonly type = DELETE_GUIDE_TOUR_SUCCESS;
}

export class DeleteVisitorTourStart implements Action {
  readonly type = DELETE_VISITOR_TOUR_START;
  constructor(public payload: Visitor['visitorId']) {}
}

export class DeleteVisitorTourSuccess implements Action {
  readonly type = DELETE_VISITOR_TOUR_SUCCESS;
  constructor(public payload: Visitor['visitorId']) {}
}

export class DeleteFavouriteTourStart implements Action {
  readonly type = DELETE_FAVOURITE_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class AddFavouriteTourStart implements Action {
  readonly type = ADD_FAVOURITE_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class CheckFavouriteTourSuccess implements Action {
  readonly type = CHECK_FAVOURITE_TOUR_SUCCESS;
  constructor(public payload: boolean) {}
}

export class CheckFavouriteTourStart implements Action {
  readonly type = CHECK_FAVOURITE_TOUR_START;
  constructor(public payload: {tourId: Tour['tourId'], visitorId: Visitor['visitorId']}) {}
}

export class FetchExhibitsTourSuccess implements Action {
  readonly type = FETCH_EXHIBITS_TOUR_SUCCESS;
  constructor(public payload: Exhibit[]) {}
}

export class FetchExhibitsTourStart implements Action {
  readonly type = FETCH_EXHIBITS_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class FetchGuideTourSuccess implements Action {
  readonly type = FETCH_GUIDE_TOUR_SUCCESS;
  constructor(public payload: Guide) {}
}

export class FetchGuideTourStart implements Action {
  readonly type = FETCH_GUIDE_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class FetchVisitorsTourSuccess implements Action {
  readonly type = FETCH_VISITORS_TOUR_SUCCESS;
  constructor(public payload: Visitor[]) {}
}

export class FetchVisitorsTourStart implements Action {
  readonly type = FETCH_VISITORS_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class FetchToursSuccess implements Action {
  readonly type = FETCH_TOURS_SUCCESS;
  constructor(public payload: Tour[]) {}
}

export class FetchToursStart implements Action {
  readonly type = FETCH_TOURS_START;
}

export class FetchDataTourSuccess implements Action {
  readonly type = FETCH_DATA_TOUR_SUCCESS;
}

export class FetchDataTourStart implements Action {
  readonly type = FETCH_DATA_TOUR_START;
  constructor(public payload: Tour) {}
}

export class FetchTourSuccess implements Action {
  readonly type = FETCH_TOUR_SUCCESS;
  constructor(public payload: Tour) {}
}

export class FetchTourStart implements Action {
  readonly type = FETCH_TOUR_START;
  constructor(public payload: Tour['tourId']) {}
}

export class UpdateTourStart implements Action {
  readonly type = UPDATE_TOUR_START;
  constructor(public payload: TourForm) {}
}

export class UpdateTourSuccess implements Action {
  readonly type = UPDATE_TOUR_SUCCESS;
  constructor(public payload: Tour) {}
}

export type TourActions =
  | FetchVisitorsTourSuccess
  | FetchGuideTourSuccess
  | ClearSelectedTour
  | ToggleFavouriteTour
  | FetchToursSuccess
  | FetchTourSuccess
  | UpdateTourSuccess
  | CheckFavouriteTourSuccess
  | FetchExhibitsTourSuccess
  | DeleteGuideTourSuccess
  | DeleteVisitorTourSuccess
  | DeleteExhibitTourSuccess;
