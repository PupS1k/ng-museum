import {Action} from '@ngrx/store';

export const SHOW_SPINNER = '[Layout] Show Spinner';
export const HIDE_SPINNER = '[Layout] Hide Spinner';
export const CATCH_MESSAGE_ALERT = '[Layout] Catch Message Alert';
export const CLOSE_MESSAGE_ALERT = '[Layout] Close Message Alert';

export class ShowSpinner implements Action {
  readonly type = SHOW_SPINNER;
}

export class HideSpinner implements Action {
  readonly type = HIDE_SPINNER;
}

export class ShowMessage implements Action {
  readonly type = CATCH_MESSAGE_ALERT;
  constructor(public payload: {module: string, message: string}) {
  }
}

export class HideMessage implements Action {
  readonly type = CLOSE_MESSAGE_ALERT;
}

export type LayoutActions =
  | ShowSpinner
  | ShowMessage
  | HideMessage
  | HideSpinner;
