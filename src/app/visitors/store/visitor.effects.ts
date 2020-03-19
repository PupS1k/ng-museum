import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {Visitor} from '../models/visitor.model';
import {
  CREATE_VISITOR_START,
  CreateVisitorStart,
  CreateVisitorSuccess,
  DELETE_VISITOR_START,
  DeleteVisitorStart,
  DeleteVisitorSuccess,
  FETCH_VISITOR_START,
  FETCH_VISITORS_START,
  FetchVisitorsSuccess,
  FetchVisitorStart,
  FetchVisitorSuccess,
  UPDATE_VISITOR_START,
  UpdateVisitorStart,
  UpdateVisitorSuccess
} from './visitor.actions';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {AppState} from '../../app.reducer';
import {selectFavouriteTours, selectUserId} from '../../profile/store/profile.selectors';
import {selectVisitorId} from './visitor.selectors';
import {VisitorForm} from '../models/visitor-form.model';
import {ApiVisitorsService} from '../services/api-visitors.service';


@Injectable()
export class VisitorEffects {
  @Effect()
  fetchVisitors = this.actions$.pipe(
    ofType(FETCH_VISITORS_START),
    switchMap(() => this.apiVisitorService.getVisitors()
      .pipe(
        map((visitors: Visitor[]) => new FetchVisitorsSuccess(visitors)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchVisitor = this.actions$.pipe(
    ofType<FetchVisitorStart>(FETCH_VISITOR_START),
    map(action => action.payload),
    switchMap(visitorId => this.apiVisitorService.getVisitor(visitorId)
      .pipe(
        map((visitor: Visitor) => new FetchVisitorSuccess(visitor)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      ))
  );

  @Effect()
  updateVisitor = this.actions$.pipe(
    ofType<UpdateVisitorStart>(UPDATE_VISITOR_START),
    map(action => action.payload),
    withLatestFrom(this.store),
    switchMap(([updatingVisitor, state]: [VisitorForm, AppState]) => this.apiVisitorService
      .updateVisitor(updatingVisitor, selectVisitorId(state) || selectUserId(state), selectFavouriteTours(state))
      .pipe(
        map((visitor: Visitor) => new UpdateVisitorSuccess(visitor)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      ))
  );

  @Effect()
  deleteVisitor = this.actions$.pipe(
    ofType<DeleteVisitorStart>(DELETE_VISITOR_START),
    map(action => action.payload),
    switchMap(visitor => this.apiVisitorService.deleteVisitor(visitor)
      .pipe(
        map(() => new DeleteVisitorSuccess(visitor.visitorId)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      )
    )
  );

  @Effect()
  createVisitor = this.actions$.pipe(
    ofType<CreateVisitorStart>(CREATE_VISITOR_START),
    map(action => action.payload),
    switchMap(newVisitor => this.apiVisitorService.createVisitor(newVisitor)
      .pipe(
        map((visitor: Visitor) => new CreateVisitorSuccess(visitor)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiVisitorService: ApiVisitorsService,
    private store: Store<AppState>
  ) {
  }
}
