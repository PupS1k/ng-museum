import {Action} from '@ngrx/store';

export const SHOW_SPINNER = '[Layout] Show Spinner';
export const HIDE_SPINNER = '[Layout] Hide Spinner';
export const SHOW_MESSAGE = '[Layout] Show Message';
export const HIDE_MESSAGE = '[Layout] Hide Message';

export class ShowSpinner implements Action {
  readonly type = SHOW_SPINNER;
}

export class HideSpinner implements Action {
  readonly type = HIDE_SPINNER;
}

export class ShowMessage implements Action {
  readonly type = SHOW_MESSAGE;
  constructor(public payload: {module: string, message: string}) {
  }
}

export class HideMessage implements Action {
  readonly type = HIDE_MESSAGE;
}

export type LayoutActions =
  | ShowSpinner
  | ShowMessage
  | HideMessage
  | HideSpinner;
